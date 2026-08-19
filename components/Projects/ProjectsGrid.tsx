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
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#0E1A2A]/40">
            {String(filtered.length).padStart(2, "0")} Project
            {filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial="hidden"
                animate="visible"
                custom={i % 3}
                variants={fadeUp}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#0E1A2A]/10 shadow-[0_4px_20px_rgba(14,26,42,0.06)] transition-shadow duration-300 group-hover:shadow-[0_8px_28px_rgba(14,26,42,0.12)]">
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

                    {/* index numeral, top-left */}
                    <span className="absolute left-4 top-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* View project label on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      <span className="rounded-full border border-white/40 px-5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white">
                        View Project
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl leading-snug text-[#0E1A2A]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#0E1A2A]/50">
                        {project.location}
                      </p>
                    </div>
                    <span className="shrink-0 whitespace-nowrap pt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[#B5822C]">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-[family-name:var(--font-display)] text-xl text-[#0E1A2A]/70">
              No projects found in this category yet.
            </p>
            <p className="mt-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[#0E1A2A]/40">
              Try a different filter above
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
