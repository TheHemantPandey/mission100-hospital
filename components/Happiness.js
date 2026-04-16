import React from 'react';

const HappinessMeasurementSection = () => {
  return (
    <div className="bg-white p-10 md:p-4 rounded-3xl border border-gray-50 max-w-7xl mx-32 my-12">
      <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
        
        {/* Right Side: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-rose-600">Mission 100</span>
              <span className="text-sm text-rose-950 font-medium">LIVE 100 YEARS</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              Happiness Index & <br />
              Emotional Vitality.
            </h2>
            <p className="text-sm font-semibold text-gray-700">
              Measuring the Science of a Joyful Life.
            </p>
          </div>

          <div className="border border-rose-200 bg-rose-50 rounded-2xl p-4 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Core Pillars:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
              <li>Scientific "Happiness Score" based on lifestyle and mood.</li>
              <li>Emotional intelligence (EQ) coaching for longevity.</li>
              <li>Social connectivity and community-based health support.</li>
              <li>Endorphin and Serotonin optimization strategies.</li>
            </ul>
          </div>

          <div>
            <button className="flex items-center gap-2.5 bg-rose-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:bg-rose-700 transition duration-300 group">
              Check Happiness Score
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed pt-0 border-t border-gray-100">
            *Mission 100 focuses on holistic wellness. Happiness measurements are tools for self-improvement and do not replace clinical psychological therapy.
          </p>
        </div>

        {/* Left Side: Image Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-4/5 relative group">
            <img 
              src="/hapiness.png" 
              alt="Happiness and Wellbeing Coach"
              className="w-full h-full object-cover rounded-3xl" 
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-60">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE 100</span>
                <span className="text-gray-400 text-[10px]">Vitality Tracking</span>
              </div>
              <p className="text-sm font-bold text-gray-800">Happiness Index</p>
              <p className="text-2xl font-black text-rose-600">8.5/10</p>
              <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HappinessMeasurementSection;