import { Route, Routes } from "react-router"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import FAQ from "./pages/FAQ"
import VinCheck from "./pages/VinCheck"
import ScrollOnTop from "./components/ScrollOnTop"
import ErrorPage from "./pages/ErrorPage"
import InvalidVin from "./pages/InvalidVin"
import RefundPolicy from "./pages/RefundPolicy"


function App() {

  

  return (
    <>
    <ScrollOnTop />
  <Header/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/about" element={<About />} />
  <Route path="/qa" element={<FAQ />} />
  <Route path="/vin-check/:vinUrl" element={<VinCheck />} />
  <Route path="/invalid-vin" element={<InvalidVin />} />
  <Route path="/refund-policy" element={<RefundPolicy />} />


  <Route path="*" element={<ErrorPage />} />
  
  </Routes>

  <Footer />

  </>
  )
}

export default App
