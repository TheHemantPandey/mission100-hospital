import PDFDocument from 'pdfkit';
import { corporatePlans } from '../corporate-wellness-partnership/plansData';

// In-memory cache for fonts to avoid duplicate downloads
let robotoRegularBuffer = null;
let robotoBoldBuffer = null;

async function loadFonts() {
  if (robotoRegularBuffer && robotoBoldBuffer) return;

  const fontRegularUrl = 'https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Regular.ttf';
  const fontBoldUrl = 'https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Bold.ttf';

  try {
    const [regRes, boldRes] = await Promise.all([
      fetch(fontRegularUrl),
      fetch(fontBoldUrl)
    ]);

    if (!regRes.ok || !boldRes.ok) {
      throw new Error(`Failed to fetch fonts: Regular=${regRes.status}, Bold=${boldRes.status}`);
    }

    const [regArr, boldArr] = await Promise.all([
      regRes.arrayBuffer(),
      boldRes.arrayBuffer()
    ]);

    robotoRegularBuffer = Buffer.from(regArr);
    robotoBoldBuffer = Buffer.from(boldArr);
  } catch (err) {
    console.error("Font loading error: ", err);
  }
}

/**
 * Generates a dynamic PDF tax invoice/receipt buffer for corporate wellness memberships.
 * @param {Object} data Billing details of the company
 * @returns {Promise<Buffer>} The PDF file buffer
 */
export async function generateReceiptPdf(data) {
  // Pre-load fonts into memory buffers
  await loadFonts();

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const chunks = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      // Register fonts if loaded successfully
      if (robotoRegularBuffer && robotoBoldBuffer) {
        doc.registerFont('Roboto-Regular', robotoRegularBuffer);
        doc.registerFont('Roboto-Bold', robotoBoldBuffer);
        doc.font('Roboto-Regular');
      }

      // Helper to dynamically check if bold font is active
      const getFont = (isBold) => {
        if (robotoRegularBuffer && robotoBoldBuffer) {
          return isBold ? 'Roboto-Bold' : 'Roboto-Regular';
        }
        return isBold ? 'Helvetica-Bold' : 'Helvetica';
      };

      // 1. HEADER SECTION
      doc.fillColor("#16a34a").fontSize(22).font(getFont(true)).text("Mission 100 Hospital", { align: "center" });
      doc.fillColor("#64748b").fontSize(9).font(getFont(false)).text("Preventive Care & Longevity Ecosystem", { align: "center" });
      doc.text("Metroplex East Tower, Laxmi Nagar, Delhi - 110092 | info@mission100hospital.com", { align: "center" }).moveDown(1.5);
      
      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1.5);
      
      // 2. INVOICE TITLE
      doc.fillColor("#0f172a").fontSize(14).font(getFont(true)).text("TAX INVOICE / RECEIPT", { align: "center", underline: true }).moveDown(1.5);

      // 3. INVOICE INFO & CLIENT INFO
      const invoiceNumber = `M100-CORP-${Date.now()}`;
      const paymentDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });

      doc.fontSize(10);
      doc.fillColor("#475569").font(getFont(true)).text("Invoice Details:", { underline: true }).moveDown(0.5);
      doc.fillColor("#0f172a").font(getFont(false)).text(`Invoice Number: ${invoiceNumber}`);
      doc.text(`Payment Date: ${paymentDate}`);
      if (data.razorpay_payment_id && data.razorpay_payment_id !== 'FREE_TIER') {
        doc.text(`Transaction ID: ${data.razorpay_payment_id}`);
      } else {
        doc.text(`Transaction ID: FREE_TIER`);
      }
      doc.moveDown(1);

      doc.fillColor("#475569").font(getFont(true)).text("Client Billing Details:", { underline: true }).moveDown(0.5);
      doc.fillColor("#0f172a").font(getFont(false)).text(`Company Name: ${data.companyName}`);
      doc.text(`Representative: ${data.representativeName} (${data.designation})`);
      doc.text(`Email Address: ${data.businessEmail}`);
      doc.text(`Contact Number: ${data.mobileNumber}`);
      if (data.gstNumber) {
        doc.text(`GSTIN: ${data.gstNumber}`);
      }
      doc.text(`Company Address: ${data.companyAddress}, ${data.city}, ${data.state} - ${data.pinCode}`);
      doc.text(`Total Staff Covered: ${data.employeeCount} Employees`);
      doc.moveDown(1.5);

      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1);

      // 4. ITEM TABLE
      doc.fontSize(10).fillColor("#475569").font(getFont(true));
      doc.text("Plan Description", 50, doc.y, { width: 350 });
      doc.text("Amount Paid", 400, doc.y, { align: "right" });
      doc.moveDown(0.5);

      doc.fillColor("#0f172a").font(getFont(false));
      const currentY = doc.y;
      doc.text(`Corporate Wellness Partnership: ${data.planName}`, 50, currentY, { width: 350 });
      doc.text(data.finalPrice > 0 ? `INR ${data.finalPrice}.00` : "FREE", 400, currentY, { align: "right" });
      doc.moveDown(2);

      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1.5);

      // 5. TOTAL SECTION
      doc.fontSize(11).fillColor("#16a34a").font(getFont(true)).text("Total Amount Paid:", 300, doc.y);
      doc.text(data.finalPrice > 0 ? `INR ${data.finalPrice}.00` : "FREE", 400, doc.y, { align: "right" });
      doc.moveDown(2.5);

      // 6. FOOTER REMARKS
      doc.fontSize(8).fillColor("#94a3b8").font(getFont(false)).text("This is an electronically generated tax invoice and requires no physical signature.", { align: "center" });
      doc.text("Thank you for partnering with Mission 100 Hospital to protect your team.", { align: "center" });

      // --- PAGE 2: PLAN DETAILS ---
      const plan = corporatePlans[data.planSlug];
      const rawFeatures = plan ? plan.features : [];
      const features = rawFeatures.filter(f => {
        const lf = f.toLowerCase().trim();
        return !(lf.startsWith("everything in") || lf.includes("plan coverage"));
      });
      if (features && features.length > 0) {
        doc.addPage();

        // Page 2 Header
        doc.fillColor("#16a34a").fontSize(16).font(getFont(true)).text("Plan Inclusions & Benefits", { align: "center" });
        doc.fillColor("#64748b").fontSize(9).font(getFont(false)).text(`Mission 100 Hospital | ${data.planName} Details`, { align: "center" }).moveDown(1.5);

        // Dynamic light box
        const startY = doc.y;
        const boxHeight = (features.length * 18) + 20;
        doc.rect(81, startY, 450, boxHeight).fillColor("#f8fafc").fill();
        doc.strokeColor("#e2e8f0").lineWidth(1).rect(81, startY, 450, boxHeight).stroke();

        // Print features list inside the container
        doc.fillColor("#334155").fontSize(9);
        let featureY = startY + 15;
        features.forEach((feature) => {
          doc.font(getFont(true)).text("•", 100, featureY);
          doc.font(getFont(false)).text(feature, 115, featureY, { width: 380 });
          featureY = doc.y + 6;
        });
      }

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Generates a dynamic PDF tax invoice/receipt buffer for individual memberships.
 * @param {Object} data Billing details of the subscriber
 * @returns {Promise<Buffer>} The PDF file buffer
 */
