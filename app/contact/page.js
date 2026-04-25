import React from "react";
import Image from "next/image";
import Link from "next/link";
import QueryForm from "@/components/QueryForm";
// Only import the icons that are working
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              CONNECT <br />{" "}
              <span className="text-green-600 underline decoration-gray-200">
                WITH US
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Empowering your journey toward a 100-year life through preventive
              healthcare and modern vitality science.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              {/* INSTAGRAM - MANUAL SVG FOR STABILITY */}
              <Link
                href="https://www.instagram.com/youngindiashow/"
                target="_blank"
                className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 active:scale-95"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>

              {/* LINKEDIN - MANUAL SVG FOR STABILITY */}
              <Link
                href="https://www.linkedin.com/company/young-india-show/"
                target="_blank"
                className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 active:scale-95"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>

              {/* YOUTUBE - MANUAL SVG FOR STABILITY */}
              <Link
                href="https://www.youtube.com/@youngindiashow"
                target="_blank"
                className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-[#FF0000] hover:text-white transition-all duration-300 active:scale-95"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </Link>

              <Link
                href="/faq"
                className="flex items-center gap-2 px-6 py-4 bg-green-50 text-green-700 rounded-2xl font-bold hover:bg-green-100 transition-all active:scale-95"
              >
                View FAQs <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative h-75 md:h-112.5 w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/hospital-building.jpg"
              alt="Mission 100 Hospital"
              fill
              className="object-cover"
              priority 
            />
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-6">Contact Details</h3>
              <div className="space-y-8">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 tracking-tighter">Mail Us</span>
                  <a href="mailto:info@mission100hospital.in" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                    info@mission100hospital.in
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] font-bold uppercase mb-1 tracking-tighter">Call Us</span>
                  <a href="tel:+919220620209" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                    +91 9220 620 209
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-6">Location</h3>
              <p className="text-xl font-bold text-gray-900 leading-snug">
                Metroplex East Tower, Office No. 147 <br />
                Laxmi Nagar, New Delhi 110092
              </p>
              <div className="mt-8 w-full h-56 bg-gray-100 rounded-4xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.947271960236!2d77.27962497610113!3d28.6313337841315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad67e10813%3A0x6333633857e101!2sMetroplex%20East!5e0!3m2!1sen!2sin!4v1713432000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <QueryForm />
          </div>
        </div>
      </section>

      {/* EMERGENCY DISCLAIMER */}
      <section className="bg-gray-50 py-12 px-6 border-t border-gray-100 text-center">
        <p className="text-[10px] md:text-xs text-gray-400 uppercase font-medium tracking-[0.2em] max-w-3xl mx-auto">
          *Mission 100 Hospital provides preventative care and health optimization. Consultations and risk assessments do not replace emergency medical care.
        </p>
      </section>
    </main>
  );
}