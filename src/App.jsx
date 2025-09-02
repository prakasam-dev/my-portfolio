import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App