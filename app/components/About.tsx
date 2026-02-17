"use client";

import Image from "next/image";
import type { AboutContent, TimelineItem } from "@/app/types/about";

interface AboutProps {
  content: AboutContent;
  title: string;
}

export function About({ content, title }: AboutProps) {
  return (
    <section id="about" className="min-h-screen pt-24 pb-6  flex items-center w-full bg-hero text-ink transition-colors duration-500 overflow-y-auto lg:overflow-hidden" data-snap>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 h-full flex items-center">
        {/* Grid responsivo: 1 columna en mobile, 5 en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-12 w-full">
          {/* Columna: Foto */}
          <div className="hidden lg:flex justify-center lg:justify-start lg:col-span-1">
            <div className="avatar">
              <Image
                src="/portrait.jpeg"
                alt="Angel Hernandez"
                width={150}
                height={150}
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* Columna: Texto */}
          <div className="flex flex-col space-y-8 lg:space-y-6 lg:col-span-4">
            {/* Secciones de texto */}
            <div className="space-y-8">
              {/* About Me */}
              <div className="space-y-3">
                <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                  {title}
                </h2>
                <div className="h-1 w-32 bg-current opacity-30"></div>
              </div>

              {content.aboutText.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg lg:text-sm leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}

              {/* What sets me apart */}
              <div className="space-y-2 lg:space-y-2 mt-6 lg:mt-4">
                <h3 className="text-2xl sm:text-3xl lg:text-xl font-bold">
                  {title === "ABOUT ME" ? "What sets me apart?" : "¿Qué me hace diferente?"}
                </h3>
                <div className="h-1 w-32 bg-current opacity-30"></div>

                {content.whatSetsText.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg lg:text-sm leading-relaxed text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Columna: Timeline */}
          <div className="flex flex-col justify-center lg:col-span-2">
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-6 sm:left-8 lg:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-current to-transparent opacity-30"></div>

              {/* Items de timeline */}
              <div className="space-y-8 sm:space-y-12 lg:space-y-6">
                {content.timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} total={content.timeline.length} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  total: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <div className="relative pl-24 sm:pl-32 lg:pl-20">
      {/* Círculo del timeline */}
      <div
        className="absolute left-0 sm:left-2 lg:left-0 top-1 w-12 h-12 sm:w-16 sm:h-16 lg:w-10 lg:h-10 rounded-full flex items-center justify-center border-4 transition-transform duration-300 hover:scale-110"
        style={{
          backgroundColor: item.color,
          borderColor: "currentColor",
          opacity: 0.9,
        }}
      >
        <div className="text-white text-sm sm:text-base lg:text-xs font-bold text-center">
          {index + 1}
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-0.5 lg:space-y-0">
        <p className="text-sm sm:text-base lg:text-sm font-semibold opacity-70">{item.year}</p>
        <h4 className="text-lg sm:text-xl lg:text-base font-bold">{item.title}</h4>
        <p className="text-base sm:text-lg lg:text-sm font-semibold" style={{ color: item.color }}>
          {item.subtitle}
        </p>
        <p className="text-sm sm:text-base lg:text-sm opacity-75">{item.description}</p>
      </div>
    </div>
  );
}
