import React, { memo } from "react";
import { ShieldCheck, AlertCircle, HeartPulse, Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 md:mt-20">
      {/* Container: mx-auto for mobile, lg:mx-32 for PC alignment */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-12 md:pt-16 lg:px-8">
        
        {/* Main Grid: Responsive column stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-12">
          
          {/* LEFT SIDE: Brand & Mission */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <a href="/" className="text-white font-bold text-lg">M</a>
                </div>
                <div className="flex flex-wrap items-baseline">
                  <a href="/" className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">Mission</a>
                  <a href="/" className="text-green-600 text-2xl md:text-3xl font-bold ml-1">100</a>
                  <a href="/" className="text-green-600 text-2xl md:text-3xl font-extrabold ml-1">Hospital</a>
                </div>
              </div>
              <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
                Empowering your journey toward a 100-year life through preventive healthcare, 
                Ayurveda, and modern vitality science.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/youngindiashow/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 shadow-sm active:scale-95">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/young-india-show/" target="_blank" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm active:scale-95">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4">
            {/* Column 1: Services */}
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">Medical Care</h2>
              <ul className="text-gray-600 space-y-4 font-medium text-sm">
                <li><a href="/services/heart-attack-prevention" className="hover:text-green-600 transition-colors">Heart Attack Prevention</a></li>
                <li><a href="/services/mental-health&stress" className="hover:text-green-600 transition-colors">Mental Health & Stress</a></li>
                <li><a href="/services/anti-aging-science" className="hover:text-green-600 transition-colors">Anti-Aging Science</a></li>
                <li><a href="/services/bone-strength" className="hover:text-green-600 transition-colors">Body & Bone Strength</a></li>
                <li><a href="/services/yoga-ayurveda" className="hover:text-green-600 transition-colors">Yoga & Ayurveda</a></li>
                <li><a href="/services/metabolic-sugar-control" className="hover:text-green-600 transition-colors">Metabolic & Sugar Control</a></li>
              </ul>
            </div>

            {/* Column 2: Trust & Policy */}
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">Trust Center</h2>
              <ul className="text-gray-600 space-y-4 font-medium text-sm">
                <li><a href="/" className="hover:text-green-600 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-green-600 transition-colors">Aoout Us</a></li>
                <li><a href="/faq" className="hover:text-green-600 transition-colors">Help & FAQ</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Terms of Use</a></li>
                <li><a href="/about" className="hover:text-green-600 transition-colors">Our Philosophy</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">Contact</h2>
              <div className="text-gray-600 space-y-5 text-sm leading-relaxed">
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-[10px] uppercase tracking-wider">Direct Hotline:</p>
                  <a href="tel:+919220620209" className="text-gray-600 hover:text-green-600 transition-colors font-bold">+91 9220 620 209</a>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-[10px] uppercase tracking-wider">Email Us:</p>
                  <a href="mailto:info@mission100hospital.com" className="hover:text-green-600 transition-colors break-all font-bold"> <span className="font-bold text-[12px]">info@mission100hospital.com</span></a>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1 text-[10px] uppercase tracking-wider">Address:</p>
                  <p className="text-gray-500 text-xs">Metroplex East Tower, Office No. <br /> 147, Laxmi Nagar, New Delhi 110092</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEDICAL DISCLAIMER: Critical for Healthcare Sites */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <AlertCircle className="text-amber-600 shrink-0" size={24} />
            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold text-slate-900 uppercase mb-1">Medical Disclaimer & Emergency Notice</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                *Mission 100™ Hospital provides preventive care and health optimization research. 
                Consultations and risk assessments on this platform are for wellness guidance 
                only and do not replace emergency medical care or clinical treatment. 
                In case of a medical emergency, please visit your nearest hospital immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" size={16} />
            <span className="text-sm text-gray-500">
              © 2026 <span className="font-semibold text-gray-900">Mission100™ Hospital</span>. All Rights Reserved.
            </span>
          </div>
          <p className="text-xs text-gray-400 italic">
            Revolutionizing the way we think about aging.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);