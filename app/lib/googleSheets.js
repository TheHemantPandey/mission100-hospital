import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// 1. Grab the Base64 key string from Hostinger's environment variables
const base64Key = process.env.GOOGLE_PRIVATE_KEY?.trim() || '';

// 2. Safely unpack the Base64 string back into a real Google private key
const formattedPrivateKey = base64Key.includes('-----BEGIN PRIVATE KEY-----')
  ? base64Key.replace(/"/g, '').replace(/\\n/g, '\n')
  : Buffer.from(base64Key, 'base64').toString('utf8');

// 3. Connect to Google Sheets using the cleanly decoded key
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.trim(),
  key: formattedPrivateKey, 
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Create an instance of the document helper
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID.trim(), serviceAccountAuth);

// Helper function to connect to the sheet and get access to tabs
async function getSheetTabs() {
  await doc.loadInfo(); // Loads document properties and worksheets
  
  const bookingsSheet = doc.sheetsByTitle['Bookings'];
  const referralsSheet = doc.sheetsByTitle['Referrals'];
  
  if (!bookingsSheet || !referralsSheet) {
    throw new Error("Make sure your sheet tabs are named exactly 'Bookings' and 'Referrals'!");
  }
  
  return { bookingsSheet, referralsSheet };
}

// 1. Function to check if a referral code is valid
export async function validateReferral(codeStr) {
  const { referralsSheet } = await getSheetTabs();
  const rows = await referralsSheet.getRows();
  
  // Find matching code (case-insensitive)
  const codeRow = rows.find(row => row.get('Code')?.trim().toLowerCase() === codeStr.trim().toLowerCase());
  
  if (!codeRow) {
    return { valid: false, message: "Invalid code" };
  }
  
  const discountAmount = parseFloat(codeRow.get('Discount Amount') || 0);
  const maxUses = parseInt(codeRow.get('Max Uses') || 0);
  const currentUses = parseInt(codeRow.get('Current Uses') || 0);
  
  if (currentUses >= maxUses) {
    return { valid: false, message: "This referral code has expired!" };
  }
  
  return { valid: true, discountAmount };
}

// 2. Function to save a pending booking row
export async function addPendingBooking(bookingData) {
  const { bookingsSheet } = await getSheetTabs();
  
  const newRow = await bookingsSheet.addRow({
    Date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    'First Name': bookingData.firstName,
    'Last Name': bookingData.lastName,
    Age: bookingData.age,
    Gender: bookingData.gender,
    Contact: bookingData.contactNo,
    'Test Name': bookingData.testName,
    'Date Selected': bookingData.appointmentDate,
    'Time Selected': bookingData.appointmentTime,
    Address: `${bookingData.houseNo}, ${bookingData.street}, ${bookingData.city}, ${bookingData.state} - ${bookingData.pinCode}`,
    Price: bookingData.price,
    'Payment Status': bookingData.status,
    'Order ID': bookingData.orderId || 'N/A',
    'Referral Code Used': bookingData.referralCode || 'None' // Tracks referral codes securely
  });
  
  return newRow;
}

// 3. Function to mark booking as paid
export async function markBookingAsPaid(orderId, referralCodeUsed) {
    const { bookingsSheet, referralsSheet } = await getSheetTabs();
    
    // Find the pending booking and mark it Paid
    const bookingRows = await bookingsSheet.getRows();
    const targetRow = bookingRows.find(row => row.get('Order ID') === orderId);
    
    if (targetRow) {
        targetRow.set('Payment Status', 'Paid - Success');
        await targetRow.save();
    }

    // If they used a referral code, increase its usage count by 1
    if (referralCodeUsed) {
        const refRows = await referralsSheet.getRows();
        const codeRow = refRows.find(row => row.get('Code')?.trim().toLowerCase() === referralCodeUsed.trim().toLowerCase());
        
        if (codeRow) {
            const currentUses = parseInt(codeRow.get('Current Uses') || 0);
            codeRow.set('Current Uses', currentUses + 1);
            await codeRow.save();
        }
    }
}