import type { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  proficiency: number; // 0-100
  color: string; // Color hex para los iconos
}
