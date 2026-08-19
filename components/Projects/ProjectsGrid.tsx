// @/components/Projects/ProjectsGrid.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Fraunces, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// NOTE: category + location are best-guess placeholders for entries
// marked "VERIFY" below — please confirm/correct before shipping.
const PROJECTS = [
  {
    slug: "chest-clinics-community-engagement",
    title: "Community Engagement Projects - Chest Clinics",
    category: "Community", // VERIFY
    location: "Nigeria", // VERIFY
    image: "/comm-1.jpg",
  },
  {
    slug: "headquarters-e-audit-office",
    title: "Construction of Headquarters and E-Audit Office",
    category: "Commercial", // VERIFY
    location: "Nigeria", // VERIFY
    image: "/audit-office 1.jpg",
  },
  {
    slug: "office-complex",
    title: "Construction of Office Complex",
    category: "Commercial", // VERIFY
    location: "Nigeria", // VERIFY
    image: "/office-complex 1.jpg",
  },
  {
    slug: "nuclear-instrumentation-laboratory-naec",
    title: "Nuclear Instrumentation Laboratory Complex for NAEC",
    category: "Institutional", // VERIFY
    location: "Sheda, Abuja", // VERIFY — NAEC is headquartered in Sheda, Abuja
    image: "/Laboratory Complex for NAEC.jpg",
  },
  {
    slug: "maternal-child-center",
    title: "Community Engagement Projects - Maternal and Child Center",
    category: "Community", // VERIFY
    location: "Nigeria", // VERIFY
    image: "/Maternal and Child Center 1.jpg",
  },
  {
    slug: "250-seater-computer-laboratory",
    title: "250-Seater Capacity Computer Laboratory",
    category: "Institutional", // VERIFY
    location: "Nigeria", // VERIFY
    image: "/Computer Laboratory 1.jpg",
  },
  {
    slug: "kenneth-dike-library-renovation",
    title: "Renovation of Kenneth Dike Library (Central Library)",
    category: "Renovation",
    location: "University of Ibadan, Ibadan", // Kenneth Dike Library is UI's central library
    image: "/Kenneth Dike Library 1.jpg",
  },
];

interface ProjectsGridProps {
  category: string;
}

export default function ProjectsGrid({ category }: ProjectsGridProps) {
  const filtered =
    category === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === category);

  return (
    <section
      className={`${display.variable} ${mono.variable} relative bg-white py-20 md:py-28`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* section header */}
        <div className="mb-14 flex flex-col gap-6 border-b border-[#0E1A2A]/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#B5822C]">
              Selected Work
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.15] text-[#0E1A2A] sm:text-4xl">
              Projects delivered with precision
            </h2>
          </div>
          <motion.p
            key={filtered.length}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#0E1A2A]/40"
          >
            {String(filtered.length).padStart(2, "0")} Project
            {filtered.length !== 1 ? "s" : ""}
          </motion.p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-5 py-24 text-center"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-10 w-10 text-[#0E1A2A]/20"
                fill="none"
              >
                <rect
                  x="6"
                  y="6"
                  width="36"
                  height="36"
                  strokeDasharray="4 4"
                  stroke="currentColor"
                />
                <path
                  d="M6 6 L42 42 M42 6 L6 42"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </svg>
              <p className="font-[family-name:var(--font-display)] text-xl text-[#0E1A2A]/70">
                No projects found in this category yet.
              </p>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[#0E1A2A]/40">
                Try a different filter above
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      custom={index % 3}
      variants={fadeUp}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#0E1A2A]/10 shadow-[0_4px_20px_rgba(14,26,42,0.06)] transition-shadow duration-300 group-hover:shadow-[0_10px_32px_rgba(14,26,42,0.14)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
            style={{ background: "rgba(14,26,42,0.38)" }}
          />

          {/* corner registration marks — draw in on hover */}
          {[
            "top-3 left-3",
            "top-3 right-3 rotate-90",
            "bottom-3 left-3 -rotate-90",
            "bottom-3 right-3 rotate-180",
          ].map((pos, idx) => (
            <span
              key={idx}
              className={`pointer-events-none absolute ${pos} h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <svg
                viewBox="0 0 12 12"
                className="h-full w-full text-white/70"
                fill="none"
              >
                <path d="M0 3 V0 H3" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
          ))}

          {/* index numeral, top-left */}
          <span className="absolute left-4 top-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* View project label on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white">
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl leading-snug text-[#0E1A2A]">
              {project.title}
            </h3>
            <p className="text-sm text-[#0E1A2A]/50">{project.location}</p>
            <span className="mt-2 block h-px w-6 bg-[#D9A441] transition-all duration-400 group-hover:w-12" />
          </div>
          <span className="shrink-0 whitespace-nowrap rounded-full border border-[#B5822C]/25 px-3 py-1 pt-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[#B5822C]">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
