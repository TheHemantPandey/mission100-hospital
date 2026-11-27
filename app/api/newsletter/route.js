import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Configure transporter matching existing API routes
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
      subject: `Mission 100 - New Newsletter Subscription`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Newsletter Subscription</p>
          </div>
          <div style="padding: 25px;">
            <p>We have received a new newsletter subscription from the website:</p>
            <div style="margin-top: 15px; padding: 15px; background-color: #f3f4f6; border-radius: 10px; text-align: center; font-size: 18px; font-weight: bold; color: #16a34a;">
              ${email}
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center;">
              This notification was generated automatically by the Mission 100 website.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Newsletter Subscription Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
