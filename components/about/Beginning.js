import React from "react";

const MissionVision = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 uppercase tracking-wide">
            Our Mission & Vision
          </h1>
          <p className="text-lg md:text-2xl italic text-green-600 font-medium">
            "Live 100 Years, Live 100% Better"
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-4 md:mt-6"></div>
        </div>

        {/* Content Section (Mirrors the "Why Choose" layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Mission Text */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4">
              Redefining Healthcare
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              At <strong>Mission 100</strong>, we are dedicated to the revolutionary idea
              that healthcare should be <strong>preventive</strong> rather than just reactive.
              Our core mission is to provide the tools, data, and guidance
              necessary for every individual to achieve a healthy, vibrant
              century of life. We are committed to empowering you with the knowledge and resources to take control of your health journey, ensuring that you not only live longer but also live better.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              We believe that by focusing on comprehensive well-being from early childhood to the senior years, we can help you manage the aging process with dignity, strength, and scientific precision.
            </p>
          </div>

          {/* Right Side: Vision/Highlights Box */}
          <div className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-sm border border-green-100 transition-all duration-300 hover:drop-shadow-lg hover:shadow-green-200">
            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-6">
              Our Core Vision
            </h3>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">🎯</span>
                <div>
                  <strong className="block text-gray-900 mb-1">Preventive Focus</strong>
                  Shifting the paradigm from treating illnesses to preventing them before they happen.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">🔬</span>
                <div>
                  <strong className="block text-gray-900 mb-1">Data-Driven Care</strong>
                  Utilizing modern insights, ECG risk analysis, and body deficiency monitoring.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">🌿</span>
                <div>
                  <strong className="block text-gray-900 mb-1">Holistic Integration</strong>
                  Seamlessly blending modern science with traditional Ayurvedic wisdom for complete health.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-px bg-gray-200 my-16 md:my-24"></div>

        {/* --- Meet Our Founder Section --- */}
        <div className="text-center mb-6 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founder
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Founder Image */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            {/* Main Image Container */}
            <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-green-50 relative z-10">
              {/* Ensure you save the new image as 'founder.jpg' in your public folder */}
              <img
                src="/founder.png" 
                alt="Raushan Kumar - Founder of Mission 100"
                className="w-full h-auto object-cover object-top"
              />
            </div>
            {/* Decorative background accent (visible on larger screens) */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-100 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          {/* Right Side: Founder Info */}
          <div className="space-y-5 md:space-y-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-green-800">
                Raushan Kumar
              </h3>
              <p className="text-sm text-green-600 font-semibold mt-2 tracking-wide uppercase">
                Founder & Visionary
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              An alumnus of the esteemed Indian Institute of Management (IIM), Raushan Kumar is a visionary serial entrepreneur and a driving force in the startup community. As an active mentor at premier institutions like IIT Delhi, DTU, and Nasscom, he empowers future innovators while leading a diverse portfolio of organizations.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              His entrepreneurial journey is deeply rooted in human empathy and societal impact. Inspired by an encounter with a lost elderly woman with Alzheimer’s, he founded <em>Devi</em>, a groundbreaking safety ecosystem combining wearables and drone-assisted responses. Raushan operates on a powerful, guiding belief: <strong>“If pizza can be delivered in 10 minutes, a life can be saved just as quickly.”</strong>
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              This same unwavering commitment to preserving life is what drives his vision for <strong>Mission 100 Hospital</strong>. By leveraging his vast expertise in cutting-edge technology and innovation.
            </p>
            {/* Signature / Quote block */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <p className="text-lg italic text-gray-600 font-medium border-l-4 border-green-400 pl-4 text-left">
                "True healthcare is about preserving the gift of life before it ever needs saving."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;