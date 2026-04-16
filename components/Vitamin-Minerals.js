import React from 'react';

const VitaminsSection = () => {
  return (
    /* Changed mx-auto to mx-32 to match Heart Section alignment */
    <div className="bg-white p-10 md:p-4 rounded-3xl border border-gray-50 max-w-7xl mx-32 my-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber-600">Mission 100</span>
              <span className="text-sm text-amber-950 font-medium">LIVE 100 YEARS</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              Micronutrient <br />
              & Vitality Testing.
            </h2>
            <p className="text-sm font-semibold text-gray-700">
              Fueling Your Body with Precision Nutrition.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-4 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Core Pillars:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
              <li>Full-spectrum vitamin deficiency screening.</li>
              <li>Mineral balance for optimized energy and immunity.</li>
              <li>Personalized supplementation and nutrient roadmaps.</li>
              <li>Absorption tracking and bioavailability analysis.</li>
            </ul>
          </div>

          <div>
            <button className="flex items-center gap-2.5 bg-amber-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:bg-amber-700 transition duration-300 group">
              Check Nutrient Levels
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Added Disclaimer to match Heart Section reference */}
          <p className="text-xs text-gray-500 leading-relaxed pt-0 border-t border-gray-100">
            *Mission 100 provides nutritional optimization and preventative screening. Nutrient testing and supplement roadmaps do not replace clinical medical advice or treatment for deficiencies.
          </p>
        </div>

        {/* Right Side: Image Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-4/5 relative group">
            <img 
              src="/vitamins.png" 
              alt="Vitamin and Micronutrient Testing Specialist"
              className="w-full h-full object-cover rounded-3xl" 
            />

            {/* Floating Card - Positioned exactly like Heart section */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-60">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE 100</span>
                <span className="text-gray-400 text-[10px]">Nutrient Status</span>
              </div>
              <p className="text-sm font-bold text-gray-800">Vitality Level</p>
              <p className="text-2xl font-black text-amber-600">88%</p>
              <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[88%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VitaminsSection;