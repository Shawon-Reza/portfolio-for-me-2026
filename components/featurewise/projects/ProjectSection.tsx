import React from 'react'
import AllProject from './AllProject'


export default function ProjectSection() {
    return (
        <div id='projects' className=''>
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
