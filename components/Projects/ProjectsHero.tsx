// @/components/Projects/ProjectsHero.tsx
"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

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

const STATS = [
  { value: 240, suffix: "+", label: "Projects delivered" },
  { value: 18, suffix: "", label: "Years building" },
  { value: 3, suffix: "", label: "Property types" },
];

export default function ProjectsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <section
      ref={sectionRef}
      className={`${display.variable} ${mono.variable} relative bg-[#0E1A2A] pt-40 pb-24 md:pt-52 md:pb-28 overflow-hidden`}
    >
      {/* Drafting grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/images/projects/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(14,26,42,0.5)" }}
        />
      </motion.div>

      {/* Grain */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay">
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Blueprint frame */}
      <BlueprintFrame />

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#D9A441]"
        >
          Our Projects
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mb-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] text-white md:text-6xl"
        >
          A portfolio built on
          <br className="hidden md:block" /> precision and craft
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          From residential renovations to ground-up commercial builds, explore a
          selection of projects delivered from concept to completion.
        </motion.p>

        {/* Stat row */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mx-auto flex max-w-xl items-center justify-center divide-x divide-white/10 border-y border-white/10"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex-1 px-6 py-6">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                  delay={0.6 + i * 0.15}
                />
              </p>
              <p className="mt-1.5 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CountUp({
  to,
  suffix,
  delay,
}: {
  to: number;
  suffix: string;
  delay: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, delay]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function BlueprintFrame() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.3 + i * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <>
      {/* Corner registration marks — all four */}
      <RegistrationMark className="left-6 top-6" custom={0} />
      <RegistrationMark className="right-6 top-6 rotate-90" custom={1} />
      <RegistrationMark className="left-6 bottom-6 -rotate-90" custom={2} />
      <RegistrationMark className="right-6 bottom-6 rotate-180" custom={3} />

      {/* Ruler ticks along the top edge */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 hidden lg:flex justify-between px-24 pt-3">
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.025 }}
            className={`w-px bg-white/20 origin-top ${i % 4 === 0 ? "h-3" : "h-1.5"}`}
          />
        ))}
      </div>

      {/* Frame hairline, inset from the viewport edges */}
      <svg
        className="pointer-events-none absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]"
        aria-hidden="true"
      >
        <motion.rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          initial="hidden"
          animate="visible"
          variants={draw}
        />
      </svg>
    </>
  );
}

function RegistrationMark({
  className,
  custom,
}: {
  className?: string;
  custom?: number;
}) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.15 + (custom ?? 0) * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <svg
      viewBox="0 0 32 32"
      className={`absolute z-10 h-6 w-6 text-white/40 ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.path
        d="M16 2 V12"
        stroke="currentColor"
        strokeWidth="1"
        initial="hidden"
        animate="visible"
        variants={draw}
      />
      <motion.path
        d="M2 16 H12"
        stroke="currentColor"
        strokeWidth="1"
        initial="hidden"
        animate="visible"
        variants={draw}
      />
      <motion.circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        initial="hidden"
        animate="visible"
        variants={draw}
      />
    </svg>
  );
}
