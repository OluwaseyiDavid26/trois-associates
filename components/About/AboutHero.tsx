// // components/about/AboutHero.tsx
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const stats = [
//   { value: "18+", label: "Years in Practice" },
//   { value: "240+", label: "Projects Delivered" },
//   { value: "96%", label: "Client Retention" },
// ];

// export default function AboutHero() {
//   return (
//     <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
//       {/* Blueprint grid overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <RegistrationMark className="left-6 top-6" />
//       <RegistrationMark className="right-6 top-6 rotate-90" />

//       <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
//         {/* left — copy */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
//             <span className="h-px w-8 bg-[#D9A441]/50" />
//             Who We Are
//           </div>

//           <h1 className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-[1.12] text-white sm:text-[54px]">
//             Building <em className="italic text-[#D9A441]">trust</em>, one
//             project at a time
//           </h1>

//           <p className="mt-6 max-w-[460px] text-[15px] leading-[1.75] text-white/65">
//             We're a design-build firm delivering architectural planning,
//             construction, and project management under one roof. For over 18
//             years, we've partnered with clients across residential and
//             commercial sectors to turn ambitious ideas into structures that last
//             — grounded in strong communication, honest budgets, and
//             craftsmanship at every stage.
//           </p>

//           {/* stat row */}
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.5,
//               delay: 0.25,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="mt-14 grid max-w-[460px] grid-cols-3 gap-6 border-t border-white/10 pt-8"
//           >
//             {stats.map((stat) => (
//               <div key={stat.label}>
//                 <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-[28px]">
//                   {stat.value}
//                 </p>
//                 <p className="mt-1 font-[family-name:var(--font-mono)] text-[10.5px] uppercase leading-[1.5] tracking-[0.1em] text-white/45">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* right — image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="relative"
//         >
//           {/* offset frame accent */}
//           <div className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full border border-[#D9A441]/30 sm:block" />

//           <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
//             <Image
//               src="/about/team-onsite.jpg"
//               alt="Our team on a project site"
//               fill
//               priority
//               className="object-cover"
//             />
//             <div
//               className="pointer-events-none absolute inset-0"
//               style={{
//                 background:
//                   "linear-gradient(0deg, rgba(10,18,30,0.5) 0%, rgba(10,18,30,0) 45%)",
//               }}
//             />

//             {/* ghost numeral, same treatment as Hero/Projects */}
//             <span
//               className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[120px] font-normal leading-none text-white/[0.08]"
//               aria-hidden="true"
//             >
//               18
//             </span>

//             {/* floating credential card */}
//             <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 border border-white/10 bg-[#0E1A2A]/85 px-5 py-4 backdrop-blur-sm">
//               <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-[#D9A441]/15 text-[#D9A441]">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-[18px] w-[18px]"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 >
//                   <path
//                     d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="m8.5 12 2.5 2.5 4.5-5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </span>
//               <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-white/70">
//                 Licensed &amp; insured across all project regions
//               </p>
//             </div>
//           </div>
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

// components/about/AboutHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "18+", label: "Years in Practice" },
  { value: "240+", label: "Projects Delivered" },
  { value: "96%", label: "Client Retention" },
];

const disciplines = [
  { label: "Electrical" },
  { label: "Mechanical" },
  { label: "Civil" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      {/* Blueprint grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
            <span className="h-px w-8 bg-[#D9A441]/50" />
            Who We Are
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[42px] font-semibold leading-[1.12] text-white sm:text-[54px]">
            Design and build,{" "}
            <em className="italic text-[#D9A441]">under one roof</em>
          </h1>

          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.75] text-white/65">
            Trois Associates delivers electrical, mechanical, and civil
            engineering alongside full design-build construction — so your
            project never has to pass between separate firms. From the first
            sketch to the final walkthrough, one team carries the vision
            through, with the technical rigor of an engineering practice and the
            accountability of a single point of contact.
          </p>

          {/* discipline chips */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {disciplines.map((d) => (
              <span
                key={d.label}
                className="rounded-sm border border-white/15 px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-white/60"
              >
                {d.label}
              </span>
            ))}
          </div>

          {/* stat row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 grid max-w-[460px] grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[10.5px] uppercase leading-[1.5] tracking-[0.1em] text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* offset frame accent */}
          <div className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full border border-[#D9A441]/30 sm:block" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/about/team-onsite.jpg"
              alt="Trois Associates engineers and construction team reviewing plans on site"
              fill
              priority
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,18,30,0.5) 0%, rgba(10,18,30,0) 45%)",
              }}
            />

            {/* ghost numeral, same treatment as Hero/Projects */}
            <span
              className="pointer-events-none absolute -bottom-4 -right-2 select-none font-[family-name:var(--font-display)] text-[120px] font-normal leading-none text-white/[0.08]"
              aria-hidden="true"
            >
              18
            </span>

            {/* floating credential card */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 border border-white/10 bg-[#0E1A2A]/85 px-5 py-4 backdrop-blur-sm">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-[#D9A441]/15 text-[#D9A441]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4Z"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.5 12 2.5 2.5 4.5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase leading-[1.5] tracking-[0.08em] text-white/70">
                Licensed &amp; insured across all project regions
              </p>
            </div>
          </div>
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
