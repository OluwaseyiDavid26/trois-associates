// @/components/Projects/ProjectFilterBar.tsx
"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Interiors",
];

interface ProjectFilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilterBar({
  activeCategory,
  onCategoryChange,
}: ProjectFilterBarProps) {
  return (
    <section className="relative bg-white border-b border-[#0E1A2A]/10 sticky top-0 z-30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center gap-2 md:gap-3 py-6 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className="relative shrink-0 px-5 py-2.5 font-mono text-xs tracking-[0.1em] uppercase transition-colors duration-300"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-[#0E1A2A]" : "text-[#0E1A2A]/40"
                  }`}
                >
                  {category}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-filter-pill"
                    className="absolute inset-0 bg-[#D9A441]/15 rounded-full"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
