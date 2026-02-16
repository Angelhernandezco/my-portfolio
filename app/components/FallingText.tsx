"use client";

import { useEffect, useRef } from "react";
import { animateFallingText } from "@/app/utils/animations";

interface FallingTextProps {
  text: string;
  delay?: number;
}

export function FallingText({ text, delay = 0 }: FallingTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedEver = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔹 Si ya se animó → solo render plano (sin spans, sin animación)
    if (hasAnimatedEver.current) {
      containerRef.current.innerText = text;
      return;
    }

    // 🔹 Primera vez → animación
    const characters = text.split("");
    containerRef.current.innerHTML = characters
      .map(
        (char) =>
          `<span class="inline-block" style="opacity: 0; transform: translateY(-30px);">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    animateFallingText(containerRef.current, delay);
    hasAnimatedEver.current = true;
  }, [text, delay]);

  return (
    <span
      aria-label={text}
      className="falling-text"
      ref={containerRef}
    />
  );
}
