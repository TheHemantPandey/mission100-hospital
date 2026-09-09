import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function KeyTakeaways({ takeaways = [] }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-14">
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-50/50 border border-emerald-200/90 rounded-3xl p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center gap-2.5 mb-4 text-emerald-900 font-black text-base sm:text-lg">
          <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-2xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2>Key Takeaways</h2>
        </div>
        <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
          {takeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