export async function generateIndividualReceiptPdf(data) {
  // Pre-load fonts into memory buffers
  await loadFonts();

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const chunks = [];

      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      // Register fonts if loaded successfully
      if (robotoRegularBuffer && robotoBoldBuffer) {
        doc.registerFont('Roboto-Regular', robotoRegularBuffer);
        doc.registerFont('Roboto-Bold', robotoBoldBuffer);
        doc.font('Roboto-Regular');
      }

      // Helper to dynamically check if bold font is active
      const getFont = (isBold) => {
        if (robotoRegularBuffer && robotoBoldBuffer) {
          return isBold ? 'Roboto-Bold' : 'Roboto-Regular';
        }
        return isBold ? 'Helvetica-Bold' : 'Helvetica';
      };

      // 1. HEADER SECTION
      doc.fillColor("#16a34a").fontSize(22).font(getFont(true)).text("Mission 100 Hospital", { align: "center" });
      doc.fillColor("#64748b").fontSize(9).font(getFont(false)).text("Preventive Care & Longevity Ecosystem", { align: "center" });
      doc.text("Metroplex East Tower, Laxmi Nagar, Delhi - 110092 | info@mission100hospital.com", { align: "center" }).moveDown(1.5);
      
      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1.5);
      
      // 2. INVOICE TITLE
      doc.fillColor("#0f172a").fontSize(14).font(getFont(true)).text("TAX INVOICE / RECEIPT", { align: "center", underline: true }).moveDown(1.5);

      // 3. INVOICE INFO & SUBSCRIBER INFO
      const invoiceNumber = `M100-IND-${Date.now()}`;
      const paymentDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });

      doc.fontSize(10);
      doc.fillColor("#475569").font(getFont(true)).text("Invoice Details:", { underline: true }).moveDown(0.5);
      doc.fillColor("#0f172a").font(getFont(false)).text(`Invoice Number: ${invoiceNumber}`);
      doc.text(`Payment Date: ${paymentDate}`);
      if (data.paymentId && data.paymentId !== 'FREE_TIER') {
        doc.text(`Transaction ID: ${data.paymentId}`);
      } else {
        doc.text(`Transaction ID: FREE_TIER`);
      }
      doc.moveDown(1);

      doc.fillColor("#475569").font(getFont(true)).text("Subscriber Details:", { underline: true }).moveDown(0.5);
      doc.fillColor("#0f172a").font(getFont(false)).text(`Subscriber Name: ${data.firstName} ${data.lastName}`);
      doc.text(`Email Address: ${data.email}`);
      doc.text(`Contact Number: ${data.contactNo}`);
      doc.text(`Checkup Slot: ${data.appointmentDate} (${data.appointmentTime})`);
      if (data.address) {
        doc.text(`Address: ${data.address}`);
      }
      doc.moveDown(1.5);

      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1);

      // 4. ITEM TABLE
      doc.fontSize(10).fillColor("#475569").font(getFont(true));
      doc.text("Plan Description", 50, doc.y, { width: 350 });
      doc.text("Amount Paid", 400, doc.y, { align: "right" });
      doc.moveDown(0.5);

      doc.fillColor("#0f172a").font(getFont(false));
      const currentY = doc.y;
      doc.text(`Individual Membership: ${data.planName}`, 50, currentY, { width: 350 });
      doc.text(data.finalPrice > 0 ? `INR ${data.finalPrice}.00` : "FREE", 400, currentY, { align: "right" });
      doc.moveDown(2);

      // Horizontal Line Divider
      doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1.5);

      // 5. TOTAL SECTION
      doc.fontSize(11).fillColor("#16a34a").font(getFont(true)).text("Total Amount Paid:", 300, doc.y);
      doc.text(data.finalPrice > 0 ? `INR ${data.finalPrice}.00` : "FREE", 400, doc.y, { align: "right" });
      doc.moveDown(2.5);

      // 6. FOOTER REMARKS
      doc.fontSize(8).fillColor("#94a3b8").font(getFont(false)).text("This is an electronically generated tax invoice and requires no physical signature.", { align: "center" });
      doc.text("Thank you for subscribing to Mission 100 Hospital.", { align: "center" });

      // --- PAGE 2: PLAN DETAILS ---
      const features = (data.features || []).filter(f => {
        const lf = f.toLowerCase().trim();
        return !(lf.startsWith("everything in") || lf.includes("plan coverage"));
      });

      if (features.length > 0) {
        doc.addPage();

        // Page 2 Header
        doc.fillColor("#16a34a").fontSize(16).font(getFont(true)).text("Plan Inclusions & Benefits", { align: "center" });
        doc.fillColor("#64748b").fontSize(9).font(getFont(false)).text(`Mission 100 Hospital | ${data.planName} Details`, { align: "center" }).moveDown(1.5);

        // Dynamic light box
        const startY = doc.y;
        const boxHeight = (features.length * 18) + 20;
        doc.rect(81, startY, 450, boxHeight).fillColor("#f8fafc").fill();
        doc.strokeColor("#e2e8f0").lineWidth(1).rect(81, startY, 450, boxHeight).stroke();

        // Print features list inside the container
        doc.fillColor("#334155").fontSize(9);
        let featureY = startY + 15;
        features.forEach((feature) => {
          doc.font(getFont(true)).text("•", 100, featureY);
          doc.font(getFont(false)).text(feature, 115, featureY, { width: 380 });
          featureY = doc.y + 6;
        });
      }

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Generates a dynamic PDF membership card buffer (front side only).
 * @param {Object} data Card configurations and owner details
 * @returns {Promise<Buffer>} The PDF file buffer
 */
