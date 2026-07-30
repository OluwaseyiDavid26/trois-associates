// components/home/StatsStrip.tsx
"use client";

import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-white/10 border-y border-white/10 px-6 lg:grid-cols-4 lg:px-10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className={`flex flex-col items-center px-4 py-10 text-center ${
              i % 2 === 1 ? "border-l lg:border-l-0" : ""
            }`}
          >
            <span className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-none text-white sm:text-[52px]">
              {stat.value}
            </span>
            <span className="mt-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#D9A441]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
