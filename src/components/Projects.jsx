import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl text-gray-800'>
        Projects
      </motion.h2>
      
      <div className='grid grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='flex flex-col p-4 border border-gray-900 rounded-lg'>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}>
              <h3 className='mb-12 font-semibold text-lg text-center text-gray-900'>
                <span className='text-lg text-white'>{project.title}</span>
              </h3>
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              >
                <img src={project.image} className='mb-12'/>
              </motion.div>
              <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}>
              <ul className='list-disc pl-5'>
                <li className='mb-4 text-gray-800'>{project.description}</li>
                </ul>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}>
                  <ul className='list-disc pl-5'>
                <li className='mb-4 text-gray-800'>{project.point2}</li>
              
              </ul>
              </motion.div>
          
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
               className='flex flex-wrap mb-2 justify-center'>
                {project.technologies.map((tech, index) => (
                  <span
                    className='mr-2 mb-2 rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-300'
                    key={index}>
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='flex space-x-2 justify-center'>
                {project.live && (
                  <a
                    href={project.live}
                    className='rounded bg-gray-900 p-2 text-sm font-medium text-gray-300'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className='rounded bg-gray-900 p-2 text-sm font-medium text-gray-300'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Code
                  </a>
                )}
              </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
