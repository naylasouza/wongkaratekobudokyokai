import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Karate from "./pages/Karate"
import Videos from "./pages/Videos"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        {/* <Route path="/karate" element={<Karate />} /> */}
        <Route path="/videos" element={<Videos />} />
        <Route path="/contato" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App