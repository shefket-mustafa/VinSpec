import CustomerReviews from "../components/banners/CustomerReviews";
import ExpandBanner from "../components/banners/Expand-banner";
import HeroBanner1 from "../components/banners/Hero-banner1";
import HeroBanner2 from "../components/banners/Hero-banner2";
import HeroBanner3 from "../components/banners/Hero-banner3";
import HeroSection1 from "../components/banners/HeroSection1";
import SupportBanner from "../components/banners/SupportBanner";
import WorldMapBanner from "../components/banners/WorldMap-banner";

export default function Home() {
  return (
    <>
      <HeroSection1 />
      <HeroBanner1 />
      <HeroBanner2 />
      <HeroBanner3 />
      <CustomerReviews />
      <WorldMapBanner />
      <ExpandBanner />
      <SupportBanner />
    </>
  );
}
