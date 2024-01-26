import React from 'react'
import a from "../assets/Vector.png"
import b from '../assets/hero.dote.png'
import HeroLink from './HeroLink'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <HeroLink />
      <div>
        <div className='hero section-center'>
          <h2>EXPERIENCE</h2>
          <h3>
            {' '}
            <span className='hero-img'>
              <img src={a} alt='' />
            </span>
            UI/UX PRODUCT
          </h3>
          <h2>DESIGNER</h2>
        </div>
        <div className='hero-container nav-center'>
          <article className='hero-content'>
            <p>
              I think outside the box when it comes to providing the best, most
              cost effective path to grow your business. Watch your ideas come
              alive with our collaborative approach.
            </p>
          </article>
          <article className='hero-get-in-touch'>
            <img src={b} alt='' />
            <span>GET IN TOUCH WITH ME</span>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Hero
