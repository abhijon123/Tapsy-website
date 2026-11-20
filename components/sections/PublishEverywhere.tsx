"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Compass, MapPin, Flame, Users, Utensils, Moon, Coffee } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { cn } from "@/lib/utils";

const destinations = [
  { id: "discover", label: "Discover feed", handle: "Near you", icon: Compass, color: "from-blue-500 to-violet-500" },
  { id: "followers", label: "Your followers", handle: "12.4K people", icon: Users, color: "from-violet-500 to-fuchsia-500" },
  { id: "nearby", label: "Nearby map", handle: "0.4 mi away", icon: MapPin, color: "from-fuchsia-500 to-pink-400" },
  { id: "trending", label: "Trending tonight", handle: "City hot list", icon: Flame, color: "from-pink-500 to-orange-400" },
  { id: "restaurant", label: "Restaurant", handle: "Category feed", icon: Utensils, color: "from-blue-500 to-fuchsia-500" },
  { id: "nightlife", label: "Nightlife", handle: "Category feed", icon: Moon, color: "from-indigo-500 to-violet-500" },
  { id: "cafe", label: "Cafes", handle: "Category feed", icon: Coffee, color: "from-fuchsia-500 to-[#FF6A3D]" },
];

type Mode = "auto" | "manual";

export function PublishEverywhere() {
  const [mode, setMode] = useState<Mode>("auto");
  const [published, setPublished] = useState<number[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPublished([]);
    const timers: number[] = [];

    destinations.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setPublished((prev) => (prev.includes(i) ? prev : [...prev, i]));
      }, 600 + i * 700);
      timers.push(t);
    });

    const loop = window.setTimeout(() => {
      setCycle((c) => c + 1);
    }, 600 + destinations.length * 700 + 4000);
    timers.push(loop);

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [cycle, mode]);

  return (
    <section
      id="publish"
      className="relative overflow-hidden bg-[#0a0a0f] py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(124,58,237,0.22),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(217,70,239,0.14),transparent_45%)]" />

      <div className="site-rail relative">
        {/* Trust metrics — open, no divider strokes */}
        <Reveal className="mb-12 sm:mb-14">
          <MetricsStrip />
        </Reveal>

        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="type-section text-white">
            Tap once.{" "}
            <span className="italic text-gradient-tapsy">It lands everywhere.</span>
          </h2>
          <p className="type-lead mx-auto mt-4 text-white/60">
            One 30-second take for any spot — cafe, gym, hotel, salon, or night out.
            Tapsy drops it across discover, followers, nearby, and every category you tag.
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left narrative + mode toggle */}
          <Reveal delay={0.08}>
            <div className="mb-6 inline-flex rounded-full bg-white/[0.06] p-1 backdrop-blur-md">
              {(
                [
                  { id: "auto", label: "Let Tapsy do it" },
                  { id: "manual", label: "Do it yourself" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setMode(opt.id);
                    setCycle((c) => c + 1);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                    mode === opt.id
                      ? "bg-white text-zinc-900 shadow-lg shadow-black/30"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
              {mode === "auto"
                ? "Tapsy routes your take for you."
                : "Pick exactly where it goes."}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/60">
              {mode === "auto"
                ? "We place your clip in Discover, notify followers, pin it nearby, and surface it in the right categories — the moment you tap Post."
                : "Choose categories and audiences yourself. Still one tap to publish. Still live everywhere you select."}
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "One upload → every relevant feed",
                "Live publish status, destination by destination",
                "Verified visit badge travels with the clip",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-white/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right animated publish board — borderless like link.me */}
          <Reveal delay={0.12}>
            <div className="relative rounded-[28px] bg-white/[0.045] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-5">
              <div className="pointer-events-none absolute inset-y-8 left-[4.25rem] right-6 opacity-40 sm:left-[4.75rem]">
                <AnimatedBeam pulseKey={cycle} />
              </div>
              <div className="relative z-10 mb-4 flex items-center gap-3 rounded-2xl bg-black/35 p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/assets/app-reel-bellavista.png"
                    alt="Your take"
                    fill
                    className="phone-media"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-semibold">Bella Vista · 0:28</p>
                  <p className="truncate text-[12px] text-white/50">
                    {mode === "auto"
                      ? "Auto-routing to 7 destinations…"
                      : "Publishing to selected feeds…"}
                  </p>
                </div>
                <div className="rounded-full bg-gradient-tapsy px-3 py-1 text-[11px] font-bold">
                  Live
                </div>
              </div>

              <p className="relative z-10 mb-3 text-[12px] font-medium text-white/45">
                Choose where this take appears
              </p>

              <div className="relative z-10 space-y-2">
                {destinations.map((dest, i) => {
                  const Icon = dest.icon;
                  const isDone = published.includes(i);
                  return (
                    <div
                      key={dest.id}
                      className={cn(
                        "flex items-center gap-3 rounded-2xl bg-white/[0.035] px-3 py-2.5 transition-colors duration-300",
                        isDone && "bg-violet-500/15"
                      )}
                      style={{
                        opacity: isDone ? 1 : 0.45,
                        animationDelay: isDone ? "0ms" : undefined,
                      }}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                          dest.color
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold">{dest.label}</p>
                        <p className="text-[11px] text-white/45">{dest.handle}</p>
                      </div>
                      <div
                        className={cn(
                          "flex h-7 min-w-[7.5rem] items-center justify-center gap-1.5 rounded-full text-[11px] font-bold transition-all duration-400",
                          isDone
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-white/5 text-white/35"
                        )}
                      >
                        {isDone ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            Published
                          </>
                        ) : (
                          "Waiting…"
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
