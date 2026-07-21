import Hero from "@/components/Home/Hero";
import TrustStrip from "@/components/Home/Truststrip";
import Services from "@/components/Home/Services";
import Truststrip from "@/components/Home/Truststrip";
import WhoWeAre from "@/components/Home/WhoWeAre";
import WhyChooseUs from "@/components/Home/Whychooseus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Truststrip />
      <Services />
      <WhyChooseUs />
      <WhoWeAre />
    </>
  );
}
