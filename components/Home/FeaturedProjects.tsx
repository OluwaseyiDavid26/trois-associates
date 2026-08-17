// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// interface Project {
//   slug: string;
//   num: string;
//   title: string;
//   category: string;
//   location: string;
//   year: string;
//   image: string;
//   featured?: boolean;
// }

// const projects: Project[] = [
//   {
//     slug: "riverside-commercial-complex",
//     num: "01",
//     title: "Riverside Commercial Complex",
//     category: "Commercial",
//     location: "Lagos, NG",
//     year: "2025",
//     image: "/projects/riverside.jpg",
//     featured: true,
//   },
//   {
//     slug: "oakwood-residences",
//     num: "02",
//     title: "Oakwood Residences",
//     category: "Residential",
//     location: "Lekki, NG",
//     year: "2024",
//     image: "/projects/oakwood.jpg",
//   },
//   {
//     slug: "heritage-hall-renovation",
//     num: "03",
//     title: "Heritage Hall Renovation",
//     category: "Renovation",
//     location: "Ikeja, NG",
//     year: "2024",
//     image: "/projects/heritage.jpg",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.07 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
//   },
// };

// export default function FeaturedProjects() {
//   const [lead, ...rest] = projects;

//   return (
//     <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
//       <RegistrationMark className="left-6 bottom-6 -rotate-90" />
//       <RegistrationMark className="right-6 bottom-6 rotate-180" />

//       <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
//         <div className="mb-16 flex items-end justify-between gap-6">
//           <div>
//             <div className="mb-4 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
//               <span className="text-white/40">Selected work /</span>
//               Recent Projects
//             </div>
//             <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]">
//               Proof, not promises
//             </h2>
//           </div>
//           <Link
//             href="/projects"
//             className="hidden shrink-0 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441] sm:block"
//           >
//             View all projects →
//           </Link>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 gap-4 lg:grid-cols-2"
//         >
//           <motion.div variants={cardVariants} className="lg:row-span-2">
//             <ProjectCard project={lead} large />
//           </motion.div>

//           {rest.map((project) => (
//             <motion.div key={project.slug} variants={cardVariants}>
//               <ProjectCard project={project} />
//             </motion.div>
//           ))}
//         </motion.div>

//         <Link
//           href="/projects"
//           className="mt-8 flex font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441] sm:hidden"
//         >
//           View all projects →
//         </Link>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({
//   project,
//   large,
// }: {
//   project: Project;
//   large?: boolean;
// }) {
//   return (
//     <Link
//       href={`/projects/${project.slug}`}
//       className={`group relative flex flex-col justify-end overflow-hidden border border-white/10 transition-colors duration-300 hover:border-[#D9A441]/40 ${
//         large ? "min-h-[520px]" : "min-h-[248px]"
//       }`}
//     >
//       <Image
//         src={project.image}
//         alt={project.title}
//         fill
//         className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
//       />

//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(0deg, rgba(10,18,30,0.92) 0%, rgba(10,18,30,0.35) 45%, rgba(10,18,30,0) 70%)",
//         }}
//       />

//       <span
//         className="pointer-events-none absolute bottom-0 right-2 select-none font-[family-name:var(--font-display)] text-[100px] font-normal leading-none text-white/[0.06]"
//         aria-hidden="true"
//       >
//         {project.num}
//       </span>

//       <div className="relative p-6">
//         <div className="mb-2 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#D9A441]">
//           {project.category}
//           <span className="text-white/40">{project.year}</span>
//         </div>
//         <h3
//           className={`font-[family-name:var(--font-display)] text-white ${
//             large ? "text-2xl sm:text-[28px]" : "text-lg"
//           }`}
//         >
//           {project.title}
//         </h3>
//         <p className="mt-1 font-[family-name:var(--font-mono)] text-[12px] text-white/50">
//           {project.location}
//         </p>
//       </div>
//     </Link>
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
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  slug: string;
  num: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    slug: "riverside-commercial-complex",
    num: "01",
    title: "Riverside Commercial Complex",
    category: "Commercial",
    location: "Lagos, NG",
    year: "2025",
    image: "/projects/riverside.jpg",
    featured: true,
  },
  {
    slug: "oakwood-residences",
    num: "02",
    title: "Oakwood Residences",
    category: "Residential",
    location: "Lekki, NG",
    year: "2024",
    image: "/projects/oakwood.jpg",
  },
  {
    slug: "heritage-hall-renovation",
    num: "03",
    title: "Heritage Hall Renovation",
    category: "Renovation",
    location: "Ikeja, NG",
    year: "2024",
    image: "/projects/heritage.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FeaturedProjects() {
  const [lead, ...rest] = projects;

  return (
    <section className="relative overflow-hidden bg-[#0E1A2A] py-24 sm:py-32">
      <RegistrationMark className="left-6 bottom-6 -rotate-90" />
      <RegistrationMark className="right-6 bottom-6 rotate-180" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.2em] text-[#D9A441]">
              Recent Projects
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.15] text-white sm:text-[42px]">
              Proof, not promises
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-[#D9A441]"
          >
            View all projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <motion.div variants={cardVariants} className="lg:row-span-2">
            <ProjectCard project={lead} large />
          </motion.div>

          {rest.map((project) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-sm border border-white/10 transition-colors duration-300 hover:border-[#D9A441]/40 ${
        large ? "min-h-[520px]" : "min-h-[248px]"
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(10,18,30,0.92) 0%, rgba(10,18,30,0.35) 45%, rgba(10,18,30,0) 70%)",
        }}
      />

      <span
        className="pointer-events-none absolute bottom-0 right-2 select-none font-[family-name:var(--font-display)] text-[100px] font-normal leading-none text-white/[0.06]"
        aria-hidden="true"
      >
        {project.num}
      </span>

      {/* View project — appears on hover */}
      <span className="pointer-events-none absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#D9A441] group-hover:text-[#D9A441]">
        <ArrowIcon />
      </span>

      <div className="relative p-6">
        <div className="mb-2 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#D9A441]">
          {project.category}
          <span className="text-white/40">{project.year}</span>
        </div>
        <h3
          className={`font-[family-name:var(--font-display)] leading-snug text-white ${
            large ? "text-2xl sm:text-[28px]" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1 font-[family-name:var(--font-mono)] text-[12px] text-white/50">
          {project.location}
        </p>
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 -rotate-45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
