import ProjectsHero from "@/components/Projects/ProjectsHero";
import ProjectFilterBar from "@/components/Projects/ProjectFilterBar";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import FeaturedProjectDetail from "@/components/Projects/FeaturedProjectDetail";
// import CTAStrip from "@/components/Projects/CTAStrip";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectFilterBar />
      <ProjectsGrid />
      <FeaturedProjectDetail />
    </main>
  );
}
