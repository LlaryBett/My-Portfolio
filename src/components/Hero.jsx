import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
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
      transition: { delayChildren: 0.2, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="h-screen flex items-center relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />
      
      <motion.div
        className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 mx-auto items-center w-full pt-16 lg:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT - Text */}
        <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <p className="text-emerald-400 text-sm sm:text-base font-semibold tracking-wide mb-2">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Hillary Bett
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed">
            Crafting exceptional digital experiences through clean code, innovative solutions, and user-centric design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.button>
            </Link>
            
            <motion.a
              href="/HillaryResume.pdf"
              download="Hillary_Bett_Resume.pdf"
              className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-emerald-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-base inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
            {[
              { Icon: Github, href: "https://github.com/LlaryBett", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hillary-bett-390735381", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:bettllary672@gmail.com", label: "Email" },
              { Icon: Phone, href: "https://wa.me/254716360768", label: "WhatsApp" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-xl bg-white/5 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Image */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur-xl opacity-60" />
            <img
              src={HeroImage}
              alt="Hillary Bett - FullStack Developer"
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Explore More Section - Always visible at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
      >
        <span className="mb-3 text-gray-500 text-xs tracking-wider font-medium">Explore More</span>
        <div className="flex gap-3">
          <Link to="/about">
            <motion.button
              className="px-4 py-2 bg-white/5 backdrop-blur-sm text-gray-300 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white hover:border-emerald-400/50 transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
          </Link>
          <Link to="/skills">
            <motion.button
              className="px-4 py-2 bg-white/5 backdrop-blur-sm text-gray-300 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white hover:border-emerald-400/50 transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;