import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef()

    //const isMobile = useMediaQuery({maxWidth:767})

    useGSAP(()=>{
        document.fonts.ready.then(()=>{
        const heroSplit = new SplitText('.title',{type:'chars,words'});
        const paragraph = new SplitText('.subtitle',{type:'lines'})
        const parag2= new SplitText('.subtitle2',{type:'lines'})

        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))
        //paragraph.words.forEach((char)=>char.classList.add('text-gradient2'))

        gsap.from(heroSplit.chars,{
            delay:0.4,
            yPercent:-100,
            duration:1.8,
            ease:'bounce.out',
            stagger:0.06
        })

        gsap.from(paragraph.lines,{
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease:'expo.out',
            delay:2,
            stagger:0.06
        })

        gsap.from(parag2.lines,{
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease:'expo.out',
            delay:2,
            stagger:0.06
        })

        

        //const startValue = isMobile?'top 50%':'centre 60%';
        //const endValue = isMobile?'120% top':'bottom top';

        videoRef.current.onloadedmetadata = () =>{
            gsap.to(videoRef.current,{
                currentTime: videoRef.current.duration,
                scrollTrigger:{
                trigger:'video',
                scrub:true,
                pin:true
                }
            })
        }
    })
    },[])



  return (
    <>
    <section id="hero">
        <h1 className='title'>OD07</h1>

        <div className='body'>
            <div className='content mt-8'>
                <div className='space-y-5'>
                    <p className='subtitle'>Sip the Spirt<br/>of Summer</p>
                </div>
                <div className='space-y-20'>
                    <p className='subtitle2 text-center'>This is Our Awesome<br/>Coffee Shop</p>
                </div>
                <h1 className='arrow'>↓</h1>
            </div>
        </div>
    </section>
    <div className='video absolute inset-0'>
        <video ref={videoRef} src='/video/output.mp4' preload='auto' muted playsInline autoPlay style={{width:'100%', height:'100%',objectFit:'cover',opacity:0.8}}/>
    </div>
    </>
  )
}
 
export default Hero