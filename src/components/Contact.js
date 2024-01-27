import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact section-center' id='contact'>
      <div className='contact-container'>
        <article className='contact-form'>
          <h3>Drop Me a Line</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className='contact-form'>
            <div>
              <label htmlFor=''>Name</label>
              <input type='text' className='input' />
            </div>
            <div>
              <label htmlFor=''>Email</label>
              <input type='text' className='input' />
            </div>
            <div>
              <label htmlFor=''>Phone</label>
              <input type='text' className='input' />
            </div>
            <button className='btn '>Get in Touch</button>
          </form>
        </article>
        <article className='contact-content'>
          <span>REACH OUT TODAY</span>
          <h2>Contact me to get the process started!</h2>
          <p>
            I'll be in touch soon to discuss your project in detail and explore
            collaboration opportunities. Looking forward to connecting with you
            shortly.
          </p>
          <h6>No, 6 Olohunshogo, street Gaa Akanbi, Ilorin.</h6>
          <h6>+234 9013139157</h6>
          <h6>abdulsalammuhammed093</h6>
          <div className='contact-links'>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Contact
