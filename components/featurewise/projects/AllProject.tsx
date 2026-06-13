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
        <div
            ref={container}
            className="sticky pointer-events-none top-0 lg:top-0 flex items-center justify-center w-full mt-10 lg:mt-60 py-6 lg:py-20 -mb-[5vh] lg:-mb-56"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 0 + 150}px)`,
                    zIndex: projects.length - i,
                    backgroundColor: bgColor || "#DDF160",
                    color: textColor || "#111827",
                }}
                className="relative pointer-events-auto flex flex-col lg:flex-row h-auto min-h-[500px] lg:min-h-0 lg:h-[500px] w-full max-w-[1500px] mx-auto rounded-[32px] lg:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 overflow-hidden"
            >
                {/* Left Side: Modern Image Frame */}
                <div className="w-full lg:w-1/2 p-3 lg:p-4 h-[200px] sm:h-[250px] lg:h-full">
                    <img
                        src={src}
                        alt={title}
                        className="w-full h-full object-cover rounded-[24px] lg:rounded-[32px] shadow-sm bg-gray-200"
                    />
                </div>

                {/* Right Side: Elegant Typography & Content */}
                <div className="flex-1 lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-8 lg:py-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center mb-6 lg:mb-8 shadow-sm border border-gray-100">
                        <span className="text-lg lg:text-xl font-bold text-gray-800 tracking-tight">0{i + 1}</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight tracking-tight">
                        {title}
                    </h2>

                    <p className="text-base lg:text-xl leading-relaxed max-w-lg font-medium opacity-80">
                        {description}
                    </p>

                    <div className="mt-6 lg:mt-10 relative z-50">
                        <Link
                            href={`/project/${id}`}
                            className="inline-flex items-center space-x-3 font-bold tracking-wide uppercase text-sm group cursor-pointer hover:opacity-75 transition-opacity"
                        >
                            <span className="font-extrabold">View Details</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
