"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is Preventive Healthcare at Mission 100?",
      answer: "Unlike traditional hospitals that treat you after you fall ill, Mission 100 focuses on keeping you healthy through early screening and lifestyle changes."
    },
    {
      question: "How can I check my heart attack risk here?",
      answer: "We prioritize heart health through advanced ECG screenings to identify risks before they become emergencies."
    },
    {
      question: "Which hospitals are part of the Mission 100 network?",
      answer: "We coordinate care with top-tier institutions including Max Hospital, Apollo, Fortis, Medanta, Antara, and Sir Ganga Ram Hospital."
    },
    {
      question: "Is Mission 100 suitable for senior citizens?",
      answer: "Yes, our main focus is on Adults and the Elderly, specializing in age-related care and mobility support."
    },
    {
      question: "What is 'Happiness Measurement'?",
      answer: "We believe health is mental as well as physical, providing tools to assess stress levels and emotional well-being."
    },
    {
      question: "Do you provide Ayurvedic and Yoga services?",
      answer: "Yes, we bridge the gap between modern medicine and traditional wellness practices like Yoga and Ayurveda."
    },
    {
      question: "Can I manage my sugar levels through Mission 100?",
      answer: "Our team monitors blood sugar levels and identifies specific body deficiencies to create a personalized metabolic balance plan."
    },
    {
      question: "What is the Longevity modeling?",
      answer: "It is a data-driven risk assessment tool used to identify life-shortening risks so we can work to mitigate them."
    },
    {
      question: "How is bone and body strength monitored?",
      answer: "We use precise bone measurement diagnostics and body strength assessments to ensure your mobility remains high as you age."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can use the 'Book Appointment' button on our homepage or click 'Download Brochure' to get a detailed PDF of our services."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-50/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Support</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our journey toward living 100 healthy years.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group transition-all duration-300 border-2 rounded-2xl overflow-hidden ${
                  isOpen 
                    ? 'border-green-500 bg-white shadow-xl shadow-green-100/50' 
                    : 'border-slate-100 bg-white hover:border-green-200 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-6 text-left transition-all duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${
                    isOpen ? 'text-green-700' : 'text-slate-700 group-hover:text-green-600'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Custom Animated Plus/Minus Icon */}
                  <div className={`relative flex-shrink-0 w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all ${isOpen ? 'text-green-500' : 'text-slate-400'}`}></div>
                    <div className={`absolute top-0 left-1/2 w-0.5 h-full bg-current transition-all ${isOpen ? 'rotate-90 opacity-0' : 'text-slate-400'}`}></div>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-50 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex gap-2">
                       <span className="inline-block w-8 h-1 rounded-full bg-green-500/20"></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            Still have questions? <a href="#" className="text-green-600 font-bold hover:underline">Contact our health experts</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;