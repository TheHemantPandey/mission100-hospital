"use client";

import React, { useRef, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import practitioners from "@/data/doctor.json";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CalendarCheck,
  Video,
  MapPin,
  Globe2,
  Sparkles,
  UserCheck
} from "lucide-react";

// Updated categories representing the wellness ecosystem
const categories = [
  { id: "all", label: "✨ All Experts" },
  { id: "General Physician", label: "🩺 General Physician" },
  { id: "Gym Trainer", label: "❤️ Gym Trainer" },
  { id: "Dietitian", label: "🥗 Dietitian" },
  { id: "Nutritionist", label: "🍎 Nutritionist" },
  { id: "Fitness Coach", label: "💪 Fitness Coach" },
  { id: "Yoga Instructor", label: "🧘 Yoga Instructor" },
];

// Reusable Specialty/Category Button
const CategoryButton = ({ cat, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-3 text-sm font-bold whitespace-nowrap transition-all border-b-4 rounded-t-xl
      ${isActive 
        ? "text-green-700 border-green-600 bg-green-50/50" 
        : "text-slate-500 border-transparent hover:text-green-600 hover:bg-slate-100/30"
      }`}
  >
    {cat.label}
  </button>
);

// Reusable Expert Card
const ExpertCard = memo(({ doc }) => (
  <div className="min-w-[290px] sm:min-w-[320px] snap-center bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
    <div>
      {/* Upper Image Section with Dynamic Badge */}
      <div className="relative h-52 overflow-hidden rounded-t-2xl bg-slate-100">
        <Image
          src={doc.pic}
          alt={doc.name}
          fill
          sizes="(max-width: 768px) 290px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 text-green-800 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
          <Sparkles size={11} className="text-green-600" /> {doc.specialty}
        </div>
      </div>

      {/* Card Content Elements */}
      <div className="p-5 pb-0">
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
          {doc.name}
        </h3>
        
        {/* Qualification */}
        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-3">
          <GraduationCap size={14} className="text-green-600 flex-shrink-0" />
          <span className="font-medium truncate">{doc.qualification}</span>
        </div>

        {/* Short Expertise Summary Statement */}
        <p className="text-slate-600 text-xs font-medium leading-relaxed italic bg-slate-50 border-l-2 border-green-500 px-2.5 py-1.5 rounded-r-lg mb-4">
          "{doc.expertise}"
        </p>

        {/* Technical Data Overview Grid */}
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 mb-4">
          {/* Consultation Type */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Consultation</span>
            <div className="flex items-center gap-1 text-slate-800 font-bold text-xs">
              {doc.consultationType.includes("Online") ? (
                <Video size={13} className="text-green-600" />
              ) : (
                <MapPin size={13} className="text-green-600" />
              )}
              <span className="truncate">{doc.consultationType}</span>
            </div>
          </div>
          
          {/* Languages */}
          <div className="flex flex-col gap-0.5 text-right">
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Languages</span>
            <div className="flex items-center gap-1 justify-end text-slate-800 font-bold text-xs">
              <Globe2 size={13} className="text-slate-400" />
              <span className="truncate max-w-[100px]">{doc.languages.join(", ")}</span>
            </div>
          </div>

          {/* Availability Slot Banner */}
          <div className="col-span-2 bg-green-50/40 p-2.5 rounded-xl border border-green-100/50 flex items-center justify-between mt-1">
            <div className="flex items-center gap-2">
              <Clock3 size={14} className="text-amber-500" />
              <div className="flex flex-col">
                <span className="text-[8px] text-slate-400 uppercase font-bold">Next Availability</span>
                <span className="text-[11px] font-bold text-slate-700 leading-tight">{doc.nextSlot}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dual Prominent Call to Actions */}
    <div className="p-5 pt-0 space-y-2 mt-2">
      <Link 
        href="/book-appointment"
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-green-700 transition-all active:scale-[0.98] shadow-sm"
      >
        <CalendarCheck size={15} /> Book Consultation
      </Link>
      
      <Link 
        href={`/experts/${doc.slug}`}
        className="w-full flex items-center justify-center gap-2 bg-transparent border border-slate-200 text-slate-700 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]"
      >
        Know More
      </Link>
    </div>
  </div>
));

ExpertCard.displayName = "ExpertCard";

const DoctorSection = () => {
  const scrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredPractitioners =
    activeCategory === "all"
      ? practitioners
      : practitioners.filter((doc) => doc.specialty === activeCategory);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Dynamic Typography Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs md:text-[14px]">
              Ecosystem Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet Our <span className="text-green-600">Experts</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
              Doctors, nutritionists, fitness coaches and wellness experts dedicated to helping you live healthier, longer and better.
            </p>
          </div>
          
          {/* Arrow Scrollers */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Categories Tab Row
        <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 mb-10 pb-1 scroll-smooth">
          {categories.map((cat) => (
            <CategoryButton 
              key={cat.id}
              cat={cat}
              isActive={activeCategory === cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
            />
          ))}
        </div> */}

        {/* Dynamic Card Horizontal Scrolling Deck */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-10 px-1"
        >
          {filteredPractitioners.length > 0 ? (
            filteredPractitioners.map((doc) => (
              <ExpertCard key={doc.id} doc={doc} />
            ))
          ) : (
            <div className="w-full text-center py-24 text-slate-400 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm">
              <UserCheck size={44} className="mx-auto mb-3 opacity-20 text-slate-500" />
              <p className="text-base font-bold text-slate-600">No experts found in this category right now.</p>
              <p className="text-xs text-slate-400 mt-0.5">Please check back soon or switch categories.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;