import React from 'react';
import Link from 'next/link';
import { 
  Activity, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  Microscope, 
  LineChart, 
  Leaf, 
  Wind, 
  Plus, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// --- 1. METADATA (For Search Engines) ---
export const metadata = {
  title: "Metabolic Sugar Control & CGM Monitoring",
  description: "Master your glucose stability with Mission 100 Hospital. We integrate Continuous Glucose Monitoring (CGM), HBA1C control, and precision nutrition to manage sugar naturally and prevent long-term complications.",
  keywords: ["Sugar Control", "Metabolic Health", "CGM Monitoring", "HBA1C Risk Reduction", "Precision Nutrition New Delhi", "Mission 100 Hospital"],
};

export default function MetabolicSugarControl() {
  
  // --- 2. BREADCRUMB SCHEMA (For Rich Snippets) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mission100hospital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.mission100hospital.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Metabolic Sugar Control",
        "item": "https://www.mission100hospital.com/services/metabolic-sugar-control"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: THE VITALITY VISION */}
      <section className="relative pt-32 pb-24 px-6 bg-slate-50 overflow-hidden border-b border-emerald-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 skew-x-12 translate-x-32 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white border border-emerald-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.25em]">
                Metabolic Balance Protocol
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05]">
              Mastering Your <br />
              <span className="text-emerald-600 font-light italic">Glucose Stability.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              Mastering your glucose for long-term vitality. We integrate Continuous Glucose Monitoring (CGM) and precision nutrition to build your foundation for a vibrant century of life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-[#0F172A] hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-emerald-100 transition-all flex items-center justify-center gap-3 group">
                Check Sugar Risk Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Download Sugar Guide
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 w-full relative">
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-emerald-50 relative overflow-hidden">
               <div className="aspect-square bg-linear-to-br from-emerald-500 to-emerald-700 rounded-[2.5rem] flex flex-col items-center justify-center text-white p-10">
                  <LineChart size={80} strokeWidth={1} className="opacity-50 mb-6" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Stability Index</p>
                  <p className="text-6xl font-black italic">Stable</p>
                  <div className="w-full h-1.5 bg-white/20 rounded-full mt-8 overflow-hidden">
                    <div className="bg-white h-full w-[85%]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS: THE MISSION 100 FRAMEWORK */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Our Core Pillars of <br/>Metabolic Optimization.</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Mission 100 provides metabolic health optimization and preventative care. We prioritize biological equilibrium through data-driven insights.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "CGM Integration", desc: "Continuous Glucose Monitoring for real-time sugar tracking." },
                { title: "HBA1C Control", desc: "Advanced risk reduction and monitoring strategies." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 mb-3" size={20} />
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTRUMENTATION: SCIENTIFIC MONITORING */}
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black italic mb-4">Precision Instrumentation</h2>
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">Data-Driven Vitality Modeling</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Glucose Monitoring", 
                desc: "Integration of wearable CGM sensors for detailed metabolic feedback loops.", 
                icon: <Activity /> 
              },
              { 
                title: "Insulin Sensitivity", 
                desc: "Modeling and optimization of metabolic responses for sustained energy.", 
                icon: <Zap /> 
              },
              { 
                title: "Risk Assessment", 
                desc: "Predictive sugar control modeling to prevent long-term complications.", 
                icon: <ShieldCheck /> 
              }
            ].map((pillar, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-emerald-500 transition-all duration-500 group">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-900/20 group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MICRONUTRIENT & VITALITY TESTING */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-square bg-emerald-50 rounded-[4rem] flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-8">
                   <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center text-emerald-600 font-black text-2xl">Vit A</div>
                   <div className="w-32 h-32 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center text-white font-black text-2xl translate-y-12">Vit B</div>
                   <div className="w-32 h-32 bg-[#0F172A] rounded-full shadow-2xl flex items-center justify-center text-white font-black text-2xl">Vit D</div>
                   <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center text-emerald-600 font-black text-2xl translate-y-12">Zinc</div>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100">
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Vitality Level</p>
                <p className="text-4xl font-black italic text-slate-900">88%</p>
             </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Fueling Your Body with <br /><span className="text-emerald-600 italic">Precision Nutrition.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Full-spectrum vitamin deficiency screening and mineral balance for optimized energy and immunity. We provide personalized nutrient roadmaps based on bioavailability analysis.
            </p>
            <ul className="space-y-4">
              {[
                "Full-spectrum vitamin deficiency screening.",
                "Mineral balance for optimized energy and immunity.",
                "Personalized supplementation and nutrient roadmaps.",
                "Absorption tracking and bioavailability analysis."
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-center font-bold text-slate-700 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {text}
                </li>
              ))}
            </ul>
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black shadow-lg hover:bg-[#0F172A] transition-all">
              Check Nutrient Levels
            </button>
          </div>
        </div>
      </section>

      {/* 5. VEDIC INTEGRATION: YOGA & AYURVEDA */}
      <section className="py-24 px-6 bg-emerald-50/50">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-emerald-100 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
              <Leaf size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 italic">Holistic Vedic Ayurveda</h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Blending ancient wellness practices with modern medicine for a complete metabolic ecosystem. We use Dosha-based dietary planning and herbal rejuvenation to manage sugar naturally.
            </p>
            <div className="flex gap-3">
              <div className="px-6 py-3 bg-emerald-50 rounded-xl text-emerald-700 font-bold text-xs uppercase tracking-widest">Yoga</div>
              <div className="px-6 py-3 bg-emerald-50 rounded-xl text-emerald-700 font-bold text-xs uppercase tracking-widest">Meditation</div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full space-y-4">
             <div className="p-8 bg-[#F8FAF9] rounded-3xl border border-emerald-50">
               <h5 className="font-bold text-slate-900 mb-2 italic text-xl">Balance Index: Aligned</h5>
               <p className="text-sm text-slate-400">Daily meditation and pranayama guidance for metabolic stress relief.</p>
             </div>
             <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black shadow-lg hover:bg-emerald-700 transition-all uppercase tracking-widest text-xs">
                Start Healing Journey
             </button>
          </div>
        </div>
      </section>

      {/* 6. METABOLIC INQUIRIES (FAQ) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 italic mb-4">Sugar Control Inquiries</h2>
            <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">Understanding Metabolic Longevity</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Can I manage my sugar levels through Mission 100?", 
                a: "Yes, through Continuous Glucose Monitoring (CGM) integration and personalized metabolic optimization strategies." 
              },
              { 
                q: "What is HBA1C risk reduction?", 
                a: "It involves monitoring your average blood sugar levels over months and creating a framework to lower risks through lifestyle and data-driven plans." 
              },
              { 
                q: "How does micronutrient testing help?", 
                a: "Deficiencies in minerals like Chromium or Zinc can affect insulin sensitivity. We identify and fix these through precision nutrition." 
              },
              { 
                q: "Is the sugar monitoring replacement for emergency care?", 
                a: "No. Monitoring and wellness plans do not replace emergency medical treatment for diabetic complications." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group cursor-pointer hover:bg-white hover:shadow-xl transition-all">
                <h5 className="font-bold text-[#0F172A] text-lg flex justify-between items-center group-hover:text-emerald-600">
                  {faq.q} <Plus className="text-emerald-300 group-hover:rotate-90 transition-transform" />
                </h5>
                <p className="mt-6 text-slate-500 leading-relaxed text-sm hidden group-hover:block transition-all">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLINICAL DISCLAIMER */}
      <section className="bg-[#0F172A] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] leading-relaxed">
            Mission 100 provides metabolic health optimization and preventative care. <br />
            Glucose monitoring and wellness plans do not replace clinical medical advice or emergency medical treatment for diabetic complications. <br />
            In case of a medical emergency, please visit your nearest hospital immediately.
          </p>
          <div className="mt-10 pt-8 border-t border-slate-800 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Mission 100™ Hospital. All Rights Reserved.
          </div>
        </div>
      </section>

    </main>
  );
}