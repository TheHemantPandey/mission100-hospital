import React from 'react';

export default function AppPrivacyPolicy() {
  const lastUpdated = "July 16, 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Mobile Application Privacy Policy</h1>
        <p className="text-lg opacity-90 max-w-3xl mx-auto font-light">
          Mission 100 Hospital Android Application — Comprehensive Privacy, Data Safety, and Legal Compliance Framework.
        </p>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sticky Table of Contents for Large Screens */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-6 h-fit bg-white p-6 shadow-sm rounded-xl border border-slate-100">
          <h3 className="text-sm font-semibold text-green-900 uppercase tracking-wider mb-4">Sections</h3>
          <nav className="space-y-2 text-xs font-medium text-slate-600">
            <a href="#1-introduction" className="block hover:text-green-700 transition">1. Introduction & Legal Framework</a>
            <a href="#2-information-collected" className="block hover:text-green-700 transition">2. Information We Collect</a>
            <a href="#3-why-we-collect" className="block hover:text-green-700 transition">3. Purpose of Data Processing</a>
            <a href="#4-android-permissions" className="block hover:text-green-700 transition">4. Android Device Permissions</a>
            <a href="#5-third-party-services" className="block hover:text-green-700 transition">5. Third-Party Services & APIs</a>
            <a href="#6-payment-processing" className="block hover:text-green-700 transition">6. Secure Payment Processing</a>
            <a href="#7-data-security" className="block hover:text-green-700 transition">7. Data Security & Architecture</a>
            <a href="#8-data-sharing" className="block hover:text-green-700 transition">8. Data Sharing & Disclosure</a>
            <a href="#9-data-retention" className="block hover:text-green-700 transition">9. Data Retention & Deletion</a>
            <a href="#10-user-rights" className="block hover:text-green-700 transition">10. User Rights & DPDPA Compliance</a>
            <a href="#11-account-deletion" className="block hover:text-green-700 transition">11. Account & Data Deletion Process</a>
            <a href="#12-childrens-privacy" className="block hover:text-green-700 transition">12. Children's Privacy</a>
            <a href="#13-international-transfers" className="block hover:text-green-700 transition">13. Cross-Border Data Transfers</a>
            <a href="#14-policy-changes" className="block hover:text-green-700 transition">14. Changes to This Policy</a>
            <a href="#15-contact-grievance" className="block hover:text-green-700 transition">15. Contact & Grievance Redressal</a>
          </nav>
        </aside>

        {/* Policy Content Area */}
        <main className="col-span-1 lg:col-span-3 bg-white p-6 md:p-12 shadow-sm rounded-xl border border-slate-100 prose prose-slate max-w-none">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-100 pb-6 mb-8">
            <p className="text-sm text-slate-500 italic">Effective Date: {lastUpdated}</p>
            <span className="bg-green-50 text-green-800 text-xs px-3 py-1 rounded-full font-semibold border border-green-200 mt-2 md:mt-0 w-fit">
              Google Play Compliant Version 2.0
            </span>
          </div>

          {/* 1. Introduction */}
          <section id="1-introduction" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">1. Introduction & Legal Framework</h2>
            <p className="leading-relaxed mb-4">
              Welcome to the <strong>Mission 100 Hospital</strong> Mobile Application ("App"). This Privacy Policy is a legally binding document between you ("User," "you," or "your") and <strong>Mission100Hospital</strong> ("Company," "we," "us," or "our"), a premier healthcare provider operating in India.
            </p>
            <p className="leading-relaxed mb-4">
              We are deeply committed to protecting the privacy, confidentiality, and integrity of your Personal Data and Sensitive Personal Data (including medical and health records). This policy is designed to formally declare our data handling practices in absolute compliance with the <strong>Google Play Developer Policy</strong>, the <strong>Google Play Data Safety Requirements</strong>, the <strong>Android User Data Policy</strong>, and the <strong>Digital Personal Data Protection Act (DPDPA), 2023 (India)</strong>, alongside medical regulatory frameworks governing digital healthcare and telemedicine services in India.
            </p>
            <p className="leading-relaxed">
              By downloading, installing, registering, accessing, or using our App, you explicitly acknowledge that you have read, understood, and consented to the collection, storage, processing, and disclosure of your data as outlined in this Privacy Policy. If you do not agree with any terms herein, please immediately cease using the App and uninstall it from your device.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="2-information-collected" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              To deliver comprehensive digital healthcare services, the App collects two distinct categories of information: information you actively provide to us, and information collected automatically by our application ecosystem.
            </p>
            
            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">2.1 Data Actively Provided by the User</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Account Registration & Identity Data:</strong> Full Name, Email Address, Mobile Number, Gender, Date of Birth, and Profile Picture. Passwords are captured exclusively in hashed format using secure, industry-standard cryptographic algorithms.</li>
              <li><strong>Demographics & Contact Details:</strong> Full Postal Address, City, State, Pin Code, and Emergency Contact details (including name and relationship).</li>
              <li><strong>Sensitive Medical & Health Records:</strong> Detailed Medical History, historical and current symptoms, known allergies, chronic conditions, uploaded physical physician prescriptions, uploaded diagnostic and lab test reports, and details regarding specific health packages purchased.</li>
              <li><strong>Consultation & Appointment Logs:</strong> Audio/visual telemedicine consultation parameters, text-based symptoms communicated via chat interfaces, preferred doctor selections, and historical logs of booking dates.</li>
              <li><strong>Billing & Financial Metadata:</strong> Historical purchase logs, subscription timelines for health packages, invoice references, and specific transaction statuses passed down by our processing network.</li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">2.2 Data Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Device Telemetry:</strong> Unique Device ID (including Android Advertising ID, where appropriate under Play Store rules), hardware model, operating system architecture, Android OS version, and App build versions.</li>
              <li><strong>Network & Connection Properties:</strong> Internet Service Provider (ISP) names, network type (Wi-Fi, 4G, 5G), Internet Protocol (IP) address, and localized cellular region flags.</li>
              <li><strong>Diagnostics & Analytics Logs:</strong> Anonymized usage statistics, screen view durations, feature interactions, system crash logs, memory footprints during application execution, and performance latency indicators.</li>
            </ul>
          </section>

          {/* 3. Purpose of Data Processing */}
          <section id="3-why-we-collect" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">3. Purpose of Data Processing</h2>
            <p className="leading-relaxed mb-4">
              We collect and process your information strictly for lawful, specific, and legitimate medical and operational purposes, as defined under Section 6 of India's DPDPA, 2023. These purposes include:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm divide-y divide-slate-200 border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-900 text-left">Data Category</th>
                    <th className="px-4 py-3 font-semibold text-slate-900 text-left">Primary Operational Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Name & Mobile Number</td>
                    <td className="px-4 py-3 text-slate-700">User authentication via secure OTP validation, account deduplication, and appointment confirmation workflows.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Medical History & Prescriptions</td>
                    <td className="px-4 py-3 text-slate-700">Enabling licensed medical practitioners to provide accurate clinical diagnoses, telemedicine consultations, and remote treatment paths.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Device ID & Logs</td>
                    <td className="px-4 py-3 text-slate-700">Real-time troubleshooting, bug mitigation through Firebase Crashlytics, ensuring security layers, and verifying fraud vectors.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Email Address</td>
                    <td className="px-4 py-3 text-slate-700">Delivery of formal laboratory invoices, digital medical reports, legally mandated notices, and transactional summary letters.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Android Device Permissions */}
          <section id="4-android-permissions" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">4. Android Device Permissions</h2>
            <p className="leading-relaxed mb-4">
              In accordance with the Android User Data Policy's principle of data minimization, our App requests device permissions exclusively when required to execute specific runtime functionalities.
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-green-900 block mb-1">CAMERA Permission (Runtime)</strong>
                <p className="text-sm text-slate-700">
                  <strong>Why it is requested:</strong> To allow you to take real-time photographs of your physical medical prescriptions, historical laboratory receipts, or physical symptoms to share directly with doctors during virtual telemedicine consults.
                </p>
                <p className="text-xs text-slate-500 mt-1"><em>Optionality:</em> Completely optional. You can deny this permission and manually input medical profiles instead.</p>
              </li>
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-green-900 block mb-1">READ_EXTERNAL_STORAGE / READ_MEDIA_IMAGES (Storage Access)</strong>
                <p className="text-sm text-slate-700">
                  <strong>Why it is requested:</strong> To allow you to browse and upload existing PDF documents or image files containing lab reports and clinical histories directly into your user profile.
                </p>
                <p className="text-xs text-slate-500 mt-1"><em>Optionality:</em> Optional. Only requested when triggering the document attachment module.</p>
              </li>
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-green-900 block mb-1">POST_NOTIFICATIONS (Android 13+)</strong>
                <p className="text-sm text-slate-700">
                  <strong>Why it is requested:</strong> To deliver real-time push notices regarding upcoming doctor appointments, reminders for medical sample pickups, status changes for lab processing, and security/OTP alerts.
                </p>
                <p className="text-xs text-slate-500 mt-1"><em>Optionality:</em> Optional. Can be disabled globally within your Android system settings at any time.</p>
              </li>
              <li className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-green-900 block mb-1">INTERNET & ACCESS_NETWORK_STATE</strong>
                <p className="text-sm text-slate-700">
                  <strong>Why it is requested:</strong> Core permission required to link the mobile application to our secure cloud backend API networks, fetch updated doctor schedules, and process user inquiries.
                </p>
                <p className="text-xs text-slate-500 mt-1"><em>Optionality:</em> Mandatory for base functionality; the app cannot perform remote requests without active network mapping.</p>
              </li>
            </ul>
          </section>

          {/* 5. Third-Party Services & APIs */}
          <section id="5-third-party-services" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">5. Third-Party Services & APIs</h2>
            <p className="leading-relaxed mb-4">
              To guarantee optimal stability, authentication speed, and real-time processing capabilities, the App integrates industry-standard third-party Software Development Kits (SDKs) and secure Application Programming Interfaces (APIs). Every integration operates under strict legal guidelines, and each third-party tool retains independent privacy governing terms.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Razorpay Payment Gateway:</strong> Handles financial checkout workflows securely. No critical raw credit instruments are handled by our application level.</li>
              <li><strong>Firebase Authentication & Cloud Messaging (Google LLC):</strong> Facilitates highly responsive user login sessions and manages target distribution structures for informational push alerts.</li>
              <li><strong>Firebase Analytics & Crashlytics:</strong> Used to track performance stability metrics, map code exceptions during software execution, and capture generalized device layout analytics.</li>
              <li><strong>MongoDB Atlas:</strong> Serves as our enterprise-tier cloud data repository, offering end-to-end data encryptions and structured partitioning frameworks for your historical health assets.</li>
              <li><strong>Google Play Services:</strong> Fundamental platform utilities that support baseline application rendering, security checks, and platform stability inside the Android OS ecosystem.</li>
            </ul>
          </section>

          {/* 6. Secure Payment Processing */}
          <section id="6-payment-processing" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">6. Secure Payment Processing</h2>
            <p className="leading-relaxed mb-4">
              All financial transactions within the App are systematically isolated from standard system access layers. We partner exclusively with **Razorpay**, a payment infrastructure provider certified to the highest security standard, <strong>PCI-DSS Level 1 Compliance</strong>.
            </p>
            <blockquote>
              <strong>Absolute Data Shielding Guarantee:</strong> Under no circumstances does Mission 100 Hospital capture, store, log, or inspect raw credit/debit card numbers, card expiration dates, Card Verification Values (CVV), Unified Payments Interface (UPI) PIN strings, or internet banking security credentials. All input operations occur through isolated, tokens-based software containers maintained securely by Razorpay.
            </blockquote>
            <p className="leading-relaxed mt-4">
              We retain strictly high-level tracking indicators including transaction referencing IDs, corresponding date stamps, exact billing values, and explicit success/failure notification alerts to manage refunds, process accounting ledgers, and maintain transparent purchase histories.
            </p>
          </section>

          {/* 7. Data Security & Architecture */}
          <section id="7-data-security" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">7. Data Security & Architecture</h2>
            <p className="leading-relaxed mb-4">
              We employ robust administrative, operational, logical, and physical security measures to safeguard your personal health assets against unauthorized access, destruction, alterations, or accidental exposure.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Encryption in Transit:</strong> All communications between the mobile application client layer and our target REST APIs utilize secure Hypertext Transfer Protocol Secure (HTTPS) frameworks wrapped inside Transport Layer Security (TLS 1.3) wrapping profiles.</li>
              <li><strong>Data Encryption at Rest:</strong> Cloud records residing on MongoDB Atlas databases use AES-256 block-level schemas to secure raw clinical data points, file repositories, and user profiles.</li>
              <li><strong>Network Firewalls & Intrusion Monitoring:</strong> Access controls utilize automated distributed denial-of-service (DDoS) shield arrays, network isolation rules, and continuous security pattern analysis.</li>
              <li><strong>Strict Access Control:</strong> Internal system configurations follow the principle of least-privilege access. Only authorized medical staff involved in your care are permitted to view sensitive medical logs.</li>
            </ul>
          </section>

          {/* 8. Data Sharing & Disclosure */}
          <section id="8-data-sharing" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">8. Data Sharing & Disclosure</h2>
            <p className="leading-relaxed mb-4 font-semibold text-green-800">
              Core Principle: Mission 100 Hospital does not sell, rent, monetize, or lease your Personal Data or Medical Records to any third-party marketing entities, data aggregators, or advertising agencies.
            </p>
            <p className="leading-relaxed mb-4">
              Your information is shared strictly with the following entities for designated purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Authorized Medical Practitioners & Hospitals:</strong> Designated consultants, diagnostic specialists, and internal medical teams responsible for providing your healthcare services.</li>
              <li><strong>Partner Diagnostic Laboratories:</strong> Field agents and laboratory medical technical specialists assigned to fulfill your specific lab test bookings.</li>
              <li><strong>Legal Compliance and Law Enforcement:</strong> Government or judicial authorities if required by law, court order, or formal regulatory declarations under the Digital Personal Data Protection Act, 2023.</li>
            </ol>
          </section>

          {/* 9. Data Retention & Deletion */}
          <section id="9-data-retention" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">9. Data Retention & Deletion</h2>
            <p className="leading-relaxed mb-4">
              We retain your personal and health records only for as long as your application account remains active, or as necessary to fulfill the primary clinical and administrative purposes outlined in this policy. 
            </p>
            <p className="leading-relaxed">
              Please note that certain health metrics and prescription histories must be archived for extended periods under Indian medical regulations governing clinical data retention. Once these regulatory timelines expire, or upon a verified account erasure request, your records are deleted or permanently anonymized.
            </p>
          </section>

          {/* 10. User Rights & DPDPA Compliance */}
          <section id="10-user-rights" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">10. User Rights & DPDPA Compliance</h2>
            <p className="leading-relaxed mb-4">
              Under the Digital Personal Data Protection Act (DPDPA), 2023 (India), you hold extensive legal entitlements over your personal data. We provide intuitive mechanisms within the application configuration dashboard to exercise these rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Summary Information:</strong> Review real-time lists detailing what specific personal data points are processed along with the summary logs of third-party exposures.</li>
              <li><strong>Right to Correction & Update:</strong> Modify outdated elements, correct misspelled entries, or supplement missing profile parameters.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke authorization for specific features (such as push alerts or device storage permissions) at any time.</li>
              <li><strong>Right to Grievance Redressal:</strong> Register complaints with our dedicated Data Protection Officer regarding any perceived data handling discrepancies.</li>
            </ul>
          </section>

          {/* 11. Account & Data Deletion Process */}
          <section id="11-account-deletion" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">11. Account & Data Deletion Process</h2>
            <p className="leading-relaxed mb-4">
              To comply with the Google Play Developer Policy regarding mandatory account deletion pathways, we provide straightforward data removal options.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h4 className="text-base font-bold text-slate-900 mb-2">How to Request Erasure:</h4>
              <p className="text-sm mb-4">
                You can initiate account deletion directly through the application settings menu, or by submitting a formal request via email to <strong>info@mission100hospital.com</strong> using your registered email address.
              </p>
              <h4 className="text-base font-bold text-slate-900 mb-2">Processing & Lifecycle:</h4>
              <p className="text-sm">
                Upon verification, the technical team locks the profile within <strong>72 business hours</strong>, triggering an un-indexing script across our database nodes. Full asset deletion is completed within <strong>30 calendar days</strong>, except where ongoing regulatory preservation laws override standard deletion protocols.
              </p>
            </div>
          </section>

          {/* 12. Children's Privacy */}
          <section id="12-childrens-privacy" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">12. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our application services are not designed for independent use by individuals under the age of 18 (or under 13 under global child safety frameworks). We do not knowingly capture information from unverified minors. If you are a parent or legal guardian and discover your child has created an account without authorization, please contact us immediately to arrange for data erasure.
            </p>
          </section>

          {/* 13. Cross-Border Data Transfers */}
          <section id="13-international-transfers" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">13. Cross-Border Data Transfers</h2>
            <p className="leading-relaxed">
              Your data is stored and processed on secure cloud instances located in India. If any analytical infrastructure requires secure routing through global nodes, we implement appropriate safeguards to ensure your data receives a level of protection equivalent to that required under applicable Indian laws.
            </p>
          </section>

          {/* 14. Changes to This Policy */}
          <section id="14-policy-changes" className="mb-12 scroll-mt-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4 border-b border-green-100 pb-2">14. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this App Privacy Policy periodically to adapt to changing application features, technical updates, or evolving legal frameworks. When updates occur, the updated policy will be published at this location, and the "Last Updated" timestamp will be modified accordingly. For significant changes, we will notify you through an in-app alert or via your registered email address.
            </p>
          </section>

          {/* 15. Contact & Grievance Redressal */}
          <section id="15-contact-grievance" className="mb-6 scroll-mt-6 p-6 bg-green-50 rounded-xl border-l-4 border-green-600">
            <h2 className="text-xl font-bold text-green-900 mb-2">15. Contact & Grievance Redressal</h2>
            <p className="text-sm mb-4">
              If you have any questions, clarifications, comments, or wish to exercise your data protection rights, please contact our designated grievance team:
            </p>
            <div className="text-sm space-y-1">
              <p><strong>Entity Name:</strong> Mission 100 Hospital</p>
              <p><strong>Official Web Portal:</strong> <a href="https://mission100hospital.com" className="text-green-800 underline">https://mission100hospital.com</a></p>
              <p><strong>Support Email:</strong> <a href="mailto:info@mission100hospital.com" className="text-green-800 underline">info@mission100hospital.com</a></p>
              <p><strong>Support Helpline:</strong> +91 87964 71583</p>
              <p><strong>Country of Jurisdiction:</strong> India</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}