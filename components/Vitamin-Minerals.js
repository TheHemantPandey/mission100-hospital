import React from 'react';
import Image from 'next/image';

const VitaminsSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Changed mx-32 to mx-auto to ensure mobile responsiveness while maintaining desktop alignment */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-amber-600 leading-tight">Mission 100</span>
                <span className="text-xs text-amber-950 font-bold tracking-widest uppercase">Live 100 Years</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Micronutrient <br className="hidden lg:block" />
                & Vitality Testing.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Fueling Your Body with Precision Nutrition.
              </p>
            </div>

            <div className="border border-amber-100 bg-amber-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Pillars:</h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  Full-spectrum vitamin deficiency screening.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  Mineral balance for optimized energy and immunity.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  Personalized supplementation and nutrient roadmaps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">✓</span>
                  Absorption tracking and bioavailability analysis.
                </li>
              </ul>
            </div>

            <div>
              <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-amber-700 transition-all active:scale-95 group">
                Check Nutrient Levels
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100 italic">
              *Mission 100 provides nutritional optimization and preventative screening. Nutrient testing and supplement roadmaps do not replace clinical medical advice or treatment for deficiencies.
            </p>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: Switched to next/image for better performance and quality management */}
              <Image 
                src="/vitamins.png" 
                alt="Vitamin and Micronutrient Testing Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-lg" 
              />

              {/* Floating Card - Responsive positioning for mobile devices */}
              <div className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 min-w-45 md:min-w-55">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Live 100</span>
                  <span className="text-gray-400 text-[10px]">Nutrient Status</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Vitality Level</p>
                <p className="text-2xl font-black text-amber-600">88%</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[88%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VitaminsSection;