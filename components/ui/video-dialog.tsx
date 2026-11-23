"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  videoSrc: string;
  posterSrc?: string;
  className?: string;
};

export function VideoDialog({
  open,
  onOpenChange,
  title = "Tapsy · video take",
  videoSrc,
  posterSrc,
  className,
}: VideoDialogProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    const el = videoRef.current;
    if (el) {
      el.currentTime = 0;
      void el.play().catch(() => {});
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      el?.pause();
    };
  }, [open, onOpenChange, videoSrc]);

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
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                controls
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
