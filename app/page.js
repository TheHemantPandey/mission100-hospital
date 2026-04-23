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
      <section className="relative font-bold flex items-center justify-center w-full min-h-[100dvh] lg:h-screen overflow-hidden">
        <div className="relative flex justify-center h-full w-full px-4 py-12 md:py-0 items-center flex-col isolate">
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

          {/* Container capped at xl to prevent ultra-wide stretching */}
          <div className="flex items-center justify-center p-2 sm:p-4 text-green-900 w-full max-w-7xl mx-auto h-full">
            <div className="flex flex-col items-center justify-center w-full">
              
              {/* Responsive Heading */}
              <h1 className="mb-6 md:mb-10 text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-center uppercase">
                Live 100 Years, Live 100% Better
              </h1>

              {/* Flex changes from Column (Mobile) to Row (Tablet/Desktop) */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
                
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                  {/* "MAKING" text: hidden on tiny screens, visible from Foldables (sm) up */}
                  <div className="hidden sm:flex flex-col items-center text-xs sm:text-sm md:text-xl tracking-[0.4em] md:tracking-[0.8em] [writing-mode:vertical-rl] rotate-180 opacity-80">
                    MAKING
                  </div>
                  
                  <div className="flex flex-col space-y-1 md:space-y-2 text-slate-900 text-center sm:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tighter">
                      Live Longer
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tighter">
                      Live Better
                    </h2>
                  </div>
                </div>

                {/* Responsive Image Container for all 5 tiers */}
                <div className="relative w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] max-h-[35vh] md:max-h-[50vh] overflow-hidden shrink-0">
                  <Image
                    src="/meditation.png"
                    alt="Meditation"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 240px, (max-width: 1024px) 320px, 450px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-0.5 bg-black z-20" />
        </div>
      </section>

      {/* Other Sections */}
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