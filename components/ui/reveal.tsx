"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/**
 * CSS-driven reveal — never sticks at opacity 0 (unlike Framer initial states
 * when rAF is paused / IntersectionObserver races).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: show after short timeout if IO never fires
    const fallback = window.setTimeout(() => setShown(true), 1200);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          window.clearTimeout(fallback);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-base",
        shown ? "reveal-shown" : "reveal-hidden",
        className
      )}
      style={{ transitionDelay: shown ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = window.setTimeout(() => setShown(true), 1400);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          window.clearTimeout(fallback);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className, shown && "stagger-shown")}
      style={{ ["--stagger-delay" as string]: `${delay}s` }}
      data-shown={shown ? "true" : "false"}
    >
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<{ index?: number }>, {
          index: i,
        });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={cn("stagger-item", className)}
      style={{ transitionDelay: `calc(var(--stagger-delay, 0s) + ${index * 0.08}s)` }}
    >
      {children}
    </div>
  );
}
