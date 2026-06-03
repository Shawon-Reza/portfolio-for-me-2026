import React from "react"
import { ArrowRight, Sparkles, Star, Circle } from "lucide-react"

import { Marquee } from "@/components/ui/marquee"

type MarqueeItem = {
  label: string
  icon: React.ReactNode
}

const topRow: MarqueeItem[] = [
  { label: "Slide Decks", icon: <Circle className="size-4" /> },
  { label: "Copywriting", icon: <ArrowRight className="size-4" /> },
  { label: "Brand Graphics", icon: <Sparkles className="size-4" /> },
  { label: "Brand Migration", icon: <ArrowRight className="size-4 rotate-180" /> },
  { label: "Package Design", icon: <Star className="size-4" /> },
  { label: "Branding", icon: <Circle className="size-4" /> },
]

const bottomRow: MarqueeItem[] = [
  { label: "Optimization", icon: <Sparkles className="size-4" /> },
  { label: "Brand Landing Pages", icon: <Circle className="size-4" /> },
  { label: "Social Media", icon: <ArrowRight className="size-4" /> },
  { label: "Icons", icon: <Star className="size-4" /> },
  { label: "Brand Visibility", icon: <Circle className="size-4" /> },
  { label: "Brand Integration", icon: <ArrowRight className="size-4 rotate-180" /> },
]

function MarqueePill({ item }: { item: MarqueeItem }) {
  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-white/65 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/8 hover:text-white/90">
      <span className="text-white/45">{item.icon}</span>
      <span>{item.label}</span>
    </div>
  )
}

export default function ServicesMarquee() {
  return (
    <section className="w-full overflow-hidden bg-transparent py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:space-y-5">
          <Marquee pauseOnHover repeat={3} className="gap-4 p-0 [--duration:26s] sm:gap-5">
            {topRow.map((item) => (
              <MarqueePill key={item.label} item={item} />
            ))}
          </Marquee>

          <Marquee pauseOnHover repeat={3} reverse className="gap-4 p-0 [--duration:28s] sm:gap-5">
            {bottomRow.map((item) => (
              <MarqueePill key={item.label} item={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
