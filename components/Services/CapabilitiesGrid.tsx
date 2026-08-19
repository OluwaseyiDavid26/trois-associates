// @/components/Services/CapabilitiesGrid.tsx
"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState, type MouseEvent } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.07,
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

function CapabilityCard({
  cap,
  index,
}: {
  cap: (typeof CAPABILITIES)[number];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(217,164,65,0.16), transparent 75%)`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index % 4}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white p-8 pt-7 overflow-hidden transition-colors duration-500 hover:bg-[#0E1A2A]"
    >
      {/* cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlight }}
      />

      {/* corner registration marks */}
      {[
        "top-3 left-3 border-t border-l",
        "top-3 right-3 border-t border-r",
        "bottom-3 left-3 border-b border-l",
        "bottom-3 right-3 border-b border-r",
      ].map((pos, idx) => (
        <span
          key={idx}
          className={`absolute ${pos} w-2 h-2 border-[#D9A441]/0 group-hover:border-[#D9A441]/70 transition-all duration-500`}
          style={{ transitionDelay: hovered ? `${idx * 60}ms` : "0ms" }}
        />
      ))}

      {/* index */}
      <span className="relative z-10 block font-mono text-[11px] tracking-[0.2em] text-[#0E1A2A]/30 group-hover:text-[#D9A441]/70 mb-5 transition-colors duration-500">
        N°&nbsp;{String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 w-8 h-px bg-[#D9A441] mb-6 group-hover:w-12 transition-all duration-500" />

      <h3 className="relative z-10 font-serif text-lg text-[#0E1A2A] group-hover:text-white mb-2 transition-colors duration-500">
        {cap.title}
      </h3>
      <p className="relative z-10 text-[#0E1A2A]/60 group-hover:text-white/55 text-sm leading-relaxed transition-colors duration-500">
        {cap.description}
      </p>
    </motion.div>
  );
}

export default function CapabilitiesGrid() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0E1A2A 1px, transparent 1px), linear-gradient(90deg, #0E1A2A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441]">
              Capabilities
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-[#0E1A2A]/15" />
            <span className="font-mono text-xs tracking-[0.15em] text-[#0E1A2A]/30">
              01—08
            </span>
          </motion.div>

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
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
