"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  num: string;
  name: string;
  description: string;
  slug: string;
}

const services: Service[] = [
  {
    num: "01",
    slug: "design",
    name: "Design",
    description:
      "Architectural planning and concept development tailored to your site and vision.",
  },
  {
    num: "02",
    slug: "build",
    name: "Build",
    description:
      "Full-scale construction execution, from groundbreaking to final finishes.",
  },
  {
    num: "03",
    slug: "project-management",
    name: "Project Management",
    description:
      "One team overseeing timeline, budget, and quality from start to handover.",
  },
  {
    num: "04",
    slug: "renovation",
    name: "Renovation",
    description:
      "Reimagining existing structures without compromising on structural integrity.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      {/* corner registration marks — same motif as Hero */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
              <span className="text-white/40">Our Services /</span>
              What we do
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]">
              Built to last, designed with intent
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441] sm:block"
          >
            View all →
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden bg-[#0E1A2A] p-7 transition-colors duration-300 hover:bg-[#111f33]"
              >
                {/* ghost numeral watermark, same treatment as Hero */}
                <span
                  className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[120px] font-normal leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-[#D9A441]/[0.08]"
                  aria-hidden="true"
                >
                  {service.num}
                </span>

                <div className="relative flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/40">
                  {service.num}
                  <span className="h-[1px] w-5 bg-white/35 transition-all duration-300 group-hover:w-8 group-hover:bg-[#D9A441]" />
                </div>

                <div className="relative">
                  <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-white sm:text-[22px]">
                    {service.name}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-[14px] leading-[1.6] text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
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
