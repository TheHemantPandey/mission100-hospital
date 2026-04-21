import React from 'react';
import Link from 'next/link';

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-blue-50 py-20 px-6 border-b border-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">
            Neurological & Emotional Wellness
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight uppercase">
            Mental Health <br /> 
            <span className="text-blue-600 font-extrabold">& Stress Management</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Holistic support for stress and happiness measurement to ensure peace of mind and long-term cognitive clarity.
          </p>
        </div>
      </section>

      {/* 2. STRESS RESILIENCE STAT SECTION */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white">
          <div className="space-y-2">
            <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">Active Monitoring</span>
            <h3 className="text-2xl font-bold">Stress Resilience Score</h3>
            <p className="text-gray-400 text-sm italic">Cognitive load & mindset stability analysis</p>
          </div>
          <div className="text-center">
            <span className="text-7xl font-black text-white">92%</span>
            <div className="w-64 bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-blue-500 h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-bold uppercase">
                <span>Cognitive Load:</span>
                <span className="text-green-400">Optimal</span>
            </div>
            <div className="flex justify-between text-xs font-bold uppercase">
                <span>Mindset Stability:</span>
                <span className="text-blue-400">High</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Our Core Pillars</h2>
            <div className="space-y-4">
              {[
                { title: "Neuro-Mapping", desc: "Advanced neuro-mapping and cognitive assessments to track brain health." },
                { title: "Stress Tracking", desc: "Advanced stress-level tracking and biofeedback monitoring." },
                { title: "Mindfulness Support", desc: "Mindfulness and cognitive behavioral support for long-term emotional well-being." },
                { title: "Burnout Prevention", desc: "Personalized burnout prevention frameworks and resilience training." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✔</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col justify-center min-h-[400px] relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>
             <h3 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter">Happiness Index: 8.5/10</h3>
             <p className="text-lg opacity-90 mb-8 leading-relaxed">
               "We provide specialized neuro-care and mental health support focused on long-term quality of life preservation."
             </p>
             <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform">
               CHECK STRESS SCORE NOW
             </button>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL DISCLAIMER SECTION */}
      <section className="bg-slate-50 py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] leading-loose">
            Mission 100 provides preventative care and mental health optimization. <br />
            Consultations and risk assessments do not replace emergency psychiatric clinical diagnosis or emergency care.
          </p>
        </div>
      </section>
    </main>
  );
}