"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fade-up reveal.
 *  - `inView` (default true): animates when scrolled into view (once).
 *  - `inView: false`: animates on mount (page load).
 * Respects prefers-reduced-motion (renders static, no motion).
 */
type FadeUpProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts. */
  delay?: number;
  /** Animate when scrolled into view, rather than on mount. */
  inView?: boolean;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export function FadeUp({ children, className, delay = 0, inView = true }: FadeUpProps) {
  const reduce = useReducedMotion();

  // When reduced motion is on, render fully visible with no animation.
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = inView
    ? {
        whileInView: "visible",
        viewport: { once: true, amount: 0.3, margin: "-60px" },
      }
    : { animate: "visible" };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      custom={delay}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
