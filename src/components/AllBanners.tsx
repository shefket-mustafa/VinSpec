import CustomerReviews from "./banners/CustomerReviews";
import ExpandBanner from "./banners/Expand-banner";
import HeroBanner1 from "./banners/Hero-banner1";
import HeroBanner2 from "./banners/Hero-banner2";
import HeroBanner3 from "./banners/Hero-banner3";
import HeroSection1 from "./banners/HeroSection1";
import SupportBanner from "./banners/SupportBanner";
import WorldMapBanner from "./banners/WorldMap-banner";

export default function AllBanners() {
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
