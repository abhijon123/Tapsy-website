"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Full play+wordmark PNG vs play mark only. */
  withWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
};

const fullH = { sm: 32, md: 44, lg: 56 };
const markPx = { sm: 28, md: 36, lg: 48 };

export function BrandLogo({
  className,
  withWordmark = true,
  size = "md",
}: BrandLogoProps) {
  if (withWordmark) {
    const h = fullH[size];
    return (
      <Image
        src="/assets/tapsy-logo-clear.png"
        alt="tapsy"
        width={Math.round(h * (180 / 54))}
        height={h}
        className={cn("w-auto object-contain object-left", className)}
        style={{ height: h }}
        priority
      />
    );
  }

  const px = markPx[size];
  return (
    <Image
      src="/assets/tapsy-mark.svg"
      alt="tapsy"
      width={px}
      height={px}
      className={cn("shrink-0", className)}
      priority
    />
  );
}
