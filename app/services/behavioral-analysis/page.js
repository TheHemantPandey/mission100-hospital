import React from 'react';
import { 
  Brain, 
  Target, 
  Map, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Search, 
  TrendingUp, 
  Zap, 
  Plus, 
  ArrowRight,
  Compass
} from 'lucide-react';

// --- 1. METADATA (For Search Engines) ---
export const metadata = {
  title: "Personality & Behavioral Analysis",
  description: "Explore the psychology of longevity with Mission 100 Hospital. Our behavioral analysis and psychometric testing identify patterns to build a foundation for a healthy century of life.",
  keywords: ["Behavioral Analysis", "Psychometric Testing", "Personality Analysis", "Psychology of Longevity", "Mindset Coaching New Delhi"],
};

export default function BehavioralAnalysisPage() {
  
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
        "name": "Behavioral Analysis",
        "item": "https://www.mission100hospital.com/services/behavioral-analysis"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8F7F5] text-[#1A1A1A] font-sans selection:bg-orange-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: THE PSYCHOLOGY OF LONGEVITY */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-white overflow-hidden">
        {/* Subtle abstract background textures */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F1F0ED] skew-x-6 translate-x-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <Layers size={800} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-orange-100">
              Mission 100 Behavioral Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-[1.05] mb-8 tracking-tighter uppercase">
              Personality & <br />
              <span className="text-orange-700 font-light italic serif lowercase">Behavioral Analysis.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed mb-10">
              Understanding the psychology of longevity. At **Mission 100**, we believe that behavioral patterns are the key to a healthy, vibrant century of life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-[#1A1A1A] hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-orange-100 transition-all flex items-center justify-center gap-3 group">
                Test Your Personality
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white border-2 border-stone-200 text-stone-600 px-10 py-5 rounded-2xl font-bold hover:bg-stone-50 transition-all">
                Explore The Methodology
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full relative">
            <div className="relative z-10 bg-white p-3 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
                alt="Cognitive and Behavioral Awareness" 
                className="rounded-[3rem] grayscale-[40%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Minimalist Analytical Card */}
            <div className="absolute -bottom-8 lg:-left-12 left-6 right-6 lg:right-auto bg-[#1A1A1A] p-8 rounded-3xl shadow-2xl z-20 border border-stone-800">
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-2">Mindset Stability</p>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-white italic">High</span>
                <Brain className="text-orange-600" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS: THE ANALYTICAL FRAMEWORK */}
      <section className="py-24 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">The Four Pillars of <br/>Cognitive Longevity</h2>
              <p className="text-stone-400 text-lg leading-relaxed max-w-xl">
                Our approach provides deep self-discovery through behavioral pattern recognition for healthier habits.
              </p>
            </div>
            <div className="h-px bg-stone-800 w-full hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Psychometric Testing",
                desc: "Deep self-discovery protocols to understand your fundamental biological and mental makeup.",
                icon: <Search strokeWidth={1.5} />
              },
              {
                title: "Pattern Recognition",
                desc: "Identifying behavioral patterns to replace negative routines with life-extending habits.",
                icon: <Target strokeWidth={1.5} />
              },
              {
                title: "Personal Roadmaps",
                desc: "Strengths-based personal development roadmaps tailored to your psychological profile.",
                icon: <Map strokeWidth={1.5} />
              },
              {
                title: "Resilience Coaching",
                desc: "Emotional resilience and mindset coaching for long-term psychological preservation.",
                icon: <ShieldCheck strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-stone-900 border border-stone-800 hover:border-orange-700 transition-all duration-500">
                <div className="w-14 h-14 bg-orange-700 rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
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

      {/* 3. PSYCHOMETRIC LAB SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-[#F8F7F5]">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Behavioral Lab Analysis" 
                  className="w-full h-full object-cover grayscale-[30%]"
                />
             </div>
             <div className="absolute top-10 -right-8 bg-[#1A1A1A] text-white p-8 rounded-3xl shadow-2xl transform -rotate-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">Self-Discovery</p>
                <p className="text-3xl font-black italic">Active</p>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-12 h-1 bg-orange-700"></div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] leading-tight tracking-tighter uppercase">
              Deep <br /><span className="text-orange-700 font-light italic serif lowercase">Self-Discovery.</span>
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed max-w-xl">
              We utilize psychometric testing to uncover the unique strengths and cognitive habits that drive your daily choices and long-term health outcomes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
               {[
                 { title: "Habit Tracking", desc: "Recognition for healthier habits." },
                 { title: "Strength Mapping", desc: "Strengths-based development roadmaps." },
                 { title: "Mindset Stability", desc: "Emotional resilience coaching protocols." },
                 { title: "Psychometric Data", desc: "Scientific self-discovery frameworks." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-5 h-5 bg-orange-50 text-orange-700 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-700 group-hover:text-white transition-colors">
                       <Zap size={10} />
                    </div>
                    <div>
                       <h5 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h5>
                       <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE DASHBOARD METRICS */}
      <section className="py-32 px-6 md:px-12 bg-[#F1F0ED]">
        <div className="max-w-7xl mx-auto">
           <div className="bg-[#1A1A1A] rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-700 rounded-full blur-[150px] opacity-10 -mr-48 -mt-48"></div>
              
              <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
                <div>
                   <h3 className="text-4xl font-bold text-white mb-8 italic tracking-tight">Psychological Longevity Index</h3>
                   <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                     Mission 100 provides behavioral analysis and psychological wellness frameworks designed to build a strong foundation for lifelong mobility and mental clarity.
                   </p>
                   <button className="px-12 py-6 bg-white text-[#1A1A1A] rounded-2xl font-black shadow-xl hover:bg-orange-700 hover:text-white transition-all uppercase tracking-widest text-xs">
                      Analyze My Profile
                   </button>
                </div>
                <div className="w-full space-y-5">
                   {[
                     { label: "Mindset Stability", value: "High", score: "94%" },
                     { label: "Habit Efficiency", value: "Optimal", score: "88%" },
                     { label: "Resilience Level", value: "Stable", score: "92%" }
                   ].map((stat, i) => (
                     <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-all">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">{stat.label}</span>
                        <div className="text-right">
                          <span className="block text-2xl font-black text-orange-500 italic leading-none">{stat.value}</span>
                          <span className="text-[10px] text-stone-600 font-bold">{stat.score} Consistency</span>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. ROADMAPS & RESILIENCE */}
      <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight">
                Personalized <br /><span className="text-orange-700 italic font-light serif lowercase">Development Roadmaps.</span>
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed">
                We believe in strengths-based development. Our coaching protocols ensure the aging process is managed with dignity and mental strength.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-700 rounded-2xl flex items-center justify-center shadow-sm">
                       <Compass size={24} />
                    </div>
                    <h5 className="font-bold text-[#1A1A1A]">Guidance Hub</h5>
                    <p className="text-sm text-stone-400 leading-relaxed">Strengths-based development roadmaps.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-700 rounded-2xl flex items-center justify-center shadow-sm">
                       <TrendingUp size={24} />
                    </div>
                    <h5 className="font-bold text-[#1A1A1A]">Growth Metrics</h5>
                    <p className="text-sm text-stone-400 leading-relaxed">Mindset coaching for longevity science.</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 w-full">
              <div className="bg-[#F8F7F5] rounded-[4rem] p-16 border border-stone-100 flex flex-col justify-center items-center text-center">
                 <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-orange-700 shadow-xl mb-10">
                    <Brain size={40} />
                 </div>
                 <h4 className="text-3xl font-black mb-6 italic tracking-tight uppercase">Psychology of Longevity</h4>
                 <p className="text-stone-500 mb-10 leading-relaxed">
                    Behavioral analysis and psychological wellness frameworks are for self-development and ensure you stay on the path to a healthy century.
                 </p>
                 <button className="flex items-center gap-3 text-orange-700 font-bold uppercase tracking-widest text-xs group">
                    Begin Your Transformation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 6. CLINICAL DISCLAIMER */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] leading-relaxed">
             Mission 100 provides behavioral analysis and psychological wellness frameworks. <br />
             These assessments are for self-development and do not replace professional clinical mental health diagnosis. <br />
             In case of a psychological or medical emergency, please visit your nearest hospital immediately.
           </p>
           <div className="mt-10 pt-8 border-t border-stone-50 text-stone-300 text-[10px] font-bold uppercase tracking-widest">
              © 2026 MISSION 100™ HOSPITAL. ALL RIGHTS RESERVED.
           </div>
        </div>
      </section>

    </main>
  );
}