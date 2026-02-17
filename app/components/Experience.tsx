"use client";

import type { TimelineExperience } from "@/app/types/experience";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceProps {
  experiences: Array<{ lang: "es" | "en"; data: TimelineExperience[] }>;
  lang: "es" | "en";
  title: string;
}

export function Experience({ experiences, lang, title }: ExperienceProps) {
  const filteredExperiences = experiences.find((exp) => exp.lang === lang)?.data || [];
  return (
    <section id="experience"
      className="min-h-screen lg:h-[calc(100vh-80px)] w-full bg-hero text-ink transition-colors duration-500 overflow-y-auto lg:overflow-hidden"
      data-snap
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-32">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-16 lg:mb-20">
          <h2 className="hero-title">{title}</h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl">
          {/* Vertical line */}
          <div className="absolute left-2 lg:left-3 top-0 bottom-0 w-0.5 bg-current opacity-20"></div>

          <div className="space-y-16 lg:space-y-20">
            {filteredExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
