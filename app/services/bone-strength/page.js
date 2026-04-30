import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Activity, 
  Layers, 
  TrendingUp, 
  ChevronRight, 
  Plus, 
  Weight, 
  Zap,
  ArrowDownCircle,
  Dna
} from 'lucide-react';

// --- 1. METADATA (ABOVE THE FUNCTION) ---
export const metadata = {
  title: "Bone Strength & Density Testing",
  description: "Advanced DXA scanning and bone mineral density testing at Mission 100 Hospital to prevent osteoporosis and maintain lifelong mobility.",
  keywords: ["Bone health", "Osteoporosis prevention", "DEXA scan New Delhi", "Bone strength", "Skeletal longevity"],
};

export default function BoneStrengthLongevity() {

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
        "name": "Bone Strength",
        "item": "https://www.mission100hospital.com/services/bone-strength"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F1F5F9] text-[#1E293B] font-sans selection:bg-blue-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION: THE FOUNDATION */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-50 z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-md bg-blue-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Mission 100 Skeletal Protocol
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 text-[#0F172A]">
              Skeletal Strength. <br />
              <span className="text-blue-600">The Foundation of 100.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl">
              Monitoring bone measurement and body strength to maintain mobility into old age. At Mission 100, we build the strong foundation necessary for a lifelong vibrant century.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/book-appointment" className="bg-[#0F172A] hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold shadow-2xl transition-all flex items-center justify-center gap-3 group">
                Get Bone Density Test <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Download Strength Guide
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full">
            <div className="relative group">
              <div className="aspect-3/4 overflow-hidden rounded-[3rem] shadow-2xl border-12 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Abstract Mobility and Strength" 
                  className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute top-10 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl border-4 border-white transform rotate-3">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">T-Score Status</p>
                <p className="text-3xl font-black">Stable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE PILLARS OF MOBILITY */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Building a Strong Foundation for Lifelong Mobility.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our approach to skeletal longevity is data-driven, focusing on early detection and physical optimization to prevent fractures and maintain strength.
              </p>
            </div>
            <div className="h-px bg-slate-800 w-full hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "DXA Scanning",
                desc: "Advanced DXA scanning for early osteoporosis detection and risk analysis.",
                icon: <Layers strokeWidth={1.5} />
              },
              {
                title: "Nutrient Optimization",
                desc: "Personalized Vitamin D and Calcium optimization strategies for mineral density.",
                icon: <Zap strokeWidth={1.5} />
              },
              {
                title: "Weight-Bearing Plans",
                desc: "Tailored exercise frameworks designed specifically for bone strengthening.",
                icon: <Weight strokeWidth={1.5} />
              },
              {
                title: "Fall Prevention",
                desc: "Comprehensive fracture risk assessment and modern fall prevention tools.",
                icon: <Shield strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-800/40 border border-slate-700 hover:border-blue-500 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 24 })}
                </div>
                <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY: GOLD STANDARD DENSITOMETRY */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-3xl bg-slate-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Medical Tech" />
                </div>
                <div className="p-8 rounded-3xl bg-blue-50 text-blue-700">
                   <p className="text-4xl font-black mb-1">100%</p>
                   <p className="text-xs font-bold uppercase tracking-widest leading-tight">Precision Monitoring</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-8 rounded-3xl bg-slate-900 text-white">
                   <p className="text-4xl font-black mb-1 italic">DXA</p>
                   <p className="text-xs font-bold uppercase tracking-widest leading-tight">Gold Standard Technology</p>
                </div>
                <div className="h-48 rounded-3xl bg-slate-100 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Scientific Lab" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
              Science-Driven <br /> <span className="text-blue-600">Bone Preservation.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Mission 100 uses gold standard densitometry to ensure your skeletal health is preserved well before end-of-life stages. We focus heavily on the needs of Adults and the Elderly.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm"><Dna size={20}/></div>
                 <p className="text-sm font-bold text-slate-700">Biological age testing for bone health.</p>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm"><Activity size={20}/></div>
                 <p className="text-sm font-bold text-slate-700">Real-time mineral deficiency tracking.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEASUREMENT INDEX: T-SCORE VISUAL */}
      <section className="py-24 px-6 md:px-12 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 rotate-12 transform translate-x-1/4">
          <Layers size={600} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic">Bone Density & Skeletal Longevity.</h2>
          <p className="text-blue-100 text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
            Our diagnostic frameworks provide deep insights into your bone structure, allowing us to build a roadmap for lifelong mobility and fracture resistance.
          </p>
          
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[3rem]">
            <div className="flex flex-col md:flex-row justify-around gap-12">
               <div>
                 <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Bone Health Score</p>
                 <p className="text-6xl font-black italic">94%</p>
                 <p className="text-blue-200 text-sm mt-4">Aligned & Aligned</p>
               </div>
               <div className="w-px bg-white/20 hidden md:block"></div>
               <div>
                 <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Fracture Risk Index</p>
                 <p className="text-6xl font-black italic text-blue-900">Low</p>
                 <p className="text-blue-200 text-sm mt-4">Mission 100 Optimized</p>
               </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
               <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl">
                  START BONE DENSITY ANALYSIS
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREVENTATIVE ACTION: THE FOUR PILLARS (Detailed) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#0F172A] mb-4">Clinical Strength Framework</h2>
            <p className="text-slate-500">Every tool we use is aimed at maximizing your years of healthy movement.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="p-10 bg-slate-50 rounded-[2.5rem] flex flex-col justify-between hover:bg-slate-100 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-8"><TrendingUp size={28}/></div>
                <div>
                  <h4 className="text-2xl font-black mb-4 italic">DXA Scanning</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Advanced DXA scanning for early detection of osteoporosis. We use gold standard densitometry to ensure precision in every bone health assessment.
                  </p>
                </div>
             </div>
             <div className="p-10 bg-blue-50 rounded-[2.5rem] flex flex-col justify-between hover:bg-blue-100 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-8"><Plus size={28}/></div>
                <div>
                  <h4 className="text-2xl font-black mb-4 italic">Vitamin & Calcium</h4>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    Personalized Vitamin D and Calcium optimization strategies. We focus on mineral balance to ensure your body has the building blocks for strength.
                  </p>
                </div>
             </div>
             <div className="p-10 bg-[#0F172A] rounded-[2.5rem] flex flex-col justify-between text-white col-span-1 md:col-span-2 group overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Activity size={200} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8"><Weight size={28}/></div>
                  <h4 className="text-3xl font-black mb-4 italic">Weight-Bearing Exercises</h4>
                  <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                    Custom-tailored exercise plans specifically designed for bone strengthening. Movement is the key to maintaining mobility and density into your 100th year.
                  </p>
                  <button className="mt-8 flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs">
                    View Exercise Framework <ArrowDownCircle size={16}/>
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">Bone Health Inquiries</h2>
             <p className="text-slate-500">Essential knowledge for skeletal longevity.</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "How is bone and body strength monitored?", 
                a: "We utilize advanced DXA scanning and gold standard densitometry to track bone density, T-scores, and fracture risk index." 
              },
              { 
                q: "What tools are used for osteoporosis detection?", 
                a: "Our core framework includes DXA Scanning for early detection and personalized Vitamin D/Calcium optimization strategies." 
              },
              { 
                q: "Why is bone health important for longevity?", 
                a: "Maintaining bone density is the foundation of mobility. We focus on ensuring that the aging process is managed with dignity and physical strength." 
              },
              { 
                q: "Are the bone assessments preventative?", 
                a: "Yes. Mission 100 provides preventative care. Bone health assessments are preventative and should be used to build a long-term mobility plan." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <h5 className="font-bold text-[#0F172A] text-lg flex justify-between items-center group-hover:text-blue-600 transition-colors">
                  {faq.q} <Plus className="text-blue-600 transition-transform group-hover:rotate-90" size={20}/>
                </h5>
                <p className="mt-4 text-slate-500 leading-relaxed text-sm md:text-base hidden group-hover:block transition-all">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}