import Image from "next/image";
export default function Landing() {
  return (
    <>
      <div className="relative min-h-screen ">
        <div className="absolute inset-0 bg-[#DA2653]/90 z-10" />
        <div className="relative z-20">
          <div className="relative w-full mb-32">
            {/* Background Image */}
            <div className="w-full h-[400px] absolute top-0 -z-10">
              <Image
                src="/cloudup.svg"
                alt="cloud"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* White Content Box */}
            <div className="flex flex-col gap-4 w-full items-center pt-32">
              <div className="text-yellow-300 text-sm md:text-lg font-bold">
                13TH AND 14TH MAY 2025 6:00 PM - 7:30PM
              </div>

              <div className="bg-white px-3 py-2 rounded-xl relative">
                <div className="flex flex-col gap-2 items-center px-8 py-4 border-2 rounded-xl border-[#DA2653]">
                  <div className="text-xl md:text-3xl text-black font-extrabold">
                    YOUR CHILD CAN START READING
                  </div>
                  <div className="text-xl md:text-3xl text-black font-extrabold">
                    AT HOME - EVEN BEFORE AGE 3
                  </div>
                </div>

                {/* Yellow Tag */}
                <div className="bg-amber-300 absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg border-2 border-[#DA2653]">
                  <div className="text-black font-extrabold text-xs md:text-base">
                    RESERVE YOUR SPOT - RS. 499
                  </div>
                </div>

                {/* Proof Text */}
                <div className="text-white md:text-base absolute -bottom-12 left-1/2 -translate-x-1/2">
                  (proof below)
                </div>
              </div>
            </div>

            {/* Side-by-Side Section */}
            <div className="relative mt-30 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="text-white text-[4.5vw] md:text-[2.4vw] w-full md:w-[25vw] text-center md:text-left px-2">
                Join the World&apos;s Highest-Rated Online Masterclass (for
                Parents)
                <br />
                Learn simple, science-backed techniques to teach your child to
                read — in just 15 minutes a day.
              </div>

              {/* Image */}
              <div className="w-[100vw] h-[70vh] md:w-[80vw] absolute  right-0">
                <Image
                  src="/parent.png"
                  width={1000}
                  height={1000}
                  alt="parent"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bottom Vector Image */}
            <div className="w-full absolute -bottom-40 md:-bottom-[100vh] z-0">
            <div className="w-full bg-[url('/background.png')] " />
              <Image
                src="/Vector.png"
                alt="vector"
                width={1920}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full h-32 p-2"></div>
        </div>
      </div>
    </>
  );
}
