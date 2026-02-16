"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import {
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  ACADEMIC_PROJECT_ITEMS,
  PERSONAL_PROJECT_ITEMS,
  CERTIFICATE_ITEMS,
  CLUB_ITEMS,
} from "@/lib/portfolio-data"

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />

      <PortfolioSection
        id="education"
        eyebrow="Education"
        title="Academic Background"
        lead="Engineering education focused on mechanical and aerospace systems."
        items={EDUCATION_ITEMS}
      />

      <PortfolioSection
        id="experience"
        eyebrow="Career"
        title="Professional Experience"
        lead="Industrial internships in aerospace and chemical engineering sectors."
        items={EXPERIENCE_ITEMS}
      />

      <PortfolioSection
        id="academic-projects"
        eyebrow="Work"
        title="Academic Projects"
        lead="Engineering projects spanning design, simulation, and manufacturing across aerospace and mechanical systems."
        items={ACADEMIC_PROJECT_ITEMS}
      />

      <PortfolioSection
        id="personal-projects"
        eyebrow="Build"
        title="Personal Projects"
        lead="Independent engineering projects exploring advanced simulation and aerospace systems."
        items={PERSONAL_PROJECT_ITEMS}
        centered
      />

      <PortfolioSection
        id="certificates"
        eyebrow="Achievements"
        title="Certificates"
        lead="Professional certifications and training achievements."
        items={CERTIFICATE_ITEMS}
      />

      <PortfolioSection
        id="clubs"
        eyebrow="Community"
        title="Extracurricular Clubs"
        lead="Active participation in aerospace and astronautics student organizations."
        items={CLUB_ITEMS}
        centered
      />

      <SkillsSection />
      <Footer />
    </>
  )
}
