import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import { generateIndividualReceiptPdf, generateMembershipCardPdf } from './pdfHelper';
import { plans } from '../individual-membership-plans/plansData';

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
async function sendMembershipEmail(
  email, firstName, lastName, planName, finalPrice, appDate, appTime,
  paymentId = null, contactNo = '', address = '', orderId = '', cardId = 'IND-01'
) {
  let attachments = [];
  
  // Find plan details to list its features in the PDF receipt
  const cleanPlanName = planName.trim().toLowerCase();
  const planEntry = Object.values(plans).find(p => 
    p.name.toLowerCase() === cleanPlanName || 
    p.id.toLowerCase() === cleanPlanName ||
    cleanPlanName.includes(p.name.toLowerCase()) ||
    cleanPlanName.includes(p.id.toLowerCase())
  );
  const features = planEntry ? planEntry.features : [];

  try {
    const pdfBuffer = await generateIndividualReceiptPdf({
      firstName,
      lastName,
      email,
      planName,
      finalPrice,
      appointmentDate: appDate,
      appointmentTime: appTime,
      paymentId: paymentId || 'FREE_TIER',
      contactNo: contactNo || 'N/A',
      address: address || 'N/A',
      orderId: orderId || 'N/A',
      features
    });

    attachments.push({
      filename: `Receipt_${firstName}_${lastName}.pdf`,
      content: pdfBuffer
    });
  } catch (pdfErr) {
    console.error("Individual membership PDF receipt generation error: ", pdfErr);
  }

  // Determine card theme and badge based on planName
  let cardTheme = 'slate';
  let cardBadge = 'FREE MEMBER';

  if (cleanPlanName.includes('silver')) {
    cardTheme = 'silver';
    cardBadge = 'SILVER MEMBER';
  } else if (cleanPlanName.includes('gold')) {
    cardTheme = 'gold';
    cardBadge = 'GOLD MEMBER';
  } else if (cleanPlanName.includes('platinum')) {
    cardTheme = 'platinum';
    cardBadge = 'PLATINUM MEMBER';
  } else if (cleanPlanName.includes('pro') || cleanPlanName.includes('fitness')) {
    cardTheme = 'emerald';
    cardBadge = 'PRO FITNESS';
  }

  // Generate dynamic Premium Membership Card PDF Front Side
  try {
    const cardBuffer = await generateMembershipCardPdf({
      type: 'Individual',
      badge: cardBadge,
      theme: cardTheme,
      cardId: cardId,
      memberName: `${firstName} ${lastName}`
    });

    attachments.push({
      filename: `Membership_Card_${firstName}_${lastName}.pdf`,
      content: cardBuffer
    });
  } catch (cardErr) {
    console.error("Individual membership card PDF generation error: ", cardErr);
  }

  // Inline HTML Card representation
  const getHtmlCardStyle = (theme) => {
    if (theme === 'gold') {
      return {
        bg: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
        border: '1px solid rgba(120,53,15,0.25)',
        textColor: '#0f172a',
        labelColor: '#78350f',
        badgeBg: '#0f172a',
        badgeText: '#fcf6ba',
        chipGold: false
      };
    }
    if (theme === 'silver') {
      return {
        bg: 'linear-gradient(135deg, #cbd5e1, #f1f5f9, #94a3b8, #e2e8f0)',
        border: '1px solid rgba(71,85,105,0.2)',
        textColor: '#0f172a',
        labelColor: '#475569',
        badgeBg: '#0f172a',
        badgeText: '#f1f5f9',
        chipGold: true
      };
    }
    if (theme === 'platinum') {
      return {
        bg: 'linear-gradient(135deg, #1e293b, #0f172a, #020617)',
        border: '1px solid rgba(255,255,255,0.1)',
        textColor: '#f8fafc',
        labelColor: '#94a3b8',
        badgeBg: '#e2e8f0',
        badgeText: '#0f172a',
        chipGold: true
      };
    }
    if (theme === 'emerald') {
      return {
        bg: 'linear-gradient(135deg, #0d9488, #10b981, #064e3b)',
        border: '1px solid rgba(255,255,255,0.15)',
        textColor: '#ffffff',
        labelColor: '#a7f3d0',
        badgeBg: '#ffffff',
        badgeText: '#064e3b',
        chipGold: false
      };
    }
    return {
      bg: 'linear-gradient(135deg, #475569, #1e293b)',
      border: '1px solid rgba(255,255,255,0.1)',
      textColor: '#ffffff',
      labelColor: '#cbd5e1',
      badgeBg: '#f1f5f9',
      badgeText: '#1e293b',
      chipGold: true
    };
  };

  const today = new Date();
  const expMonth = String(today.getMonth() + 1).padStart(2, '0');
  const expYear = today.getFullYear() + 1;
  const validThru = `${expMonth}/${expYear}`;

  const cardStyle = getHtmlCardStyle(cardTheme);
  const emvChipSvg = `
    <svg width="32" height="24" viewBox="0 0 32 24" style="border-radius: 3px; border: 0.5px solid ${cardStyle.chipGold ? '#aa7c11' : '#475569'}; background: ${cardStyle.chipGold ? 'linear-gradient(135deg, #fff3c4, #d4af37, #f3e5ab, #aa7c11)' : 'linear-gradient(135deg, #f8fafc, #cbd5e1, #e2e8f0, #64748b)'};">
      <line x1="0" y1="12" x2="32" y2="12" stroke="${cardStyle.chipGold ? 'rgba(120,53,15,0.3)' : 'rgba(51,65,85,0.3)'}" stroke-width="0.75" />
      <line x1="16" y1="0" x2="16" y2="24" stroke="${cardStyle.chipGold ? 'rgba(120,53,15,0.3)' : 'rgba(51,65,85,0.3)'}" stroke-width="0.75" />
      <rect x="3" y="3" width="26" height="18" fill="none" stroke="${cardStyle.chipGold ? 'rgba(120,53,15,0.3)' : 'rgba(51,65,85,0.3)'}" stroke-width="0.75" rx="1" />
    </svg>
  `;

  const htmlCardMarkup = `
    <div style="margin: 20px auto; text-align: center; max-width: 340px;">
      <div style="width: 340px; height: 215px; border-radius: 16px; background: ${cardStyle.bg}; color: ${cardStyle.textColor}; padding: 20px; box-sizing: border-box; border: ${cardStyle.border}; margin: 0 auto; position: relative; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <!-- Card Header -->
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="font-size: 14px; font-weight: bold; letter-spacing: 0.5px; color: ${cardStyle.textColor}; line-height: 1.15;">
              MISSION 100 <span style="color: #10b981;">HOSPITAL</span>
              <div style="font-size: 7.5px; font-style: italic; color: ${cardStyle.labelColor}; font-weight: normal; margin-top: 2px;">"Live Longer, Live Better"</div>
            </td>
            <td style="text-align: right; vertical-align: top;">
              <span style="background-color: ${cardStyle.badgeBg}; color: ${cardStyle.badgeText}; font-size: 7px; font-weight: bold; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${cardBadge}</span>
            </td>
          </tr>
        </table>
        
        <!-- Chip -->
        <div style="margin-top: 15px;">
          ${emvChipSvg}
        </div>
        
        <!-- Member Details -->
        <div style="margin-top: 15px;">
          <span style="font-size: 7px; color: ${cardStyle.labelColor}; display: block; letter-spacing: 0.5px; text-transform: uppercase; font-weight: bold;">Membership ID</span>
          <span style="font-size: 16px; font-weight: bold; color: ${cardStyle.textColor}; letter-spacing: 1px;">${cardId}</span>
        </div>
        
        <!-- Bottom section -->
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td>
              <span style="font-size: 7px; color: ${cardStyle.labelColor}; display: block; letter-spacing: 0.5px; text-transform: uppercase; font-weight: bold;">Card Holder</span>
              <span style="font-size: 12px; font-weight: bold; letter-spacing: 0.5px; color: ${cardStyle.textColor};">${(firstName + ' ' + lastName).toUpperCase()}</span>
            </td>
            <td style="text-align: right; width: 80px; vertical-align: top;">
              <span style="font-size: 7px; color: ${cardStyle.labelColor}; display: block; letter-spacing: 0.5px; text-transform: uppercase; font-weight: bold;">Valid Thru</span>
              <span style="font-size: 11px; font-weight: bold;">${validThru}</span>
            </td>
          </tr>
        </table>
        
        <!-- Subtle overlay indicators -->
        <div style="position: absolute; left: 20px; bottom: 8px; font-size: 8px; font-weight: bold; opacity: 0.4; color: ${cardStyle.labelColor};">INDIVIDUAL CARE</div>
        <div style="position: absolute; right: 20px; bottom: 8px; font-size: 8.5px; font-weight: bold; opacity: 0.6; color: ${cardStyle.labelColor}; font-family: sans-serif;">www.mission100hospital.com</div>
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `🚑 Membership Activated: Welcome to Mission 100 Hospital!`,
    attachments: attachments,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px;">
        <h2 style="color: #16a34a; text-align: center;">Mission 100 Hospital</h2>
        <p>Dear <strong>${firstName} ${lastName}</strong>,</p>
        <p>Thank you for subscribing to our <strong>${planName}</strong> package! Your membership has been activated successfully and your health benefits are live.</p>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <h3 style="color: #334155; text-align: center;">💳 Membership Card</h3>
        
        ${htmlCardMarkup}
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <h3>💳 Subscription Summary</h3>
        <p><strong>Plan Package:</strong> ${planName}</p>
        <p><strong>Amount Paid:</strong> ₹${finalPrice}</p>
        <p><strong>Pre-activation Checkup Slot:</strong> ${appDate} (${appTime})</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #64748b;">Your health reports, diagnostics tracking, your invoice, and your premium membership card are attached to this email.</p>
        <p style="text-align: center; margin-top: 30px; font-weight: bold; color: #16a34a;">Stay Healthy, Stay Mission 100 Safe!</p>
      </div>
    `
  };
  await transporter.sendMail(mailOptions);
}

