"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function HoverCard({
  children,
  className = "",
  radius = "rounded-3xl",
}: {
  children: ReactNode;
  className?: string;
  radius?: string;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${radius} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
      <div className="pointer-events-none absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground opacity-0 translate-x-2 -translate-y-2 transition-all duration-[350ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-110">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
      </div>
    </motion.div>
  );
}
