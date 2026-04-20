import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutUs";
import DoctorSection from "@/components/DoctorCard";
import Heart from "@/components/Heart";
import Stress from "@/components/Stress";
import BoneTesting from "@/components/Bone-testing";
import Happiness from "@/components/Happiness";
import MentalHealthSection from "@/components/Mental-Health";
import PersonalitySection from "@/components/Personality";
import AntiAgingSection from "@/components/Anti-Aging";
import SugarSection from "@/components/Sugar-Management";
import VitaminsSection from "@/components/Vitamin-Minerals";
import AyurvedaSection from "@/components/Yoga-Ayurveda";
import Brochure from "@/components/Brochure";
import QueryForm from "@/components/QueryForm";
import Faq from "@/components/Faq";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mission 100 - Helping you Live Longer | Preventive Healthcare",
  description: "Mission 100 is dedicated to preventive healthcare, wellness, and helping you live a longer, healthier life through expert guidance and specialized health sections.",
  verification: {
    google: "fCeSX-03IsU_gkhDYs-AmvW3GG0Ggo9fQd0bWwzj71E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f9fc] flex flex-col">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Sections included in the layout for consistent visibility */}
        <AboutSection />
        <DoctorSection />
        <Heart />
        <Stress />
        <BoneTesting />
        <Happiness />
        <MentalHealthSection />
        <PersonalitySection />
        <AntiAgingSection />
        <SugarSection />
        <VitaminsSection />
        <AyurvedaSection />
        <Brochure />
        <QueryForm />
        <Faq />
        <Footer />   
        <WhatsAppButton />   
      </body>
    </html>
  );
}