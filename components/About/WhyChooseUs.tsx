// @/components/About/WhyChooseUs.tsx
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

const REASONS = [
  {
    number: "01",
    title: "Single Point of Accountability",
    description:
      "Design and construction under one roof means no finger-pointing between contractors — just one team, one timeline, one budget.",
  },
  {
    number: "02",
    title: "Transparent Process",
    description:
      "Clear communication at every phase, from initial sketches to final walkthrough, so you always know where your project stands.",
  },
  {
    number: "03",
    title: "On Time, On Budget",
    description:
      "Rigorous project management and realistic scoping mean fewer surprises — and a proven track record of hitting deadlines.",
  },
  {
    number: "04",
    title: "Craft-Driven Detailing",
    description:
      "Every joint, finish, and material choice is considered — we sweat the details that separate good buildings from great ones.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#0E1A2A]"
          >
            What sets our process apart
          </motion.h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i % 2}
              variants={fadeUp}
              className="flex gap-6"
            >
              <span className="font-serif text-2xl text-[#D9A441] shrink-0 leading-none pt-1">
                {reason.number}
              </span>
              <div className="border-l border-[#0E1A2A]/10 pl-6">
                <h3 className="font-serif text-xl text-[#0E1A2A] mb-2">
                  {reason.title}
                </h3>
                <p className="text-[#0E1A2A]/65 text-sm md:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
