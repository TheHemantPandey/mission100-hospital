import React from 'react';
import { Shield, Activity, Dumbbell, Bone, Layers, Move, Thermometer, Droplets, Zap, Info, ChevronRight, Microscope } from 'lucide-react';

export default function BoneStrengthPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION - Soft Mint Gradient */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 border border-emerald-200">
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-[0.2em]">
              Structural Integrity & Mobility
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 leading-tight uppercase">
            Bone Strength <br /> 
            <span className="text-sky-500 font-extrabold">& Skeletal Health</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building an unbreakable foundation. We combine advanced mineral diagnostics with mechanical loading protocols to ensure your frame remains resilient for a 100-year life.
          </p>
        </div>
      </section>

      {/* 2. LIVE METRIC DASHBOARD - Sky Blue & Slate Theme */}
      <section className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:grid lg:grid-cols-3 items-center gap-12 border border-emerald-100">
          <div className="space-y-4">
            <span className="text-sky-600 font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full bg-sky-50">Skeletal Assessment</span>
            <h3 className="text-3xl font-bold text-slate-800">Bone Density <br/>Index (T-Score)</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
                Analyzing mineral distribution across the femoral neck and lumbar spine to predict long-term fracture risk.
            </p>
          </div>
          
          <div className="text-center bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 w-full">
            <span className="text-8xl font-black text-emerald-600 leading-none">95%</span>
            <p className="text-sky-600 font-bold mt-2 uppercase tracking-tighter">Mineralization Stability</p>
            <div className="w-full bg-emerald-100 h-3 rounded-full mt-6 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-sky-400 h-full w-[95%]"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">Calcium Absorption:</span>
                <span className="text-emerald-600 font-bold text-lg">Stable</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">Joint Flexibility:</span>
                <span className="text-sky-500 font-bold text-lg">Peak</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">Inflammation:</span>
                <span className="text-emerald-400 font-bold text-lg">Low</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUTRITIONAL SYNERGY GRID - Mint Focus */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-slate-800 uppercase">The Mineral Matrix</h2>
                <p className="text-slate-500 mt-4 text-lg font-medium">Bone health isn't just about Calcium. It requires a precise symphony of nutrients working in parallel.</p>
            </div>
            <button className="text-emerald-600 font-bold flex items-center gap-2 hover:text-sky-600 transition-colors">
                VIEW FULL BIO-STACK <ChevronRight className="w-5 h-5"/>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Vitamin D3 + K2", icon: <Droplets className="text-sky-500"/>, desc: "D3 facilitates calcium absorption, while K2 directs minerals into the bones and away from your arteries." },
                { title: "Magnesium Glycinate", icon: <Zap className="text-emerald-500"/>, desc: "Essential for converting Vitamin D into its active form and maintaining the structural integrity of the bone lattice." },
                { title: "Type I Collagen", icon: <Layers className="text-teal-500"/>, desc: "The 'glue' that provides flexibility. Without collagen, bones become brittle and prone to stress fractures." }
            ].map((item, i) => (
                <div key={i} className="p-10 rounded-4xl bg-emerald-50/30 border border-emerald-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100/50 transition-all group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 4. CORE PILLARS - Darker Cerulean Contrast */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -skew-x-12"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white relative z-10">
            <h2 className="text-4xl font-black mb-10 uppercase leading-tight">Diagnostic <br/><span className="text-emerald-400 font-light italic">Precision Protocols</span></h2>
            <div className="space-y-6">
              {[
                { title: "DEXA Monitoring", desc: "Gold-standard bone density scanning using low-dose X-rays to measure mineral grams per square centimeter." },
                { title: "Mechanical Loading", desc: "Specific resistance training that triggers 'Wolff’s Law'—the biological process where bones grow stronger under load." },
                { title: "Hormonal Balance", desc: "Analyzing PTH (Parathyroid Hormone) and estrogen levels to stop age-related thinning before it starts." },
                { title: "Postural Realignment", desc: "Correcting spinal kyphosis to prevent vertebral compression and maintain height as you age." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                    <Microscope className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-emerald-50">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[4rem] p-16 text-slate-800 flex flex-col justify-center min-h-[500px] relative overflow-hidden shadow-2xl">
             <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-50 rounded-full -mr-32 -mb-32 blur-3xl"></div>
             <div className="mb-8">
                <Bone className="w-20 h-20 text-sky-400 animate-pulse" />
             </div>
             <h3 className="text-4xl font-black mb-6 italic uppercase tracking-tighter text-slate-900">Density Status: <span className="text-emerald-600 underline">PEAK</span></h3>
             <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
               "Your frame is a living tissue. With the right bio-identical minerals and gravitational stress, we rebuild you from within."
             </p>
             <button className="bg-sky-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-500 transition-all shadow-xl uppercase tracking-widest text-sm">
               Schedule Density Scan
             </button>
          </div>
        </div>
      </section>

      {/* 5. EDUCATIONAL ACCORDION - Light Blue Theme */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Conditions We Prevent</h2>
            <div className="w-20 h-1.5 bg-emerald-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
            {[
                { q: "Osteoporosis Prevention", a: "By identifying early-stage bone thinning, we implement immediate dietary and exercise interventions to halt bone loss before fractures occur." },
                { q: "Osteopenia Management", a: "Mild bone loss is a warning sign. Our framework focuses on reversing osteopenia through micro-mineralization and impact training." },
                { q: "Sarcopenia & Bone Link", a: "Muscle loss directly weakens bones. We treat the 'Musculoskeletal Unit' together to ensure strong muscles protect your frame." }
            ].map((faq, i) => (
                <details key={i} className="group border-b border-emerald-50 pb-6 cursor-pointer">
                    <summary className="flex justify-between items-center list-none text-xl font-bold text-slate-700 hover:text-emerald-600 transition-colors">
                        {faq.q}
                        <span className="group-open:rotate-180 transition-transform text-sky-400"><ChevronRight/></span>
                    </summary>
                    <p className="mt-4 text-slate-500 leading-relaxed max-w-3xl">
                        {faq.a}
                    </p>
                </details>
            ))}
        </div>
      </section>

      {/* 6. FINAL CTA - Light Theme */}
      <section className="bg-gradient-to-r from-emerald-50 to-sky-50 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-slate-800 mb-6 uppercase">Ready for a Stronger Foundation?</h2>
            <p className="text-slate-600 mb-10 text-lg">Join Mission 100 for a comprehensive musculoskeletal audit. Your journey to vitality starts here.</p>
            <div className="flex flex-col sm:group flex-row gap-4 justify-center">
                <input type="text" placeholder="Enter your mobile number" className="px-6 py-4 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 ring-emerald-400 w-full sm:w-80 bg-white" />
                <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-600 transition-all">CONSULT AN EXPERT</button>
            </div>
        </div>
      </section>

      {/* 7. DISCLAIMER */}
      <footer className="bg-white py-12 px-6 border-t border-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.2em] leading-loose">
            Mission 100 Structural health guidance is based on current orthopaedic research. <br />
            Our DEXA scans and Mineral suggestions are for optimization. Always consult with your doctor before starting heavy-resistance training or high-dose minerals.
          </p>
        </div>
      </footer>
    </main>
  );
}