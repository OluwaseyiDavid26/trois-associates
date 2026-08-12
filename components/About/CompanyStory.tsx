"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const stats = [
  { label: "Years of Practice", value: "18+" },
  { label: "Projects Delivered", value: "120+" },
  { label: "Design Awards", value: "9" },
];

export default function CompanyStory() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Drafting-line accent, top-left */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-px bg-[#0E1A2A]/10 hidden md:block" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Image block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img
              src="/images/about/studio-work.jpg"
              alt="Trois Associates studio at work"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(14,26,42,0.38)" }}
            />
          </div>

          {/* Founded badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#0E1A2A] text-white px-6 py-4 rounded-sm shadow-lg hidden sm:block">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#D9A441]">
              Established
            </p>
            <p className="font-serif text-2xl mt-1">2006</p>
          </div>
        </motion.div>

        {/* Text block */}
        <div className="md:col-span-7 md:pl-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#0E1A2A] mb-6"
          >
            Building spaces that honor both form and function
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-[#0E1A2A]/70 text-base md:text-lg leading-relaxed mb-4 max-w-xl"
          >
            Trois Associates was founded on a simple belief: great buildings
            come from close collaboration, not compromise. What began as a small
            design-build practice has grown into a full-service studio trusted
            to carry projects from first sketch to final handover.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="text-[#0E1A2A]/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Today, our team unites architecture, construction management, and
            interior design under one roof, giving clients a single point of
            accountability for every stage of the build.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap gap-x-10 gap-y-6 border-t border-[#0E1A2A]/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-[#0E1A2A]">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#0E1A2A]/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
