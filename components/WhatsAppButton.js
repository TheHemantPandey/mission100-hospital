"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { event } from '@/app/lib/gtag';

const WhatsAppButton = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  const phoneNumber = "918796471583";
  const message = "Hello! I'm interested in Mission100 services.";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&lang=en`;

  const handleWhatsAppClick = () => {
    event('whatsapp_chat_click', { page_location: pathname || '/' });
  };

  const isMembershipPage = pathname ? (
    pathname.startsWith('/individual-membership-plans') ||
    pathname.startsWith('/buy-membership') ||
    pathname.startsWith('/buy-corporate-membership') ||
    pathname.startsWith('/memberships')
  ) : false;

  // Hydrate on client mount and check initial window dimensions
  useEffect(() => {
    setMounted(true);

    // Check initial device width (lg breakpoint is 1024px)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsLargeDevice(mediaQuery.matches);

    const handleResize = (e) => {
      setIsLargeDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  // Handle page transitions & initial load logic
  useEffect(() => {
    if (!mounted) return;

    // Do not show on membership pages
    if (isMembershipPage) {
      setIsVisible(false);
      return;
    }

    // Check if the plan popup (HospitalPopup) has been closed in this session
    const hasSeenPopup = window.hasSeenPopupInThisTab;
    if (!hasSeenPopup) {
      // Hide the membership button while the main popup is active
      setIsVisible(false);
      return;
    }

    if (isLargeDevice) {
      // On large devices, always show the membership button
      setIsVisible(true);
      return;
    }

    // On mobile/tablet, show button for 5 seconds on page change/load
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname, mounted, isMembershipPage, isLargeDevice]);

  // Handle custom event from HospitalPopup closure
  useEffect(() => {
    if (!mounted) return;

    const handlePopupClose = () => {
      if (isMembershipPage) return;

      if (isLargeDevice) {
        // On large devices, show permanently when closed
        setIsVisible(true);
        return;
      }

      // On mobile/tablet, show membership button for 5 seconds after plan popup is closed
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    window.addEventListener('hospital_popup_closed', handlePopupClose);
    return () => {
      window.removeEventListener('hospital_popup_closed', handlePopupClose);
    };
  }, [mounted, isMembershipPage, isLargeDevice]);

  return (
    <div className="fixed bottom-20 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">

      {/* 1. MEMBERSHIP BUTTON (Placed Above with smooth fade-in/fade-out transitions) */}
      <Link
        href="/memberships"
        className={`flex items-center pl-1.5 py-1.5 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-500 ease-out group relative ${mounted && isVisible
          ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto delay-0 pr-5 gap-3'
          : 'opacity-0 translate-x-full scale-95 pointer-events-none delay-300 pr-1.5 gap-0'
          }`}
        aria-label="View Membership Plans"
      >
        <img
          src="/main-logo1.png"
          alt="Mission100 Logo"
          className="w-12 h-12 object-contain bg-white rounded-full p-0.4 shrink-0"
        />
        <span className={`inline-block overflow-hidden transition-all duration-300 ease-out ${mounted && isVisible
          ? 'opacity-100 max-w-[200px] delay-300'
          : 'opacity-0 max-w-0 delay-0'
          }`}>
          {isLargeDevice ? (
            <span className="flex flex-col items-start leading-[1.1] text-left select-none">
              <span className="text-[10px] tracking-wider uppercase font-semibold text-green-100/90 whitespace-nowrap">
                Checkout Our
              </span>
              <span className="text-sm font-extrabold tracking-wide whitespace-nowrap">
                Membership
              </span>
            </span>
          ) : (
            <span className="text-base font-extrabold tracking-wide whitespace-nowrap select-none">
              Membership
            </span>
          )}
        </span>
      </Link>

      {/* 2. WHATSAPP BUTTON (Bottom - always visible on desktop) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="hidden lg:flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group relative"
        aria-label="Contact on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Chat with us!
        </span>

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-9 h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.034 4.009 1.576 6.173 1.576h.013c6.546 0 11.88-5.335 11.883-11.894a11.826 11.826 0 00-3.481-8.412z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;