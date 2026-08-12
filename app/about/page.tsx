// app/about/page.tsx
import AboutHero from "@/components/About/AboutHero";
import Corevalues from "@/components/About/Corevalues";
import CompanyStory from "@/components/About/CompanyStory";
import TeamGrid from "@/components/About/TeamGrid";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import CTAStrip from "@/components/About/CTAStrip";
// import CoreValues from "@/components/about/CoreValues";
// import Timeline from "@/components/about/Timeline
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <Corevalues />
      <TeamGrid />
      <WhyChooseUs />
      <CTAStrip />
    </main>
  );
}
