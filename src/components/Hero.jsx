import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Code, Terminal, Cpu, Briefcase, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "FullStack Developer";

  const [codeLines, setCodeLines] = useState([]);
  const currentLineRef = useRef(0);
  
  const codeSnippets = [
    "const developer = {",
    "  name: 'Hillary Bett',",
    "  role: 'FullStack Developer',",
    "  passion: 'Building amazing web experiences'",
    "};",
    "",
    "// Let's build something awesome",
    "project.innovate().deploy();"
  ];

  useEffect(() => {
    // Typewriter effect for title
    let index = 0;
    const titleTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(titleTimer);
      }
    }, 100);

    // Code typing animation with delay
    const codeTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentLineRef.current < codeSnippets.length) {
          setCodeLines(prev => [...prev, codeSnippets[currentLineRef.current]]);
          currentLineRef.current += 1;
        } else {
          clearInterval(interval);
        }
      }, 150);
      
      return () => clearInterval(interval);
    }, 500);

    return () => {
      clearInterval(titleTimer);
      clearTimeout(codeTimer);
    };
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

  const codeVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  };

  // Syntax highlighting colors
  const getLineColor = (line) => {
    if (!line) return 'text-gray-300';
    if (line.includes('const') || line.includes('return')) {
      return 'text-purple-400';
    }
    if (line.includes('//')) {
      return 'text-gray-500';
    }
    if (line.includes("'") || line.includes('"')) {
      return 'text-emerald-400';
    }
    return 'text-gray-300';
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 mx-auto items-center w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT - Text Content */}
        <div className="space-y-4 lg:space-y-6">
          <motion.div variants={itemVariants}>
            <p className="text-emerald-400 text-sm sm:text-base font-semibold tracking-wide mb-2 flex items-center gap-2">
              <Terminal size={16} />
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
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
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base flex items-center gap-2 hover:bg-blue-700"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase size={18} />
                View My Work
              </motion.button>
            </Link>
            
            <motion.a
              href="/Bett CV.pdf"
              download="Hillary_Bett_Resume.pdf"
              className="px-6 sm:px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-emerald-400 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm sm:text-base inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4 justify-center sm:justify-start">
            { [
              { Icon: Github, href: "https://github.com/LlaryBett", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/hillary-bett-390735381", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:bettllary672@gmail.com", label: "Email" },
              { Icon: Phone, href: "https://wa.me/254716360768", label: "WhatsApp" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-xl bg-white/5 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={20} />
                <span className="text-sm hidden sm:inline">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT - Compact Coding Animation */}
        <motion.div
          variants={codeVariants}
          className="mt-8 lg:mt-0"
        >
          <div className="relative">
            {/* Compact Terminal */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs ml-2 font-mono">portfolio.jsx</span>
                <div className="ml-auto flex items-center gap-1 text-gray-500">
                  <Cpu size={12} />
                  <span className="text-xs font-mono">dev</span>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm">
                {/* Welcome prompt */}
                <div className="mb-4">
                  <div className="text-emerald-400">$ npm run portfolio</div>
                  <div className="text-blue-400 text-xs mt-1">Starting development server...</div>
                </div>
                
                {/* Animated code */}
                <div className="space-y-0.5">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${getLineColor(line)}`}
                    >
                      <span className="text-gray-500 w-6 text-right pr-2 select-none text-xs">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        {line || <span className="opacity-0">.</span>}
                        {index === codeLines.length - 1 && line && (
                          <motion.span
                            className="ml-0.5 inline-block w-1.5 h-4 bg-emerald-400"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          />
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Live indicator */}
                {currentLineRef.current >= codeSnippets.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-2" />
                      <span className="text-emerald-400 text-xs">Live Server</span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      <span className="text-emerald-300">✓</span> Ready
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Subtle floating elements */}
            <motion.div
              className="absolute -top-2 -right-2 text-blue-400/60"
              animate={{ y: [0, -4, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code size={20} />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 text-emerald-400/60"
              animate={{ y: [0, 4, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <Terminal size={20} />
            </motion.div>
          </div>
          
          {/* Tech badges */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-gray-300 text-xs font-medium border border-white/10 hover:border-emerald-400/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-xs tracking-wider font-medium mb-2">Explore More</span>
          <div className="w-px h-8 bg-gradient-to-b from-emerald-400/50 to-transparent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;