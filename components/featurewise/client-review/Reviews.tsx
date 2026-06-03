import React from 'react'
import { ArrowUpRight, CircleDot } from 'lucide-react'
import ReviewsStates from './ReviewsStates'
import ReviewsMarquee from './ReviewsMarquee'

const Reviews = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/6 bg-black px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:gap-10">
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                            alt="Team review meeting"
                            className="h-64 w-full object-cover object-center grayscale sm:h-80 lg:h-[32rem]"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center pt-1 lg:pt-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                            <CircleDot className="size-3" />
                            Reviews
                        </div>

                        <h2 className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Client Reviews
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                Book a Free Call
                                <ArrowUpRight className="size-4" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                See Services
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-5">
                    <ReviewsMarquee />
                    <ReviewsStates />
                </div>
            </div>
        </section>
    )
}

export default Reviews