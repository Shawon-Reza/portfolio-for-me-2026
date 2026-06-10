"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* BIG AURA GLOW (background layer) */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 64,
          y: pos.y - 64,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,204,0.25), transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* INNER CORE CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 8,
          y: pos.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
        style={{
          background:
            "linear-gradient(135deg, #00ffcc, #3b82f6, #a855f7)",
          boxShadow: "0 0 20px rgba(0,255,204,0.6)",
        }}
      />
    </>
  );
}