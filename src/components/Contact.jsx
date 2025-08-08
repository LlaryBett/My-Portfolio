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
    <section 
      id="contact" 
      className="
        scroll-mt-[70px]  // Added scroll margin to account for fixed navbar
        py-20 lg:py-28    // Increased top padding to match About page
        bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
        relative overflow-hidden
      "
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">  {/* Matched About page padding */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}  // Matched About page margin
        >
          {/* Section Header - Adjusted spacing to match About page */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-full text-green-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            >
              <FaEnvelope className="mr-2" size={16} />
              Contact Me
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I&apos;m here to discuss your projects, ideas, or opportunities. Let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-start mb-16">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Location */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-green-400" size={16} />
                  Location
                </h4>
                <p className="text-gray-300 text-base">
                  street, city, province, country
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-green-400/10 to-purple-500/10 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaPhone className="mr-2 text-green-400" size={16} />
                  Phone
                </h4>
                <p className="text-gray-300 text-base">
                  +9828839922
                </p>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-400/10 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <FaEnvelope className="mr-2 text-green-400" size={16} />
                  Email
                </h4>
                <p className="text-gray-300 text-base">
                  <a href="mailto:youremail@example.com" className="hover:underline text-green-400">
                    youremail@example.com
                  </a>
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <motion.form className="space-y-4">
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-green-400 text-base"
                      placeholder="Enter Your Name"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-green-400 text-base"
                      placeholder="Enter Your Email"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-green-400 text-base"
                      placeholder="Enter Your Message"
                    />
                  </motion.div>
                  <motion.button 
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full px-8 py-3 rounded-full text-base font-medium mt-4"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact