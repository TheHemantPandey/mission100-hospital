import React from 'react';
import Link from 'next/link';

export default function HeartPreventionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-red-50 py-20 px-6 border-b border-red-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em] mb-4">
            Clinical Focus Area
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            HEART ATTACK <br /> 
            <span className="text-red-600 font-extrabold">PREVENTION</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Prioritizing cardiac safety through advanced ECG analysis and risk assessment to ensure long-term quality of life.
          </p>
        </div>
      </section>

      {/* 2. LIVE MONITORING STAT SECTION */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="bg-gray-900 rounded-4xl p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white">
          <div className="space-y-2">
            <span className="text-green-400 font-bold uppercase text-xs tracking-widest">Active Data Feed</span>
            <h3 className="text-2xl font-bold">Heart Health Score</h3>
            <p className="text-gray-400 text-sm italic">Based on Mission 100 diagnostic modeling</p>
          </div>
          <div className="text-center">
            <span className="text-7xl font-black text-white">98%</span>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-green-500 h-full w-[98%] transition-all duration-1000"></div>
            </div>
          </div>
          <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold transition-all shadow-lg shadow-green-900/20">
            Check Your Risk Now
          </button>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Our Core Pillars</h2>
            <div className="space-y-6">
              {[
                { title: "Early Detection", desc: "Detection of critical heart risks before they become emergencies." },
                { title: "Precision Care", desc: "Personalized care plans designed specifically for a healthier heart." },
                { title: "Modern Integration", desc: "Integration of modern Radiology and Pathology with traditional Ayurveda." },
                { title: "Advanced Analysis", desc: "Data-driven insights including ECG heart risk analysis and monitoring." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors group">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center shrink-0 group-hover:text-red-600 font-bold text-green-600">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-600 rounded-[3rem] p-12 text-white relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
             <h3 className="text-3xl font-bold mb-6">"Live 100 Years"</h3>
             <p className="text-lg opacity-90 mb-10 leading-relaxed italic">
               "At Mission 100, we are dedicated to the revolutionary idea that healthcare should be preventive rather than just reactive."
             </p>
             <Link href="/contact" className="bg-white text-red-600 px-10 py-4 rounded-full font-black text-center hover:shadow-xl transition-all">
               BOOK A CONSULTATION
             </Link>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL DISCLAIMER SECTION */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest leading-loose">
            Mission 100 provides preventative care and health optimization. <br />
            Consultations and risk assessments do not replace emergency medical care. [cite: 88]
          </p>
        </div>
      </section>
    </main>
  );
}