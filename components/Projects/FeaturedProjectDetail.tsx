// @/components/Projects/FeaturedProjectDetail.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SPECS = [
  { label: "Location", value: "Lekki, Lagos" },
  { label: "Category", value: "Residential" },
  { label: "Size", value: "6,200 sq ft" },
  { label: "Completed", value: "2024" },
];

export default function FeaturedProjectDetail() {
  return (
    <section className="relative bg-[#0E1A2A] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
            >
              Featured Project
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl leading-[1.15] text-white"
            >
              Riverside Residence
            </motion.h2>
          </div>
        </div>

        {/* Main image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          variants={fadeUp}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-12"
        >
          <img
            src="/images/projects/riverside-residence-full.jpg"
            alt="Riverside Residence"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Description + specs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="md:col-span-7 text-white/65 text-base md:text-lg leading-relaxed"
          >
            A ground-up residential build set along the waterfront, designed to
            maximize natural light and blur the line between indoor and outdoor
            living. Floor-to-ceiling glazing, locally sourced timber, and a
            cantilevered upper level define the home's quiet, modern presence on
            its site.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="md:col-span-5 md:pl-6 grid grid-cols-2 gap-x-6 gap-y-8 border-l border-white/10 md:border-l md:border-white/10"
          >
            {SPECS.map((spec) => (
              <div key={spec.label}>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#D9A441]/80 mb-2">
                  {spec.label}
                </p>
                <p className="font-serif text-lg text-white">{spec.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
