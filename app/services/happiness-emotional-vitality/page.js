import React from 'react';
import Link from 'next/link';
import { 
  Smile, 
  Sun, 
  Heart, 
  Sparkles, 
  Users, 
  Waves, 
  Activity, 
  ShieldCheck, 
  ArrowRight,
  Plus,
  Zap
} from 'lucide-react';

export default function HappinessVitalityPage() {
  return (
    <main className="min-h-screen bg-[#FFFDFB] text-[#1C1917] font-sans selection:bg-amber-100">
      
      {/* 1. HERO SECTION: THE RADIANCE OF LIFE */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-[#FFF7ED] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-100/40 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px] z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm border border-amber-100">
              <Sun size={12} className="fill-amber-500 text-amber-500" />
              Mission 100 Emotional Protocol [cite: 10]
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1C1917] leading-[1.05] mb-8 tracking-tighter">
              Joyful Life. <br />
              <span className="text-amber-600 font-light italic serif">Vibrant Soul.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed mb-10">
              Measuring the science of a joyful life[cite: 141]. We focus on holistic wellness and emotional vitality to ensure your century of life is lived at 100%[cite: 10, 140].
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#1C1917] hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-amber-100 flex items-center justify-center gap-3 group">
                Check Happiness Score Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="relative z-10 bg-white p-3 rounded-[3.5rem] shadow-2xl border border-amber-50">
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1000" 
                alt="Emotional Vitality" 
                className="rounded-[3rem] grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 lg:-left-12 left-6 right-6 lg:right-auto bg-white p-8 rounded-3xl shadow-2xl border border-amber-50 z-20">
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">Happiness Index [cite: 130]</p>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-[#1C1917]">8.5/10</span>
                <Smile className="text-amber-500" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE PILLARS */}
      <section className="py-32 px-6 lg:px-12 bg-[#1C1917] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Pillars of <br/>Emotional Vitality [cite: 140]</h2>
              <p className="text-amber-100/40 text-lg leading-relaxed">
                Our framework provides scientific happiness scores based on your unique lifestyle and mood[cite: 143].
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Happiness Score",
                desc: "Scientific measurement based on lifestyle and mood to track your joy levels[cite: 143].",
                icon: <Smile strokeWidth={1.5} />
              },
              {
                title: "EQ Coaching",
                desc: "Emotional intelligence coaching specifically designed for longevity and resilience[cite: 144].",
                icon: <Sparkles strokeWidth={1.5} />
              },
              {
                title: "Social Connect",
                desc: "Community-based health support to maintain vital social connectivity[cite: 145].",
                icon: <Users strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-12 rounded-[3rem] bg-amber-900/10 border border-amber-500/10 hover:border-amber-400 transition-all duration-500">
                <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-amber-900/40 group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-amber-100/40 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEURO-CHEMICAL STRATEGIES */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-[#FFFDFB]">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
                  alt="Mindful clarity" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute top-10 -right-8 bg-[#1C1917] text-white p-8 rounded-3xl shadow-2xl transform -rotate-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Serotonin Level</p>
                <p className="text-3xl font-black italic">Optimized</p>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-12 h-1 bg-amber-600"></div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1C1917] leading-tight tracking-tighter">
              Endorphin & <br /><span className="text-amber-600 font-light italic serif">Serotonin Strategies[cite: 146].</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              We focus on holistic wellness. Happiness measurements are tools for self-improvement and do not replace clinical psychological therapy[cite: 148].
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "EQ Coaching", desc: "Intelligence for longevity[cite: 144]." },
                { title: "Social Support", desc: "Community connections[cite: 145]." },
                { title: "Joy Metrics", desc: "The science of joy[cite: 141]." },
                { title: "Bio-Control", desc: "Neuro-chemical optimization[cite: 146]." }
              ].map((tool, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="mt-1 w-5 h-5 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Zap size={10} />
                   </div>
                   <div>
                      <h5 className="font-bold text-amber-950 text-sm mb-1">{tool.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tool.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HAPPINESS ASSESSMENT DASHBOARD */}
      <section className="py-32 px-6 lg:px-12 bg-amber-50/50">
        <div className="max-w-7xl mx-auto">
           <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-amber-100 flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="text-4xl font-bold text-[#1C1917] mb-8 italic tracking-tight">Emotional Vitality Assessment [cite: 140]</h3>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                   Mission 100 focuses on holistic wellness[cite: 148]. Our assessments are for self-development and ensure you stay on the path to a healthy, vibrant century[cite: 15, 175].
                 </p>
                 <button className="px-12 py-6 bg-[#1C1917] text-white rounded-2xl font-black shadow-xl shadow-amber-100 hover:bg-amber-600 transition-all uppercase tracking-widest text-xs">
                    Get Your Happiness Score
                 </button>
              </div>
              <div className="w-full space-y-5">
                 {[
                   { label: "Emotional Vitality", value: "Optimal" },
                   { label: "Community Support", value: "High" },
                   { label: "EQ Score", value: "92/100" }
                 ].map((stat, i) => (
                   <div key={i} className="p-8 bg-amber-50/20 rounded-3xl border border-amber-50 flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                      <span className="text-2xl font-black text-amber-600 italic tracking-tighter">{stat.value}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. HOLISTIC WELLNESS */}
      <section className="py-32 px-6 lg:px-12 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-amber-600">
           <Waves size={800} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#1C1917] leading-tight">
                Wellness <br /><span className="text-amber-600 italic font-light serif">Preservation[cite: 119].</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Blending ancient wellness practices with modern medicine for a complete health ecosystem[cite: 18, 32]. Our emotional intelligence (EQ) coaching supports your longevity journey[cite: 144].
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm">
                       <Heart size={24} />
                    </div>
                    <h5 className="font-bold text-amber-950">Social Support [cite: 145]</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Community-based health and connection frameworks[cite: 145].</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm">
                       <Sparkles size={24} />
                    </div>
                    <h5 className="font-bold text-amber-950">Serotonin Boost [cite: 146]</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Optimization strategies for neuro-chemicals[cite: 146].</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 w-full">
              <div className="bg-[#1C1917] rounded-[4rem] p-16 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                 <h4 className="text-3xl font-bold mb-8 italic">Happiness Measurement [cite: 140]</h4>
                 <p className="text-amber-100/40 mb-10 leading-relaxed">
                    A scientific score based on lifestyle and mood[cite: 143]. Tools for self-improvement aimed at a vibrant century[cite: 148].
                 </p>
                 <button className="text-amber-400 font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 group">
                    Begin Assessment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      
    </main>
  );
}