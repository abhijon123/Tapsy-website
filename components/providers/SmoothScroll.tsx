"use client";

import type { ReactNode } from "react";

/** Native scroll. A custom smoother was fighting the page and making motion feel late. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
