"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import Image from "next/image"
const resume = "/Resume.pdf"


const NAV_ITEMS = [

    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -40% 0px", // More generous viewport check
            threshold: 0, // Trigger immediately when entering/leaving bounds
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)

        // Observe each nav item target section
        NAV_ITEMS.forEach((item) => {
            const id = item.href.replace("#", "")
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        // Also observe inner services id since that is projects
        const servicesEl = document.getElementById("services")
        if (servicesEl) observer.observe(servicesEl)

        // Also observe hero so that when scrolled to top, nothing is highlighted
        const heroEl = document.getElementById("hero")
        if (heroEl) observer.observe(heroEl)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <header className="text-[#9E9E9E]  fixed top-0 left-0 w-full z-90 bg-black/5
         backdrop-blur-lg border-b border-white/10 ">

            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="#hero" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                {/* <Sparkles className="w-5 h-5 text-white" aria-hidden /> */}
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={100} />
                            </div>
                            <span
                                className="text-xl font-bold tracking-tight">Shawon Reza</span>
                        </a>
                    </div>



                    <div className="flex items-center gap-4">
                        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.href.replace("#", "") ||
                                    (item.href === "#projects" && activeSection === "services")
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-4 py-2 rounded-full text-md font-medium transition-all duration-300 ${isActive
                                            ? "text-white bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                                            : "text-[#9E9E9E] hover:text-white border border-transparent"
                                            }`}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#38bdf8] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                                        )}
                                    </a>
                                )
                            })}
                        </nav>
                        {/* CTA */}
                        {/* #9E9E9E */}
                        <a
                            href="/Resume.pdf"
                            // target="_blank"
                            // rel="noopener noreferrer"
                            download
                            rel="noopener noreferrer"
                            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
                        >

                            Get Resume
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5 lg:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                        aria-hidden
                    />

                    <aside className="absolute right-0 top-0 h-full w-4/5 max-w-xs  text-white shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <span className="font-semibold">Portfolite</span>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                                className="p-2 rounded-md hover:bg-white/5"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2 bg-[#121927] rounded-xl p-2">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.href.replace("#use" /* fallback */, "") ||
                                    activeSection === item.href.replace("#", "") ||
                                    (item.href === "#projects" && activeSection === "services")
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive
                                            ? "text-white bg-white/10 border-l-2 border-[#a78bfa]"
                                            : "text-[#9E9E9E] hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                )
                            })}

                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition max-w-max"
                            >
                                Get Resume
                            </a>
                        </nav>
                    </aside>
                </div>
            )}
        </header>
    )
}

export { NAV_ITEMS }