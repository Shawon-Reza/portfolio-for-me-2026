import React from 'react'
import AllProject from './AllProject'


export default function ProjectSection() {
    return (
        <div id='projects' className=''>
            {/* ── Section header ─────────────────────────────────────────────── */}
            <div className="mx-auto max-w-[600px] px-4 text-center pt-10">
                <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-[14px] py-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
                    Projects
                </div>
                <h1 className="mb-4 text-[clamp(2.6rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-white">
                    What I&nbsp;
                    <span className="bg-gradient-to-br from-[#a78bfa] to-[#38bdf8] bg-clip-text text-transparent">
                        built
                    </span>
                </h1>
                <p className="text-[0.94rem] leading-[1.7] text-white/45">
                    High-performance web applications with React, Next.js, TypeScript &amp; Tailwind CSS.
                    Focused on real-time features, clean UI/UX, and exceptional user experiences.
                </p>
            </div>
            <div className='max-w-7xl mx-auto px-4 lg:px-10 '>
                <div className='flex flex-col lg:flex-row '>
                    {/* text section */}
                    <div className='w-full lg:w-1/3 lg:pr-10 pt-10 lg:pt-40 pb-10 lg:pb-96 '>
                        <div className='sticky top-[15vh] lg:top-50 mb-10 lg:mb-0'>
                            <span className='inline-block px-4 py-1 border border-gray-200 rounded-full text-xs lg:text-sm font-medium tracking-widest text-white/50 mb-4 lg:mb-6 '>
                                RECENT WORKS
                            </span>
                            <h2 className='text-3xl lg:text-5xl font-bold text-[#111827] mb-4 lg:mb-6 leading-tight text-white'>
                                Highlighted Projects
                            </h2>
                            <p className='text-sm lg:text-lg text-gray-500 leading-relaxed'>
                                Built high-performance, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Specialized in real-time features with WebSocket and delivering exceptional user experiences.  </p>
                        </div>
                    </div>
                    {/* project section */}
                    <div className='w-full lg:w-2/3 '>
                        <AllProject />
                    </div>
                </div>
            </div>
        </div>
    )
}
