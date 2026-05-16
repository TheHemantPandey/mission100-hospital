import React from "react";
import Link from "next/link";
import {
  Heart,
  Activity,
  ShieldCheck,
  Stethoscope,
  Leaf,
  Microscope,
  Clock3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  Brain,
} from "lucide-react";

export const metadata = {
  title: "Heart Attack Prevention | Mission100 Hospital",
  description:
    "Advanced preventive heart health analysis, cardiac risk assessment, ECG monitoring and wellness support at Mission100 Hospital.",
  keywords: [
    "Heart Attack Prevention",
    "Cardiac Risk Assessment",
    "Heart Health",
    "Mission100 Hospital",
    "ECG Analysis",
    "Preventive Healthcare",
  ],
};

export default function HeartPreventionPremium() {
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
        name: "Heart Attack Prevention",
        item:
          "https://www.mission100hospital.com/services/heart-attack-prevention",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-emerald-50 overflow-x-hidden">
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
      <section className="relative py-12 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-200/30 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[400px] md:h-[400px] bg-cyan-200/30 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200 text-emerald-700 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm mb-6 w-fit">
              <Sparkles size={16} className="shrink-0" />
              Mission100 Cardiac Protection Program
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 bg-clip-text text-transparent">
                Heart Attack
              </span>
              <br />
              <span className="text-slate-900">Prevention</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Mission100 Hospital helps identify early cardiac risks using
              modern diagnostics, ECG analysis, preventive wellness programs,
              and personalized heart health guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/book-appointment"
                className="bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white px-8 py-4 sm:py-5 rounded-2xl font-black shadow-xl hover:shadow-emerald-200 transition-all flex items-center justify-center gap-2 text-center"
              >
                Book Heart Checkup
                <ArrowRight size={18} className="shrink-0" />
              </Link>

              <Link
                href="/contact"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 sm:py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center flex items-center justify-center"
              >
                Contact Our Team
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-12 w-full max-w-xl">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-100 shadow-lg text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-600">24/7</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium mt-1">
                  Monitoring Support
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-100 shadow-lg text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-600">94%</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium mt-1">
                  Early Risk Detection
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-slate-100 shadow-lg text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-green-600">100+</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium mt-1">
                  Wellness Programs
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="absolute -inset-4 sm:-inset-5 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-[40px] blur-3xl opacity-40 pointer-events-none"></div>

            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] shadow-2xl border border-white/40 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=1200"
                alt="Heart Prevention"
                className="w-full aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[650px] object-cover select-none"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/40 shadow-xl">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Activity size={24} className="sm:hidden" />
                    <Activity size={30} className="hidden sm:block" />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-sm uppercase tracking-widest text-emerald-600 font-black">
                      Advanced ECG Analysis
                    </p>

                    <h3 className="text-base sm:text-2xl font-black text-slate-900">
                      Real-Time Heart Monitoring
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-sm">
              <ShieldCheck size={16} className="shrink-0" />
              Preventive Cardiac Care
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-4 sm:mb-6">
              Protect Your Heart Before Emergencies Happen
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We combine preventive healthcare, diagnostics, and lifestyle
              management to help patients reduce future cardiac risks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Cardiac Risk Analysis",
                desc: "Identify heart-related risks before major symptoms or emergencies occur.",
              },
              {
                icon: Microscope,
                title: "Advanced Diagnostics",
                desc: "ECG analysis, pathology support, and wellness screening for better prevention.",
              },
              {
                icon: Brain,
                title: "Lifestyle Guidance",
                desc: "Diet, yoga, stress management and wellness programs for long-term health.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  i === 2 ? "sm:col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-6 sm:mb-7 shadow-lg shadow-emerald-200 group-hover:scale-105 transition-all shrink-0">
                  <item.icon size={26} className="sm:hidden" />
                  <item.icon size={30} className="hidden sm:block" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-white shadow-2xl">
                <Clock3 size={36} className="mb-4 sm:hidden" />
                <Clock3 size={42} className="hidden sm:block sm:mb-5" />

                <h3 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3">
                  Early Detection
                </h3>

                <p className="text-emerald-50 text-sm sm:text-base leading-relaxed">
                  Detect risks before severe cardiac complications arise.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Diagnostics"
                className="rounded-[24px] sm:rounded-[32px] h-48 sm:h-[320px] w-full object-cover shadow-xl"
              />
            </div>

            <div className="space-y-4 sm:space-y-5 sm:pt-12">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                alt="Heart Monitoring"
                className="rounded-[24px] sm:rounded-[32px] h-48 sm:h-[320px] w-full object-cover shadow-xl"
              />

              <div className="bg-slate-900 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 text-white shadow-2xl">
                <Heart size={36} className="mb-4 text-emerald-400 sm:hidden" />
                <Heart size={42} className="hidden sm:block sm:mb-5 text-emerald-400" />

                <h3 className="text-2xl sm:text-3xl font-black mb-2 sm:mb-3">
                  Heart Wellness
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Improve long-term heart strength with guided wellness support.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-sm w-fit">
              <Activity size={16} className="shrink-0" />
              Heart Health Monitoring
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Advanced Heart Health Analysis
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Our cardiac safety programs focus on ECG interpretation, early
              risk detection, preventive care, and complete wellness support to
              help individuals live healthier and safer lives.
            </p>

            <div className="space-y-4 w-full max-w-xl">
              {[
                "Advanced ECG & cardiac diagnostics",
                "Heart attack risk identification",
                "Lifestyle & wellness counseling",
                "Preventive healthcare programs",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>

                  <p className="font-bold text-slate-700 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 sm:mb-8 border border-white/10 shrink-0">
            <Leaf size={32} className="text-emerald-400 sm:hidden" />
            <Leaf size={48} className="hidden sm:block text-emerald-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 sm:mb-8">
            Modern Cardiac Science +
            <br />
            Holistic Wellness
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 sm:mb-12">
            Mission100 Hospital integrates diagnostics, preventive medicine,
            yoga, stress management, nutrition, and wellness science for better
            heart longevity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/services/yoga-ayurveda"
              className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all text-center"
            >
              Yoga & Wellness
            </Link>

            <Link
              href="/services/anti-aging-science"
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl font-black transition-all shadow-xl text-center"
            >
              Longevity Science
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-gradient-to-br lg:bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 p-8 sm:p-12 md:p-20 shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-white/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
              <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 shadow-sm w-fit text-white">
                  <Sparkles size={16} className="shrink-0" />
                  Mission100 Preventive Healthcare
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                  Start Your Heart Safety Journey Today
                </h2>

                <p className="text-emerald-50 text-sm sm:text-lg leading-relaxed mb-8">
                  Book your preventive heart health consultation and receive
                  expert cardiac guidance from Mission100 Hospital.
                </p>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                >
                  Book Appointment
                  <ArrowRight size={20} className="shrink-0" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full lg:w-auto">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-white/10">
                  <h3 className="text-3xl sm:text-5xl font-black text-white">100+</h3>
                  <p className="text-emerald-50 text-xs sm:text-sm mt-2 font-semibold">
                    Wellness Programs
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-center border border-white/10">
                  <h3 className="text-3xl sm:text-5xl font-black text-white">94%</h3>
                  <p className="text-emerald-50 text-xs sm:text-sm mt-2 font-semibold">
                    Risk Detection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}