"use client"

import { useState, useEffect } from "react"
import { NAV_LINKS } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("home")
      if (heroEl) {
        setScrolled(window.scrollY > heroEl.offsetHeight - 100)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-background/95 border-b border-border"
          : "bg-[#000000]/90 border-b border-[rgba(232,238,252,0.12)]"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <nav className="flex items-center justify-between py-3">
          <a
            href="#home"
            className="inline-flex items-center gap-3 font-display tracking-tight"
            aria-label="Go to Home"
          >
            {/* Black logo (shown when header is scrolled / white bg) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LogoBlack.svg"
              alt="Yazid Hamza Logo"
              className={cn(
                "h-10 w-auto transition-opacity duration-300",
                scrolled ? "block" : "hidden"
              )}
            />
            {/* White logo (shown on dark hero bg) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LogoWhite.svg"
              alt="Yazid Hamza Logo"
              className={cn(
                "h-10 w-auto transition-opacity duration-300",
                scrolled ? "hidden" : "block"
              )}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1" aria-label="Section links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-full text-sm transition-all duration-200 hover:scale-[1.02]",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    : "text-[rgba(232,238,252,0.72)] hover:text-[#e8eefc] hover:bg-[rgba(232,238,252,0.06)]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-foreground" : "text-[#e8eefc]"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[400px] opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    : "text-[rgba(232,238,252,0.72)] hover:text-[#e8eefc] hover:bg-[rgba(232,238,252,0.06)]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
