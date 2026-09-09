"use client";

import React, { useState } from "react";
import { Mail, Check, Sparkles } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="max-w-5xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-50/50 border border-emerald-200/90 rounded-3xl p-6 sm:p-10 shadow-2xs text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Health Literacy Digest</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          Get Doctor-Verified Health Guides in Your Inbox
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto mb-6 leading-relaxed">
          Join 10,000+ individuals staying informed on preventive checkup guidelines,
          metabolic health, diagnostic insights, and healthy aging protocols.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 p-3 px-6 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-xs animate-in fade-in">
            <Check className="w-4 h-4" />
            <span>Thank you for subscribing! Check your inbox for updates.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all font-medium"
                aria-label="Email address for health newsletter"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-xs cursor-pointer active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-slate-400 mt-4">
          No spam, ever. Unsubscribe with a single click at any time.
        </p>
      </div>
    </section>
  );
}
