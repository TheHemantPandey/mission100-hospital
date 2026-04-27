import React from 'react';
import { Shield, Zap, Activity, Microscope, RefreshCcw, Heart } from 'lucide-react';

export default function AntiAgingSciencePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-emerald-50 py-20 px-6 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">
            Cellular Longevity & Vitality
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight uppercase">
            Biological Age <br /> 
            <span className="text-emerald-600 font-extrabold">& DNA Repair</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Harnessing the latest breakthroughs in bio-gerontology to optimize mitochondrial health and reverse cellular decline.
          </p>
        </div>
      </section>

      {/* 2. LONGEVITY METRIC SECTION (Matches your Mental Health Layout) */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="bg-slate-900 rounded-4xl p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white">
          <div className="space-y-2">
            <span className="text-emerald-400 font-bold uppercase text-xs tracking-widest">Bio-Marker Analysis</span>
            <h3 className="text-2xl font-bold">Current Longevity Index</h3>
            <p className="text-gray-400 text-sm italic">Mitochondrial efficiency & Telomere integrity</p>
          </div>
          <div className="text-center">
            <span className="text-7xl font-black text-white">88%</span>
            <div className="w-64 bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[88%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-bold uppercase">
                <span>Oxidative Stress:</span>
                <span className="text-emerald-400">Low Risk</span>
            </div>
            <div className="flex justify-between text-xs font-bold uppercase">
                <span>Cell Renewal:</span>
                <span className="text-teal-400">Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black text-gray-900 mb-8">The Science of Mission 100</h2>
            <div className="space-y-4">
              {[
                { title: "Epigenetic Testing", desc: "Analyzing DNA methylation to determine your true biological age versus chronological age." },
                { title: "Mitochondrial Support", desc: "Targeted protocols to boost ATP production and reduce cellular fatigue." },
                { title: "Autophagy Activation", desc: "Customized fasting and lifestyle cycles to trigger cellular cleaning and waste removal." },
                { title: "Hormonal Optimization", desc: "Restoring peak metabolic function through advanced endocrinology support." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
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

          <div className="order-1 md:order-2 bg-emerald-700 rounded-[3rem] p-12 text-white flex flex-col justify-center min-h-[400px] relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mb-20 blur-3xl"></div>
             <div className="mb-6">
                <Microscope className="w-12 h-12 text-emerald-300" />
             </div>
             <h3 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter">Regeneration Rate: +14%</h3>
             <p className="text-lg opacity-90 mb-8 leading-relaxed">
               "We don't just treat symptoms of aging; we optimize the biological machinery responsible for human lifespan."
             </p>
             <button className="bg-white text-emerald-800 px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform shadow-lg">
               ANALYZE BIO-AGE NOW
             </button>
          </div>
        </div>
      </section>

      {/* 4. LONGEVITY DISCLAIMER SECTION */}
      <section className="bg-slate-50 py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] leading-loose">
            Mission 100 Anti-Aging protocols are based on emerging nutritional and biological research. <br />
            Our longevity assessments are for optimization purposes and should be integrated with regular medical check-ups.
          </p>
        </div>
      </section>
    </main>
  );
}