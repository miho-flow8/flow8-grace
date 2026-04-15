import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { DifferenceSection } from "@/components/sections/difference";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { ServiceFlowSection } from "@/components/sections/service-flow";
import { ProfileSection } from "@/components/sections/profile";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceSection } from "@/components/sections/service";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DifferenceSection />
        <BeforeAfterSection />
        <ServiceFlowSection />
        <ProfileSection />
        <CTABanner variant="coral" />
        <ServiceSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
