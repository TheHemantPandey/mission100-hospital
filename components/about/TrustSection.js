import React, { memo } from 'react';
import { MapPin, Phone, Mail, ShieldCheck, AlertCircle, Award } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 px-4 md:px-0">
      {/* Container: mx-auto for mobile safety, lg:mx-32 to align with your other PC sections */}
      <div className="max-w-7xl mx-auto lg:mx-32 relative">
        
        {/* Main Grid: Stacks on mobile, 2 columns on PC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact & Presence */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Our Foundation of <span className="text-green-600">Trust</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
                Empowering your journey toward a 100-year life through preventive healthcare, 
                Ayurveda, and modern vitality science. We are committed to transparency 
                and accessible support.
              </p>
            </div>

            <div className="space-y-6">
              {/* Headquarters */}
              <div className="flex items-start gap-5 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100 transition-colors group-hover:border-green-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Headquarters</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Metroplex East Tower, Office No. 147,<br />
                    Laxmi Nagar, New Delhi 110092
                  </p>
                </div>
              </div>

              {/* Support Line */}
              <div className="flex items-start gap-5 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100 transition-colors group-hover:border-green-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Support Line</h4>
                  <a href="tel:+919220620209" className="text-slate-500 text-sm font-medium hover:text-green-600 transition-colors">
                    +91 9220 620 209
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600 border border-slate-100 transition-colors group-hover:border-green-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <a href="mailto:info@mission100.in" className="text-slate-500 text-sm font-medium hover:text-green-600 transition-colors">
                    info@mission100hospital.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Verification & Disclaimers */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900">Medical Transparency</h4>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                <AlertCircle className="text-amber-600 shrink-0 w-5 h-5" />
                <p className="text-[11px] md:text-xs text-amber-900 leading-relaxed italic">
                  *Mission 100 provides preventive care and health optimization. Consultations 
                  and risk assessments do not replace emergency medical care.
                </p>
              </div>

              {/* Grid for Mobile/Tablet safety */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-slate-100 rounded-2xl hover:border-green-200 transition-colors">
                  <Award className="text-green-600 mb-3 w-5 h-5" />
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Verified Care</h5>
                  <p className="text-[11px] text-slate-500 leading-tight">Holistic wellness tools for self-improvement and life extension.</p>
                </div>
                <div className="p-5 border border-slate-100 rounded-2xl hover:border-green-200 transition-colors">
                  <ShieldCheck className="text-green-600 mb-3 w-5 h-5" />
                  <h5 className="font-bold text-slate-900 text-sm mb-1">Clinical Safety</h5>
                  <p className="text-[11px] text-slate-500 leading-tight">Guided longevity protocols designed by India's top specialists.</p>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-6">
                © 2026 Mission100™ Hospital. All Rights Reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(TrustSection);