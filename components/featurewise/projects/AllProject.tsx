"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import Link from "next/link";
import { allProjectDetails as projects } from "./allProjectDetails";

interface StickyCardProps {
    i: number;
    id: string;
    title: string;
    src: string;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    description: string;
    buttonText?: string;
    bgColor?: string;
    textColor?: string;
}

const StickyCard_001 = ({
    i,
    id,
    title,
    src,
    progress,
    range,
    targetScale,
    description,
    buttonText,
    bgColor,
    textColor,
}: StickyCardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // bg-[#0F1624]
        <div
            ref={container}
            className="sticky pointer-events-none top-0 lg:top-0 flex items-center justify-center w-full mt-10 lg:mt-60 py-6 lg:py-20 -mb-[5vh] lg:-mb-56 "
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 0 + 150}px)`,
                    zIndex: projects.length - i,
                    backgroundColor: "#0F1624",
                    color: textColor || "#111827",
                }}
                className="relative pointer-events-auto flex flex-col lg:flex-row h-auto min-h-[500px] lg:min-h-0 lg:h-[500px] w-full max-w-[1500px] mx-auto rounded-[32px] lg:rounded-[40px] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden group"
            >
                {/* Subtle Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Left Side: Modern Image Frame */}
                <div className="w-full lg:w-1/2 p-4 lg:p-6 h-[250px] sm:h-[300px] lg:h-full relative z-10">
                    <div className="w-full h-full relative rounded-[24px] lg:rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-[#0F1624] shadow-inner flex items-center justify-center p-4 group-hover:border-white/20 transition-colors duration-500">
                        <img
                            src={src}
                            alt={title}
                            className="w-full h-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>

                {/* Right Side: Elegant Typography & Content */}
                <div className="flex-1 lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-8 lg:py-10 text-white relative z-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-6 lg:mb-8 shadow-[0_0_20px_rgba(140,105,174,0.3)] border border-white/20 bg-white/10 backdrop-blur-md">
                        <span className="text-lg lg:text-xl font-bold text-white tracking-tight">0{i + 1}</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        {title}
                    </h2>

                    <p className="text-base lg:text-lg leading-relaxed max-w-lg font-light text-gray-400">
                        {description}
                    </p>

                    <div className="mt-8 lg:mt-12 relative z-50">
                        <Link
                            href={`/project/${id}`}
                            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group/btn"
                        >
                            <span className="font-semibold tracking-wide uppercase text-xs lg:text-sm text-gray-200 group-hover/btn:text-white transition-colors">View Details</span>
                            <svg
                                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300 text-gray-300 group-hover/btn:text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Skiper16 = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <ReactLenis root>
            <main
                ref={container}
                className="relative pointer-events-none flex w-full flex-col items-center justify-center pb-[30vh] lg:pb-[100vh] pt-[10vh] "
            >
                {projects.map((project, i) => {
                    const targetScale = 1;
                    return (
                        <StickyCard_001
                            key={`p_${i}`}
                            i={i}
                            {...project}
                            progress={scrollYProgress}
                            range={[i * 0.15, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </main>
        </ReactLenis>
    );
};

function AllProject() {
    return (
        <div className="">
            <div className="-my-60  lg:-my-96">
                <Skiper16 />
            </div>
        </div>
    );
}

export default AllProject;
