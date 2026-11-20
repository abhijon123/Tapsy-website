"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="site-section-tight border-t border-zinc-100">
      <div className="site-rail">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-1.5 flex items-center">
              <BrandLogo size="md" />
            </Link>
            <p className="text-[13px] text-zinc-500">{footer.tagline}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] font-medium text-zinc-500">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:bg-zinc-50 hover:text-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-zinc-100 pt-5 text-[12px] text-zinc-500 sm:flex-row">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />{" "}
            for authentic experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
