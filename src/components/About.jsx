import { useGSAP } from '@gsap/react'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

const About = () => {
  useGSAP(()=>{
    document.fonts.ready.then(()=>{
    const parasplit = new SplitText('.para',{type:'lines'})
    const headsplit = new SplitText('.head',{type:'words'})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#about',
        start:'top 70%',
        end:'bottom bottom'
      }
    })
    tl.from(headsplit.words,{
      x:-100,
      opacity:0,
      ease:'elastic.out',
      duration:1,
      stagger:0.08,
    })


    tl.from(parasplit.lines,{
      y:150,
      scale:0,
      opacity:0,
      stagger:0.08,
      ease:'power1.out',
      duration:1,
    },'-=0.5')
  }) 
    
  })
  return (
    <div id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Foods</p>
            <h2 className='head'>Where every detail matters<span className='text-white'>-</span>from muddel to garnish</h2>
          </div>
          <div className='sub-content'>
            <p className='para'> Welcome to our cafe, where passion meets flavor in every cup and plate. We believe in crafting memorable experiences, from the aroma of freshly brewed coffee to the artistry of our gourmet dishes. Our team is dedicatedto using the finest ingredients, ensuring every detail—from muddle to garnish—is perfect. Whether you’re here for a quick pick-me-up or a leisurely meal, we invite you to relax and enjoy the spirit of our community.Discover your new favorite spot with us!</p>
            <div>
              <p><span>4.5</span>/5</p>
              <p className='text-sm text-white-100'>More than +000 Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='top-grid'>
        <div className='md:col-span-3'>
          <img src='/images/img1.webp'/>
        </div>
        <div className='md:col-span-6'>
          <img src='/images/img2.webp' />
        </div>
        <div className='md:col-span-3'>
          <img src='/images/img5.webp' />
        </div>
      </div>
      <div className='bottom-grid'>
        <div className='md:col-span-8'>
          <img src='/images/img3.webp' />
        </div>
        <div className='md:col-span-4'>
          <img src='/images/img4.webp' />
        </div>
      </div>
    </div>
  )
}

export default About