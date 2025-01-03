import React from 'react'
import logo from "../assets/a.png"
import {FaLinkedin, FaGithub,FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
               <img src={logo} className='mx-2' width={100} height={100} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/annjeba/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
           <FaLinkedin /> 
            </a>
            <a href="https://github.com/MikeJeba" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
           <FaGithub /> 
            </a>
            <a href="mailto:jebajovitha@gmail.com" target='_blank' rel='noopener noreferrer' aria-label='Email' type='mail'>
           <FaEnvelope /> 
            </a>
        </div>
    </nav>
  )
}

export default Navbar