import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services/>
    </>
  )
}

export default App