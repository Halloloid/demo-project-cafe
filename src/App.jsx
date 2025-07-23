import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Hero from './components/Hero';
import Cafes from './components/Cafes';
import Gallery from './components/Gallery';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Hero/>
      <Cafes/>
      <About/>
      <Gallery/>
      <Menu/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App