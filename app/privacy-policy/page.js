import React from 'react';

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          At Mission 100 Hospital, your health and your privacy are our top priorities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <p className="mb-8 text-sm text-slate-500 italic">Effective Date: August 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">1. Introduction</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital ("we," "us," or "our") operates the website <a href="https://www.mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">https://www.mission100hospital.com</a> and associated healthcare appointment scheduling, pathology test bookings, and wellness memberships. We are committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">2. Scope</h2>
          <p className="leading-relaxed">
            This policy applies to all personal information, diagnostic details, and transaction data collected through our website booking forms, registration widgets, and checkout systems. It does not govern offline physical consultations, except where records are unified for coordinate care.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">3. Information We Collect</h2>
          <p className="mb-4 leading-relaxed">We collect only the details necessary to schedule consultations, perform diagnostics, and process your wellness memberships:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Patient Demographics:</strong> First name, Last name, Date of Birth (DOB) or age, and gender.</li>
            <li><strong>Contact Details:</strong> Email address, mobile contact number, and WhatsApp number.</li>
            <li><strong>Residential & Collection Address:</strong> House number, street name, state, city, landmark, and pin code (for home sample collection and communications).</li>
            <li><strong>Health & Medical Profiling:</strong> Blood group, existing medical conditions, and clinical reasons for consultation.</li>
            <li><strong>Emergency Information:</strong> Emergency contact name, relationship, and contact number.</li>
            <li><strong>Payment & Order Signatures:</strong> Razorpay order ID, payment ID, and transaction signature hash to verify bookings. <em>We do not store credit/debit card numbers, CVVs, UPI PINs, or bank account credentials.</em></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">4. How We Use Your Information</h2>
          <p className="mb-4 leading-relaxed">We use your information solely for functional healthcare and administrative purposes:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>To schedule and confirm doctor appointments and wellness consultations.</li>
            <li>To log and coordinate pathology lab tests and home sample collection visits.</li>
            <li>To manage your Silver Care, Gold Care, Platinum Care, or Pro Fitness memberships.</li>
            <li>To process secure payments through our payment gateway partner, Razorpay.</li>
            <li>To auto-generate PDF receipts, summaries, and digital cards, and email them to you via Gmail SMTP (Nodemailer).</li>
            <li>To store administrative logs securely in our Google Sheets backend database.</li>
            <li>To comply with clinical logging, healthcare standards, and tax/financial obligations.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">5. Payment Information Security</h2>
          <p className="leading-relaxed">
            All monetary checkouts on our platform are processed securely by <strong>Razorpay</strong>, which is certified as a PCI-DSS Level 1 compliant service provider. Mission 100 Hospital does not capture, store, log, or inspect raw credit card numbers, card expiration dates, Card Verification Values (CVV), or bank logins. Transactions occur through secure tokens-based overlays hosted by Razorpay.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">6. Cookies and Storage</h2>
          <p className="leading-relaxed mb-4">
            We do not load third-party analytics pixels or ad trackers on our platform. We use minimal functional cookies and storage technology:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Session Storage:</strong> Used to temporarily save scroll position keys during user navigation to optimize rendering.</li>
            <li><strong>Payment Overlay Tokens:</strong> Set securely by checkout.razorpay.com to verify transaction sessions.</li>
          </ul>
          <p className="mt-4 leading-relaxed">For more detailed information, please review our <a href="/cookie-policy" className="text-emerald-600 font-semibold hover:underline">Cookie Policy</a>.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">7. Third-Party Integrations</h2>
          <p className="leading-relaxed mb-4">
            We integrate with trusted service platforms to run our services:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Payment Gateway:</strong> Razorpay (secures transactions).</li>
            <li><strong>Notification:</strong> Gmail SMTP/Nodemailer (sends receipts/updates).</li>
            <li><strong>Database:</strong> Google Sheets API (stores booking sheets).</li>
            <li><strong>Communications:</strong> WhatsApp API web links (initiates support chats).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">8. Data Sharing</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital does not sell, rent, or trade your personal data. We only share specific patient profile and collection details with our affiliated diagnostic laboratories to execute the pathology tests you book, or with statutory authorities as required by legal mandates.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">9. Data Security</h2>
          <p className="leading-relaxed">
            We implement technical safeguards, including HTTPS encryption for all form transmissions and private Google Cloud Service tokens, to prevent unauthorized access or interception of your details. While we take comprehensive precautions, no digital transmission over the internet can be guaranteed as 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">10. Data Retention</h2>
          <p className="leading-relaxed">
            We retain your booking information, contact details, and transaction histories in our Google Sheets backend as required for health tracking, membership validity verification, financial audits, and regulatory compliance.
          </p>
        </section>

        <section className="mb-10 text-slate-800">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">11. Children's Privacy</h2>
          <p className="leading-relaxed">
            While we collect patient age/DOB for laboratory analysis purposes, bookings must be initiated by an adult or with the active guidance and consent of a parent or legal guardian. We do not knowingly market directly to minors under 18.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">12. User Rights</h2>
          <p className="leading-relaxed">
            You have the right to request updates, corrections, or erasure of your personal contact records stored in our spreadsheets. To exercise these rights, please contact our support team at <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a>.
          </p>
        </section>

        <section className="mb-10 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-green-900 mb-2 uppercase tracking-wide text-xs">13. Contact & Grievance</h2>
          <p>For any questions regarding this Privacy Policy or data handling practices, please reach out to us:</p>
          <p className="mt-4 font-bold">Mission 100 Hospital</p>
          <p>Metroplex East Tower, Office No. 147, Laxmi Nagar, Delhi - 110092</p>
          <p>Email: <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a></p>
          <p>Phone: +91 87964 71583</p>
        </section>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Mission 100 Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}