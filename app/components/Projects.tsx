"use client";

import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/app/types/projects";

interface ProjectsProps {
  projects: Project[];
  title: string;
}

export function Projects({ projects, title }: ProjectsProps) {
  return (
    <section
      className="min-h-screen lg:h-[calc(100vh-80px)] w-full bg-hero text-ink transition-colors duration-500 dark:bg-hero-dark dark:text-ink-dark overflow-y-auto lg:overflow-hidden"
      data-snap
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-32">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-12 lg:mb-16">
          <h2 className="hero-title">{title}</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-lg overflow-hidden border border-current border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-current dark:hover:shadow-opacity-20">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-current bg-opacity-5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>

        {/* Description */}
        <p className="text-sm sm:text-base opacity-75 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm font-semibold bg-current bg-opacity-10 rounded-full border border-current border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-current border-opacity-20">
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-current bg-opacity-10 hover:bg-opacity-20 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              <FiGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.links.preview && (
            <a
              href={project.links.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-current bg-opacity-10 hover:bg-opacity-20 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              <FiExternalLink className="w-4 h-4" />
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
