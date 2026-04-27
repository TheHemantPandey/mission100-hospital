import React from 'react';
import { 
  Dna, 
  Activity, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  Microscope, 
  Clock, 
  ArrowRight,
  Database,
  Binary,
  Layers
} from 'lucide-react';

export default function LongevityModelingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] text-[#0F172A] font-sans selection:bg-teal-100">
      
      {/* 1. HERO SECTION: DATA-DRIVEN LONGEVITY */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden">
        {/* Subtle Geometric Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/30 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <Binary size={800} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-teal-100">
              Mission 100 Longevity Protocol [cite: 3]
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[1.05] mb-8 tracking-tighter uppercase">
              Anti-Aging <br />
              <span className="text-teal-600 font-light italic serif lowercase">Science & Modeling.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
              Utilizing data to extend your healthy years[cite: 171]. We integrate death prediction modeling and preventive healthcare to ensure the aging process is managed with scientific precision[cite: 30, 16].
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <button className="bg-[#0F172A] hover:bg-teal-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-teal-100 flex items-center justify-center gap-3 group">
                Analyze Biological Age [cite: 176]
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Our Longevity Vision [cite: 13]
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full relative">
            <div className="relative z-10 bg-[#0F172A] p-10 rounded-[3.5rem] shadow-2xl border border-teal-500/20 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <Clock className="text-teal-400 mb-6" size={48} />
                <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Longevity Modeling </p>
                <h3 className="text-4xl font-black italic mb-6">Age: -5.2 Years [cite: 179]</h3>
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full w-[92%]"></div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Cellular Regeneration Stability [cite: 173]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS: THE PRECISION FRAMEWORK */}
      <section className="py-24 px-6 lg:px-12 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Longevity Core Pillars [cite: 172]</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Biological Age Testing",
                desc: "Advanced biological age testing and telomere analysis to track true vitality[cite: 173].",
                icon: <Dna strokeWidth={1.5} />
              },
              {
                title: "Longevity Modeling",
                desc: "Data-driven risk modeling to extend your healthy years and predict future outcomes[cite: 173].",
                icon: <LineChart strokeWidth={1.5} />
              },
              {
                title: "Cellular Protocols",
                desc: "Personalized cellular regeneration protocols designed for geriatric longevity science[cite: 173, 19].",
                icon: <Layers strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-12 rounded-[3rem] bg-teal-900/10 border border-teal-500/10 hover:border-teal-400 transition-all duration-500">
                <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-teal-900/40 group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-teal-200/40 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC PRECISION: MOLECULAR OPTIMIZATION */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] bg-teal-50 rounded-[3.5rem] flex items-center justify-center p-12 shadow-inner">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="aspect-square bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 border border-teal-50">
                    <Database className="text-teal-600 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Longevity Modeling </p>
                  </div>
                  <div className="aspect-square bg-[#0F172A] rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 text-white translate-y-12">
                    <Activity className="text-teal-400 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">Vitality Metrics [cite: 207]</p>
                  </div>
                  <div className="aspect-square bg-teal-600 rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 text-white">
                    <Microscope className="text-white mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-200 text-center">Pathology [cite: 18]</p>
                  </div>
                  <div className="aspect-square bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 border border-teal-50 translate-y-12">
                    <ShieldCheck className="text-teal-600 mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Prevention [cite: 14]</p>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-12 h-1 bg-teal-600"></div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
              Advanced <br /><span className="text-teal-600 font-light italic serif lowercase">Metabolic Optimization.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              We focus on advanced antioxidant and metabolic optimization to extend your healthy years[cite: 174, 171]. Our approach integrates traditional Ayurveda with modern radiology[cite: 18].
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "Metabolic Tuning", desc: "Optimizing metabolic and vitality pathways[cite: 174]." },
                { title: "Death Prediction", desc: "Utilizing modeling for death prediction and longevity[cite: 30]." },
                { title: "Radiology", desc: "Modern Radiology integrated with Ayurveda[cite: 18]." },
                { title: "Deficiency Monitoring", desc: "Advanced body deficiency monitoring[cite: 19]." }
              ].map((tool, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="mt-1 w-5 h-5 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <Zap size={10} />
                   </div>
                   <div>
                      <h5 className="font-bold text-[#0F172A] text-sm mb-1">{tool.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tool.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. LONGEVITY RESEARCH DISCLAIMER */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8FAFF] border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
             Mission 100 provides longevity research and preventative health insights[cite: 177]. <br />
             Longevity modeling and cellular protocols do not replace clinical medical treatment[cite: 177]. <br />
             Healthcare at Mission 100 is designed to be preventive rather than reactive[cite: 14].
           </p>
           <div className="mt-10 pt-8 border-t border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              © 2026 MISSION 100™ HOSPITAL. ALL RIGHTS RESERVED[cite: 273].
           </div>
        </div>
      </section>

    </main>
  );
}