// // @/components/Projects/FeaturedProjectDetail.tsx
// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.1,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   }),
// };

// const SPECS = [
//   { label: "Location", value: "Lekki, Lagos" },
//   { label: "Category", value: "Residential" },
//   { label: "Size", value: "6,200 sq ft" },
//   { label: "Completed", value: "2024" },
// ];

// export default function FeaturedProjectDetail() {
//   return (
//     <section className="relative bg-[#0E1A2A] py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6 md:px-12">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
//           <div className="max-w-2xl">
//             <motion.p
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
//             >
//               Featured Project
//             </motion.p>
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={1}
//               variants={fadeUp}
//               className="font-serif text-3xl md:text-5xl leading-[1.15] text-white"
//             >
//               Riverside Residence
//             </motion.h2>
//           </div>
//         </div>

//         {/* Main image */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           custom={2}
//           variants={fadeUp}
//           className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-12"
//         >
//           <img
//             src="/images/projects/riverside-residence-full.jpg"
//             alt="Riverside Residence"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>

//         {/* Description + specs */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
//           <motion.p
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={3}
//             variants={fadeUp}
//             className="md:col-span-7 text-white/65 text-base md:text-lg leading-relaxed"
//           >
//             A ground-up residential build set along the waterfront, designed to
//             maximize natural light and blur the line between indoor and outdoor
//             living. Floor-to-ceiling glazing, locally sourced timber, and a
//             cantilevered upper level define the home's quiet, modern presence on
//             its site.
//           </motion.p>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={4}
//             variants={fadeUp}
//             className="md:col-span-5 md:pl-6 grid grid-cols-2 gap-x-6 gap-y-8 border-l border-white/10 md:border-l md:border-white/10"
//           >
//             {SPECS.map((spec) => (
//               <div key={spec.label}>
//                 <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#D9A441]/80 mb-2">
//                   {spec.label}
//                 </p>
//                 <p className="font-serif text-lg text-white">{spec.value}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// @/components/Projects/FeaturedProjectDetail.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
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
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const PROJECT_SLUG = "riverside-residence";

const SPECS = [
  { label: "Location", value: "Lekki, Lagos" },
  { label: "Category", value: "Residential" },
  { label: "Size", value: "6,200 sq ft" },
  { label: "Completed", value: "2024" },
];

export default function FeaturedProjectDetail() {
  return (
    <section
      className={`${display.variable} ${mono.variable} relative overflow-hidden bg-[#0E1A2A] py-24 md:py-32`}
    >
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />

      {/* Ghost numeral watermark */}
      <span
        className="pointer-events-none absolute -bottom-4 right-6 hidden select-none font-[family-name:var(--font-display)] text-[220px] font-normal leading-none text-white/[0.03] md:block"
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[#D9A441]"
            >
              Featured Project
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.15] text-white md:text-5xl"
            >
              Riverside Residence
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <Link
              href={`/projects/${PROJECT_SLUG}`}
              className="group inline-flex shrink-0 items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441]"
            >
              View full case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Main image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={3}
          variants={fadeUp}
          className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-sm"
        >
          <Image
            src="/images/projects/riverside-residence-full.jpg"
            alt="Riverside Residence"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Description + specs */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="text-base leading-relaxed text-white/65 md:col-span-7 md:text-lg"
          >
            A ground-up residential build set along the waterfront, designed to
            maximize natural light and blur the line between indoor and outdoor
            living. Floor-to-ceiling glazing, locally sourced timber, and a
            cantilevered upper level define the home&apos;s quiet, modern
            presence on its site.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-6 gap-y-8 border-l border-white/10 md:col-span-5 md:pl-6"
          >
            {SPECS.map((spec) => (
              <div key={spec.label}>
                <p className="mb-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[#D9A441]/80">
                  {spec.label}
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg text-white">
                  {spec.value}
                </p>
              </div>
            ))}
          </motion.div>
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
