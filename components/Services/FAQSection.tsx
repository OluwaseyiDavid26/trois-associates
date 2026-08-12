// @/components/Services/FAQSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const FAQS = [
  {
    question: "How long does a typical project take from start to finish?",
    answer:
      "Timelines vary by scope, but most projects run 4–12 months from initial consultation through final handover. We provide a detailed schedule once design and permitting are finalized.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes — permit coordination and inspection scheduling are handled by our team as part of every project, so you don't have to navigate local bureaucracy yourself.",
  },
  {
    question: "Can you work with an existing architect or design?",
    answer:
      "Absolutely. We regularly step into projects at the construction management stage and work from plans developed by outside architects.",
  },
  {
    question: "What's included in the initial consultation?",
    answer:
      "We review your site, goals, and budget, then outline a rough scope and next steps. It's a no-obligation conversation to see if we're the right fit.",
  },
  {
    question: "Do you offer fixed-price contracts?",
    answer:
      "We offer both fixed-price and cost-plus contract structures depending on project complexity — we'll walk you through which makes sense during proposal.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#D9A441] mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#0E1A2A]"
          >
            Common questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#0E1A2A]/10">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i % 3}
                variants={fadeUp}
                className="border-b border-[#0E1A2A]/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-serif text-lg md:text-xl text-[#0E1A2A]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#0E1A2A]/20 flex items-center justify-center font-mono text-[#0E1A2A] transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-[#D9A441] text-[#D9A441]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#0E1A2A]/65 text-sm md:text-base leading-relaxed pb-6 max-w-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
