// components/about/AboutHero.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "18+", label: "Years in Practice" },
  { value: "240+", label: "Projects Delivered" },
  { value: "96%", label: "Client Retention" },
];

const disciplines = [
  { label: "Electrical" },
  { label: "Mechanical" },
  { label: "Civil" },
];

// auto-rotating image set for the right panel — swap these for real site photography
const IMAGES = [
  {
    src: "https://res.cloudinary.com/du9kb43d6/image/upload/v1787426264/pexels-oloruntoba-john-104292376-9485447_dpgwtw.jpg",
    alt: "Trois Associates engineers and construction team reviewing plans on site",
  },
  {
    src: "https://res.cloudinary.com/du9kb43d6/image/upload/v1787426263/pexels-harrun-muhammad-116282236-36601725_a3ejgs.jpg",
    alt: "Engineer inspecting mechanical installation on an active construction site",
  },
  {
    src: "https://res.cloudinary.com/du9kb43d6/image/upload/v1787426261/istockphoto-847503126-612x612_civoa0.jpg",
    alt: "Civil engineering team reviewing structural drawings",
  },
];

const AUTOPLAY_MS = 5000;
const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

const leftContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const leftItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const chipItem = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function AboutHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, paused, reducedMotion]);

  const image = IMAGES[active];

  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      {/* Blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* left — copy */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={leftItem}
            className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              style={{ transformOrigin: "left" }}
              className="h-px w-8 bg-[#D9A441]/50"
              aria-hidden="true"
            />
            Who We Are
          </motion.div>

          <motion.h1
            variants={leftItem}
            className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-[1.12] text-white sm:text-[54px]"
          >
            Design and build,{" "}
            <em className="italic text-[#D9A441]">under one roof</em>
          </motion.h1>

          <motion.p
            variants={leftItem}
            className="mt-6 max-w-[460px] text-[15px] leading-[1.75] text-white/65"
          >
            Trois Associates delivers electrical, mechanical, and civil
            engineering alongside full design-build construction — so your
            project never has to pass between separate firms. From the first
            sketch to the final walkthrough, one team carries the vision
            through, with the technical rigor of an engineering practice and the
            accountability of a single point of contact.
          </motion.p>

          {/* discipline chips */}
          <motion.div
            variants={chipContainer}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {disciplines.map((d) => (
              <motion.span
                key={d.label}
                variants={chipItem}
                whileHover={{ y: -2, borderColor: "rgba(217,164,65,0.5)" }}
                transition={{ duration: 0.25, ease: EASE }}
                className="rounded-sm border border-white/15 px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-white/60"
              >
                {d.label}
              </motion.span>
            ))}
          </motion.div>

          {/* stat row */}
          <motion.div
            variants={leftItem}
            className="mt-10 grid max-w-[460px] grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statItem}
                transition={{ delay: i * 0.08 }}
              >
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[10.5px] uppercase leading-[1.5] tracking-[0.1em] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* right — auto-rotating image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          {/* offset frame accent */}
          <div className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full border border-[#D9A441]/30 sm:block" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <AnimatePresence mode="sync">
              <motion.div
                key={image.src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: EASE }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: reducedMotion ? 1 : 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: AUTOPLAY_MS / 1000 + 1.1,
                    ease: EASE_SOFT,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={active === 0}
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,18,30,0.5) 0%, rgba(10,18,30,0) 45%)",
              }}
            />

            {/* ghost numeral, same treatment as Hero/Projects */}
            <span
              className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[120px] font-normal leading-none text-white/[0.08]"
              aria-hidden="true"
            >
              18
            </span>

            {/* image progress ticks */}
            <div className="absolute right-6 top-6 z-10 flex gap-1.5">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className="relative h-[3px] w-6 overflow-hidden rounded-full bg-white/20"
                >
                  {i === active && !reducedMotion && (
                    <motion.span
                      key={active}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: paused ? 0 : AUTOPLAY_MS / 1000,
                        ease: "linear",
                      }}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-0 bg-[#D9A441]"
                    />
                  )}
                  {i === active && reducedMotion && (
                    <span className="absolute inset-0 bg-[#D9A441]" />
                  )}
                </button>
              ))}
            </div>

            {/* floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="absolute bottom-6 left-6 right-6 flex items-center gap-3 border border-white/10 bg-[#0E1A2A]/85 px-5 py-4 backdrop-blur-sm"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-[#D9A441]/15 text-[#D9A441]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.5 12 2.5 2.5 4.5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-white/70">
                Licensed &amp; insured across all project regions
              </p>
            </motion.div>
          </div>
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
