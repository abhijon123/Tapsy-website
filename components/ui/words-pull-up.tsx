"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

interface Segment {
  text: string;
  className?: string;
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
  style,
}: {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [force, setForce] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setForce(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  const show = isInView || force;
  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap items-baseline justify-center overflow-visible ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={w.word + i}
          initial={false}
          animate={show ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
          transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block overflow-visible pb-[0.12em] leading-[1.2] ${w.className ?? ""}`}
          style={{ marginRight: "0.28em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
}

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [force, setForce] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const t = window.setTimeout(() => setForce(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  const show = isInView || force;

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap items-baseline overflow-visible ${className}`}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={word + i}
            initial={false}
            animate={show ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block overflow-visible pb-[0.12em] leading-[1.2]"
            style={{ marginRight: isLast ? 0 : "0.28em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute -right-[0.35em] top-[0.15em] text-[0.45em] text-fuchsia-500">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}
