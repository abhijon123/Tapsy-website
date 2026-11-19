"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Utensils,
  Plane,
  Dumbbell,
  Shirt,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { cn } from "@/lib/utils";

function Drift({
  children,
  className,
  x = 14,
  duration = 5.5,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  x?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("w-full", className)}
      animate={{ x: [0, x, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

const categories = [
  { label: "Restaurant", icon: Utensils, active: true },
  { label: "Travel", icon: Plane, active: false },
  { label: "Fitness", icon: Dumbbell, active: false },
  { label: "Fashion", icon: Shirt, active: false },
];

const tags = [
  { label: "Pet-friendly", tone: "bg-zinc-100 text-zinc-700" },
  { label: "Live Music", tone: "bg-gradient-tapsy text-white" },
  { label: "Outdoor Seating", tone: "bg-zinc-100 text-zinc-700" },
  { label: "WiFi", tone: "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white" },
];

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=240&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=240&q=80",
];

export function OrbitShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <h2 className="type-section text-zinc-950">
            <WordsPullUp text="Everything in one tap" className="justify-center" />
          </h2>
          <p className="type-lead mx-auto mt-3 max-w-lg">
            Reviews, ratings, tags, and discovery — the product around the take.
          </p>
        </div>

        {/* 3-column stage: left cards | phone | right cards — guaranteed gap */}
        <div className="relative mx-auto grid max-w-5xl items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_260px_minmax(0,1fr)] lg:gap-10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[70%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.07),transparent_70%)] lg:block"
          />

          {/* LEFT — drifts left/right, never overlaps phone */}
          <div className="relative z-20 hidden flex-col justify-center gap-5 lg:flex">
            <Drift x={-12} duration={5.2} delay={0.1} className="max-w-[270px]">
              <div className="rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <div className="flex gap-3">
                  <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=200&q=80"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400" />
                      ))}
                    </div>
                    <p className="mt-1 line-clamp-3 text-[12px] leading-snug text-zinc-600">
                      “Hands down the best pasta in downtown. The vibe was unmatched.”
                    </p>
                  </div>
                </div>
              </div>
            </Drift>

            <div className="flex max-w-[270px] gap-3">
              <Drift x={10} duration={4.8} delay={0.3} className="w-[88px] shrink-0">
                <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl bg-white shadow-[0_16px_36px_-18px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                  <p className="text-[11px] font-medium text-zinc-400">Avg rating</p>
                  <p className="mt-1 text-[22px] font-extrabold tracking-tight text-zinc-900">
                    4.5
                  </p>
                </div>
              </Drift>
              <Drift x={-14} duration={5.6} delay={0.5} className="w-[88px] shrink-0">
                <div className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-2xl bg-white shadow-[0_16px_36px_-18px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                  <p className="text-[11px] font-medium text-zinc-400">Reviews</p>
                  <p className="mt-1 text-[22px] font-extrabold tracking-tight text-zinc-900">
                    250
                  </p>
                </div>
              </Drift>
            </div>

            <Drift x={12} duration={6} delay={0.2} className="max-w-[240px]">
              <div className="rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <p className="text-[12px] font-semibold text-zinc-800">Weekly trend</p>
                <svg viewBox="0 0 180 64" className="mt-2 h-14 w-full" aria-hidden>
                  <defs>
                    <linearGradient id="orbitLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="100%" stopColor="#FF6A3D" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4 48 C 28 46, 36 28, 54 32 S 86 52, 104 30 S 140 12, 176 18"
                    fill="none"
                    stroke="url(#orbitLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="mt-1 flex justify-between text-[10px] text-zinc-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </Drift>

            <Drift x={-10} duration={4.6} delay={0.4} className="max-w-[240px]">
              <div className="rounded-2xl bg-white px-4 py-3.5 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-zinc-800">Excellent</span>
                  <span className="text-zinc-400">Vibe</span>
                </div>
                <div className="relative mt-3 h-2 rounded-full bg-gradient-to-r from-orange-400 via-fuchsia-500 to-violet-600">
                  <span className="absolute right-[18%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-fuchsia-500 shadow" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-zinc-400">
                  <span>Bad</span>
                  <span>Outstanding</span>
                </div>
              </div>
            </Drift>
          </div>

          {/* CENTER phone */}
          <div className="relative z-10 mx-auto w-[210px] sm:w-[240px] lg:w-[260px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-phone aspect-[9/19.2]">
                <div className="hero-phone-screen">
                  <Image
                    src="/assets/app-reel-bellavista.png"
                    alt="Tapsy video review"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_8%] scale-[1.12]"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — drifts left/right, never overlaps phone */}
          <div className="relative z-20 hidden flex-col items-end justify-center gap-5 lg:flex">
            <Drift x={14} duration={5.4} delay={0.15} className="max-w-[280px]">
              <div className="rounded-2xl bg-white p-3 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <div className="grid grid-cols-4 gap-2">
                  {categories.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="flex flex-col items-center gap-1.5">
                        <div
                          className={cn(
                            "flex h-11 w-11 items-center justify-center rounded-xl",
                            c.active
                              ? "bg-gradient-tapsy text-white shadow-md shadow-fuchsia-500/25"
                              : "bg-zinc-100 text-zinc-500"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-medium text-zinc-500">{c.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Drift>

            <Drift x={-12} duration={5.8} delay={0.35} className="max-w-[260px]">
              <div className="rounded-2xl bg-white p-3.5 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <p className="text-[12px] font-semibold leading-snug text-zinc-800">
                  How people search for spots like yours
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t.label}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                        t.tone
                      )}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </Drift>

            <Drift x={16} duration={6.2} delay={0.25} className="w-[120px]">
              <div className="overflow-hidden rounded-[1.4rem] bg-[#111113] p-[5px] shadow-[0_22px_44px_-18px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.15rem] bg-black">
                  <Image
                    src="/assets/app-discover.png"
                    alt="Tapsy Discover"
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </Drift>

            <Drift x={-10} duration={5.1} delay={0.45} className="max-w-[220px]">
              <div className="rounded-2xl bg-white p-3 shadow-[0_18px_40px_-20px_rgba(15,10,40,0.28)] ring-1 ring-zinc-100">
                <p className="mb-2 text-[12px] font-semibold text-zinc-800">My Gallery</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {gallery.map((src) => (
                    <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image src={src} alt="" fill className="object-cover" sizes="70px" />
                    </div>
                  ))}
                </div>
              </div>
            </Drift>
          </div>

          {/* Tablet / mobile: cards below phone, still clear of it */}
          <div className="col-span-full mt-2 grid gap-3 sm:grid-cols-2 lg:hidden">
            <Drift x={10} duration={5} className="max-w-none">
              <div className="rounded-2xl bg-white p-3.5 shadow-md ring-1 ring-zinc-100">
                <div className="flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <p className="text-[13px] font-semibold text-zinc-800">4.5 avg · 250 reviews</p>
                </div>
                <p className="mt-2 text-[12px] text-zinc-500">
                  “Best pasta in downtown. The vibe was unmatched.”
                </p>
              </div>
            </Drift>
            <Drift x={-10} duration={5.4} delay={0.2} className="max-w-none">
              <div className="rounded-2xl bg-white p-3.5 shadow-md ring-1 ring-zinc-100">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {tags.slice(0, 3).map((t) => (
                    <span
                      key={t.label}
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                        t.tone
                      )}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Heart className="h-3.5 w-3.5 text-fuchsia-500" />
                  <MessageCircle className="h-3.5 w-3.5" />
                  <Share2 className="h-3.5 w-3.5" />
                </div>
              </div>
            </Drift>
          </div>
        </div>
      </div>
    </section>
  );
}
