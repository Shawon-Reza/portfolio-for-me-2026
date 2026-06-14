"use client"

import React, { forwardRef, useMemo, useState } from "react"
import { Search, Plus, Minus, CircleHelp, ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface FAQItem {
  index?: number
  question: string
  answer: string
}

interface FAQProps extends React.HTMLAttributes<HTMLDivElement> {
  faqs?: FAQItem[]
  title?: string
  searchable?: boolean
  colorScheme?: "blue" | "purple" | "green"
}

const colorSchemes = {
  blue: {
    badge: "text-white/80",
    border: "border-white/8",
    card: "bg-white/[0.04]",
  },
  purple: {
    badge: "text-white/80",
    border: "border-white/8",
    card: "bg-white/[0.04]",
  },
  green: {
    badge: "text-white/80",
    border: "border-white/8",
    card: "bg-white/[0.04]",
  },
} as const

const defaultFaqs: FAQItem[] = [
  {
    question: "What are your main areas of expertise?",
    answer:
      "I specialize in building high-performance frontend applications using React, Next.js, TypeScript, and Tailwind CSS. I have strong experience with real-time features using WebSocket, modern state management, and delivering exceptional UI/UX.",
  },
  {
    question: "Are you currently available for opportunities?",
    answer:
      "Yes! I am actively seeking Jr. Frontend Developer or React/Next.js roles. With 1.5+ years of professional experience, I’m open to full-time, freelance, or contract opportunities.",
  },
  {
    question: "What is your most successful project?",
    answer:
      "VacanzaMyCost — a multi-role tour management platform where I served as Frontend Lead. It features real-time chat, payments, Google Maps, dual language support, and AI image generation. Live at vacanzamycost.it.",
  },
  {
    question: "Tell me about your professional experience.",
    answer:
      "I currently work as a Jr. Frontend Developer at Join Venture AI (JVAI) since May 2025. I have led frontend development for 10+ client projects, consistently delivering on time with 5-star reviews.",
  },
  {
    question: "Which technologies do you use the most?",
    answer:
      "My core stack includes React.js, Next.js, TypeScript, Tailwind CSS, WebSocket, TanStack Query, Node.js, Express.js, Prisma ORM, PostgreSQL, and MongoDB.",
  },
  {
    question: "Do you have experience with real-time applications?",
    answer:
      "Yes. I have implemented real-time messaging, notifications, and chat features using WebSocket in multiple projects including Kyro (AI Clinic System) and YourSelf Beauty (AI Skincare Platform).",
  },
]

function PlusIcon() {
  return <Plus className="size-4" />
}

function MinusIcon() {
  return <Minus className="size-4" />
}

const FAQ = forwardRef<HTMLDivElement, FAQProps>(function FAQ(
  {
    faqs = defaultFaqs,
    title = "Answers",
    searchable = false,
    colorScheme = "blue",
    className,
    ...props
  },
  ref
) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]))
  const [searchTerm, setSearchTerm] = useState("")

  const colors = colorSchemes[colorScheme]

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return faqs

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    )
  }, [faqs, searchTerm])

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.clear()
        next.add(index)
      }
      return next
    })
  }

  return (
    <section
      ref={ref}
      className={cn("mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/6 bg-[#0F1624] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="flex flex-col">
            <div className={cn("inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs", colors.badge)}>
              <CircleHelp className="size-3.5" />
              FAQs
            </div>

            <h2 className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Find answers to common questions about my design process, services etc...
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/6 bg-white/[0.04]">
              <img
                src="https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781434454/Picsart_26-02-28_11-01-09-529_ekfb3r.jpg"
                alt="FAQ visual"
                className="h-64 w-full object-cover object-center grayscale sm:h-80 lg:h-[24rem]"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Prisma ORM",
                "PostgreSQL",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/8 bg-white/[0.04] px-3 py-2 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* <div className="mt-6 border-t border-white/8 pt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book a Free Call
                <ArrowUpRight className="size-4" />
              </a>
            </div> */}
          </div>

          <div className="flex flex-col gap-4 lg:pt-2">
            {searchable && (
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-2xl border border-white/8 bg-white/[0.04] py-4 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/15 focus:bg-white/[0.06]"
                  aria-label="Search FAQs"
                />
              </label>
            )}

            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openItems.has(index)
                const displayIndex = faq.index ?? index + 1

                return (
                  <article
                    key={`${faq.question}-${displayIndex}`}
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-300",
                      colors.border,
                      colors.card,
                      isOpen ? "bg-white/[0.06]" : "bg-white/[0.03]"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${displayIndex}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-white/10 bg-black/30 text-xs text-white/70">
                          {displayIndex}
                        </span>
                        <h3 className="max-w-[22rem] text-sm font-medium leading-6 text-white sm:text-base">
                          {faq.question}
                        </h3>
                      </div>

                      <span className="mt-0.5 text-white/70 transition-transform duration-300">
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${displayIndex}`}
                      className={cn(
                        "overflow-hidden px-5 sm:px-6 transition-all duration-300 ease-out",
                        isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <p className="max-w-xl text-sm leading-6 text-white/60 sm:text-[0.95rem]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}

              {filteredFaqs.length === 0 && searchTerm && (
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-10 text-center text-white/60">
                  No FAQs found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

FAQ.displayName = "FAQ"

export default FAQ
