import { Route, Routes } from "react-router"
import Footer from "./pages/Footer"
import Header from "./pages/Header"
import Home from "./pages/Home"


function App() {

  return (
    <>
  <Header/>

<Routes>
  <Route path="/" element={<Home />} />
  
  </Routes>

  <Footer />

  </>
  )
}

export default App
