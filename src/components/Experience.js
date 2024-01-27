import React from 'react'
import b from '../assets/hero.dote.png'
const Experience = () => {
  return (
    <div className='experience section-center' id='experience'>
      <div className='experience-container'>
        <div>
          <span>01</span>
          <h3>Years of Experience</h3>
        </div>
        <div>
          <span>09</span>
          <h3>Projects Completed</h3>
        </div>
        <div>
          <span>250</span>
          <h3>Review Given</h3>
        </div>
      </div>
      <div className='container-two-experience'>
        <article className='experience-content'>
          <h5>WHAT I OFFER</h5>
          <h3>Generate More Traffic To Your Business</h3>
          <div className='hero-get-in-touch'>
            <img src={b} alt='' />
            <span>CONTACT ME</span>
          </div>
        </article>
        <article className=' experience-content-two'>
          <div>
            <span>01</span>
            <div className='hr'></div>
            <h3>UI/UX Experience</h3>
            <p>
              We crush industry standards when it comes to elevating client
              experiences when engaging your digital assets.
            </p>
          </div>
          <div>
            <span>02</span>
            <div className='hr'></div>
            <h3>Design Prototype</h3>
            <p>
              Design digital user products with cutting-edge ideas,
              incorporating the latest trends for a modern and engaging
              experience.
            </p>
          </div>
          <div>
            <span>03</span>
            <div className='hr'></div>
            <h3>Visual Design</h3>
            <p>
              Create modern and unique user interface designs with innovative
              ideas, transforming concepts into visually compelling experiences.
            </p>
          </div>
          <div>
            <span>04</span>
            <div className='hr'></div>
            <h3>UX Research</h3>
            <p>
              Craft contemporary user products infused with fresh and innovative
              ideas. Bring modern concepts to life in your digital creations.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Experience
