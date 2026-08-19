// @/components/Services/CTAStrip.tsx
"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { type MouseEvent } from "react";

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

function MagneticButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.4);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-sm overflow-hidden transition-colors duration-300";

  const styles =
    variant === "solid"
      ? "bg-[#0E1A2A] text-white hover:bg-[#16233b]"
      : "text-[#0E1A2A]/80 border border-[#0E1A2A]/30 hover:text-[#0E1A2A] hover:border-[#0E1A2A]/50";

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <Link href={href} className={`${base} ${styles}`}>
        {variant === "solid" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
        )}
        <span className="relative z-10 flex items-center gap-3">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}

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

      {/* diagonal drafting line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-1 right-0 h-px w-[60%] origin-right bg-[#0E1A2A]/20 rotate-[8deg]"
      />

      {/* grain texture */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.04] mix-blend-multiply">
        <filter id="cta-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#cta-grain)" />
      </svg>

      {/* Top + bottom hairline borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#0E1A2A]/15" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#0E1A2A]/15" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-12">
        <div className="relative border border-[#0E1A2A]/15 rounded-sm bg-white/10 backdrop-blur-sm px-6 py-14 md:px-16 md:py-20">
          {/* title-block reference tab */}

          {/* corner registration crosses */}
          {[
            "top-4 left-4",
            "top-4 right-4",
            "bottom-4 left-4",
            "bottom-4 right-4",
          ].map((pos, idx) => (
            <motion.svg
              key={pos}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
              className={`absolute ${pos} w-3 h-3 text-[#0E1A2A]/25`}
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1" />
            </motion.svg>
          ))}

          <div className="flex flex-col items-center text-center">
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
              Tell us about your project and our team will point you to the
              right service — no obligation, just a clear next step.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <MagneticButton href="/contact" variant="solid">
                Talk to Our Team
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </MagneticButton>

              <MagneticButton href="/projects" variant="outline">
                View Our Work
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
