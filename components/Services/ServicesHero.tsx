// @/components/Services/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.14,
      ease: EASE,
    },
  }),
};

export default function ServicesHero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="relative bg-[#0E1A2A] pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      {/* Drafting grid texture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* corner registration marks — same motif as Hero/AboutHero */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      {/* Background image with slow Ken Burns drift + overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: reducedMotion ? 1 : 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{
            scale: { duration: 14, ease: EASE_SOFT },
            opacity: { duration: 1.4, ease: EASE },
          }}
          className="absolute inset-0"
        >
          <img
            src="/images/services/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(14,26,42,0.38)" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#D9A441]"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            style={{ transformOrigin: "right" }}
            className="h-px w-8 bg-[#D9A441]/60"
            aria-hidden="true"
          />
          Our Services
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            style={{ transformOrigin: "left" }}
            className="h-px w-8 bg-[#D9A441]/60"
            aria-hidden="true"
          />
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-6"
        >
          End-to-end design and build,
          <br className="hidden md:block" /> under one roof
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          From first sketch to final handover, our team manages every phase of
          your project — architecture, construction, and interiors — with one
          point of contact throughout.
        </motion.p>
      </div>
    </section>
  );
}

function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`absolute z-10 h-6 w-6 text-white/40 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path d="M16 2 V12" stroke="currentColor" strokeWidth="1" />
      <path d="M2 16 H12" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
