"use client";

import { siteContent } from "@/lib/content";
import { NumberTicker } from "@/components/ui/number-ticker";

function parseMetric(value: string): { num: number; suffix: string; decimals: number } {
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const num = parseFloat(match[1]);
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { num, suffix: match[2] || "", decimals };
}

/** Compact dark trust row — designed to sit inside dark sections, never as a white band. */
export function MetricsStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto grid w-full max-w-4xl grid-cols-2 justify-items-center gap-6 sm:grid-cols-4 sm:gap-8 ${className}`}
    >
      {siteContent.hero.metrics.map((metric) => {
        const { num, suffix, decimals } = parseMetric(metric.value);
        return (
          <div key={metric.label} className="text-center">
            <p className="text-[clamp(1.5rem,2.8vw,2rem)] font-extrabold tracking-tight">
              <NumberTicker
                value={num}
                suffix={suffix}
                decimals={decimals}
                className="text-gradient-tapsy-tight"
              />
            </p>
            <p className="mt-1 text-[12px] font-medium text-white/50 sm:text-[13px]">
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
