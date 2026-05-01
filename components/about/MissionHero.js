import React from 'react';
import Image from 'next/image';
import { Sparkles, Phone } from 'lucide-react';

const MissionHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center relative py-12 md:py-0">
        
        {/* 1. Left Vertical Text */}
        <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-4">
             <div className="text-[12px] tracking-[0.8em] font-medium text-slate-300 [writing-mode:vertical-rl] rotate-180 uppercase">
               Establishing Longevity
            </div>
          </div>
        </div>

        {/* 2. Content Section */}
        <div className="flex-1 z-10 space-y-10 md:pl-20">
          <div className="space-y-2">
            {/* UPDATED: Grouped "Live 100 Years" and "Live 100% Better" into two distinct lines */}
            <h1 className="text-[40px] sm:text-[60px] md:text-[60px] leading-[1.1] md:leading-[0.95] font-black text-slate-900 tracking-tighter">
              Live <span className="text-green-600">100</span> Years,<br />
              Live 100% Better
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-lg md:text-xl text-slate-800 font-bold leading-snug">
              At <span className="text-slate-900">Mission 100</span>, we are dedicated to the 
              revolutionary idea that healthcare should be <span className="text-green-600">preventive</span> rather than just reactive.
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Our core mission is to provide the tools, data, and guidance necessary for every individual 
              to achieve a healthy, vibrant century of life. We focus heavily on the needs of the 
              <span className="font-bold text-slate-700"> Child before Birth</span>, 
              <span className="font-bold text-slate-700"> Adults</span>, and the 
              <span className="font-bold text-slate-700"> Elderly</span>.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="px-10 py-5 bg-[#0f172a] text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-green-600 transition-all active:scale-95">
              Book Consultation Now
            </button>
          </div>
        </div>

        {/* 3. Right Visual Card */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative group">
          <div className="relative w-[320px] h-80 md:w-112.5 md:h-112.5">
            <div className="relative h-full w-full rounded-[60px] overflow-hidden border-12 border-white shadow-2xl shadow-slate-200">
              <Image 
                src="/Hero-Bg.jpg" 
                alt="Mission 100 Precision" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-90 mb-1">Longevity Focus</div>
                <div className="text-2xl md:text-3xl font-bold">Scientific Precision</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default MissionHero;