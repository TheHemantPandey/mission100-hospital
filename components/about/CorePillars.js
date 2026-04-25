import React, { memo } from 'react';
import { Heart, Activity, Brain, Bone, Zap, TrendingUp } from 'lucide-react';

// Memoized Pillar Card for faster loading and reduced re-renders
const PillarCard = memo(({ pillar }) => (
  <div className="group relative p-6 md:p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full">
    <div className={`${pillar.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
      {pillar.icon}
    </div>

    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
      {pillar.title}
    </h4>
    
    <p className="text-slate-500 text-sm leading-relaxed mb-8 grow">
      {pillar.description}
    </p>

    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{pillar.scoreLabel}</span>
        <span className="text-xl font-black text-slate-900 tracking-tight">{pillar.score}</span>
      </div>
      <div className="bg-green-50 text-green-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <TrendingUp size={18} />
      </div>
    </div>
  </div>
));

PillarCard.displayName = 'PillarCard';

const pillars = [
  {
    title: "Heart Attack Prevention",
    description: "Prioritizing cardiac safety through advanced ECG analysis and early detection of critical heart risks.",
    icon: <Heart className="text-red-500" size={24} />,
    score: "98%",
    scoreLabel: "Health Score",
    color: "bg-red-50"
  },
  {
    title: "Mental Health & Stress",
    description: "Holistic support for stress management and happiness measurement to ensure peace of mind.",
    icon: <Brain className="text-purple-500" size={24} />,
    score: "92%",
    scoreLabel: "Resilience",
    color: "bg-purple-50"
  },
  {
    title: "Body & Bone Strength",
    description: "Advanced DXA scanning for early osteoporosis detection and maintaining mobility into old age.",
    icon: <Bone className="text-blue-500" size={24} />,
    score: "+1.2",
    scoreLabel: "T-Score",
    color: "bg-blue-50"
  },
  {
    title: "Anti-Aging Science",
    description: "Biological age testing and telomere analysis using data-driven longevity and risk modeling.",
    icon: <Zap className="text-amber-500" size={24} />,
    score: "-5.2Y",
    scoreLabel: "Bio-Age",
    color: "bg-amber-50"
  }
];

const CorePillars = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-0">
      {/* Container: mx-auto for mobile, lg:mx-32 for PC alignment */}
      <div className="max-w-7xl mx-auto lg:mx-32">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-green-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">
              Comprehensive Framework
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Core <span className="text-green-600">Pillars</span> of Care
            </h3>
            <p className="text-slate-500 mt-4 text-base md:text-lg">
              Mission 100 provides a data-driven infrastructure for long-term quality of life preservation.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 text-slate-400 font-medium text-sm border border-slate-100 rounded-full px-4 py-2">
              <Activity size={16} className="text-green-500" />
              Active Monitoring Enabled
            </div>
          </div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} />
          ))}
        </div>

        {/* Metabolic & Vitality Highlight */}
        <div className="mt-12 p-6 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-4">Metabolic & Vitality Testing</h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Mastering your glucose for long-term vitality through Continuous Glucose Monitoring (CGM) integration and full-spectrum vitamin deficiency screening.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] md:text-xs font-bold text-green-400">Glucose Stability</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] md:text-xs font-bold text-blue-400">Micronutrient Precision</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-3xl text-center">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">88%</div>
                <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Vitality Level</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-3xl text-center">
                <div className="text-2xl md:text-3xl font-black text-green-400">Stable</div>
                <div className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Metabolic Balance</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorePillars;