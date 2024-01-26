import React from 'react'
import a from "../assets/services1.png"
const Services = () => {
  return (
    <div className='services section-center' id='services'>
      <div className='services-title'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='94'
            height='95'
            viewBox='0 0 94 95'
            fill='none'
          >
            <path
              d='M16.361 94.3175L0.456478 78.1722L51.163 26.6976L54.678 23.1293L49.6691 23.1291L8.24922 23.1305L8.25001 0.26561L93.0755 0.262969L93.0726 86.4375L70.6118 86.4378L70.6132 44.3596L70.6133 39.2425L67.0224 42.888L16.361 94.3175Z'
              fill='#FF5900'
            />
          </svg>
        </span>
        <h3>MY SERVICES</h3>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='93'
            height='95'
            viewBox='0 0 93 95'
            fill='none'
          >
            <path
              d='M16.2438 94.3175L0.339301 78.1722L51.0458 26.6976L54.5608 23.1293L49.552 23.1291L8.13204 23.1305L8.13283 0.265605L92.9583 0.262969L92.9554 86.4375L70.4946 86.4378L70.496 44.3596L70.4962 39.2425L66.9053 42.888L16.2438 94.3175Z'
              fill='#FF5900'
            />
          </svg>
        </span>
      </div>
      <div className='services-container'>
        <div>
          <img src={a} alt='' />
          <div className='services-content'>
            <span>MY BUILD DESIGN</span>
            <h3>WEB DESIGN / MOBILE APPS</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
