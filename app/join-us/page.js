"use client";

import Link from "next/link";
import {
  Stethoscope,
  Dumbbell,
  HeartPulse,
  Salad,
  Brain,
  ArrowRight,
  Globe,
  Users,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const categories = [
  {
    title: "Medical Experts",
    icon: <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    description:
      "Doctors, specialists, physiotherapists and healthcare professionals.",
    specializations: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Orthopedic",
    ],
    href: "/join-us/medical-expert",
    gradient: "from-green-100 via-white to-cyan-100",
  },
  {
    title: "Fitness Experts",
    icon: <Dumbbell className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />,
    description:
      "Personal trainers, wellness coaches and fitness professionals.",
    specializations: [
      "Personal Trainer",
      "Strength Coach",
      "Weight Loss Coach",
      "Online Fitness Coach",
    ],
    href: "/join-us/fitness-expert",
    gradient: "from-cyan-100 via-white to-green-100",
  },
  {
    title: "Yoga & Wellness Coach",
    icon: <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
    description:
      "Yoga instructors, meditation coaches and mindfulness experts.",
    specializations: [
      "Yoga Instructor",
      "Meditation Coach",
      "Breathwork Expert",
      "Mindfulness Coach",
    ],
    href: "/join-us/yoga-wellness-coach",
    gradient: "from-green-100 via-white to-cyan-100",
  },
  {
    title: "Nutrition Experts",
    icon: <Salad className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />,
    description:
      "Dietitians and nutrition specialists helping people live healthier.",
    specializations: [
      "Dietitian",
      "Sports Nutritionist",
      "Clinical Nutritionist",
      "Weight Management Expert",
    ],
    href: "/join-us/nutrition-expert",
    gradient: "from-cyan-100 via-white to-green-100",
  },
  
];

const whyJoin = [
  {
    title: "Build Your Online Presence",
    icon: Globe,
  },
  {
    title: "Connect with More People",
    icon: Users,
  },
  {
    title: "Get Verified Expert Badge",
    icon: BadgeCheck,
  },
  {
    title: "Grow With Mission100",
    icon: TrendingUp,
  },
];

export default function JoinUsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-b from-white via-cyan-50 to-green-50">

      {/* HERO SECTION */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20">

        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-white border border-green-200 text-green-700 text-xs sm:text-sm font-medium shadow-sm">
            Join Mission100 Community
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">

            Become a{" "}

            <span className="text-green-600">
              Health Partner
            </span>

            <br className="hidden sm:block" />

            with Mission100
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Help people transform their lives through healthcare,
            fitness, wellness and nutrition. Join our growing
            community of verified experts.
          </p>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="px-4 sm:px-6 lg:px-20 pb-16 sm:pb-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[28px] sm:rounded-4xl border border-white/60 bg-linear-to-br ${item.gradient} p-5 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >

              {/* GLOW */}
              <div className="absolute -top-10 -right-10 w-28 sm:w-36 h-28 sm:h-36 bg-white/40 rounded-full blur-2xl"></div>

              <div className="relative z-10">

                {/* ICON */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h2 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* SPECIALIZATIONS */}
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                  {item.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/80 text-gray-700 text-xs sm:text-sm font-medium border border-gray-100"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  href={item.href}
                  className="mt-7 sm:mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-green-500 to-cyan-500 px-5 py-3 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Apply Now

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 pb-20 sm:pb-24">

        <div className="max-w-6xl mx-auto rounded-[30px] sm:rounded-[40px] bg-white border border-gray-100 shadow-xl p-6 sm:p-10 md:p-16">

          {/* HEADING */}
          <div className="text-center">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why Join Mission100?
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are building a trusted healthcare and wellness
              platform focused on helping people live healthier
              and happier lives.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-14">

            {whyJoin.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-linear-to-b from-white to-cyan-50 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-r from-green-500 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-lg">

                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}