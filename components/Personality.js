import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PersonalitySection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Replaced mx-32 with mx-auto and max-w-7xl to fix mobile layouts while keeping desktop alignment */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-50 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-700 leading-tight">Mission 100</span>
                <span className="text-xs text-violet-950 font-bold tracking-widest uppercase">Live 100 Years</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Personality <br className="hidden lg:block" />
                & Behavioral Analysis.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Understanding the Psychology of Longevity.
              </p>
            </div>

            <div className="border border-violet-100 bg-violet-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Pillars:</h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Psychometric testing for deep self-discovery.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Behavioral pattern recognition for healthier habits.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Strengths-based personal development roadmaps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-600 font-bold">✓</span>
                  Emotional resilience and mindset coaching.
                </li>
              </ul>
            </div>

            <div>
              <Link href="/services/behavioral-analysis" className="contents">
                <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-violet-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-violet-700 transition-all active:scale-95 group">
                  Test Your Personality
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100 italic">
              *Mission 100 provides behavioral analysis and psychological wellness frameworks. These assessments are for self-development and do not replace clinical mental health diagnosis.
            </p>
          </div>

          {/* Left Side: Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: Switched to next/image for optimized performance and quality control */}
              <Image 
                src="/personality.png" 
                alt="Personality Analysis Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-lg" 
              />

              {/* Floating Card - Responsive positioning for mobile devices */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-50 min-w-45 md:min-w-55">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-violet-100 text-violet-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Live 100</span>
                  <span className="text-gray-400 text-[10px]">Behavioral Profile</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Mindset Stability</p>
                <p className="text-2xl font-black text-violet-600">High</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-violet-500 h-full w-[82%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;