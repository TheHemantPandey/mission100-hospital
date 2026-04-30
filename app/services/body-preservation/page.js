import React from 'react';
import { 
  Shield, 
  Activity, 
  Layers, 
  Zap, 
  Dna, 
  Microscope, 
  ArrowRight,
  History,
  Plus,
  Heart,
  Search,
  MoveRight,
  ShieldAlert,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

// --- 1. METADATA (ABOVE THE FUNCTION) ---
export const metadata = {
  title: "Body Preservation & Vitality Strategy",
  description: "Mission 100 Hospital's flagship body preservation protocol. Focuses on vitality preservation, prenatal strength, and geriatric longevity through data-driven diagnostics.",
  keywords: ["Body Preservation", "Vitality Index", "Prenatal Health", "Geriatric Longevity", "Mission 100 Hospital"],
};

export default function BodyPreservationFlagship() {

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
        "name": "Body Preservation",
        "item": "https://www.mission100hospital.com/services/body-preservation"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 uppercase-none">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: THE BIOLOGICAL MANDATE */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-[#020617] overflow-hidden">
        {/* Animated Quantum Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#164e63_0%,transparent_50%)] opacity-40 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-cyan-950 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 border border-cyan-900/50">
            Main Clinical Focus: Vitality Preservation
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
            Body <br />
            <span className="text-cyan-400 font-light italic serif lowercase">Preservation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Dedicated to the revolutionary idea that healthcare should be preventive rather than just reactive. We preserve health just before end-of-life stages to ensure maximum longevity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-10 py-5 rounded-xl font-black transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-3 group uppercase tracking-widest text-xs">
              Check Vitality Index
              <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY: THE MISSION 100 VISION */}
      <section className="py-24 px-6 lg:px-12 border-y border-slate-900 bg-[#020617]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white italic">"Live 100 Years, Live 100% Better"</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              Our core mission is to provide the tools, data, and guidance necessary for every individual to achieve a healthy, vibrant century of life. We ensure that the aging process is managed with dignity, strength, and scientific precision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <ShieldCheck className="text-cyan-400 mb-4" />
                <h4 className="font-bold text-white text-sm mb-2 uppercase tracking-widest">Biological baseline</h4>
                <p className="text-xs text-slate-500">Expert focus on prenatal care to establish health baselines.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <Activity className="text-cyan-400 mb-4" />
                <h4 className="font-bold text-white text-sm mb-2 uppercase tracking-widest">Scientific Integrity</h4>
                <p className="text-xs text-slate-500">Modern Radiology integrated with traditional wellness practices.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
              alt="Clinical Monitoring" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. LIFECYCLE PRESERVATION STRATEGY */}
      <section className="py-32 px-6 lg:px-12 bg-white text-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">Lifecycle <br/>Preservation</h2>
            <p className="text-slate-500 text-lg">We focus heavily on the specific needs of three critical stages:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { 
                title: "Prenatal Focus", 
                desc: "Expert focus on the child before birth to ensure strength from the very beginning.", 
                icon: <Heart className="text-cyan-600" /> 
              },
              { 
                title: "Adult Vitality", 
                desc: "Data-driven insights including ECG heart risk and body deficiency monitoring.", 
                icon: <Zap className="text-cyan-600" /> 
              },
              { 
                title: "Geriatric Longevity", 
                desc: "Specialized longevity science to help the elderly manage aging with dignity.", 
                icon: <History className="text-cyan-600" /> 
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL INTEGRATION: DIAGNOSTIC TECH */}
      <section className="py-32 px-6 lg:px-12 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-900/50 rounded-full flex items-center justify-center p-16 border border-slate-800">
               <div className="grid grid-cols-2 gap-8 text-center relative z-10">
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-cyan-400 italic">ECG</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Cardiac Safety</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-cyan-400 italic">DXA</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Osteoporosis Detection</p>
                  </div>
                  <div className="col-span-2 pt-8">
                    <p className="text-7xl font-black text-white leading-none tracking-tighter">98%</p>
                    <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest mt-4">Diagnostic accuracy goal</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
              Integrated <br /><span className="text-cyan-400 font-light italic serif lowercase">Diagnostics.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Modern Radiology and Pathology integrated with traditional wellness practices for a complete health ecosystem.
            </p>
            <div className="space-y-4 pt-4">
              {[
                { title: "ECG risk analysis", desc: "Prioritizing cardiac safety through advanced assessment." },
                { title: "Deficiency monitoring", desc: "Data-driven insights into body deficiency tracking." },
                { title: "Predictive Modeling", desc: "Utilizing modeling to predict and extend healthy years." }
              ].map((point, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="mt-1"><Plus className="text-cyan-400" size={16} /></div>
                  <div>
                    <h5 className="font-bold text-white text-sm uppercase tracking-widest mb-1">{point.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SKELETAL PRESERVATION: BONE & BODY STRENGTH */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F172A] rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[180px] opacity-10 -mr-48 -mt-48"></div>
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 italic">Skeletal Foundation</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Monitoring bone measurement and body strength to maintain mobility into old age.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { t: "DXA Scanning", d: "Early osteoporosis detection." },
                   { t: "Optimization", d: "Vitamin D and Calcium plans." },
                   { t: "Strength plans", d: "Weight-bearing exercise focus." },
                   { t: "Fall prevention", d: "Assessment and modern tools." }
                 ].map((box, i) => (
                   <div key={i} className="space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-widest">
                        <ShieldCheck size={14} /> {box.t}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{box.d}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative z-10">
               <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center">
                  <Award className="text-cyan-400 mx-auto mb-6" size={48} />
                  <p className="text-[10px] uppercase font-black text-slate-500 tracking-[0.4em] mb-4">Bone Health Status</p>
                  <p className="text-5xl font-black text-white italic tracking-tighter">Normal (T-Score)</p>
                  <button className="mt-12 w-full py-5 bg-cyan-500 text-[#020617] rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl">
                    Get Bone Density Test
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANTI-AGING SCIENCE: THE FUTURE OF PRESERVATION */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 space-y-10">
             <div className="w-12 h-1 bg-cyan-500"></div>
             <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter uppercase">
               Anti-Aging <br /><span className="text-cyan-600 font-light italic serif lowercase">Science & Research.</span>
             </h2>
             <p className="text-lg text-slate-500 leading-relaxed">
               Utilizing death prediction modeling to extend your healthy years. Our pillars focus on biological age testing and telomere analysis.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                   <Dna className="text-cyan-600" size={24} />
                   <h5 className="font-bold text-[#0F172A] uppercase tracking-widest text-xs">Biological age</h5>
                   <p className="text-[11px] text-slate-400 leading-relaxed">Personalized cellular regeneration protocols.</p>
                </div>
                <div className="space-y-3">
                   <Sparkles className="text-cyan-600" size={24} />
                   <h5 className="font-bold text-[#0F172A] uppercase tracking-widest text-xs">Metabolic Tuning</h5>
                   <p className="text-[11px] text-slate-400 leading-relaxed">Advanced antioxidant and metabolic optimization.</p>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 w-full">
             <div className="p-16 md:p-24 bg-slate-50 rounded-[5rem] border border-slate-100 flex flex-col items-center text-center">
                <Microscope size={60} className="text-cyan-600 mb-8" />
                <h3 className="text-3xl font-black text-[#0F172A] italic mb-6 uppercase tracking-tighter">Cellular restoration</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
                  Healthcare should be preventive rather than just reactive. We focus on the elderly to ensure scientific precision.
                </p>
                <div className="flex items-center gap-2 text-cyan-600 font-black text-[10px] uppercase tracking-widest">
                  Active Monitoring Protocol <ArrowRight size={14} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNIQUES: VEDIC REJUVENATION */}
      <section className="py-32 px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-12 uppercase italic tracking-tighter">Vedic Rejuvenation Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-10 bg-white rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
               <Shield className="text-cyan-500 mb-6" size={32} />
               <h4 className="font-bold text-[#0F172A] text-lg uppercase mb-4 tracking-widest">Panchakarma</h4>
               <p className="text-sm text-slate-400 leading-relaxed italic">"Ancient detoxification techniques to restore biological harmony."</p>
            </div>
            <div className="p-10 bg-[#020617] rounded-[3rem] shadow-2xl border border-slate-800 text-white group hover:border-cyan-500/50 transition-all">
               <Zap className="text-cyan-400 mb-6" size={32} />
               <h4 className="font-bold text-white text-lg uppercase mb-4 tracking-widest">Herbal Protocols</h4>
               <p className="text-sm text-slate-500 leading-relaxed italic">"Herbal rejuvenation and stress-relief protocols for total vitality."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLINICAL DISCLAIMER */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200">
          <div className="flex justify-center mb-10 text-red-600">
             <ShieldAlert size={40} />
          </div>
          <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.2em] leading-relaxed text-center italic">
            Mission 100 provides preventive care and health optimization research. <br />
            Consultations and risk assessments on this platform are for user guidance only and do not replace emergency medical care. <br />
            In case of a medical emergency, visit your nearest hospital immediately.
          </p>
          <div className="mt-12 pt-8 border-t border-slate-200 text-slate-300 text-[10px] font-bold uppercase tracking-widest text-center">
             © 2026 MISSION 100™ HOSPITAL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </section>

    </main>
  );
}