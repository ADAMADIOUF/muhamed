import React,{useState} from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
      <div className='contact-container'>
        <article className='contact-form'>
          <h3>Drop Me a Line</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className='input'
              />
            </div>
            <div>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className='input'
              />
            </div>
            <div>
              <label htmlFor=''>Phone</label>
              <input
                placeholder='phoneNumber'
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
