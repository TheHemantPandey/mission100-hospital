import React from 'react';
import { Microscope, Leaf, Zap, BarChart3, Binary, Infinity } from 'lucide-react';

const HybridApproach = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-green-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">
            The Scientific Method
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Bridging Modern Diagnostics with Ancient Wellness
          </h3>
          <p className="text-slate-400 text-lg">
            We blend ancient wellness practices with modern medicine to create a complete health ecosystem. 
            By integrating modern Radiology and Pathology with traditional Ayurveda [cite: 19, 20], we deliver data-driven insights[cite: 21].
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Modern Science Column */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="bg-blue-500/20 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="text-blue-400" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Modern Radiology</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Utilizing advanced imaging and pathology for precise internal monitoring and early detection[cite: 19].
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="bg-blue-500/20 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-blue-400" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">ECG Risk Analysis</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prioritizing cardiac safety through advanced ECG heart risk analysis and assessment.
              </p>
            </div>
          </div>

          {/* Center Visual: The "Bridge" */}
          <div className="relative py-12 lg:py-0 flex flex-col items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent absolute top-1/2 hidden lg:block" />
            <div className="relative z-10 bg-slate-900 border-2 border-green-500/30 p-8 rounded-full shadow-[0_0_50px_rgba(34,197,94,0.2)]">
              <Infinity size={60} className="text-green-500 animate-pulse" />
            </div>
            <div className="mt-8 text-center">
              <div className="text-2xl font-bold text-white">Hybrid Modeling</div>
              <div className="text-green-400 text-sm font-mono mt-1 tracking-widest">COMPLETE ECOSYSTEM</div>
            </div>
          </div>

          {/* Vedic Ayurveda Column */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group text-right lg:text-left">
              <div className="bg-green-500/20 p-3 rounded-2xl w-fit mb-6 lg:mr-auto lg:ml-0 ml-auto group-hover:scale-110 transition-transform">
                <Leaf className="text-green-400" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Traditional Ayurveda</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ancient wellness practices integrated to balance the body's core elements and preserve vitality[cite: 20].
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-green-500/50 transition-colors group text-right lg:text-left">
              <div className="bg-green-500/20 p-3 rounded-2xl w-fit mb-6 lg:mr-auto lg:ml-0 ml-auto group-hover:scale-110 transition-transform">
                <BarChart3 className="text-green-400" size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Longevity Modeling</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Biological age testing and telomere analysis to extend your healthy, vibrant years.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-[2rem] border border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Binary className="text-blue-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider">MODERN RADIOLOGY</span>
            </div>
            <div className="text-slate-700 hidden md:block">|</div>
            <div className="flex items-center gap-3">
              <Binary className="text-green-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider">ANCIENT AYURVEDA</span>
            </div>
            <div className="text-slate-700 hidden md:block">|</div>
            <div className="flex items-center gap-3">
              <Binary className="text-amber-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider">DATA INSIGHTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridApproach;