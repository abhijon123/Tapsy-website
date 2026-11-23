"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Menu, X, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled(next);
      // Close mobile sheet when user scrolls away
      if (next) setMobileMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Publish", href: "#publish" },
    { label: "Creators", href: "#creators" },
    { label: "Discover", href: "#discover" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  const onHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-[0_12px_40px_-24px_rgba(15,10,40,0.22)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "site-rail flex w-full items-center justify-between transition-all duration-300",
          scrolled ? "py-2.5" : "py-3.5"
        )}
      >
        <Link href="/" className="flex items-center">
          <BrandLogo
            size={scrolled ? "md" : "lg"}
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"
            )}
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[15px] font-medium transition",
                onHero
                  ? "text-white/70 hover:text-white"
                  : "text-zinc-500 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <Button
            size="sm"
            variant="gradient"
            onClick={() =>
              document
                .getElementById("download-cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Smartphone className="h-3.5 w-3.5" />
            Get app
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className={cn(
              "rounded-lg p-1.5 transition",
              onHero ? "text-white" : "text-foreground"
            )}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls={menuId}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-16 z-50 flex flex-col gap-1 rounded-3xl bg-white/95 p-4 shadow-[0_24px_60px_-20px_rgba(15,10,40,0.35)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-foreground hover:bg-zinc-50"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="md"
              variant="gradient"
              className="mt-2 w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("download-cta")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Smartphone className="h-4 w-4" />
              Download Tapsy
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
