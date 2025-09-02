import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='bg-black text-white px-6 sm:px-8 md:px-16 lg:px-24 fixed w-full z-50'>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>A.Gnana Prakasam</div>

        {/* Desktop Links Centered */}
        <div className='hidden md:flex flex-1 justify-center space-x-6'>
          <a href="#" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#skills" className='hover:text-gray-400'>Skills</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Me Button (Desktop Only) */}
        <div className='hidden md:block'>
          <a href="#contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform'>
              Connect Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Centered */}
      {isOpen && (
        <div className='md:hidden bg-black text-white px-6 py-8 flex flex-col items-center space-y-6'>
          <a href="#" onClick={toggleMenu} className='hover:text-gray-400'>Home</a>
          <a href="#about" onClick={toggleMenu} className='hover:text-gray-400'>About Me</a>
          <a href="#skills" onClick={toggleMenu} className='hover:text-gray-400'>Skills</a>
          <a href="#project" onClick={toggleMenu} className='hover:text-gray-400'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='hover:text-gray-400'>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
