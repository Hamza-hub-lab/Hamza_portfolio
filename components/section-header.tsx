"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow: string
  title: string
  lead?: string
}

export function SectionHeader({ eyebrow, title, lead }: SectionHeaderProps) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={cn("opacity-0", isVisible && "animate-fade-up")}>
      <div className="inline-flex items-center gap-2.5 text-sm tracking-[0.12em] uppercase text-muted-foreground">
        <span className="block h-px w-6 bg-gradient-to-r from-primary to-transparent" />
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {lead && (
        <p className="mt-3 text-muted-foreground max-w-[70ch] leading-relaxed">{lead}</p>
      )}
    </div>
  )
}
