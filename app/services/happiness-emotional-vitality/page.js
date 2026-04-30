import React from 'react';
import Link from 'next/link';
import { 
  Sun, 
  Smile, 
  Heart, 
  Wind, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Brain, 
  Zap, 
  Plus, 
  ArrowRight,
  Compass
} from 'lucide-react';

// --- 1. METADATA (ABOVE THE FUNCTION) ---
export const metadata = {
  title: "Happiness & Emotional Vitality",
  description: "Experience holistic mental support at Mission 100 Hospital. Our scientific happiness scoring and emotional vitality frameworks ensure peace of mind for a healthy century of life.",
  keywords: ["Emotional Vitality", "Happiness Score", "Mental Wellness", "Longevity Psychology", "Holistic Support New Delhi"],
};

export default function HappinessVitalityPage() {
  
  // --- 2. BREADCRUMB SCHEMA LOGIC ---
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
        "name": "Happiness & Emotional Vitality",
        "item": "https://www.mission100hospital.com/services/happiness-emotional-vitality"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#2D2D2D] font-sans selection:bg-yellow-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: THE VITALITY OF JOY */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-white overflow-hidden">
        {/* Soft, warm background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,#FEF9E7_0%,transparent_60%)] opacity-70 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-50 rounded-full blur-[120px] opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-yellow-100">
              Mission 100 Emotional Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-[1.05] mb-8 tracking-tighter uppercase">
              Emotional <br />
              <span className="text-yellow-600 font-light italic serif lowercase">Vitality & Joy.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed mb-10">
              Peace of mind is the foundation of longevity. At **Mission 100**, we use scientific happiness scoring to ensure emotional vitality throughout your century-long journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-[#1A1A1A] hover:bg-yellow-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl transition-all flex items-center justify-center gap-3 group">
                Check Happiness Score
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white border-2 border-stone-200 text-stone-600 px-10 py-5 rounded-2xl font-bold hover:bg-stone-50 transition-all">
                Our Holistic Approach
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full relative">
            <div className="relative z-10 bg-white p-3 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] border border-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=1000" 
                alt="Emotional Peace and Wellness" 
                className="rounded-[3rem] grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Floating Vitality Card */}
            <div className="absolute -bottom-8 lg:-right-12 right-6 left-6 lg:left-auto bg-white p-8 rounded-3xl shadow-2xl z-20 border border-yellow-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <Sun size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Peace Index</p>
                  <p className="text-2xl font-black text-[#1A1A1A]">Optimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PILLARS OF HAPPINESS */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight">The Science of <br/>Peace & Vitality</h2>
            <div className="h-px bg-stone-800 w-full hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Happiness Scoring",
                desc: "A scientific support system to measure lifestyle harmony and emotional well-being.",
                icon: <Smile strokeWidth={1.5} />
              },
              {
                title: "Holistic Support",
                desc: "Comprehensive mental wellness frameworks to ensure peace of mind and clarity.",
                icon: <Heart strokeWidth={1.5} />
              },
              {
                title: "Mood Resilience",
                desc: "Techniques to maintain emotional vitality and mood stability in daily life.",
                icon: <Sparkles strokeWidth={1.5} />
              },
              {
                title: "Mindful Breathing",
                desc: "Pranayama and stress-relief protocols integrated into your longevity plan.",
                icon: <Wind strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-stone-900 border border-stone-800 hover:border-yellow-600 transition-all duration-500">
                <div className="w-14 h-14 bg-yellow-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-stone-500 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EMOTIONAL ECOSYSTEM SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-[#FFFDF9]">
                <img 
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800" 
                  alt="Holistic Emotional Support" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute top-12 -left-8 bg-[#1A1A1A] text-white p-8 rounded-3xl shadow-2xl transform -rotate-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-500 mb-2">Longevity Focus</p>
                <p className="text-3xl font-black italic">Vitality</p>
             </div>
          </div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <div className="w-12 h-1 bg-yellow-600"></div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tighter uppercase">
              Peace of <br /><span className="text-yellow-600 font-light italic serif lowercase">Mind.</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed">
              We ensure that the aging process is managed with dignity and mental clarity. Our happiness score integrates emotional health into your total longevity plan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
               {[
                 { title: "Happiness Score", desc: "Scientific measurement of emotional health." },
                 { title: "Longevity Mindset", desc: "Mindset stability for a 100-year life." },
                 { title: "Clarity Protocols", desc: "Emotional resilience and mental clarity." },
                 { title: "Dignity in Aging", desc: "Support for emotional well-being." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-5 h-5 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                       <Zap size={10} />
                    </div>
                    <div>
                       <h5 className="font-bold text-[#1A1A1A] text-sm mb-1 uppercase tracking-tight">{item.title}</h5>
                       <p className="text-[11px] text-slate-400 leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL DISCLAIMER */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] leading-relaxed">
             Mission 100 provides holistic support frameworks and happiness scoring for wellness. <br />
             Our emotional vitality assessments are for self-development and do not replace professional psychiatric or clinical care. <br />
             In case of a medical or mental health emergency, please visit your nearest hospital immediately.
           </p>
           <div className="mt-10 pt-8 border-t border-stone-50 text-stone-300 text-[10px] font-bold uppercase tracking-widest">
              © 2026 MISSION 100™ HOSPITAL. ALL RIGHTS RESERVED.
           </div>
        </div>
      </section>

    </main>
  );
}