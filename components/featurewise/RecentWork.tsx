"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils"

type RecentWorkItem = {
	title: string
	image: string
	href: string
	subtitle?: string
}

type RecentWorkProps = {
	title?: string
	items?: RecentWorkItem[]
	className?: string
}

const defaultItems: RecentWorkItem[] = [
	{
		title: "Product Packaging",
		subtitle: "Editorial concept",
		image: "https://picsum.photos/seed/recent-work-1/1200/1200",
		href: "#",
	},
	{
		title: "Brand Identity",
		subtitle: "Perfume launch",
		image: "https://picsum.photos/seed/recent-work-2/1200/1200",
		href: "#",
	},
	{
		title: "Shopping Tote",
		subtitle: "Retail packaging",
		image: "https://picsum.photos/seed/recent-work-3/1200/1200",
		href: "#",
	},
	{
		title: "Skincare Studio",
		subtitle: "Visual identity",
		image: "https://picsum.photos/seed/recent-work-4/1200/1200",
		href: "#",
	},
	{
		title: "Lifestyle Campaign",
		subtitle: "Motion concept",
		image: "https://picsum.photos/seed/recent-work-5/1200/1200",
		href: "#",
	},
]

function RecentWorkCard({ item }: { item: RecentWorkItem }) {
	return (
		<article className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
			<div className="relative aspect-[4/5] overflow-hidden">
				<img
					src={item.image}
					alt={item.title}
					className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
					loading="lazy"
				/>

				<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

				<div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-3">
					<div className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/85 backdrop-blur-md">
						{item.subtitle ?? "Recent work"}
					</div>
				</div>

				<Link
					href={item.href}
					className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/20 px-4 py-3 text-sm text-white backdrop-blur-md transition duration-300 hover:bg-white/30"
				>
					View Casestudy
					<ArrowUpRight className="size-4" />
				</Link>

				<div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-16 pt-10 opacity-0 transition duration-300 group-hover:opacity-100">
					<div className="inline-flex rounded-full bg-black/45 px-3 py-1 text-xs text-white/90 backdrop-blur-sm">
						{item.title}
					</div>
				</div>
			</div>
		</article>
	)
}

export default function RecentWork({
	title = "Recent Works",
	items = defaultItems,
	className,
}: RecentWorkProps) {
	return (
		<section className={cn("mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8", className)}>
			<div className="mb-6 flex items-center justify-between gap-4">
				<div className="flex items-center gap-2 text-white/90">
					<h2 className="text-lg font-medium sm:text-xl">{title}</h2>
					<ChevronDown className="size-5 rounded-full border border-white/20 p-0.5 text-white/70" />
				</div>
			</div>

			<div className="relative border-t border-white/10 pt-6">
				<Carousel
					opts={{
						align: "start",
						loop: false,
						dragFree: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-3">
						{items.map((item) => (
							<CarouselItem
								key={item.title}
								className="pl-3 basis-[88%] sm:basis-1/2 lg:basis-1/4"
							>
								<RecentWorkCard item={item} />
							</CarouselItem>
						))}
					</CarouselContent>

					<CarouselPrevious className="absolute -right-1 top-1/2 hidden -translate-y-1/2 lg:flex" />
					<CarouselNext className="absolute -right-1 top-1/2 hidden -translate-y-1/2 lg:flex" />
				</Carousel>
			</div>
		</section>
	)
}

