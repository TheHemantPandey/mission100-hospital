import Image from "next/image";
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="font-bold flex items-center justify-center w-full h-screen overflow-hidden">
        <div className="relative flex justify-center h-full w-full px-4 items-center flex-col overflow-hidden isolate">
          <Image
            src="/Hero-Bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
            quality={100}
          />
          <div className="absolute inset-0 bg-white/20 -z-10" />
          <div className="absolute top-0 w-full h-0.5 bg-black z-10" />

          <div className="flex items-center justify-center p-4 text-green-900 w-full max-w-7xl h-full">
            <div className="flex flex-col items-center justify-center w-full">
              <h1 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight text-center">
                Live 100 Years, Live 100% Better
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex flex-col items-center text-sm md:text-xl tracking-[0.4em] md:tracking-[0.8em] [writing-mode:vertical-rl] rotate-180 opacity-80">
                    MAKING
                  </div>
                  <div className="flex flex-col space-y-1 md:space-y-2 text-slate-900">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter">
                      Live Longer
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter">
                      Live Better
                    </h2>
                  </div>
                </div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 lg:w-112.5 lg:h-112.5 max-h-[40vh] md:max-h-[50vh] overflow-hidden shrink-0">
                  <Image
                    src="/meditation.png"
                    alt="Meditation"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-0.5 bg-black z-20" />
        </div>
      </section>

      {/* Other Sections - Only visible on Home Page */}
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
    </>
  );
}