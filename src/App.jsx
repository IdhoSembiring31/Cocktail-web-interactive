import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText)
import Hero from "./components/Hero";
import React from 'react'

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App