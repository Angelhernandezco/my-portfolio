import type { TimelineExperience } from "@/app/types/experience";

interface ExperienceCardProps {
  experience: TimelineExperience;
}
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-12 lg:pl-16">
      {/* Timeline dot */}
      <div className="absolute left-0 lg:left-[5px] top-2 w-4 h-4 rounded-full bg-blue-700 border-3 border-hero"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-3">
          <div>
            <h3 className="text-xl lg:text-lg font-bold text-blue-700">
              {experience.position}
            </h3>

            <p className="text-lg lg:text-base font-semibold opacity-90">
              {experience.company}
            </p>

            <p className="text-sm opacity-60">
              {experience.location}
            </p>
          </div>

          <div className="text-sm opacity-70">
            <p className="font-medium">{experience.status} ({experience.startDate} – {experience.endDate})</p>
          </div>

          {/* Technology badges */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-3 py-1 text-xs font-medium bg-stone-500 text-white  rounded-full border hover:bg-stone-700  transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right column - Bullet points */}
        <div>
          <ul className="space-y-2 text-sm leading-relaxed opacity-75">
            {experience.description.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

