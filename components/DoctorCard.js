"use client";



import React, { useRef } from 'react';
import { GraduationCap, Stethoscope, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const practitioners = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Cardiology", education: "MD - Harvard", exp: "12+", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e5?q=80&w=400" },
  { id: 2, name: "Dr. James Wilson", specialty: "Nutrition", education: "PhD - Stanford", exp: "10+", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400" },
  { id: 3, name: "Dr. Elena Rodriguez", specialty: "Internal Medicine", education: "MD - Johns Hopkins", exp: "15+", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400" },
  { id: 4, name: "Dr. Arjun Gupta", specialty: "Wellness", education: "MD - AIIMS Delhi", exp: "8+", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" },
  { id: 5, name: "Dr. Lisa Chen", specialty: "Dermatology", education: "MD - Yale", exp: "11+", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400" },
  { id: 6, name: "Dr. Michael Ross", specialty: "Neurology", education: "MD - Columbia", exp: "14+", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400" },
  { id: 7, name: "Dr. Anita Desai", specialty: "Pediatrics", education: "MD - King George", exp: "9+", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400" },
  { id: 8, name: "Dr. Robert Fox", specialty: "Orthopedic", education: "MD - Oxford", exp: "20+", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" },
  { id: 9, name: "Dr. Sofia Khan", specialty: "Psychiatry", education: "MD - Cambridge", exp: "13+", img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e5?q=80&w=400" },
  { id: 10, name: "Dr. Kevin Park", specialty: "General Surgeon", education: "MD - Toronto", exp: "7+", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400" },
];

const DoctorSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Leading Practitioners</h2>
            <p className="text-slate-500">World-class experts for your wellness journey.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all"><ChevronLeft size={20}/></button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all"><ChevronRight size={20}/></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x scroll-smooth pb-4">
          {practitioners.map((doc) => (
            <div key={doc.id} className="min-w-[260px] md:min-w-[calc(25%-12px)] snap-start bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-44 bg-slate-100">
                <img 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${doc.name}&background=random&size=400`; }}
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">{doc.exp} Exp</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 text-blue-600 mb-1">
                  <Stethoscope size={12}/>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{doc.specialty}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base truncate">{doc.name}</h3>
                <div className="flex items-center gap-1 text-slate-500 text-xs mb-4">
                  <GraduationCap size={14}/>
                  <span className="truncate">{doc.education}</span>
                </div>
                <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  Profile <ArrowRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default DoctorSection;