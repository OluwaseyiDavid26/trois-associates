"use client";

import { motion } from "framer-motion";

interface Stage {
  num: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  {
    num: "01",
    title: "Sketch",
    description:
      "Initial concepts and site analysis to translate your vision into a workable plan.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Detailed architectural drawings, material selection, and budget alignment.",
  },
  {
    num: "03",
    title: "Construction",
    description:
      "On-site execution with continuous quality control and transparent progress updates.",
  },
  {
    num: "04",
    title: "Handover",
    description:
      "Final walkthrough, documentation, and support as you settle into the finished space.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProcessOverview() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
            <span className="text-white/40">Our process /</span>
            How we work
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]">
            From sketch to handover, one team throughout
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* connecting rule — desktop only, sits behind the ticks */}
          <div className="absolute left-0 right-0 top-[13px] hidden h-px bg-white/15 lg:block" />

          {stages.map((stage, i) => (
            <motion.div
              key={stage.num}
              variants={itemVariants}
              className="group relative"
            >
              {/* tick + number, same motif as Hero's rail nav */}
              <div className="relative mb-6 flex items-center gap-3">
                <span className="relative z-10 h-[7px] w-[7px] shrink-0 rounded-full bg-[#D9A441] transition-transform duration-300 group-hover:scale-125" />
                <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/40">
                  Stage {stage.num}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-snug text-white sm:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-3 max-w-xs text-[14px] leading-[1.7] text-white/60">
                {stage.description}
              </p>

              {/* connector arrow between stages, desktop only */}
              {i < stages.length - 1 && (
                <span
                  className="absolute -right-6 top-[9px] hidden h-px w-4 bg-white/15 lg:block"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
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
