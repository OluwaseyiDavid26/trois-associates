// @/components/Services/CapabilitiesGrid.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const CAPABILITIES = [
  {
    title: "Site Analysis & Feasibility",
    description: "Evaluating land, zoning, and budget before design begins.",
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic renders so you can see the project before it's built.",
  },
  {
    title: "Structural Engineering",
    description: "Coordinated engineering to keep design and safety aligned.",
  },
  {
    title: "Sustainable Design",
    description: "Energy-conscious material and system choices, built to last.",
  },
  {
    title: "Budget Management",
    description:
      "Transparent cost tracking from proposal through final invoice.",
  },
  {
    title: "Permit Coordination",
    description: "Handling paperwork and inspections so you don't have to.",
  },
  {
    title: "Custom Millwork",
    description: "Bespoke cabinetry and fixtures crafted to fit each space.",
  },
  {
    title: "Post-Occupancy Support",
    description: "We stay on call after handover for any follow-up needs.",
  },
];

export default function CapabilitiesGrid() {
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
            Capabilities
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#0E1A2A]"
          >
            Specialized expertise, in-house
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0E1A2A]/10 border border-[#0E1A2A]/10">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i % 4}
              variants={fadeUp}
              className="group bg-white p-8 hover:bg-[#0E1A2A] transition-colors duration-400"
            >
              <div className="w-8 h-px bg-[#D9A441] mb-6 group-hover:w-12 transition-all duration-400" />
              <h3 className="font-serif text-lg text-[#0E1A2A] group-hover:text-white mb-2 transition-colors duration-400">
                {cap.title}
              </h3>
              <p className="text-[#0E1A2A]/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-400">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
