'use client'; // Required in Next.js App Router for state and useEffect

import { useState, useEffect } from 'react';

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

  // If the popup shouldn't be open, render nothing
  if (!isOpen) return null;

  return (  
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Popup Box Container 
        Increased size from max-w-md to max-w-3xl, and removed padding (p-0) 
        so the image sits perfectly inside.
      */}
      <div className="relative w-full max-w-3xl transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
        
        {/* Top Right Close 'X' Button */}
        <button 
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-2xl font-bold shadow-sm transition-colors"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* DESKTOP / LAPTOP IMAGE 
            'hidden md:block' means it stays hidden on small screens 
            but becomes visible on medium (768px) screens and larger.
        */}
        <img 
          src="/popup-image/popup-1.png" 
          alt="Mission 100 Hospital Free Health Checkup" 
          className="hidden md:block w-full h-auto object-contain"
        />

        {/* MOBILE / TABLET IMAGE 
            'block md:hidden' means it is visible on small screens 
            but disappears on medium (768px) screens and larger.
        */}
        <img 
          src="/popup-image/popup-2.png" 
          alt="Mission 100 Hospital Free Health Checkup - Mobile" 
          className="block md:hidden w-full h-auto object-contain"
        />
        
      </div>
    </div>
  );
}