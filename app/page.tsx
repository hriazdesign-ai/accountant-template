import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import SoftwareLogosSection from "@/components/SoftwareLogosSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Accounting that gives you clarity, not complexity"
        description="We help sole traders, small businesses, and limited companies stay compliant, save tax, and make confident financial decisions — with a dedicated accountant by your side."
      />
      <StatsSection />
      <SoftwareLogosSection />
      <ServicesGrid tone="white" compactBottom />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary/10" />
      </div>
      <AudienceSection tone="white" compactTop />
      <WhyChooseUsSection tone="mint" />
      <TestimonialsSection tone="white" />
      <CTASection />
    </>
  );
}
