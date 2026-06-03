import React from "react"
import { Quote, Star } from "lucide-react"

import { Marquee } from "@/components/ui/marquee"

type ReviewQuote = {
  author: string
  role: string
  quote: string
  rating: number
}

const reviewQuotes: ReviewQuote[] = [
  {
    author: "Richards Johnson",
    role: "Creative Director",
    quote:
      "Working with Meily was seamless. Her thoughtful design process made everything feel clear, strategic, and high-end.",
    rating: 5,
  },
  {
    author: "June Lee",
    role: "CEO of GreenRoots",
    quote:
      "Meily's strategic approach elevated our packaging and delivered a brand system that felt refined and memorable.",
    rating: 5,
  },
  {
    author: "Sofia Martin",
    role: "Founder, Atelier North",
    quote:
      "The collaboration was fast, responsive, and visually sharp. The final result exceeded the brief in every way.",
    rating: 5,
  },
  {
    author: "Ethan Cole",
    role: "Product Lead",
    quote:
      "Strong communication, excellent taste, and a polished delivery. The work immediately improved how customers perceived our brand.",
    rating: 5,
  },
]

export default function ReviewsMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <Marquee pauseOnHover repeat={3} className="gap-4 p-0 [--duration:28s] sm:gap-5">
        {reviewQuotes.map((review) => (
          <article
            key={review.author}
            className="flex w-[280px] flex-col rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:w-[320px]"
          >
            <div className="mb-4 flex items-center gap-2 text-white/70">
              <Quote className="size-4" />
              <span className="text-xs uppercase tracking-[0.25em]">Reviews</span>
            </div>

            <p className="text-sm leading-6 text-white/70">{review.quote}</p>

            <div className="mt-5 border-t border-white/8 pt-4">
              <h4 className="text-sm font-medium text-white">{review.author}</h4>
              <p className="mt-1 text-xs text-white/45">{review.role}</p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-white/75">{review.rating.toFixed(1)}</span>
                <div className="flex items-center gap-0.5 text-[#f4c542]">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </Marquee>
    </div>
  )
}