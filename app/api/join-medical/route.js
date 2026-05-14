import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // TEXT FIELDS
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const dob = formData.get("dob");
    const city = formData.get("city");
    const qualification = formData.get("qualification");
    const experience = formData.get("experience");
    const registrationId = formData.get("registrationId");
    const specialization = formData.get("specialization");
    const consultationMode = formData.get("consultationMode");
    const hospital = formData.get("hospital");
    const about = formData.get("about");

    // FILES
    const photo = formData.get("photo");
    const resume = formData.get("resume");

    // MULTIPLE DOCUMENTS
    const documents = formData.getAll("documents");

    // EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ATTACHMENTS ARRAY
    const attachments = [];

    // PROFILE PHOTO
    if (photo && photo.size > 0) {
      const photoBuffer = Buffer.from(
        await photo.arrayBuffer()
      );

      attachments.push({
        filename: photo.name,
        content: photoBuffer,
      });
    }

    // RESUME
    if (resume && resume.size > 0) {
      const resumeBuffer = Buffer.from(
        await resume.arrayBuffer()
      );

      attachments.push({
        filename: resume.name,
        content: resumeBuffer,
      });
    }

    // EXTRA DOCUMENTS
    if (documents && documents.length > 0) {
      for (const file of documents) {
        if (file && file.size > 0) {
          const fileBuffer = Buffer.from(
            await file.arrayBuffer()
          );

          attachments.push({
            filename: file.name,
            content: fileBuffer,
          });
        }
      }
    }

    // SEND EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `New Medical Expert Application - ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:30px;">
          
          <div style="max-width:700px; margin:auto; background:white; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

            <div style="background: linear-gradient(90deg,#16a34a,#06b6d4); padding:30px; color:white;">
              <h1 style="margin:0; font-size:28px;">
                New Medical Expert Application
              </h1>

              <p style="margin-top:10px; opacity:0.9;">
                Mission100 Healthcare Platform
              </p>
            </div>

            <div style="padding:30px;">

              <table style="width:100%; border-collapse:collapse;">

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Full Name
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${fullName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Email
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Mobile Number
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    +91 ${mobile}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Date of Birth
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${dob}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    City
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${city}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Qualification
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${qualification}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Experience
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${experience}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Registration ID
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${registrationId}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Specialization
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${specialization}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Consultation Mode
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${consultationMode}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Hospital / Clinic
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${hospital}
                  </td>
                </tr>

              </table>

              <div style="margin-top:30px;">
                <h2 style="color:#111827;">
                  About Applicant
                </h2>

                <div style="background:#f3f4f6; padding:20px; border-radius:14px; line-height:1.7; color:#374151;">
                  ${about}
                </div>
              </div>

              <div style="margin-top:30px; padding:20px; background:#ecfeff; border-radius:14px; border:1px solid #a5f3fc;">
                <p style="margin:0; color:#155e75; font-weight:600;">
                  Attached Files:
                </p>

                <ul style="margin-top:10px; color:#374151;">
                  <li>Profile Photo</li>
                  <li>Resume / CV</li>
                  <li>Additional Certifications / Documents</li>
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
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to submit application",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}