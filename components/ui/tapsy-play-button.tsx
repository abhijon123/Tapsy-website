"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type TapsyPlayButtonProps = {
  playing?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { wrap: "h-11 w-11", ring: "h-[52px] w-[52px]", icon: "h-4 w-4" },
  md: { wrap: "h-14 w-14", ring: "h-[66px] w-[66px]", icon: "h-5 w-5" },
  lg: { wrap: "h-16 w-16", ring: "h-[76px] w-[76px]", icon: "h-6 w-6" },
};

/** Official Tapsy play / pause — no backdrop-blur (keeps video decode smooth) */
export function TapsyPlayButton({
  playing = false,
  className,
  size = "md",
}: TapsyPlayButtonProps) {
  const s = sizes[size];
  const gid = `tapsy-media-${useId().replace(/:/g, "")}`;

  return (
    <span
      className={cn("relative inline-flex items-center justify-center", s.ring, className)}
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full bg-white/30 ring-1 ring-white/50" />
      <span
        className={cn(
          "relative z-[1] flex items-center justify-center rounded-full bg-white/95",
          s.wrap
        )}
      >
        <svg viewBox="0 0 24 24" className={cn(s.icon, !playing && "ml-0.5")}>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="45%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#FF6A3D" />
            </linearGradient>
          </defs>
          {playing ? (
            <g fill={`url(#${gid})`}>
              <rect x="6" y="5" width="4.5" height="14" rx="1.5" />
              <rect x="13.5" y="5" width="4.5" height="14" rx="1.5" />
            </g>
          ) : (
            <path
              fill={`url(#${gid})`}
              d="M8.2 5.4c0-1.1 1.2-1.8 2.1-1.2l9.2 5.6c.9.5.9 1.9 0 2.5l-9.2 5.6c-.9.6-2.1-.1-2.1-1.2V5.4z"
            />
          )}
        </svg>
      </span>
    </span>
  );
}
