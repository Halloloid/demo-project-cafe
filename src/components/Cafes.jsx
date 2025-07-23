import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cafes = () => {
    useGSAP(()=>{

        gsap.from('.list',{
            yPercent:'100%',
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:'#cafes',
                start:'top 60%',
                end:'bottom bottom',
                scrub:true
            }
        })
    })
  return (
    <>
    <section id='cafes'>
        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Items:</h2>
                <ul>
                    <li>
                        <div className='me-28'>
                            <h3>First Item</h3>
                            {/* <p>Details of First Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Second Item</h3>
                            {/* <p>Details of Second Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Third Item</h3>
                            {/* <p>Details of Third Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Fourth Item</h3>
                            {/* <p>Details of Fourth Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                </ul>
            </div>
            <div className='loved'>
                <h2>Most loved Items:</h2>
                <ul>
                    <li>
                        <div className='me-28'>
                            <h3>First Item</h3>
                            {/* <p>Details of First Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Second Item</h3>
                            {/* <p>Details of Second Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Third Item</h3>
                            {/* <p>Details of Third Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                    <li>
                        <div className='me-28'>
                            <h3>Fourth Item</h3>
                            {/* <p>Details of Fourth Item</p> */}
                        </div>
                        <span>-₹40</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cafes