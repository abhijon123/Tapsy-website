"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Type, Video } from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { BlurFade } from "@/components/ui/blur-fade";
import { useSectionParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

export function BeforeAfter() {
  const [mode, setMode] = useState<"text" | "video">("video");
  const { ref, y } = useSectionParallax(0.14);

  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <BlurFade className="mx-auto max-w-2xl text-center">
          <h2 className="type-section text-foreground">
            <WordsPullUp text="Same place. Totally different trust." className="justify-center" />
          </h2>
          <p className="type-lead mx-auto mt-3 max-w-xl">
            Reading “great vibes” is guesswork. Watching a 30-second take is proof.
          </p>
        </BlurFade>

        <div className="mx-auto mt-8 flex w-fit rounded-full bg-white p-1 shadow-[0_12px_40px_-24px_rgba(15,10,40,0.35)]">
          <button
            onClick={() => setMode("text")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition",
              mode === "text" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:text-foreground"
            )}
          >
            <Type className="h-3.5 w-3.5" />
            Old text review
          </button>
          <button
            onClick={() => setMode("video")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition",
              mode === "video" ? "bg-gradient-tapsy text-white" : "text-zinc-500 hover:text-foreground"
            )}
          >
            <Video className="h-3.5 w-3.5" />
            Tapsy 30s take
          </button>
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {mode === "text" ? (
              <motion.article
                key="text"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-[28px] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,10,40,0.3)] sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-bold text-zinc-900">Bella Vista</p>
                    <p className="text-[12px] text-zinc-400">★★★★★ · “Amazing!!!”</p>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-500">
                    Text wall
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-zinc-500">
                  Food was good. Service was nice. Ambience was great. Would recommend to friends
                  and family. Parking was okay. Wait time was fine. Pasta was delicious. Overall a
                  solid experience if you like Italian…
                </p>
                <p className="mt-4 text-[13px] font-medium text-zinc-400">
                  You still don’t know the lighting, noise, or plate size.
                </p>
              </motion.article>
            ) : (
              <motion.article
                key="video"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden rounded-[28px] bg-zinc-950 shadow-[0_24px_60px_-28px_rgba(124,58,237,0.45)]"
              >
                <div ref={ref} className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-[-10%] will-change-transform"
                    style={{ transform: `translate3d(0, ${y}px, 0)` }}
                  >
                    <Image
                      src="/assets/app-reel-bellavista.png"
                      alt="Tapsy video review of Bella Vista"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white">
                      <span className="live-dot h-1.5 w-1.5 rounded-full bg-red-500" />
                      Live take · 0:28
                    </span>
                    <span className="rounded-full bg-gradient-tapsy px-2.5 py-1 text-[11px] font-bold text-white">
                      Verified visit
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[18px] font-bold text-white">Handmade pappardelle</p>
                    <p className="text-[13px] text-white/75">
                      See the room. Hear the buzz. Know before you go.
                    </p>
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
