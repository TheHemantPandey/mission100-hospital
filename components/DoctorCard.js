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
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Cardiology", education: "MD - Harvard", fee: "1200", lang: ["Eng", "Hin"], nextSlot: "Today 4:00 PM", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Dr. Ken Adams", specialty: "Dental Care", education: "DDS - Columbia", fee: "800", lang: ["Eng"], nextSlot: "Tomorrow 10:00 AM", img: "https://img.freepik.com/free-photo/image-professional-woman-doctor-physician-with-clipboard-writing-listening-patient-hospital-cl_1258-87691.jpg" },
  { id: 3, name: "Dr. James Wilson", specialty: "Orthopedics", education: "MD - Johns Hopkins", fee: "1500", lang: ["Eng", "Hin"], nextSlot: "Today 5:30 PM", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Dr. Elena Rodriguez", specialty: "Internal Medicine", education: "MD - Yale", fee: "1000", lang: ["Eng", "Spa"], nextSlot: "Tomorrow 2:15 PM", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Dr. Lisa Chen", specialty: "Psychiatry", education: "MD - Stanford", fee: "1800", lang: ["Eng", "Man"], nextSlot: "Today 6:00 PM", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Dr. Priya Sharma", specialty: "Cardiology", education: "MD - AIIMS Delhi", fee: "1100", lang: ["Eng", "Hin"], nextSlot: "Tomorrow 11:30 AM", img: "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=" },
  { id: 7, name: "Dr. Anita Desai", specialty: "Pediatrics", education: "MD - Madras Medical", fee: "900", lang: ["Eng", "Tam"], nextSlot: "Today 3:45 PM", img: "https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg" },
  { id: 8, name: "Dr. David Smith", specialty: "Dental Care", education: "DDS - Boston", fee: "850", lang: ["Eng"], nextSlot: "Today 4:30 PM", img: "https://media.istockphoto.com/id/2157055065/photo/female-doctor-portrait-and-smile-with-tablet-in-hospital-or-workplace-with-lens-flare.jpg?s=612x612&w=0&k=20&c=VEU22yaVyv7Dsr9CiPRFgK_a7yrVzenvG8-C4p2_L44=" },
  { id: 9, name: "Dr. Sofia Khan", specialty: "Neuroscience", education: "MD - King George", fee: "2000", lang: ["Eng", "Urdu"], nextSlot: "Next Week Mon", img: "https://www.shutterstock.com/image-photo/doctor-senior-man-portrait-health-600nw-2340757027.jpg" },
  { id: 10, name: "Dr. Kevin Park", specialty: "Internal Medicine", education: "MD - Seoul National", fee: "1000", lang: ["Eng", "Kor"], nextSlot: "Tomorrow 9:00 AM", img: "https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" },
];

const DoctorSection = () => {
  const scrollRef = useRef(null);
  const [activeSpecialty, setActiveSpecialty] = useState("all");

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
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
    <section className="py-20 px-4 md:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-xs">Our Team</span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission 100 <span className="text-green-600">Doctors</span>
            </h2>
            <p className="text-slate-500 max-w-lg">
              Our best practitioners are here to guide your wellness journey.</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Category Bar */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-slate-200 mb-12 pb-2 scroll-smooth">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => {
                setActiveSpecialty(spec.id);
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }}
              className={`px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-4 
                ${activeSpecialty === spec.id 
                  ? "text-green-700 border-green-600 bg-green-50/50" 
                  : "text-slate-500 border-transparent hover:text-green-600 hover:bg-slate-100/50"
                } rounded-t-lg`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctor Slider */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-10"
        >
          {filteredPractitioners.length > 0 ? (
            filteredPractitioners.map((doc) => (
              <div
                key={doc.id}
                className="min-w-[320px] md:min-w-87.5 snap-start bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Doctor Image Header */}
                <div className="relative h-60 overflow-hidden rounded-t-3xl">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md border border-white/20 text-green-800 text-[11px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Stethoscope size={14} className="text-green-600" /> {doc.specialty}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                    <GraduationCap size={16} className="text-green-500" />
                    <span className="font-medium">{doc.education}</span>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-6 mb-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 uppercase font-bold tracking-wider">
                         Consultation
                      </div>
                      <div className="flex items-center gap-1 text-slate-900 font-bold text-lg">
                        <IndianRupee size={16} className="text-green-600" />
                        ₹{doc.fee}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 text-right">
                      <div className="flex items-center justify-end gap-1.5 text-xs text-slate-400 uppercase font-bold tracking-wider">
                        <MessageSquare size={12} /> Languages
                      </div>
                      <span className="text-slate-900 font-bold text-sm">
                        {doc.lang.join(", ")}
                      </span>
                    </div>

                    <div className="col-span-2 mt-2 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock3 size={18} className="text-amber-500" />
                        <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 uppercase font-bold">Next Slot</span>
                          <span className="text-xs font-bold text-slate-700">{doc.nextSlot}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl text-sm font-bold hover:bg-green-600 shadow-xl shadow-slate-200 hover:shadow-green-200 transition-all active:scale-95 group-hover:bg-green-600">
                    <CalendarCheck size={18} /> Book Appointment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-24 text-slate-400 bg-white rounded-3xl border-2 border-dashed border-slate-100">
              <Stethoscope size={48} className="mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No specialists found in this category currently.</p>
            </div>
          )}
        </div>
      </div>

      {/* Tailwind Hide Scrollbar Utility */}
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