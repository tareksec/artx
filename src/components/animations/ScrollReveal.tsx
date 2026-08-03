"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollReveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[Tag as any] as typeof motion.div;
  
  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ 
        duration: shouldReduceMotion ? 0.01 : 0.7, 
        ease: [0.25, 1, 0.5, 1], 
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </MotionTag>
  );
}
