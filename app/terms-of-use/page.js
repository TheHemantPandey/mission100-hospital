import React from 'react';

export default function TermsOfUse() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms of Use</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-light">
          Please read these terms carefully before using the Mission 100 Hospital platform.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">1. Medical Disclaimer</h2>
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900">
            <p className="font-bold mb-1">NOT MEDICAL ADVICE:</p>
            <p className="leading-relaxed">
              The content provided on this website, including text, graphics, and images, is for informational purposes only. It is not intended to be a substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">2. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using the Mission 100 Hospital website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">3. Use of Website</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the site for any unlawful purpose.</li>
            <li>Attempt to interfere with the proper working of the website.</li>
            <li>Use any automated system (bots) to harvest data from the site.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, including the "Mission 100" logo, anti-aging protocols, and branding, are the exclusive property of Mission 100 Hospital and are protected by copyright laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">5. Limitation of Liability</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
          </p>
        </section>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Mission 100 Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}