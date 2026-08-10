import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // ------------------------------------------------------------------
    // EXTRACT JSON DATA (Matches JSON.stringify(formData) from page.js)
    // ------------------------------------------------------------------
    const body = await req.json();

    const fullName = body.fullName;
    const phone = body.phone;
    const email = body.email;
    const aadhaar = body.aadhaar;
    const pan = body.pan || "Not Provided";
    const state = body.state || "Not Provided";
    const city = body.city || "Not Provided";
    const pincode = body.pincode || "Not Provided";
    const address = body.address || "Not Provided";
    const organizationName = body.organizationName || "Not Provided";
    const designation = body.designation || "Not Provided";
    const specialization = body.specialization || "Not Provided";
    const experience = body.experience || "Not Provided";
    const message = body.message || "N/A";

    // -----------------------------
    // NODEMAILER SETUP
    // -----------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // -----------------------------
    // SEND EMAIL
    // -----------------------------
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mission100hospital@gmail.com, hement.pandey2121@gmail.com",
      subject: `New Partner Application - ${fullName}`,
      html: `
      <div style="font-family:Arial,sans-serif;background:#f1f5f9;padding:30px;">
        <div style="max-width:750px;margin:auto;background:white;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.08);">

          <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Partner Application</p>
          </div>

          <div style="padding:35px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;width:35%;">Full Name</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Mobile Number</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">+91 ${phone}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Email Address</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Aadhaar Number</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${aadhaar}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">PAN Card Number</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${pan}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">State & City</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${city}, ${state}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Pincode</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${pincode}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Organization/Clinic</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${organizationName}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Designation</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${designation}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Specialization</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${specialization}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Full Address</td>
                <td style="padding:14px;border:1px solid #e5e7eb;line-height:1.7;">${address}</td>
              </tr>
            </table>

            <div style="margin-top:30px;">
              <h2 style="font-size:20px;color:#111827;border-bottom:2px solid #e5e7eb;padding-bottom:10px;">
                Professional Experience
              </h2>
              <div style="background:#f8fafc;padding:20px;border-radius:16px;line-height:1.8;color:#334155;margin-top:15px;white-space:pre-wrap;">
                ${experience}
              </div>
            </div>

            <div style="margin-top:30px;">
              <h2 style="font-size:20px;color:#111827;border-bottom:2px solid #e5e7eb;padding-bottom:10px;">
                Why do they want to join?
              </h2>
              <div style="background:#f8fafc;padding:20px;border-radius:16px;line-height:1.8;color:#334155;margin-top:15px;white-space:pre-wrap;">
                ${message}
              </div>
            </div>

          </div>
        </div>
      </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Partner application submitted successfully",
    });
  } catch (error) {
    console.error("PARTNER APPLICATION ERROR:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to submit partner application",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}