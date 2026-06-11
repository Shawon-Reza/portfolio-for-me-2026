"use client"

import { useEffect, useRef, useState } from "react"
import ServiceCard from "./ServiceCard"
import { services, SCROLL_PER_CARD } from "./services.data"

/* ─────────────────────────────────────────
   ServicesSection
   Owns the scroll-tracking state and layout.
   All UI detail lives in ServiceCard.
───────────────────────────────────────── */
export default function ServicesSection() {
  const scrollRootRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActive] = useState(0)

  // ── Scroll tracking ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRootRef.current
      if (!el) return

      const scrolled = -el.getBoundingClientRect().top
      if (scrolled < 0) { setActive(0); return }

      setActive(Math.min(services.length - 1, Math.floor(scrolled / SCROLL_PER_CARD)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // run once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ── Layout constants ─────────────────────────────────────────────────────
  const extraScrollHeight = (services.length - 1) * SCROLL_PER_CARD

  return (
    <section id="services" className="w-full pt-20">

      {/* ── Section header ─────────────────────────────────────────────── */}
      <div className="mx-auto  max-w-[600px] px-4 text-center">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-[14px] py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
          Projects
        </div>

        <h1 className="mb-4 text-[clamp(2.6rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
          What I&nbsp;
          <span className="bg-gradient-to-br from-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent">
            built
          </span>
        </h1>

        <p className="text-[0.94rem] leading-[1.7] text-white/45">
          End-to-end AI &amp; ML projects — from research to real-world deployment.
        </p>
      </div>

      {/* ── Scroll-driven sticky window ─────────────────────────────────── */}
      <div
        ref={scrollRootRef}
        style={{ height: `calc(100vh + ${extraScrollHeight}px)` }}
      >
        {/* Sticky viewport — stays in view while scroll happens outside */}
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">

          {/* Card stack arena */}
          <div className="relative w-full max-w-[1200px]" style={{ height: "min(520px, 75vh)" }}>
            {services.map((service, i) => (
              <div
                key={service.id}
                className="absolute inset-0"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform:
                    i === activeIndex
                      ? "translateY(0) scale(1)"
                      : i < activeIndex
                        ? "translateY(-4%) scale(0.97)"
                        : "translateY(6%) scale(0.97)",
                  transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                  pointerEvents: i === activeIndex ? "auto" : "none",
                  zIndex: i === activeIndex ? 10 : 1,
                }}
              >
                <ServiceCard service={service} index={i} activeIndex={activeIndex} />
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {services.map((s, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full transition-[background,transform] duration-300"
                style={{
                  background: i === activeIndex ? s.accent : "rgba(255,255,255,0.2)",
                  transform: i === activeIndex ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
