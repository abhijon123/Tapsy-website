"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Cursor glare card — light interactive depth without heavy glow */
export function MagicCard({ children, className }: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className={cn("group relative overflow-visible", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: hover
            ? `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(217,70,239,0.14), transparent 45%)`
            : undefined,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
