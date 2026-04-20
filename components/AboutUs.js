"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  BrainCircuit, 
  Activity, 
  Hourglass, 
  Leaf, 
  UserRoundCheck, 
  ArrowRight 
} from "lucide-react";

// Animation wrapper for icons
const AnimatedIcon = ({ children }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.1, 1],
      y: [0, -5, 0] 
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="text-green-600 mb-4"
  >
    {children}
  </motion.div>
);

const AboutUs = () => {
  const focusAreas = [
    {
      title: "Heart Attack Prevention",
      desc: "Prioritizing cardiac safety through advanced ECG analysis and risk assessment.",
      icon: <HeartPulse size={40} />,
    },
    {
      title: "Mental Health & Stress",
      desc: "Holistic support for stress and happiness measurement to ensure peace of mind.",
      icon: <BrainCircuit size={40} />,
    },
    {
      title: "Body & Bone Strength",
      desc: "Monitoring bone measurement and body strength to maintain mobility into old age.",
      icon: <Activity size={40} />,
    },
    {
      title: "Anti-Aging Science",
      desc: "Utilizing preventive healthcare and death prediction modeling to extend healthy years.",
      icon: <Hourglass size={40} />,
    },
    {
      title: "Yoga & Ayurveda",
      desc: "Blending ancient wellness practices with modern medicine for a complete ecosystem.",
      icon: <Leaf size={40} />,
    },
    {
      title: "Body Preservation",
      desc: "We preserve your body, optimizing health just before the end-of-life stages.",
      icon: <UserRoundCheck size={40} />,
    },
  ];

  return (
    <section className="bg-white text-gray-800 font-sans py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 uppercase tracking-wide">
            Why Choose - Mission 100?
          </h1>
          <p className="text-xl md:text-2xl italic text-green-600 font-medium">
            "Live 100 Years"
          </p>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-6"></div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900 border-l-4 border-green-500 pl-4">
              Our Vision for Longevity
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At **Mission 100**, we are dedicated to the revolutionary idea
              that healthcare should be preventive rather than just reactive.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We focus heavily on the needs of **Child before the Birth, Adults
              and the Elderly**, ensuring strength and scientific precision.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Why Mission 100?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Modern Radiology mixed with traditional Ayurveda.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                Data-driven ECG heart risk analysis.
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Focus Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Main Clinical Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-6 border border-gray-100 rounded-xl bg-green-50 transition-all duration-300 hover:shadow-xl hover:shadow-green-100"
              >
                <AnimatedIcon>
                  {area.icon}
                </AnimatedIcon>
                
                <h3 className="text-xl font-bold mb-2 text-green-700">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {area.desc}
                </p>

                <button className="px-6 py-2.5 flex items-center gap-2 w-fit text-green-600 font-bold bg-white border border-green-200 rounded-xl shadow-sm transition-all duration-300 hover:bg-green-600 hover:text-white group/btn">
                  Read More
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;