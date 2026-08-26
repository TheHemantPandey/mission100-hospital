import React from 'react';

export default function CookiePolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Cookie Policy</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Learn how Mission 100 Hospital uses cookies and browser storage technologies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl border border-slate-100">
        <p className="mb-8 text-sm text-slate-500 italic">Effective Date: August 2026</p>

        {/* 1. What Are Cookies? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">1. What Are Cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They allow the website to recognize your device, store preferences, and track session status to secure forms, checkouts, and navigation.
          </p>
        </section>

        {/* 2. Why Mission100 Uses Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">2. Why Mission 100 Uses Cookies</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital does not utilize cookies or trackers for advertisement, targeting, or third-party marketing behaviors. We use cookies and local/session browser storage strictly for core operations, payment security, and preserving navigation flow (like keeping scroll status stable during transitions).
          </p>
        </section>

        {/* 3. Types of Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">3. Types of Cookies</h2>
          <p className="leading-relaxed mb-4">We categorize our storage technologies as follows:</p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Strictly Necessary:</strong> Essential for processing bookings and securing payments via Razorpay.</li>
            <li><strong>Functional / Session Storage:</strong> Used to temporarily store layout alignment values, tab states, and scroll positions to ensure smooth page load transitions.</li>
            <li><strong>Security:</strong> Set to protect payment checkouts from cross-site request forgery and script interventions.</li>
          </ul>
        </section>

        {/* 4. Cookies Used by Mission100 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">4. Cookies and Technologies Used</h2>
          <p className="leading-relaxed mb-6">
            Below is the list of active first-party and third-party storage technologies deployed on the Mission 100 platform:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border border-slate-200 font-bold">Technology / Key</th>
                  <th className="p-3 border border-slate-200 font-bold">Purpose</th>
                  <th className="p-3 border border-slate-200 font-bold">Type</th>
                  <th className="p-3 border border-slate-200 font-bold">Provider</th>
                  <th className="p-3 border border-slate-200 font-bold">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-mono text-xs">__scroll_position__</td>
                  <td className="p-3 border border-slate-200">Preserves scroll position of pages during page changes.</td>
                  <td className="p-3 border border-slate-200">Session Storage</td>
                  <td className="p-3 border border-slate-200">First-party (Mission100)</td>
                  <td className="p-3 border border-slate-200">Session Close</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-mono text-xs">rzp_device_id</td>
                  <td className="p-3 border border-slate-200">Secures transaction flow, fraud prevention, and checkout.</td>
                  <td className="p-3 border border-slate-200">Strictly Necessary</td>
                  <td className="p-3 border border-slate-200">Third-party (Razorpay)</td>
                  <td className="p-3 border border-slate-200">Persistent</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-mono text-xs">hasSeenPopupInThisTab</td>
                  <td className="p-3 border border-slate-200">Controls the display logic of the medical offer popup.</td>
                  <td className="p-3 border border-slate-200">Window State</td>
                  <td className="p-3 border border-slate-200">First-party (Mission100)</td>
                  <td className="p-3 border border-slate-200">Tab Reload</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Local Storage and Session Storage */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">5. Local Storage and Session Storage</h2>
          <p className="leading-relaxed">
            Our codebase utilizes HTML5 <code>sessionStorage</code> to store UI navigation coordinates for page transitions via our ScrollRestoration helper. This data does not contain passwords or clinical diagnostics. No persistent <code>localStorage</code> variables are deployed.
          </p>
        </section>

        {/* 6. Third-Party Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">6. Third-Party Technologies</h2>
          <p className="leading-relaxed">
            Our checkout form utilizes Razorpay's overlay frame (<code>https://checkout.razorpay.com/v1/checkout.js</code>). Razorpay sets internal session tokens and fraud indicators in your browser to verify security integrity. These are necessary to prevent card duplication and verify payments.
          </p>
        </section>

        {/* 7. Managing Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">7. Managing Cookies</h2>
          <p className="leading-relaxed">
            You can restrict, block, or delete cookies by modifying your web browser settings (such as Chrome, Safari, Firefox, or Edge). If you fully block cookies, you may experience technical issues when using the Razorpay payment gateway checkout overlay.
          </p>
        </section>

        {/* 8. Cookie Consent */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">8. Cookie Consent</h2>
          <p className="leading-relaxed">
            Since our platform does not employ tracking cookies, advertisement pixels, or Google Analytics trackers, we do not show a standard marketing consent banner. By continuing to use our diagnostic and scheduling platform, you consent to the placement of essential functional variables required for checkouts and rendering.
          </p>
        </section>

        {/* 9. Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4 uppercase tracking-wide text-sm">9. Changes to this Policy</h2>
          <p className="leading-relaxed">
            We may update this Cookie Policy from time to time to reflect operational changes or adjustments in our billing systems.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-200 text-sm">
          <h2 className="text-xl font-bold text-green-900 mb-2 uppercase tracking-wide text-xs">10. Contact Information</h2>
          <p className="leading-relaxed">
            For questions about cookies or data privacy, please refer to our <a href="/privacy-policy" className="text-emerald-600 font-semibold hover:underline">Privacy Policy</a> or email us at <a href="mailto:info@mission100hospital.com" className="text-emerald-600 font-semibold hover:underline">info@mission100hospital.com</a>.
          </p>
        </section>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Mission 100 Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
