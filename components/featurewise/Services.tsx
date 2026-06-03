import React from "react"
import { ArrowRight, Lightbulb, ListChecks, Rocket } from "lucide-react"
import ServicesMarquee from "./ServicesMarquee"

type ProcessStep = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

type ServicesProps = {
  badge?: string
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  primaryAction?: string
  secondaryAction?: string
  steps?: ProcessStep[]
}

const defaultSteps: ProcessStep[] = [
  {
    id: "1",
    title: "Define Your Vision",
    description:
      "Find the perfect plan tailored to your needs, balancing features, flexibility, and value to help you move faster.",
    icon: <Lightbulb className="size-5" />,
  },
  {
    id: "2",
    title: "Submit Your Request",
    description:
      "Share your requirements through a private design portal so your vision is understood, refined, and ready to build.",
    icon: <ListChecks className="size-5" />,
  },
  {
    id: "3",
    title: "Project Delivered",
    description:
      "Your project is completed with precision, delivered on time, and polished for launch with room for refinement.",
    icon: <Rocket className="size-5" />,
  },
]

function StepCard({ step }: { step: ProcessStep }) {
  return (
    <article className="relative rounded-[1.35rem] border border-white/8 bg-white/[0.045] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015)] backdrop-blur-sm sm:p-6">
      <div className="absolute right-4 top-4 text-xs text-white/35">{step.id}</div>
      <div className="mb-5 flex items-center gap-3 text-white/90">
        <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-black/30">
          {step.icon}
        </span>
      </div>

      <h3 className="text-xl font-medium tracking-tight text-white sm:text-[1.6rem]">
        {step.title}
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-[0.92rem]">
        {step.description}
      </p>
    </article>
  )
}

export default function Services({
  badge = "Design process",
  title = "Process",
  description =
    "Crafting bold visuals that inspire and elevate brands with thoughtful process.",
  imageSrc = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Designer working on sketches",
  primaryAction = "Book a Free Call",
  secondaryAction = "See Projects",
  steps = defaultSteps,
}: ServicesProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-white/6 bg-black/70 px-4 py-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-8">
          <div className="order-2 lg:order-1 lg:h-full">
            <div className="relative h-full overflow-hidden rounded-[1.15rem] border border-white/8 bg-white/5 lg:min-h-[760px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover object-center grayscale transition duration-700 hover:scale-[1.02] lg:min-h-[760px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="order-1 flex flex-col lg:order-2 lg:pt-4">
            <div className="inline-flex w-fit rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
              {badge}
            </div>

            <h2 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {primaryAction}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {secondaryAction}
              </a>
            </div>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {steps.map((step) => (
                <StepCard key={step.id} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ServicesMarquee />
    </section>
  )
}