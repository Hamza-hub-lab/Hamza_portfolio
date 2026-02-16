"use client"

import { SectionHeader } from "./section-header"
import { SKILL_CATEGORIES } from "@/lib/portfolio-data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-background py-[var(--section-pad)]"
      aria-label="Skills"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical Skills"
          lead="Software, theoretical knowledge, and programming expertise applied across projects."
        />

        {SKILL_CATEGORIES.map((category, catIdx) => (
          <SkillCategoryTable key={category.title} category={category} index={catIdx} />
        ))}
      </div>
    </section>
  )
}

function SkillCategoryTable({
  category,
  index,
}: {
  category: (typeof SKILL_CATEGORIES)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "mt-10 opacity-0",
        index === 0 && "mt-8",
        isVisible && "animate-fade-up"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h3 className="font-display text-xl font-bold text-foreground mb-4 tracking-tight">
        {category.title}
      </h3>
      <div className="rounded-lg border border-border overflow-hidden bg-card">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-primary/[0.08] to-accent/[0.06]">
              <th className="text-left py-3 px-4 font-display text-sm font-bold text-foreground border-b border-border w-1/4">
                Skill
              </th>
              <th className="text-left py-3 px-4 font-display text-sm font-bold text-foreground border-b border-border">
                {"Projects / Experience"}
              </th>
            </tr>
          </thead>
          <tbody>
            {category.skills.map((skill) => (
              <tr
                key={skill.name}
                className="transition-colors duration-200 hover:bg-primary/[0.04]"
              >
                <td className="py-3 px-4 border-b border-border font-semibold text-sm text-foreground">
                  {skill.name}
                </td>
                <td className="py-3 px-4 border-b border-border">
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.length > 0 ? (
                      skill.projects.map((p) => (
                        <a
                          key={p.label}
                          href={p.href}
                          className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold transition-all duration-200 border border-transparent hover:bg-primary/[0.18] hover:border-primary hover:-translate-y-px"
                        >
                          {p.label}
                        </a>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground italic">
                        Applied in academic coursework
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
