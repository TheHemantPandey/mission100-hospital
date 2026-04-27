import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeartPreventionSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      {/* FIXED: Changed mx-32 to mx-auto and added responsive px-6 to prevent layout breaking */}
      <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 max-w-7xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-green-700 leading-tight">
                  Mission 100
                </span>
                <span className="text-xs text-green-950 font-bold tracking-widest uppercase">
                  Live 100 Years
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Heart Attack Prevention <br className="hidden lg:block" />&
                Health Optimization.
              </h2>
              <p className="text-base font-semibold text-gray-700">
                Personalized Care for a Healthier Heart.
              </p>
            </div>

            <div className="border border-green-100 bg-green-50/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Our Core Pillars:
              </h3>
              <ul className="list-none space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Comprehensive preventive healthcare framework for adults.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Early detection of critical heart risks.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Specialized neuro-care and mental health support.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Long-term quality of life preservation.
                </li>
              </ul>
            </div>

            <div>
              <Link href="/services/heart-attack-prevention" className="contents">
                <button className="w-full sm:w-fit flex items-center justify-center gap-2.5 bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-700 transition-all active:scale-95 group">
                  Check Heart Risk Now
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed pt-4 border-t border-gray-100">
              *Mission 100 provides preventative care and health optimization.
              Consultations and risk assessments do not replace emergency
              medical care.
            </p>
          </div>

          {/* Right Side: Image Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
            <div className="w-full max-w-md aspect-4/5 relative group">
              {/* FIXED: Using next/image for faster loading and better SEO */}
              <Image
                src="/nurse.png"
                alt="Heart Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl"
              />

              {/* Floating Card - Adjusted position for mobile safety */}
              <div className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-50 max-w-50 md:max-w-60">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Live 100
                  </span>
                  <span className="text-gray-400 text-[9px]">
                    Active Monitoring
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-800">
                  Heart Health Score
                </p>
                <p className="text-2xl font-black text-green-600">98%</p>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartPreventionSection;
