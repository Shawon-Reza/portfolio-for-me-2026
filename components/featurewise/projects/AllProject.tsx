"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "./project.data";


interface StickyCardProps {
    i: number;
    id: string;
    title: string;
    imageSrc: string;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    description: string;

    category?: string;
    tags?: string[];
    cta?: string;

    accent?: string;
    accentBg?: string;
    accentBorder?: string;

    icon?: any;
}


const StickyCard_001 = ({
    i,
    id,
    title,
    imageSrc,
    progress,
    range,
    targetScale,
    description,

    category,
    tags = [],
    cta = "View Details",

    accent = "#8b5cf6",
    accentBg = "rgba(139,92,246,0.15)",
    accentBorder = "rgba(139,92,246,0.3)",

    icon: Icon,

}: StickyCardProps) => {


    const container = useRef(null);

    const scale = useTransform(
        progress,
        range,
        [1, targetScale]
    );


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (

        <div
            ref={container}
            className="
            sticky 
            pointer-events-none
            top-0
            flex 
            items-center 
            justify-center
            w-full
            mt-10
            lg:mt-60
            py-6
            lg:py-20
            -mb-[5vh]
            lg:-mb-56
            "
        >


            <motion.div

                style={{
                    scale,
                    top: `calc(-5vh + 150px)`,
                    zIndex: projects.length - i,

                }}


                className="
                pointer-events-auto
                relative
                grid
                overflow-hidden
                rounded-[22px]
                border
                border-white/[0.07]
                bg-[#0F1624]
                shadow-[0_28px_80px_rgba(0,0,0,0.55)]
                backdrop-blur-2xl

                w-full
                max-w-[1500px]

                min-h-[520px]

                lg:grid-cols-[1.1fr_0.9fr]

                "
            >



                {/* LEFT SIDE */}

                <div
                    className="
                relative
                flex
                flex-col
                justify-center
                p-8
                lg:p-12
                "
                >



                    {/* Ghost Number */}

                    <span
                        className="
                    pointer-events-none
                    absolute
                    right-7
                    top-5
                    text-[90px]
                    font-black
                    text-white/[0.04]
                    "
                    >

                        0{i + 1}

                    </span>



                    {/* Category */}

                    <div

                        className="
                    mb-5
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-3
                    py-1
                    text-[11px]
                    uppercase
                    tracking-widest
                    text-white/60
                    "

                        style={{
                            background: accentBg,
                            borderColor: accentBorder
                        }}

                    >

                        <span

                            className="
                        h-1.5
                        w-1.5
                        rounded-full
                        "

                            style={{
                                background: accent
                            }}

                        />


                        {category || "Project"}

                    </div>




                    {/* Title */}

                    <h2

                        className="
                    mb-4
                    text-[clamp(1.8rem,3vw,2.6rem)]
                    font-normal
                    leading-tight
                    text-white
                    "

                    >

                        {title}

                    </h2>



                    {/* Description */}


                    <p

                        className="
                    mb-6
                    max-w-[420px]
                    text-sm
                    leading-[1.8]
                    text-white/50
                    "

                    >

                        {description}

                    </p>




                    {/* Tags */}

                    <div

                        className="
                    mb-7
                    flex
                    flex-wrap
                    gap-2
                    "

                    >

                        {
                            tags.map(tag => (

                                <span

                                    key={tag}

                                    className="
                            rounded-full
                            border
                            px-3
                            py-1
                            text-[10px]
                            "

                                    style={{

                                        background: accentBg,
                                        borderColor: accentBorder,
                                        color: accent

                                    }}

                                >

                                    {tag}

                                </span>


                            ))
                        }


                    </div>




                    {/* CTA */}

                    {/* <Link

                        href={`/project/${id}`}

                        className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    transition-all
                    "

                        style={{
                            color: accent
                        }}

                    >

                        {cta}

                        <ArrowRight
                            size={14}
                            className="
                    transition-transform
                    group-hover:translate-x-1
                    "
                        />

                    </Link> */}



                </div>






                {/* RIGHT IMAGE */}



                <div

                    className="
                relative
                min-h-[250px]
                overflow-hidden
                "

                >



                    <div

                        className="
                    absolute
                    inset-0
                    overflow-hidden
                    border-t
                    lg:border-t-0
                    lg:border-l
                    "

                        style={{
                            borderColor: accentBorder
                        }}

                    >


                        <Image

                            src={imageSrc}

                            alt={title}

                            fill

                            className="
                        object-contain
                        brightness-[0.65]
                        grayscale-[30%]
                        transition-all
                        duration-700
                        hover:scale-105
                        "

                        />




                        {/* Glow */}

                        <div

                            className="
                        absolute
                        inset-0
                        "

                            style={{

                                background:
                                    `radial-gradient(60% 60% at 50% 100%, ${accent}28 0%, transparent 100%)`

                            }}

                        />




                        {/* Icon */}

                        {

                            Icon &&

                            <div

                                className="
                        absolute
                        bottom-5
                        right-5
                        grid
                        h-11
                        w-11
                        place-items-center
                        rounded-xl
                        border
                        backdrop-blur-xl
                        "

                                style={{

                                    background: accentBg,
                                    borderColor: accentBorder,
                                    color: accent

                                }}

                            >

                                <Icon size={20} />


                            </div>

                        }



                    </div>


                </div>




            </motion.div>


        </div>


    )

};





const Skiper16 = () => {


    const container = useRef(null);


    const { scrollYProgress } = useScroll({

        target: container,

        offset: [
            "start start",
            "end end"
        ]

    });



    return (

        <ReactLenis root>


            <main

                ref={container}

                className="
relative
pointer-events-none
flex
w-full
flex-col
items-center
justify-center
pb-[30vh]
lg:pb-[100vh]
pt-[10vh]
"

            >


                {
                    projects.map((project, i) => {


                        return (

                            <StickyCard_001

                                key={`p_${i}`}

                                i={i}

                                {...project}

                                progress={scrollYProgress}

                                range={[
                                    i * 0.15,
                                    1
                                ]}

                                targetScale={1}


                            />

                        )


                    })

                }



            </main>


        </ReactLenis>


    )


}





function AllProject() {

    return (

        <div>

            <div className="-my-60 lg:-my-96">

                <Skiper16 />

            </div>

        </div>

    )

}



export default AllProject;