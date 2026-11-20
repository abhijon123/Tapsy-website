"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VideoDialog } from "@/components/ui/video-dialog";
import { assetUrl } from "@/lib/utils";

export function HeroMockup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
      <motion.div
        className="relative mx-auto md:mr-0"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-4 left-1/2 h-8 w-[65%] -translate-x-1/2 rounded-[100%] bg-black/35 blur-2xl"
          />

          {/* Screen only — no device chrome */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative mx-auto block aspect-[9/19.5] w-[280px] cursor-pointer overflow-hidden rounded-[2rem] bg-black shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:w-[310px] md:mx-0 lg:w-[340px]"
            aria-label="Play Bella Vista review preview"
          >
            <Image
              src={assetUrl("/assets/app-reel-bellavista.png")}
              alt="Tapsy 30s video review of Bella Vista"
              fill
              priority
              sizes="320px"
              className="phone-media"
            />

            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-sm">
                <Play className="h-6 w-6 fill-zinc-900 pl-0.5" />
              </span>
            </span>
          </button>
        </motion.div>
      </motion.div>

      <VideoDialog
        open={open}
        onOpenChange={setOpen}
        posterSrc={assetUrl("/assets/app-reel-bellavista.png")}
      />
    </div>
  );
}
