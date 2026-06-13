"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorType = "default" | "link" | "image";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [type, setType] = useState<CursorType>("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const detect = (e: MouseEvent) => {
      const el = e.target as HTMLElement;

      if (el.closest("a")) setType("link");
      else if (el.closest("img")) setType("image");
      else setType("default");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", detect);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", detect);
    };
  }, []);

  return (
    <>
      {/* OUTER RING (smooth lag) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/40 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: type === "link" ? 1.5 : type === "image" ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: type === "link" ? 0 : 1, // hide dot on link hover
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
    </>
  );
}