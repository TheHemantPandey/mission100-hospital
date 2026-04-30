import React from 'react';
import { 
  Brain, 
  Smile, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Compass, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Plus,
  Zap,
  Waves
} from 'lucide-react';

// --- 1. METADATA (For Search Engines) ---
export const metadata = {
  title: "Mental Health, Stress & Cognitive Clarity",
  description: "Mission 100 Hospital provides advanced neuro-mapping, stress resilience tracking, and behavioral analysis to optimize cognitive clarity and mental vitality for a 100-year life.",
  keywords: ["Mental Health New Delhi", "Stress Management", "Neuro-mapping", "Cognitive Clarity", "Behavioral Analysis", "Mission 100 Hospital"],
};

export default function MentalHealthWellness() {
  
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
        "name": "Mental Health & Stress",
        "item": "https://www.mission100hospital.com/services/mental-health&stress"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FAFAFF] text-[#0F172A] font-sans selection:bg-indigo-100">
      
      {/* --- 3. INJECT SCHEMA SCRIPT --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Clinical Authority & Calm */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 bg-white overflow-hidden">
        {/* Soft Indigo Gradient Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-50/40 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[120px] z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-indigo-100">
              Mission 100 Psychiatry & Wellness
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[1.05] mb-8 tracking-tighter">
              Cognitive Clarity. <br />
              <span className="text-indigo-600 font-light italic serif">Mental Vitality.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
              Personalized strategies for a calmer mind. At **Mission 100**, we provide holistic support for stress and happiness measurement to ensure peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#0F172A] hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3 group">
                Check Stress Score Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Our Philosophy
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="relative z-10 bg-white p-3 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-indigo-50">
              <img 
                src="https://images.unsplash.com/photo-1518241353330-0f797f8e8b2b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mental Clarity and Focus" 
                className="rounded-[3rem] grayscale-15 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Minimalist Data Badge */}
            <div className="absolute -bottom-8 lg:-left-12 left-6 right-6 lg:right-auto bg-white p-8 rounded-3xl shadow-2xl border border-indigo-50 z-20">
              <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">Stress Resilience</p>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-[#0F172A]">92%</span>
                <Brain className="text-indigo-600" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS - Deep Professional Scroll */}
      <section className="py-32 px-6 lg:px-12 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Measuring the <br/>Science of Joy</h2>
              <p className="text-indigo-200/50 text-lg leading-relaxed">
                Our core pillars prioritize preventative mental health and long-term emotional well-being preservation.
              </p>
            </div>
            <div className="h-px bg-indigo-500/20 w-full hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Stress Management",
                desc: "Personalized strategies for a calmer mind and burnout prevention frameworks.",
                icon: <Activity strokeWidth={1.5} />
              },
              {
                title: "Happiness Index",
                desc: "Scientific score based on lifestyle and mood to measure emotional vitality.",
                icon: <Smile strokeWidth={1.5} />
              },
              {
                title: "Behavioral Analysis",
                desc: "Understanding the psychology of longevity through pattern recognition.",
                icon: <Brain strokeWidth={1.5} />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-12 rounded-[3rem] bg-indigo-900/10 border border-indigo-500/10 hover:border-indigo-400 transition-all duration-500">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-indigo-900/40 group-hover:scale-110 transition-transform">
                  {React.cloneElement(pillar.icon, { size: 28, className: "text-white" })}
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{pillar.title} </h4>
                <p className="text-indigo-200/40 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC PRECISION SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-4/5 rounded-[3.5rem] overflow-hidden shadow-2xl border-12 border-[#F8FAFF]">
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800" 
                  alt="Neuro-Mapping Assessment" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute top-10 -right-8 bg-[#0F172A] text-white p-8 rounded-3xl shadow-2xl transform -rotate-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">Cognitive Load</p>
                <p className="text-3xl font-black italic">Optimal</p>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div className="w-12 h-1 bg-indigo-600"></div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight tracking-tighter">
              Advanced <br /><span className="text-indigo-600 font-light italic serif">Neuro-Mapping.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              We focus on focus and memory optimization protocols. Our assessments ensure your cognitive load remains optimal through advanced neuro-mapping.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "Biofeedback", desc: "Advanced stress-level tracking." },
                { title: "CBT Support", desc: "Mindfulness and cognitive support." },
                { title: "EQ Coaching", desc: "Emotional intelligence for longevity." },
                { title: "Serotonin Strategies", desc: "Precision neurotransmitter optimization." }
              ].map((tool, i) => (
                <div key={i} className="flex gap-4 group">
                   <div className="mt-1 w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Zap size={10} />
                   </div>
                   <div>
                      <h5 className="font-bold text-indigo-950 text-sm mb-1">{tool.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tool.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEHAVIORAL ANALYSIS METRICS */}
      <section className="py-32 px-6 lg:px-12 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto">
           <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-indigo-50 flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="text-4xl font-bold text-[#0F172A] mb-8 italic tracking-tight">Psychometric Self-Discovery</h3>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                   Understanding the psychology of longevity. We use behavioral pattern recognition for healthier habits and strengths-based roadmaps.
                 </p>
                 <button className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-[#0F172A] transition-all uppercase tracking-widest text-xs">
                    Test Your Personality
                 </button>
              </div>
              <div className="w-full space-y-5">
                 {[
                   { label: "Mindset Stability", value: "High", color: "indigo" },
                   { label: "Happiness Index", value: "8.5/10", color: "indigo" },
                   { label: "Emotional Resilience", value: "Optimal", color: "indigo" }
                 ].map((stat, i) => (
                   <div key={i} className="p-8 bg-[#F8FAFF] rounded-3xl border border-indigo-50 flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                      <span className="text-2xl font-black text-indigo-600 italic tracking-tighter">{stat.value}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. HOLISTIC RESILIENCE SECTION */}
      <section className="py-32 px-6 lg:px-12 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
           <Waves size={800} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight">
                Emotional <br /><span className="text-indigo-600 italic font-light serif">Vitality Protocol.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Holistic support for stress and happiness measurement to ensure peace of mind. We provide the tools necessary to achieve a vibrant century of life.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
                       <HeartHandshake size={24} />
                    </div>
                    <h5 className="font-bold text-indigo-950">Emotional Support</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Therapeutic support for anxiety and burnout.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-sm">
                       <Sparkles size={24} />
                    </div>
                    <h5 className="font-bold text-indigo-950">Resilience Training</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Long-term emotional resilience training protocols.</p>
                 </div>
              </div>
           </div>
           <div className="lg:w-1/2 w-full">
              <div className="bg-[#0F172A] rounded-[4rem] p-16 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                 <h4 className="text-3xl font-bold mb-8 italic">Happiness Measurement</h4>
                 <p className="text-indigo-200/50 mb-10 leading-relaxed">
                    A scientific score based on lifestyle and mood. Social connectivity and community-based health support are central to our longevity framework.
                 </p>
                 <button className="text-indigo-400 font-bold uppercase tracking-widest text-xs flex items-center gap-3 group">
                    Begin Assessment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 6. WELLNESS INQUIRIES (FAQs) */}
      <section className="py-32 px-6 lg:px-12 bg-[#F8FAFF] border-t border-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4 italic">Wellness Inquiries</h2>
            <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-bold">Scientific mental health support</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What exactly is 'Happiness Measurement'?", 
                a: "It is a scientific score based on lifestyle and mood, used to measure the science of a joyful life." 
              },
              { 
                q: "How is stress resilience tracked?", 
                a: "Utilizing advanced stress-level tracking and biofeedback to provide personalized burnout prevention frameworks." 
              },
              { 
                q: "What is involved in behavioral analysis?", 
                a: "It includes psychometric testing for self-discovery and behavioral pattern recognition for healthier habits." 
              },
              { 
                q: "Do you provide cognitive assessments?", 
                a: "Yes, we utilize advanced neuro-mapping and cognitive assessments to ensure focus and memory optimization." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-indigo-50 group cursor-pointer hover:shadow-xl transition-all">
                <h5 className="font-bold text-[#0F172A] text-lg flex justify-between items-center">
                  {faq.q} <Plus className="text-indigo-400 group-hover:rotate-90 transition-transform" />
                </h5>
                <p className="mt-6 text-slate-500 leading-relaxed text-sm hidden group-hover:block transition-all">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLINICAL DISCLAIMER */}
      <section className="bg-white py-16 px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
             Mission 100 provides preventative mental health support and behavioral analysis frameworks. <br />
             Assessments and wellness plans do not replace professional psychiatric clinical diagnosis, psychological therapy, or emergency care. <br />
             In case of a medical emergency, visit your nearest hospital immediately.
           </p>
        </div>
      </section>

    </main>
  );
}