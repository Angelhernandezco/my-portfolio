"use client";

import { useState, useEffect } from "react";
import type { Skill } from "@/app/types/skills";
import { SkillCard } from "./SkillCard";

interface SkillsProps {
  skills: Skill[];
  title: string;
  subtitle: string;
  subtitleMobile: string;
  proficiencyLabel: string;
}

export function Skills({ skills, title, subtitle, subtitleMobile, proficiencyLabel }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil (pantalla menor a 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Limpiar skill seleccionada cuando cambia entre móvil y desktop
    setHoveredSkill(null);
  }, [isMobile]);

  return (
    <section id="skills" className="flex min-h-screen pt-24 pb-6 w-full flex-col items-center justify-center bg-hero text-ink transition-colors duration-500 overflow-y-auto lg:overflow-hidden" data-snap>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 ">
        <div className="space-y-4 text-center mb-12">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{isMobile ? subtitleMobile : subtitle}</p>
        </div>

        {/* Grid responsivo: 3 columnas en mobile, 7 en laptop */}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-5 xl:grid-cols-7 xl:gap-5">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isHovered={hoveredSkill === skill.name}
              onHover={setHoveredSkill}
              proficiencyLabel={proficiencyLabel}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
