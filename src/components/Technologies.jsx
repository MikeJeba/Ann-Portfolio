import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiFirebase, SiC, SiGithub, SiMysql, SiAndroidstudio, SiEclipseide, SiIntellijidea} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div class='technologies' className='pb-24'>
        <motion.h2
           whileInView={{ opacity: 1, y: 0}}
           initial={{ opacity: 0, y: -100}}
           transition={{ duration: 1.5 }}
         className='my-20 text-center text-4xl text-gray-800'>Technologies
         </motion.h2>
        <motion.div 
           whileInView={{ opacity: 1, y: 0}}
           initial={{ opacity: 0, y: -100}}
           transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(3)} 
             className="p-4">
                <FaJava className="text-7xl text-red-900" />
            </motion.div>
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(2.5)}
               className="p-4">
                <RiReactjsLine className='text-7xl text-cyan-600' />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                <SiHtml5 className="text-7xl text-orange-900" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)} 
                className="p-4">
                <SiCss3 className="text-7xl text-blue-900" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <SiJavascript className="text-7xl text-yellow-600" />
            </motion.div>
        
            <motion.div
               initial="initial"
               animate="animate"
               variants={iconVariants(6)} 
            className="p-4">
                <SiC className="text-7xl text-blue-600" />
            </motion.div>
           
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiGithub className="text-7xl" />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiFirebase className="text-7xl text-orange-500 " />
            </motion.div>
        
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiMysql className="text-7xl text-blue-600 " />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiAndroidstudio className="text-7xl text-green-500 " />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiEclipseide className="text-7xl text-purple-600 " />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} 
                className="p-4">
                <SiIntellijidea className="text-7xl text-black" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies;
