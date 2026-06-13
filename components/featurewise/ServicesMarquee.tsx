import React from "react"
import { ArrowRight, Sparkles, Star, Circle } from "lucide-react"
import {
  Code, Cpu, Brain, Image, MessageSquare,
  BarChart3, RefreshCw, Bot, Container, Server
} from "lucide-react";

import { Marquee } from "@/components/ui/marquee"

type MarqueeItem = {
  label: string
  icon: React.ReactNode
}

const topRow: MarqueeItem[] = [
  { label: "Python", icon: <Code className="size-4" /> },
  { label: "TensorFlow", icon: <Cpu className="size-4" /> },
  { label: "PyTorch", icon: <Cpu className="size-4" /> },
  { label: "Deep Learning", icon: <Brain className="size-4" /> },
  { label: "Computer Vision", icon: <Image className="size-4" /> },
  { label: "NLP", icon: <MessageSquare className="size-4" /> },
]

const bottomRow: MarqueeItem[] = [
  { label: "OpenCV", icon: <Image className="size-4" /> },
  { label: "Scikit-learn", icon: <BarChart3 className="size-4" /> },
  { label: "Transfer Learning", icon: <RefreshCw className="size-4" /> },
  { label: "LLM Integration", icon: <Bot className="size-4" /> },
  { label: "Docker", icon: <Container className="size-4" /> },
  { label: "Flask", icon: <Server className="size-4" /> },
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
    <section className="w-full overflow-hidden bg-[#080D18] py-8 sm:py-10 lg:py-12">
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
