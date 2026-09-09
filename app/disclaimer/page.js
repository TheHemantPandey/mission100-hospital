import React from 'react';

export default function Disclaimer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Disclaimer</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Important legal and medical disclaimers regarding the website, diagnostic recommendations, and services of Mission 100 Hospital.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        
        <div className="p-5 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-r-lg mb-10">
          <p className="font-bold mb-1 uppercase tracking-wide text-sm">Critical Healthcare Notice:</p>
          <p className="leading-relaxed text-sm">
            All diagnostic recommendations, online estimators, article contents, and scheduler utilities on this website are designed for educational and informational purposes only. They must not be treated as a substitute for direct in-person clinical consultation, physical examination, or professional diagnosis by a licensed doctor.
          </p>
        </div>

        {/* 1. General Information */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">1. General Information</h2>
          <p className="leading-relaxed">
            The content published on our website, including text, graphics, and descriptions of wellness plans, is provided solely for general informational and service scheduling purposes. Mission 100 Hospital does not warrant the clinical completeness or absolute scientific accuracy of these educational materials.
          </p>
        </section>

        {/* 2. No Substitute for Medical Advice */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">2. No Substitute for Medical Advice</h2>
          <p className="leading-relaxed">
            You must not rely on the information on this website as an alternative to medical advice from your physician or other professional healthcare providers. If you think you may be suffering from any medical condition, you should seek immediate physical clinical attention. Do not delay or disregard seeking medical advice because of information read on this website.
          </p>
        </section>

        {/* 3. Healthcare Professionals */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">3. Healthcare Professionals</h2>
          <p className="leading-relaxed">
            Consultations booked through this portal connect you with independent doctors, wellness coaches, or therapists. While we verify licensing credentials, Mission 100 Hospital does not formulate, dictate, or bear responsibility for specific prescriptions, clinical treatments, or advice formulated during your actual consults.
          </p>
        </section>

        {/* 4. Diagnostic Information */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">4. Diagnostic Information & Lab Tests</h2>
          <p className="leading-relaxed">
            Pathology profiles (including full body and cardiovascular checkups) serve as support tools for physical diagnosis. Lab results must always be interpreted by a qualified medical professional in coordination with your physical clinical presentation and health history. Do not change your medical routine or start self-medicating based on test results without consulting your doctor.
          </p>
        </section>

        {/* 5. Medical Emergencies */}
        <section className="mb-8 bg-rose-50 p-4 border-l-4 border-rose-500 rounded-r-lg text-rose-900">
          <h2 className="text-xl font-bold text-rose-950 mb-2 uppercase tracking-wide text-xs">5. Medical Emergencies Warning</h2>
          <p className="leading-relaxed text-sm">
            Our digital booking platform is not equipped to handle acute symptoms or urgent emergencies. **In the event of a medical emergency, acute pain, breathing difficulties, chest pain, or trauma, please seek immediate emergency care by proceeding to the nearest hospital casualty ward or calling emergency ambulance services.**
          </p>
        </section>

        {/* 6. No Guarantee of Medical Outcomes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">6. No Guarantee of Medical Outcomes</h2>
          <p className="leading-relaxed">
            Prevention science and longevity modeling are long-term personal processes. Mission 100 Hospital does not make any promises, claims, or guarantees regarding specific health outcomes, disease reversal, or longevity extension resulting from utilizing our platform, diagnostic tests, or membership plans.
          </p>
        </section>

        {/* 7. Availability of Services */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">7. Availability of Services</h2>
          <p className="leading-relaxed">
            All appointments, consultation formats, pathology packages, and pricing details published on the site are subject to availability. We reserve the right to modify, cancel, or change practitioner line-ups or home collection coverages without prior notice.
          </p>
        </section>

        {/* 8. Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">8. Third-Party Services</h2>
          <p className="leading-relaxed">
            We integrate with payment gateways (Razorpay) and third-party logistics or lab collection partners. We do not control or take responsibility for software downtime, gateway timeouts, or external operational delays caused by these third-party integrations.
          </p>
        </section>

        {/* 9. Accuracy of Information */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-3 uppercase tracking-wide text-xs">9. Accuracy of Information</h2>
          <p className="leading-relaxed">
            We make reasonable efforts to maintain the accuracy of healthcare terms, plan prices, and schedule slots. However, the website content is provided "as is" without warranty of any kind, either express or implied, including but not limited to correctness, reliability, or availability.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-lg text-sm">
          <h2 className="text-xl font-bold text-green-900 mb-2 uppercase tracking-wide text-xs">10. Contact Details</h2>
          <p className="font-bold">Mission 100 Hospital Support Desk</p>
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
