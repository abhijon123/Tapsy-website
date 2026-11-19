"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroPrismaGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
      {/* Top optical prism beam */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] prisma-light-beam blur-[80px] rounded-full opacity-70" />

      {/* Secondary accent color spots */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-purple-400/20 blur-[90px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[15%] w-80 h-80 rounded-full bg-orange-400/20 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-80 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-pink-400/20 blur-[110px]"
      />

      {/* Modern subtle perspective grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

