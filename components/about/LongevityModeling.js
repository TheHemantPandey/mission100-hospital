import React from 'react';
import { Microscope, Dna, LineChart, ShieldCheck, Timer } from 'lucide-react';

const LongevityModeling = () => {
  return (
    <section className="py-24 bg-[#0a0f18] text-white overflow-hidden relative">
      {/* Neural Network Style Background Decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Technical Explanation */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Timer size={14} /> Longevity Modeling
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Predicting the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Your Biological Health
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Utilizing data-driven longevity and risk modeling to extend your healthy years. We go beyond 
              traditional checkups by analyzing your DNA to predict health outcomes before they occur.
            </p>

            <ul className="space-y-6">
              {[
                { 
                  icon: <Dna className="text-blue-400" />, 
                  title: "Telomere Analysis", 
                  desc: "Measuring the protective caps on your chromosomes to determine cellular age." 
                },
                { 
                  icon: <Microscope className="text-green-400" />, 
                  title: "Cellular Regeneration", 
                  desc: "Personalized protocols designed to optimize metabolic balance and cellular health[cite: 162, 186]." 
                },
                { 
                  icon: <LineChart className="text-amber-400" />, 
                  title: "Death Prediction Modeling", 
                  desc: "Utilizing preventive healthcare data to identify and mitigate long-term mortality risks." 
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Data Dashboard Visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Biological Analysis</div>
                  <div className="text-2xl font-bold">Vitality Report</div>
                </div>
                <ShieldCheck className="text-green-500" size={32} />
              </div>

              {/* The "Bio-Age" Highlight from PDF Source 179 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-[2.5rem] text-center mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:rotate-12 transition-transform">
                  <Dna size={80} />
                </div>
                <div className="text-blue-100 text-sm font-bold uppercase tracking-wider mb-2">Biological Age Result</div>
                <div className="text-6xl font-black text-white mb-2 tracking-tighter">-5.2 Years</div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-400/20 rounded-full text-green-300 text-[10px] font-bold">
                  OPTIMAL REGENERATION
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
                  <div className="text-slate-500 text-[10px] font-bold uppercase mb-2">Telomere Length</div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                  </div>
                  <div className="mt-2 text-right text-xs font-bold text-blue-400">85th Percentile</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
                  <div className="text-slate-500 text-[10px] font-bold uppercase mb-2">Modeling Confidence</div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                  </div>
                  <div className="mt-2 text-right text-xs font-bold text-green-400">94% Accuracy</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[10px] text-slate-500 italic leading-relaxed">
                  "Longevity modeling and cellular protocols do not replace clinical medical treatment[cite: 177]."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LongevityModeling;