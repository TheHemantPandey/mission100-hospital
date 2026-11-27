import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // --- EXTRACT TEXT FIELDS ---
    const fullName = formData.get("fullName");

    const email = formData.get("email");

    const mobile = formData.get("mobile");

    const dob = formData.get("dob");

    const state =
      formData.get("state") || "Not Provided";

    const city = formData.get("city");

    const qualification =
      formData.get("qualification");

    const experience =
      formData.get("experience");

    const sessionMode =
      formData.get("sessionMode");

    const currentOrganization =
      formData.get("currentOrganization") ||
      "N/A";

    const certificationId =
      formData.get("certificationId") ||
      "N/A";

    const instagram =
      formData.get("instagram") || "N/A";

    const youtube =
      formData.get("youtube") || "N/A";

    const clientsHandled =
      formData.get("clientsHandled") ||
      "N/A";

    const meditationExperience =
      formData.get(
        "meditationExperience"
      ) || "N/A";

    const languagesKnown =
      formData.get("languagesKnown") ||
      "N/A";

    const whyJoin =
      formData.get("whyJoin");

    const about = formData.get("about");

    // --- SPECIALIZATION LOGIC ---
    let specialization =
      formData.get("specialization");

    const otherSpecialization =
      formData.get(
        "otherSpecialization"
      );

    if (
      specialization === "Other" &&
      otherSpecialization
    ) {
      specialization = `Other (${otherSpecialization})`;
    }

    // --- FILES ---
    const photo = formData.get("photo");

    const resume =
      formData.get("resume");

    const additionalDocuments =
      formData.getAll(
        "additionalDocuments"
      );

    const additionalDocNames =
      formData.getAll(
        "additionalDocNames"
      );

    // --- NODEMAILER SETUP ---
    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    // --- ATTACHMENTS ---
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

    // RESUME / PORTFOLIO
    if (resume && resume.size > 0) {
      const resumeBuffer = Buffer.from(
        await resume.arrayBuffer()
      );

      attachments.push({
        filename: resume.name,
        content: resumeBuffer,
      });
    }

    // ADDITIONAL DOCUMENTS
    if (
      additionalDocuments &&
      additionalDocuments.length > 0
    ) {
      for (
        let i = 0;
        i < additionalDocuments.length;
        i++
      ) {
        const file =
          additionalDocuments[i];

        const customName =
          additionalDocNames[i];

        if (file && file.size > 0) {
          const fileBuffer = Buffer.from(
            await file.arrayBuffer()
          );

          let filename = file.name;

          if (
            customName &&
            customName.trim() !== ""
          ) {
            const extension =
              file.name
                .split(".")
                .pop();

            filename = `${customName.trim()}.${extension}`;
          }

          attachments.push({
            filename,
            content: fileBuffer,
          });
        }
      }
    }

    // --- SEND EMAIL ---
    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.ADMIN_EMAIL,

      subject: `New Yoga & Wellness Coach Application - ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:30px;">
          
          <div style="max-width:700px; margin:auto; background:white; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

            <div style="background: linear-gradient(135deg, #16a34a, #0d9488); padding: 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
              <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Yoga & Wellness Coach Application</p>
            </div>

            <div style="padding:30px;">

              <table style="width:100%; border-collapse:collapse; text-align:left;">

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold; width:40%;">
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
                    State & City
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${city}, ${state}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Qualification / Certifications
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
                    Yoga / Wellness Specialization
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${specialization}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Session Mode
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${sessionMode}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Current Studio / Organization
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${currentOrganization}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Certification ID
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${certificationId}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Instagram Profile
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${instagram}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    YouTube Channel
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${youtube}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Approximate Clients Guided
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${clientsHandled}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Meditation / Healing Experience
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${meditationExperience}
                  </td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">
                    Languages Known
                  </td>

                  <td style="padding:14px; border:1px solid #e5e7eb;">
                    ${languagesKnown}
                  </td>
                </tr>

              </table>

              <div style="margin-top:30px;">
                
                <h2 style="color:#111827; font-size:20px; border-bottom:2px solid #e5e7eb; padding-bottom:8px;">
                  Why Join Mission100?
                </h2>

                <div style="background:#f3f4f6; padding:20px; border-radius:14px; line-height:1.7; color:#374151; white-space:pre-wrap;">
                  ${whyJoin}
                </div>

              </div>

              <div style="margin-top:30px;">
                
                <h2 style="color:#111827; font-size:20px; border-bottom:2px solid #e5e7eb; padding-bottom:8px;">
                  About Applicant
                </h2>

                <div style="background:#f3f4f6; padding:20px; border-radius:14px; line-height:1.7; color:#374151; white-space:pre-wrap;">
                  ${about}
                </div>

              </div>

              <div style="margin-top:30px; padding:20px; background:#ecfdf5; border-radius:14px; border:1px solid #6ee7b7;">

                <p style="margin:0; color:#065f46; font-weight:600;">
                  Total Files Attached: ${attachments.length}
                </p>

                <ul style="margin-top:10px; color:#374151;">
                  ${attachments
                    .map(
                      (att) =>
                        `<li>${att.filename}</li>`
                    )
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
      message:
        "Application submitted successfully",
    });
  } catch (error) {
    console.error(
      "YOGA WELLNESS COACH EMAIL ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          "Failed to submit application",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}