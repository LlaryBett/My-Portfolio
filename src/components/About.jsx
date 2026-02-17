import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLightbulb, 
  FaGraduationCap, 
  FaTrophy,
  FaUserTie,
  FaBriefcase,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

const About = () => {
  const ref = React.useRef(null);
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaBriefcase },
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "15+", label: "Technologies", icon: FaRocket },
  ];

  const education = [
    {
      degree: "BSc in Software Engineering",
      school: "Kirinyaga University",
      year: "2021 - 2025",
      description: "Specialized in Software Engineering with focus on algorithms, data structures, and system design.",
      achievements: ["Developed and deployed multiple full-stack applications", "Built an open-source project adopted by peers"]
    },
    {
      degree: "Secondary Education Certificate",
      school: "Nakuru High School",
      year: "2017-2020",
      description: "Completed the Kenya Certificate of Secondary Education (KCSE) with strong academic performance.",
      achievements: ["Developed foundational problem-solving skills", "Participated in various academic clubs"]
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden scroll-mt-[70px]">
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

      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6 border border-white/10">
                <FaLightbulb className="text-emerald-400" />
                About Me
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Building Digital
                <span className="block text-white mt-2">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Software engineer passionate about creating meaningful digital experiences through clean code and thoughtful design.
              </p>
            </div>
          </motion.div>

          {/* Main Content - Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.div 
              variants={itemVariants}
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Story Card */}
              <motion.div 
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <FaUserTie className="text-emerald-400 text-xl" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white">My Journey</h2>
                    <p className="text-gray-300">From curiosity to craftsmanship</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300 text-center max-w-3xl mx-auto">
                  <p className="leading-relaxed">
                    My journey in software development began with a simple curiosity about how websites work. 
                    That curiosity evolved into a passion for creating robust, scalable applications that solve 
                    real-world problems and deliver exceptional user experiences.
                  </p>
                  <p className="leading-relaxed">
                    With over 2 years of hands-on experience, I&apos;ve worked on various projects, helping transform 
                    ideas into successful digital products. I specialize in full-stack development with a focus 
                    on modern frameworks, database design, and performance optimization.
                  </p>
                  <p className="leading-relaxed">
                    When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and mentoring aspiring developers. I believe in continuous learning and staying at the forefront 
                    of technological innovation.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats - Centered Full Width */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-20 max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Grid pattern overlay for stats card */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                 linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/30">
                <FaGraduationCap className="text-emerald-400" />
                Education
              </div>
              <h2 className="text-3xl font-bold text-white">Academic Background</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
                
                <div className="space-y-12">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-20">
                      <div className="absolute left-2 top-0 w-9 h-9 bg-emerald-500 rounded-full border-4 border-gray-900" />
                      
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all relative overflow-hidden">
                        {/* Grid pattern overlay for education cards */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                          }} />
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                              <p className="text-emerald-400 font-medium">{edu.school}</p>
                            </div>
                            <span className="px-4 py-1.5 bg-white/5 text-gray-300 rounded-full text-sm font-medium border border-white/10">
                              {edu.year}
                            </span>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{edu.description}</p>
                          
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/30">
                <FaTrophy className="text-emerald-400" />
                Certifications
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Professional Certifications</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Industry-recognized credentials validating technical expertise
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="grid gap-4">
                {[
                  { name: "PowerLearn Project Certification", year: "2023" },
                  { name: "PowerLearn Project Certification", year: "2024" },
                  { name: "Oracle Cloud Infrastructure Foundations", year: "2025" }
                ].map((cert, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all relative overflow-hidden group"
                  >
                    {/* Grid pattern overlay for certification cards */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                         linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '35px 35px'
                      }} />
                    </div>
                    
                    <div className="relative z-10 flex-1">
                      <h4 className="font-medium text-white group-hover:text-emerald-300 transition-colors">{cert.name}</h4>
                      <p className="text-sm text-gray-300">{cert.year}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30 relative z-10">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;