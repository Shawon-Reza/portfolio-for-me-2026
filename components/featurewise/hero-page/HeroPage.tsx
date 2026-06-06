"use client"

import Link from "next/link"
import { ArrowRight, MousePointer2, Sparkles } from "lucide-react"
import Lottie from "lottie-react"
import mouse from "@/assets/lottie/mouse.json"

export default function HeroPage() {
    return (
        <section className="relative isolate overflow-hidden  text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
                <div className="absolute right-[-10%] top-[18%] h-96 w-96 rounded-full bg-white/12 blur-3xl sm:h-[32rem] sm:w-[32rem]" />
                <div className="absolute bottom-[-15%] left-[18%] h-80 w-80 rounded-full bg-white/10 blur-3xl sm:h-[38rem] sm:w-[38rem]" />
                <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-md sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                    Crafting Unique Brand Identities
                </div>

                <div className="max-w-5xl text-center">
                    <h1 className="mx-auto max-w-4xl text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
                        Branding that you need Indeed
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base md:text-lg">
                        Elevate your brand with custom identity and package design.
                        Showcase your story through bold visuals and strategic design
                        solutions.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                        <Link
                            href="#projects"
                            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] sm:text-base"
                        >
                            Get Started Now
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="#projects"
                            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/40 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10 sm:text-base"
                        >
                            See Projects
                        </Link>
                    </div>
                </div>

                {/*  ========================== Mouse Horizontal Line========================= */}
                <div className="mt-16 flex w-full max-w-4xl items-center gap-3 px-2 text-xs text-white/55 sm:mt-20 sm:px-0 sm:text-sm md:text-base">
                    <span className="whitespace-nowrap">Scroll down</span>
                    <span className="h-px flex-1 bg-white/15" />
                    
                        {/* <MousePointer2 className="h-4 w-4" /> */}
                        <Lottie
                        className="h-10 w-10"
                            animationData={mouse}
                            loop={true}
                        />
                    
                    <span className="h-px flex-1 bg-white/15" />
                    <span className="whitespace-nowrap">to see projects</span>
                </div>
            </div>
        </section>
    )
}
