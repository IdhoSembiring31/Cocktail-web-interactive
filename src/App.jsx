import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText)
import Hero from "./components/Hero";
import React from 'react'
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
    </main>
  )
}

export default App