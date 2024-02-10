import React from 'react'
import { Link } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../slices/toggleSlice'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/logo1.png'

const Navbar = () => {
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen)
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }

  const handleItemClick = () => {
    dispatch(toggleMenu(false))
  }

  const navbarHeight = 80

  return (
    <nav>
      <div className='logo'>
        <Link to='home' smooth={true} duration={500}>
          <img src={logo} alt='Logo' />
        </Link>
        <Link to='home' smooth={true} duration={500}>
          <h3>portfolio</h3>
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className='nav-links'>
          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span> Home
            </Link>
          </li>
          <li>
            <Link
              to='services'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span> Services
            </Link>
          </li>
          <li>
            <Link
              to='works'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span> Works
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span>About
            </Link>
          </li>
          <li>
            <Link
              to='experience'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span>Experience
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              onClick={handleItemClick}
            >
              <span className='nav-dots'></span> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='cv'>
        <a
          href='/file:///Users/adamadiouf/Downloads/Black%20and%20White%20Minimalist%20Photographer%20Resume.pdf'
          download
        >
          <h3>Download CV</h3>
        </a>
      </div>
      <div className='hamburger' onClick={handleToggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default Navbar
