"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  Scissors,
  Volume2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "trim",
    label: "Smart trim",
    detail: "Cut dead space · keep the punch",
    icon: Scissors,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "audio",
    label: "Audio clean",
    detail: "Noise down · voice clear",
    icon: Volume2,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "geo",
    label: "Geo + vibe tags",
    detail: "Neighborhood · Outstanding",
    icon: MapPin,
    color: "from-violet-600 to-indigo-500",
  },
  {
    id: "verified",
    label: "Verified badge",
    detail: "NFC visit proof stamped",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-400",
  },
];

type Mode = "auto" | "manual";

export function StudioBoard() {
  const [mode, setMode] = useState<Mode>("auto");
  const [done, setDone] = useState<number[]>([]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setDone([]);
    const timers: number[] = [];

    steps.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setDone((prev) => (prev.includes(i) ? prev : [...prev, i]));
      }, 500 + i * 750);
      timers.push(t);
    });

    const loop = window.setTimeout(() => {
      setCycle((c) => c + 1);
    }, 500 + steps.length * 750 + 3200);
    timers.push(loop);

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [cycle, mode]);

  return (
    <div className="mt-14 rounded-[32px] bg-[#0a0a0f] px-5 py-10 text-white sm:px-8 sm:py-12">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h3 className="text-[clamp(1.75rem,3.6vw,2.6rem)] font-bold tracking-[-0.035em] leading-[1.1]">
          <span className="block">Record in seconds.</span>
          <span className="block italic text-gradient-tapsy">Edit in zero.</span>
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
          One take in. Tapsy finishes the polish — trim, clean audio, tags, and
          verified badge — before you even leave the room.
        </p>
      </div>

      <div className="site-rail grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-white/[0.06] p-1">
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

          <h4 className="text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold tracking-tight">
            {mode === "auto"
              ? "Studio finishes the take for you."
              : "Tune every polish step yourself."}
          </h4>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
            {mode === "auto"
              ? "Hit stop recording. Tapsy runs trim, audio clean, geo tags, and verification in sequence — done before you post."
              : "Flip each tool on or off. Same board, same speed, still one tap to publish when you’re ready."}
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "No CapCut. No exports. No waiting.",
              "Live status as each polish step completes",
              "Verified visit badge rides with the clip",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[14px] text-white/80">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] bg-white/[0.045] p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] sm:p-5">
          <div className="mb-4 flex items-center gap-3 rounded-2xl bg-black/35 p-3">
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
                  ? "Auto-polishing your take…"
                  : "Applying selected studio tools…"}
              </p>
            </div>
            <div className="rounded-full bg-gradient-tapsy px-3 py-1 text-[11px] font-bold">
              Studio
            </div>
          </div>

          <p className="mb-3 text-[12px] font-medium text-white/45">
            Polish steps on this take
          </p>

          <div className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isDone = done.includes(i);
              return (
                <div
                  key={step.id}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl bg-white/[0.035] px-3 py-2.5 transition-colors duration-300",
                    isDone && "bg-violet-500/15"
                  )}
                  style={{ opacity: isDone ? 1 : 0.45 }}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                      step.color
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold">{step.label}</p>
                    <p className="truncate text-[11px] text-white/45">{step.detail}</p>
                  </div>
                  <span
                    className={cn(
                      "text-[11px] font-bold transition-colors",
                      isDone ? "text-emerald-300" : "text-white/30"
                    )}
                  >
                    {isDone ? "Done" : "…"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
