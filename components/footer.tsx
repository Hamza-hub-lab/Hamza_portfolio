"use client"

import { Linkedin, Mail } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function Footer() {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <footer
      ref={ref}
      id="contact"
      className="border-t border-[rgba(232,238,252,0.12)] bg-[#000000] py-8"
      aria-label="Footer and contact"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-between gap-4 opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          <div className="text-sm text-[rgba(232,238,252,0.72)]">
            <strong className="font-display text-[rgba(232,238,252,0.92)] tracking-tight">
              Yazid Hamza
            </strong>{" "}
            — <span>2026</span>
          </div>

          <div className="flex flex-wrap gap-3" aria-label="Contact links">
            <a
              href="https://www.linkedin.com/in/hamza-yazidi-2bb7a42a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,252,0.12)] bg-[rgba(15,22,38,0.45)] px-3 py-2 text-sm text-[rgba(232,238,252,0.88)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(15,22,38,0.65)]"
              aria-label="LinkedIn - Hamza Yazidi"
            >
              <Linkedin className="h-4 w-4" />
              <span className="font-semibold text-[rgba(232,238,252,0.72)]">
                LinkedIn:
              </span>{" "}
              Hamza Yazidi
            </a>
            <a
              href="mailto:yazidihamza.eng@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,252,0.12)] bg-[rgba(15,22,38,0.45)] px-3 py-2 text-sm text-[rgba(232,238,252,0.88)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(15,22,38,0.65)]"
              aria-label="Email - yazidihamza.eng@gmail.com"
            >
              <Mail className="h-4 w-4" />
              <span className="font-semibold text-[rgba(232,238,252,0.72)]">
                Email:
              </span>{" "}
              yazidihamza.eng@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
