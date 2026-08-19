// components/home/StatsStrip.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "18+", label: "Years in business" },
  { value: "240", label: "Projects completed" },
  { value: "1.2M", label: "Sq ft built" },
  { value: "96%", label: "Client retention" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-20">
      {/* faint top accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{ transformOrigin: "center" }}
        className="pointer-events-none absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#D9A441]/50"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-[1200px] grid-cols-2 border-y border-white/10 px-6 lg:grid-cols-4 lg:px-10"
      >
        {stats.map((stat, i) => {
          const isLast = i === stats.length - 1;
          const border = isLast
            ? ""
            : i % 2 === 0
              ? "border-r border-white/10"
              : "lg:border-r lg:border-white/10";

          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`group flex flex-col items-center px-4 py-10 text-center transition-colors duration-300 ${border}`}
            >
              <CountUpValue
                value={stat.value}
                className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-none text-white transition-colors duration-300 group-hover:text-[#D9A441] sm:text-[52px]"
              />
              <span className="mt-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/50">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

// parses "18+", "240", "1.2M", "96%" into a number + prefix/suffix,
// then animates the number from 0 once it scrolls into view
function CountUpValue({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(() => formatWith(value, 0));

  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? 1 : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      delay: 0.2,
      ease: EASE,
      onUpdate(latest) {
        setDisplay(`${latest.toFixed(decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, target, decimals, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function formatWith(value: string, num: number) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return value;
  const decimals = match[1].includes(".") ? 1 : 0;
  return `${num.toFixed(decimals)}${match[2]}`;
}
