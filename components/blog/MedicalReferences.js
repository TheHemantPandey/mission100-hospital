import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

export default function MedicalReferences({ references }) {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-700">
      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base mb-3">
        <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Medical References & Authoritative Sources</span>
      </div>
      <p className="text-xs text-slate-500 mb-4 font-medium">
        This article is grounded in peer-reviewed clinical literature and guidelines from leading healthcare authorities:
      </p>
      <ul className="space-y-2.5 text-xs">
        {references.map((ref, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="font-bold text-emerald-700 shrink-0">[{idx + 1}]</span>
            <div>
              <span className="font-semibold text-slate-900">{ref.author}</span>
              {ref.year && <span className="text-slate-500"> ({ref.year})</span>}.{" "}
              <span className="italic text-slate-700">"{ref.title}"</span>.{" "}
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-emerald-700 hover:text-emerald-800 hover:underline font-medium break-all"
                >
                  <span>Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
