"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

export default function ArticleTOC({ tocItems = [], isMobile = false }) {
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

  if (isMobile) {
    return (
      <div className="lg:hidden my-6 bg-slate-50 border border-slate-200 rounded-2xl p-4">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between text-slate-900 font-bold text-sm cursor-pointer"
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
    );
  }

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
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
  );
}
