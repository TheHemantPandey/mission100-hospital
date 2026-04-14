"use client"; // <--- Add this line at the very top!

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is Preventive Healthcare at Mission 100?",
      answer: "Unlike traditional hospitals that treat you after you fall ill, Mission 100 focuses on keeping you healthy through early screening and lifestyle changes. [cite: 8, 10]"
    },
    {
      question: "How can I check my heart attack risk here?",
      answer: "We prioritize heart health through advanced ECG screenings to identify risks before they become emergencies. [cite: 23, 37, 39]"
    },
    {
      question: "Which hospitals are part of the Mission 100 network?",
      answer: "We coordinate care with top-tier institutions including Max Hospital, Apollo, Fortis, Medanta, Antara, and Sir Ganga Ram Hospital. [cite: 42, 43, 44, 45, 47]"
    },
    {
      question: "Is Mission 100 suitable for senior citizens?",
      answer: "Yes, our main focus is on Adults and the Elderly, specializing in age-related care and mobility support. [cite: 17, 18, 22]"
    },
    {
      question: "What is 'Happiness Measurement'?",
      answer: "We believe health is mental as well as physical, providing tools to assess stress levels and emotional well-being. [cite: 23, 28, 35, 36]"
    },
    {
      question: "Do you provide Ayurvedic and Yoga services?",
      answer: "Yes, we bridge the gap between modern medicine and traditional wellness practices like Yoga and Ayurveda. [cite: 11, 13, 14]"
    },
    {
      question: "Can I manage my sugar levels and deficiencies through Mission 100?",
      answer: "Our team monitors blood sugar levels and identifies specific body deficiencies to create a personalized metabolic balance plan. [cite: 24, 34]"
    },
    {
      question: "What is the 'Death Prediction' or Longevity modeling?",
      answer: "It is a data-driven risk assessment tool used to identify life-shortening risks so we can work to mitigate them. [cite: 31, 33]"
    },
    {
      question: "How is bone and body strength monitored?",
      answer: "We use precise bone measurement diagnostics and body strength assessments to ensure your mobility remains high as you age. [cite: 27, 32]"
    },
    {
      question: "How do I book an appointment or get the brochure?",
      answer: "You can use the 'Book Appointment' button on our homepage or click 'Download Brochure' to get a detailed PDF of our services. [cite: 60, 61, 62, 63]"
    }
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-green-600 font-medium">
            "Live 100 Years" [cite: 55]
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-none">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 text-left font-semibold text-gray-700 hover:bg-green-50 transition-all duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className={openIndex === index ? "text-green-700" : ""}>
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 text-gray-600 bg-white border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;