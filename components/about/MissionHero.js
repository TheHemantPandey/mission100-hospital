import React from 'react';
import Image from 'next/image';
import { Sparkles, Phone } from 'lucide-react';

const MissionHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      
      {/* Main Container */}
      <div className="max-w-360 mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center relative py-12 md:py-0">
        
        {/* 1. Left Vertical Text - Matches your screenshot exactly */}
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
            <h1 className="text-[60px] md:text-[85px] leading-[0.9] font-black text-slate-900 tracking-tighter">
              Live <span className="text-green-600">100</span><br />
              <span className="text-slate-900">Years,</span><br />
              Live 100%<br />
              Better
            </h1>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="text-lg md:text-xl text-slate-800 font-bold leading-snug">
              At <span className="text-slate-900">Mission 100</span>, we are dedicated to the 
              revolutionary idea that healthcare should be <span className="text-green-600">preventive</span> rather than just reactive.
            </p>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Our core mission is to provide the tools, data, and guidance necessary for every individual 
              to achieve a healthy, vibrant century of life[cite: 16]. We focus heavily on the needs of the 
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

        {/* 3. Right Visual Card - Matches the screenshot's rounded aesthetic */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 relative group">
          <div className="relative w-[320px] h-80 md:w-112.5 md:h-112.5">
            {/* The Image Container with specific Rounded Corners */}
            <div className="relative h-full w-full rounded-[60px] overflow-hidden border-12 border-white shadow-2xl shadow-slate-200">
              <Image 
                src="/Hero-Bg.jpg" 
                alt="Mission 100 Precision" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-90 mb-1">Longevity Focus</div>
                <div className="text-2xl md:text-3xl font-bold">Scientific Precision</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Sticky Contact Info (WhatsApp & Phone) */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
            <div className="flex items-center gap-3 bg-white border border-slate-100 py-3 px-6 rounded-full shadow-lg shadow-slate-100">
                <Phone size={18} className="text-slate-900" />
                <span className="text-slate-900 font-bold text-sm tracking-tight">+91 9220 620 209</span>
            </div>
            {/* WhatsApp Icon can be your component or simple div */}
            <div className="bg-[#25D366] p-4 rounded-full text-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.405c0 6.555-5.332 11.887-11.886 11.887-2.012 0-3.986-.51-5.742-1.477l-6.244 1.702zm6.75-3.193c1.513.899 3.3 1.373 5.123 1.373 5.45 0 9.886-4.437 9.886-9.888 0-2.64-1.028-5.122-2.894-6.989s-4.349-2.894-6.992-2.894c-5.451 0-9.888 4.437-9.888 9.889 0 1.942.57 3.842 1.649 5.467l-1.077 3.932 4.027-1.096z" />
                </svg>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MissionHero;