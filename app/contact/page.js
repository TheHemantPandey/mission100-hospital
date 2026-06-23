import React from "react";
import Image from "next/image";
import Link from "next/link";
import QueryForm from "@/components/QueryForm";

import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mission 100 Hospital in Laxmi Nagar, New Delhi. Call us at +91 9220 620 209 or visit us for preventive healthcare consultations.",
  keywords: [
    "Contact Mission 100",
    "Hospital Location New Delhi",
    "Book Appointment",
    "Preventive Health Query",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-cyan-50/40 to-green-50/30">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-20 py-14 sm:py-20 lg:py-24">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-white shadow-sm text-green-700 text-sm font-semibold">
              <HeartPulse className="w-4 h-4" />
              Mission 100 Healthcare
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05]">
              CONNECT
              <br />
              <span className="text-green-600">WITH US</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Empowering your journey toward a healthier and longer life through
              preventive healthcare, wellness and modern vitality science.
            </p>

            {/* QUICK INFO */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <ShieldCheck className="w-8 h-8 text-green-600" />

                <h3 className="mt-3 font-bold text-gray-900">Trusted Care</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Verified healthcare professionals
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <Clock3 className="w-8 h-8 text-cyan-600" />

                <h3 className="mt-3 font-bold text-gray-900">Fast Support</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Quick response from our team
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                <HeartPulse className="w-8 h-8 text-green-600" />

                <h3 className="mt-3 font-bold text-gray-900">Wellness Focus</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Holistic healthcare approach
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              {/* INSTAGRAM */}
              <Link
                href="https://www.instagram.com/youngindiashow/"
                target="_blank"
                className="group p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>

              {/* LINKEDIN */}
              <Link
                href="https://www.linkedin.com/company/young-india-show/"
                target="_blank"
                className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>

              {/* YOUTUBE */}
              <Link
                href="https://www.youtube.com/@youngindiashow"
                target="_blank"
                className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl text-gray-600 hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </Link>

              {/* FAQ BUTTON */}
              <Link
                href="/faq"
                className="flex items-center gap-2 px-6 py-4 bg-green-50 text-green-700 rounded-2xl font-bold hover:bg-green-100 transition-all duration-300 active:scale-95"
              >
                View FAQs
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl"></div>

            <div className="relative h-[320px] sm:h-[450px] lg:h-[620px] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/50 shadow-2xl">
              <Image
                src="/hospital-building.jpg"
                alt="Mission 100 Hospital"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Mission100 Hospital
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      Metroplex East Tower, Office No. 147, Laxmi Nagar, New
                      Delhi 110092
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="px-4 sm:px-6 lg:px-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* CONTACT DETAILS */}
          <div className="lg:col-span-2 space-y-8">
            {/* CONTACT CARD */}
            <div className="rounded-[2rem] bg-white border border-gray-100 shadow-xl p-6 sm:p-8">
              <h3 className="text-sm font-black text-green-600 uppercase tracking-[0.25em] mb-8">
                Contact Details
              </h3>

              <div className="space-y-8">
                {/* EMAIL */}
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-bold">
                      Email Us
                    </p>

                    <a
                      href="mailto:info@mission100hospital.com"
                      className="mt-1 inline-block text-base sm:text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors break-all"
                    >
                      info@mission100hospital.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-bold">
                      Call Us
                    </p>

                    <a
                      href="tel:+919220620209"
                      className="mt-1 inline-block text-base sm:text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
                    >
                      +91 9220 620 209
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                      Our Location
                    </p>

                    <p className="mt-2 text-lg font-bold text-gray-900 leading-relaxed">
                      Metroplex East Tower, Office No. 147
                      <br />
                      Laxmi Nagar, New Delhi 110092
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">
                  Find Us on Map
                </h3>
              </div>

              <div className="h-[300px] sm:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.92131924619!2d77.2798!3d28.632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcb58667ba1b%3A0xc345f096230f81d!2sLaxmi%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <QueryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
