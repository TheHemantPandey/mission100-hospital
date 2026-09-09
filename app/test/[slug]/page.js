"use client";

import React, { useState, use } from 'react';
import Link from 'next/link'; // Already imported
import testsData from '@/data/tests.json';
import { 
  ChevronDown, 
  Phone, 
  FileText,
  MessageCircle,
  CheckCircle2,
  Star,
  ShieldCheck,
  UserCheck,
  Home
} from 'lucide-react';

export default function TestDetailPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const test = testsData.find((t) => t.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);
  const [isReadMore, setIsReadMore] = useState(false);

  if (!test) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h1>
        <Link href="/find-a-test" className="text-red-600 font-bold hover:underline">
          Return to Health Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans pb-20 relative">
      
      {/* Top Banner Image */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
        <div 
          className="w-full h-full bg-[#dc2626] flex items-center px-6 md:px-20 text-white bg-cover bg-right"
          style={{
            backgroundImage: `linear-gradient(to right, #dc2626 30%, transparent 100%), url('/blood-cell.png')`,
          }}
        >
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              For us, <span className="font-bold">CARE</span> means <br /> better health for better living
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-10 md:-mt-16 lg:-mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-4">
            
            {/* 1. Title & Price Card */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">{test.title}</h1>
                  <p className="text-[11px] md:text-sm text-gray-400 font-semibold uppercase tracking-wider mt-2">
                    Health Package | {test.bottomDetails.specializations[0]}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 line-through text-xs md:text-lg italic">₹{test.oldPrice}</span>
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-600">₹{test.currentPrice}</div>
                </div>
              </div>
            </div>

            {/* 2. Mobile Home Collection Info (Updated with Link) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:hidden">
              <div className="flex items-center gap-3 mb-6 p-3 bg-red-50 rounded-lg border border-red-100">
                <Home className="text-red-600" size={20} />
                <span className="font-bold text-red-800 text-sm">FREE Home Sample Collection</span>
              </div>
              <Link href="/book-test">
                <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-sm shadow-md mb-3">
                  Book Test
                </button>
              </Link>
              <a href="tel:+918796471583" className="block w-full border border-gray-300 py-3 rounded-lg font-bold text-gray-800 text-center text-xs">
                Call: +91 87964 71583
              </a>
            </div>

            {/* 3. Description Card */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xs md:text-base font-bold text-gray-900 mb-4">Also Known As:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {test.alsoKnownAs.map((name, i) => (
                  <span key={i} className="text-[9px] md:text-xs font-medium px-4 py-1.5 text-red-600 rounded-full border border-red-200 uppercase">
                    {name}
                  </span>
                ))}
              </div>
              <p className={`text-gray-700 text-sm md:text-lg leading-relaxed ${!isReadMore && 'line-clamp-3'}`}>
                {test.shortDescription}
              </p>
              <button onClick={() => setIsReadMore(!isReadMore)} className="text-red-600 text-[11px] md:text-sm font-bold mt-3 underline">
                {isReadMore ? 'Read less' : 'Read more'}
              </button>
            </div>

            {/* 4. Package Highlights */}
            {test.specialFeatures && (
              <div className="bg-linear-to-br from-red-50 to-white p-6 md:p-10 rounded-xl shadow-sm border border-red-100">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="text-red-600 fill-red-600" size={20} />
                  <h3 className="font-bold text-gray-900 text-base md:text-xl uppercase tracking-tight">Package Highlights</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {test.specialFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-red-100 shadow-sm">
                      <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                      <span className="font-bold text-gray-800 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Parameters Accordion Section */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-base md:text-xl mb-8 uppercase tracking-tight">
                Includes <span className="text-red-600">{test.totalParameters}</span> Test Parameters
              </h3>
              <div className="space-y-4">
                {test.includes.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx}>
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className={`w-full flex justify-between items-center px-6 py-5 transition-all
                          ${isOpen ? 'bg-[#f3f4f6] border-2 border-black rounded-t-lg' : 'bg-[#f3f4f6] border border-gray-200 rounded-lg'}`}
                      >
                        <span className="font-bold text-gray-900 text-sm md:text-lg">{item.mainParam}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] md:text-sm font-bold text-red-600">{item.nestedCount} Parameter{item.nestedCount > 1 ? 's' : ''}</span>
                          <ChevronDown size={22} className={`text-red-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="bg-white border-x-2 border-b-2 border-black rounded-b-lg p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
                            {item.nestedParams.map((p, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <div className="w-2.5 h-2.5 bg-black rounded-full shrink-0" />
                                <span className="text-gray-800 text-sm md:text-base font-medium">{p}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 6. Technical Details Card */}
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 space-y-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Test Preparation:</h4>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">{test.bottomDetails.preparation}</p>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">Reporting TAT :</h4>
                  <p className="text-gray-700 text-sm md:text-lg">{test.bottomDetails.reportingTAT}</p>
                </div>
              </div>
              <div className="border-t pt-6 flex flex-col md:flex-row md:items-center gap-4">
                <h4 className="text-sm md:text-base font-bold text-gray-900 uppercase">Specializations :</h4>
                <div className="flex gap-2">
                  {test.bottomDetails.specializations.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] md:text-xs font-bold px-4 py-2 text-red-600 rounded-full border border-red-200">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* DESKTOP SIDEBAR (Updated with Link)[cite: 6] */}
          <div className="hidden lg:block">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Service Type</p>
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <Home className="text-red-600" size={30} />
                    <div>
                      <p className="font-extrabold text-red-900 text-lg">Home Collection</p>
                      <p className="text-[13px] text-red-700 font-bold italic">Professional at-home service</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 border-t pt-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-green-600" />
                    <span className="text-xs font-bold text-gray-700">Safe & Reliable Process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UserCheck size={18} className="text-green-600" />
                    <span className="text-xs font-bold text-gray-700">Doctor Verified Reports</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/book-test">
                    <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-base tracking-widest hover:bg-red-700 shadow-xl transition-all">
                       Book Test
                    </button>
                  </Link>
                  <a href="tel:+918796471583" className="block w-full border border-gray-300 py-4 rounded-xl font-bold text-gray-800 text-center text-2sm hover:bg-gray-50 transition-colors">
                    Call: +91 87964 71583
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}