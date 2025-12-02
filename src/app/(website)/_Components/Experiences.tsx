"use client";

import { useQuery } from "@tanstack/react-query";

interface ExperienceImage {
  url: string;
  public_id: string;
}

interface Experience {
  _id: string;
  title: string;
  desccription: string; // API তে typo আছে তাই এটিই রাখা হয়েছে
  image: ExperienceImage;
  v: number;
}

interface ExperiencesResponse {
  success: boolean;
  message: string;
  data: Experience[];
}

export function SignatureExperiences() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fetch experiences from API
  const {
    data: experienceData,
    isLoading,
    isError,
  } = useQuery<ExperiencesResponse>({
    queryKey: ["experiences"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/experience`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch experiences");
      }
      return res.json(); // full JSON response
    },
  });

  if (isLoading) {
    return (
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-white text-center">
          Loading experiences...
        </div>
      </section>
    );
  }

  if (isError || !experienceData?.success) {
    return (
      <section className="bg-black lg:py-20 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-white text-center">
          Failed to load experiences.
        </div>
      </section>
    );
  }

  const experiences = experienceData.data; // API data array

  return (
    <section id="experiences" className="bg-black lg:py-20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-3xl font-serif font-bold text-white lg:mb-12 mb-6">
          Signature experiences
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${experience.image?.url})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {experience.title}
                </h3>

                {/* Description clickable */}
                <p
                  onClick={() => handleScroll("start-planning")}
                  className="text-gray-400 text-sm leading-relaxed mb-4 cursor-pointer hover:text-white transition-colors"
                  dangerouslySetInnerHTML={{
                    __html: experience.desccription || "",
                  }}
                ></p>

                {/* Link clickable */}
                <button
                  onClick={() => handleScroll("start-planning")}
                  className="text-teal-500 hover:text-teal-400 text-sm font-medium"
                >
                  Request sample itinerary
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Destination List */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-sm">
          {/* You can still keep static destinations or remove if needed */}
        </div>
      </div>
    </section>
  );
}
