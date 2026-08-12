// @/components/Services/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative bg-[#0E1A2A] pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      {/* Drafting grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/services/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
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
          className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-6"
        >
          Our Services
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
