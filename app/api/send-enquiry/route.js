import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Updated destructuring to include appointmentDate and appointmentTime
    const { 
      firstName, 
      lastName, 
      age, 
      gender, 
      contactNo, 
      testName,
      appointmentDate, 
      appointmentTime, 
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
      to: process.env.ADMIN_EMAIL,
      subject: `New Test Booking: ${testName} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Appointment Request</p>
          </div>
          
          <div style="padding: 25px;">
            <div>
              <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Patient Information</h3>
              <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Age / Gender:</strong> ${age} / ${gender}</p>
              <p><strong>Contact:</strong> ${contactNo}</p>
            </div>

            <div style="margin-top: 20px; background-color: #f0fdf4; padding: 15px; border-radius: 8px;">
              <h3 style="color: #16a34a; margin-top: 0;">Service & Schedule Details</h3>
              <p><strong>Preferred Test:</strong> ${testName}</p>
              <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
              <p><strong>Preferred Time Slot:</strong> ${appointmentTime}</p>
            </div>

            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Home Consultation Address</h3>
              <p><strong>Address:</strong> ${houseNo}, ${street}</p>
              <p><strong>Landmark:</strong> ${landmark || "N/A"}</p>
              <p><strong>City/State:</strong> ${city}, ${state}</p>
              <p><strong>Pincode:</strong> ${pinCode}</p>
            </div>

            <footer style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
              This enquiry was sent from the Mission 100 Hospital booking page.
            </footer>
          </div>
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