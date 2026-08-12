export const plans = {
  "free-plan": {
    id: "free",
    name: "Free Employee Plan",
    price: "₹0",
    originalPrice: "₹0",
    savings: "Zero Cost, Maximum Impact",
    costPerDay: "Completely Free",
    image: "/individual-membership-plans/free-plan-1.png",
    bestFor: [
      { title: "Early Detection", desc: "Early detection of health issues" },
      { title: "Employee Well-being", desc: "Promotes employee well-being" },
      { title: "Workplace Productivity", desc: "Improves productivity and reduces absenteeism" },
      { title: "Zero Cost", desc: "Zero cost. Maximum impact." }
    ],
    features: [
      "Monthly Office Health Checkups (12 Visits)",
      "Regular basic health monitoring for early detection & a healthier workforce",
      "Blood Pressure (BP) Monitoring regularly",
      "Blood Sugar tracking and monitoring",
      "Weight monitoring for a healthier you",
      "SpO2 (Oxygen Saturation) level checks"
    ],
    theme: {
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20",
      text: "text-emerald-600",
      glow: "bg-emerald-500/10"
    }
  },
  "silver-plan": {
    id: "silver",
    name: "Silver Care",
    price: "₹2,999",
    originalPrice: "₹8,000",
    savings: "Save ₹5,001 Every Year",
    costPerDay: "Only ₹8 Per Day",
    image: "/individual-membership-plans/silver-plan.png",
    bestFor: [
      { title: "Individuals", desc: "Perfect for single user health coverage" },
      { title: "Students", desc: "Budget-friendly healthcare setup" },
      { title: "Young Professionals", desc: "Active lifestyle preventive monitoring" },
      { title: "Preventive Care", desc: "Stop health problems before they arise" }
    ],
    features: [
      "Basic Silver Care Plan Coverage",
      "12 Online Doctor Consultations Per Year",
      "Full Body Health Checkup at Home",
      "Blood Sugar Test at Home",
      "Blood Pressure Monitoring at Home",
      "Oxygen (SpO2) Monitoring at Home"
    ],
    theme: {
      badge: "bg-slate-100 text-slate-800 border-slate-200",
      button: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10",
      text: "text-slate-700",
      glow: "bg-slate-500/10"
    }
  },

  "gold-plan": {
    id: "gold",
    name: "Gold Care",
    price: "₹4,999",
    originalPrice: "₹12,000",
    savings: "Save ₹7,001 Every Year",
    costPerDay: "Only ₹14 Per Day",
    image: "/individual-membership-plans/gold-plan.png",
    bestFor: [
      { title: "Small Families", desc: "Perfect coverage balance for up to 3 members" },
      { title: "Parents", desc: "Comprehensive care tailored for elder dependencies" },
      { title: "Regular Checkups", desc: "Routine diagnostics and constant tracking" },
      { title: "Home Healthcare", desc: "Doorstep sample collections and on-call testing" }
    ],
    features: [
      "12 Online Doctor Consultations Per Year",
      "2 Home Doctor Visits Per Year",
      "Full Body Health Checkup at Home",
      "Blood Sugar Test at Home",
      "Blood Pressure Monitoring at Home",
      "Oxygen (SpO2) Monitoring at Home",
      "Priority Appointments Booking",
      "Dedicated Health Coordinator",
      "Monthly Vitals Checkup at Home",
      "Monthly Follow-up Support"
    ],
    theme: {
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      button: "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20",
      text: "text-amber-600",
      glow: "bg-amber-500/10"
    }
  },

  "platinum-plan": {
    id: "platinum",
    name: "Platinum Care",
    price: "₹9,999",
    originalPrice: "₹27,000",
    savings: "Save ₹17,001 Every Year",
    costPerDay: "Only ₹27 Per Day",
    image: "/individual-membership-plans/platinum-plan.png",
    isPopular: true,
    bestFor: [
      { title: "Complete Families", desc: "Complete master coverage for your entire home" },
      { title: "Senior Citizens", desc: "Advanced diagnostics and specialized priority link" },
      { title: "Parents", desc: "Dedicated home doctor checkups with zero stress" },
      { title: "Complete Protection", desc: "Maximum financial and health safety net all year" }
    ],
    features: [
      "Everything in Gold Care Plan Included",
      "12 Online Doctor Consultations Per Year",
      "12 Home Doctor Visits Per Year",
      "Full Body Health Checkup at Home",
      "Blood Sugar Test at Home",
      "Blood Pressure Monitoring at Home",
      "ECG Heart Checkup at Home",
      "Dietician Consultation at Home",
      "Fitness Consultations Per Year",
      "Priority Appointments Booking",
      "Dedicated Health Coordinator",
      "Monthly Vitals Checkup at Home",
      "Monthly Follow-up Support"
    ],
    theme: {
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20",
      text: "text-blue-600",
      glow: "bg-blue-500/10"
    }
  },

  "pro-fitness-plan": {
    id: "pro",
    name: "Pro Fitness Plan",
    price: "₹19,999",
    originalPrice: "₹35,000",
    savings: "Save ₹15,001 Every Year",
    costPerDay: "Only ₹55 Per Day",
    image: "/individual-membership-plans/pro-fitness-plan.png",
    bestFor: [
      { title: "Fitness Enthusiasts", desc: "Tailored checkups for active gym and athletic tracking" },
      { title: "Weight Management", desc: "Dietician adjustments and metabolic profiling" },
      { title: "Lifestyle Improvement", desc: "Continuous physiological benchmarks structural layout" },
      { title: "Health Tracking", desc: "Advanced performance monitoring metrics" }
    ],
    features: [
      "Everything in Platinum Care Plan Included",
      "12 Home Doctor Visits Per Year",
      "12 Online Doctor Consultations Per Year",
      "4 Dietician Consultations Per Year",
      "4 Fitness Consultations Per Year",
      " Personalized Fitness Plan",
      "Enhanced Dietician Consultations (4/Year)",
      "Enhanced Fitness Consultations (4/Year)",
      "Personalized Fitness & Longevity Mapping",
      "24x7 Emergency Medical Support",
      "Emergency Ambulance Support Wrapper"
    ],
    theme: {
      badge: "bg-green-100 text-green-800 border-green-200",
      button: "bg-green-600 hover:bg-green-700 text-white shadow-green-600/20",
      text: "text-green-600",
      glow: "bg-green-500/10"
    }
  }
};

export const comparisonImageUrl = "/individual-membership-plans/comparison-plan.jpg";