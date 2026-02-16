import type { TimelineExperience } from "@/app/types/experience";

interface ExperienceCardProps {
  experience: TimelineExperience;
}
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-12 lg:pl-16">
      {/* Timeline dot */}
      <div className="absolute left-0 lg:left-[5px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-hero"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left column */}
        <div className="space-y-2">
          <h3 className="text-xl lg:text-lg font-bold text-blue-500">
            {experience.position}
          </h3>

          <p className="text-lg lg:text-base font-semibold opacity-90">
            {experience.company}
          </p>

          <p className="text-sm opacity-60">
            {experience.status ?? `${experience.startDate} - ${experience.endDate}`}
          </p>
        </div>

        {/* Right column - Paragraph style */}
        <div>
          <p className="text-sm leading-relaxed opacity-75">
            {experience.description.join(". ")}.
          </p>
        </div>
      </div>
    </div>
  );
}

