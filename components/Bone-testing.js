import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BoneHealthSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Replaced mx-32 with mx-auto to fix mobile layout while keeping desktop alignment */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-orange-600 leading-tight">Mission 100</span>
                <span className="text-xs text-orange-950 font-bold tracking-widest uppercase">Live 100 Years</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Bone Density & <br className="hidden lg:block" />
                Skeletal Longevity.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Building a Strong Foundation for Lifelong Mobility.
              </p>
            </div>

            <div className="border border-orange-100 bg-orange-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Core Pillars:</h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  Advanced DXA scanning for early osteoporosis detection.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  Personalized Vitamin D and Calcium optimization.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  Weight-bearing exercise plans for bone strengthening.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  Fracture risk assessment and fall prevention tools.
                </li>
              </ul>
            </div>

            <div>
              <Link href="/services/bone-strength" className="contents">
                <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-orange-700 transition-all active:scale-95 group">
                  Get Bone Density Test
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100 italic">
              *Mission 100 uses gold-standard densitometry. Bone health assessments are preventative and should be discussed with your orthopedist.
            </p>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: next/image for optimized performance and quality control */}
              <Image 
                src="/Bone-Testing.png"
                alt="Bone Health Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl shadow-lg" 
              />

              {/* Floating Card - Responsive positioning */}
              <div className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-50 min-w-45 md:min-w-55">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-100 text-orange-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Live 100</span>
                  <span className="text-gray-400 text-[9px]">Active Monitoring</span>
                </div>
                <p className="text-sm font-bold text-gray-800">Bone Density (T-Score)</p>
                <p className="text-2xl font-black text-orange-600">+1.2</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[85%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BoneHealthSection;