import Image from "next/image";

export default function Home() {
  return (
    <div className="font-bold flex items-center justify-center w-full">
      {/* Changed h-[80vh] to min-h-[80vh] to prevent overflow on small screens */}
      <div className="relative flex justify-center min-h-[60vh] w-full px-4 py-12 md:p-8 items-center flex-col overflow-hidden">
        <Image
          src="/3Hero-Bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover -z-10"
          priority
        />

        <div className="absolute top-0 w-full h-0.5 bg-black z-10" />

        <div className="flex items-center justify-center p-4 text-green-900 w-full max-w-7xl">
          <div className="flex flex-col items-center w-full">
            <h1 className="mt-8 md:mt-20 text-3xl md:text-4xl font-bold tracking-tight text-center">
              We are MISSION100
            </h1>

            {/* Changed flex-row to flex-col on mobile, flex-row on md screens */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-10 w-full">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="flex flex-col items-center text-lg md:text-2xl tracking-[0.4em] md:tracking-[0.8em] [writing-mode:vertical-rl] rotate-180">
                  MAKING
                </div>
                <div className="flex flex-col space-y-2 md:space-y-4">
                  {/* Scaled down text size for mobile */}
                  <h2 className="text-4xl sm:text-6xl md:text-[5rem] font-bold leading-[0.85] tracking-tighter">
                    Live Longer
                  </h2>
                  <h2 className="text-4xl sm:text-6xl md:text-[5rem] font-bold leading-[0.85] tracking-tighter">
                    Live Better
                  </h2>
                </div>
              </div>

              {/* Replaced invalid w-120 with valid Tailwind sizing */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-120 md:h-120 lg:w-140 lg:h-140 overflow-hidden shrink-0">
                <Image
                  src="/meditation.png"
                  alt="Meditation"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-0.5 bg-black z-20" />
      </div>
    </div>
  );
}
