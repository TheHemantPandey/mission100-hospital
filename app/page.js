import Image from "next/image";
import dynamic from "next/dynamic";
import AboutSection from "@/components/AboutUs";

// PERFORMANCE: Dynamic imports ensure these only load when needed
const DoctorSection = dynamic(() => import("@/components/DoctorCard"), { ssr: true });
const Heart = dynamic(() => import("@/components/Heart"));
const Stress = dynamic(() => import("@/components/Stress"));
const BoneTesting = dynamic(() => import("@/components/Bone-testing"));
const Happiness = dynamic(() => import("@/components/Happiness"));
const MentalHealthSection = dynamic(() => import("@/components/Mental-Health"));
const PersonalitySection = dynamic(() => import("@/components/Personality"));
const AntiAgingSection = dynamic(() => import("@/components/Anti-Aging"));
const SugarSection = dynamic(() => import("@/components/Sugar-Management"));
const VitaminsSection = dynamic(() => import("@/components/Vitamin-Minerals"));
const AyurvedaSection = dynamic(() => import("@/components/Yoga-Ayurveda"));
const Brochure = dynamic(() => import("@/components/Brochure"));
const QueryForm = dynamic(() => import("@/components/QueryForm"));
const Faq = dynamic(() => import("@/components/Faq"));

export default function Home() {
  return (
    <>
      <section className="relative font-bold flex items-center justify-center w-full min-h-fit lg:h-screen overflow-hidden">
        
        <div className="relative flex justify-center h-full w-full px-4 pt-4 pb-12 md:py-0 items-center flex-col isolate">
          <Image
            src="/Hero-bg.png" 
            alt="Hero Background"
            fill
            priority
            className="object-cover -z-10"
            quality={80} 
          />
          <div className="absolute inset-0 bg-white/20 -z-10" />
          
          <div className="hidden md:block absolute top-0 w-full h-0.5 bg-black z-10" />

          {/* Container adjusted to allow for a larger image on the right */}
          <div className="flex items-center justify-center p-2 sm:p-4 text-green-900 w-full max-w-7xl mx-auto h-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
              
              {/* LEFT SIDE: Original Text Sizes Restored */}
              <div className="flex flex-col items-center md:items-start">
                <h1 className="mb-6 md:mb-10 text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left uppercase">
                  Live 100 Years, Live 100% Better
                </h1>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
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
              </div>

              {/* RIGHT SIDE: Meditation Image (Made Larger) */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] max-h-[50vh] md:max-h-[90vh] overflow-visible shrink-0">
                <Image
                  src="/meditate.png"
                  alt="Meditation"
                  fill
                  className="object-contain object-center md:object-right-bottom"
                  sizes="(max-width: 768px) 320px, (max-width: 1280px) 600px, 800px"
                  priority
                  quality={90}
                />
              </div>

            </div>
          </div>
          <div className="absolute bottom-0 w-full h-0.5 bg-black z-20" />
        </div>
      </section>

      <AboutSection />
      {/* ... other components remain the same ... */}
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