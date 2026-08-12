import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ProcessSteps from "@/components/Services/ProcessSteps";
import CapabilitiesGrid from "@/components/Services/CapabilitiesGrid";
import FAQSection from "@/components/Services/FAQSection";
import CTAStrip from "@/components/Services/CTAStrip";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ProcessSteps />
      <CapabilitiesGrid />
      <FAQSection />
      <CTAStrip />
    </main>
  );
}
