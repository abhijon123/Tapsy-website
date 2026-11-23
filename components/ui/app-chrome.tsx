"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { Bell, Home, MessageCircle, QrCode, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

/** App header: white → peach L→R, large top radius, flat bottom. */
export function AppTopBar({
  title = "Home",
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 z-30",
        className
      )}
    >
      <div
        className="relative flex h-[36px] items-center justify-center rounded-t-[1.9rem] px-3.5"
        style={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #FFE8E4 50%, #FFD6D1 100%)",
        }}
      >
        <p className="text-[13px] font-bold tracking-tight text-black">{title}</p>
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-black">
          <Bell className="h-3.5 w-3.5" strokeWidth={2.2} fill="currentColor" />
        </span>
      </div>
    </div>
  );
}

/** App tab bar: white scoop + QR FAB with black moat. */
export function AppBottomNav({
  active = "home",
  className,
}: {
  active?: "home" | "search" | "messages" | "profile";
  className?: string;
}) {
  const gid = useId().replace(/:/g, "");

  const item = (
    key: typeof active,
    Icon: typeof Home,
    opts?: { badge?: boolean; gradient?: boolean }
  ) => {
    const on = active === key;
    return (
      <span className="relative flex h-8 w-8 items-center justify-center">
        {opts?.gradient && on ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
            <defs>
              <linearGradient id={`home-${gid}`} x1="0" y1="0" x2="24" y2="24">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="45%" stopColor="#c026d3" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            <path
              d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"
              stroke={`url(#home-${gid})`}
              strokeWidth="2.2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <Icon
            className={cn("h-[17px] w-[17px]", on ? "text-[#7c3aed]" : "text-zinc-400")}
            strokeWidth={on ? 2.3 : 2}
          />
        )}
        {opts?.badge ? (
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#fb7185]" />
        ) : null}
      </span>
    );
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-30",
        className
      )}
    >
      <div className="relative h-[58px]">
        {/*
          Scoop path mirrors the real app:
          flat top → soft lips → deep circular cradle → flat → fill down.
          Bottom corners clipped by .hero-phone-screen overflow.
        */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 260 58"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#FFFFFF"
            d="
              M0 20
              H74
              C88 20 94 8 108 5
              C118 2.5 124 2 130 2
              C136 2 142 2.5 152 5
              C166 8 172 20 186 20
              H260
              V58
              H0
              Z
            "
          />
        </svg>

        {/* FAB floats in cradle — black screen shows as moat */}
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[44%]">
          <div
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #6d28d9 0%, #a21caf 32%, #ec4899 62%, #fb923c 100%)",
              boxShadow: "0 8px 18px -6px rgba(168,85,247,0.5)",
            }}
          >
            <QrCode className="h-[17px] w-[17px] text-white" strokeWidth={2.2} />
          </div>
        </div>

        <div className="relative z-10 flex h-full items-end px-0.5 pb-2.5">
          <div className="flex flex-1 items-center justify-evenly pr-6">
            {item("home", Home, { gradient: true })}
            {item("search", Search)}
          </div>
          <div className="w-11 shrink-0" />
          <div className="flex flex-1 items-center justify-evenly pl-6">
            {item("messages", MessageCircle, { badge: true })}
            {item("profile", User)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppChrome({
  title = "Home",
  active = "home",
  children,
  className,
}: {
  title?: string;
  active?: "home" | "search" | "messages" | "profile";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 z-30", className)}>
      <AppTopBar title={title} />
      {children}
      <AppBottomNav active={active} />
    </div>
  );
}
