import React, { memo } from "react";
import Link from 'next/link';

// Reusable Service Card Component to reduce code duplication and improve performance
const ServiceCard = ({ emoji, title, description, href }) => (
  <div className="p-6 border border-gray-100 rounded-xl bg-green-50 transition-all duration-300 hover:drop-shadow-lg hover:shadow-green-200 flex flex-col h-full">
    <div className="text-3xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold mb-2 text-green-700">{title}</h3>
    <p className="text-gray-600 grow">{description}</p>
    <Link href={href}>
      <button className="mt-6 px-6 py-2.5 flex items-center gap-2 w-fit text-green-600 font-bold bg-green-50/50 border border-green-200 rounded-xl shadow-sm transition-all duration-300 hover:bg-green-600 hover:text-white hover:border-green-600 hover:shadow-md active:scale-95 group/btn">
        Read More
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </Link>
  </div>
);

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 font-sans py-8 md:py-16 lg:py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4 uppercase tracking-wide">
            Why Choose - Mission 100?
          </h1>
          <p className="text-lg md:text-2xl italic text-green-600 font-medium">
            "Live 100 Years"
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-4 md:mt-6"></div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4">
              Our Vision for Longevity
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              At **Mission 100**, we are dedicated to the revolutionary idea
              that healthcare should be preventive rather than just reactive.
              Our core mission is to provide the tools, data, and guidance
              necessary for every individual to achieve a healthy, vibrant
              century of life.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              We focus heavily on the needs of **Child before the Birth, Adults
              and the Elderly**, ensuring that the aging process is managed with
              dignity, strength, and scientific precision.
            </p>
          </div>

          <div className="bg-green-50 p-6 md:p-8 rounded-2xl shadow-sm border border-green-100">
            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
              Key Advantages
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Modern Radiology and Pathology integrated with traditional Ayurveda.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Expert focus on prenatal care and geriatric longevity science.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Data-driven insights: ECG heart risk analysis & body deficiency monitoring.
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Focus Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Our Main Clinical Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              emoji="❤️"
              title="Heart Attack Prevention"
              description="Prioritizing cardiac safety through advanced ECG analysis and risk assessment."
              href="/services/heart-attack-prevention"
            />
            <ServiceCard 
              emoji="🧠"
              title="Mental Health & Stress"
              description="Holistic support for stress and happiness measurement to ensure peace of mind."
              href="/services/mental-health&stress"
            />
            <ServiceCard 
              emoji="🦴"
              title="Body & Bone Strength"
              description="Monitoring bone measurement and body strength to maintain mobility into old age."
              href="/services/"
            />
            <ServiceCard 
              emoji="⏳"
              title="Anti-Aging Science"
              description="Utilizing preventive healthcare and death prediction modeling to extend your healthy years."
              href="/services/"
            />
            <ServiceCard 
              emoji="🧘"
              title="Yoga & Ayurveda"
              description="Blending ancient wellness practices with modern medicine for a complete health ecosystem."
              href="/services/"
            />
            <ServiceCard 
              emoji="🧍"
              title="Body Preservation"
              description="Preserving body health just before end-of-life stages to ensure maximum longevity."
              href="/services/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUs);