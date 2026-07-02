'use client'; // Required in Next.js App Router for state and useEffect

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HospitalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check sessionStorage so it only shows once per browser session
    const hasSeenPopup = sessionStorage.getItem('mission100_popup_seen');
    
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('mission100_popup_seen', 'true');
  };

  if (!isOpen) return null;

  return (  
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      
      {/* 
        ===================================================================
        HOW TO ADJUST THE OVERALL POPUP SIZE:
        Find "max-w-3xl" below and change it to:
        - max-w-md   (Smallest)
        - max-w-lg   (Small)
        - max-w-xl   (Medium)
        - max-w-2xl  (Large)
        - max-w-3xl  (Extra Large - Current)
        - max-w-5xl  (Massive)
        - max-w-[800px] (Custom exact pixel size)
        ===================================================================
      */}
      <div className="relative w-full max-w-3xl transform transition-all flex flex-col gap-4">
        
        {/* Top Right Close 'X' Button 
            Moved slightly higher and to the right so it floats nicely
        */}
        <button 
          onClick={closePopup}
          className="absolute -top-4 -right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-200 hover:text-gray-900 text-2xl font-bold shadow-lg transition-colors"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Image Container (White background is restricted ONLY to the image) */}
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl">
          {/* DESKTOP / LAPTOP IMAGE */}
          <img 
            src="/popup-image/popup11.png" 
            alt="Mission 100 Hospital Free Health Checkup" 
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* MOBILE / TABLET IMAGE */}
          <img 
            src="/popup-image/popup22.png" 
            alt="Mission 100 Hospital Free Health Checkup - Mobile" 
            className="block md:hidden w-full h-auto object-contain"
          />
        </div>

        {/* CTA Button Section (Now Transparent) */}
        <div className="w-full flex justify-center">
          <Link 
            href="/test/heart-checkup-at-home"
            onClick={closePopup}
            className="flex w-full md:w-3/4 items-center justify-center rounded-lg bg-green-600 py-2.5 px-4 text-center text-base sm:text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-200 hover:bg-green-700 hover:scale-[1.02] active:scale-95 uppercase tracking-wide border-2 border-green-700"
          >
            Click here for free test
          </Link>
        </div>
        
      </div>
    </div>
  );
}