"use client";

import React, { useRef, useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageSquare,
  Clock3,
  CalendarCheck,
  IndianRupee,
} from "lucide-react";

// 8 Professional Categories
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

// Curated professional medical portrait URLs
const doctorImages = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
  "https://img.freepik.com/free-photo/image-professional-woman-doctor-physician-with-clipboard-writing-listening-patient-hospital-cl_1258-87691.jpg",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
  "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=",
  "https://t4.ftcdn.net/jpg/02/69/98/99/360_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg",
  "https://media.istockphoto.com/id/2157055065/photo/female-doctor-portrait-and-smile-with-tablet-in-hospital-or-workplace-with-lens-flare.jpg?s=612x612&w=0&k=20&c=VEU22yaVyv7Dsr9CiPRFgK_a7yrVzenvG8-C4p2_L44=",
  "https://www.shutterstock.com/image-photo/doctor-senior-man-portrait-health-600nw-2340757027.jpg",
  "https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg",
];

const practitioners = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    education: "MD - Harvard",
    fee: "1200",
    lang: ["Eng", "Hin"],
    nextSlot: "Today 4:00 PM",
    img: doctorImages[0],
  },
  {
    id: 2,
    name: "Dr. Ken Adams",
    specialty: "Dental Care",
    education: "DDS - Columbia",
    fee: "800",
    lang: ["Eng"],
    nextSlot: "Tomorrow 10:00 AM",
    img: doctorImages[1],
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    education: "MD - Johns Hopkins",
    fee: "1500",
    lang: ["Eng", "Hin"],
    nextSlot: "Today 5:30 PM",
    img: doctorImages[2],
  },
  {
    id: 4,
    name: "Dr. Elena Rodriguez",
    specialty: "Internal Medicine",
    education: "MD - Yale",
    fee: "1000",
    lang: ["Eng", "Spa"],
    nextSlot: "Tomorrow 2:15 PM",
    img: doctorImages[3],
  },
  {
    id: 5,
    name: "Dr. Lisa Chen",
    specialty: "Psychiatry",
    education: "MD - Stanford",
    fee: "1800",
    lang: ["Eng", "Man"],
    nextSlot: "Today 6:00 PM",
    img: doctorImages[4],
  },
  {
    id: 6,
    name: "Dr. Priya Sharma",
    specialty: "Cardiology",
    education: "MD - AIIMS Delhi",
    fee: "1100",
    lang: ["Eng", "Hin"],
    nextSlot: "Tomorrow 11:30 AM",
    img: doctorImages[5],
  },
  {
    id: 7,
    name: "Dr. Anita Desai",
    specialty: "Pediatrics",
    education: "MD - Madras Medical",
    fee: "900",
    lang: ["Eng", "Tam"],
    nextSlot: "Today 3:45 PM",
    img: doctorImages[6],
  },
  {
    id: 8,
    name: "Dr. David Smith",
    specialty: "Dental Care",
    education: "DDS - Boston",
    fee: "850",
    lang: ["Eng"],
    nextSlot: "Today 4:30 PM",
    img: doctorImages[7],
  },
  {
    id: 9,
    name: "Dr. Sofia Khan",
    specialty: "Neuroscience",
    education: "MD - King George",
    fee: "2000",
    lang: ["Eng", "Urdu"],
    nextSlot: "Next Week Mon",
    img: doctorImages[8],
  },
  {
    id: 10,
    name: "Dr. Kevin Park",
    specialty: "Internal Medicine",
    education: "MD - Seoul National",
    fee: "1000",
    lang: ["Eng", "Kor"],
    nextSlot: "Tomorrow 9:00 AM",
    img: doctorImages[9],
  },
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
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Mission 100 Experts
            </h2>
            <p className="text-slate-500">
              Find the right specialist for your wellness journey.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Bar */}
        <div className="flex gap-1 overflow-x-auto no-scrollbar border-b border-slate-200 mb-10 pb-1 scroll-smooth">
          {specializations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => {
                setActiveSpecialty(spec.id);
                scrollRef.current.scrollTo({ left: 0 });
              }}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all border-b-4 
                ${activeSpecialty === spec.id ? "text-blue-900 font-bold border-blue-900" : "text-slate-600 border-transparent hover:text-blue-900"}`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Doctor Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-4"
        >
          {filteredPractitioners.length > 0 ? (
            filteredPractitioners.map((doc) => (
              <div
                key={doc.id}
                className="min-w-[300px] md:min-w-[calc(33.33%-16px)] lg:min-w-[calc(25%-18px)] snap-start bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-100/80 backdrop-blur-sm text-blue-900 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Stethoscope size={14} /> {doc.specialty}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 truncate">
                    {doc.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-5">
                    <GraduationCap size={14} className="text-slate-400" />
                    <span className="truncate">{doc.education}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-100 pt-5 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-700">
                      <IndianRupee size={16} className="text-green-600" />
                      <div>
                        <span className="font-semibold text-slate-900">
                          ₹{doc.fee}
                        </span>{" "}
                        <span className="text-xs text-slate-500">Fee</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <MessageSquare size={16} className="text-blue-600" />
                      <span className="truncate text-slate-900 font-medium text-xs">
                        {doc.lang.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2 text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <Clock3 size={16} className="text-amber-600" />
                      <div>
                        <span className="text-xs text-slate-500">
                          Next Available:{" "}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {doc.nextSlot}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2.5 bg-slate-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                    <CalendarCheck size={16} /> Book Appointment
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-16 text-slate-500 bg-white rounded-2xl border border-slate-100">
              <p>No specialists found in this category currently.</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DoctorSection;
