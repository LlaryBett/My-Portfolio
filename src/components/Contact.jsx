import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaCode } from 'react-icons/fa'
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

  // Get API URL based on environment
  const API_URL = import.meta.env.DEV 
    ? 'http://localhost:5000/api/contact'
    : 'https://my-portfolio-h0n8.onrender.com/api/contact';

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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const data = await res.json();
      
      if (res.ok) {
        setFeedback({ type: 'success', message: data.message });
        setForm({ name: '', email: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setFeedback({ type: 'error', message: 'Request timed out. Please try again.' });
      } else {
        setFeedback({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16 scroll-mt-[70px]">
      {/* Background - Matching Hero's square grid setup */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />
      
      {/* Animated grid pattern - Same as Hero */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating code elements - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              delay: i * 3
            }}
          >
            <FaCode size={16} />
          </motion.div>
        ))}
      </div>

      {/* Subtle animated blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl opacity-15 z-0"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-emerald-400 text-sm font-medium mb-6 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                   linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              <FaEnvelope className="mr-2 relative z-10" size={16} />
              <span className="relative z-10">Contact Me</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s{' '}
              <span className="text-white">
                Connect
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I&apos;m here to discuss your projects, ideas, or opportunities. Let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              {/* Location */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                    <FaMapMarkedAlt className="mr-3 text-emerald-400" size={20} />
                    Location
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Kutus, Kirinyaga County, Kenya <br />
                    P.O. Box: 143-10300 Kerugoya
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                    <FaPhone className="mr-3 text-emerald-400" size={20} />
                    Phone
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300">
                    <a
                      href="tel:+254716360768"
                      className="hover:text-white transition-colors duration-300 text-emerald-400 font-medium"
                    >
                      +254716360768
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                    <FaEnvelope className="mr-3 text-emerald-400" size={20} />
                    Email
                  </h4>
                  <p className="text-base sm:text-lg text-gray-300">
                    <a 
                      href="mailto:bettllary672@gmail.com" 
                      className="hover:text-white transition-colors duration-300 text-emerald-400 font-medium"
                    >
                      bettllary672@gmail.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                {/* Feedback message */}
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 text-center rounded-xl px-4 py-3 font-medium relative z-10 ${
                      feedback.type === 'success'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {feedback.message}
                  </motion.div>
                )}
                
                <motion.form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-3 text-white text-lg font-semibold">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-white text-base placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter Your Name"
                      required
                    />
                  </motion.div>

                  {/* animation */}
                  
                  <motion.div variants={formItemVariants}>
                    <label className="block mb-3 text-white text-lg font-semibold">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-white text-base placeholder-gray-400 transition-all duration-300"
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
                      className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 text-white text-base placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Enter Your Message"
                      required
                    />
                  </motion.div>
                  
                  <motion.button 
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                  >
                    {/* Button grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                         linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    
                    {loading ? (
                      <span className="flex items-center justify-center relative z-10">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="relative z-10">Send Message</span>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Note */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 relative overflow-hidden">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                   linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '25px 25px'
                }} />
              </div>
              
              <div className="relative z-10 text-gray-300">
                <p className="text-sm sm:text-base">
                  I typically respond within 24 hours. For urgent matters, feel free to call or WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;