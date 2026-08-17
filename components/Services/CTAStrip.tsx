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
    <section className="relative bg-[#D9A441] py-24 md:py-32 overflow-hidden">
      {/* Blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0E1A2A 1px, transparent 1px), linear-gradient(90deg, #0E1A2A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top + bottom hairline borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#0E1A2A]/15" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#0E1A2A]/15" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center border border-[#0E1A2A]/15 rounded-sm bg-white/10 backdrop-blur-sm px-6 py-14 md:px-16 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[#0E1A2A]/40" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#0E1A2A]">
              Get Started
            </p>
            <span className="h-px w-8 bg-[#0E1A2A]/40" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#0E1A2A] mb-5"
          >
            Not sure which service you need?
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-[#0E1A2A]/70 text-sm md:text-base max-w-lg mb-10"
          >
            Tell us about your project and our team will point you to the right
            service — no obligation, just a clear next step.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#0E1A2A] text-white font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[#16233b]"
            >
              Talk to Our Team
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-[#0E1A2A]/80 px-8 py-4 border border-[#0E1A2A]/30 rounded-sm transition-colors duration-300 hover:text-[#0E1A2A] hover:border-[#0E1A2A]/50"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
