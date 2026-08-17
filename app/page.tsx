import Hero from "@/components/Home/Hero";
import ServicesStrip from "@/components/Home/ServicesStrip";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
// import ProcessOverview from "@/components/Home/ProcessOverview";
import StatsStrip from "@/components/Home/StatsStrip";
import CTAStrip from "@/components/Home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <FeaturedProjects />
      {/* <ProcessOverview /> */}
      <StatsStrip />
      <CTAStrip />
      {/* <Truststrip /> */}
    </>
  );
}
