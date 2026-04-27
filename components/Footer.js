import React, { memo } from "react";
import { 
  ShieldCheck, 
  AlertCircle, 
  HeartPulse, 
  Stethoscope, 
  Mail, 
  Phone, 
  MapPin, 
  Zap,
  Activity
} from "lucide-react";

// Raw SVG Components to avoid "module not found" or "export doesn't exist" errors
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-slate-900 mt-20 font-sans selection:bg-emerald-500/30">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Identity Section */} 
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 rotate-3 transition-transform duration-300">
                <a href="/" className="text-[#020617] font-black text-xl">M</a>
              </div>
              <div>
                <h3 className="text-2xl font-black text-green-800racking-tighter uppercase italic">
                  Mission <span className="text-emerald-500 font-light">100</span>
                </h3>
                
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Empowering your journey toward a 100-year life through preventive healthcare, 
              Ayurveda, and modern vitality science.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/youngindiashow/" target="_blank" className="p-3 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 group">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/young-india-show/" target="_blank" className="p-3 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 group">
                <LinkedinIcon />
              </a>
              <a href="https://www.youtube.com/@mission100hospital" target="_blank" className="p-3 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white transition-all duration-300 group">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Navigation Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Clinical Care</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/services/heart-attack-prevention" className="hover:text-emerald-500 transition-colors">Heart Attack Prevention</a></li>
                <li><a href="/services/mental-health-stress" className="hover:text-emerald-500 transition-colors">Mental Health & Stress</a></li>
                <li><a href="/services/anti-aging-science" className="hover:text-emerald-500 transition-colors">Anti-Aging Science</a></li>
                <li><a href="/services/bone-strength" className="hover:text-emerald-500 transition-colors">Body & Bone Strength</a></li>
                <li><a href="/services/yoga-ayurveda" className="hover:text-emerald-500 transition-colors">Yoga & Ayurveda</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Trust Center</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/about" className="hover:text-emerald-500 transition-colors">Our Philosophy</a></li>
                <li><a href="/faq" className="hover:text-emerald-500 transition-colors">Help & FAQ</a></li>
                <li><a href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Use</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">Direct Connect</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 group">
                  <Phone size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <a href="tel:+919220620209" className="text-slate-200 font-bold hover:text-emerald-500 transition-colors tracking-tight">+91 9220 620 209</a>
                </div>
                <div className="flex gap-3 group">
                  <Mail size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <a href="mailto:info@mission100hospital.com" className="text-slate-300 break-all font-medium hover:text-emerald-500 transition-colors tracking-tight">info@mission100hospital.com</a>
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <p className="text-xs leading-relaxed">
                    Metroplex East Tower, Office No. 147, Laxmi Nagar, 110092
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Emergency Notice */}
        <div className="pt-10 border-t border-slate-900">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800 shadow-inner">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-red-500/20">
              <AlertCircle className="text-red-500 w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2">
                Emergency Medical Notice
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed italic max-w-4xl">
                Mission 100™ provides preventive care and health optimization research. Assessments on this platform are for wellness guidance 
                only and do not replace emergency medical or clinical treatment. In case of a medical emergency, visit your nearest hospital immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Final Footer Bottom */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="flex items-center gap-3 bg-slate-900/30 px-5 py-2.5 rounded-full border border-slate-800">
            <ShieldCheck className="text-emerald-500" size={18} />
            <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">
              © 2026 <span className="text-white">Mission100™ Hospital</span>. All Rights Reserved.
            </span>
          </div>
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] italic">
            Life at 100%
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);