import React from 'react'
import { openingHours, socials } from '..'

const Contact = () => {
  return (
    <div id='contact' >
        <div className='content'>
            <h2>Where to Find Us</h2>
            <div>
                <h3>Visit Our Cafe</h3>
                <p>................</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>.............</p>
                <p>..............</p>
            </div>
            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time)=>(
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social)=>(
                        <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name} className='flex-center'>
                            <img src={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className='drink-img'>
            <img src='/images/chc.png' />
        </div>
        <div className='absolute bottom-0 left-0 lg:w-96 w-1/3 pointer-events-none'>
        <img src='/images/imglast.png' />
        </div>
    </div>
  )
}

export default Contact