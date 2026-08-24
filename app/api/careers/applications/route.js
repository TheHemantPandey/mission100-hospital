import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // --- EXTRACT FIELDS ---
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const city = formData.get("city");
    const position = formData.get("position");
    const qualification = formData.get("qualification");
    const college = formData.get("college") || "N/A";
    const experience = formData.get("experience") || "N/A";
    const currentCompany = formData.get("currentCompany") || "N/A";
    const currentDesignation = formData.get("currentDesignation") || "N/A";
    const skills = formData.get("skills") || "N/A";
    const linkedin = formData.get("linkedin") || "N/A";
    const portfolio = formData.get("portfolio") || "N/A";
    const noticePeriod = formData.get("noticePeriod") || "N/A";
    const expectedSalary = formData.get("expectedSalary") || "N/A";

    // --- EXTRACT FILES ---
    const resume = formData.get("resume");
    const coverLetter = formData.get("coverLetter");
    const additionalDocuments = formData.getAll("additionalDocuments");
    const additionalDocNames = formData.getAll("additionalDocNames");

    // --- EMAIL SETUP ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = [];

    // 1. Resume (Required)
    if (resume && resume.size > 0) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: resumeBuffer,
      });
    }

    // 2. Cover Letter (Optional)
    if (coverLetter && coverLetter.size > 0) {
      const coverLetterBuffer = Buffer.from(await coverLetter.arrayBuffer());
      attachments.push({
        filename: coverLetter.name,
        content: coverLetterBuffer,
      });
    }

    // 3. Additional Documents (Optional)
    if (additionalDocuments && additionalDocuments.length > 0) {
      for (let i = 0; i < additionalDocuments.length; i++) {
        const file = additionalDocuments[i];
        const customName = additionalDocNames[i];

        if (file && file.size > 0) {
          const fileBuffer = Buffer.from(await file.arrayBuffer());
          
          let filename = file.name;
          if (customName && customName.trim() !== "") {
            const extension = file.name.split('.').pop();
            filename = `${customName.trim()}.${extension}`;
          }

          attachments.push({
            filename: filename,
            content: fileBuffer,
          });
        }
      }
    }

    // --- SEND EMAIL TO ADMIN ---
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mission100hospital@gmail.com, hement.pandey2121@gmail.com",
      subject: `NEW CAREER APPLICATION - ${fullName} - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:30px;">
          <div style="max-width:700px; margin:auto; background:white; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            
            <div style="background: linear-gradient(135deg, #10b981, #0d9488); padding: 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px;">Mission 100 Hospital</h1>
              <p style="margin: 5px 0 0 0; font-size: 16px; opacity: 0.95;">New Career / Job Application</p>
            </div>

            <div style="padding:30px;">
              <table style="width:100%; border-collapse:collapse; text-align: left;">
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold; width: 40%;">Position Applied For</td>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold; color:#10b981;">${position}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Full Name</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Email</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Mobile Number</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">+91 ${mobile}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Current City</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${city}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Highest Qualification</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${qualification}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">College / University</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${college}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Experience</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${experience}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Previous Company</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${currentCompany}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Previous Designation</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${currentDesignation}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Skills</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${skills}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">LinkedIn URL</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${linkedin !== "N/A" ? `<a href="${linkedin}" target="_blank">${linkedin}</a>` : "N/A"}</td>
                </tr>

                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Portfolio URL</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${portfolio !== "N/A" ? `<a href="${portfolio}" target="_blank">${portfolio}</a>` : "N/A"}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Notice Period</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${noticePeriod}</td>
                </tr>
                <tr>
                  <td style="padding:14px; border:1px solid #e5e7eb; font-weight:bold;">Expected Salary</td>
                  <td style="padding:14px; border:1px solid #e5e7eb;">${expectedSalary}</td>
                </tr>
              </table>

              <div style="margin-top:30px; padding:20px; background:#ecfeff; border-radius:14px; border:1px solid #a5f3fc;">
                <p style="margin:0; color:#155e75; font-weight:600;">Total Files Attached: ${attachments.length}</p>
                <ul style="margin-top:10px; color:#374151;">
                  ${attachments.map(att => `<li>${att.filename}</li>`).join('')}
                </ul>
              </div>

            </div>
          </div>
        </div>
      `,
      attachments,
    });

    // --- SEND EMAIL TO APPLICANT (CONFIRMATION) ---
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Application Received — Mission100`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 20px; background: white; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="text-align: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
            <h2 style="color: #10b981; margin: 0; font-size: 28px; font-weight: 800;">Mission 100 Hospital</h2>
            <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">"Live Longer, Live Better"</p>
          </div>
          
          <div style="padding: 20px 0;">
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">Dear <strong>${fullName}</strong>,</p>
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">
              Thank you for applying for the <strong>${position}</strong> position at Mission100 Hospital. We have successfully received your job application and documents.
            </p>
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">
              Our human resources team is reviewing your profile. If your qualifications match our current recruitment requirements, we will contact you directly to schedule an interview.
            </p>
            <p style="font-size: 16px; color: #334155; line-height: 1.6; margin-top: 30px;">
              Best Regards,<br/>
              <strong>Recruitment Team</strong><br/>
              Mission100 Hospital
            </p>
          </div>

          <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 15px; border-radius: 10px; font-size: 12px; color: #64748b; text-align: center;">
            This email acknowledges that your application has been received successfully by the Mission100 automated careers system.
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Application submitted successfully",
    });

  } catch (error) {
    console.error("CAREERS SUBMISSION ERROR:", error);
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
