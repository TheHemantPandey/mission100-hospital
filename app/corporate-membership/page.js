import React from 'react';

export default function CorporateMembership() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Corporate Health Membership</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Empowering organizations with custom preventive healthcare, employee wellness profiles, and lifestyle coaching.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Corporate Wellness Program</h2>
          <p className="leading-relaxed mb-4">
            At Mission 100 Hospital, we partner with corporate organizations to prioritize employee well-being, optimize team performance, and foster a healthy work environment. Our customizable corporate packages are designed to screen, track, and improve the long-term health metrics of your workforce.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Key Benefits for Employees</h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Preventive Pathology Screenings:</strong> Full body checkups and heart health checkups conducted directly at your office or through home sample collection.</li>
            <li><strong>Expert Consultations:</strong> Direct sessions with doctors, nutrition experts, fitness coaches, and wellness guides.</li>
            <li><strong>Longevity Modeling:</strong> Personalized lifestyle and preventive coaching logs to track health indicators over time.</li>
            <li><strong>Mental Well-being Sessions:</strong> De-stressing workshops, mindfulness coaching, and ayurvedic longevity guidance.</li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Partner With Us Today</h2>
          <p className="leading-relaxed mb-4">
            If you would like to design a customized health program, enroll your employees in our wellness plans, or schedule a diagnostic screening camp, please get in touch with our B2B partnership coordinator.
          </p>
          <div className="text-sm">
            <p className="font-bold">Mission 100 Corporate Relations</p>
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
