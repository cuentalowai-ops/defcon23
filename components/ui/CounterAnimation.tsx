"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations";

interface CounterAnimationProps {
  /** Target number to count up to */
  value: number;
  /** Duration in ms (default 1500) */
  duration?: number;
  /** Prefix string, e.g. "€" */
  prefix?: string;
  /** Suffix string, e.g. "%" */
  suffix?: string;
  /** Decimal places (default 0) */
  decimals?: number;
  /** Separator for thousands (default ",") */
  separator?: string;
  className?: string;
}

export default function CounterAnimation({
  value,
  duration = 1500,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}: CounterAnimationProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (prefersReducedMotion()) {
            setDisplay(formatNumber(value, decimals, separator));
            return;
          }

          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out-quart
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * value;
            setDisplay(formatNumber(current, decimals, separator));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, decimals, separator]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{display}{suffix}
    </span>
  );
}

function formatNumber(n: number, decimals: number, separator: string): string {
  const fixed = n.toFixed(decimals);
  const [integer = "0", decimal] = fixed.split(".");
  const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return decimal ? `${formatted}.${decimal}` : formatted;
}
