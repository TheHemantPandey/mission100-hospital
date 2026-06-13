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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Popup Box Container */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center shadow-2xl transition-all">
        
        {/* Top Right Close 'X' Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-semibold transition-colors"
        >
          &times;
        </button>

        {/* Hospital Branding / Icon Placeholder */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
          <span className="text-blue-600 text-xl font-bold">➕</span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold leading-6 text-gray-900 mb-2">
          Important Announcement
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Welcome to Mission 100 Hospital. Our emergency and ambulance services are available 24/7. You can now book teleconsultations directly online.
        </p>

        {/* Bottom Action Button */}
        <button
          onClick={closePopup}
          className="w-full inline-flex justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none transition-colors"
        >
          Proceed to Website
        </button>
      </div>
    </div>
  );
}