// // @/components/Services/ServicesList.tsx
// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       delay: i * 0.08,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   }),
// };

// const SERVICES = [
//   {
//     number: "01",
//     title: "Architectural Design",
//     description:
//       "Concept development through construction documents, balancing aesthetic vision with buildability and code compliance.",
//     image: "/images/services/architectural-design.jpg",
//   },
//   {
//     number: "02",
//     title: "Construction Management",
//     description:
//       "On-site oversight, scheduling, and subcontractor coordination to keep your project on time and within budget.",
//     image: "/images/services/construction-management.jpg",
//   },
//   {
//     number: "03",
//     title: "Interior Design",
//     description:
//       "Material selection, spatial planning, and finish detailing that carry your project's design language indoors.",
//     image: "/images/services/interior-design.jpg",
//   },
//   {
//     number: "04",
//     title: "Renovation & Remodeling",
//     description:
//       "Full-scope remodels — plumbing, electrical, structural — handled with the same rigor as new-build projects.",
//     image: "/images/services/renovation.jpg",
//   },
// ];

// export default function ServicesList() {
//   return (
//     <section className="relative bg-white py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6 md:px-12">
//         <div className="flex flex-col gap-24 md:gap-32">
//           {SERVICES.map((service, i) => (
//             <motion.div
//               key={service.number}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={fadeUp}
//               className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center ${
//                 i % 2 === 1 ? "md:[direction:rtl]" : ""
//               }`}
//             >
//               {/* Image */}
//               <div
//                 className={`md:col-span-6 relative ${
//                   i % 2 === 1 ? "md:[direction:ltr]" : ""
//                 }`}
//               >
//                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="h-full w-full object-cover"
//                   />
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: "rgba(14,26,42,0.38)" }}
//                   />
//                 </div>
//                 <span className="absolute -top-6 -left-2 font-serif text-7xl md:text-8xl text-[#0E1A2A]/10 select-none">
//                   {service.number}
//                 </span>
//               </div>

//               {/* Text */}
//               <div
//                 className={`md:col-span-6 ${
//                   i % 2 === 1 ? "md:[direction:ltr] md:pr-8" : "md:pl-8"
//                 }`}
//               >
//                 <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4">
//                   Service {service.number}
//                 </p>
//                 <h3 className="font-serif text-2xl md:text-4xl text-[#0E1A2A] mb-5 leading-[1.15]">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#0E1A2A]/65 text-base md:text-lg leading-relaxed max-w-md">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// @/components/Services/ServicesList.tsx
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SERVICES = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Concept development through construction documents, balancing aesthetic vision with buildability and code compliance.",
    image:
      "https://images.pexels.com/photos/239886/pexels-photo-239886.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    title: "Construction Management",
    description:
      "On-site oversight, scheduling, and subcontractor coordination to keep your project on time and within budget.",
    image:
      "https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Material selection, spatial planning, and finish detailing that carry your project's design language indoors.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "04",
    title: "Renovation & Remodeling",
    description:
      "Full-scope remodels — plumbing, electrical, structural — handled with the same rigor as new-build projects.",
    image:
      "https://images.pexels.com/photos/16767783/pexels-photo-16767783.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function ServicesList() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-24 md:gap-32">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`md:col-span-6 relative ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(14,26,42,0.38)" }}
                  />
                </div>
                <span className="absolute -top-6 -left-2 font-serif text-7xl md:text-8xl text-[#0E1A2A]/10 select-none">
                  {service.number}
                </span>
              </div>

              {/* Text */}
              <div
                className={`md:col-span-6 ${
                  i % 2 === 1 ? "md:[direction:ltr] md:pr-8" : "md:pl-8"
                }`}
              >
                <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4">
                  Service {service.number}
                </p>
                <h3 className="font-serif text-2xl md:text-4xl text-[#0E1A2A] mb-5 leading-[1.15]">
                  {service.title}
                </h3>
                <p className="text-[#0E1A2A]/65 text-base md:text-lg leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
