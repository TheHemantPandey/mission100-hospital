import React from 'react';


const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 font-sans py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 uppercase tracking-wide">
            Why Choose - Mission 100?
          </h1>
          <p className="text-xl md:text-2xl italic text-green-600 font-medium">
            "Live 100 Years"
          </p>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4">
              Our Vision for Longevity
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At **Mission 100**, we are dedicated to the revolutionary idea that healthcare should be 
              preventive rather than just reactive. Our core mission is to provide the 
              tools, data, and guidance necessary for every individual to achieve a healthy, vibrant 
              century of life.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We focus heavily on the needs of **Child before the Birth, Adults and the Elderly**, ensuring that the aging 
              process is managed with dignity, strength, and scientific precision.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Why Choose Mission 100?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> 
                Integration of modern Radiology and Pathology with traditional Ayurveda.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> 
                Integration of modern Radiology and Pathology with traditional Ayurveda].
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> 
                Data-driven insights including ECG heart risk analysis and body deficiency monitoring.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Main Clinical Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Heart Attack Prevention</h3>
              <p className="text-gray-600">
                Prioritizing cardiac safety through advanced ECG analysis and risk assessment.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Mental Health & Stress </h3>
              <p className="text-gray-600">
                Holistic support for stress management and happiness measurement to ensure peace of mind.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">🦴</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Body & Bone Strength</h3>
              <p className="text-gray-600">
                Monitoring bone measurement and body strength to maintain mobility into old age.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">⏳</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Anti-Aging Science</h3>
              <p className="text-gray-600">
                Utilizing preventive healthcare and death prediction modeling to extend your healthy years.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">🧘</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Yoga & Ayurveda</h3>
              <p className="text-gray-600">
                Blending ancient wellness practices with modern medicine for a complete health ecosystem.
              </p>
            </div>

            
            <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <div className="text-3xl mb-4">🧍</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Body Preservation</h3>
              <p className="text-gray-600">
                We preverve your body, just before the end of your life and try to make you alive for a long age.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;