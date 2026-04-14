import React from 'react';

// For the empty image, we'll create a placeholder.
// In a real project, you would import an actual image here.
// const placeholderImageUrl = 'path/to/your/image.jpg'; 

const HeartPreventionSection = () => {
  return (
    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-gray-100 max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2 rounded-lg bg-green-50 shadow-inner">
              <span className="text-3xl">❤️</span> {/* Placeholder for Mission 100 logo */}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Mission 100</span>
              <span className="text-sm text-green-700 font-medium">LIVE 100 YEARS</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
              Advanced Heart Attack <br />
              Prevention & Health Optimization.
            </h2>
            <p className="text-xl font-semibold text-gray-700">
              Personalized Care for a Healthier Heart.
            </p>
          </div>

          {/* Highlighted Feature */}
          <div className="border border-green-200 bg-green-50 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Core Pillars:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-md">
              <li>Comprehensive preventive healthcare framework for adults.</li>
              <li>Early detection of critical heart risks.</li>
              <li>Specialized neuro-care and mental health support.</li>
              <li>Long-term quality of life preservation.</li>
            </ul>
          </div>

          {/* Call to Action Button */}
          <div>
            <button className="flex items-center gap-2.5 bg-green-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 group">
              Check Heart Risk Now
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Legal / Disclaimer Text */}
          <p className="text-xs text-gray-500 leading-relaxed pt-6 border-t border-gray-100">
            *Mission 100 provides preventative care and health optimization. Consultations and risk assessments do not replace emergency medical care. All programs are designed based on individual health profiles.
          </p>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full max-w-sm aspect-[4/5] bg-gray-100 rounded-3xl border border-gray-200 shadow-xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            {/* You can put an icon or text here as a placeholder */}
            <svg 
              className="w-20 h-20 text-green-300 mb-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.45-1.34C5.4 14.25 2 11.1 2 7.5A5.5 5.5 0 017.5 2 8.35 8.35 0 0112 3a8.35 8.35 0 014.5-1 5.5 5.5 0 015.5 5.5c0 3.6-3.4 6.75-8.55 12.16L12 21z" />
            </svg>
            <p className="text-lg font-medium text-gray-600">Heart Health Dashboard</p>
            <p className="text-sm text-gray-500 mt-2">Personalized metrics and preventive plans will be displayed here.</p>
            
            {/* Background pattern similar to original image */}
            <div className="absolute inset-0 z-[-1] opacity-5">
              <svg width="100%" height="100%">
                <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="currentColor" className="text-green-500"/>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeartPreventionSection;