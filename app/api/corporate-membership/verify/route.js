import { NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import { generateReceiptPdf } from '../../../lib/pdfHelper';

const planDetailsMap = {
  "free-plan": { name: "Free Wellness Starter", price: 0 },
  "silver-plan": { name: "Silver Corporate Care", price: 999 },
  "gold-plan": { name: "Gold Corporate Care", price: 1999 }
};

// Initialize Nodemailer Transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      isFree, planSlug, representativeName, companyName, designation, 
      businessEmail, mobileNumber, gstNumber, companyAddress, city, 
      state, pinCode, employeeCount, message,
      razorpay_order_id, razorpay_payment_id, razorpay_signature
    } = body;

    const planConfig = planDetailsMap[planSlug];
    if (!planConfig) {
      return NextResponse.json({ error: "Invalid corporate plan selection." }, { status: 400 });
    }

    const planName = planConfig.name;
    const finalPrice = planConfig.price;

    // 1. SIGNATURE VALIDATION IF PAID TIER
    if (!isFree && finalPrice > 0) {
      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

      if (razorpay_signature !== expectedSign) {
        return NextResponse.json({ error: "Signature verification failed." }, { status: 400 });
      }
    }

    // 2. CONFIGURE EMAIL ATTACHMENT DETAILS
    let attachments = [];

    // Generate dynamic Tax Invoice/Receipt PDF for both Paid & Free plans
    try {
      const pdfBuffer = await generateReceiptPdf({
        representativeName, companyName, designation, businessEmail, mobileNumber,
        gstNumber: gstNumber || '', companyAddress, city, state, pinCode,
        employeeCount, planName, finalPrice, razorpay_payment_id: razorpay_payment_id || 'FREE_TIER',
        planSlug
      });

      attachments.push({
        filename: `Receipt_${companyName.replace(/\s+/g, '_')}.pdf`,
        content: pdfBuffer
      });
    } catch (pdfErr) {
      console.error("Corporate PDF receipt generation error: ", pdfErr);
    }

    if (isFree) {
      // Free Plan: Also attach existing brochure PDF from /public directory
      const brochurePath = path.join(process.cwd(), 'public', 'mission100-brochure.pdf');
      if (fs.existsSync(brochurePath)) {
        attachments.push({
          filename: 'Mission100_Corporate_Wellness_Brochure.pdf',
          path: brochurePath
        });
      }
    }

    // 3. COMPILE CUSTOMER EMAIL TEMPLATE
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: businessEmail,
      subject: `🏥 Corporate Wellness Partnership Confirmed: Welcome to Mission 100 Hospital!`,
      attachments: attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #16a34a; text-align: center; margin-bottom: 20px;">Mission 100 Hospital</h2>
          <p>Dear <strong>${representativeName}</strong>,</p>
          <p>Thank you for partnering with Mission 100 Hospital. We are excited to help you launch the <strong>${planName}</strong> for your team at <strong>${companyName}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h3 style="color: #334155;">💳 Partnership Summary</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b;">Company Name:</td><td style="padding: 6px 0; font-weight: bold; text-align: right;">${companyName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Selected Plan:</td><td style="padding: 6px 0; font-weight: bold; text-align: right;">${planName}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Amount Paid:</td><td style="padding: 6px 0; font-weight: bold; text-align: right; color: #16a34a;">INR ${finalPrice}.00</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Staff Size:</td><td style="padding: 6px 0; font-weight: bold; text-align: right;">${employeeCount} Employees</td></tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 13px; color: #475569; leading-relaxed: 1.5;">
            Please find the attached ${isFree ? 'corporate wellness brochure' : 'official tax invoice receipt'} for your company records. Our corporate accounts manager will contact you shortly to coordinate scheduling diagnostics camps and employee onboarding.
          </p>
          <p style="text-align: center; margin-top: 30px; font-weight: bold; color: #16a34a;">Stay Healthy, Stay Mission 100 Safe!</p>
        </div>
      `
    };

    // 4. COMPILE ADMIN NOTIFICATION TEMPLATE
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "mission100hospital@gmail.com, hement.pandey2121@gmail.com",
      subject: `🚨 NEW Corporate Wellness Registration: ${companyName}`,
      attachments: attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Corporate Registration</p>
          </div>
          <div style="padding: 25px;">
            <p>A new Corporate Wellness Partnership has been registered on the website. Billing details are below:</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 180px;">Company Name:</td><td style="padding: 6px 0; font-weight: bold;">${companyName}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Representative:</td><td style="padding: 6px 0; font-weight: bold;">${representativeName} (${designation})</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Business Email:</td><td style="padding: 6px 0; font-weight: bold;">${businessEmail}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Mobile Number:</td><td style="padding: 6px 0; font-weight: bold;">${mobileNumber}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">GSTIN:</td><td style="padding: 6px 0; font-weight: bold;">${gstNumber || 'None'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Staff Size:</td><td style="padding: 6px 0; font-weight: bold;">${employeeCount} Employees</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Corporate Plan:</td><td style="padding: 6px 0; font-weight: bold;">${planName}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Amount Paid:</td><td style="padding: 6px 0; font-weight: bold; color: #16a34a;">INR ${finalPrice}.00</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Company Address:</td><td style="padding: 6px 0; font-weight: bold;">${companyAddress}, ${city}, ${state} - ${pinCode}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Client Note:</td><td style="padding: 6px 0; font-weight: bold;">${message || 'None'}</td></tr>
            </table>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">
              The receipt/brochure PDF has been generated and successfully attached to this email.
            </p>
          </div>
        </div>
      `
    };

    // 5. DISPATCH EMAILS CONCURRENTLY
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return NextResponse.json({ message: "Corporate Wellness activated and notified successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Corporate Verification Route Error:", error);
    return NextResponse.json({ error: "Failed to verify transaction or send email coordinates." }, { status: 500 });
  }
}
