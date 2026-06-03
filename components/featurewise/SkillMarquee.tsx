import React from "react"
import { Asterisk, Circle } from "lucide-react"

import { Marquee } from "../ui/marquee"

type SkillItem = {
  label: string
  icon: React.ReactNode
}

const skills: SkillItem[] = [
  { label: "Oasis", icon: <Circle className="h-4 w-4" /> },
  { label: "Asterisk", icon: <Asterisk className="h-4 w-4" /> },
  { label: "Books", icon: <span className="text-base font-semibold leading-none">⌁</span> },
  { label: "Opal", icon: <Circle className="h-4 w-4" /> },
  { label: "Orbit", icon: <span className="text-base font-semibold leading-none">◌</span> },
]

const SkillMarquee = () => {
  return (
    <section className="w-full overflow-hidden bg-transparent py-6 sm:py-8">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-label="Skills marquee"
        >
          <Marquee
            pauseOnHover
            repeat={3}
            className="gap-10 p-0 [--duration:24s] sm:gap-14 md:gap-16"
          >
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-2 whitespace-nowrap text-white/45 transition-opacity duration-300 hover:text-white/80"
              >
                <span className="flex items-center justify-center text-white/45">
                  {skill.icon}
                </span>
                <span className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-[2rem]">
                  {skill.label}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default SkillMarquee