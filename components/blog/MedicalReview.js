import React from "react";
import { ShieldCheck, Stethoscope } from "lucide-react";

export default function MedicalReview({ medicalReviewer }) {
  if (!medicalReviewer) return null;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
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
          <p className="text-slate-500 text-xs mt-0.5 leading-snug font-medium">
            {medicalReviewer.specialty}
          </p>
        </div>
      </div>
    </div>
  );
}
