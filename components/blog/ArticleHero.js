import React from "react";

export default function ArticleHero({ src, alt, caption }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-12">
      <div className="rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md relative aspect-16/9">
        <img
          src={src || "/hospital-building.jpg"}
          alt={alt || "Mission100 Healthcare Guide"}
          className="w-full h-full object-cover"
        />
      </div>
      {(caption || alt) && (
        <p className="text-center text-xs text-slate-500 mt-2.5 font-medium italic">
          Figure: {caption || alt}
        </p>
      )}
    </div>
  );
}
