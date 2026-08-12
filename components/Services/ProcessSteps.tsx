// @/components/Services/ProcessSteps.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const STEPS = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We start by understanding your goals, site, and budget — laying the groundwork for a design that fits your needs.",
  },
  {
    number: "02",
    title: "Design & Documentation",
    description:
      "Concept sketches evolve into detailed drawings and specifications, refined with your feedback at every stage.",
  },
  {
    number: "03",
    title: "Permitting & Planning",
    description:
      "We handle code review and permit submissions, coordinating with local authorities so construction starts on schedule.",
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Our team manages the build day to day — scheduling, quality control, and subcontractor coordination throughout.",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "A final walkthrough and punch-list close-out ensure every detail meets our standard before you move in.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-[#0E1A2A] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-white"
          >
            Five stages, one accountable team
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i % 3}
                variants={fadeUp}
                className="relative flex flex-col md:flex-row gap-4 md:gap-10 md:items-start"
              >
                {/* Number marker */}
                <div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-[#D9A441]/40 bg-[#0E1A2A] font-mono text-sm text-[#D9A441] z-10">
                  {step.number}
                </div>

                <div className="md:pt-3">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
