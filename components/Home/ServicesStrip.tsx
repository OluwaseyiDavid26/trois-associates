"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PenTool, HardHat, ClipboardList, Hammer } from "lucide-react";

interface Service {
  num: string;
  name: string;
  description: string;
  slug: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    num: "01",
    slug: "design",
    name: "Design",
    description:
      "Architectural planning and concept development tailored to your site and vision.",
    icon: PenTool,
  },
  {
    num: "02",
    slug: "build",
    name: "Build",
    description:
      "Full-scale construction execution, from groundbreaking to final finishes.",
    icon: HardHat,
  },
  {
    num: "03",
    slug: "project-management",
    name: "Project Management",
    description:
      "One team overseeing timeline, budget, and quality from start to handover.",
    icon: ClipboardList,
  },
  {
    num: "04",
    slug: "renovation",
    name: "Renovation",
    description:
      "Reimagining existing structures without compromising on structural integrity.",
    icon: Hammer,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

// inner content (icon → divider → text) reveals a beat after the card itself
const cardInner = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const cardInnerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function ServicesStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      {/* corner registration marks — same motif as Hero */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.div
              variants={headerItem}
              className="mb-4 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]"
            >
              <span className="text-white/40">Our Services </span>
              {/* What we do */}
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]"
            >
              Built to last, designed with intent
            </motion.h2>
          </div>
          <motion.div variants={headerItem}>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441]"
            >
              View all services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden bg-[#0E1A2A] p-8 transition-colors duration-300 hover:bg-[#111f33]"
                >
                  <motion.div variants={cardInner} className="contents">
                    {/* Icon */}
                    <motion.div
                      variants={cardInnerItem}
                      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 group-hover:border-[#D9A441]/60 group-hover:text-[#D9A441]"
                    >
                      <motion.span
                        whileHover={{ rotate: 12 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="flex items-center justify-center"
                      >
                        <Icon
                          className="h-[18px] w-[18px]"
                          strokeWidth={1.75}
                        />
                      </motion.span>
                    </motion.div>

                    {/* Text */}
                    <div className="relative mt-8">
                      <motion.div
                        variants={cardInnerItem}
                        className="mb-3 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/40"
                      >
                        {service.num}
                        <span className="h-[1px] w-5 bg-white/25 transition-all duration-300 group-hover:w-8 group-hover:bg-[#D9A441]" />
                      </motion.div>
                      <motion.h3
                        variants={cardInnerItem}
                        className="font-[family-name:var(--font-display)] text-xl leading-snug text-white sm:text-[22px]"
                      >
                        {service.name}
                      </motion.h3>
                      <motion.p
                        variants={cardInnerItem}
                        className="mt-3 text-[13.5px] leading-[1.65] text-white/55"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile "view all" fallback */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441]"
          >
            View all services →
          </Link>
        </div>
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