export async function generateMembershipCardPdf(data) {
  await loadFonts();

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: [243, 153], margin: 12 });
      const chunks = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      if (robotoRegularBuffer && robotoBoldBuffer) {
        doc.registerFont('Roboto-Regular', robotoRegularBuffer);
        doc.registerFont('Roboto-Bold', robotoBoldBuffer);
        doc.font('Roboto-Regular');
      }

      const getFont = (isBold) => {
        if (robotoRegularBuffer && robotoBoldBuffer) {
          return isBold ? 'Roboto-Bold' : 'Roboto-Regular';
        }
        return isBold ? 'Helvetica-Bold' : 'Helvetica';
      };

      const today = new Date();
      const expMonth = String(today.getMonth() + 1).padStart(2, '0');
      const expYear = today.getFullYear() + 1;
      const validThru = `${expMonth}/${expYear}`;

      let bgGrad = doc.linearGradient(0, 0, 243, 153);
      let borderColor = 'rgba(255, 255, 255, 0.1)';
      let textColor = '#ffffff';
      let labelColor = '#cbd5e1';
      let badgeBg = '#f1f5f9';
      let badgeText = '#1e293b';
      let chipGold = true;

      const theme = data.theme || 'slate';
      if (theme === 'gold') {
        bgGrad.stop(0, '#bf953f').stop(0.25, '#fcf6ba').stop(0.5, '#b38728').stop(0.75, '#fbf5b7').stop(1, '#aa771c');
        borderColor = 'rgba(120, 53, 15, 0.25)';
        textColor = '#0f172a';
        labelColor = '#78350f';
        badgeBg = '#0f172a';
        badgeText = '#fcf6ba';
        chipGold = false;
      } else if (theme === 'silver') {
        bgGrad.stop(0, '#cbd5e1').stop(0.3, '#f1f5f9').stop(0.6, '#94a3b8').stop(1, '#e2e8f0');
        borderColor = 'rgba(71, 85, 105, 0.2)';
        textColor = '#0f172a';
        labelColor = '#475569';
        badgeBg = '#0f172a';
        badgeText = '#f1f5f9';
        chipGold = true;
      } else if (theme === 'platinum') {
        bgGrad.stop(0, '#1e293b').stop(0.5, '#0f172a').stop(1, '#020617');
        borderColor = 'rgba(255, 255, 255, 0.1)';
        textColor = '#f8fafc';
        labelColor = '#94a3b8';
        badgeBg = '#e2e8f0';
        badgeText = '#0f172a';
        chipGold = true;
      } else if (theme === 'emerald') {
        bgGrad.stop(0, '#0d9488').stop(0.5, '#10b981').stop(1, '#064e3b');
        borderColor = 'rgba(255, 255, 255, 0.15)';
        textColor = '#ffffff';
        labelColor = '#a7f3d0';
        badgeBg = '#ffffff';
        badgeText = '#064e3b';
        chipGold = false;
      } else {
        bgGrad.stop(0, '#475569').stop(1, '#1e293b');
      }

      doc.rect(0, 0, 243, 153).fill(bgGrad);
      doc.strokeColor(borderColor).lineWidth(1).rect(6, 6, 231, 141).stroke();

      doc.fillColor(textColor).font(getFont(true)).fontSize(11).text('MISSION 100', 14, 15);
      doc.fillColor('#10b981').font(getFont(true)).fontSize(11).text('HOSPITAL', 92, 15);
      doc.fillColor(labelColor).font(getFont(false)).fontSize(5.5).text('"Live Longer, Live Better"', 14, 28);

      doc.fillColor(badgeBg).rect(160, 14, 70, 13).fill();
      doc.fillColor(badgeText).font(getFont(true)).fontSize(6).text(data.badge, 160, 18, { width: 70, align: 'center' });

      const chipX = 14, chipY = 38, chipW = 23, chipH = 17;
      const chipGrad = doc.linearGradient(chipX, chipY, chipX + chipW, chipY + chipH);
      if (chipGold) {
        chipGrad.stop(0, '#fff3c4').stop(0.3, '#d4af37').stop(0.7, '#f3e5ab').stop(1, '#aa7c11');
      } else {
        chipGrad.stop(0, '#f8fafc').stop(0.3, '#cbd5e1').stop(0.7, '#e2e8f0').stop(1, '#64748b');
      }
      doc.rect(chipX, chipY, chipW, chipH).fill(chipGrad);
      
      doc.save();
      doc.strokeColor(chipGold ? '#78350f' : '#334155').lineWidth(0.5).opacity(0.35);
      doc.rect(chipX + 2, chipY + 2, chipW - 4, chipH - 4).stroke();
      doc.moveTo(chipX + chipW/2, chipY).lineTo(chipX + chipW/2, chipY + chipH).stroke();
      doc.moveTo(chipX, chipY + chipH/2).lineTo(chipX + chipW, chipY + chipH/2).stroke();
      doc.restore();

      doc.fillColor(labelColor).font(getFont(false)).fontSize(6).text('MEMBERSHIP ID', 14, 68);
      doc.fillColor(textColor).font(getFont(true)).fontSize(11).text(data.cardId, 14, 76);

      doc.fillColor(labelColor).font(getFont(false)).fontSize(6).text('CARD HOLDER', 14, 98);
      doc.fillColor(textColor).font(getFont(true)).fontSize(10).text(data.memberName.toUpperCase(), 14, 106);

      doc.fillColor(labelColor).font(getFont(false)).fontSize(6).text('VALID THRU', 160, 98);
      doc.fillColor(textColor).font(getFont(true)).fontSize(9).text(validThru, 160, 106);

      const cardTypeLabel = `${data.type.toUpperCase()} CARE`;
      doc.fillColor(labelColor).font(getFont(true)).fontSize(8).text(cardTypeLabel, 14, 128);
      doc.fillColor(labelColor).font(getFont(false)).fontSize(6.5).text('www.mission100hospital.com', 120, 128, { align: 'right', width: 110 });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
