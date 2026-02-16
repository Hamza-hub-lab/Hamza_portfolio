"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-66px)] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/Hamzacite.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.3)] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 py-20 md:pl-12">
        <h1
          className={`font-hero text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tighter text-[#CDD5CD] text-balance
            ${loaded ? "animate-fade-up" : "opacity-0"}`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,.3)" }}
        >
          Yazid Hamza
        </h1>

        <div
          className={`mt-4 font-hero text-2xl sm:text-3xl md:text-4xl font-semibold text-[rgba(232,238,252,0.92)]
            ${loaded ? "animate-fade-up" : "opacity-0"}`}
          style={{
            animationDelay: "0.15s",
            textShadow: "0 2px 8px rgba(0,0,0,.3)",
          }}
        >
          {"Mechanical & Aerospace Engineer"}
        </div>

        <div
          className={`mt-2 font-hero text-xl sm:text-2xl text-[rgba(232,238,252,0.72)] max-w-[60ch]
            ${loaded ? "animate-fade-up" : "opacity-0"}`}
          style={{
            animationDelay: "0.3s",
            textShadow: "0 2px 8px rgba(0,0,0,.3)",
          }}
        >
          {"Design, Manufacturing & Simulation"}
        </div>

        <div
          className={`mt-16 flex flex-wrap gap-3
            ${loaded ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.45s" }}
          aria-label="Quick actions"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-[rgba(125,211,252,0.45)] bg-gradient-to-r from-[rgba(125,211,252,0.18)] to-[rgba(167,139,250,0.16)] px-5 py-3 font-semibold text-[#e8eefc] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore Profile
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,252,0.12)] bg-[rgba(15,22,38,0.55)] px-5 py-3 font-semibold text-[#e8eefc] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(125,211,252,0.35)] hover:bg-[rgba(15,22,38,0.70)]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
