// "use client";

// import Image from "next/image";
// import { useState, useEffect, useCallback } from "react";
// import { Fraunces, JetBrains_Mono } from "next/font/google";
// import { motion, AnimatePresence } from "framer-motion";
// import { Lightbulb, Cog, Box } from "lucide-react";

// const display = Fraunces({
//   subsets: ["latin"],
//   weight: ["400", "600"],
//   variable: "--font-display",
// });

// const mono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

// const SLIDES = [
//   {
//     eyebrow: "Our strategy",
//     title: "The best strategy to project development",
//     body: "To develop creative solutions to meet and exceed our clients expectations.",
//     image: "/hero-1.jpg",
//   },
//   {
//     eyebrow: "We take care of everything",
//     title: "Construction management",
//     body: "We provide overall planning, coordination and control of a project, so you don't have to worry about anything.",
//     image: "/hero-2.jpg",
//   },
//   {
//     eyebrow: "Satisfaction guaranteed",
//     title: "Relationships that last",
//     body: "Our promise as a contractor is to build community value into every project while delivering professional expertise.",
//     image: "/hero-3.jpg",
//   },
//   {
//     eyebrow: "Project approach",
//     title: "Project design and construction",
//     body: "Our design philosophy is to provide quality, on-time and within-budget proposals — achieved through strong communication with the client, the user, and the total project design and construction staff.",
//     image: "/hero-4.jpg",
//   },
// ];

// const CAPABILITIES = [
//   { icon: Lightbulb, label: "Electrical" },
//   { icon: Cog, label: "Mechanical" },
//   { icon: Box, label: "Civil" },
// ];

// const AUTOPLAY_MS = 6000;

// const EASE = [0.22, 1, 0.36, 1] as const;

// const textContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
// };

// const textItem = {
//   hidden: { opacity: 0, y: 14 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
// };

// export default function Hero() {
//   const [active, setActive] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [reducedMotion, setReducedMotion] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     setReducedMotion(mq.matches);
//     const onChange = () => setReducedMotion(mq.matches);
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   const next = useCallback(() => {
//     setActive((i) => (i + 1) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     if (paused || reducedMotion) return;
//     const t = setInterval(next, AUTOPLAY_MS);
//     return () => clearInterval(t);
//   }, [next, active, paused, reducedMotion]);

//   const goTo = (i: number) => setActive(i);

//   const slide = SLIDES[active];

//   return (
//     <section
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//       onFocusCapture={() => setPaused(true)}
//       onBlurCapture={() => setPaused(false)}
//       className={`${display.variable} ${mono.variable} relative h-[640px] w-full overflow-hidden bg-[#0E1A2A]`}
//     >
//       {/* keyframes for the ruler-style progress fill */}
//       <style>{`
//         @keyframes heroSegmentFill {
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//       `}</style>

//       {/* sr-only live region so screen readers announce slide changes */}
//       <p className="sr-only" role="status" aria-live="polite">
//         {slide.eyebrow}: {slide.title}
//       </p>

//       {/* background images — crossfade with a slow Ken Burns drift */}
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={slide.image}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.9, ease: EASE }}
//         >
//           <motion.div
//             className="absolute inset-0"
//             initial={{ scale: reducedMotion ? 1 : 1.08 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: AUTOPLAY_MS / 1000 + 0.9, ease: "linear" }}
//           >
//             <Image
//               src={slide.image}
//               alt=""
//               fill
//               priority={active === 0}
//               className="object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>

//       {/* bottom-left gradient wedge only — keeps most of the photo visible */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(0deg, rgba(10,18,30,0.94) 0%, rgba(10,18,30,0.55) 30%, rgba(10,18,30,0) 55%)",
//         }}
//       />
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg, rgba(10,18,30,0.55) 0%, rgba(10,18,30,0) 42%)",
//         }}
//       />

//       {/* corner registration marks — architectural drafting motif */}
//       <RegistrationMark className="left-6 top-6" />
//       <RegistrationMark className="right-6 top-6 rotate-90" />
//       <RegistrationMark className="right-6 bottom-6 rotate-180" />
//       <RegistrationMark className="left-6 bottom-6 -rotate-90" />

//       {/* top-right: supporting copy + capability icons */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
//         className="absolute right-6 top-28 z-10 hidden max-w-[340px] text-right md:block md:right-10 md:top-32"
//       >
//         <p className="mb-5 font-[family-name:var(--font-mono)] text-[13px] leading-[1.7] text-white/75">
//           We specialize in electrical, mechanical, and civil engineering,
//           delivering top-quality designs, installations, and construction.
//         </p>
//         <div className="flex items-center justify-end gap-3">
//           {CAPABILITIES.map(({ icon: Icon, label }, i) => (
//             <motion.span
//               key={label}
//               title={label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: EASE }}
//               whileHover={{ y: -3 }}
//               className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors duration-300 hover:border-[#D9A441] hover:text-[#D9A441]"
//             >
//               <Icon className="h-4 w-4" strokeWidth={1.75} />
//             </motion.span>
//           ))}
//         </div>
//       </motion.div>

