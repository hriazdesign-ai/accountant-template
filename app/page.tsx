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

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeServices />
        <HomeAbout />
        <HomeAudiences />
        <HomeResults />
        <HomeApproach />
        <HomeStories />
        <HomeContact />
      </main>
      <Footer />
    </>
  );
}
