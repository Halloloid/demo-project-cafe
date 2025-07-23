import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Gallery = () => {
  const isMobile = useMediaQuery({maxWidth:767})

  useGSAP(()=>{
    const start = isMobile?'top 20%':'top top';
    const maskedtime = gsap.timeline({
      scrollTrigger:{
        trigger:'#art',
        start,
        end:'bottom centre',
        scrub:1.5,
        pin:true
      }
    })

    maskedtime.to('.will-fade',{
      opacity:0,
      stagger:0.2,
      ease:'power1.inOut',
      
    })

    maskedtime.to('.masked-img',{
      scale:1.3,
      maskPosition:'centre',
      maskSize:'400%',
      duration:1,
      ease:'power1.inOut'
    })

    maskedtime.to('#masked-content',{
      opacity:1,
      duration:1,
      ease:'power1.inOut'
    })
  })

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The ART</h2>
        <div className='content'>
          <ul className='md:space-y-4 will-fade'>
            <li className='flex items-center gap-2'>
              <p>Freshly Brewed Coffee</p>
            </li>
            <li className='flex items-center gap-2'>
              <p>Signature Sandwiches</p>
            </li>
            <li className='flex items-center gap-2'>
              <p>Artisan Teas</p>
            </li>
            <li className='flex items-center gap-2'>
              <p>Friendly Staff</p>
            </li>
          </ul>

          <div className='cocktail-img'>
            <img
            src='/images/pexels-haberdoedas-33094639.jpg'
            className='abs-center masked-img size-full object-contain'
            />
          </div>
          <ul className='md:space-y-4 will-fade'>
            <li className='flex items-center gap-2'>
              <p>Free Wi-fi</p>
            </li>
            <li className='flex items-center gap-2'>
              <p>Homemade Pastries</p>
            </li>
            <li className='flex items-center gap-2'>
              <p>Vegan & Gluten-Free Options</p>
            </li>
          </ul>
        </div>
        <div className='masked-container'>
            <h2 className='will-fade'>Taste Worthy Items</h2>
            <div id='masked-content'>
              <h3>Made with Craft,Designed with Passion</h3>
              <p>The aroma of India in every cup and on every plate</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery