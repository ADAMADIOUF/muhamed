import React from 'react'
import a from "../assets/w1.png"
import b from '../assets/w2.png'
import c from '../assets/w3.png'
import d from '../assets/w4.png'
import e from '../assets/w5.png'
import f from '../assets/w6.png'
import g from '../assets/w7.png'
import h from '../assets/w8.png'
import i from '../assets/w9.png'






const Works = () => {
  return (
    <div className='work section-center' id='works'>
      <div className='title-works'>
        <span>PORTFOLIO</span>
        <h2>CHECK OUT MY APP AND WEB DESIGN PROJECTS</h2>
      </div>
      <h3>AUTOMOTIVE</h3>
      <div className='container-works'>
        <article>
          <img src={a} alt='' />
        </article>
        <article>
          <img src={b} alt='' />
        </article>
        <article>
          <img src={c} alt='' />
        </article>
      </div>
      <h3>RESTAURANT</h3>
      <div className='container-works'>
        <article>
          <img src={d} alt='' />
        </article>
        <article>
          <img src={e} alt='' />
        </article>
        <article>
          <img src={f} alt='' />
        </article>
      </div>
      <h3>MEDICAL</h3>
      <div className='container-works'>
        <article>
          <img src={g} alt='' />
        </article>
        <article>
          <img src={h} alt='' />
        </article>
        <article>
          <img src={i} alt='' />
        </article>
      </div>
    </div>
  )
}

export default Works
