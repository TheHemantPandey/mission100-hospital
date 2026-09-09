import React from 'react';

export default function ClinicPartnership() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Hospital & Clinic Partnerships</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Partner with Mission 100 Hospital to expand clinical networks, integrate specialized healthcare, and offer preventive care.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Clinical Synergy</h2>
          <p className="leading-relaxed mb-4">
            Mission 100 Hospital actively collaborates with hospitals, community clinics, and independent medical centers to extend advanced longevity and preventive healthcare capabilities. Our partnership model integrates specialized telemedicine consults, diagnostic reporting, and wellness coaching programs into your local clinical setup.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Partnership Inclusions</h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Pathology Integration:</strong> Offer your patients high-quality diagnostic profiles, home collection networks, and automated reporting systems.</li>
            <li><strong>Practitioner Telehealth Network:</strong> Access our panel of fitness experts, nutrition specialists, and ayurvedic practitioners for remote clinical consultations.</li>
            <li><strong>Wellness Membership Distribution:</strong> Integrate our wellness and longevity packages into your clinical discharge routines or health checkup campaigns.</li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Become a Clinical Partner</h2>
          <p className="leading-relaxed mb-4">
            If you are a clinic manager, hospital representative, or independent practitioner looking to partner with our hospital network, please coordinate with our clinical partnerships team.
          </p>
          <div className="text-sm">
            <p className="font-bold">Mission 100 Clinical Alliance Coordinator</p>
            <p>Email: <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a></p>
            <p>Phone: +91 87964 71583</p>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Mission 100 Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
