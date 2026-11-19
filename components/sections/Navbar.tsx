"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Menu, X, Smartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Publish", href: "#publish" },
    { label: "Creators", href: "#creators" },
    { label: "Discover", href: "#discover" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-[0_12px_40px_-24px_rgba(15,10,40,0.22)] backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-xl"
      )}
    >
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <BrandLogo size="lg" className="h-11 w-auto sm:h-12" />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-zinc-500 transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
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
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-lg p-1.5 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-16 z-50 flex flex-col gap-1 rounded-3xl bg-white/95 p-4 shadow-[0_24px_60px_-20px_rgba(15,10,40,0.35)] backdrop-blur-xl dark:bg-zinc-950/95 md:hidden"
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
