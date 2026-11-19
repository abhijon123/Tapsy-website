"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const sizeStyles = {
      sm: "text-[13px] px-4 py-2 gap-1.5",
      md: "text-[14px] px-5 py-2.5 gap-2",
      lg: "text-[15px] px-7 py-3.5 gap-2",
    };

    const variantStyles = {
      primary:
        "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-black/10",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/60",
      outline:
        "border border-border bg-white hover:bg-zinc-50 text-foreground dark:bg-transparent dark:hover:bg-white/5",
      ghost: "hover:bg-muted text-foreground",
      gradient:
        "bg-gradient-tapsy text-white shadow-lg shadow-fuchsia-500/25 hover:brightness-[1.05] hover:shadow-xl hover:shadow-orange-400/20",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
