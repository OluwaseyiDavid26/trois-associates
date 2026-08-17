// // @/components/Projects/ProjectsGrid.tsx
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       delay: i * 0.06,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   }),
// };

// const PROJECTS = [
//   {
//     slug: "riverside-residence",
//     title: "Riverside Residence",
//     category: "Residential",
//     location: "Lekki, Lagos",
//     image: "/images/projects/riverside-residence.jpg",
//   },
//   {
//     slug: "harborview-offices",
//     title: "Harborview Offices",
//     category: "Commercial",
//     location: "Victoria Island, Lagos",
//     image: "/images/projects/harborview-offices.jpg",
//   },
//   {
//     slug: "the-oakwood-loft",
//     title: "The Oakwood Loft",
//     category: "Renovation",
//     location: "Ikoyi, Lagos",
//     image: "/images/projects/oakwood-loft.jpg",
//   },
//   {
//     slug: "meridian-showroom",
//     title: "Meridian Showroom",
//     category: "Interiors",
//     location: "Ikeja, Lagos",
//     image: "/images/projects/meridian-showroom.jpg",
//   },
//   {
//     slug: "sable-family-home",
//     title: "Sable Family Home",
//     category: "Residential",
//     location: "Ajah, Lagos",
//     image: "/images/projects/sable-family-home.jpg",
//   },
//   {
//     slug: "crestline-hq",
//     title: "Crestline HQ",
//     category: "Commercial",
//     location: "Yaba, Lagos",
//     image: "/images/projects/crestline-hq.jpg",
//   },
// ];

// interface ProjectsGridProps {
//   category: string;
// }

// export default function ProjectsGrid({ category }: ProjectsGridProps) {
//   const filtered =
//     category === "All"
//       ? PROJECTS
//       : PROJECTS.filter((p) => p.category === category);

//   return (
//     <section className="relative bg-white py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-6 md:px-12">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={category}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
//           >
//             {filtered.map((project, i) => (
//               <motion.div
//                 key={project.slug}
//                 initial="hidden"
//                 animate="visible"
//                 custom={i % 3}
//                 variants={fadeUp}
//               >
//                 <Link
//                   href={`/projects/${project.slug}`}
//                   className="group block"
//                 >
//                   <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm mb-5">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                     />
//                     <div
//                       className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
//                       style={{ background: "rgba(14,26,42,0.38)" }}
//                     />
//                     {/* View project label on hover */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
//                       <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white border border-white/40 px-5 py-2.5 rounded-full">
//                         View Project
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <h3 className="font-serif text-xl text-[#0E1A2A] mb-1">
//                         {project.title}
//                       </h3>
//                       <p className="text-[#0E1A2A]/50 text-sm">
//                         {project.location}
//                       </p>
//                     </div>
//                     <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#D9A441] shrink-0 pt-1">
//                       {project.category}
//                     </span>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {filtered.length === 0 && (
//           <p className="text-center text-[#0E1A2A]/50 py-20">
//             No projects found in this category yet.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

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

const PROJECTS = [
  {
    slug: "riverside-residence",
    title: "Riverside Residence",
    category: "Residential",
    location: "Lekki, Lagos",
    image: "/images/projects/riverside-residence.jpg",
  },
  {
    slug: "harborview-offices",
    title: "Harborview Offices",
    category: "Commercial",
    location: "Victoria Island, Lagos",
    image: "/images/projects/harborview-offices.jpg",
  },
  {
    slug: "the-oakwood-loft",
    title: "The Oakwood Loft",
    category: "Renovation",
    location: "Ikoyi, Lagos",
    image: "/images/projects/oakwood-loft.jpg",
  },
  {
    slug: "meridian-showroom",
    title: "Meridian Showroom",
    category: "Interiors",
    location: "Ikeja, Lagos",
    image: "/images/projects/meridian-showroom.jpg",
  },
  {
    slug: "sable-family-home",
    title: "Sable Family Home",
    category: "Residential",
    location: "Ajah, Lagos",
    image: "/images/projects/sable-family-home.jpg",
  },
  {
    slug: "crestline-hq",
    title: "Crestline HQ",
    category: "Commercial",
    location: "Yaba, Lagos",
    image: "/images/projects/crestline-hq.jpg",
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
      className={`${display.variable} ${mono.variable} relative bg-white py-16 md:py-24`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
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
                  <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-sm">
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
                    {/* View project label on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      <span className="rounded-full border border-white/40 px-5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-white">
                        View Project
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-1 font-[family-name:var(--font-display)] text-xl text-[#0E1A2A]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#0E1A2A]/50">
                        {project.location}
                      </p>
                    </div>
                    <span className="shrink-0 pt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[#D9A441]">
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
