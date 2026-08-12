import React, { memo } from "react";
import Link from "next/link";

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
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
                Modern Radiology and Pathology integrated with traditional
                Ayurveda.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Expert focus on prenatal care and geriatric longevity science.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Data-driven insights: ECG heart risk analysis & body deficiency
                monitoring.
              </li>
            </ul>
          </div>
        </div>


        {/* Founder Award Image Section */}
        <div className="px-4 md:px-8 lg:px-8  border-t border-gray-100">

          <div className="max-w-7xl mx-auto py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-16 items-center">
            <div className=" max-w-225 mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
              <img
                src="/Malaika Arora.png"
                alt="Founder receiving an award from Malaika Arora at the 2022 Awards"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center md:text-left px-2 md:px-0">
              {/* Added space-y-4 to the parent div to create nice gaps between paragraphs */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The founder of <strong>Mission100 Hospital</strong> is being honored with a prestigious entrepreneurship award by renowned Bollywood celebrity <strong>Malaika Arora</strong> at the Business & Influencer Awards.
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This remarkable milestone serves as a powerful testament to his relentless dedication to innovation and societal impact. The award highlights his extraordinary journey in redefining traditional paradigms and his unwavering commitment to building a proactive, preventive ecosystem.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* Heart Test Banner Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col items-center mb-4">
            <span className="bg-red-100 text-red-600 text-sm md:text-2xl font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-2 animate-pulse">
              🔥 Limited Time Launch Offer
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center px-4">
              Book Your First Heart Checkup at an Exclusive Low Price
            </h3>
          </div>

          <Link
            href="/test/complete-heart-checkup-at-home"
            className="block group"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01] border-2 border-transparent hover:border-green-500">
              {/* Desktop & Large Screens Image (Visible from 'md' breakpoint up) */}
              <img
                src="/ad/heart-prvention1.jpg"
                alt="Complete Heart Checkup Desktop"
                className="hidden md:block w-full h-auto object-cover"
              />

              {/* Mobile & Tablet Image (Hidden from 'md' breakpoint up) */}
              <img
                src="/ad/heart-prevention2.jpg"
                alt="Complete Heart Checkup Mobile"
                className="block md:hidden w-full h-auto object-cover"
              />

              {/* Visual Call to Action Overlay */}
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                Book Test Now
              </div>
            </div>
          </Link>
        </div>

        {/* --- NEW SECTION: Quick Actions Banners --- */}
        <div className="mb-16 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Browse Top Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              title: "Get 100% Free Heart Prevention Checkup",
              sub: "Book Now",
              bg: "bg-[#eefcf4]",
              subColor: "text-green-700",
              href: "/test/heart-checkup-at-home",
              icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              ),
            },
            {
              title: "Membership Plans",
              sub: "Explore Now",
              bg: "bg-[#fff6e4]",
              subColor: "text-yellow-700",
              href: "/individual-membership-plans",
              icon: (
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "Find a test",
              sub: "AT HOME",
              bg: "bg-[#fdf0f4]",
              subColor: "text-pink-700",
              href: "/find-a-test",
              icon: (
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
            },
            {
              title: "Doctor Appointment",
              sub: "BOOK Consultation NOW",
              bg: "bg-[#f4f0ff]",
              subColor: "text-purple-700",
              href: "/doctor-appointment",
              icon: (
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <Link href={item.href} key={idx} className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-[1.02] group ${item.bg}`}>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  {/* Replaces \n with <br/> for the two-line title seen in the screenshot */}
                  <h4 className="font-bold text-gray-800 text-sm md:text-base leading-tight">
                    {item.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                  </h4>
                  <p className={`text-xs font-bold uppercase mt-1 ${item.subColor}`}>{item.sub}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
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
              description="Prioritizing cardiac safety through advanced ECG Analysis and risk assessment."
              href="/services/heart-attack-prevention"
            />
            <ServiceCard
              emoji="🧠"
              title="Mental Health Stress"
              description="Holistic support for stress and happiness measurement to ensure peace of mind."
              href="/services/mental-health-stress"
            />
            <ServiceCard
              emoji="🦴"
              title="Body & Bone Strength"
              description="Monitoring bone measurement and body strength to maintain mobility into old age."
              href="/services/bone-strength"
            />
            <ServiceCard
              emoji="⏳"
              title="Anti-Aging Science"
              description="Utilizing preventive healthcare and death prediction modeling to extend your healthy years."
              href="/services/anti-aging-science"
            />
            <ServiceCard
              emoji="🧘"
              title="Yoga & Ayurveda"
              description="Blending ancient wellness practices with modern medicine for a complete health ecosystem."
              href="/services/yoga-ayurveda"
            />
            <ServiceCard
              emoji="🧍"
              title="Body Preservation"
              description="Preserving body health just before end-of-life stages to ensure maximum longevity."
              href="/services/body-preservation"
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default memo(AboutUs);