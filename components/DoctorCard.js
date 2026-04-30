"use client";

import React, { useRef, useState, memo } from "react";
import Image from "next/image";
// 1. IMPORT DOCTOR DATA FROM JSON
import practitioners from "@/data/doctor.json";
import {
  GraduationCap,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CalendarCheck,
  IndianRupee,
} from "lucide-react";

const specializations = [
  { id: "all", label: "All Doctors" },
  { id: "Cardiology", label: "Cardiology" },
  { id: "Dental Care", label: "Dental Care" },
  { id: "Neuroscience", label: "Neuroscience" },
  { id: "Orthopedics", label: "Orthopedics" },
  { id: "Pediatrics", label: "Pediatrics" },
  { id: "Internal Medicine", label: "Internal Medicine" },
  { id: "Psychiatry", label: "Psychiatry" },
];

// Reusable Specialty Button
const SpecialtyButton = ({ spec, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-4 
      ${isActive 
        ? "text-green-700 border-green-600 bg-green-50/50" 
        : "text-slate-500 border-transparent hover:text-green-600 hover:bg-slate-100/30"
      } rounded-t-xl`}
  >
    {spec.label}
  </button>
);

// Reusable Doctor Card
const DoctorCard = memo(({ doc }) => (
  <div className="min-w-70 md:min-w-[320px] snap-center bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="relative h-48 overflow-hidden rounded-t-2xl bg-slate-200">
      <Image
        src={doc.img}
        alt={doc.name}
        fill
        sizes="(max-width: 768px) 280px, 320px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-white/20 text-green-800 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
        <Stethoscope size={12} className="text-green-600" /> {doc.specialty}
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
        {doc.name}
      </h3>
      <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
        <GraduationCap size={14} className="text-green-500" />
        <span className="font-medium">{doc.education}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 border-t border-slate-50 pt-4 mb-6">
        <div className="flex flex-col gap-0.5">
          <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Fee</div>
          <div className="flex items-center gap-0.5 text-slate-900 font-bold text-base">
            <IndianRupee size={14} className="text-green-600" />
            {doc.fee}
          </div>
        </div>
        
        <div className="flex flex-col gap-0.5 text-right">
          <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Languages</div>
          <span className="text-slate-900 font-bold text-[11px] truncate">{doc.lang.join(", ")}</span>
        </div>

        <div className="col-span-2 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock3 size={14} className="text-amber-500" />
            <div className="flex flex-col">
              <span className="text-[8px] text-slate-400 uppercase font-bold">Next Slot</span>
              <span className="text-[11px] font-bold text-slate-700 leading-tight">{doc.nextSlot}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-green-600  text-white py-3.5 rounded-xl text-xs font-bold hover:bg-slate-900 transition-all active:scale-95 group-hover:bg-green-600 border border-blue-900 shadow-md">
        <CalendarCheck size={16} /> Book Appointment
      </button>
    </div>
  </div>
));

DoctorCard.displayName = "DoctorCard";

const DoctorSection = () => {
  const scrollRef = useRef(null);
  const [activeSpecialty, setActiveSpecialty] = useState("all");

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // The 'practitioners' variable now refers to your imported JSON data
  const filteredPractitioners =
    activeSpecialty === "all"
      ? practitioners
      : practitioners.filter((doc) => doc.specialty === activeSpecialty);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs md:text-[14px]">Mission100 Team</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission 100 <span className="text-green-600">Doctors</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-md">
              India's top specialists dedicated to your longevity and preventive care.
            </p>
          </div>
          
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

        <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 mb-10 pb-1 scroll-smooth">
          {specializations.map((spec) => (
            <SpecialtyButton 
              key={spec.id}
              spec={spec}
              isActive={activeSpecialty === spec.id}
              onClick={() => {
                setActiveSpecialty(spec.id);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
            />
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-10 px-1"
        >
          {filteredPractitioners.length > 0 ? (
            filteredPractitioners.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} />
            ))
          ) : (
            <div className="w-full text-center py-24 text-slate-400 bg-white rounded-3xl border-2 border-dashed border-slate-100">
              <Stethoscope size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-base font-semibold text-slate-500">Currently no doctors available for this specialty.</p>
              <p className="text-sm">Please check back soon or try another category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;