import React, { useEffect } from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Hero from './components/Hero';
import Cafes from './components/Cafes';
import Gallery from './components/Gallery';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './Loader';
import heroVideo from '/video/output1.mp4';
import img1 from '/images/drink1.png';
import img2 from '/images/drink2.png';
import img3 from '/images/drink3.png';
import img4 from '/images/drink4.png';
import { useState } from 'react';


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let videoLoaded = false;
    let imagesLoaded = false;

    // Preload video
    const video = document.createElement('video');
    video.src = heroVideo;
    video.preload = 'auto';
    video.addEventListener('loadeddata', () => {
      videoLoaded = true;
      checkReady();
    });

    // Preload images
    const images = [img1,img2,img3,img4]; // Add all images here
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          imagesLoaded = true;
          checkReady();
        }
      };
    });

    function checkReady() {
      if (videoLoaded && imagesLoaded) {
        setTimeout(() => setIsLoading(false), 500);
      }
    }
  }, []);


  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <main>
          <Hero />
          <Cafes />
          <About />
          <Gallery />
          <Menu />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App