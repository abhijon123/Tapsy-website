"use client";

import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedBeamProps = {
  className?: string;
  /** Restart pulse when this changes */
  pulseKey?: number | string;
};

/** Lightweight SVG beam for publish / connect stories */
export function AnimatedBeam({ className, pulseKey = 0 }: AnimatedBeamProps) {
  const id = useId().replace(/:/g, "");
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(false);
    const t = window.setTimeout(() => setOn(true), 80);
    return () => window.clearTimeout(t);
  }, [pulseKey]);

  return (
    <svg
      className={cn("pointer-events-none h-full w-full overflow-visible", className)}
      viewBox="0 0 200 320"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`beam-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="40%" stopColor="#9333EA" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#D946EF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[40, 100, 160, 220, 280].map((y, i) => (
        <path
          key={y}
          d={`M 24 28 C 70 ${y * 0.35}, 110 ${y * 0.7}, 176 ${y}`}
          stroke={`url(#beam-${id})`}
          strokeWidth="2"
          strokeLinecap="round"
          className={cn(
            "transition-[stroke-dashoffset] duration-1000 ease-out",
            on ? "opacity-100" : "opacity-0"
          )}
          style={{
            strokeDasharray: 280,
            strokeDashoffset: on ? 0 : 280,
            transitionDelay: `${i * 120}ms`,
          }}
        />
      ))}
    </svg>
  );
}
