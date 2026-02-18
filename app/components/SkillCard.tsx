"use client";

import type { Skill } from "@/app/types/skills";

interface SkillCardProps {
  skill: Skill;
  isHovered: boolean;
  onHover: (skillName: string | null) => void;
  proficiencyLabel: string;
  isMobile: boolean;
}

export function SkillCard({
  skill,
  isHovered,
  onHover,
  proficiencyLabel,
  isMobile,
}: SkillCardProps) {
  const IconComponent = skill.icon;

  const handleClick = () => {
    if (isMobile) {
      onHover(isHovered ? null : skill.name);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      onHover(skill.name);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      onHover(null);
    }
  };

  return (
    <div
      className="skill-card group relative aspect-square w-full max-w-[90px] md:max-w-[100px] lg:max-w-[112px] xl:max-w-[124px] mx-auto flex flex-col items-center justify-center cursor-pointer rounded-full border-2 border-current transition-all duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        opacity: isHovered ? 0.7 : 1,
      }}
    >
      {/* Fondo hover/clic */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full bg-current opacity-10 transition-opacity duration-300" />
      )}

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {!isHovered ? (
          <>
            {/* Icon */}
            <IconComponent
              className="mb-2 text-3xl sm:text-4xl transition-colors duration-300"
              style={{ color: skill.color }}
            />
            {/* Nombre */}
            <div className="text-xs sm:text-sm font-medium text-center leading-tight px-1">
              {skill.name}
            </div>
          </>
        ) : (
          <>
            {/* Nivel de proficiencia */}
            <div className="text-2xl sm:text-4xl font-bold">
              {skill.proficiency}%
            </div>
            <div className="text-xs sm:text-sm mt-2 text-center leading-tight">
              {proficiencyLabel}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
