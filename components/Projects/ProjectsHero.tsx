// // @/components/Projects/ProjectsHero.tsx
// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.12,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   }),
// };

// export default function ProjectsHero() {
//   return (
//     <section className="relative bg-[#0E1A2A] pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
//       {/* Drafting grid texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <div className="absolute inset-0">
//         <img
//           src="/images/projects/hero-bg.jpg"
//           alt=""
//           className="h-full w-full object-cover opacity-30"
//         />
//         <div
//           className="absolute inset-0"
//           style={{ background: "rgba(14,26,42,0.38)" }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-6"
//         >
//           Our Projects
//         </motion.p>

//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeUp}
//           className="font-serif text-4xl md:text-6xl leading-[1.1] text-white mb-6"
//         >
//           A portfolio built on
//           <br className="hidden md:block" /> precision and craft
//         </motion.h1>

//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={2}
//           variants={fadeUp}
//           className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
//         >
//           From residential renovations to ground-up commercial builds, explore a
//           selection of projects delivered from concept to completion.
//         </motion.p>
//       </div>
//     </section>
//   );
// }

// @/components/Projects/ProjectsHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const STATS = [
  { value: "240+", label: "Projects delivered" },
  { value: "18", label: "Years building" },
  { value: "3", label: "Property types" },
];

export default function ProjectsHero() {
  return (
    <section
      className={`${display.variable} ${mono.variable} relative bg-[#0E1A2A] pt-40 pb-24 md:pt-52 md:pb-28 overflow-hidden`}
    >
      {/* Drafting grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(14,26,42,0.5)" }}
        />
      </div>

      {/* Registration marks — same motif as Hero/ServicesStrip */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      {/* Ghost numeral watermark */}
      <span
        className="pointer-events-none absolute bottom-[-0.05em] left-6 select-none font-[family-name:var(--font-display)] text-[240px] leading-none font-normal text-white/[0.04] hidden md:block"
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#D9A441]"
        >
          Our Projects
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mb-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] text-white md:text-6xl"
        >
          A portfolio built on
          <br className="hidden md:block" /> precision and craft
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          From residential renovations to ground-up commercial builds, explore a
          selection of projects delivered from concept to completion.
        </motion.p>

        {/* Stat row */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mx-auto flex max-w-xl items-center justify-center divide-x divide-white/10 border-y border-white/10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex-1 px-6 py-6">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-white/45">
                {stat.label}
              </p>
            </div>
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
