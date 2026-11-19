"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  posterSrc: string;
  className?: string;
};

export function VideoDialog({
  open,
  onOpenChange,
  title = "Bella Vista · 30s take",
  posterSrc,
  className,
}: VideoDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-label={title}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={cn(
              "relative z-10 w-full max-w-sm overflow-hidden rounded-[28px] bg-zinc-950 shadow-2xl",
              className
            )}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-[13px] font-semibold text-white">{title}</p>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[9/16] bg-black">
              <Image src={posterSrc} alt="" fill className="object-cover" sizes="400px" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-tapsy text-white shadow-lg">
                  <Play className="h-7 w-7 fill-white pl-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/55 p-3 text-white backdrop-blur-md">
                <p className="text-[13px] font-semibold">Mark Jacob · Verified</p>
                <p className="mt-1 text-[12px] text-white/70">
                  Amazing authentic Italian — pasta was perfect.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
