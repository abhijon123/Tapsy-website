"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoDialog } from "@/components/ui/video-dialog";

export function HeroMockup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      <motion.div
        className="relative mx-auto"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/45 blur-2xl"
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="hero-phone relative mx-auto block aspect-[9/19.2] w-[240px] cursor-pointer sm:w-[268px]"
            aria-label="Play Bella Vista review preview"
          >
            <div className="hero-phone-screen">
              <Image
                src="/assets/app-reel-bellavista.png"
                alt="Tapsy 30s video review of Bella Vista"
                fill
                priority
                sizes="268px"
                className="object-cover object-[center_8%] scale-[1.12]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-sm">
                  <Play className="h-6 w-6 fill-zinc-900 pl-0.5" />
                </span>
              </span>
            </div>
          </button>
        </motion.div>
      </motion.div>

      <VideoDialog
        open={open}
        onOpenChange={setOpen}
        posterSrc="/assets/app-reel-bellavista.png"
      />
    </div>
  );
}
