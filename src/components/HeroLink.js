import React from 'react'
import {Link} from "react-router-dom"
const HerLink = () => {
  return (
    <div className='hero-link'>
      <article className='hero-link-content'>
        <span>
          <a
            href='https://twitter.com/abdulsalam43142/'
            target='_blank'
            rel='noopener noreferrer'
          >
            FATWITTER{' '}
          </a>
        </span>

        <span>
          <a
            href='https://www.linkedin.com/in/muhammed-abdulsalam-a925142a8'
            target='_blank'
            rel='noopener noreferrer'
          >
            LINKED IN
          </a>
        </span>

        <span>
          <a
            href='https://www.behance.net/gallery/181344613/Fashion-E-commerce-Website'
            target='_blank'
            rel='noopener noreferrer'
          >
            FABEHAACE
          </a>
        </span>
      </article>
    </div>
  )
}

export default HerLink
