import CustomerReviews from "./components/banners/CustomerReviews"
import ExpandBanner from "./components/banners/Expand-banner"
import HeroBanner1 from "./components/banners/Hero-banner1"
import HeroBanner2 from "./components/banners/Hero-banner2"
import HeroBanner3 from "./components/banners/Hero-banner3"
import WorldMapBanner from "./components/banners/WorldMap-banner"
import Header from "./pages/Header"
import HeroSection1 from "./components/banners/HeroSection1"
import SupportBanner from "./components/banners/SupportBanner"

function App() {

  return (
    <>
  <Header/>

  <HeroSection1 />
  <HeroBanner1 />
  <HeroBanner2 />
  <HeroBanner3 />
  <CustomerReviews />
  <WorldMapBanner />
  <ExpandBanner />
  <SupportBanner />
  </>
  )
}

export default App
