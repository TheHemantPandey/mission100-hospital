import React from 'react';

const SugarSection = () => {
  return (
    /* Changed mx-auto to mx-32 to align perfectly with Stress section grid */
    <div className="bg-white p-10 md:p-4 rounded-3xl border border-gray-50 max-w-7xl mx-32 my-12">
      <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
        
        {/* Right Side: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-cyan-700">Mission 100</span>
              <span className="text-sm text-cyan-950 font-medium">LIVE 100 YEARS</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              Metabolic Balance <br />
              & Sugar Control.
            </h2>
            <p className="text-sm font-semibold text-gray-700">
              Mastering Your Glucose for Long-Term Vitality.
            </p>
          </div>

          <div className="border border-cyan-200 bg-cyan-50 rounded-2xl p-4 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Core Pillars:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
              <li>Continuous Glucose Monitoring (CGM) integration.</li>
              <li>HBA1C risk reduction and monitoring strategies.</li>
              <li>Insulin sensitivity and metabolic optimization.</li>
              <li>Personalized low-glycemic lifestyle planning.</li>
            </ul>
          </div>

          <div>
            <button className="flex items-center gap-2.5 bg-cyan-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 group">
              Check Sugar Risk
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Added Disclaimer to match Stress section reference */}
          <p className="text-xs text-gray-500 leading-relaxed pt-0 border-t border-gray-100">
            *Mission 100 provides metabolic health optimization and preventative care. Glucose monitoring and wellness plans do not replace emergency medical treatment for diabetic complications.
          </p>
        </div>

        {/* Left Side: Image Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md aspect-4/5 relative group">
            <img 
              src="/sugar-test.png" 
              alt="Sugar and Metabolic Management Specialist"
              className="w-full h-full object-cover rounded-3xl" 
            />

            {/* Floating Card - Positioned on the right for this layout style */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-60">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-cyan-100 text-cyan-700 text-[10px] font-bold px-2 py-0.5 rounded-full">LIVE 100</span>
                <span className="text-gray-400 text-[10px]">Metabolic Status</span>
              </div>
              <p className="text-sm font-bold text-gray-800">Glucose Stability</p>
              <p className="text-2xl font-black text-cyan-600">Stable</p>
              <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full w-[92%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SugarSection;