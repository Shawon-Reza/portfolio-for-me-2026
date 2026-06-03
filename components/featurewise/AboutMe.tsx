"use client"

import React from "react"

type TimelineItem = {
  role: string
  company: string
  date: string
}

type AboutMeProps = {
  title?: string
  description?: string
  tags?: string[]
  timeline?: TimelineItem[]
  imageSrc?: string
  imageAlt?: string
}

const defaultTimeline: TimelineItem[] = [
  { role: "Freelance", company: "GreenLeaf Co", date: "Currently" },
  { role: "Brand Designer", company: "UrbanFit Studio", date: "2023-24" },
  { role: "Package Designer", company: "GreenK Studio", date: "2020-22" },
]

export default function AboutMe({
  title = "Meet Meily",
  description =
    "I'm Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.",
  tags = [
    "Product Design",
    "Brand Identity Design",
    "UX Design",
    "Branding",
    "Packaging Design",
    "Figma",
    "Photoshop",
  ],
  timeline = defaultTimeline,
  imageSrc = 'https://picsum.photos/seed/meily/1200/1200',
  imageAlt = 'Meily portrait',
}: AboutMeProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">{title}</h1>

          <p className="mt-6 max-w-xl text-sm text-white/70">{description}</p>

          <hr className="my-8 border-t border-white/6" />

          <div className="flex flex-wrap gap-3">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/6 bg-white/3 px-3 py-2 text-xs text-white/90"
              >
                {t}
              </span>
            ))}
          </div>

          <hr className="my-8 border-t border-white/6" />

          <div className="space-y-8 text-sm text-white/80">
            {timeline.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 gap-2 md:grid-cols-3 md:items-center"
              >
                <div className="md:col-span-1">{row.role}</div>
                <div className="md:col-span-1 text-left text-white/60">{row.company}</div>
                <div className="md:col-span-1 text-left md:text-right text-white/60">{row.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="relative w-full overflow-hidden rounded-md border border-white/6 bg-white/2 lg:ml-6">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-64 w-full object-cover sm:h-72 md:h-80 lg:h-full lg:max-h-[520px]"
              loading="lazy"
            />

            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              About Me
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
