import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { DifferenceSection } from "@/components/sections/difference";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { CTABanner } from "@/components/sections/cta-banner";
import { ProfileSection } from "@/components/sections/profile";
import { ReasonSection } from "@/components/sections/reason";
import { ServiceSection } from "@/components/sections/service";
import { PriceSection } from "@/components/sections/price";
import { FAQSection } from "@/components/sections/faq";
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
        <CTABanner variant="rose" />
        <ProfileSection />
        <ReasonSection />
        <ServiceSection />
        <PriceSection />
        <FAQSection />
        <section id="contact">
          <CTABanner variant="dark" />
        </section>
      </main>
      <Footer />
    </>
  );
}
