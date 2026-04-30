import React from 'react';
import { Leaf, Sun, Moon, Wind, Compass, Flower2, ChevronRight, Activity, Zap, Shield, Sparkles } from 'lucide-react';

// --- 1. METADATA (For Search Engines) ---
export const metadata = {
  title: "Yoga & Ayurvedic Wisdom | Vedic Longevity",
  description: "Integrate 5,000 years of Ayurvedic wisdom with modern longevity science at Mission 100 Hospital. Explore Dosha-specific nutrition, Pranayama bio-feedback, and seasonal alignment.",
  keywords: ["Ayurveda New Delhi", "Yoga for Longevity", "Dosha Analysis", "Panchakarma", "Vedic Science", "Mission 100 Hospital"],
};

export default function YogaAyurvedaPage() {

  // --- 2. BREADCRUMB SCHEMA (For Rich Snippets) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mission100hospital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.mission100hospital.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Yoga & Ayurveda",
        "item": "https://www.mission100hospital.com/services/yoga-ayurveda"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8FAF9]">

      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Earthy Healing Theme */}
      <section className="bg-linear-to-b from-emerald-900 to-[#F8FAF9] py-24 px-6 border-b border-emerald-100/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100">
            <span className="text-sm font-bold text-emerald-800 uppercase tracking-[0.2em]">
              Vedic Science & Longevity
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase">
            Yoga & <br /> 
            <span className="text-emerald-400 font-extrabold">Ayurvedic Wisdom</span>
          </h1>
          <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
            Integrating 5,000 years of biological wisdom with modern longevity science. We synchronize your internal rhythms through Dosha-specific nutrition and mindful movement.
          </p>
        </div>
      </section>

      {/* 2. DOSHA BALANCE DASHBOARD */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-[3rem] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex flex-col lg:grid lg:grid-cols-3 items-center gap-12 border border-emerald-50">
          <div className="space-y-4">
            <span className="text-emerald-700 font-bold uppercase text-xs tracking-widest px-3 py-1 rounded-full bg-emerald-50">Constitution Audit</span>
            <h3 className="text-3xl font-bold text-slate-800">Biological <br/>Equilibrium</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
                Real-time tracking of your metabolic constitution (Prakriti) and current imbalances (Vikriti).
            </p>
          </div>
          
          <div className="text-center bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100 w-full relative overflow-hidden">
            <div className="relative z-10">
                <span className="text-7xl font-black text-slate-800 leading-none">Balanced</span>
                <p className="text-emerald-700 font-bold mt-2 uppercase tracking-tighter">Tridoshic State</p>
            </div>
            <div className="w-full flex gap-1.5 h-3 rounded-full mt-6 overflow-hidden bg-slate-200">
                <div className="bg-sky-400 h-full w-1/3" title="Vata"></div>
                <div className="bg-orange-400 h-full w-1/3" title="Pitta"></div>
                <div className="bg-emerald-600 h-full w-1/3" title="Kapha"></div>
            </div>
            <div className="flex justify-between text-[10px] font-bold mt-2 text-emerald-800/40 uppercase">
                <span>Vata</span>
                <span>Pitta</span>
                <span>Kapha</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="bg-white p-4 rounded-2xl border border-emerald-100 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <Leaf className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold uppercase text-slate-600">Digestive Fire (Agni):</span>
                </div>
                <span className="text-emerald-700 font-bold text-lg">High</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-100 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <Sun className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-bold uppercase text-slate-600">Vitality (Ojas):</span>
                </div>
                <span className="text-orange-600 font-bold text-lg">Stable</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-100 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                    <Wind className="w-4 h-4 text-sky-500" />
                    <span className="text-xs font-bold uppercase text-slate-600">Clarity (Sattva):</span>
                </div>
                <span className="text-sky-600 font-bold text-lg">Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AYURVEDIC PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-emerald-900 uppercase leading-tight">The Path to <br/>Biological Harmony</h2>
                <p className="text-slate-500 mt-4 text-lg">Our approach treats the individual, not the symptom, using the five elements as a diagnostic roadmap.</p>
            </div>
            <button className="text-emerald-700 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                EXPLORE RITUALS <ChevronRight className="w-5 h-5"/>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Dinacharya (Routine)", icon: <Compass className="text-emerald-700"/>, desc: "Circadian alignment through morning rituals, tongue scraping, and oil pulling to prime the detox pathways." },
                { title: "Ahara (Nutrition)", icon: <Flower2 className="text-emerald-700"/>, desc: "Dietary protocols based on your gut microbiome and dosha, focusing on the six tastes (Rasas) for metabolic balance." },
                { title: "Rasayana (Rejuvenation)", icon: <Sparkles className="text-emerald-700"/>, desc: "Anti-aging herbal formulations including Ashwagandha, Brahmi, and Shilajit to repair cellular damage." }
            ].map((item, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-emerald-50 hover:bg-emerald-50/30 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                        {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 4. YOGIC PHYSIOLOGY SECTION - Modern Tech Style */}
      <section className="bg-emerald-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-900 to-emerald-950 opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white relative z-10">
            <h2 className="text-4xl font-black mb-10 uppercase leading-tight">Yogic <br/><span className="text-emerald-400 font-light italic">Neuro-Physiology</span></h2>
            <div className="space-y-6">
              {[
                { title: "Pranayama Bio-Feedback", desc: "Regulating the Vagus nerve through controlled breathing to shift the body from 'Fight or Flight' to 'Rest and Digest'." },
                { title: "Asana Alignment", desc: "Correcting musculoskeletal imbalances through kinetic chain movements that lubricate joints and strengthen bones." },
                { title: "Yoga Nidra (Sleep Science)", desc: "Guided NSDR (Non-Sleep Deep Rest) sessions to facilitate rapid neural recovery and stress reduction." },
                { title: "Mantra & Sound Healing", desc: "Using specific frequencies to lower cortisol levels and harmonize heart rate variability (HRV)." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-emerald-500/10 transition-all group">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Zap className="text-emerald-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-emerald-50">{item.title}</h4>
                    <p className="text-emerald-100/40 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-[4rem] p-16 text-slate-800 flex flex-col justify-center min-h-125 relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <div className="mb-8">
                    <Activity className="w-20 h-20 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-black mb-6 italic uppercase tracking-tighter text-emerald-900">Mental Clarity: <span className="text-emerald-600 underline">SATTVA</span></h3>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  "Yoga is not just a movement; it is the calibration of the human nervous system to handle the stresses of a 100-year life."
                </p>
                <button className="bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-700 transition-all shadow-xl uppercase tracking-widest text-sm">
                  Book a Consult
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 5. SEASONAL WISDOM ACCORDION */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-emerald-900 uppercase tracking-tight">Seasonal Alignment (Ritucharya)</h2>
            <p className="text-slate-500 mt-2 font-medium">How your health changes with the environment.</p>
        </div>

        <div className="space-y-4">
            {[
                { season: "Grishma (Summer)", a: "Focus on cooling herbs (Shatavari, Fennel) and gentle moonlight meditation to pacify rising Pitta (heat)." },
                { season: "Varsha (Monsoon)", a: "Strengthening the digestive fire (Agni) with ginger and warming spices to prevent Vata accumulation." },
                { season: "Hemanta (Winter)", a: "Building Ojas (Immunity) through nourishing soups, oil massages (Abhyanga), and vigor-building yoga." }
            ].map((item, i) => (
                <details key={i} className="group border-b border-emerald-100 pb-6 cursor-pointer">
                    <summary className="flex justify-between items-center list-none text-xl font-bold text-slate-700 hover:text-emerald-700 transition-colors">
                        {item.season}
                        <span className="group-open:rotate-180 transition-transform text-emerald-600"><ChevronRight/></span>
                    </summary>
                    <p className="mt-4 text-slate-500 leading-relaxed max-w-3xl">
                        {item.a}
                    </p>
                </details>
            ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="bg-emerald-900 py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl font-black text-white mb-6 uppercase">Ready to find your center?</h2>
            <p className="text-emerald-100 mb-10 text-lg opacity-80">Get a personalized Ayurvedic assessment and custom yoga protocol tailored to your unique bio-type.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="Your email address" className="px-6 py-4 rounded-xl border-none focus:ring-2 ring-emerald-500/30 w-full sm:w-80 bg-white" />
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all uppercase tracking-wider shadow-lg">Start My Journey</button>
            </div>
        </div>
      </section>

      {/* 7. FOOTER DISCLAIMER */}
      <footer className="bg-white py-12 px-6 border-t border-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.2em] leading-loose">
            Mission 100 Ayurvedic protocols are supportive and preventative. <br />
            Yoga and herbal suggestions should be integrated with your existing medical treatments and discussed with a certified practitioner.
          </p>
        </div>
      </footer>
    </main>
  );
}