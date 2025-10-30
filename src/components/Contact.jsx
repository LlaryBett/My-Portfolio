import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import  { useState } from 'react'
// 

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
      transition: { duration: 0.5 }
    }
  }

  const formItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await fetch('https://my-portfolio-h0n8.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setFeedback({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: 'Failed to send message.' });
    }
    setLoading(false);
  };

  return (
    <section 
      id="contact" 
      className="
        min-h-screen flex items-center relative overflow-hidden
        px-4 sm:px-6 lg:px-10
        scroll-mt-[70px]
        py-16 lg:py-24
      "
    >
      {/* Background gradient - matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10" />
      </div>

      {/* Animated background blobs - matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-xl"
            style={{
              width: Math.random() * 300 + 150,
              height: Math.random() * 300 + 150,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header - matching Hero typography */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full text-gray-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              whileHover={{ scale: 1.05, borderColor: "rgba(156, 163, 175, 0.8)" }}
            >
              <FaEnvelope className="mr-2" size={14} />
              Contact Me
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
              I&apos;m here to discuss your projects, ideas, or opportunities. Let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              {/* Location */}
              <motion.div 
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-medium text-white mb-2 sm:mb-3 flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-blue-400" size={16} />
                  Location
                </h4>
                <p className="text-sm sm:text-base text-gray-400">
                  Kutus,Kirinyaga County,Kenya <br />P.O. Box: 143-10300 Kerugoya
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-medium text-white mb-2 sm:mb-3 flex items-center">
                  <FaPhone className="mr-2 text-blue-400" size={16} />
                  Phone
                </h4>
                <p className="text-sm sm:text-base text-gray-400">
                  <a
                    href="tel:+254716360768"
                    className="hover:text-white transition-colors duration-300 text-blue-400"
                  >
                    +254716360768
                  </a>
                </p>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-base sm:text-lg lg:text-xl font-medium text-white mb-2 sm:mb-3 flex items-center">
                  <FaEnvelope className="mr-2 text-blue-400" size={16} />
                  Email
                </h4>
                <p className="text-sm sm:text-base text-gray-400">
                  <a 
                    href="mailto:youremail@example.com" 
                    className="hover:text-white transition-colors duration-300 text-blue-400"
                  >
                    bettllary672@gmmail.com
                  </a>
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 sm:p-8">
                {/* Feedback message */}
                {feedback && (
                  <div
                    className={`mb-4 text-center rounded-lg px-4 py-2 font-medium ${
                      feedback.type === 'success'
                        ? 'bg-emerald-600/20 text-emerald-400'
                        : 'bg-red-600/20 text-red-400'
                    }`}
                  >
                    {feedback.message}
                  </div>
                )}
                <motion.form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base font-medium">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white text-sm sm:text-base placeholder-gray-400 transition-colors duration-300"
                      placeholder="Enter Your Name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base font-medium">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white text-sm sm:text-base placeholder-gray-400 transition-colors duration-300"
                      placeholder="Enter Your Email"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-2 text-white text-sm sm:text-base font-medium">
                      Message
                    </label>
                    <textarea 
                      rows="4"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white text-sm sm:text-base placeholder-gray-400 transition-colors duration-300 resize-none"
                      placeholder="Enter Your Message"
                      required
                    />
                  </motion.div>
                  
                  <motion.button 
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white w-full rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
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
