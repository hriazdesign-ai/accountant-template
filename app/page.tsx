import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import HomeApproach from "@/components/HomeApproach";
import HomeAudiences from "@/components/HomeAudiences";
import HomeContact from "@/components/HomeContact";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import HomeResults from "@/components/HomeResults";
import HomeServices from "@/components/HomeServices";
import HomeStories from "@/components/HomeStories";
import { StackedGroup, StackedSection } from "@/components/StackedSection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <StackedGroup>
          <StackedSection order={1}>
            <HomeHero />
          </StackedSection>
          <StackedSection order={2}>
            <HomeServices />
          </StackedSection>
          <StackedSection order={3}>
            <HomeAbout />
          </StackedSection>
          <StackedSection order={4}>
            <HomeAudiences />
          </StackedSection>
          <StackedSection order={5}>
            <HomeResults />
          </StackedSection>
          <StackedSection order={6}>
            <HomeApproach />
          </StackedSection>
          <StackedSection order={7}>
            <HomeStories />
          </StackedSection>
          <HomeContact />
        </StackedGroup>
      </main>
      <Footer />
    </>
  );
}
