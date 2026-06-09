import React from "react"
import { ArrowUpRight, CircleDot } from "lucide-react"

const socialLinks = ["Behance", "X", "Dribbble"]

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden  px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/6 bg-blac px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)] blur-2xl" />
          <div className="absolute left-1/2 top-16 h-56 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_0,_rgba(255,255,255,0.08)_25%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative grid gap-10 text-center lg:gap-12">
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <CircleDot className="size-3.5" />
            Available For Work
          </div>

          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>

            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white shadow-[0_0_18px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Book a Free Call
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-white/80">
            {socialLinks.map((social) => (
              <span
                key={social}
                className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-sm"
              >
                {social}
              </span>
            ))}
          </div>

          <div className="grid gap-6 border-t border-white/8 pt-6 text-sm text-white/80 md:grid-cols-3 md:items-center md:text-base bg-none">
            <a href="mailto:hello@framebase.design" className="text-left font-medium text-white transition hover:text-white/80">
              hello@framebase.design
            </a>

            <div className="text-center text-white/70">
              Design In <span className="underline underline-offset-4">Framer</span>
            </div>

            <div className="text-left md:text-right text-white/70">
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}