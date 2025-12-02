import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

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
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok) {
        setFeedback({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setFeedback({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-10 py-16 lg:py-24">
      {/* Updated to Option 2 - Code-inspired Grid Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Animated background blobs - matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/15 to-emerald-400/15 blur-xl"
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
          {/* Section Header - Updated typography */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div 
              className="inline-flex items-center px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-blue-400 text-base font-medium mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="mr-2" size={16} />
              Contact Me
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 px-4">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              I&apos;m here to discuss your projects, ideas, or opportunities. Let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Location */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                  <FaMapMarkedAlt className="mr-3 text-blue-400" size={20} />
                  Location
                </h4>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Kutus, Kirinyaga County, Kenya <br />
                  P.O. Box: 143-10300 Kerugoya
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                  <FaPhone className="mr-3 text-blue-400" size={20} />
                  Phone
                </h4>
                <p className="text-base sm:text-lg text-gray-300">
                  <a
                    href="tel:+254716360768"
                    className="hover:text-white transition-colors duration-300 text-blue-400 font-medium"
                  >
                    +254716360768
                  </a>
                </p>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                  <FaEnvelope className="mr-3 text-blue-400" size={20} />
                  Email
                </h4>
                <p className="text-base sm:text-lg text-gray-300">
                  <a 
                    href="mailto:bettllary672@gmail.com" 
                    className="hover:text-white transition-colors duration-300 text-blue-400 font-medium"
                  >
                    bettllary672@gmail.com
                  </a>
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                {/* Feedback message */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 text-center rounded-xl px-4 py-3 font-medium ${
                      feedback.type === 'success'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {feedback.message}
                  </motion.div>
                )}
                <motion.form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-3 text-white text-lg font-semibold">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white text-base placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter Your Name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-3 text-white text-lg font-semibold">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white text-base placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter Your Email"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-3 text-white text-lg font-semibold">
                      Message
                    </label>
                    <textarea 
                      rows="5"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white text-base placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Enter Your Message"
                      required
                    />
                  </motion.div>
                  
                  <motion.button 
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
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