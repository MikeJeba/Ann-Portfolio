import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { SiLeetcode,SiGeeksforgeeks} from "react-icons/si";

const Contact = () => {
  return (
    <div className='pb-20'>
        <motion.h2
           whileInView={{ opacity: 1, y: 0}}
           initial={{ opacity: 0, y: -100}}
           transition={{ duration: 0.5 }}
           className='my-10 text-center text-4xl text-gray-800'>Get in Touch
           </motion.h2>
           <div className='text-center tracking-tighter'>
            
            <motion.p
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 1 }}
                className='my-4 text-gray-700'>
                {CONTACT.email}
            </motion.p>
            
        </div>
        <motion.div             
                       whileInView={{ opacity: 1, y: 0}}
                       initial={{ opacity: 0, y: 100}}
                       transition={{ duration: 1 }}
                       
                        className='m-8 mt-12 flex items-center justify-center gap-4 text-2xl text-gray-700'>
            <a href="https://www.linkedin.com/in/annjeba/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='rounded-full p-3 bg-white hover:bg-blue-500 hover:text-white'>
           <FaLinkedin /> 
            </a>
            <a href="https://github.com/MikeJeba" target='_blank' rel='noopener noreferrer' aria-label='GitHub 'className='rounded-full p-3 bg-white hover:bg-black'>
           <FaGithub /> 
            </a>
            <a href="https://leetcode.com/u/Mikejeba/" target='_blank' rel='noopener noreferrer' aria-label='Email' type='mail'
            className='rounded-full p-3 bg-white hover:bg-yellow-500 '>
              <SiLeetcode /> 
            </a>
            <a href="https://www.geeksforgeeks.org/user/jebajovnkc/" target='_blank' rel='noopener noreferrer' aria-label='Email' type='mail'
            className='rounded-full p-3 bg-white hover:bg-green-500 hover:text-white'>
              <SiGeeksforgeeks /> 
            </a>
        </motion.div>
        
    </div>
  )
}

export default Contact