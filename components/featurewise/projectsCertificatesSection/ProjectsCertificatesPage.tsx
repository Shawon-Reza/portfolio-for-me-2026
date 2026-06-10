"use client"

import React from "react"
import Link from "next/link"

const leftIds = [1011, 1025, 1035]
const centerIds = [1020, 1024, 1027, 1043]
const rightIds = [1050, 1062, 1074]

function Card({ id }: { id: number }) {
    return (
        <div className="relative w-full overflow-hidden rounded-md border border-white/6 bg-white/2 shadow-sm">
            <img
                src={`https://picsum.photos/id/${id}/800/800`}
                alt={`Project ${id}`}
                className="h-56 w-full object-cover sm:h-64 md:h-72 lg:h-80"
                loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0" />

            <Link
                href="#"
                className="absolute left-1/2 bottom-4 z-10 w-[85%] -translate-x-1/2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-sm text-white backdrop-blur-md transition hover:bg-white/10 hover:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
                View Casestudy ↗
            </Link>
        </div>
    )
}

export default function ProjectsCertificatesPage() {
    return (
        // mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8
        <section className=" py-12 ">
           


            <div className="flex flex-col gap-2 lg:flex-row lg:items-start">

                <div className="flex w-full flex-col gap-2 lg:w-1/3 mt-[15%] xl:mt-[12.5%] 2xl:mt-[11%]">
                    {leftIds.map((id) => (
                        <Card id={id} key={`l-${id}`} />
                    ))}
                </div>

                <div className="flex w-full flex-col gap-2 lg:w-1/3">
                    {centerIds.map((id) => (
                        <Card id={id} key={`c-${id}`} />
                    ))}
                </div>

                <div className="flex w-full flex-col gap-2 lg:w-1/3 mt-[15%] xl:mt-[12.5%] 2xl:mt-[11%]">
                    {rightIds.map((id) => (
                        <Card id={id} key={`r-${id}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
