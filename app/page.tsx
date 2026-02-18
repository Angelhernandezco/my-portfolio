"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Contact } from "@/app/components/Contact";
import { copy, skills, projects, about, experiences } from "@/app/utils/content";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const storedLang = window.localStorage.getItem("lang");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    const initialDark = storedTheme
      ? storedTheme === "dark"
      : prefersDark;

    setIsDark(initialDark);
    setLang(storedLang === "en" ? "en" : "en");
    setIsHydrated(true);
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
    <main className="scroll-container h-screen overflow-y-scroll bg-hero text-ink transition-colors duration-500">
      <div className="page-reveal" aria-hidden="true" />
      <Header
        isDark={isDark}
        lang={lang}
        onThemeToggle={() => setIsDark((prev) => !prev)}
        onLangToggle={() => setLang((prev) => (prev === "es" ? "en" : "es"))}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((prev) => !prev)}
      />
      <HeroSection
        titleLine1={content.titleLine1}
        titleLine2={content.titleLine2}
        role={content.role}
        maker={content.maker}
        animateFallingText={isHydrated}
      />
      <About
        content={about.find((item) => item.title === lang) || about[0]}
        title={content.aboutTitle}
      />
      <Experience experiences={experiences} lang={lang} title={content.experienceTitle} />
      {/* <Projects projects={projects} title={content.projectsTitle} /> */}
      <Skills
        skills={skills}
        title={content.skillsTitle}
        subtitle={content.skillsSubtitle}
        subtitleMobile={content.skillsSubtitleMobile}
        proficiencyLabel={content.proficiencyLabel}
      />
      <Contact
        title={content.contactTitle}
        subtitle={content.contactSubtitle}
        phone={content.phone}
        email={content.email}
        location={content.location}
        linkedin={content.linkedin}
        github={content.github}
        instagram={content.instagram}
        formLabels={{
          name: content.formName,
          email: content.formEmail,
          subject: content.formSubject,
          message: content.formMessage,
          submit: content.formSubmit,
        }}
      />
    </main>
  );
}
