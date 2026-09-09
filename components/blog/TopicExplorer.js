"use client";

import React from "react";
import {
  Heart,
  Droplets,
  Activity,
  ShieldAlert,
  Sun,
  UserCheck,
  Stethoscope,
  ChevronRight,
  Home,
  CheckSquare,
  Sparkles,
  Users
} from "lucide-react";

const TOPICS = [
  {
    id: "preventive",
    title: "Preventive Care",
    category: "Preventive Care",
    icon: CheckSquare,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200"
  },
  {
    id: "full-body",
    title: "Full Body Checkup",
    category: "Health Checkups",
    icon: Activity,
    color: "from-blue-500/10 to-cyan-500/10 text-blue-700 border-blue-200"
  },
  {
    id: "blood-tests",
    title: "Blood Tests",
    category: "Blood Tests",
    icon: Droplets,
    color: "from-rose-500/10 to-red-500/10 text-rose-700 border-rose-200"
  },
  {
    id: "heart-health",
    title: "Heart Health",
    category: "Heart Health",
    icon: Heart,
    color: "from-red-500/10 to-orange-500/10 text-red-700 border-red-200"
  },
  {
    id: "diabetes",
    title: "Diabetes & Sugar",
    category: "Diabetes",
    icon: ShieldAlert,
    color: "from-amber-500/10 to-yellow-500/10 text-amber-700 border-amber-200"
  },
  {
    id: "thyroid",
    title: "Thyroid Health",
    category: "Blood Tests",
    icon: Sparkles,
    color: "from-purple-500/10 to-indigo-500/10 text-purple-700 border-purple-200"
  },
  {
    id: "diagnostics",
    title: "Diagnostics & ECG",
    category: "Diagnostics",
    icon: Stethoscope,
    color: "from-indigo-500/10 to-blue-500/10 text-indigo-700 border-indigo-200"
  },
  {
    id: "senior-health",
    title: "Senior Health",
    category: "Senior Health",
    icon: UserCheck,
    color: "from-teal-500/10 to-emerald-500/10 text-teal-700 border-teal-200"
  },
  {
    id: "womens-health",
    title: "Women's Health",
    category: "Women's Health",
    icon: Users,
    color: "from-pink-500/10 to-rose-500/10 text-pink-700 border-pink-200"
  },
  {
    id: "mens-health",
    title: "Men's Health",
    category: "Men's Health",
    icon: Users,
    color: "from-cyan-500/10 to-blue-500/10 text-cyan-700 border-cyan-200"
  },
  {
    id: "home-collection",
    title: "Home Collection",
    category: "Home Sample Collection",
    icon: Home,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-700 border-emerald-200"
  },
  {
    id: "vitamins",
    title: "Vitamin Tests",
    category: "Diagnostics",
    icon: Sun,
    color: "from-amber-500/10 to-yellow-500/10 text-yellow-700 border-yellow-200"
  }
];

export default function TopicExplorer({ onSelectTopic }) {
  return (
    <section className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 pb-2 border-b border-slate-200">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
          Explore Health Topics
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Find trusted information about the health topics that matter to you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelectTopic && onSelectTopic(topic.category)}
              className="bg-white rounded-xl border border-slate-200/90 p-3.5 sm:p-4 text-left hover:border-emerald-300 hover:shadow-xs transition-all duration-200 group flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${topic.color} border flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {topic.title}
                  </h3>
                  <span className="text-[10px] text-slate-400 group-hover:text-emerald-600 font-semibold transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
