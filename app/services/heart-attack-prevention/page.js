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

export default function HeartPreventionPremium() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-emerald-100">
      
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
              Healthcare should be preventive rather than just reactive[cite: 14]. Our mission is to provide the data and guidance for every individual to achieve a healthy, vibrant century of life[cite: 15].
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/book-appointment" className="px-12 bg-[#0F172A] hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl flex items-center gap-3 group">
                Book Consultation  Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=800" 
                alt="Heart Specialist" 
                className="rounded-[2.2rem] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Heart Score</p>
                  <p className="text-2xl font-black text-slate-900">98% Optimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MISSION PILLARS (The Brochure Focus) */}
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4">Our Core Mission: <span className="font-bold italic">Live 100 Years</span> [cite: 12]</h2>
            <div className="h-1 w-20 bg-emerald-500"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Advanced Detection",
                desc: "Early detection of critical heart risks through precision ECG and diagnostic modeling[cite: 19, 71].",
                icon: <Stethoscope />
              },
              {
                title: "Total Integration",
                desc: "Modern Radiology and Pathology integrated with traditional Ayurveda[cite: 18].",
                icon: <Microscope />
              },
              {
                title: "Longevity Modeling",
                desc: "Utilizing preventive healthcare and death prediction modeling to extend healthy years[cite: 30].",
                icon: <Clock />
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(pillar.icon, { size: 40 })}
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

      {/* 3. DIAGNOSTIC TOOLS & INSTRUMENTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold">01</div>
              <h5 className="font-bold">ECG Analysis</h5>
              <p className="text-xs text-slate-500">Advanced heart risk assessment using Mission 100 diagnostic modeling[cite: 22].</p>
            </div>
            <div className="bg-emerald-600 p-8 rounded-3xl space-y-4 text-white translate-y-8">
              <div className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center font-bold">02</div>
              <h5 className="font-bold text-white">CGM Integration</h5>
              <p className="text-xs text-emerald-100">Continuous Glucose Monitoring for long-term metabolic vitality[cite: 191].</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl space-y-4 text-white">
              <div className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center font-bold">03</div>
              <h5 className="font-bold text-white">DXA Scanning</h5>
              <p className="text-xs text-slate-400">Precision bone density and body strength measurement[cite: 110].</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl space-y-4 translate-y-8">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold">04</div>
              <h5 className="font-bold">Age Testing</h5>
              <p className="text-xs text-slate-500">Biological age testing and cellular telomere analysis[cite: 173].</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Clinical Precision through <span className="text-emerald-600 italic">Advanced Instrumentation.</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We focus heavily on the needs of Adults and the Elderly, ensuring that the aging process is managed with scientific precision[cite: 16]. Our technology stack ensures data-driven insights for body deficiency monitoring[cite: 19].
            </p>
            <ul className="space-y-4">
              {[
                "Biological age testing and telomere analysis [cite: 173]",
                "Advanced DXA scanning for early detection [cite: 110]",
                "HBA1C risk reduction strategies [cite: 192]",
                "Full-spectrum vitamin deficiency screening [cite: 201]"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. VEDIC AYURVEDA & YOGA (The Healing Fusion) */}
      <section className="py-24 px-6 bg-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 opacity-5">
           <Leaf size={400} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-light text-slate-900 mb-12">Ancient Wisdom Meets <span className="font-bold text-emerald-700">Modern Longevity</span> </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                <Activity size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Yoga & Pranayama</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Daily meditation and Pranayama (breathwork) guidance for profound stress relief and heart resilience[cite: 224].
              </p>
              <ul className="space-y-3">
                <li className="text-emerald-700 font-bold text-xs uppercase tracking-widest">• Dosha-based dietary planning [cite: 223]</li>
                <li className="text-emerald-700 font-bold text-xs uppercase tracking-widest">• Herbal rejuvenation protocols [cite: 226]</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-emerald-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Ayurvedic Healing</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Ancient detoxification (Panchakarma) techniques integrated with modern medicine for a complete ecosystem[cite: 225, 32].
              </p>
              <Link href="/contact" className="text-emerald-600 font-black text-sm hover:underline flex items-center gap-2">
                START HEALING JOURNEY <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLINICAL EXPERTISE (Meet the Doctor) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-[3/4]">
                   <img 
                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" 
                    alt="Dr. Gautam Sharma" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#0F172A] text-white p-6 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Consultation Fee</p>
                  <p className="text-2xl font-black italic">₹1200 [cite: 51]</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Specialists</h3>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Dr. Gautam Sharma</h2>
              <p className="text-slate-500 font-bold mb-6">MD-AIIMS Delhi | Cardiology Specialist </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
                "India's top specialists dedicated to your longevity and preventive care. We prioritize cardiac safety through advanced analysis." [cite: 38, 22]
              </p>
              <div className="flex gap-4">
                <Link href="/book-appointment">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-all">
                  Book Appointment [cite: 54]
                </button>
                </Link>
                <div className="px-8 py-4 border border-slate-200 rounded-lg text-sm font-bold flex items-center gap-2">
                  <Clock size={16} className="text-emerald-600" /> Next: Today 4:00 PM [cite: 53]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ PREVIEW */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Common Questions [cite: 240]</h2>
          <div className="space-y-4">
            {[
              { q: "How can I check my heart attack risk here? [cite: 244]", a: "Through our precision ECG modeling and diagnostic framework designed for early detection." },
              { q: "Is Mission 100 suitable for senior citizens? [cite: 244]", a: "Yes, we specialize in geriatric longevity science ensuring the aging process is managed with dignity[cite: 16]." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-slate-900 mb-2 flex justify-between">
                  {faq.q} <span className="text-emerald-600 text-xl">+</span>
                </h5>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DISCLAIMER & FOOTER */}
      <section className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] leading-loose max-w-3xl mx-auto mb-10">
            Mission 100 provides preventive care and health optimization research. Consultations and risk assessments on this platform are for user guidance only and do not replace emergency medical care. In case of a medical emergency, please visit your nearest hospital immediately[cite: 270].
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-50">
            <div className="text-left">
              <h4 className="font-black text-slate-900">MISSION 100™ HOSPITAL</h4>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Live 100 Years, Live 100% Better [cite: 10]</p>
            </div>
            <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Link href="/privacy" className="hover:text-emerald-600">Privacy Policy [cite: 262]</Link>
              <Link href="/terms" className="hover:text-emerald-600">Terms of Use [cite: 263]</Link>
            </div>
            <p className="text-xs text-slate-400">© 2026 Mission 100™ Hospital [cite: 273]</p>
          </div>
        </div>
      </section>
    </main>
  );
}