// Helper to send membership subscription details to Admin
async function sendAdminMembershipNotification(data) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mission100hospital@gmail.com, hement.pandey2121@gmail.com',
    subject: `🚨 NEW Membership Registration: ${data.planName} - ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Membership Registration</p>
        </div>
        
        <div style="padding: 25px;">
          <div style="margin-top: 10px;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Subscription Details</h3>
            <p><strong>Membership Plan:</strong> ${data.planName}</p>
            <p><strong>Amount Paid:</strong> ₹${data.finalPrice}</p>
            <p><strong>Order ID:</strong> ${data.orderId || 'N/A'}</p>
            <p><strong>Status:</strong> ${data.status}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Subscriber Personal Info</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 150px;">Full Name:</td><td style="padding: 6px 0; font-weight: bold;">${data.firstName} ${data.lastName}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Email Address:</td><td style="padding: 6px 0; font-weight: bold;">${data.email}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Contact Number:</td><td style="padding: 6px 0; font-weight: bold;">${data.contactNo}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Date of Birth:</td><td style="padding: 6px 0; font-weight: bold;">${data.dob}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Gender:</td><td style="padding: 6px 0; font-weight: bold;">${data.gender}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Blood Group:</td><td style="padding: 6px 0; font-weight: bold;">${data.bloodGroup || 'Not Specified'}</td></tr>
            </table>
          </div>

          <div style="margin-top: 20px; background-color: #f0fdf4; padding: 15px; border-radius: 8px;">
            <h3 style="color: #16a34a; margin-top: 0;">Pre-activation Checkup Slot</h3>
            <p><strong>Preferred Date:</strong> ${data.appointmentDate}</p>
            <p><strong>Preferred Time Slot:</strong> ${data.appointmentTime}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Emergency Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 150px;">Contact Name:</td><td style="padding: 6px 0; font-weight: bold;">${data.emergencyName}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Contact Number:</td><td style="padding: 6px 0; font-weight: bold;">${data.emergencyContactNo}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Relationship:</td><td style="padding: 6px 0; font-weight: bold;">${data.emergencyRelationship}</td></tr>
            </table>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Medical Conditions</h3>
            <p style="padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; margin: 5px 0 0 0;">
              ${data.medicalConditions || 'None'}
            </p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Physical Address</h3>
            ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : `<p><strong>Address:</strong> ${data.houseNo}, ${data.street}</p>`}
            ${data.landmark ? `<p><strong>Landmark:</strong> ${data.landmark}</p>` : ''}
            <p><strong>Pincode:</strong> ${data.pinCode || data.pincode}</p>
          </div>
        </div>

        <footer style="margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding: 15px; background-color: #f8fafc;">
          This enquiry was sent from the Mission 100 Hospital Membership registration system.
        </footer>
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
    Address: `${data.houseNo}, ${data.street}${data.landmark ? ', ' + data.landmark : ''}, ${data.city}, ${data.state}`,
    Pincode: data.pinCode,
    'Original Price': data.originalPrice,
    'Referral Applied': data.referralCode !== 'None' ? 'Yes' : 'No',
    'Discount Amount': data.discountAmount,
    'Final Price': data.finalPrice,
    'Payment Status': data.status
  });

  if (data.status.includes('Confirmed') || data.status.includes('Free')) {
    const fullAddress = `${data.houseNo}, ${data.street}${data.landmark ? ', ' + data.landmark : ''}, ${data.city}, ${data.state} - ${data.pinCode}`;
    const rows = await membershipSheet.getRows();
    const sequenceNum = rows.length; // because the new row was already added
    const cardId = `IND-${String(sequenceNum).padStart(2, '0')}`;

    await sendMembershipEmail(
      data.email, data.firstName, data.lastName, data.planName, 
      data.finalPrice, data.appointmentDate, data.appointmentTime,
      data.paymentId || 'FREE_TIER',
      data.contactNo,
      fullAddress,
      data.orderId,
      cardId
    );
  }

  if (data.planSlug === 'free-plan' || data.planName === 'Free Employee Plan') {
    try {
      await sendAdminMembershipNotification(data);
    } catch (err) {
      console.error("Failed to send admin membership notification email: ", err);
    }
  }

  return newRow;
}

// 5. Function to mark specific membership layout as paid and send out email
export async function confirmMembershipPayment(orderId, referralCodeUsed, paymentId) {
  const { membershipSheet, referralsSheet } = await getSheetTabs();

  const rows = await membershipSheet.getRows();
  const targetRowIndex = rows.findIndex(row => row.get('Order ID') === orderId);
  const targetRow = rows[targetRowIndex];

  if (targetRow) {
    targetRow.set('Payment Status', 'Paid - Confirmed');
    await targetRow.save();

    const sequenceNum = targetRowIndex !== -1 ? (targetRowIndex + 1) : (rows.length + 1);
    const cardId = `IND-${String(sequenceNum).padStart(2, '0')}`;

    await sendMembershipEmail(
      targetRow.get('Email'),
      targetRow.get('First Name'),
      targetRow.get('Last Name'),
      targetRow.get('Plan Name'),
      targetRow.get('Final Price'),
      targetRow.get('Check Date'),
      targetRow.get('Check Time Slot'),
      paymentId,
      targetRow.get('Contact'),
      targetRow.get('Address') + (targetRow.get('Pincode') ? `, ${targetRow.get('Pincode')}` : ''),
      orderId,
      cardId
    );

    try {
      await sendAdminMembershipNotification({
        firstName: targetRow.get('First Name'),
        lastName: targetRow.get('Last Name'),
        email: targetRow.get('Email'),
        dob: targetRow.get('DOB'),
        gender: targetRow.get('Gender'),
        contactNo: targetRow.get('Contact'),
        bloodGroup: targetRow.get('Blood Group'),
        planName: targetRow.get('Plan Name'),
        emergencyName: targetRow.get('Emergency Name'),
        emergencyContactNo: targetRow.get('Emergency Contact'),
        emergencyRelationship: targetRow.get('Emergency Relationship'),
        medicalConditions: targetRow.get('Medical Conditions'),
        appointmentDate: targetRow.get('Check Date'),
        appointmentTime: targetRow.get('Check Time Slot'),
        address: targetRow.get('Address'),
        pinCode: targetRow.get('Pincode'),
        finalPrice: targetRow.get('Final Price'),
        originalPrice: targetRow.get('Original Price'),
        referralCode: targetRow.get('Referral Applied') === 'Yes' ? 'Applied' : 'None',
        discountAmount: targetRow.get('Discount Amount'),
        orderId: targetRow.get('Order ID'),
        status: 'Paid - Confirmed'
      });
    } catch (err) {
      console.error("Failed to send admin paid membership email:", err);
    }
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