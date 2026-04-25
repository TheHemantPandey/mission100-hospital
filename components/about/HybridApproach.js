import React, { memo } from 'react';
import { Microscope, Leaf, Zap, BarChart3, Binary, Infinity } from 'lucide-react';

// Memoized feature card for performance optimization
const FeatureCard = memo(({ icon: Icon, title, description, borderColor, iconBgColor, iconColor, isRightAligned }) => (
  <div className={`bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 transition-colors group ${borderColor} ${isRightAligned ? 'text-right lg:text-left' : ''}`}>
    <div className={`${iconBgColor} p-3 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 ${isRightAligned ? 'ml-auto lg:ml-0' : ''}`}>
      <Icon className={iconColor} size={28} />
    </div>
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-slate-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const HybridApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative px-4 md:px-0">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Container: mx-auto for mobile, lg:mx-32 for PC alignment */}
      <div className="max-w-7xl mx-auto lg:mx-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-green-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            The Scientific Method
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Bridging Modern Diagnostics with Ancient Wellness
          </h3>
          <p className="text-slate-400 text-base md:text-lg">
            We blend ancient wellness practices with modern medicine to create a complete health ecosystem. 
            By integrating modern Radiology and Pathology with traditional Ayurveda, we deliver data-driven insights.
          </p>
        </div>

        {/* Responsive Grid: Stacks on mobile, 3 columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Modern Science Column */}
          <div className="space-y-6 order-2 lg:order-1">
            <FeatureCard 
              icon={Microscope}
              title="Modern Radiology"
              description="Utilizing advanced imaging and pathology for precise internal monitoring and early detection."
              borderColor="hover:border-blue-500/50"
              iconBgColor="bg-blue-500/20"
              iconColor="text-blue-400"
            />
            <FeatureCard 
              icon={Zap}
              title="ECG Risk Analysis"
              description="Prioritizing cardiac safety through advanced ECG heart risk analysis and assessment."
              borderColor="hover:border-blue-500/50"
              iconBgColor="bg-blue-500/20"
              iconColor="text-blue-400"
            />
          </div>

          {/* Center Visual: The "Bridge" - Hidden on mobile or made smaller */}
          <div className="relative py-8 lg:py-0 flex flex-col items-center order-1 lg:order-2">
            <div className="w-full h-px bg-linear-to-r from-transparent via-slate-700 to-transparent absolute top-1/2 hidden lg:block" />
            <div className="relative z-10 bg-slate-900 border-2 border-green-500/30 p-6 md:p-8 rounded-full shadow-[0_0_50px_rgba(34,197,94,0.2)]">
              <Infinity size={48} className="text-green-500 animate-pulse md:w-15 md:h-15" />
            </div>
            <div className="mt-6 md:mt-8 text-center">
              <div className="text-xl md:text-2xl font-bold text-white">Hybrid Modeling</div>
              <div className="text-green-400 text-[10px] md:text-sm font-mono mt-1 tracking-widest uppercase">Complete Ecosystem</div>
            </div>
          </div>

          {/* Vedic Ayurveda Column */}
          <div className="space-y-6 order-3">
            <FeatureCard 
              icon={Leaf}
              title="Traditional Ayurveda"
              description="Ancient wellness practices integrated to balance the body's core elements and preserve vitality."
              borderColor="hover:border-green-500/50"
              iconBgColor="bg-green-500/20"
              iconColor="text-green-400"
              isRightAligned={true}
            />
            <FeatureCard 
              icon={BarChart3}
              title="Longevity Modeling"
              description="Biological age testing and telomere analysis to extend your healthy, vibrant years."
              borderColor="hover:border-green-500/50"
              iconBgColor="bg-green-500/20"
              iconColor="text-green-400"
              isRightAligned={true}
            />
          </div>

        </div>

        {/* Bottom Banner - Responsive Flex */}
        <div className="mt-16 md:mt-20 p-6 md:p-8 bg-linear-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-4xl md:rounded-4xl border border-white/5 text-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-16">
            <div className="flex items-center justify-center gap-3">
              <Binary className="text-blue-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider text-[10px] md:text-xs">MODERN RADIOLOGY</span>
            </div>
            <div className="text-slate-700 hidden md:block">|</div>
            <div className="flex items-center justify-center gap-3">
              <Binary className="text-green-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider text-[10px] md:text-xs">ANCIENT AYURVEDA</span>
            </div>
            <div className="text-slate-700 hidden md:block">|</div>
            <div className="flex items-center justify-center gap-3">
              <Binary className="text-amber-400" size={20} />
              <span className="text-slate-300 font-bold tracking-wider text-[10px] md:text-xs">DATA INSIGHTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HybridApproach);