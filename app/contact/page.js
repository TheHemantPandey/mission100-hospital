import React from "react";
import Image from "next/image";
import Link from "next/link";
import QueryForm from "@/components/QueryForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              CONNECT <br />{" "}
              <span className="text-green-600 underline decoration-gray-200">
                WITH US
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Empowering your journey toward a 100-year life through preventive
              healthcare and modern vitality science. [cite: 256]
            </p>
            <div className="flex gap-4">
              {/* SOCIAL MEDIA LINKS  */}
              <Link
                href="https://www.instagram.com/youngindiashow/"
                className="p-3 bg-white shadow-sm border border-gray-100 rounded-xl hover:text-green-600 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/young-india-show/"
                className="p-3 bg-white shadow-sm border border-gray-100 rounded-xl hover:text-green-600 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="/faq"
                className="p-3 bg-green-50 text-green-700 rounded-xl font-bold hover:bg-green-100 transition-colors"
              >
                View FAQs{" "}
              </Link>
            </div>
          </div>

          {/* HOSPITAL BUILDING IMAGE */}
          <div className="relative h-100 md:h-125 w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/hospital-building.jpg"
              alt="Mission 100 Hospital - Metroplex East Tower"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Column: Details (2/5 width) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">
                Contact Details
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold uppercase mb-1">
                    Mail Us
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    info@mission100.in{" "}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-bold uppercase mb-1">
                    Call Us
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    +91 9220 620 209{" "}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">
                Location
              </h3>
              <p className="text-xl font-bold text-gray-900 leading-snug">
                Metroplex East Tower, Office No. 147 [cite: 272] <br />
                Laxmi Nagar, New Delhi 110092 [cite: 273]
              </p>
              {/* GOOGLE MAP PREVIEW */}
              <div className="mt-6 w-full h-48 bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d875.4157171790526!2d77.2835598!3d28.6398646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7b7591ec51%3A0xeb930f8b8e60613a!2sMission100%20Hospital!5e0!3m2!1sen!2sin!4v1776770553971!5m2!1sen!2sin"
                  width="800"
                  height="600"
                  style={{ border: 0 }}
                  className="w-full h-full rounded-3xl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">
                Office Hours
              </h3>
              <p className="text-lg text-gray-600">
                Monday — Saturday <br />
                <span className="text-gray-900 font-bold">
                  09:00 AM – 07:00 PM
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Form (3/5 width) */}
          <div className="lg:col-span-3">
            <QueryForm />
          </div>
        </div>
      </section>

      {/* EMERGENCY DISCLAIMER  */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-loose">
            Mission 100 provides preventative care and health optimization.{" "}
            <br />
            Consultations and risk assessments do not replace emergency medical
            care. [cite: 88]
          </p>
        </div>
      </section>
    </main>
  );
}
