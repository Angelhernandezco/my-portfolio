"use client";

import Image from "next/image";
import { FallingText } from "./FallingText";

interface HeroSectionProps {
  role: string;
  maker: string;
}

export function HeroSection({ role, maker }: HeroSectionProps) {
  return (
    <main className="flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden pt-30" data-snap>
      <div className="mx-auto grid w-full gap-10 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hero-rise space-y-6">
          <div className="space-y-4">
            <h1 className="hero-title">
              <FallingText text="FRONT-END" delay={1.4} />
              <span className="block">
                <FallingText text="DEVELOPER" delay={1.7} />
              </span>
            </h1>
            <p className="hero-subtitle animate-soft-rise ">{role}</p>
          </div>
          <p className="hero-tag animate-soft-rise whitespace-pre-line mt-12">
            {maker}
          </p>
        </section>

        <section className="relative flex flex-col items-end justify-center gap-10">
          <div className="portrait-frame hero-rise overflow-hidden">
            <Image
              src="/portrait.jpeg"
              alt="Angel Hernandez"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="hero-name hero-rise text-right">
            <FallingText text="ANGEL" delay={1.6} />
            <span className="block">
              <FallingText text="HERNANDEZ" delay={1.85} />
            </span>
          </h2>
        </section>
      </div>
    </main>
  );
}
