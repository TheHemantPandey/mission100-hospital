import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StressManagementSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Changed mx-32 to mx-auto for mobile responsiveness. Added max-w-7xl for desktop. */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-700 leading-tight">Mission 100</span>
                <span className="text-xs text-blue-950 font-bold tracking-widest uppercase">Live 100 Years</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Stress Management <br className="hidden lg:block" />
                & Mental Resilience.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Personalized Strategies for a Calmer Mind.
              </p>
            </div>

            <div className="border border-blue-100 bg-blue-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Pillars:</h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  Advanced stress-level tracking and biofeedback.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  Mindfulness and cognitive behavioral support.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  Personalized burnout prevention frameworks.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  Long-term emotional well-being preservation.
                </li>
              </ul>
            </div>

            <div>
              <Link href="/services/mental-health&stress" className="contents">
                <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95 group">
                  Check Stress Score Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100 italic">
              *Mission 100 provides preventative care and mental health optimization. Consultations and risk assessments do not replace emergency psychiatric care.
            </p>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: next/image for optimized quality and faster loading */}
              <Image 
                src="/stress.png" 
                alt="Stress Management Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-lg" 
              />

              {/* Floating Card - Adjusted for mobile safety */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 min-w-45 md:min-w-55">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Live 100</span>
                  <span className="text-gray-400 text-[10px]">Active Monitoring</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Stress Resilience</p>
                <p className="text-2xl font-black text-blue-600">92%</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[92%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StressManagementSection;