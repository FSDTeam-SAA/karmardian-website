const membershipTiers = [
  {
    id: 1,
    name: "Concierge",
    description: "On-demand planning and changes, 2 active trips, text-first.",
    price: "From $2,500/trip",
    featured: false,
  },
  {
    id: 2,
    name: "Black",
    description: "Priority holds, private events, and ultra-rare routes. 24/7.",
    price: "POA",
    featured: true,
  },
  {
    id: 3,
    name: "Studio",
    description:
      "Brand and content trips for hotels, restaurants, and launches.",
    price: "From $5,000/project",
    featured: false,
  },
];

const tags = ["LA → World", "Swiss-leaning", "Nightlife-native"];

export function MembershipSection() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-12">
          Membership
        </h2>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {membershipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 ${
                tier.featured
                  ? "border-2 border-teal-500 bg-black"
                  : "border border-white/10 bg-black"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {tier.name}
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                {tier.description}
              </p>
              <p className="text-white font-medium">{tier.price}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-white/60 mb-8">
          Transparent planning fees. No kickbacks. Your taste, amplified.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-6 py-2 rounded-full border border-dashed border-white/30 text-white/80 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8">
            About Rare Routes
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 max-w-4xl leading-relaxed">
            Founded in Los Angeles by an airline station manager, Rare Routes
            blends operational access with obsessive curation. Think alpine
            architecture, underground bars, and remote sanctuaries — all
            stitched into seamless, stress-free itineraries.
          </p>
        </div>
      </section>
    </section>
  );
}
