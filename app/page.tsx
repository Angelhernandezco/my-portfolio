"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { copy } from "@/app/utils/content";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const storedLang = window.localStorage.getItem("lang");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    const initialDark = storedTheme
      ? storedTheme === "dark"
      : prefersDark;

    setIsDark(initialDark);
    setLang(storedLang === "en" ? "en" : "es");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const content = copy[lang];

  return (
    <div className="min-h-screen bg-hero text-ink transition-colors duration-500 dark:bg-hero-dark dark:text-ink-dark">
      <div className="page-reveal" aria-hidden="true" />
      <Header
        isDark={isDark}
        lang={lang}
        onThemeToggle={() => setIsDark((prev) => !prev)}
        onLangToggle={() => setLang((prev) => (prev === "es" ? "en" : "es"))}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((prev) => !prev)}
      />
      <HeroSection role={content.role} maker={content.maker} />
    </div>
  );
}
