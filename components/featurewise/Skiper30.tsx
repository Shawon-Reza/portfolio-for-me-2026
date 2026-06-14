"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";


const images = [
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442283/20251227_221305_uod1qb.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442268/PXL_20260307_073502737.PORTRAIT_edy6h1.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442265/tmp_e4b0e65f-5b72-403d-b5f5-c66621a13294_k9l8mi.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442255/tmp_13485502-aa9f-412e-84b9-7021e75b141d_sjdxq4.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442250/Picsart_26-02-28_11-01-04-685_zpdmbn.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442206/20251227_223031_eojqcz.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442219/IMG-20260314-WA0030_edx81b.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442258/tmp_83838604-0460-42d4-8df1-d7849b92b090_jqkyrq.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442200/Picsart_25-12-04_17-35-43-781_h1tzka.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442186/PXL_20260307_073300163.PORTRAIT_zynmss.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442169/PXL_20260307_073241287.PORTRAIT_cgnoxs.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442198/498655250_1936818780388242_2279349801671468624_n_pxcscm.jpg",
  "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442206/20251227_223031_eojqcz.jpg",
];
const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#eee] text-black max-w-7xl mx-auto my-10">
      <div className="font-geist flex h-15  items-center justify-center gap-2 bg-[#090E19] text-white">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#090E19] p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[6], images[7], images[8]]} y={y4} />
      </div>
      <div className="font-geist relative flex h-15 items-center justify-center gap-2 bg-[#090E19]">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-[''] text-white">
            scroll Up to see
          </span>
        </div>
      </div>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the siena.film . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
