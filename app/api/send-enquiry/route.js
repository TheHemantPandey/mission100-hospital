import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, age, gender, contactNo, department, doctorName, description } = body;

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
      to: process.env.EMAIL_USER, // You receive the lead
      subject: `New Patient Inquiry: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #16a34a;">Mission 100 - New Lead</h2>
          <p><strong>Patient:</strong> ${firstName} ${lastName}</p>
          <p><strong>Age/Gender:</strong> ${age} / ${gender}</p>
          <p><strong>Contact:</strong> ${contactNo}</p>
          <p><strong>Department:</strong> ${department}</p>
          <p><strong>Doctor:</strong> ${doctorName}</p>
          <p><strong>Reason for Visit:</strong> ${description}</p>
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