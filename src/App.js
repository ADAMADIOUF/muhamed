import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Works from './components/Works'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />

      <Services />
      <Experience />
      <Works/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App