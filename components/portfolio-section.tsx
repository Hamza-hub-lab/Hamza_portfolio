"use client"

import { SectionHeader } from "./section-header"
import { ScrollCarousel } from "./scroll-carousel"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioSectionProps {
  id: string
  eyebrow: string
  title: string
  lead: string
  items: PortfolioItem[]
  centered?: boolean
}

export function PortfolioSection({
  id,
  eyebrow,
  title,
  lead,
  items,
  centered,
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      className="border-t border-border bg-background py-[var(--section-pad)]"
      aria-label={title}
    >
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} />
        <ScrollCarousel items={items} centered={centered} />
      </div>
    </section>
  )
}
