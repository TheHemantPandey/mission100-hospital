import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "FAQ", 
  description: "Find answers to frequently asked questions about Mission 100 Hospital's preventive care, longevity modeling, heart risk assessments, and Ayurveda services.",
  keywords: ["Preventive Healthcare FAQ", "Heart Risk Assessment", "Longevity Modeling", "Mission 100 Hospital Questions"],
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What exactly is Preventive Healthcare at Mission 100?",
      answer: "Preventive healthcare at Mission 100 is a revolutionary approach where we focus on being proactive rather than reactive. We provide the tools, data, and guidance necessary to identify health risks early and achieve a vibrant century of life."
    },
    {
      question: "How can I check my heart attack risk here?",
      answer: "We prioritize cardiac safety through advanced ECG analysis and risk assessment. Our diagnostic modeling provides a 'Heart Health Score' to help identify critical heart risks before they become emergencies."
    },
    {
      question: "Which hospitals are part of the Mission 100 network?",
      answer: "Mission 100 operates through a specialized network of longevity-focused specialists. Our main center is located at Metroplex East Tower, Laxmi Nagar, New Delhi."
    },
    {
      question: "Is Mission 100 suitable for senior citizens?",
      answer: "Yes, we focus heavily on the needs of the elderly, ensuring that the aging process is managed with dignity, strength, and scientific precision to maintain mobility into old age."
    },
    {
      question: "What is 'Happiness Measurement'?",
      answer: "It is a holistic support system that uses a scientific 'Happiness Score' based on lifestyle and mood to ensure peace of mind and emotional vitality, which are key to long-term health."
    },
    {
      question: "Do you provide Ayurvedic and Yoga services?",
      answer: "Yes, we blend ancient wellness practices like Dosha-based dietary planning and Pranayama with modern Radiology and Pathology for a complete health ecosystem."
    },
    {
      question: "Can I manage my sugar levels through Mission 100?",
      answer: "Absolutely. We master your glucose through Continuous Glucose Monitoring (CGM) integration, HBA1C risk reduction, and personalized low-glycemic lifestyle planning."
    },
    {
      question: "What is Longevity Modeling?",
      answer: "Longevity modeling utilizes preventive healthcare data, biological age testing, and telomere analysis to extend your healthy years and predict potential health risks."
    },
    {
      question: "How is bone and body strength monitored?",
      answer: "We use gold-standard densitometry and advanced DXA scanning for early osteoporosis detection, alongside personalized Vitamin D and Calcium optimization plans."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment directly through our website by clicking the 'Book Consultation' button, or by calling our health experts at +91 9220 620 209."
    }
  ];

  // --- NEW: FAQ SCHEMA GENERATOR ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* ADDING THE SCHEMA TO THE HEAD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HEADER SECTION */}
      <section className="bg-green-50 py-24 px-6 text-center border-b border-green-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Common <span className="text-green-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our journey toward living 100 healthy years through preventive healthcare, Ayurveda, and modern vitality science.
          </p>
        </div>
      </section>

      {/* 2. FAQ LIST SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group border border-gray-100 rounded-3xl p-8 hover:bg-gray-50 transition-all shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-4">
                <span className="text-green-500 font-black">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/20 rounded-full -ml-10 -mt-10 blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-gray-400 mb-10 text-lg">Our health experts are ready to guide you on your longevity journey.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 px-10 py-4 rounded-xl font-black hover:bg-green-700 transition-all">
              CONTACT EXPERTS
            </Link>
            <a href="tel:+919220620209" className="bg-white text-gray-900 px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition-all">
              +91 9220 620 209
            </a>
          </div>
        </div>
      </section>

      {/* 4. DISCLAIMER */}
      <section className="mt-20 py-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-loose">
            Mission 100 Hospital provides preventative care and health optimization. <br />
            Consultations and risk assessments do not replace emergency medical or psychiatric care.
          </p>
        </div>
      </section>
    </main>
  );
}