// // components/home/CTAStrip.tsx
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function CTAStrip() {
//   return (
//     <section className="relative overflow-hidden bg-[#D9A441] py-24 sm:py-28">
//       {/* faint blueprint grid, dark on gold instead of white on navy */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(14,26,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(14,26,42,0.8) 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <RegistrationMark className="left-6 top-6" />
//       <RegistrationMark className="right-6 bottom-6 rotate-180" />

//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//         className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-10"
//       >
//         <div className="max-w-[520px]">
//           <div className="mb-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#0E1A2A]/60">
//             Start your project /
//           </div>
//           <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-[#0E1A2A] sm:text-[42px]">
//             Let's build something that lasts
//           </h2>
//         </div>

//         <Link
//           href="/contact"
//           className="group flex shrink-0 items-center gap-3 border border-[#0E1A2A]/30 bg-[#0E1A2A] px-7 py-4 font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#0E1A2A]/90"
//         >
//           Get in touch
//           <span className="transition-transform duration-300 group-hover:translate-x-1">
//             →
//           </span>
//         </Link>
//       </motion.div>
//     </section>
//   );
// }

// function RegistrationMark({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 32 32"
//       className={`absolute z-10 h-6 w-6 text-[#0E1A2A]/30 ${className ?? ""}`}
//       aria-hidden="true"
//     >
//       <path d="M16 2 V12" stroke="currentColor" strokeWidth="1" />
//       <path d="M2 16 H12" stroke="currentColor" strokeWidth="1" />
//       <circle
//         cx="16"
//         cy="16"
//         r="3.5"
//         stroke="currentColor"
//         strokeWidth="1"
//         fill="none"
//       />
//     </svg>
//   );
// }

// components/home/CTAStrip.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-[#D9A441] py-24 sm:py-28">
      {/* faint blueprint grid, dark on gold instead of white on navy */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,26,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(14,26,42,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end md:px-10"
      >
        <div className="max-w-[520px]">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#0E1A2A]/60">
            Start your project
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-[#0E1A2A] sm:text-[42px]">
            Let's build something that lasts
          </h2>
        </div>

        <Link
          href="/contact"
          className="group flex shrink-0 items-center gap-3 rounded-sm border border-[#0E1A2A]/30 bg-[#0E1A2A] px-7 py-4 font-[family-name:var(--font-mono)] text-[13px] uppercase tracking-[0.15em] text-white shadow-[0_8px_24px_rgba(14,26,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#111f33] hover:shadow-[0_12px_28px_rgba(14,26,42,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1A2A]"
        >
          Get in touch
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

function RegistrationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`absolute z-10 h-6 w-6 text-[#0E1A2A]/30 ${className ?? ""}`}
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
