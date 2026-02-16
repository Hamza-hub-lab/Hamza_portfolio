"use client"

import Image from "next/image"
import { SectionHeader } from "./section-header"
import { ABOUT_TEXT } from "@/lib/portfolio-data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const [gridRef, gridVisible] = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about" className="border-t border-border bg-background py-[var(--section-pad)]" aria-label="About me">
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <SectionHeader
          eyebrow="About"
          title="About Me"
          lead="A focused, engineering-first profile with clean presentation and space for future projects."
        />

        <div
          ref={gridRef}
          className={cn(
            "mt-8 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 items-center opacity-0",
            gridVisible && "animate-fade-up"
          )}
          style={{ animationDelay: "0.15s" }}
        >
          {/* Portrait */}
          <div className="relative min-h-[320px] rounded-lg border border-border overflow-hidden shadow-lg">
            <Image
              src="/AboutMe.png"
              alt="Portrait of Yazid Hamza"
              fill
              className="object-cover"
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>

          {/* About text */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-md">
            <p className="text-foreground leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
