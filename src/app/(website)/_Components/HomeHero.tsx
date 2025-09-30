"use client"

import { Button } from "@/components/ui/button"

export default function HomeHero() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-[calc(100vh)] w-full flex items-center justify-start">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/tour.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
              Prestige travel, minus the predictable.
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Ultra-curated stays and after-dark itineraries across Switzerland and beyond — crafted by an airline
              insider in Los Angeles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-medium"
                onClick={() => handleScroll("start-planning")}
              >
                Start Planning
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-black/20 hover:bg-black/40 hover:text-red-700 text-white px-8 py-6 text-base font-medium backdrop-blur-sm"
                onClick={() => handleScroll("signature-routes")}
              >
                See Signature Routes
              </Button>
            </div>

            <p className="text-sm text-white/70">Private · Discreet · Waitlist-based</p>
          </div>
        </div>
      </section>
    </div>
  )
}
