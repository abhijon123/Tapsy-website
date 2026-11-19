"use client";

import Image from "next/image";
import { WordsPullUp } from "@/components/ui/words-pull-up";
import { BlurFade } from "@/components/ui/blur-fade";
import { useSectionParallax } from "@/hooks/useParallax";

export function SpreadScene() {
  const { ref, y } = useSectionParallax(0.18);

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <BlurFade>
          <div ref={ref} className="relative overflow-hidden rounded-[28px]">
            <div className="absolute -left-4 -top-4 z-10 h-24 w-24 rounded-3xl bg-violet-100 sm:h-32 sm:w-32" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <div
                className="absolute inset-[-12%] will-change-transform"
                style={{ transform: `translate3d(0, ${y}px, 0)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
                  alt="Friends sharing a meal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold tracking-[-0.04em] leading-[1.2] text-zinc-950">
            <WordsPullUp text="Spread the scene, seamless" />
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-zinc-500">
            Record your real review in seconds to Tapsy, Insta, TikTok, or WhatsApp. Your story
            travels fast — because real moments deserve to be seen, heard, and believed.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
