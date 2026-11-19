"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    blurb: "Start free. Record takes and grow your feed.",
    accent: "from-[#3B82F6] to-[#9333EA]",
    featured: false,
    cta: "Get started",
    items: [
      "Review home feed",
      "Basic discovery filters",
      "Up to 3 video uploads",
      "Standard QR share",
      "Community support",
    ],
  },
  {
    name: "Pro",
    monthly: 99,
    yearly: 79,
    blurb: "For creators and venues that want reach and trends.",
    accent: "from-[#9333EA] to-[#D946EF]",
    featured: true,
    cta: "Go Pro",
    items: [
      "Advanced filters",
      "Review trend graphs",
      "Up to 7 videos / week",
      "Unlimited chat",
      "Priority placement",
      "Custom profile link",
    ],
  },
  {
    name: "Enterprise",
    monthly: 199,
    yearly: 159,
    blurb: "Scale verified video reviews across locations.",
    accent: "from-[#D946EF] to-[#FF6A3D]",
    featured: false,
    cta: "Talk to sales",
    items: [
      "Full analytics suite",
      "Custom QR + NFC",
      "Unlimited uploads",
      "Multi-location tools",
      "Priority support",
      "Dedicated success manager",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BlurFade className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="type-section text-zinc-950">
              <WordsPullUp text="Pricing" />
            </h2>
            <p className="type-lead mt-3">
              From first take to multi-location brand. Pick a plan that grows with you.
            </p>
          </div>

          <div className="flex shrink-0 rounded-full bg-white p-1 shadow-[0_8px_24px_-16px_rgba(15,10,40,0.35)]">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "rounded-full px-5 py-2 text-[14px] font-semibold transition",
                !yearly ? "bg-gradient-tapsy text-white" : "text-zinc-500"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "rounded-full px-5 py-2 text-[14px] font-semibold transition",
                yearly ? "bg-gradient-tapsy text-white" : "text-zinc-500"
              )}
            >
              Yearly · 20% off
            </button>
          </div>
        </BlurFade>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <div key={plan.name} className="relative pt-4">
                {plan.featured && (
                  <span className="absolute left-6 top-0 z-20 rounded-full bg-gradient-tapsy px-3 py-1 text-[12px] font-bold text-white shadow-sm">
                    Most popular
                  </span>
                )}
                <MagicCard
                  className={cn(
                    "h-full rounded-[28px] bg-white",
                    plan.featured
                      ? "shadow-[0_24px_60px_-28px_rgba(147,51,234,0.45)] ring-1 ring-fuchsia-200"
                      : "shadow-[0_16px_40px_-28px_rgba(15,10,40,0.25)]"
                  )}
                >
                  <article className="flex h-full flex-col p-6 sm:p-7">
                    <div className={cn("h-1.5 w-14 rounded-full bg-gradient-to-r", plan.accent)} />
                    <p className="mt-5 text-[15px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                      {plan.name}
                    </p>
                    <p className="mt-2 flex items-baseline gap-1">
                      <span className="text-[2.75rem] font-extrabold tracking-tight leading-none sm:text-[3rem]">
                        $
                        <NumberTicker value={price} />
                      </span>
                      <span className="text-[15px] font-medium text-zinc-400">/mo</span>
                    </p>
                    <p className="mt-3 min-h-[3rem] text-[15px] leading-relaxed text-zinc-500">
                      {plan.blurb}
                    </p>

                    <ul className="mt-6 flex-1 space-y-3 border-t border-zinc-100 pt-5">
                      {plan.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="lg"
                      variant={plan.featured ? "gradient" : "outline"}
                      className="mt-7 w-full"
                      onClick={() =>
                        document
                          .getElementById("download-cta")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {plan.cta}
                    </Button>
                  </article>
                </MagicCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
