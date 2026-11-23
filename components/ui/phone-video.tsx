"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TapsyPlayButton } from "@/components/ui/tapsy-play-button";
import { AppBottomNav, AppTopBar } from "@/components/ui/app-chrome";
import { cn } from "@/lib/utils";

type PhoneVideoProps = {
  src: string;
  poster?: string;
  title?: string;
  place?: string;
  className?: string;
  widthClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playSize?: "sm" | "md" | "lg";
  /** Hide play control (always looping demos) */
  hideControls?: boolean;
};

/**
 * Smooth phone reel player with Tapsy app chrome (Home top + scooped bottom nav).
 */
export function PhoneVideo({
  src,
  poster,
  title,
  place,
  className,
  widthClassName = "w-[252px]",
  autoPlay = true,
  muted = true,
  loop = true,
  playSize = "md",
  hideControls = false,
}: PhoneVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantPlay = useRef(autoPlay);
  const inView = useRef(false);
  const [pausedUI, setPausedUI] = useState(!autoPlay);

  const syncPlayback = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    if (wantPlay.current && inView.current) {
      const p = el.play();
      if (p) {
        p.then(() => setPausedUI(false)).catch(() => setPausedUI(true));
      }
    } else {
      el.pause();
      setPausedUI(true);
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        syncPlayback();
      },
      { threshold: [0, 0.35, 0.6], rootMargin: "80px 0px" }
    );

    io.observe(root);
    return () => {
      io.disconnect();
      videoRef.current?.pause();
    };
  }, [syncPlayback, src]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wantPlay.current = false;
      setPausedUI(true);
      videoRef.current?.pause();
    }
  }, []);

  const toggle = () => {
    if (hideControls) return;
    wantPlay.current = !wantPlay.current;
    syncPlayback();
  };

  return (
    <div
      ref={rootRef}
      className={cn("hero-phone aspect-[9/19.2]", widthClassName, className)}
    >
      <div className="hero-phone-screen group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 h-full w-full object-cover [transform:translateZ(0)]"
          onPlaying={() => setPausedUI(false)}
          onPause={() => {
            if (!wantPlay.current || !inView.current) setPausedUI(true);
          }}
        />

        {/* Bottom fade only — no top darken (keeps Home chrome flush / native) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <AppTopBar />
        <AppBottomNav />

        {!hideControls && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 z-10 flex items-center justify-center"
            aria-label={pausedUI ? "Play video" : "Pause video"}
          >
            <span
              className={cn(
                "transition-opacity duration-200",
                pausedUI
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
              )}
            >
              <TapsyPlayButton playing={!pausedUI} size={playSize} />
            </span>
          </button>
        )}

        {(title || place) && (
          <div className="pointer-events-none absolute bottom-[54px] left-0 right-0 z-20 p-3 text-left">
            {title ? (
              <p className="truncate text-[12px] font-bold text-white sm:text-[13px]">{title}</p>
            ) : null}
            {place ? (
              <p className="truncate text-[10px] text-white/70 sm:text-[11px]">{place}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
