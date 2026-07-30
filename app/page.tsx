import Hero from "@/components/Home/Hero";
import ServicesSrip from "@/components/Home/ServicesStrip";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ProcessOverview from "@/components/Home/ProcessOverview";
import StatsStrip from "@/components/Home/StatsStrip";
import CTAStrip from "@/components/Home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSrip />
      <FeaturedProjects />
      <ProcessOverview />
      <StatsStrip />
      <CTAStrip />
      {/* <Truststrip /> */}
    </>
  );
}
