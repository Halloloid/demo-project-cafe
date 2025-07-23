'use client';
import React, { useRef, useState } from 'react'
import { sliderLists } from '..'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
    const contentRef = useRef()
    const [currentIndex,setCurrentIndex] = useState(0);

    useGSAP(()=>{
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1})
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{
            xPercent:0,
            opacity:1,
            duration:1,
            ease:'power1.inOut'
        })
        gsap.fromTo('.details h2',{yPercent:100,opacity:0},{
            yPercent:0,opacity:100,ease:'power1.inOut'
        })
        gsap.fromTo('.details p',{yPercent:100,opacity:0},{
            yPercent:0,opacity:100,ease:'power1.inOut'
        })
    },[currentIndex])

    const total = sliderLists.length;

    const gotoSlide = (index) =>{
        const newIndex = (index+total) % total;

        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex+indexOffset+total) % total]
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <h2 id='menu-heading' className='sr-only'>Menu:</h2>
        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail,index)=>{
                const isActive = index == currentIndex

                return(
                    <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                    onClick={()=>gotoSlide(index)}
                    >
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>

        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={()=>gotoSlide(currentIndex -1)}>
                    <span>{prevCocktail.name}</span>
                    <img src='/images/right-arrow.png' aria-hidden='true'/>
                </button>
                <button className='text-right' onClick={()=>gotoSlide(currentIndex +1)}>
                    <span>{nextCocktail.name}</span>
                    <img src='/images/left-arrow.png' aria-hidden='true'/>
                </button>
            </div>
            <div className='cocktail'>
                <img src={currentCocktail.image} className='object-contain' />
            </div>
            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p>Recipe for :</p>
                    <p id = 'title'>{currentCocktail.name}</p>
                </div>
                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu