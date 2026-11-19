"use client";

import dynamic from "next/dynamic";
import React from "react";

const FloatingMeshCanvas = dynamic(() => import("./FloatingMesh"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[350px] flex items-center justify-center">
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-orange-400/30 blur-2xl animate-pulse-glow" />
    </div>
  ),
});

export function SceneWrapper({ className }: { className?: string }) {
  return (
    <div className={className}>
      <FloatingMeshCanvas />
    </div>
  );
}

