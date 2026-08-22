// @/components/Services/ServicesList.tsx
"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// image slides in from its "outer" edge — left row image comes from the left, right row from the right
const imageVariants = {
  hidden: (fromRight: boolean) => ({
    opacity: 0,
    x: fromRight ? 40 : -40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

// text slides in from the opposite side, slightly delayed so the image leads
const textContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const numberVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1, ease: EASE },
  },
};

const SERVICES = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Concept development through construction documents, balancing aesthetic vision with buildability and code compliance.",
    image:
      "https://res.cloudinary.com/du9kb43d6/image/upload/v1787426628/pexels-sahfy-lenz-2153643467-38610451_az1pzm.jpg",
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
          {SERVICES.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.number}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  custom={reversed}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`md:col-span-6 relative ${
                    reversed ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <motion.div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-sm"
                    whileHover="hover"
                  >
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      variants={{
                        hover: { scale: 1.06 },
                      }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(14,26,42,0.38)" }}
                    />
                  </motion.div>
                  <motion.span
                    variants={numberVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute -top-6 -left-2 font-serif text-7xl md:text-8xl text-[#0E1A2A]/10 select-none"
                  >
                    {service.number}
                  </motion.span>
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`md:col-span-6 ${
                    reversed ? "md:[direction:ltr] md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.p
                    variants={textItem}
                    className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#D9A441]"
                  >
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
                      style={{ transformOrigin: "left" }}
                      className="h-px w-6 bg-[#D9A441]/60"
                      aria-hidden="true"
                    />
                    Service {service.number}
                  </motion.p>
                  <motion.h3
                    variants={textItem}
                    className="font-serif text-2xl md:text-4xl text-[#0E1A2A] mb-5 leading-[1.15]"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={textItem}
                    className="text-[#0E1A2A]/65 text-base md:text-lg leading-relaxed max-w-md"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
