import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, AlertCircle, Award } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact & Presence */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Our Foundation of <span className="text-green-600">Trust</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Empowering your journey toward a 100-year life through preventive healthcare, 
                Ayurveda, and modern vitality science. We are committed to transparency 
                and accessible support.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Headquarters</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Metroplex East Tower, Office No. 147,<br />
                    Laxmi Nagar, New Delhi 110092 [cite: 272, 273]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Support Line</h4>
                  <p className="text-slate-500 text-sm font-medium">+91 9220 620 209 [cite: 276]</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm font-medium">info@mission100.in [cite: 270]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Verification & Disclaimers */}
          <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Medical Transparency</h4>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                <AlertCircle className="text-amber-600 shrink-0" size={20} />
                <p className="text-xs text-amber-900 leading-relaxed italic">
                  Mission 100 provides preventive care and health optimization. Consultations 
                  and risk assessments do not replace emergency medical care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border border-slate-100 rounded-2xl">
                  <Award className="text-green-600 mb-3" size={20} />
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Verified Care</h5>
                  <p className="text-[11px] text-slate-500">Holistic wellness tools for self-improvement and life extension[cite: 149].</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl">
                  <ShieldCheck className="text-green-600 mb-3" size={20} />
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Clinical Safety</h5>
                  <p className="text-[11px] text-slate-500">Guided longevity protocols designed by India's top specialists[cite: 43].</p>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-6">
                © 2026 Mission100. All Rights Reserved. [cite: 275]
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;