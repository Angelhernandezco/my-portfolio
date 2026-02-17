"use client";

import Image from "next/image";
import { FallingText } from "./FallingText";

interface HeroSectionProps {
  titleLine1: string;
  titleLine2: string;
  role: string;
  maker: string;
  animateFallingText?: boolean;
}

export function HeroSection({ titleLine1, titleLine2, role, maker, animateFallingText = true }: HeroSectionProps) {
  return (
    <main id="hero" className="flex min-h-screen w-full items-center overflow-hidden pt-24 md:pt-30" data-snap>
      <div className="mx-auto grid w-full gap-10 px-6 sm:px-10 md:grid-cols-[1.1fr_0.9fr]">
        <section className="hero-rise space-y-6">
          <div className="space-y-4">
            <h1 className="hero-title">
              <FallingText text={titleLine1} delay={1.1} enabled={animateFallingText} />
              <span className="block">
                <FallingText text={titleLine2} delay={1.4} enabled={animateFallingText} />
              </span>
            </h1>
            <p className="hero-subtitle animate-soft-rise ">{role}</p>
          </div>
          <p className="hero-tag animate-soft-rise whitespace-pre-line mt-4 md:mt-12">
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
          <h2 className="hero-name hero-rise text-right mb-10">
            <FallingText text="ANGEL" delay={1.3} enabled={animateFallingText} />
            <span className="block">
              <FallingText text="HERNANDEZ" delay={1.55} enabled={animateFallingText} />
            </span>
          </h2>
        </section>
      </div>
    </main>
  );
}
