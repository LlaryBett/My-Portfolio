import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaGlobe, 
  FaBolt, 
  FaAward, 
  FaLightbulb, 
  FaGraduationCap, 
  FaTrophy, 
  FaBullseye, 
  FaSmile,
  FaLaptopCode,
  FaRocket,
  FaUserTie
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaAward },
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "100%", label: "Client Satisfaction", icon: FaSmile },
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code Focus",
      description: "Writing maintainable, scalable code with clear documentation. Strong believer in practical solutions over over-engineering.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Building efficient data models and optimizing queries. Comfortable with both relational and document databases.",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: FaLaptopCode,
      title: "Full Stack Development",
      description: "Building complete applications from UI to deployment. Focus on creating cohesive user experiences across the stack.",
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: FaRocket,
      title: "Performance & Optimization",
      description: "Practical approach to performance - fixing real bottlenecks users notice. Focus on meaningful improvements.",
      gradient: "from-orange-500 to-orange-600"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
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
      achievements: [
        "Developed foundational problem-solving skills",
        "Participated in various academic clubs",
      ]
    }
  ];

  const certifications = [
    { name: "PowerLearn Project Certification", year: "2023", icon: FaGlobe },
    { name: "PowerLearn Project Certification", year: "2024", icon: FaGlobe },
    { name: "Oracle Cloud Infrastructure Foundations", year: "2025", icon: FaGlobe }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-400 text-sm sm:text-base font-medium mb-6 sm:mb-8"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            >
              <FaLightbulb className="mr-2" size={16} />
              About Me
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-4">
              Passionate About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Creating digital solutions that make a meaningful impact on businesses and users alike
            </p>
          </motion.div>

          {/* Main Story Section - Full Width */}
          <motion.div 
            variants={itemVariants} 
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
              {/* Main Story */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-4 sm:px-0">
                  Crafting Digital Excellence Since 2022
                </h3>
                <div className="space-y-5 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-4 sm:px-0">
                  <p>
                    My journey in software development began with a simple curiosity about how websites work. 
                    That curiosity evolved into a passion for creating robust, scalable applications that solve 
                    real-world problems and deliver exceptional user experiences.
                  </p>
                  <p>
                    With over 2 years of hands-on experience, I've had the privilege of working on 
                    various projects, helping transform ideas into successful digital products. I 
                    specialize in full-stack development with a focus on modern JavaScript frameworks, 
                    database design, and performance optimization.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or mentoring aspiring developers. I believe in continuous 
                    learning and staying at the forefront of technological innovation.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <FaBullseye className="mr-3 text-blue-400" size={20} />
                    Quick Facts
                  </h4>
                  <div className="space-y-4 text-base">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Experience:</span>
                      <span className="text-white font-medium">2+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Projects:</span>
                      <span className="text-white font-medium">5+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Technologies:</span>
                      <span className="text-white font-medium">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Focus:</span>
                      <span className="text-emerald-400 font-medium">Full-Stack</span>
                    </div>
                  </div>
                </div>

                {/* Personal Touch - Compact */}
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <FaUserTie className="mr-2 text-purple-400" size={18} />
                    Philosophy
                  </h4>
                  <p className="text-base text-gray-300 leading-relaxed">
                    Great software should be both powerful and intuitive, combining technical excellence with user-centered design.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education & Certifications - Horizontal Layout */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20"
          >
            {/* Education - Condensed */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <motion.div 
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-400 text-base font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGraduationCap className="mr-2" size={18} />
                  Education
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Academic{' '}
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Foundation
                  </span>
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-white font-semibold text-lg leading-tight">{edu.degree}</h4>
                        <p className="text-emerald-400 text-base mt-1">{edu.school}</p>
                      </div>
                      <span className="text-sm text-gray-300 bg-white/10 px-3 py-1.5 rounded whitespace-nowrap">{edu.year}</span>
                    </div>
                    <p className="text-gray-300 text-base mb-4 leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span key={i} className="text-sm px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Skills */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <motion.div 
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-400 text-base font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTrophy className="mr-2" size={18} />
                  Certifications
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Professional{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Growth
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ x: 4, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <cert.icon className="text-blue-400" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-base font-medium">{cert.name}</p>
                      <p className="text-blue-400 text-sm mt-1">{cert.year}</p>
                    </div>
                    <span className="text-green-400 text-sm px-3 py-1.5 bg-green-500/20 rounded-full">
                      ✓ Active
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
                Technical{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
                Core competencies that drive exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 mx-2 sm:mx-0"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${highlight.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <highlight.icon className={`text-2xl bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`} size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 sm:p-8 lg:p-10 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:from-white/10 hover:to-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <stat.icon
                  className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0"
                  size={32}
                />
                <div className="ml-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium text-sm sm:text-base mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;