import type { Skill } from "@/app/types/skills";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiPython,
  SiGraphql,
  SiAmazon,
  SiDocker,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";

export const copy = {
  es: {
    role: "FULL STACK CAPABLE",
    nav: ["Proyectos", "Sobre mi", "Contacto"],
    maker: "CREADOR DE COSAS CON\nPASION Y EXCELENCIA",
    skillsTitle: "HABILIDADES",
    skillsSubtitle:
      "PASA EL MOUSE SOBRE UNA HABILIDAD PARA VER EL NIVEL DE PROFICIENCIA",
  },
  en: {
    role: "FULL STACK CAPABLE",
    nav: ["Projects", "About", "Contact"],
    maker: "MAKER OF THINGS WITH\nPASSION AND EXCELLENCE",
    skillsTitle: "SKILLS",
    skillsSubtitle: "HOVER OVER A SKILL FOR CURRENT PROFICIENCY",
  },
} as const;

export const skills: Skill[] = [
  { name: "React", icon: SiReact, proficiency: 95, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, proficiency: 90, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 90, color: "#000000" },
  { name: "Tailwind", icon: SiTailwindcss, proficiency: 95, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, proficiency: 95, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, proficiency: 85, color: "#339933" },
  { name: "CSS", icon: FaCss3Alt, proficiency: 90, color: "#1572B6" },
  { name: "HTML", icon: FaHtml5, proficiency: 95, color: "#E34C26" },
  { name: "MySQL", icon: FaDatabase, proficiency: 80, color: "#00758F" },
  { name: "MongoDB", icon: SiMongodb, proficiency: 80, color: "#13AA52" },
  { name: "Firebase", icon: SiFirebase, proficiency: 85, color: "#FFCA28" },
  { name: "Git", icon: SiGit, proficiency: 90, color: "#F1502F" },
  { name: "Python", icon: SiPython, proficiency: 75, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, proficiency: 80, color: "#336791" },
  { name: "GraphQL", icon: SiGraphql, proficiency: 75, color: "#E10098" },
  { name: "AWS", icon: SiAmazon, proficiency: 70, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, proficiency: 70, color: "#2496ED" },
  { name: "REST API", icon: SiNextdotjs, proficiency: 90, color: "#000000" },
];
