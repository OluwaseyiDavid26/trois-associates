// app/projects/page.tsx
"use client";

import { useState } from "react";
import ProjectsHero from "@/components/Projects/ProjectsHero";
// import ProjectFilterBar from "@/components/Projects/ProjectFilterBar";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
// import FeaturedProjectDetail from "@/components/Projects/FeaturedProjectDetail";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <main>
      <ProjectsHero />
      {/* <ProjectFilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      /> */}
      <ProjectsGrid category={activeCategory} />
      {/* <FeaturedProjectDetail /> */}
    </main>
  );
}
