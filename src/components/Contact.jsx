import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const formItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.div 
      className="bg-black text-white py-20" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="flex-1"
            variants={containerVariants}
          >
            <motion.h3 
              className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-green-400 to-blue-500 mb-4'
              variants={itemVariants}
            >
              Let&apos;s Talk
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
            >
              I&apos;m open to discussing web development projects or partnership opportunities.
            </motion.p>
            
            <motion.div 
              className='mb-4 mt-8'
              variants={itemVariants}
            >
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a 
                href="mailto:youremail@example.com" 
                className='hover:underline'
              >
                youremail@example.com
              </a>
            </motion.div>
            
            <motion.div 
              className='mb-4'
              variants={itemVariants}
            >
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+9828839922</span>
            </motion.div>
            
            <motion.div 
              className='mb-4'
              variants={itemVariants}
            >
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>street, city, province, country</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className='flex-1 w-full'
            variants={containerVariants}
          >
            <motion.form 
              className='space-y-4'
              variants={containerVariants}
            >
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <motion.input 
                  type="text" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Name'
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.5)"
                  }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <motion.input 
                  type="email" 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  placeholder='Enter Your Email'
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.5)"
                  }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <motion.textarea 
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                  focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 2px rgba(74, 222, 128, 0.5)"
                  }}
                />
              </motion.div>
              
              <motion.button 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 px-8 py-2 rounded-full'
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact