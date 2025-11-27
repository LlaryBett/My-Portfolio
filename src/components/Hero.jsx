import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import HeroImage from '../assets/hero.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "FullStack Developer";

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
        px-4 sm:px-6 lg:px-8 xl:px-10
        scroll-mt-[70px]
        pt-[80px] sm:pt-[70px]
      "
    >
      {/* Updated to Option 2 - Code-inspired Grid Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Keep your animated background blobs but with adjusted colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/15 to-emerald-400/15 blur-xl"
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
        className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT - Text */}
        <div className="text-center md:text-left space-y-6 sm:space-y-8">
          <motion.h2 variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-300">
            Hello, I&apos;m
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Hillary Bett
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 h-12 sm:h-14 lg:h-16 flex items-center justify-center md:justify-start">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed px-4 sm:px-0">
            Crafting exceptional digital experiences through clean code, innovative solutions, and user-centric design. Specialized in React, Node.js, and modern web technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-row gap-4 sm:gap-6 pt-6">
            <motion.button
              className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/HillaryResume.pdf"
              download="Hillary_Bett_Resume.pdf"
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-5 sm:space-x-6 pt-6 sm:pt-8">
            {[
              { Icon: Github, href: "https://github.com/LlaryBett", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hillary-bett-390735381", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:bettllary672@gmail.com", label: "Email" },
              { Icon: Phone, href: "https://wa.me/254716360768", label: "WhatsApp" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={24} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end relative mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={HeroImage}
              alt="Hillary Bett - FullStack Developer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full object-cover ring-4 ring-blue-400/50 ring-offset-4 ring-offset-gray-900 shadow-2xl sm:shadow-3xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll down icon */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden sm:flex"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="mb-2 text-gray-400 text-sm sm:text-base tracking-wide font-medium">Scroll to explore</span>
        <ChevronDown className="text-gray-400 w-7 h-7 sm:w-8 sm:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;