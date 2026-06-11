"use client"

import { ArrowRight } from "lucide-react"
import { Service } from "./services.types"
import Image from "next/image"

/* ─────────────────────────────────────────
   Props
───────────────────────────────────────── */
type Props = {
  service: Service
  index: number
  activeIndex: number
}

/* ─────────────────────────────────────────
   ServiceCard
   Purely presentational — receives all state
   from the parent Services orchestrator.
───────────────────────────────────────── */
export default function ServiceCard({ service, index, activeIndex }: Props) {
  const Icon = service.icon

  const isPast = index < activeIndex
  const isCurrent = index === activeIndex

  // Cards already passed get pushed back (scaled + faded slightly)
  const scale = isCurrent ? 1 : isPast ? 0.96 - (activeIndex - index - 1) * 0.02 : 1
  const opacity = isPast ? Math.max(0.3, 1 - (activeIndex - index) * 0.25) : 1

  return (
    <div
      className="absolute inset-0 origin-top"
      style={{
        transform: `scale(${scale})`,
        opacity,
        transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
      }}
    >
      {/* ── Card shell ── */}
      <div
        className="grid h-full overflow-hidden rounded-[22px] border border-white/[0.07] bg-[rgba(8,8,12,0.93)] shadow-[0_28px_80px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
        style={
          {
            "--accent": service.accent,
            "--accent-bg": service.accentBg,
            "--accent-border": service.accentBorder,
          } as React.CSSProperties
        }
      >

        {/* ════ LEFT column ════ */}
        <div className="relative flex flex-col justify-center p-8 lg:p-12">

          {/* Ghost index number */}
          <span className="pointer-events-none absolute right-7 top-5 select-none text-[80px] font-black leading-none text-white/[0.04]">
            {service.id}
          </span>

          {/* Category pill */}
          <div
            className="mb-[18px] inline-flex w-fit items-center gap-[7px] rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-white/60"
            style={{ background: service.accentBg, borderColor: service.accentBorder }}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: service.accent }}
            />
            {service.category}
          </div>

          {/* Title */}
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.15] tracking-[-0.025em] text-white">
            {service.title}
          </h2>

          {/* Description */}
          <p className="mb-6 max-w-[420px] text-[0.9rem] leading-[1.78] text-white/50">
            {service.description}
          </p>

          {/* Tags */}
          <div className="mb-7 flex flex-wrap gap-[7px]">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-[11px] py-[3px] text-[10.5px] font-medium tracking-[0.05em]"
                style={{
                  background: service.accentBg,
                  borderColor: service.accentBorder,
                  color: service.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA link */}
          <a
            href="#"
            className="group inline-flex w-fit items-center gap-1.5 text-[0.85rem] font-medium opacity-80 transition-[opacity,gap] duration-200 hover:opacity-100 hover:gap-2.5"
            style={{ color: service.accent }}
          >
            {service.cta}
            <ArrowRight size={14} />
          </a>
        </div>

        {/* ════ RIGHT column: image ════ */}
        <div className="relative min-h-[240px] overflow-hidden lg:min-h-0">
          <div
            className="absolute inset-0 overflow-hidden border-t border-white/[0.07] lg:border-t-0 lg:border-l"
            style={{ borderColor: service.accentBorder }}
          >
            {/* Photo */}
            <Image
              src={service.imageSrc}
              alt={service.title}
              width={1000}
              height={500}
              loading="lazy"
              className="h-full w-full object-contain brightness-[0.65] grayscale-[30%] transition-[transform,filter] duration-700 ease-in-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:brightness-75"
            />

            {/* Colour glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(60% 60% at 50% 100%, ${service.accent}28 0%, transparent 100%)`,
              }}
            />

            {/* Icon badge */}
            <div
              className="absolute bottom-[18px] right-[18px] grid h-11 w-11 place-items-center rounded-xl border backdrop-blur-xl"
              style={{
                background: service.accentBg,
                borderColor: service.accentBorder,
                color: service.accent,
              }}
            >
              <Icon size={20} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
