// components/about/CoreValues.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, HardHat, Handshake } from "lucide-react";

interface Value {
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const values: Value[] = [
  {
    num: "01",
    title: "Integrity",
    description:
      "Honest budgets and transparent timelines. What we quote is what you pay, what we promise is what we deliver.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Craft",
    description:
      "Every detail executed with the same care whether it's a single room or a full commercial build.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Safety",
    description:
      "Rigorous site standards protecting our crews, your property, and everyone who passes through.",
    icon: HardHat,
  },
  {
    num: "04",
    title: "Partnership",
    description:
      "One team accountable from sketch to handover — you're never passed between contractors.",
    icon: Handshake,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// icon + number + heading + copy stagger in after the card itself lands
const cardInner = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const cardInnerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 max-w-[600px]"
        >
          <p className="mb-4 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-[#D9A441]">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              style={{ transformOrigin: "left" }}
              className="h-px w-8 bg-[#D9A441]/60"
              aria-hidden="true"
            />
            Core Values
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.num}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group relative flex min-h-[280px] flex-col justify-between rounded-sm border border-white/10 bg-white/[0.03] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:border-[#D9A441]/40 hover:bg-white/[0.05]"
              >
                <motion.span
                  variants={cardInnerItem}
                  className="pointer-events-none absolute -bottom-3 -right-1 select-none font-[family-name:var(--font-display)] text-[100px] font-normal leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-[#D9A441]/[0.08]"
                  aria-hidden="true"
                >
                  {value.num}
                </motion.span>

                <motion.div variants={cardInner} className="contents">
                  <div className="relative flex items-center justify-between">
                    <motion.span
                      variants={cardInnerItem}
                      whileHover={{ rotate: -8, scale: 1.06 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#D9A441]/10 text-[#D9A441] transition-colors duration-300 group-hover:bg-[#D9A441] group-hover:text-[#0E1A2A]"
                    >
                      <Icon className="h-[20px] w-[20px]" strokeWidth={1.5} />
                    </motion.span>
                    <motion.span
                      variants={cardInnerItem}
                      className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/30"
                    >
                      {value.num}
                    </motion.span>
                  </div>

                  <div className="relative mt-10">
                    <motion.h3
                      variants={cardInnerItem}
                      className="font-[family-name:var(--font-display)] text-xl text-white sm:text-[22px]"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      variants={cardInnerItem}
                      className="mt-3 text-[14px] leading-[1.7] text-white/60"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
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
