import React from "react";
import Link from "next/link";
import {
  Brain,
  Smile,
  ShieldCheck,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Zap,
  Waves,
  MoonStar,
  Flower2,
  ScanHeart,
  Shield,
} from "lucide-react";

export const metadata = {
  title:
    "Mental Health, Stress Management & Emotional Wellness | Mission100 Hospital",
  description:
    "Mission100 Hospital provides stress management, emotional wellness programs, neuro wellness guidance, mindfulness support and cognitive health consultations for a healthier life.",
  keywords: [
    "Mental Health",
    "Stress Management",
    "Emotional Wellness",
    "Mindfulness",
    "Mental Wellness",
    "Mission100 Hospital",
    "Cognitive Health",
    "Burnout Recovery",
  ],
};

export default function MentalHealthWellness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.mission100hospital.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.mission100hospital.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mental Health & Stress",
        item: "https://www.mission100hospital.com/services/mental-health-stress",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-emerald-50 text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/40 via-cyan-50/30 to-white pointer-events-none"></div>

        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200 text-emerald-700 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm mb-6 w-fit">
              <Sparkles size={16} className="shrink-0" />
              Mission100 Mental Wellness Program
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 bg-clip-text text-transparent">
                Mental Wellness
              </span>
              <br />
              <span className="text-slate-800">
                For A Peaceful & Healthy Life
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Mission100 focuses on stress management, emotional balance,
              cognitive wellness and mental resilience through holistic support,
              mindfulness guidance and lifestyle optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/book-test"
                className="bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-black transition-all duration-300 shadow-xl hover:shadow-emerald-200 flex items-center justify-center gap-3 text-center"
              >
                Book Consultation
                <ArrowRight size={18} className="shrink-0" />
              </Link>

              <Link
                href="/contact"
                className="bg-white border border-slate-200 hover:border-emerald-300 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:bg-emerald-50 transition-all flex items-center justify-center text-center"
              >
                Learn More
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-12 w-full max-w-xl">
              {[
                { value: "92%", label: "Stress Recovery" },
                { value: "24/7", label: "Support Guidance" },
                { value: "100+", label: "Wellness Plans" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg p-3 sm:p-5 text-center"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-600">
                    {item.value}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-[3rem] blur-3xl opacity-30 pointer-events-none"></div>

            <div className="relative bg-white p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=1200"
                alt="Mental Wellness"
                className="rounded-[2rem] sm:rounded-[2.5rem] w-full aspect-[4/5] md:aspect-auto md:h-[550px] lg:h-[650px] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white shadow-xl">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Brain size={24} className="sm:hidden" />
                    <Brain size={30} className="hidden sm:block" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 font-black mb-1">
                      Emotional Wellness
                    </p>

                    <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 leading-snug">
                      Balanced Mind & Better Life
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-sm">
              <ShieldCheck size={16} className="shrink-0" />
              Our Mental Wellness Support
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
              Complete Mental
              <br />
              <span className="bg-gradient-to-r from-emerald-700 to-cyan-500 bg-clip-text text-transparent">
                Wellness Solutions
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-500 leading-relaxed">
              We focus on emotional resilience, stress recovery, cognitive
              wellness and long-term mental balance for healthier living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Activity size={28} />,
                title: "Stress Management",
                desc: "Guidance and lifestyle support for reducing stress and mental fatigue.",
              },
              {
                icon: <Smile size={28} />,
                title: "Emotional Wellness",
                desc: "Support for emotional balance, positivity and peace of mind.",
              },
              {
                icon: <Brain size={28} />,
                title: "Cognitive Clarity",
                desc: "Focus enhancement and cognitive wellness support programs.",
              },
              {
                icon: <HeartHandshake size={28} />,
                title: "Mental Resilience",
                desc: "Long-term emotional resilience and burnout prevention guidance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-emerald-50 rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-6 sm:mb-8 shadow-lg shadow-emerald-200 group-hover:scale-105 transition-all duration-300 shrink-0">
                  {item.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 via-green-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 w-fit">
              <MoonStar size={16} className="shrink-0" />
              Emotional Balance
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 sm:mb-8">
              Build A Calm,
              <br />
              Healthy & Focused Mind
            </h2>

            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Mission100 supports emotional wellness through mindfulness,
              healthy lifestyle guidance, positivity enhancement and stress
              recovery programs.
            </p>

            <div className="space-y-4 w-full max-w-xl text-left">
              {[
                "Burnout prevention support",
                "Mindfulness & relaxation guidance",
                "Sleep & emotional wellness support",
                "Healthy lifestyle improvement plans",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 rounded-xl sm:rounded-2xl p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-white shrink-0" size={20} />
                  <p className="font-semibold text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-md lg:max-w-none mx-auto pt-4 pb-8">
            <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
                alt="Meditation and Wellness"
                className="rounded-[2rem] sm:rounded-[2.5rem] w-full aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:left-8 sm:right-8 bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Flower2 size={24} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 font-black mb-1">
                    Wellness Support
                  </p>

                  <h4 className="text-lg sm:text-2xl font-black text-slate-900">Better Mental Balance</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="relative w-full max-w-md lg:max-w-none mx-auto order-2 lg:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-size-[20px_20px] opacity-10 pointer-events-none"></div>

              <div className="relative bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-[2.5rem] sm:rounded-[3rem] p-4 sm:p-10 border border-emerald-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: <Shield size={26} />, title: "Mental Safety" },
                    { icon: <ScanHeart size={26} />, title: "Stress Tracking" },
                    { icon: <Brain size={26} />, title: "Mind Clarity" },
                    { icon: <Waves size={26} />, title: "Relaxation Support" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4 sm:mb-6 shadow-sm shrink-0">
                        {item.icon}
                      </div>

                      <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 sm:mb-8 text-slate-900">
                Why Choose
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                  Mission100?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Our approach combines mental wellness guidance, healthy
                lifestyle planning and emotional support programs to help people
                live healthier and happier lives.
              </p>

              <div className="space-y-6 w-full max-w-xl text-left">
                {[
                  "Holistic wellness focused approach",
                  "Lifestyle & emotional guidance",
                  "Stress recovery support",
                  "Mindfulness and relaxation programs",
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Zap size={14} />
                    </div>

                    <div>
                      <h4 className="font-black text-slate-900 text-base mb-1">
                        {point}
                      </h4>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Personalized support designed for long-term mental and
                        emotional wellness.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br lg:bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 items-center">
              <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 sm:mb-8">
                  Start Your Mental
                  <br />
                  Wellness Journey Today
                </h2>

                <p className="text-emerald-50 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                  Take the first step towards emotional balance, stress recovery
                  and a healthier lifestyle with Mission100 Hospital.
                </p>

                <Link
                  href="/book-test"
                  className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
                >
                  Book Appointment
                  <ArrowRight size={18} className="shrink-0" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full sm:w-auto justify-center">
                {[
                  { number: "100+", label: "Wellness Programs" },
                  { number: "24/7", label: "Guidance Support" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-3 text-center mx-auto"
                  >
                    <h3 className="text-2xl sm:text-4xl font-black mb-1 sm:mb-3">{item.number}</h3>
                    <p className="text-[10px] sm:text-sm uppercase tracking-wider leading-snug">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}