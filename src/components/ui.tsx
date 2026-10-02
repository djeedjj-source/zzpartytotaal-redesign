import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Reveal — butter-smooth entrance on scroll                           */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 44,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SectionTag — small eyebrow label                                    */
/* ------------------------------------------------------------------ */
export function SectionTag({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-2 w-2 rounded-full bg-brand" />
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.28em] ${
          light ? "text-paper/70" : "text-ink/60"
        }`}
      >
        {children}
      </span>
      <span
        className={`h-px w-12 ${light ? "bg-paper/25" : "bg-ink/15"}`}
        aria-hidden
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SparkStar — 4-point party star used as separator / ornament         */
/* ------------------------------------------------------------------ */
export function SparkStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c.9 6.6 5.4 11.1 12 12-6.6.9-11.1 5.4-12 12-.9-6.6-5.4-11.1-12-12C6.6 11.1 11.1 6.6 12 0Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* SquiggleArrow — hand-drawn doodle arrow                             */
/* ------------------------------------------------------------------ */
export function SquiggleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M6 8c26 4 66 12 86 34" />
      <path d="M100 30 94 50 76 40" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — animated number                                           */
/* ------------------------------------------------------------------ */
export function Counter({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          Math.round(v).toLocaleString("nl-NL") + suffix;
      }
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Shared data                                                         */
/* ------------------------------------------------------------------ */
export const PHONE = "0344 644399";
export const PHONE_HREF = "tel:+31344644399";
export const EMAIL = "info@zzpartytotaal.nl";

export const LOGO = "./brand/logo-transparent.png";

/* ------------------------------------------------------------------ */
/* Logo Badge                                                       */
/* ------------------------------------------------------------------ */

interface LogoBadgeProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function LogoBadge({ size = "md", className = "" }: LogoBadgeProps) {
  const sizeClasses = {
    sm: "h-8 sm:h-9",
    md: "h-11 sm:h-14 md:h-16",
    lg: "h-12 sm:h-16",
    xl: "h-auto w-[82vw] max-w-[850px] sm:w-[65vw]",
  }[size];

  return (
    <div
      className={`sticker inline-flex shrink-0 -rotate-2 items-center justify-center rounded-xl border-4 border-white bg-ink p-1 shadow-lg ring-1 ring-ink/10 ${className}`}
    >
      <img
        src={LOGO}
        alt="ZZ PartyTotaal — het totale partyconcept"
        className={`${sizeClasses} rounded-lg object-contain`}
      />
    </div>
  );
}