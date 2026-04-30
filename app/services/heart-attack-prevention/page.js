import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Leaf, 
  Microscope, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// --- 1. METADATA (ABOVE THE FUNCTION) ---
export const metadata = {
  title: "Heart Attack Prevention & Cardiac Safety",
  description: "Proactive cardiac risk assessments and heart health modeling at Mission 100 Hospital to identify heart attack risks before emergencies occur.",
  keywords: ["Heart attack prevention", "Cardiac safety", "ECG analysis", "Heart health score", "Mission 100 Hospital"],
};

export default function HeartPreventionPremium() {
  
  // --- 2. BREADCRUMB SCHEMA LOGIC ---
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
        "name": "Heart Attack Prevention",
        "item": "https://www.mission100hospital.com/services/heart-attack-prevention"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT HERE --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden">
        {/* Abstract background shapes for a modern medical look */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Mission 100 Longevity Protocol
            </div>
            <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8">
              The Science of <br />
              <span className="font-black text-emerald-600">Heart Longevity.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-10">
              Healthcare should be preventive rather than just reactive. Our mission is to provide the data and guidance for every individual to achieve a healthy, vibrant century of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-appointment" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
                Book Cardiac Scan <ArrowRight size={18} />
              </Link>
              <button className="bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Download Risk Guide
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=800" 
                alt="Heart Health Diagnostics" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Real-time Analysis</p>
                    <p className="text-xl font-black text-slate-900 italic leading-none">98.4% Precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE METHODOLOGY SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-4">The Methodology</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Proactive Cardiac Safety Through Advanced Modeling.</h3>
            </div>
            <p className="text-slate-500 text-lg max-w-sm">We focus on identifying critical risks before they become medical emergencies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-emerald-600" />,
                title: "Risk Assessments",
                desc: "Data-driven insights to identify potential cardiac vulnerabilities early."
              },
              {
                icon: <ShieldCheck className="text-emerald-600" />,
                title: "Cardiac Safety",
                desc: "Prioritizing immediate safety through advanced ECG and diagnostic protocols."
              },
              {
                icon: <Stethoscope className="text-emerald-600" />,
                title: "Longevity Support",
                desc: "Expert guidance for achieving a healthy, vibrant, and active century of life."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC DEPTH SECTION */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl bg-slate-100 flex flex-col items-center justify-center p-8 text-center group hover:bg-emerald-600 transition-colors duration-500">
                  <Microscope className="text-emerald-600 mb-4 group-hover:text-white" size={40} />
                  <p className="font-bold text-slate-900 group-hover:text-white">ECG Analysis</p>
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Cardiac Lab" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Medical Diagnostics" />
                </div>
                <div className="aspect-square rounded-3xl bg-emerald-50 flex flex-col items-center justify-center p-8 text-center">
                  <Clock className="text-emerald-600 mb-4" size={40} />
                  <p className="font-bold text-slate-900 leading-tight">Early Risk Identification</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
          </div>

          <div className="space-y-10">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight uppercase">Advanced <br /><span className="text-emerald-600 font-light italic serif lowercase">Heart Health Score.</span></h3>
            <p className="text-lg text-slate-500 leading-relaxed">Our diagnostic modeling provides a comprehensive Heart Health Score, allowing us to build personalized roadmaps for lifelong vitality.</p>
            
            <div className="space-y-4">
              {[
                "Prioritizing cardiac safety with precision ECG.",
                "Identifying critical heart risks before they occur.",
                "Achieving a healthy century through expert data.",
                "Managing aging with dignity and scientific precision."
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <p className="text-sm font-bold text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINICAL INTEGRATION SECTION */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="mx-auto text-emerald-400 mb-8" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Integrating Modern Science with Traditional Wellness.</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">We blend advanced Radiology and Pathology with holistic support to ensure the aging process is managed with scientific precision.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/services/yoga-ayurveda" className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm tracking-widest uppercase">
              Vedic Practices
            </Link>
            <Link href="/services/anti-aging-science" className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm tracking-widest uppercase">
              Longevity Science
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SUMMARY CALL TO ACTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[180px] opacity-10 -mr-48 -mt-48"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h3 className="text-4xl font-black mb-6 italic tracking-tight">Your Heart Longevity Journey Begins Now.</h3>
                <p className="text-emerald-50 text-lg opacity-90 leading-relaxed mb-8">Join the Mission 100 network and get the scientific guidance necessary to live 100 healthy years.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book-appointment" className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform text-center uppercase tracking-widest text-xs">
                    Start Heart Analysis
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-32 w-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                  <p className="text-3xl font-black leading-none">100</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Years</p>
                </div>
                <div className="h-32 w-24 bg-white/20 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center">
                  <p className="text-3xl font-black leading-none">94%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DISCLAIMER & FOOTER */}
      <section className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] leading-loose max-w-3xl mx-auto mb-10">
            Mission 100 provides preventive care and health optimization research. Consultations and risk assessments on this platform are for user guidance only and do not replace emergency medical care. In case of a medical emergency, please visit your nearest hospital immediately.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-50">
            <div className="text-left">
              <h4 className="font-black text-slate-900">MISSION 100™ HOSPITAL</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Live 100 Years, Live 100% Better</p>
            </div>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link>
              <Link href="/contact" className="hover:text-emerald-600">Help Center</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}