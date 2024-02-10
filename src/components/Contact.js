import React,{useState} from 'react'
import {
  FaLinkedin,
  FaBehance,
  FaTwitter,
  FaWhatsappSquare,
} from 'react-icons/fa'
const Contact = () => {
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phoneNumber: '',
   })
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [message, setMessage] = useState('')

   const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)

     try {
       const response = await fetch('/.netlify/functions/email', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       })

       if (response.ok) {
         setMessage('Message sent successfully!')
         setFormData({
           name: '',
           email: '',
           phoneNumber: '',
         })
         setTimeout(() => setMessage(''), 3000)
       } else {
         const errorData = await response.json()
         setMessage(`Failed to send message. ${errorData.message || ''}`)
         setTimeout(() => setMessage(''), 3000)
       }
     } catch (error) {
       setMessage('An error occurred. Please try again.')
       setTimeout(() => setMessage(''), 3000)
     }

     setIsSubmitting(false)
   }
  return (
    <div className='contact section-center' id='contact'>
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
        <h3>MY contact</h3>
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
      <div className='contact-container'>
        <article className='contact-form'>
          <h3>Drop Me a Line</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div>
              <label htmlFor=''>Name*</label>
              <input
                type='text'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className='input'
              />
            </div>
            <div>
              <label htmlFor=''>Email*</label>
              <input
                type='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className='input'
              />
            </div>
            <div>
              <label htmlFor=''>Phone*</label>
              <input
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
                className='input'
              />
            </div>
            <button className='btn ' type='submit' disabled={isSubmitting}>
              Get in Touch
            </button>
          </form>
          {message && <p>{message}</p>}
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
          <h6>abdulsalammuhammed093@gmail.com</h6>
          <div className='contact-links'>
            <span>
              <a
                href='https://www.linkedin.com/in/muhammed-abdulsalam-a925142a8'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='linkedin' />
              </a>
            </span>
            <span>
              <a
                href='https://www.behance.net/gallery/181344613/Fashion-E-commerce-Website'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <FaBehance className='behance' />
              </a>
            </span>
            <span>
              <a
                href='https://twitter.com/abdulsalam43142/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter className='twitter' />
              </a>
            </span>
            <span>
              <a
                href='https://wa.link/xmk2ms'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsappSquare className='whatsapp' />
              </a>
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Contact
