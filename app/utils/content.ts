import type { Skill } from "@/app/types/skills";
import type { AboutContent } from "@/app/types/about";
import type { Project } from "@/app/types/projects";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiPython,
  SiSap,
  SiPrisma,
  SiExpress,
  SiFastapi,
  SiSass,
  SiMysql,
  SiAngular,
  SiSpring,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

export const copy = {
  es: {
    titleLine1: "INGENIERO",
    titleLine2: "DE SOFTWARE",
    role: "— PERFIL FULL STACK",
    nav: ["Proyectos", "Sobre mi", "Contacto"],
    maker: "CREADOR DE COSAS CON\nPASION Y EXCELENCIA",
    projectsTitle: "PROYECTOS",
    skillsTitle: "HABILIDADES",
    skillsSubtitle:
      "PASA EL MOUSE SOBRE UNA HABILIDAD PARA VER EL NIVEL DE PROFICIENCIA",
    proficiencyLabel: "Proficiencia",
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
    titleLine1: "SOFTWARE",
    titleLine2: "ENGINEER",
    role: "— FULL STACK CAPABLE",
    nav: ["Projects", "About", "Contact"],
    maker: "MAKER OF THINGS WITH\nPASSION AND EXCELLENCE",
    projectsTitle: "PROJECTS",
    skillsTitle: "SKILLS",
    skillsSubtitle: "HOVER OVER A SKILL FOR CURRENT PROFICIENCY",
    proficiencyLabel: "Proficiency",
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
  { name: "Java", icon: FaJava, proficiency: 50, color: "#007396" },
  { name: "Python", icon: SiPython, proficiency: 70, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, proficiency: 80, color: "#F7DF1E" },
  {
    name: "Spring Boot",
    icon: SiSpring,
    proficiency: 40,
    color: "#6DB33F",
  },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 40, color: "#000000" },
  { name: "React", icon: SiReact, proficiency: 70, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, proficiency: 80, color: "#DD0031" },
  { name: "MySQL", icon: SiMysql, proficiency: 80, color: "#00758F" },
  { name: "MS SQL", icon: DiMsqlServer, proficiency: 70, color: "#CC2927" },
  { name: "PostgreSQL", icon: SiPostgresql, proficiency: 60, color: "#336791" },
  { name: "HTML5", icon: FaHtml5, proficiency: 90, color: "#E34C26" },
  { name: "CSS3", icon: FaCss3Alt, proficiency: 90, color: "#1572B6" },
  { name: "Sass", icon: SiSass, proficiency: 70, color: "#CD6799" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    proficiency: 60,
    color: "#06B6D4",
  },
  { name: "Git", icon: SiGit, proficiency: 85, color: "#F1502F" },
  { name: "FastAPI", icon: SiFastapi, proficiency: 80, color: "#009688" },
  { name: "Firebase", icon: SiFirebase, proficiency: 60, color: "#FFCA28" },
  { name: "TypeScript", icon: SiTypescript, proficiency: 70, color: "#3178C6" },
  { name: "Express.js", icon: SiExpress, proficiency: 70, color: "#000000" },
  { name: "Prisma", icon: SiPrisma, proficiency: 70, color: "#0C344B" },
  { name: "SAP", icon: SiSap, proficiency: 70, color: "#0FAAFF" },
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

export const projects: Project[] = [
  {
    id: "project-1",
    title: "SVGL - A beautiful library with SVG logos",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    image: "/projects/svgl.png",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    links: {
      code: "https://github.com",
      preview: "https://svgl.app",
    },
  },
  {
    id: "project-2",
    title: "AdventJS - Retos de programación con JavaScript y TypeScript",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    image: "/projects/adventjs.png",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    links: {
      preview: "https://adventjs.dev",
    },
  },
];
