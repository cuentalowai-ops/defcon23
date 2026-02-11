"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardHover } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Use 'hover' to enable lift-on-hover, 'none' for static */
  hover?: "lift" | "none";
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = "lift",
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      whileHover={hover === "lift" ? cardHover.hover : undefined}
      className={`neon-card rounded-xl bg-bg-tertiary will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
