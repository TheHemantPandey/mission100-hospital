import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SugarSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Replaced mx-32 with mx-auto to fix mobile layout issues while maintaining desktop alignment */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          
          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyan-700 leading-tight">Mission 100</span>
                <span className="text-xs text-cyan-950 font-bold tracking-widest uppercase">Live 100 Years</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Metabolic Balance <br className="hidden lg:block" />
                & Sugar Control.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Mastering Your Glucose for Long-Term Vitality.
              </p>
            </div>

            <div className="border border-cyan-100 bg-cyan-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Pillars:</h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  Continuous Glucose Monitoring (CGM) integration.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  HBA1C risk reduction and monitoring strategies.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  Insulin sensitivity and metabolic optimization.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  Personalized low-glycemic lifestyle planning.
                </li>
              </ul>
            </div>

            <div>
              <Link href="/services/metabolic-sugar-control" className="contents">
                <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-cyan-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-cyan-700 transition-all active:scale-95 group">
                  Check Sugar Risk
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100 italic">
              *Mission 100 provides metabolic health optimization and preventative care. Glucose monitoring and wellness plans do not replace emergency medical treatment for diabetic complications.
            </p>
          </div>

          {/* Left Side: Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: Using next/image for automatic performance optimization and lazy-loading */}
              <Image 
                src="/sugar-test.png" 
                alt="Sugar and Metabolic Management Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-lg" 
              />

              {/* Floating Card - Responsive positioning for better mobile visibility */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 min-w-45 md:min-w-55">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-cyan-100 text-cyan-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Live 100</span>
                  <span className="text-gray-400 text-[10px]">Metabolic Status</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Glucose Stability</p>
                <p className="text-2xl font-black text-cyan-600">Stable</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[92%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SugarSection;