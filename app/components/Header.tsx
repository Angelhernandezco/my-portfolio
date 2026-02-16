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

  const getScrollTarget = (navItem: string): string => {
    const targets: Record<string, string> = {
      "Sobre mi": "about",
      About: "about",
      "Experiencia": "experience",
      Experience: "experience",
      "Proyectos": "projects",
      Projects: "projects",
      "Habilidades": "skills",
      Skills: "skills",
      "Contacto": "contact",
      Contact: "contact",
    };
    return targets[navItem] || "";
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, navItem: string) => {
    e.preventDefault();
    const targetId = getScrollTarget(navItem);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (mobileMenuOpen) {
      onMobileMenuToggle();
    }
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      animateMobileMenu(mobileMenuRef.current, mobileMenuOpen, ".mobile-menu-item");
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-9999 bg-hero/80 backdrop-blur dark:bg-hero-dark/80 h-20">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-8 text-[15px] font-semibold tracking-wide sm:px-10">
        <button
          onClick={() => {
            const element = document.getElementById("hero");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Ir al inicio"
        >
          <span className={isFirstRender.current ? "animate-soft-rise" : ""}>Angel Hernandez</span>
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <a
              key={item}
              href={`#${getScrollTarget(item)}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`nav-link ${isFirstRender.current ? "animate-soft-rise" : ""}`}
            >
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
        className="md:static fixed md:h-0 h-0 overflow-hidden opacity-0 left-0 right-0 w-full md:top-auto top-20 z-50 bg-hero dark:bg-hero-dark md:bg-transparent"
      >
        <div className="flex flex-col gap-4 px-6 pb-6 sm:px-10">
          {content.nav.map((item) => (
            <a
              key={item}
              href={`#${getScrollTarget(item)}`}
              onClick={(e) => handleNavClick(e, item)}
              className="mobile-menu-item nav-link"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
