import React from "react";
import { ShieldAlert } from "lucide-react";

export default function ArticleDisclaimer({
  text = "This content is for general informational and educational purposes only and does not substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician or certified healthcare provider with any questions regarding medical conditions or diagnostic tests."
}) {
  return (
    <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed">
      <div className="flex items-center gap-2 font-bold mb-2 text-amber-950">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
        <span>Medical Information Disclaimer</span>
      </div>
      <p className="text-amber-900/90 font-medium">
        {text}
      </p>
    </div>
  );
}