//       {/* content */}
//       <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-24 md:px-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             variants={textContainer}
//             initial="hidden"
//             animate="visible"
//             className="max-w-[600px]"
//           >
//             <motion.div
//               variants={textItem}
//               className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]"
//             >
//               {slide.eyebrow}
//               <motion.span
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
//                 style={{ transformOrigin: "left" }}
//                 className="h-px w-8 bg-[#D9A441]/60"
//                 aria-hidden="true"
//               />
//             </motion.div>
//             <motion.h1
//               variants={textItem}
//               className="mb-5 font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[1.15] text-white md:text-[46px]"
//             >
//               {slide.title}
//             </motion.h1>
//             <motion.p
//               variants={textItem}
//               className="max-w-[460px] text-[15px] leading-[1.7] text-white/70"
//             >
//               {slide.body}
//             </motion.p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* ruler-style progress rail — replaces the plain dot indicator,
//           doubles as navigation, and echoes the drafting-scale motif */}
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

"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Cog, Box } from "lucide-react";

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

const SLIDES = [
  {
    eyebrow: "Our strategy",
    title: "The best strategy to project development",
    body: "To develop creative solutions to meet and exceed our clients expectations.",
    image: "/hero-1.jpg",
  },
  {
    eyebrow: "We take care of everything",
    title: "Construction management",
    body: "We provide overall planning, coordination and control of a project, so you don't have to worry about anything.",
    image: "/hero-2.jpg",
  },
  {
    eyebrow: "Satisfaction guaranteed",
    title: "Relationships that last",
    body: "Our promise as a contractor is to build community value into every project while delivering professional expertise.",
    image: "/hero-3.jpg",
  },
  {
    eyebrow: "Project approach",
    title: "Project design and construction",
    body: "Our design philosophy is to provide quality, on-time and within-budget proposals — achieved through strong communication with the client, the user, and the total project design and construction staff.",
    image: "/hero-4.jpg",
  },
];

const CAPABILITIES = [
  { icon: Lightbulb, label: "Electrical" },
  { icon: Cog, label: "Mechanical" },
  { icon: Box, label: "Civil" },
];

// slower, more deliberate pacing = feels premium instead of a slideshow
const AUTOPLAY_MS = 7500;

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_SOFT = [0.16, 1, 0.3, 1] as const; // gentler ease-out for the Ken Burns drift

const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 }, // waits for image crossfade to settle first
  },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [next, active, paused, reducedMotion]);

  const goTo = (i: number) => setActive(i);

  const slide = SLIDES[active];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className={`${display.variable} ${mono.variable} relative h-[640px] w-full overflow-hidden bg-[#0E1A2A]`}
    >
      {/* keyframes for the ruler-style progress fill */}
      <style>{`
        @keyframes heroSegmentFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* sr-only live region so screen readers announce slide changes */}
      <p className="sr-only" role="status" aria-live="polite">
        {slide.eyebrow}: {slide.title}
      </p>

      {/* background images — slow crossfade with a long, cinematic Ken Burns drift */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: reducedMotion ? 1 : 1.14 }}
            animate={{ scale: 1 }}
            transition={{
              duration: AUTOPLAY_MS / 1000 + 1.4,
              ease: EASE_SOFT,
            }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={active === 0}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* bottom-left gradient wedge only — keeps most of the photo visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(10,18,30,0.94) 0%, rgba(10,18,30,0.55) 30%, rgba(10,18,30,0) 55%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,18,30,0.55) 0%, rgba(10,18,30,0) 42%)",
        }}
      />

      {/* corner registration marks — architectural drafting motif */}
      <RegistrationMark className="left-6 top-6" />
      <RegistrationMark className="right-6 top-6 rotate-90" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />
      <RegistrationMark className="left-6 bottom-6 -rotate-90" />

      {/* top-right: supporting copy + capability icons */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        className="absolute right-6 top-28 z-10 hidden max-w-[340px] text-right md:block md:right-10 md:top-32"
      >
        <p className="mb-5 font-[family-name:var(--font-mono)] text-[13px] leading-[1.7] text-white/75">
          We specialize in electrical, mechanical, and civil engineering,
          delivering top-quality designs, installations, and construction.
        </p>
        <div className="flex items-center justify-end gap-3">
          {CAPABILITIES.map(({ icon: Icon, label }, i) => (
            <motion.span
              key={label}
              title={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: EASE }}
              whileHover={{ y: -3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors duration-300 hover:border-[#D9A441] hover:text-[#D9A441]"
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-24 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={textContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-[600px]"
          >
            <motion.div
              variants={textItem}
              className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]"
            >
              {slide.eyebrow}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                style={{ transformOrigin: "left" }}
                className="h-px w-8 bg-[#D9A441]/60"
                aria-hidden="true"
              />
            </motion.div>
            <motion.h1
              variants={textItem}
              className="mb-5 font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[1.15] text-white md:text-[46px]"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              variants={textItem}
              className="max-w-[460px] text-[15px] leading-[1.7] text-white/70"
            >
              {slide.body}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ruler-style progress rail — replaces the plain dot indicator,
          doubles as navigation, and echoes the drafting-scale motif */}
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
