import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

// 1. Grab the Base64 key string from Hostinger's environment variables
const base64Key = process.env.GOOGLE_PRIVATE_KEY?.trim() || '';

// 2. Decode from Base64 if needed, and MANDATORILY replace literal \n with real line breaks
const rawKey = base64Key.includes('-----BEGIN PRIVATE KEY-----')
  ? base64Key
  : Buffer.from(base64Key, 'base64').toString('utf8');

const formattedPrivateKey = rawKey.replace(/"/g, '').replace(/\\n/g, '\n').trim();

// 3. Connect to Google Sheets using the cleanly decoded key
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.trim(),
  key: formattedPrivateKey, 
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Create an instance of the document helper
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID.trim(), serviceAccountAuth);

// Initialize Nodemailer Transporter using your environment details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper function to connect to the sheet and get access to tabs
async function getSheetTabs() {
  await doc.loadInfo(); 
  
  const bookingsSheet = doc.sheetsByTitle['Bookings'];
  const referralsSheet = doc.sheetsByTitle['Referrals'];
  const membershipSheet = doc.sheetsByTitle['Memberhsip'];
  
  if (!bookingsSheet || !referralsSheet || !membershipSheet) {
    throw new Error("Make sure your sheet tabs are named exactly 'Bookings', 'Referrals', and 'Memberhsip'!");
  }
  
  return { bookingsSheet, referralsSheet, membershipSheet };
}

// Helper email sender function
async function sendMembershipEmail(email, firstName, lastName, planName, finalPrice, appDate, appTime) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `🚑 Membership Activated: Welcome to Mission 100 Hospital!`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
        <h2 style="color: #16a34a; text-align: center;">Mission 100 Hospital</h2>
        <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
        <p>Thank you for subscribing to our <strong>${planName}</strong> package! Your payment has been verified successfully and your premium health benefits are live.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <h3>💳 Subscription Summary</h3>
        <p><strong>Plan Package:</strong> ${planName}</p>
        <p><strong>Amount Paid:</strong> ₹${finalPrice}</p>
        <p><strong>Pre-activation Checkup Slot:</strong> ${appDate} (${appTime})</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #64748b;">Your health reports, diagnostics tracking, and official invoice records will be shared directly to this email address.</p>
        <p style="text-align: center; margin-top: 30px; font-weight: bold; color: #16a34a;">Stay Healthy, Stay Mission 100 Safe!</p>
      </div>
    `
  };
  await transporter.sendMail(mailOptions);
}

// 1. Function to check if a referral code is valid FOR A SPECIFIC TEST
export async function validateReferral(codeStr, testNameFromUser) {
  const { referralsSheet } = await getSheetTabs();
  const rows = await referralsSheet.getRows();
  
  if (!codeStr) {
    return { valid: false, message: "No code provided" };
  }

  const codeRow = rows.find(row => row.get('Code')?.trim().toLowerCase() === codeStr.trim().toLowerCase());
  
  if (!codeRow) {
    return { valid: false, message: "Invalid code" };
  }

  const applicableTest = codeRow.get('Applicable Test')?.trim() || 'All';
  
  // SAFE GUARD: Safe string conversion fallback to prevent undefined or null .trim() exceptions
  const safeUserTestName = (testNameFromUser || '').toString().trim().toLowerCase();
  
  if (applicableTest.toLowerCase() !== 'all' && applicableTest.toLowerCase() !== safeUserTestName) {
    return { 
      valid: false, 
      message: `This coupon is only valid for the "${applicableTest}" test.` 
    };
  }
  
  const maxUses = parseInt(codeRow.get('Max Uses') || 0);
  const currentUses = parseInt(codeRow.get('Current Uses') || 0);
  
  if (currentUses >= maxUses) {
    return { valid: false, message: "This referral code has expired!" };
  }
  
  // --- PERSISTENT CHECK: DYNAMIC % OR FLAT VALUE LOOKUP ---
  const rawDiscountStr = (codeRow.get('Discount Amount') || '0').toString().trim();
  
  if (rawDiscountStr.includes('%')) {
    const percentageValue = parseFloat(rawDiscountStr.replace('%', '') || 0);
    return { valid: true, isPercentage: true, percentageValue };
  } else {
    const flatDiscountAmount = parseFloat(rawDiscountStr || 0);
    return { valid: true, isPercentage: false, discountAmount: flatDiscountAmount };
  }
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
    'Referral Code Used': bookingData.referralCode || 'None' 
  });
  
  return newRow;
}

// 3. Function to mark booking as paid
export async function markBookingAsPaid(orderId, referralCodeUsed) {
    const { bookingsSheet, referralsSheet } = await getSheetTabs();
    
    const bookingRows = await bookingsSheet.getRows();
    const targetRow = bookingRows.find(row => row.get('Order ID') === orderId);
    
    if (targetRow) {
        targetRow.set('Payment Status', 'Paid - Success');
        await targetRow.save();
    }

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

// 4. Function to add a pending row into the "Memberhsip" tab
export async function addPendingMembership(data) {
  const { membershipSheet } = await getSheetTabs();

  const newRow = await membershipSheet.addRow({
    'Order ID': data.orderId || 'N/A',
    Date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    'First Name': data.firstName,
    'Last Name': data.lastName,
    Email: data.email,
    DOB: data.dob,
    Gender: data.gender,
    Contact: data.contactNo,
    'Blood Group': data.bloodGroup || 'Not Specified',
    'Plan Name': data.planName,
    'Emergency Name': data.emergencyName,
    'Emergency Contact': data.emergencyContactNo,
    'Emergency Relationship': data.emergencyRelationship,
    'Medical Conditions': data.medicalConditions || 'None',
    'Check Date': data.appointmentDate,
    'Check Time Slot': data.appointmentTime,
    Address: `${data.houseNo}, ${data.street}, ${data.city}, ${data.state}`,
    Pincode: data.pinCode,
    'Original Price': data.originalPrice,
    'Referral Applied': data.referralCode !== 'None' ? 'Yes' : 'No',
    'Discount Amount': data.discountAmount,
    'Final Price': data.finalPrice,
    'Payment Status': data.status
  });

  if (data.status.includes('Confirmed') || data.status.includes('Free')) {
    await sendMembershipEmail(
      data.email, data.firstName, data.lastName, data.planName, 
      data.finalPrice, data.appointmentDate, data.appointmentTime
    );
  }

  return newRow;
}

// 5. Function to mark specific membership layout as paid and send out email
export async function confirmMembershipPayment(orderId, referralCodeUsed) {
  const { membershipSheet, referralsSheet } = await getSheetTabs();
  
  const rows = await membershipSheet.getRows();
  const targetRow = rows.find(row => row.get('Order ID') === orderId);

  if (targetRow) {
    targetRow.set('Payment Status', 'Paid - Confirmed');
    await targetRow.save();

    await sendMembershipEmail(
      targetRow.get('Email'),
      targetRow.get('First Name'),
      targetRow.get('Last Name'),
      targetRow.get('Plan Name'),
      targetRow.get('Final Price'),
      targetRow.get('Check Date'),
      targetRow.get('Check Time Slot')
    );
  }

  if (referralCodeUsed && referralCodeUsed.toLowerCase() !== 'none') {
    const refRows = await referralsSheet.getRows();
    const codeRow = refRows.find(row => row.get('Code')?.trim().toLowerCase() === referralCodeUsed.trim().toLowerCase());
    
    if (codeRow) {
      const currentUses = parseInt(codeRow.get('Current Uses') || 0);
      codeRow.set('Current Uses', currentUses + 1);
      await codeRow.save();
    }
  }
}