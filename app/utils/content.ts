import type { Skill } from "@/app/types/skills";
import type { AboutContent } from "@/app/types/about";
import type { Project } from "@/app/types/projects";
import type { TimelineExperience } from "@/app/types/experience";
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
    nav: ["Sobre mi", "Experiencia", "Habilidades", "Contacto"],
    maker: "CREADOR DE COSAS CON\nPASION Y EXCELENCIA",
    projectsTitle: "PROYECTOS",
    skillsTitle: "HABILIDADES",
    skillsSubtitle:
      "PASA EL MOUSE SOBRE UNA HABILIDAD PARA VER EL NIVEL DE PROFICIENCIA",
    proficiencyLabel: "Proficiencia",
    aboutTitle: "SOBRE MÍ",
    experienceTitle: "EXPERIENCIA LABORAL",
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
    nav: ["About", "Experience", "Skills", "Contact"],
    maker: "MAKER OF THINGS WITH\nPASSION AND EXCELLENCE",
    projectsTitle: "PROJECTS",
    skillsTitle: "SKILLS",
    skillsSubtitle: "HOVER OVER A SKILL FOR CURRENT PROFICIENCY",
    proficiencyLabel: "Proficiency",
    aboutTitle: "ABOUT ME",
    experienceTitle: "WORK EXPERIENCE",
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
  { name: "Java", icon: FaJava, proficiency: 50, color: "#f89820" },
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
      "Soy estudiante de Ingeniería en Software en la Universidad Autónoma de Sinaloa, con un GPA de 3.9 y graduación esperada en 2026. Me apasiona el desarrollo de software, especialmente en aplicaciones web y móviles, y disfruto creando soluciones eficientes y escalables.",
      "Tengo experiencia en gestión de ERP (SAP Business One), desarrollo de Add-Ons personalizados, automatización de procesos internos y construcción de plataformas web internas con Angular y FastAPI, enfocadas en mejorar la eficiencia y la seguridad de los sistemas.",
    ],
    whatSetsText: [
      "Me caracterizo por aprender nuevas tecnologías rápidamente y adaptarme a distintos entornos técnicos, desde frameworks frontend o backend hasta bases de datos y sistemas empresariales como SAP.",
      "He liderado y colaborado en proyectos que requieren atención a la experiencia del usuario, optimización del código y seguridad de datos, demostrando capacidades tanto técnicas como de trabajo en equipo.",
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
        subtitle: "Practicante de Desarrollo de Software",
        description: "Practicante de medio tiempo",
        color: "#f59e0b",
      },
      {
        year: "Sep 2025 - Mar 2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Practicante de Desarrollo de Software",
        description: "Servicio Social en UAS",
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
      "I am a Software Engineering student at Universidad Autónoma de Sinaloa, with a 3.9 GPA and expected graduation in 2026. I am passionate about software development, especially web and mobile applications, and I enjoy building efficient and scalable solutions.",
      "I have experience in ERP management (SAP Business One), developing custom Add-Ons, automating internal processes, and building internal web platforms with Angular and FastAPI, focused on improving system efficiency and security.",
    ],
    whatSetsText: [
      "I am characterized by my ability to quickly learn new technologies and adapt to different technical environments, from frontend and backend frameworks to databases and enterprise systems like SAP.",
      "I've led and collaborated on projects that require attention to user experience, code optimization, and data security, demonstrating both technical expertise and strong teamwork skills.",
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
        description: "Part-Time Internship",
        color: "#f59e0b",
      },
      {
        year: "Sep 2025 - Mar 2026",
        title: "Universidad Autónoma de Sinaloa",
        subtitle: "Software Development Intern",
        description: "Social Service at UAS",
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

export const experiences: TimelineExperience[] = [
  {
    id: "exp-1",
    position: "Practicante de Ingeniería de Software",
    company: "SL Agrícola Ruiz Cortines",
    location: "Sinaloa, México",
    startDate: "Feb 2025",
    endDate: "Dic 2025",
    status: "Tiempo Parcial",
    description: [
      "Gestioné y personalicé SAP Business One ERP mejorando flujos de trabajo internos y manejo de datos empresariales",
      "Desarrollé consultas SQL avanzadas en SAP HANA para soportar reportes y automatización operacional",
      "Creé Add-Ons personalizados de SAP alineados con requerimientos específicos del negocio",
      "Diseñé y desarrollé una plataforma web basada en Angular para centralizar Add-Ons por rol de usuario y empresa",
      "Implementé automatización dinámica de formularios para optimizar procesos internos y reducir input manual",
      "Integré aplicaciones web con servicios backend usando Python y FastAPI",
    ],
    technologies: [
      "SAP Business One",
      "SAP HANA",
      "SQL",
      "Angular",
      "Python",
      "FastAPI",
    ],
  },
  {
    id: "exp-2",
    position: "Practicante de Desarrollo de Software",
    company: "Universidad Autónoma de Sinaloa Los Mochis",
    location: "Sinaloa, México",
    startDate: "Sep 2025",
    endDate: "Mar 2026",
    status: "Servicio Social",
    description: [
      "Contribuí al desarrollo y mejora de la plataforma 'Jornada Universitaria del Conocimiento'",
      "Desarrollé características frontend usando Angular para mejorar usabilidad y navegación",
      "Colaboré en mejoras backend usando Django enfocándome en optimización de código y mantenibilidad",
      "Implementé nuevos módulos de estadísticas para soportar visualización de datos y reportes",
      "Agregué restricciones de acceso y reglas de validación para mejorar seguridad e integridad de datos",
    ],
    technologies: ["Angular", "Django", "Python", "Frontend", "Backend"],
  },
];
