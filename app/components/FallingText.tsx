"use client";

import { useEffect, useRef } from "react";
import { animateFallingText } from "@/app/utils/animations";

interface FallingTextProps {
  text: string;
  delay?: number;
  enabled?: boolean;
}

export function FallingText({ text, delay = 0, enabled = true }: FallingTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedEver = useRef(false);
  const lastTextRef = useRef<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔹 Si aún no está habilitado (ej. antes de hidratar idioma/tema) → render plano
    if (!enabled) {
      if (lastTextRef.current !== text) {
        containerRef.current.innerText = text;
        lastTextRef.current = text;
      }
      return;
    }

    // 🔹 Si ya se animó y el texto no cambió → no tocar el DOM (evita issues con StrictMode)
    if (hasAnimatedEver.current && lastTextRef.current === text) {
      return;
    }

    // 🔹 Si ya se animó → solo render plano (sin spans, sin animación)
    if (hasAnimatedEver.current) {
      containerRef.current.innerText = text;
      lastTextRef.current = text;
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

    lastTextRef.current = text;
    hasAnimatedEver.current = true;
    animateFallingText(containerRef.current, delay);
    hasAnimatedEver.current = true;
  }, [text, delay, enabled]);

  return (
    <span
      aria-label={text}
      className="falling-text"
      ref={containerRef}
    >
      {text}
    </span>
  );
}
