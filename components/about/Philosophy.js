import React, { memo } from 'react';
import { Quote, Activity, Brain, HeartPulse, Microscope } from 'lucide-react';

// Memoized Card for performance optimization
const PhilosophyCard = memo(({ icon: Icon, title, description, iconBg, shadowColor, translateClass }) => (
  <div className={`bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-50 flex gap-5 items-start ${translateClass}`}>
    <div className={`${iconBg} p-3 rounded-2xl text-white shadow-lg ${shadowColor} shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
));

PhilosophyCard.displayName = 'PhilosophyCard';

const Philosophy = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden px-4 md:px-0">
      {/* Container: Aligned for PC view with lg:mx-32 */}
      <div className="max-w-7xl mx-auto lg:mx-32 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text and Vision */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              <Microscope size={20} />
              The Core Philosophy
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Shifting from <span className="text-slate-400 line-through decoration-red-400/50">Reactive</span> to <span className="text-green-600">Preventive</span> Care
            </h2>

            <div className="relative">
              {/* FIXED: Removed md:size={60} which caused the JSX Namespace error */}
              <Quote className="absolute -top-4 -left-4 md:-left-6 text-green-50 w-10 h-10 md:w-16 md:h-16" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed relative z-10 font-medium italic">
                "At Mission 100, we are dedicated to the revolutionary idea that healthcare should be preventive rather than just reactive."
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
              Our mission is to provide the tools, data, and guidance necessary for every individual to achieve a healthy, vibrant century of life. We ensure the aging process is managed with dignity, strength, and scientific precision. 
            </p>

            {/* Lifecycle Focus Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-green-600 font-bold text-[10px] uppercase mb-1">Phase I</div>
                <div className="text-slate-900 font-bold text-sm">Child before Birth</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-green-600 font-bold text-[10px] uppercase mb-1">Phase II</div>
                <div className="text-slate-900 font-bold text-sm">Active Adults</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-green-600 font-bold text-[10px] uppercase mb-1">Phase III</div>
                <div className="text-slate-900 font-bold text-sm">The Elderly</div>
              </div>
            </div>
          </div>

          {/* Right Side: Features Cards */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[120%] md:h-[120%] bg-green-50 rounded-full blur-3xl -z-10 opacity-60" />
            
            <div className="grid gap-6">
              <PhilosophyCard 
                icon={Activity}
                title="Modern & Vedic Integration"
                description="Integration of modern Radiology and Pathology with traditional Ayurveda."
                iconBg="bg-green-600"
                shadowColor="shadow-green-200"
                translateClass="lg:translate-x-4"
              />

              <PhilosophyCard 
                icon={HeartPulse}
                title="Data-Driven Insights"
                description="Utilizing ECG heart risk analysis and body deficiency monitoring for precise care."
                iconBg="bg-slate-900"
                shadowColor="shadow-slate-200"
                translateClass=""
              />

              <PhilosophyCard 
                icon={Brain}
                title="Holistic Support"
                description="Ensuring peace of mind through stress and happiness measurement."
                iconBg="bg-amber-500"
                shadowColor="shadow-amber-200"
                translateClass="lg:translate-x-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Philosophy);