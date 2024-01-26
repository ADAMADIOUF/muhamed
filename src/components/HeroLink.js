import React from 'react'
import {Link} from "react-router-dom"
const HerLink = () => {
  return (
    <div className='hero-link'>
      <article className='hero-link-content'>
        <Link to={`/`}>
          <span>FACEBOOK</span>
        </Link>
        <Link to={`/`}>
          <span>LINKED IN</span>
        </Link>

        <Link to={`/`}>
          <span>INSTAGRAM</span>
        </Link>
      </article>
    </div>
  )
}

export default HerLink
