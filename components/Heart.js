import React from 'react';

const HeartPreventionSection = () => {
  return (
    <div className="bg-white p-10 md:p-8 rounded-3xl border border-gray-50 max-w-7xl mx-32 my-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-green-700">Mission 100</span>
              <span className="text-sm text-green-950 font-medium">LIVE 100 YEARS</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
              Advanced Heart Attack <br />
              Prevention & Health Optimization.
            </h2>
            <p className="text-xl font-semibold text-gray-700">
              Personalized Care for a Healthier Heart.
            </p>
          </div>

          <div className="border border-green-200 bg-green-50 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Core Pillars:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
              <li>Comprehensive preventive healthcare framework for adults.</li>
              <li>Early detection of critical heart risks.</li>
              <li>Specialized neuro-care and mental health support.</li>
              <li>Long-term quality of life preservation.</li>
            </ul>
          </div>

          <div>
            <button className="flex items-center gap-2.5 bg-green-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 group">
              Check Heart Risk Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed pt-6 border-t border-gray-100">
            *Mission 100 provides preventative care and health optimization. Consultations and risk assessments do not replace emergency medical care.
          </p>
        </div>

        {/* Right Side: Image Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-4/5 relative group">
            <img 
              src="/nurse.png" 
              alt="Heart Specialist"
              className="w-full h-full object-cover rounded-3xl " 
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-60">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE 100</span>
                <span className="text-gray-400 text-[10px]">Active Monitoring</span>
              </div>
              <p className="text-sm font-bold text-gray-800">Heart Health Score</p>
              <p className="text-2xl font-black text-green-600">98%</p>
              <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[98%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeartPreventionSection;