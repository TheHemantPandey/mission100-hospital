import React from 'react';

export default function TermsAndConditions() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms and Conditions</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-light">
          Please read these terms carefully before using the Mission 100 Hospital platform.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        
        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">1. Introduction and Acceptance</h2>
          <p className="leading-relaxed">
            By accessing or using the Mission 100 Hospital website (<a href="https://www.mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">https://www.mission100hospital.com</a>) and our booking forms, diagnostic test schedulers, or membership plans, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">2. About Mission 100</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital operates as a preventive healthcare, Ayurveda, advanced diagnostics, and longevity platform. We provide pathology test bookings, home sample collection coordination, health checkup memberships, and medical expert consultation scheduling.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">3. Eligibility</h2>
          <p className="leading-relaxed">
            You must be at least 18 years of age to book tests, appointments, or purchase membership plans. If you are under 18, you may use our platform only under the direct supervision and with the explicit consent of a parent or legal guardian.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">4. Bookings and Profiles</h2>
          <p className="leading-relaxed">
            Our platform does not use password-protected user accounts. All bookings are made by submitting your personal information, contact numbers, address, and medical preferences through our web forms. You represent that all information you provide is accurate, current, and complete. Providing false details may result in cancellation of bookings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">5. Doctor Appointment Booking</h2>
          <p className="leading-relaxed mb-4">
            Through our expert consultation scheduler, you can book appointments with our doctors, therapists, or wellness coaches.
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-sm">
            <li>Bookings are subject to the doctor's real-time availability.</li>
            <li>Consultations may be designated as **Online** or **Offline** depending on the practitioner's settings.</li>
            <li>Submission of a booking form logs a request; a healthcare coordinator will contact you to finalize the appointment details.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">6. Diagnostic Test Booking</h2>
          <p className="leading-relaxed mb-4">
            You can book diagnostic and pathology lab tests (such as the Heart Attack Prevention Test, Complete Health Checkup, and Full Body Checkup).
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-sm">
            <li>Tests can be scheduled for clinic visits or home sample collection (subject to local service availability in Delhi/NCR).</li>
            <li>All pathology test results should be reviewed by a licensed doctor. Lab reports are support indicators and do not constitute self-diagnosis.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">7. Memberships</h2>
          <p className="leading-relaxed mb-4">
            We offer specialized health and wellness subscriptions (Silver Care, Gold Care, Platinum Care, Pro Fitness Plan, and Free Employee Plan).
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-sm">
            <li>Membership validity, test inclusions, and discount terms are fixed at checkout.</li>
            <li>Memberships are registered to a single individual and are non-transferable.</li>
            <li>All memberships are strictly non-refundable once purchased.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">8. Payments and Razorpay Gateway</h2>
          <p className="leading-relaxed mb-4">
            All prices are quoted in Indian Rupees (INR).
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed text-sm">
            <li>All transactions are processed through our payment gateway provider, **Razorpay**.</li>
            <li>If a payment fails or is interrupted, the booking is recorded as pending. Bookings are only finalized upon verified signature receipt from Razorpay.</li>
            <li>Duplicate payments will be evaluated manually by our finance team upon presentation of transaction receipts.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">9. Refund and Cancellation</h2>
          <p className="leading-relaxed">
            All bookings, consultations, diagnostics, and membership purchases are strictly final and non-refundable. Under highly exceptional circumstances, management may review requests. For full details on timelines and processing, please refer to our <a href="/refund-policy" className="text-emerald-600 font-semibold hover:underline">Refund & Cancellation Policy</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">10. Medical Disclaimer</h2>
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-r-lg">
            <p className="font-bold mb-1">NOT MEDICAL ADVICE:</p>
            <p className="leading-relaxed text-sm">
              The content, calculators, indicators, and recommended test packages on this website are for educational and exploratory purposes only. They do not constitute direct medical advice, clinical diagnostics, or prescription. Always consult a qualified physician regarding any medical concerns or symptoms.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">11. Medical Emergencies</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital's website is a booking and coordinating portal. <strong>In the event of a medical emergency, acute symptoms, or critical health events, please proceed immediately to the nearest hospital emergency room or contact emergency ambulance services.</strong> Do not delay seeking professional treatment because of information read on this website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">12. Intellectual Property</h2>
          <p className="leading-relaxed">
            All proprietary systems, including the "Mission 100" trademark, logo, longevity modeling methodologies, website code, graphical interfaces, anti-aging science write-ups, and PDFs generated by our server are the exclusive property of Mission 100 Hospital and are protected by applicable intellectual property and copyright laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">13. Governing Law and Jurisdiction</h2>
          <p className="leading-relaxed">
            These Terms and Conditions and all transactions completed through this website shall be governed by and construed in accordance with the laws of **India**. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in **New Delhi, Delhi, India**.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">14. Contact Information</h2>
          <p className="leading-relaxed">
            For questions, legal notices, or feedback regarding these terms, please write to our support desk:
          </p>
          <div className="mt-4 p-5 bg-slate-50 rounded-lg border border-slate-200 text-sm">
            <p className="font-bold">Mission 100 Hospital Legal Desk</p>
            <p>Metroplex East Tower, Office No. 147, Laxmi Nagar, Delhi - 110092</p>
            <p>Email: <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a></p>
            <p>Phone: +91 9220-620-209</p>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Mission 100 Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
