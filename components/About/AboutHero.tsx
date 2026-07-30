// components/about/AboutHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
            <span className="text-white/40">About us /</span>
            Who we are
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-[1.12] text-white sm:text-[54px]">
            Building <em className="italic text-[#D9A441]">trust</em>, one
            project at a time
          </h1>

          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.75] text-white/65">
            We're a design-build firm delivering architectural planning,
            construction, and project management under one roof. For over 18
            years, we've partnered with clients across residential and
            commercial sectors to turn ambitious ideas into structures that last
            — grounded in strong communication, honest budgets, and
            craftsmanship at every stage.
          </p>
        </motion.div>

        {/* right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]"
        >
          <Image
            src="/about/team-onsite.jpg"
            alt="Our team on a project site"
            fill
            priority
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(10,18,30,0.35) 0%, rgba(10,18,30,0) 40%)",
            }}
          />

          {/* ghost numeral, same treatment as Hero/Projects */}
          <span
            className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[120px] font-normal leading-none text-white/[0.08]"
            aria-hidden="true"
          >
            18
          </span>
        </motion.div>
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
