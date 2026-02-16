import type { Skill } from "@/app/types/skills";
import type { AboutContent } from "@/app/types/about";
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
    aboutTitle: "SOBRE MÍ",
    contactTitle: "CONTACTO",
    contactSubtitle: "Tengo justo lo que necesitas. Hablemos.",
    phone: "+52 (668) 241 9119",
    email: "covarrubias0angel@gmail.com",
    location: "Sinaloa, México",
    formName: "Nombre",
    formEmail: "Email",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formSubmit: "Enviar",
    linkedin:
      "https://linkedin.com/in/ángel-santiago-hernández-covarrubias-384470338",
    github: "https://github.com/angelhernandezco",
    instagram: "https://instagram.com/angelhernandezco",
  },
  en: {
    role: "FULL STACK CAPABLE",
    nav: ["Projects", "About", "Contact"],
    maker: "MAKER OF THINGS WITH\nPASSION AND EXCELLENCE",
    skillsTitle: "SKILLS",
    skillsSubtitle: "HOVER OVER A SKILL FOR CURRENT PROFICIENCY",
    aboutTitle: "ABOUT ME",
    contactTitle: "CONTACT",
    contactSubtitle: "I have got just what you need. Lets talk.",
    phone: "+52 (668) 241 9119",
    email: "covarrubias0angel@gmail.com",
    location: "Sinaloa, Mexico",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Submit",
    linkedin:
      "https://linkedin.com/in/ángel-santiago-hernández-covarrubias-384470338",
    github: "https://github.com/angelhernandezco",
    instagram: "https://instagram.com/angelhernandezco",
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

export const about: AboutContent[] = [
  {
    title: "es",
    aboutText: [
      "Soy estudiante de Ingeniería en Software en el 6º semestre de la Universidad Autónoma de Sinaloa, apasionado por la programación, especialmente en desarrollo web y móvil.",
      "Disfruto construir soluciones eficientes y escalables, ya sea una aplicación móvil con Swift o Kotlin, o una aplicación web con React & Tailwind CSS para el frontend y Node.js & TypeScript para el backend.",
    ],
    whatSetsText: [
      "Tengo experiencia práctica construyendo aplicaciones móviles con Swift y Kotlin, con integración de bases de datos en la nube.",
      "He gestionado un equipo para desarrollar un sitio web educativo interactivo para niños y adolescentes, asegurando una experiencia fácil de usar desde el diseño hasta el despliegue. Destaco en entornos colaborativos y disfruto enfrentando desafíos que fortalecen mis habilidades.",
    ],
    timeline: [
      {
        year: "2022",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Ingeniería en Software",
        description: "Inicio de carrera universitaria",
        color: "#10b981",
      },
      {
        year: "Feb 2025 - Dic 2025",
        title: "SL Agrícola",
        subtitle: "Software Engineering Intern",
        description: "Practicante de Ingeniería de Software (Part-Time) en UAS",
        color: "#f59e0b",
      },
      {
        year: "Sep 2025 - Mar 2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Software Development Intern",
        description: "Practicante de Desarrollo de Software (Servicio Social)",
        color: "#8b5cf6",
      },
      {
        year: "2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Egresado",
        description: "Graduación esperada",
        color: "#3b82f6",
      },
    ],
  },
  {
    title: "en",
    aboutText: [
      "I'm a Software Engineering student in my 6th semester at Universidad Autónoma de Sinaloa, passionate about programming, especially in web and mobile development.",
      "I enjoy building efficient and scalable solutions, whether it's a mobile app with Swift or Kotlin, or a web app with React & Tailwind CSS for the frontend and Node.js & TypeScript for the backend.",
    ],
    whatSetsText: [
      "I have hands-on experience building Mobile Apps with Swift and Kotlin, with cloud database integration.",
      "I've managed a team to develop an engaging educational website for children and adolescents, ensuring a user-friendly experience from design to deployment. I thrive in collaborative environments and enjoy tackling challenges that push my skills further.",
    ],
    timeline: [
      {
        year: "2022",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Software Engineering",
        description: "Started university career",
        color: "#10b981",
      },
      {
        year: "Feb 2025 - Dec 2025",
        title: "SL Agrícola",
        subtitle: "Software Engineering Intern",
        description: "Part-Time Internship at UAS",
        color: "#f59e0b",
      },
      {
        year: "Sep 2025 - Mar 2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Software Development Intern",
        description: "Social Service Internship",
        color: "#8b5cf6",
      },
      {
        year: "2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Graduate",
        description: "Expected graduation",
        color: "#3b82f6",
      },
    ],
  },
];
