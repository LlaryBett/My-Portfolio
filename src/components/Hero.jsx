import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react'; // Using Phone as WhatsApp icon
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="home"
      className="
        min-h-screen flex items-center relative overflow-hidden 
        px-4 sm:px-6 lg:px-10
        scroll-mt-[70px]
        pt-[80px] sm:pt-[70px]
      "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10" />
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
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

      {/* Content grid */}
      <motion.div
        className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT - Text */}
        <div className="text-center md:text-left space-y-4 sm:space-y-6">
          <motion.h2 variants={itemVariants} className="text-base sm:text-lg lg:text-xl font-medium text-gray-300">
            Hello, I&apos;m
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Hillary Bett
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 h-8 sm:h-10 lg:h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed px-2 sm:px-0">
            Crafting exceptional digital experiences through clean code, innovative solutions, and user-centric design. Specialized in React, Node.js, and modern web technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4 pt-4">
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-600 text-gray-300 rounded-full font-medium hover:border-gray-500 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6">
            {[
              { Icon: Github, href: "https://github.com/LlaryBett", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:bettllary672@gmail.com", label: "Email" },
              { Icon: Phone, href: "https://wa.me/254716360768", label: "WhatsApp" } // Added WhatsApp
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-2.5 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end relative mb-6 md:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <img
            src={HeroImage}
            alt="Profile"
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full object-cover ring-2 sm:ring-4 ring-blue-400 ring-offset-2 sm:ring-offset-4 ring-offset-gray-900 shadow-xl sm:shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Scroll down icon */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="mb-2 text-gray-400 text-xs sm:text-sm tracking-wide">Scroll to explore</span>
        <ChevronDown className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
