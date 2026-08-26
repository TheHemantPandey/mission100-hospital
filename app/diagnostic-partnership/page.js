import React from 'react';

export default function DiagnosticPartnership() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Diagnostic & Lab Partnerships</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Collaborate with Mission 100 Hospital to expand pathology networks, support home sample collection, and scale diagnostic reach.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Pathology Laboratory Network</h2>
          <p className="leading-relaxed mb-4">
            Mission 100 Hospital builds collaborative networks with local, regional, and national diagnostic laboratories. Our goal is to streamline sample collection logistics, ensure rapid analysis, and supply accurate, high-quality pathology reporting to patients across our wellness memberships and expert panels.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">Alliance Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Sample Collection Logistics:</strong> Coordinate collection logistics, technician training, and digital patient profiles integration.</li>
            <li><strong>Reporting Integration:</strong> Sync laboratory reporting systems with our digital coordinates to send PDFs directly to patient emails and spreadsheets.</li>
            <li><strong>Client Referral Pool:</strong> Access booking traffic generated through our preventive checkup campaigns and corporate wellness plans.</li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Partner with our Pathology Team</h2>
          <p className="leading-relaxed mb-4">
            If you manage a certified pathology laboratory or diagnostic infrastructure provider and want to integrate with the Mission 100 network, please connect with our relations manager.
          </p>
          <div className="text-sm">
            <p className="font-bold">Mission 100 Diagnostic Relations Manager</p>
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
