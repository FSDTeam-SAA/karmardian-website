import Image from "next/image"

// Dummy data for the "Who we serve" section-
const whoWeServeData = {
  title: "Who we serve",
  features: [
    "Founders, creatives, and HNW travelers who hate tourist traps",
    "Last-minute, VIP, and discreet arrangements via airline ops expertise",
    "Design-forward stays with nightlife woven in — never tacked on",
  ],
  ctaText: "Explore membership",
  ctaLink: "/membership",
  imageUrl: "/images/kar-we.png",
} 

export function WeServe() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={whoWeServeData.imageUrl || "/placeholder.svg"}
              alt="Abstract gradient background"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight">
              {whoWeServeData.title}
            </h2>

            <ul className="space-y-4">
              {whoWeServeData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white text-lg leading-relaxed">
                  <span className="text-white mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* <Button
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent hover:bg-white/10 hover:text-white text-white px-8 py-6 text-base font-medium"
            >
              {whoWeServeData.ctaText}
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
