import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // -----------------------------
    // EXTRACT TEXT FIELDS
    // -----------------------------
    const fullName = formData.get("fullName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const state = formData.get("state") || "Not Provided";
    const city = formData.get("city") || "Not Provided";
    const pincode = formData.get("pincode") || "Not Provided";
    const address = formData.get("address") || "Not Provided";
    const aadhar = formData.get("aadhar") || "Not Provided";
    const pan = formData.get("pan") || "Not Provided";
    const occupation = formData.get("occupation") || "Not Provided";
    const landSize = formData.get("landSize") || "Not Provided";
    const ownershipType = formData.get("ownershipType") || "Not Provided";
    const businessExperience = formData.get("businessExperience") || "Not Provided";
    const message = formData.get("message") || "N/A";

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
    // EXTRACT MULTIPLE FILES
    // -----------------------------
    const attachments = [];
    
    // Use getAll to catch all files appended under "propertyImages"
    const propertyImages = formData.getAll("propertyImages");

    if (propertyImages && propertyImages.length > 0) {
      for (const image of propertyImages) {
        // Double-check that it is a valid file object with data
        if (image && typeof image === "object" && image.size > 0) {
          const imageBuffer = Buffer.from(await image.arrayBuffer());
          
          attachments.push({
            filename: image.name || "property-image.jpg",
            content: imageBuffer,
          });
        }
      }
    }

    // -----------------------------
    // SEND EMAIL
    // -----------------------------
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Franchise Application - ${fullName}`,
      html: `
      <div style="font-family:Arial,sans-serif;background:#f1f5f9;padding:30px;">
        <div style="max-width:750px;margin:auto;background:white;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.08);">

          <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Franchise Application</p>
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
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">State & City</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${city}, ${state}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Pincode</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${pincode}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Complete Address</td>
                <td style="padding:14px;border:1px solid #e5e7eb;line-height:1.7;">${address}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Aadhar Number</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${aadhar}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">PAN Number</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${pan}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Current Occupation</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${occupation}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Land / Shop Size</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${landSize}</td>
              </tr>
              <tr>
                <td style="padding:14px;border:1px solid #e5e7eb;font-weight:700;">Property Ownership</td>
                <td style="padding:14px;border:1px solid #e5e7eb;">${ownershipType}</td>
              </tr>
            </table>

            <div style="margin-top:30px;">
              <h2 style="font-size:20px;color:#111827;border-bottom:2px solid #e5e7eb;padding-bottom:10px;">
                Business Experience
              </h2>
              <div style="background:#f8fafc;padding:20px;border-radius:16px;line-height:1.8;color:#334155;margin-top:15px;white-space:pre-wrap;">
                ${businessExperience}
              </div>
            </div>

            <div style="margin-top:30px;">
              <h2 style="font-size:20px;color:#111827;border-bottom:2px solid #e5e7eb;padding-bottom:10px;">
                Additional Message
              </h2>
              <div style="background:#f8fafc;padding:20px;border-radius:16px;line-height:1.8;color:#334155;margin-top:15px;white-space:pre-wrap;">
                ${message}
              </div>
            </div>

            <div style="margin-top:30px;padding:22px;background:#ecfeff;border:1px solid #a5f3fc;border-radius:18px;">
              <p style="margin:0;font-weight:700;color:#0f172a;">
                Total Files Attached: ${attachments.length}
              </p>
              <ul style="margin-top:12px;color:#334155;line-height:1.8;padding-left:20px;">
                ${attachments
                  .map((att) => `<li>${att.filename}</li>`)
                  .join("")}
              </ul>
            </div>

          </div>
        </div>
      </div>
      `,
      attachments,
    });

    return Response.json({
      success: true,
      message: "Franchise application submitted successfully",
    });
  } catch (error) {
    console.error("FRANCHISE APPLICATION ERROR:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to submit franchise application",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}