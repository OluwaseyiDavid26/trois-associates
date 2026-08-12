// @/components/Services/CTAStrip.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

export default function CTAStrip() {
  return (
    <section className="relative bg-[#0E1A2A] py-20 md:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-12 text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-5"
        >
          Get Started
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="font-serif text-3xl md:text-5xl leading-[1.15] text-white mb-8"
        >
          Not sure which service you need?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#D9A441] text-[#0E1A2A] font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-transform duration-300 hover:scale-[1.03] hover:bg-[#e5b158]"
          >
            Talk to Our Team
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
