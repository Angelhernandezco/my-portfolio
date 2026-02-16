import type { TimelineExperience } from "@/app/types/experience";

interface ExperienceCardProps {
  experience: TimelineExperience;
}
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-12 lg:pl-16">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left column */}
        <div className="space-y-2">
          <h3 className="text-xl lg:text-lg font-semibold text-blue-400">
            {experience.position}
          </h3>

          <p className="text-lg lg:text-base font-semibold text-white">
            {experience.company}
          </p>

          <p className="text-sm text-white/50">
            {experience.status ?? `${experience.startDate} - ${experience.endDate}`}
          </p>
        </div>

        {/* Right column - Paragraph style */}
        <div>
          <p className="text-sm leading-relaxed text-white/70">
            {experience.description.join(". ")}.
          </p>
        </div>
      </div>
    </div>
  );
}

