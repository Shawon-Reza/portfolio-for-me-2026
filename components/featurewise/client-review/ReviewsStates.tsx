import React from "react"

type ReviewStat = {
  value: string
  label: string
}

const reviewStats: ReviewStat[] = [
  { value: "180+", label: "design projects completed." },
  { value: "96%", label: "Client satisfaction rate." },
  { value: "15+", label: "Years of experience" },
]

export default function ReviewsStates() {
  return (
    <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/6 md:grid-cols-3">
      {reviewStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-black/85 px-5 py-6 text-center sm:px-6 sm:py-7"
        >
          <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {stat.value}
          </div>
          <p className="mt-2 text-sm text-white/55">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}