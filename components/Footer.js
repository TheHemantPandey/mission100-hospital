import React, { memo } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Handshake,
  HeartPulse,
  Dumbbell,
  Brain,
  Stethoscope,
  Activity,
  ChevronRight,
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";

// Instagram Icon
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

// Linkedin Icon
const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-slate-900 mt-12 font-sans selection:bg-emerald-500/30">
      <div className="mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8">
        {/* NEWSLETTER BANNER */}
        <div className="border-b border-slate-900 pb-8 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-lg">
            <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em]">
              Subscribe to our Newsletter
            </h4>
            <p className="text-xs text-slate-400">
              Stay updated with health tips, wellness advice, and exclusive updates.
            </p>
          </div>
          <div className="w-full md:w-auto md:min-w-[320px]">
            <NewsletterForm minimal={true} />
          </div>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-10">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#020617] rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 rotate-3 overflow-hidden">
                <a
                  href="/"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Image
                    src="/main-logo1.png"
                    alt="Mission 100 Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-black text-green-800 tracking-tighter uppercase italic">
                  Mission{" "}
                  <span className="text-emerald-500 font-light">100</span>
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              Empowering your journey toward a 100-year life through preventive
              healthcare, Ayurveda, advanced diagnostics, wellness coaching,
              fitness science, and holistic healing.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/mission100hospital/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/young-india-show/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61589020733638"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS SECTION */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* QUICK LINKS */}
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Quick Links
              </h4>

              <ul className="space-y-2 text-sm">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Find a Test", "/find-a-test"],
                  ["Contact", "/contact"],
                  ["Blogs", "/blog"],
                  ["FAQ", "/faq"],
                  ["Careers", "/careers"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={14} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Services
              </h4>

              <ul className="space-y-2 text-sm">
                {[
                  [
                    "Heart Attack Prevention",
                    "/services/heart-attack-prevention",
                  ],
                  ["Mental Health", "/services/mental-health-stress"],
                  ["Anti Aging Science", "/services/anti-aging-science"],
                  ["Body & Bone Strength", "/services/bone-strength"],
                  ["Yoga & Ayurveda", "/services/yoga-ayurveda"],
                  ["Full Body Checkup", "/services/full-body-checkup"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                    >
                      <ChevronRight size={14} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* JOIN US */}
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Join Us As
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/join-us/medical-expert"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Stethoscope size={15} />
                    General Physician
                  </a>
                </li>

                <li>
                  <a
                    href="/join-us/medical-expert"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <HeartPulse size={15} />
                    Cardiologist
                  </a>
                </li>

                <li>
                  <a
                    href="/join-us/medical-expert"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Stethoscope size={15} />
                    Medical Expert
                  </a>
                </li>

                <li>
                  <a
                    href="/join-us/fitness-expert"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Dumbbell size={15} />
                    Fitness Expert
                  </a>
                </li>

                <li>
                  <a
                    href="/join-us/yoga-wellness-coach"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <HeartPulse size={15} />
                    Yoga & Wellness Coach
                  </a>
                </li>

                <li>
                  <a
                    href="/join-us/nutrition-expert"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Brain size={15} />
                    Nutrition Expert
                  </a>
                </li>
              </ul>
            </div>

            {/* PARTNERSHIP */}
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                Business
              </h4>

              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/take-franchise"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Briefcase size={15} />
                    Take Franchise
                  </a>
                </li>

                <li>
                  <a
                    href="/become-partner"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Handshake size={15} />
                    Become Partner
                  </a>
                </li>

                <li>
                  <a
                    href="/buy-corporate-membership"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <Briefcase size={15} />
                    Corporate Wellness
                  </a>
                </li>

                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/app-privacy-policy"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    App Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/terms-and-conditions"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="/refund-policy"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/cookie-policy"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    Cookie Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/disclaimer"
                    className="hover:text-emerald-500 transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} />
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CONTACT BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-900 py-6">
          <div className="bg-slate-900/30 rounded-xl p-3.5 border border-slate-850">
            <div className="flex items-start gap-3">
              <Phone className="text-emerald-500 mt-1" size={16} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                  Call Us
                </p>
                <a
                  href="tel:+919220620209"
                  className="text-white font-semibold text-sm hover:text-emerald-500 transition-colors"
                >
                  +91 9220-620-209
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-3.5 border border-slate-850">
            <div className="flex items-start gap-3">
              <Mail className="text-emerald-500 mt-1" size={16} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@mission100hospital.com"
                  className="text-white font-semibold text-sm break-all hover:text-emerald-500 transition-colors"
                >
                  info@mission100hospital.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-xl p-3.5 border border-slate-850">
            <div className="flex items-start gap-3">
              <MapPin className="text-emerald-500 mt-1" size={16} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                  Address
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Metroplex East Tower, Office No. 147, Laxmi Nagar, Delhi -
                  110092
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-900">
          <div className="flex items-center gap-3 bg-slate-900/30 px-5 py-2.5 rounded-full border border-slate-800">
            <ShieldCheck className="text-emerald-500" size={18} />

            <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">
              © 2026 <span className="text-white">Mission100™ Hospital</span>.
              All Rights Reserved.
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
