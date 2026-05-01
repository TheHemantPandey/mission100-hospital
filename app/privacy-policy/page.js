import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "October 2023"; // Update as needed

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-green-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          At Mission 100 Hospital, your health and your privacy are our top priorities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 bg-white p-8 md:p-12 shadow-sm rounded-xl">
        <p className="mb-8 text-sm text-slate-500 italic">Last Updated: {lastUpdated}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">1. Introduction</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital ("we," "us," or "our") is committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our medical services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification:</strong> Name, contact number, email address, and physical address.</li>
            <li><strong>Health Information:</strong> Medical history, laboratory results, and treatment records provided during consultations.</li>
            <li><strong>Usage Data:</strong> IP addresses and cookies to improve your experience on our website.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide personalized medical care and anti-aging treatments.</li>
            <li>Communicate appointment reminders and health updates.</li>
            <li>Process payments and maintain billing records.</li>
            <li>Comply with legal and medical regulatory requirements.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">4. Data Security</h2>
          <p className="leading-relaxed">
            We implement industry-standard encryption and security protocols to prevent unauthorized access to your sensitive medical data. Access to your information is strictly limited to authorized medical staff involved in your care.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-green-900 mb-4">5. Third-Party Sharing</h2>
          <p className="leading-relaxed">
            Mission 100 Hospital does not sell or rent your personal information. We only share data with third-party diagnostic labs or insurance providers when it is essential for your treatment or as required by law.
          </p>
        </section>

        <section className="mb-10 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-green-900 mb-2">6. Contact Us</h2>
          <p>If you have any questions regarding this policy or how your data is handled, please reach out to our privacy officer:</p>
          <p className="mt-4 font-bold">Mission 100 Hospital</p>
          <p>Email: info@mission100hospital.com</p>
          <p>Phone: +91 9220 620 209</p>
        </section>
      </div>
    </div>
  );
}