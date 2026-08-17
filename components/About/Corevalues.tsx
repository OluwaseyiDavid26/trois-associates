// // components/about/CoreValues.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ShieldCheck, Hammer, HardHat, Handshake } from "lucide-react";

// interface Value {
//   num: string;
//   title: string;
//   description: string;
//   icon: React.ElementType;
// }

// const values: Value[] = [
//   {
//     num: "01",
//     title: "Integrity",
//     description:
//       "Honest budgets and transparent timelines. What we quote is what you pay, what we promise is what we deliver.",
//     icon: ShieldCheck,
//   },
//   {
//     num: "02",
//     title: "Craft",
//     description:
//       "Every detail executed with the same care whether it's a single room or a full commercial build.",
//     icon: Hammer,
//   },
//   {
//     num: "03",
//     title: "Safety",
//     description:
//       "Rigorous site standards protecting our crews, your property, and everyone who passes through.",
//     icon: HardHat,
//   },
//   {
//     num: "04",
//     title: "Partnership",
//     description:
//       "One team accountable from sketch to handover — you're never passed between contractors.",
//     icon: Handshake,
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.07 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
//   },
// };

// export default function CoreValues() {
//   return (
//     <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
//       <RegistrationMark className="left-6 top-6" />
//       <RegistrationMark className="right-6 bottom-6 rotate-180" />

//       <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
//         <div className="mb-16 max-w-[600px]">
//           <p className="mb-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
//             Core Values
//           </p>
//           <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]">
//             Not words on a wall{" "}
//             <em className="italic text-[#D9A441]">how we operate</em>
//           </h2>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {values.map((value) => {
//             const Icon = value.icon;
//             return (
//               <motion.div
//                 key={value.num}
//                 variants={cardVariants}
//                 className="group relative flex min-h-[260px] flex-col justify-between bg-[#0E1A2A] p-7 transition-colors duration-300 hover:bg-[#111f33]"
//               >
//                 <span
//                   className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[110px] font-normal leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-[#D9A441]/[0.08]"
//                   aria-hidden="true"
//                 >
//                   {value.num}
//                 </span>

//                 <div className="relative flex items-center justify-between">
//                   <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 group-hover:border-[#D9A441]/60 group-hover:text-[#D9A441]">
//                     <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
//                   </span>
//                   <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/40">
//                     {value.num}
//                   </span>
//                 </div>

//                 <div className="relative mt-8">
//                   <h3 className="font-[family-name:var(--font-display)] text-xl text-white sm:text-[22px]">
//                     {value.title}
//                   </h3>
//                   <p className="mt-2 text-[14px] leading-[1.7] text-white/60">
//                     {value.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function RegistrationMark({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 32 32"
//       className={`absolute z-10 h-6 w-6 text-white/40 ${className ?? ""}`}
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

// components/about/CoreValues.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, HardHat, Handshake } from "lucide-react";

interface Value {
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const values: Value[] = [
  {
    num: "01",
    title: "Integrity",
    description:
      "Honest budgets and transparent timelines. What we quote is what you pay, what we promise is what we deliver.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Craft",
    description:
      "Every detail executed with the same care whether it's a single room or a full commercial build.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Safety",
    description:
      "Rigorous site standards protecting our crews, your property, and everyone who passes through.",
    icon: HardHat,
  },
  {
    num: "04",
    title: "Partnership",
    description:
      "One team accountable from sketch to handover — you're never passed between contractors.",
    icon: Handshake,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16 max-w-[600px]">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[15px] uppercase tracking-[0.2em] text-[#D9A441]">
            Core Values
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.num}
                variants={cardVariants}
                className="group relative flex min-h-[280px] flex-col justify-between rounded-sm border border-white/10 bg-white/[0.03] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/40 hover:bg-white/[0.05]"
              >
                <span
                  className="pointer-events-none absolute -bottom-3 -right-1 select-none font-[family-name:var(--font-display)] text-[100px] font-normal leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-[#D9A441]/[0.08]"
                  aria-hidden="true"
                >
                  {value.num}
                </span>

                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#D9A441]/10 text-[#D9A441] transition-colors duration-300 group-hover:bg-[#D9A441] group-hover:text-[#0E1A2A]">
                    <Icon className="h-[20px] w-[20px]" strokeWidth={1.5} />
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-white/30">
                    {value.num}
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-white sm:text-[22px]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/60">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
