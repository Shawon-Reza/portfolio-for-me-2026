"use client"
import Image, { StaticImageData } from "next/image";
import React from "react"
import soha from "../../assets/soha.png"

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
  imageSrc?: string | StaticImageData
  imageAlt?: string
}

const defaultTimeline: TimelineItem[] = [
  {
    role: "AI Engineer & Researcher",
    company: "Personal Projects & Research",
    date: "2025 – Present"
  },
  {
    role: "Final Year CS Student",
    company: "Daffodil International University",
    date: "2023 – 2027"
  },
  {
    role: "AI/ML Project Developer",
    company: "Multiple Open Source Projects",
    date: "2025 – Present"
  },
]

export default function AboutMe({
  title = "Meet Jannatul",
  description =
  "I'm Jannatul Ferdaues, a passionate final-year Computer Science student and AI Engineer based in Dhaka, Bangladesh. I specialize in building practical AI solutions in Computer Vision and NLP that deliver real, measurable results — 95% classification accuracy, 87% candidate matching precision, and 98% error detection.",
  tags = [
    "Deep Learning",
    "Computer Vision",
    "NLP & LLMs",
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Transfer Learning",
  ],
  timeline = defaultTimeline,
  imageSrc = soha, // Replace with your real photo
  imageAlt = 'Jannatul Ferdaues portrait',
}: AboutMeProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
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
        {/* ========================================================= */}
        <div className="order-first lg:order-last">
          <div className="relative w-full overflow-hidden rounded-md border border-white/6 bg-white/2 lg:ml-6 flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="h-full w-full object-cover sm:h-72 md:h-80 lg:h-full lg:max-h-[520px] "
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