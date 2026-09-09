"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  List,
  ChevronDown,
  ChevronUp,
  Share2,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Stethoscope,
  PhoneCall
} from "lucide-react";

export function TableOfContents({ tocItems = [] }) {
  const [activeId, setActiveId] = useState("");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden my-6 bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between text-slate-900 font-bold text-sm"
          aria-expanded={isOpenMobile}
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-emerald-600" />
            Table of Contents ({tocItems.length} sections)
          </span>
          {isOpenMobile ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {isOpenMobile && (
          <nav className="mt-3 pt-3 border-t border-slate-200 text-xs space-y-2">
            {tocItems.map((item, idx) => (
              <a
                key={item.id || idx}
                href={`#${item.id}`}
                onClick={() => setIsOpenMobile(false)}
                className={`block py-1 px-2 rounded-lg transition-colors ${
                  activeId === item.id
                    ? "bg-emerald-100/70 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-slate-100"
                }`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky TOC Sidebar Widget */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm mb-4 pb-3 border-b border-slate-100">
          <List className="w-4 h-4 text-emerald-600" />
          <span>Table of Contents</span>
        </div>
        <nav className="space-y-1.5 text-xs">
          {tocItems.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id || idx}
                href={`#${item.id}`}
                className={`block py-1.5 px-3 rounded-lg leading-snug transition-all ${
                  isActive
                    ? "bg-emerald-50 text-emerald-800 font-bold border-l-2 border-emerald-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                {item.text}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export function ShareButtons({ title = "", slug = "" }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://www.mission100hospital.com/blogs/${slug}`;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - Read more on Mission100 Hospital: ${shareUrl}`
  )}`;

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}`;

  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-500 font-semibold mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5" /> Share:
      </span>

      <button
        onClick={handleCopy}
        title="Copy Link"
        aria-label="Copy link to clipboard"
        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all text-xs flex items-center gap-1 font-bold"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>

      <a
        href={shareWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on WhatsApp"
        aria-label="Share on WhatsApp"
        className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-all text-xs font-bold"
      >
        WhatsApp
      </a>

      <a
        href={shareTwitter}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on X (Twitter)"
        aria-label="Share on Twitter"
        className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-all text-xs font-bold"
      >
        X
      </a>

      <a
        href={shareLinkedIn}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
        className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all text-xs font-bold"
      >
        LinkedIn
      </a>
    </div>
  );
}

export function FaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-3 my-8">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                <p className="pl-8">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function SidebarDoctorCard({ medicalReviewer }) {
  if (!medicalReviewer) return null;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Clinically Reviewed By</span>
      </div>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold shrink-0">
          <Stethoscope className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-slate-900 font-black text-sm">
            {medicalReviewer.name}
          </h4>
          <p className="text-emerald-700 text-xs font-bold">
            {medicalReviewer.qualification}
          </p>
          <p className="text-slate-500 text-xs mt-0.5 leading-snug">
            {medicalReviewer.specialty}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SidebarCtaCard({ cta }) {
  if (!cta) return null;

  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-5 shadow-md">
      {cta.badge && (
        <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 text-white text-[10px] font-black uppercase tracking-wider mb-2">
          {cta.badge}
        </span>
      )}
      <h4 className="font-black text-sm sm:text-base leading-snug mb-2">
        {cta.headline}
      </h4>
      <p className="text-emerald-100 text-xs leading-relaxed mb-4">
        {cta.description}
      </p>
      <Link
        href={cta.buttonUrl || "/find-a-test"}
        className="block text-center py-2.5 px-4 rounded-xl bg-white text-emerald-900 font-black text-xs uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-sm"
      >
        {cta.buttonText || "Book Diagnostic Now"}
      </Link>
    </div>
  );
}
