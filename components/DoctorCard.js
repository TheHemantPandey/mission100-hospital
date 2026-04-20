"use client";

import React, { useRef, useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
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

const practitioners = [
  { id: 1, name: "Dr. Ananya Iyer", specialty: "Cardiology", education: "MD - AIIMS Delhi", fee: "1200", lang: ["Eng", "Hin"], nextSlot: "Today 4:00 PM", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Dr. Vikram Malhotra", specialty: "Dental Care", education: "BDS - Maulana Azad", fee: "800", lang: ["Eng", "Hin"], nextSlot: "Tomorrow 10:00 AM", img: "https://img.freepik.com/free-photo/image-professional-woman-doctor-physician-with-clipboard-writing-listening-patient-hospital-cl_1258-87691.jpg" },
  { id: 3, name: "Dr. Rajesh Deshmukh", specialty: "Orthopedics", education: "MS - Grant Medical", fee: "1500", lang: ["Eng", "Mar", "Hin"], nextSlot: "Today 5:30 PM", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Dr. Sneha Kulkarni", specialty: "Internal Medicine", education: "MD - AFMC Pune", fee: "1000", lang: ["Eng", "Hin", "Kan"], nextSlot: "Tomorrow 2:15 PM", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Dr. Arjun Reddy", specialty: "Psychiatry", education: "MD - NIMHANS", fee: "1800", lang: ["Eng", "Tel", "Hin"], nextSlot: "Today 6:00 PM", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Dr. Priya Sharma", specialty: "Cardiology", education: "MD - BHU Varanasi", fee: "1100", lang: ["Eng", "Hin"], nextSlot: "Tomorrow 11:30 AM", img: "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=" },
  { id: 7, name: "Dr. Amit Verma", specialty: "Pediatrics", education: "MD - Madras Medical", fee: "900", lang: ["Eng", "Tam", "Hin"], nextSlot: "Today 3:45 PM", img: "https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg" },
  { id: 8, name: "Dr. Pooja Singhania", specialty: "Dental Care", education: "BDS - KGMU Lucknow", fee: "850", lang: ["Eng", "Hin"], nextSlot: "Today 4:30 PM", img: "https://media.istockphoto.com/id/2157055065/photo/female-doctor-portrait-and-smile-with-tablet-in-hospital-or-workplace-with-lens-flare.jpg?s=612x612&w=0&k=20&c=VEU22yaVyv7Dsr9CiPRFgK_a7yrVzenvG8-C4p2_L44=" },
  { id: 9, name: "Dr. Sameer Khan", specialty: "Neuroscience", education: "MD - King George", fee: "2000", lang: ["Eng", "Urdu", "Hin"], nextSlot: "Next Week Mon", img: "https://www.shutterstock.com/image-photo/doctor-senior-man-portrait-health-600nw-2340757027.jpg" },
  { id: 10, name: "Dr. Kavita Rao", specialty: "Internal Medicine", education: "MD - Osmania University", fee: "1000", lang: ["Eng", "Hin", "Tel"], nextSlot: "Tomorrow 9:00 AM", img: "https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" },
];

const DoctorSection = () => {
  const scrollRef = useRef(null);
  const [activeSpecialty, setActiveSpecialty] = useState("all");

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredPractitioners =
    activeSpecialty === "all"
      ? practitioners
      : practitioners.filter((doc) => doc.specialty === activeSpecialty);

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Tightened spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-green-600 font-bold uppercase tracking-widest text-[15px]"> MIssion100 Team</span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission 100 <span className="text-green-600">Doctors</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              India's top specialists dedicated to your longevity.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Bar - INCREASED SIZE AS REQUESTED */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 mb-8 pb-1 scroll-smooth">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => {
                setActiveSpecialty(spec.id);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
              // px-8 py-4 text-lg font-bold makes the categories stand out more
              className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-4 
                ${activeSpecialty === spec.id 
                  ? "text-green-700 border-green-600 bg-green-50/50" 
                  : "text-slate-500 border-transparent hover:text-green-600 hover:bg-slate-100/30"
                } rounded-t-xl`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctor Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-8"
        >
          {filteredPractitioners.length > 0 ? (
            filteredPractitioners.map((doc) => (
              <div
                key={doc.id}
                className="min-w-70 md:min-w-75 snap-start bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-white/20 text-green-800 text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                    <Stethoscope size={12} className="text-green-600" /> {doc.specialty}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5 group-hover:text-green-700 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-4">
                    <GraduationCap size={14} className="text-green-500" />
                    <span className="font-medium">{doc.education}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-slate-50 pt-4 mb-6">
                    <div className="flex flex-col gap-0.5">
                      <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">
                         Fee
                      </div>
                      <div className="flex items-center gap-0.5 text-slate-900 font-bold text-base">
                        <IndianRupee size={14} className="text-green-600" />
                        {doc.fee}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-0.5 text-right">
                      <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">
                         Languages
                      </div>
                      <span className="text-slate-900 font-bold text-[11px] truncate">
                        {doc.lang.join(", ")}
                      </span>
                    </div>

                    <div className="col-span-2 bg-slate-50/80 p-2 rounded-xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock3 size={14} className="text-amber-500" />
                        <div className="flex flex-col">
                          <span className="text-[8px] text-slate-400 uppercase font-bold">Next Slot</span>
                          <span className="text-[10px] font-bold text-slate-700 leading-tight">{doc.nextSlot}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-green-600 transition-all active:scale-95 group-hover:bg-green-600">
                    <CalendarCheck size={16} /> Book Appointment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-20 text-slate-400 bg-white rounded-2xl border-2 border-dashed border-slate-100">
              <Stethoscope size={40} className="mx-auto mb-3 opacity-20" />
              <p className="text-sm font-medium">No specialists found currently.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default DoctorSection;