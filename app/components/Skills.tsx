"use client";

import { useState } from "react";
import type { Skill } from "@/app/types/skills";

interface SkillsProps {
  skills: Skill[];
  title: string;
  subtitle: string;
  proficiencyLabel: string;
}

export function Skills({ skills, title, subtitle, proficiencyLabel }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="flex min-h-screen lg:h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-hero text-ink transition-colors duration-500 dark:bg-hero-dark dark:text-ink-dark overflow-y-auto lg:overflow-hidden pt-16" data-snap>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-16 lg:py-0">
        <div className="space-y-4 text-center mb-12">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
        </div>

        {/* Grid responsivo: 3 columnas en mobile, 7 en laptop */}
        <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 xl:gap-5">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isHovered={hoveredSkill === skill.name}
              onHover={setHoveredSkill}
              proficiencyLabel={proficiencyLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
  isHovered: boolean;
  onHover: (skillName: string | null) => void;
  proficiencyLabel: string;
}

function SkillCard({ skill, isHovered, onHover, proficiencyLabel }: SkillCardProps) {
  const IconComponent = skill.icon;

  return (
    <div
      className="skill-card group relative aspect-square w-full max-w-[90px] md:max-w-[100px] lg:max-w-[112px] xl:max-w-[124px] mx-auto flex flex-col items-center justify-center cursor-pointer rounded-full border-2 border-current transition-all duration-300 hover:scale-110"
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
      style={{
        opacity: isHovered ? 0.7 : 1,
      }}
    >
      {/* Fondo hover */}
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
