"use client";

import { useEffect, useRef } from "react";
import { animateMobileMenu } from "@/app/utils/animations";
import { copy } from "@/app/utils/content";

interface HeaderProps {
  isDark: boolean;
  lang: "es" | "en";
  onThemeToggle: () => void;
  onLangToggle: () => void;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export function Header({
  isDark,
  lang,
  onThemeToggle,
  onLangToggle,
  mobileMenuOpen,
  onMobileMenuToggle,
}: HeaderProps) {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);
  const content = copy[lang];

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      animateMobileMenu(mobileMenuRef.current, mobileMenuOpen, ".mobile-menu-item");
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-hero/80 backdrop-blur dark:bg-hero-dark/80 h-20">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-8 text-[15px] font-semibold tracking-wide sm:px-10">
        <span className={isFirstRender.current ? "animate-soft-rise" : ""}>Angel Hernandez</span>
        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <a key={item} href="#" className={`nav-link ${isFirstRender.current ? "animate-soft-rise" : ""}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className={`toggle-btn ${isFirstRender.current ? "animate-soft-rise" : ""}`}
            onClick={onThemeToggle}
            aria-label="Cambiar tema"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className={`toggle-btn ${isFirstRender.current ? "animate-soft-rise" : ""}`}
            onClick={onLangToggle}
            aria-label="Cambiar idioma"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            className={`md:hidden flex flex-col gap-1.5 ${isFirstRender.current ? "animate-soft-rise" : ""}`}
            onClick={onMobileMenuToggle}
            aria-label="Abrir menú"
          >
            <span
              className={`h-0.5 w-5 bg-current transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <nav
        ref={mobileMenuRef}
        className="md:hidden h-0 overflow-hidden opacity-0"
      >
        <div className="flex flex-col gap-4 px-6 pb-6 sm:px-10">
          {content.nav.map((item) => (
            <a
              key={item}
              href="#"
              className="mobile-menu-item nav-link"
              onClick={() => onMobileMenuToggle()}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
