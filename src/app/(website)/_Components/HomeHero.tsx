"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kar000.jpeg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 h-screen flex items-center justify-center text-center sm:text-left sm:justify-start">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <h1
              className="
              text-4xl 
              sm:text-6xl 
              lg:text-8xl 
              font-serif font-bold 
              text-white leading-tight mb-6
            "
            >
              Prestige travel, minus the predictable.
            </h1>

            <p
              className="
              text-sm 
              sm:text-lg 
              lg:text-xl 
              text-white/90 
              mb-8 
              max-w-2xl 
              leading-relaxed
              mx-auto sm:mx-0
            "
            >
              Ultra-curated stays and after-dark itineraries across Switzerland
              and beyond — crafted by an airline insider in Los Angeles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center sm:items-start justify-center sm:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium"
                onClick={() => handleScroll("start-planning")}
              >
                Start Planning
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-black/20 hover:bg-black/40 hover:text-red-700 text-white px-8 py-6 text-base font-medium backdrop-blur-sm"
                onClick={() => handleScroll("experiences")}
              >
                See Signature Routes
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-white/70">
              Private · Discreet · Waitlist-based
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
