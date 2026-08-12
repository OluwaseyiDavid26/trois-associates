"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TEAM = [
  {
    name: "Marcus Delacroix",
    role: "Principal Architect",
    image: "/images/team/marcus.jpg",
  },
  {
    name: "Aria Whitfield",
    role: "Director of Design",
    image: "/images/team/aria.jpg",
  },
  {
    name: "Josiah Okafor",
    role: "Construction Manager",
    image: "/images/team/josiah.jpg",
  },
  {
    name: "Elena Voss",
    role: "Interior Design Lead",
    image: "/images/team/elena.jpg",
  },
  {
    name: "Thomas Reyes",
    role: "Senior Project Architect",
    image: "/images/team/thomas.jpg",
  },
  {
    name: "Naomi Chen",
    role: "Business Development",
    image: "/images/team/naomi.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section className="relative bg-[#0E1A2A] py-24 md:py-32">
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
            Our Team
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-white"
          >
            The people behind every build
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i % 3}
              variants={fadeUp}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: "rgba(14,26,42,0.38)" }}
                />
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-8 h-px bg-[#D9A441] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <p className="font-serif text-xl text-white mb-1">
                {member.name}
              </p>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#D9A441]/80">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
