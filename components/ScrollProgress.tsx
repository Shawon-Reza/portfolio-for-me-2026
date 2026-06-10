"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  return (
   <div className="fixed top-0 left-0 w-full h-[4px] bg-white/5 backdrop-blur-xl z-[9999]">
  <motion.div
    className="h-full rounded-full"
    style={{
      scaleX,
      transformOrigin: "left",
      background:
        "linear-gradient(90deg,#ffffff,#60a5fa)",
    }}
  />
</div>
  );
}