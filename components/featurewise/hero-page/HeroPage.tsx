"use client"

import Link from "next/link"
import { ArrowRight, MousePointer2, Sparkles } from "lucide-react"
import Lottie from "lottie-react"
import mouse from "@/assets/lottie/mouse.json"
// import CountUp from './../../CountUp';
import dynamic from "next/dynamic"

const CountUp = dynamic(() => import('./../../CountUp'), {
    ssr: false
})

export default function HeroPage() {
    return (
        <section className="relative isolate overflow-hidden  text-white">
            <div className="absolute inset-0 -z-10">
                <div className="
      absolute top-[-20%] left-[20%]
      h-[500px] w-[500px]
      rounded-full
      bg-blue-600/20
      blur-[120px]
    " />

                <div className="
      absolute top-[30%] right-[-10%]
      h-[500px] w-[500px]
      rounded-full
      bg-purple-600/20
      blur-[140px]
    " />

                <div className="
      absolute bottom-[-20%] left-[10%]
      h-[400px] w-[400px]
      rounded-full
      bg-cyan-500/10
      blur-[120px]
    " />
                <div
                    className="
      absolute bottom-0 left-0 w-full h-48
      bg-gradient-to-t 
      from-[#050816]
      via-[#050816]/80
      to-transparent
      pointer-events-none
    "
                />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-md sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                    Building Modern Web Experiences
                </div>

                <div className="max-w-5xl text-center">
                    <h1 className="mx-auto max-w-4xl text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
                        High-Performance Web Apps<br />That Drive Results
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base md:text-lg">
                        Full Stack Developer with 1.5+ years building responsive, scalable web applications using React, Next.js, TypeScript & Tailwind CSS. 
                        Specialized in real-time features, clean UI/UX, and delivering exceptional user experiences — 
                        <CountUp
                            from={0}
                            to={10}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            delay={0}
                            onStart={() => { }}
                            onEnd={() => { }}
                        />
                        + client projects, 
                        <CountUp
                            from={0}
                            to={100}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            delay={0}
                            onStart={() => { }}
                            onEnd={() => { }}
                        />
                        % on-time delivery, and consistent 
                        <CountUp
                            from={0}
                            to={5}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            delay={0}
                            onStart={() => { }}
                            onEnd={() => { }}
                        />
                        -star client feedback.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                        <Link
                            href="#contact"
                            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] sm:text-base"
                        >
                            Lets Connect
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