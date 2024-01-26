import React from 'react'
import a from "../assets/about-img.png"
const About = () => {
  return (
    <div className='about section-center' id='about'>
      <div className='container-about'>
        <article className='about-content'>
          <div className='title-about'>
            <h2>About Me</h2>
            <h3>Passionate UI/UX designer, crafting seamless experiences.</h3>
            <div className='line-under'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='13'
                viewBox='0 0 12 13'
                fill='none'
              >
                <rect
                  y='7.17188'
                  width='2'
                  height='12'
                  transform='rotate(-90 0 7.17188)'
                  fill='#FF5900'
                />
              </svg>
              <h3>High Standards</h3>
            </div>
            <p>
              With a cumulative 1+ years of expertise in harnessing technology
              for digital innovation, I, as a UI/UX designer, am poised to
              propel your brand beyond growth benchmarks. By leveraging my
              skills, I provide a competitive edge, having navigated diverse
              industries, ensuring your brand's success in the face of any
              challenges.
            </p>
            <div className='question-about'>
              <div>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='13'
                    viewBox='0 0 12 13'
                    fill='none'
                  >
                    <rect
                      x='7'
                      y='0.171875'
                      width='12'
                      height='2'
                      transform='rotate(90 7 0.171875)'
                      fill='#FF5900'
                    />
                    <rect
                      x='12'
                      y='5.17188'
                      width='2'
                      height='12'
                      transform='rotate(90 12 5.17188)'
                      fill='#FF5900'
                    />
                  </svg>
                </span>
                <h3>Wholistic Approach</h3>
              </div>
              <div>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='13'
                    viewBox='0 0 12 13'
                    fill='none'
                  >
                    <rect
                      x='7'
                      y='0.171875'
                      width='12'
                      height='2'
                      transform='rotate(90 7 0.171875)'
                      fill='#FF5900'
                    />
                    <rect
                      x='12'
                      y='5.17188'
                      width='2'
                      height='12'
                      transform='rotate(90 12 5.17188)'
                      fill='#FF5900'
                    />
                  </svg>
                </span>
                <h3>Different Thinking</h3>
              </div>
              <div>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='13'
                    viewBox='0 0 12 13'
                    fill='none'
                  >
                    <rect
                      x='7'
                      y='0.171875'
                      width='12'
                      height='2'
                      transform='rotate(90 7 0.171875)'
                      fill='#FF5900'
                    />
                    <rect
                      x='12'
                      y='5.17188'
                      width='2'
                      height='12'
                      transform='rotate(90 12 5.17188)'
                      fill='#FF5900'
                    />
                  </svg>
                </span>
                <h3>Exceptional Design</h3>
              </div>
            </div>
          </div>
        </article>
        <article className='about-img-container'>
          <div className='bg'></div>
          <img src={a} alt='' className='about-img' />
        </article>
      </div>
    </div>
  )
}

export default About
