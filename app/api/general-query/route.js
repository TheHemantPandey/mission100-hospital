import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    // These fields match your QueryForm.js exactly
    const { name, email, phone, subject, message } = body;

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
      subject: `Mission 100 - General Query: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #0056b3; border-radius: 15px;">
          <h2 style="color: #0056b3;">New Website Query</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 15px; padding: 15px; background-color: #f3f4f6; border-radius: 10px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("General Query Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}