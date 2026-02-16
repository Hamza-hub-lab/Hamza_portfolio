"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { PortfolioItem } from "@/lib/portfolio-data"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ScrollCarouselProps {
  items: PortfolioItem[]
  centered?: boolean
}

export function ScrollCarousel({ items, centered = false }: ScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [sectionRef, isVisible] = useScrollAnimation<HTMLDivElement>()

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    return () => el.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = 360
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  if (items.length === 0) {
    return (
      <div ref={sectionRef} className={cn("mt-8 opacity-0", isVisible && "animate-fade-up")} style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="text-sm text-muted-foreground italic">Content coming soon...</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={sectionRef} className={cn("mt-8 opacity-0", isVisible && "animate-fade-up")} style={{ animationDelay: "0.1s" }}>
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin",
          centered && items.length <= 2 && "justify-center"
        )}
      >
        {items.map((item, index) => (
          <article
            key={item.id}
            className={cn(
              "group flex-shrink-0 w-[320px] md:w-[340px] rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer opacity-0",
              isVisible && "animate-scale-in"
            )}
            style={{ animationDelay: `${0.08 * index}s` }}
            onClick={() => {
              if (item.href && item.href !== "#") {
                window.location.href = item.href
              }
            }}
          >
            <div className="relative h-[220px] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden border-b border-border">
              <CardImage src={item.image} alt={item.title} />
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-bold leading-snug text-foreground line-clamp-3">
                {item.title}
              </h3>
              <a
                href={item.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                {item.linkText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation arrows */}
      {items.length > 2 && (
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={cn(
              "inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card transition-all duration-200",
              canScrollLeft
                ? "hover:bg-primary/10 hover:border-primary hover:scale-105 text-foreground"
                : "opacity-40 cursor-not-allowed text-muted-foreground"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={cn(
              "inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-card transition-all duration-200",
              canScrollRight
                ? "hover:bg-primary/10 hover:border-primary hover:scale-105 text-foreground"
                : "opacity-40 cursor-not-allowed text-muted-foreground"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

/** Image with fallback -- shows placeholder if the image file doesn't exist yet */
function CardImage({ src, alt }: { src?: string; alt: string }) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-muted-foreground italic">
        Image Coming Soon
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
