"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
}

export default function ZoomInReavelComponents({ children }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
                once: false,
                amount: 0.2,
            }}
            transition={{
                duration: 1.2,
                ease: "linear",
            }}
        >
            {children}
        </motion.div>
    );
}