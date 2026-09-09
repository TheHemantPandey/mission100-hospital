import React from 'react';

export default function RefundPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Refund & Cancellation Policy</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Official terms governing cancellations, reschedules, and refunds for all bookings at Mission 100 Hospital.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <p className="mb-8 text-sm text-slate-500 italic">Last Updated: August 2026</p>

        {/* 1. Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">1. Overview</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital operates as a premier diagnostics, wellness coaching, and clinical care coordinator. Because of the immediate resources allocated, scheduling configurations, and healthcare technician dispatching, we maintain a strict refund and cancellation policy. By scheduling any service on our platform, you acknowledge and agree to these terms.
          </p>
        </section>

        {/* 2. Appointment Cancellation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">2. Appointment Cancellation</h2>
          <p className="leading-relaxed">
            Appointments booked with doctors, consultants, or therapists cannot be cancelled for a refund. Once a booking is confirmed, the slot is reserved, and the payment is non-refundable. Any cancellation request will not trigger a refund. In the case of a "no-show" (failing to show up for your scheduled consult), the full fee is forfeited.
          </p>
        </section>

        {/* 3. Appointment Rescheduling */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">3. Appointment Rescheduling</h2>
          <p className="leading-relaxed">
            While refunds are not permitted, you may request to reschedule your consultation. Rescheduling requests must be submitted to our coordinates at least 24 hours prior to the scheduled slot and are subject strictly to the availability of the healthcare practitioner.
          </p>
        </section>

        {/* 4. Diagnostic Test Cancellation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">4. Diagnostic Test Cancellation</h2>
          <p className="leading-relaxed">
            Pathology and diagnostic health checkups (including the Heart Attack Prevention Test and Full Body Checkups) cannot be cancelled for a refund once booked. The booking amount remains final.
          </p>
        </section>

        {/* 5. Sample Collection Cancellation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">5. Sample Collection Cancellation</h2>
          <p className="leading-relaxed">
            Cancellations of home sample collection services do not qualify for any refund. If the diagnostic technician is already dispatched or has arrived at the collection address, the booking remains completely non-refundable and cannot be rescheduled.
          </p>
        </section>

        {/* 6. Membership Cancellation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">6. Membership Cancellation</h2>
          <p className="leading-relaxed">
            Individual wellness memberships (Silver Care, Gold Care, Platinum Care, Pro Fitness Plan) and Corporate Wellness memberships are registered for a fixed duration. Memberships cannot be cancelled mid-term, and no refunds or pro-rated credits will be issued under any circumstances.
          </p>
        </section>

        {/* 7. Membership Refunds */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">7. Membership Refunds</h2>
          <p className="leading-relaxed">
            All membership registration fees are strictly non-refundable. Benefits not utilized during the validity period will expire and cannot be redeemed for cash, discounts, or refunds.
          </p>
        </section>

        {/* 8. Failed Payments */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">8. Failed Payments</h2>
          <p className="leading-relaxed">
            In the event that funds are deducted from your account but the booking fails to generate a confirmation order (due to network disruption, gateway failure, or checkout timeout), the transaction is tracked as failed. The payment gateway provider, Razorpay, will automatically initiate a refund to your original payment source. This auto-refund process typically settles within 3 to 5 working days depending on your bank's policies.
          </p>
        </section>

        {/* 9. Duplicate Payments */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">9. Duplicate Payments</h2>
          <p className="leading-relaxed">
            If a technical error causes a duplicate transaction for the same booking or package, please report both transaction details to our support desk immediately. Upon verification of the double charge, the duplicate payment will be processed for a manual refund.
          </p>
        </section>

        {/* 10. Cancellation by Mission100 / Provider */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">10. Cancellation by Mission100 / Provider</h2>
          <p className="leading-relaxed">
            In highly exceptional cases where Mission 100 Hospital or our practitioner must cancel your appointment or diagnostic collection (due to medical emergencies, clinical closures, or equipment failure), we will coordinate with you to reschedule immediately. If rescheduling is not viable, a full refund will be processed.
          </p>
        </section>

        {/* 11. Refund Processing */}
        <section className="mb-8 bg-amber-50 p-4 border-l-4 border-amber-500 rounded-r-lg text-amber-900">
          <h2 className="text-xl font-bold text-green-900 mb-2 uppercase tracking-wide text-xs">11. Refund Processing Timeframe</h2>
          <p className="leading-relaxed text-sm">
            For any manual refunds approved under highly exceptional circumstances or duplicate transactions, the refund process will require verification. Approved refunds will be credited back to your original source account and can take <strong>7 to 10 business days</strong> to reflect in your bank or card statement.
          </p>
        </section>

        {/* 12. Non-Refundable Services */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">12. Non-Refundable Services</h2>
          <p className="leading-relaxed">
            All services listed on the Mission 100 website, including pathology profiles, doctor consultations, Ayurveda packages, and digital health tools membership access fees, are strictly classified as non-refundable.
          </p>
        </section>

        {/* 13. How to Request a Refund */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">13. How to Request a Refund</h2>
          <p className="leading-relaxed">
            To query a payment or request a duplicate transaction review, send an email to <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a>. You must attach:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
            <li>Your full name and contact number</li>
            <li>Razorpay Payment ID & Order ID</li>
            <li>Transaction date and screenshot of the payment receipt</li>
          </ul>
        </section>

        {/* 14. Payment Gateway */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">14. Payment Gateway</h2>
          <p className="leading-relaxed">
            All refund transactions are processed through the official APIs of our payment gateway provider, Razorpay. No cash refunds will be issued under any circumstances.
          </p>
        </section>

        {/* 15. Policy Changes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">15. Policy Changes</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital reserves the right to modify this Refund and Cancellation Policy at any time without prior individual notice. Any updates will be published directly on this page.
          </p>
        </section>

        {/* 16. Contact */}
        <section className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-lg text-sm">
          <h2 className="text-xl font-bold text-green-900 mb-2 uppercase tracking-wide text-xs">16. Contact Details</h2>
          <p className="font-bold">Mission 100 Hospital Billing Desk</p>
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
