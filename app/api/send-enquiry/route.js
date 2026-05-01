import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Updated destructuring to match all fields in FormStepOne.js
    const { 
      firstName, 
      lastName, 
      age, 
      gender, 
      contactNo, 
      testName, 
      houseNo, 
      street, 
      state, 
      city, 
      pinCode, 
      landmark 
    } = body;

    // Configure Hostinger/Gmail friendly transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Test Booking: ${testName} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">Mission 100 - New Appointment Request</h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b;">Patient Information</h3>
            <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Age / Gender:</strong> ${age} / ${gender}</p>
            <p><strong>Contact:</strong> ${contactNo}</p>
          </div>

          <div style="margin-top: 20px; background-color: #f0fdf4; padding: 15px; border-radius: 8px;">
            <h3 style="color: #16a34a; margin-top: 0;">Service Requested</h3>
            <p><strong>Preferred Test:</strong> ${testName}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #1e293b;">Home Consultation Address</h3>
            <p><strong>Address:</strong> ${houseNo}, ${street}</p>
            <p><strong>Landmark:</strong> ${landmark || "N/A"}</p>
            <p><strong>City/State:</strong> ${city}, ${state}</p>
            <p><strong>Pincode:</strong> ${pinCode}</p>
          </div>

          <footer style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
            This enquiry was sent from the Mission 100 Hospital booking page.
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}