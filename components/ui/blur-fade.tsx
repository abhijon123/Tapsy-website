"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  y = 16,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = window.setTimeout(() => setShown(true), 900 + delay * 1000);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          window.clearTimeout(fallback);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        shown
          ? "translate-y-0 opacity-100 blur-0"
          : `opacity-0 blur-[6px]`,
        className
      )}
      style={{
        transitionDelay: shown ? `${delay}s` : "0s",
        transform: shown ? undefined : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
