"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { StudioBoard } from "@/components/sections/StudioBoard";
import { cn } from "@/lib/utils";

const STACK = siteContent.venues.slice(0, 5);
const N = STACK.length;
const AUTO_MS = 2000;
const RESUME_MS = 8000;

/** Shortest signed circular distance from `from` → `to` on a ring of size N */
function circularOffset(from: number, to: number) {
  let d = to - from;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

/** link.me-style ring — original size; active phone always on top */
function ringStyle(offset: number) {
  const abs = Math.abs(offset);
  if (abs > 2) {
    return {
      x: offset > 0 ? 180 : -180,
      scale: 0.58,
      rotateY: offset > 0 ? -12 : 12,
      z: -120,
      opacity: 0,
      zIndex: 1,
    };
  }
  if (offset === 0) {
    return { x: 0, scale: 1, rotateY: 0, z: 80, opacity: 1, zIndex: 50 };
  }
  if (abs === 1) {
    return {
      x: offset > 0 ? 118 : -118,
      scale: 0.84,
      rotateY: offset > 0 ? -12 : 12,
      z: -40,
      opacity: 1,
      zIndex: 30,
    };
  }
  return {
    x: offset > 0 ? 190 : -190,
    scale: 0.7,
    rotateY: offset > 0 ? -14 : 14,
    z: -80,
    opacity: 0.95,
    zIndex: 20,
  };
}

export function AppShowcase() {
  const [active, setActive] = useState(0);
  const hoverPaused = useRef(false);
  const lockedUntil = useRef(0);
  const focused = STACK[active];

  const focusPhone = (index: number) => {
    setActive(index);
    // Keep clicked focus intact — auto-scroll waits before continuing
    lockedUntil.current = Date.now() + RESUME_MS;
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (hoverPaused.current || Date.now() < lockedUntil.current) return;
      setActive((i) => (i + 1) % N);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const items = useMemo(() => {
    return STACK.map((venue, i) => ({
      venue,
      index: i,
      offset: circularOffset(active, i),
    })).sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset));
  }, [active]);

  return (
    <section id="discover" className="relative overflow-x-clip pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-0">
        <div className="relative z-10 min-w-0 px-4 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] lg:pr-10">
          <Reveal className="overflow-visible">
            <h2 className="type-section overflow-visible text-foreground [font-size:clamp(1.65rem,3.4vw,2.85rem)]">
              <span className="block">Find top spots</span>
              <span className="block overflow-visible italic text-gradient-tapsy">
                without guesswork
              </span>
            </h2>
            <p className="type-lead mt-4 max-w-md">
              Browse genuine video reels recorded at the venue. See the lighting, hear the music,
              know before you go.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={focused.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-8 max-w-sm"
              >
                <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-zinc-500">
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-zinc-700">
                    {focused.category}
                  </span>
                  <span className="font-mono text-zinc-400">{focused.duration}</span>
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    {focused.rating.toFixed(1)}
                  </span>
                </div>
                <h3 className="mt-2 text-[22px] font-bold tracking-tight text-zinc-950">
                  {focused.title}
                </h3>
                <p className="mt-1 text-[15px] text-zinc-500">{focused.place}</p>
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 text-[13px] font-medium text-zinc-400">
              Auto-rotates — tap a phone to focus it
            </p>
          </Reveal>
        </div>

        <div
          className="relative isolate z-0 flex h-[440px] w-full items-center justify-center overflow-visible px-6 sm:h-[500px] sm:px-10 lg:h-[560px] lg:justify-end lg:pr-16 xl:pr-24"
          style={{ perspective: 1600 }}
          onMouseEnter={() => {
            hoverPaused.current = true;
          }}
          onMouseLeave={() => {
            hoverPaused.current = false;
          }}
        >
          <div
            className="relative h-[min(520px,78vw)] w-[min(252px,42vw)] sm:h-[520px] sm:w-[252px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {items.map(({ venue, index, offset }) => {
              const style = ringStyle(offset);
              const isActive = offset === 0;

              return (
                <motion.button
                  key={venue.id}
                  type="button"
                  aria-label={`Focus ${venue.title}`}
                  aria-pressed={isActive}
                  onClick={() => focusPhone(index)}
                  className={cn(
                    "absolute left-0 top-0 origin-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400",
                    isActive ? "cursor-default" : "cursor-pointer",
                    Math.abs(offset) > 2 && "pointer-events-none"
                  )}
                  style={{ zIndex: style.zIndex }}
                  initial={false}
                  animate={{
                    x: style.x,
                    z: style.z,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <div
                    className={cn(
                      "hero-phone aspect-[9/19.2] w-[min(210px,38vw)] sm:w-[230px] lg:w-[252px]",
                      isActive
                        ? "shadow-[0_28px_60px_-18px_rgba(0,0,0,0.55)] ring-2 ring-white/40"
                        : "shadow-lg"
                    )}
                  >
                    <div className="hero-phone-screen">
                      <Image
                        src={venue.image}
                        alt={venue.title}
                        fill
                        className="object-cover"
                        sizes="252px"
                        priority={isActive}
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15",
                          !isActive && "bg-black/25"
                        )}
                      />
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                            <Play className="h-4 w-4 fill-white" />
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                        <p className="truncate text-[12px] font-bold text-white">{venue.title}</p>
                        <p className="truncate text-[10px] text-white/70">{venue.place}</p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <StudioBoard />
      </div>
    </section>
  );
}
