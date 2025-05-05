import Cta from "~/components/Section/Common/Cta";
import Footer from "~/components/Section/Common/Footer";
import BrandSection from "~/components/Section/Home-1/Brand/Brand";
import ContentSectionOne from "~/components/Section/Home-1/Content/ContentOne";
import ContentSectionTwo from "~/components/Section/Home-1/Content/ContentTwo";
import FeatureSection from "~/components/Section/Home-1/Feature/Feature";
import HeroSection from "~/components/Section/Home-2/Hero/Hero";
import Portfolio from "~/components/Section/Home-2/Portfolio/Porfolio";

import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import About from "~/components/Section/Home-2/About";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HeroSection />
      <BrandSection />
      <About/>
      <ContentSectionOne />
      <ContentSectionTwo />
      <FeatureSection />
      <Portfolio/>
      <Cta />
      <Footer />
    </>
  );
}
