import React from 'react';
import { 
  Activity, 
  Zap, 
  Microscope, 
  Droplets, 
  ShieldCheck, 
  LineChart, 
  Leaf, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Dna, 
  Layers 
} from 'lucide-react';

// --- 1. METADATA (For Search Engines) ---
export const metadata = {
  title: "Vitamins, Vitality & Precision Nutrition",
  description: "Advanced micronutrient testing and bioavailability analysis at Mission 100 Hospital. We provide personalized nutrient roadmaps and deficiency screening to manage aging with scientific precision.",
  keywords: ["Micronutrient Testing", "Vitamin Deficiency Screening", "Precision Nutrition New Delhi", "Bioavailability Analysis", "Geriatric Longevity Science"],
};

export default function VitaminsVitalityPage() {

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
        "name": "Vitamins & Vitality",
        "item": "https://www.mission100hospital.com/services/Vitamins"
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

      {/* 1. HERO SECTION: PRECISION NUTRITION */}
      <section className="relative pt-32 pb-24 px-6 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/40 skew-x-12 translate-x-32 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white border border-emerald-100 shadow-sm">
              <Sparkles size={14} className="text-emerald-600" />
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.25em]">
                Vitality Optimization Protocol
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05]">
              Fueling Your Body with <br />
              <span className="text-emerald-600 font-light italic">Precision Nutrition.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              At **Mission 100**, we utilize data-driven insights to monitor body deficiencies. Our goal is to provide the tools necessary for every individual to achieve a healthy, vibrant century of life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-[#0F172A] hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-emerald-100 transition-all flex items-center justify-center gap-3 group">
                Check Nutrient Levels <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Download Nutrient Roadmap
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 w-full relative">
            <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl border border-emerald-50 relative overflow-hidden">
               <div className="aspect-square bg-gradient-to-br from-emerald-600 to-[#0F172A] rounded-[3rem] flex flex-col items-center justify-center text-white p-10">
                  <div className="relative mb-6">
                    <Droplets size={80} strokeWidth={1} className="opacity-40" />
                    <Zap size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80 mb-2">Vitality Level</p>
                  <p className="text-7xl font-black italic">88%</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS: DATA-DRIVEN INSIGHTS */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">The Pillars of Nutrient Science</h2>
            <p className="text-slate-500">Comprehensive screening to ensure maximum longevity and energy.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Deficiency Screening", desc: "Full-spectrum vitamin deficiency screening for optimal health.", icon: <Layers className="text-emerald-600" /> },
              { title: "Mineral Balance", desc: "Optimizing mineral levels for enhanced energy and immunity.", icon: <Zap className="text-amber-500" /> },
              { title: "Precision Supplementation", desc: "Personalized roadmaps tailored to your unique biological needs.", icon: <Microscope className="text-blue-600" /> },
              { title: "Bioavailability Analysis", desc: "Advanced absorption tracking to ensure nutrient efficacy.", icon: <Activity className="text-purple-600" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VITAMIN MATRIX: ABSORPTION & TRACKING */}
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic leading-tight">Advanced Absorption <br/>& Tracking.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We don't just test; we track bioavailability. Our process ensures that your body successfully absorbs the micronutrients required for longevity science.
              </p>
              <div className="space-y-6">
                 {[
                   "Absorption tracking & bioavailability analysis.",
                   "Biological age testing and telomere analysis.",
                   "Personalized cellular regeneration protocols.",
                   "Advanced metabolic optimization."
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-4 text-sm font-medium">
                      <ShieldCheck className="text-emerald-500" size={20} />
                      {text}
                   </div>
                 ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="p-8 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 flex flex-col items-center text-center">
                <div className="text-4xl font-black italic text-emerald-400 mb-2">Vit B</div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Energy & DNA Repair</p>
              </div>
              <div className="p-8 bg-emerald-600 rounded-[2.5rem] flex flex-col items-center text-center translate-y-12">
                <div className="text-4xl font-black italic text-white mb-2">Vit D</div>
                <p className="text-[10px] uppercase tracking-widest text-emerald-100">Bone & Immune Support</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 flex flex-col items-center text-center">
                <div className="text-4xl font-black italic text-emerald-400 mb-2">Zinc</div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Immune Vitality</p>
              </div>
              <div className="p-8 bg-slate-900/50 rounded-[2.5rem] border border-slate-800 flex flex-col items-center text-center translate-y-12">
                <div className="text-4xl font-black italic text-emerald-400 mb-2">Vit A</div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">Cellular Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL FOCUS: GERIATRIC LONGEVITY */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" 
                  alt="Precision Lab Testing" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-emerald-50">
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Testing Focus</p>
                <p className="text-2xl font-black italic">Adults & Elderly</p>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
              Scientific Precision for <br /><span className="text-emerald-600 font-light italic serif">Geriatric Strength.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We focus heavily on the needs of Adults and the Elderly, ensuring that the aging process is managed with dignity, strength, and scientific precision. Our data-driven insights monitor body deficiencies to optimize longevity.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-4">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm">
                     <Dna size={24} />
                  </div>
                  <h5 className="font-bold text-slate-900">Telomere Analysis</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">Biological age testing via precise cellular protocols.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm">
                     <Zap size={24} />
                  </div>
                  <h5 className="font-bold text-slate-900">Metabolic Tuning</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">Optimization of metabolic pathways for healthy years.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VEDIC AYURVEDA: ANCIENT NUTRITION */}
      <section className="py-24 px-6 bg-[#F8FAF9]">
        <div className="max-w-5xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-4">
              <Leaf size={16} /> Ancient Wisdom Meets Modern Science
           </div>
           <h2 className="text-5xl font-black text-slate-900 italic mb-8">Vedic Nutrition & Rejuvenation</h2>
           <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              Our nutrition roadmaps integrate Dosha-based dietary planning with modern mineral balance. We use ancient rejuvenation techniques to support total vitality.
           </p>
           
           <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: "Dosha Planning", desc: "Dietary and lifestyle plans based on your unique Dosha." },
                { title: "Herbal Protocols", desc: "Herbal rejuvenation and stress-relief nutrient protocols." },
                { title: "Panchakarma", desc: "Ancient detoxification techniques for cellular purity." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-emerald-50 hover:shadow-xl transition-all">
                   <h4 className="font-bold text-emerald-900 mb-3">{item.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. VITALITY INQUIRIES (FAQ) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 italic mb-4">Nutrient Level Inquiries</h2>
            <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">Understanding Precision Fueling</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What exactly is 'Micronutrient Testing'?", 
                a: "It is a full-spectrum vitamin and mineral deficiency screening designed to optimize your energy and immunity." 
              },
              { 
                q: "How does bioavailability analysis help?", 
                a: "It tracks how well your body absorbs nutrients, ensuring your personalized roadmap is actually working at a cellular level." 
              },
              { 
                q: "Is nutrient testing suitable for senior citizens?", 
                a: "Yes. We focus heavily on the elderly to manage the aging process with scientific precision and strength." 
              },
              { 
                q: "Do these roadmaps replace clinical treatment?", 
                a: "No. Nutrient testing and supplement roadmaps do not replace clinical medical advice or treatment for deficiencies." 
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
      <footer className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
             Mission 100 provides nutritional optimization and preventative screening. <br />
             Nutrient testing and supplement roadmaps do not replace clinical medical advice or treatment for deficiencies. <br />
             In case of a medical emergency, visit your nearest hospital immediately.
           </p>
           <div className="mt-10 pt-8 border-t border-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 MISSION 100™ HOSPITAL. ALL RIGHTS RESERVED.
           </div>
        </div>
      </footer>

    </main>
  );
}