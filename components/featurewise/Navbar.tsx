"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"

const NAV_ITEMS = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {  
    const [open, setOpen] = useState(false)

    return (
        <header className="text-[#9E9E9E] fixed top-0 left-0 w-full z-90 bg-black/5
         backdrop-blur-lg border-b border-white/10 ">
           
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="#hero" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" aria-hidden />
                            </div>
                            <span
                            className="text-lg font-semibold tracking-tight">Soha Rahman</span>
                        </a>
                    </div>



                    <div className="flex items-center gap-4">
                        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition"
                                >
                                    {item.label}
                                    {/* example focus ring */}
                                </a>
                            ))}
                        </nav>
                        {/* CTA */}
                        {/* #9E9E9E */}
                        <a
                            href="#"
                            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden
                            >
                                <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" />
                            </svg>
                            Get Template
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

                    <aside className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-neutral-900 text-white shadow-lg p-6">
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

                        <nav className="flex flex-col gap-2">
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 transition"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href="#"
                                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition max-w-max"
                            >
                                <Sparkles className="w-4 h-4" /> Get Template
                            </a>
                        </nav>
                    </aside>
                </div>
            )}
        </header>
    )
}

export { NAV_ITEMS }