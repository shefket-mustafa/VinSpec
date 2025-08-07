import { Route, Routes } from "react-router"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"


function App() {

  return (
    <>
  <Header/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contacts" element={<Contacts />} />
  
  </Routes>

  <Footer />

  </>
  )
}

export default App
