import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Globe, Zap, Award, Users, Coffee, Lightbulb, GraduationCap, BookOpen, Calendar, Star, Trophy, Target } from 'lucide-react';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "5+", label: "Projects Completed", icon: Code },
    
    { number: "∞", label: "Cups of Coffee", icon: Coffee },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time. Following SOLID principles and best practices.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Database Architect",
      description: "Designing efficient database schemas and optimizing queries for peak performance. Experience with SQL and NoSQL databases.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Full Stack Mastery",
      description: "Seamlessly bridging frontend and backend development with modern technologies. End-to-end application development expertise.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Obsessed with creating lightning-fast applications that deliver exceptional user experiences. Web vitals and optimization expert.",
      gradient: "from-yellow-500 to-orange-500"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Kirinyaga University",
      year: "2021 - 2025",
      description: "Specialized in Software Engineering with focus on algorithms, data structures, and system design.",
      achievements: ["Dean's List", "Outstanding Project Award", "3.8/4.0 GPA"]
    },
    {
      degree: "Secondary Education Certificate",
      school: "Nakuru High School",
      year: "2017-2020",
      description: "Intensive 6-month program covering modern web technologies including React, Node.js, and cloud deployment.",
      achievements: ["Top 5% of Class", "Best Final Project", "Industry Mentorship"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", year: "2023", icon: Globe },
    { name: "Google Cloud Professional Developer", year: "2022", icon: Database },
    { name: "MongoDB Certified Developer", year: "2021", icon: Code }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            >
              <Lightbulb className="mr-1 sm:mr-2" size={14} />
              About Me
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              Passionate About{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Creating digital solutions that make a meaningful impact on businesses and users alike
            </p>
          </motion.div>

          {/* Main Content Grid - Rearranged */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start mb-10 sm:mb-12 lg:mb-16">
            {/* Left Column - Story (Crafting Since 2019) */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight px-2 sm:px-0">
                  Crafting Digital Excellence Since 2022
                </h3>
                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed px-2 sm:px-0">
                  <p>
                    My journey in software development began with a simple curiosity about how websites work. 
                    That curiosity evolved into a passion for creating robust, scalable applications that solve 
                    real-world problems and deliver exceptional user experiences.
                  </p>
                  <p>
                    With over 5 years of hands-on experience, I&apos;ve had the privilege of working with startups 
                    and established companies, helping them transform ideas into successful digital products. 
                    I specialize in full-stack development with a focus on modern JavaScript frameworks, 
                    cloud architecture, and performance optimization.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                    projects, or mentoring aspiring developers. I believe in continuous learning and staying 
                    at the forefront of technological innovation.
                  </p>
                </div>
              </div>

              {/* Personal Touch */}
              <motion.div 
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-sm relative overflow-hidden mx-2 sm:mx-0"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                  <Target className="mr-2 text-blue-400" size={18} />
                  Beyond the Code
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed relative z-10">
                  I&apos;m passionate about creating inclusive, accessible web experiences and believe that 
                  great software should be both powerful and intuitive. My approach combines technical 
                  expertise with user-centered design thinking.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Education & Learning Journey (Enhanced) */}
            <motion.div variants={itemVariants} className="relative">
              {/* Enhanced Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl blur-xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-blue-500/3 rounded-2xl sm:rounded-3xl" />
              
              <div className="relative bg-gradient-to-br from-white/[0.12] to-white/[0.05] backdrop-blur-lg border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div 
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
                  >
                    <GraduationCap className="mr-1 sm:mr-2" size={14} />
                    Education & Learning Journey
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                    Continuous{' '}
                    <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Growth &amp; Excellence
                    </span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Building expertise through formal education and industry certifications
                  </p>
                </div>

                {/* Enhanced Education Cards - No Truncation */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-md border border-white/30 hover:border-emerald-400/60 transition-all duration-700 shadow-lg hover:shadow-2xl"
                      whileHover={{ scale: 1.02, y: -4 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative p-5 sm:p-7">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                          <div className="flex items-start space-x-4">
                            <motion.div 
                              className="flex-shrink-0 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-500 shadow-lg"
                              whileHover={{ rotate: 5, scale: 1.1 }}
                            >
                              <BookOpen className="text-emerald-400 group-hover:text-emerald-300" size={20} />
                            </motion.div>
                            <div className="flex-1">
                              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2 leading-tight">
                                {edu.degree}
                              </h4>
                              <h5 className="text-emerald-400 font-semibold text-sm sm:text-base mb-1">{edu.school}</h5>
                            </div>
                          </div>
                          <motion.div 
                            className="flex items-center text-xs sm:text-sm text-gray-300 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 self-start"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar size={12} className="mr-2" />
                            {edu.year}
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                          {edu.description}
                        </p>

                        {/* Achievements - No Truncation, Flowing Layout */}
                        <div className="mb-4">
                          <h6 className="text-white font-semibold text-sm mb-3 flex items-center">
                            <Star className="mr-2 text-yellow-400" size={14} />
                            Achievements & Recognition
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <motion.span 
                                key={i}
                                className="px-3 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 hover:from-emerald-500/30 hover:to-blue-500/30 text-emerald-400 text-xs sm:text-sm rounded-full border border-emerald-500/30 hover:border-emerald-400/50 font-medium transition-all duration-300 shadow-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.1) + (i * 0.05) }}
                              >
                                <Star size={8} className="inline mr-1" />
                                {achievement}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Effect - Additional Details */}
                        <motion.div 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4 pt-4 border-t border-white/20"
                          initial={false}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                            <div>
                              <span className="text-gray-400">GPA:</span>
                              <span className="text-white font-semibold ml-2">4.0/4.0</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Status:</span>
                              <span className="text-emerald-400 font-semibold ml-2">Graduated</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Certifications Section */}
                <motion.div 
                  className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/40 backdrop-blur-md p-5 sm:p-7 shadow-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="text-lg sm:text-xl font-bold text-white flex items-center">
                      <Trophy className="mr-3 text-blue-400" size={20} />
                      Professional Certifications
                    </h4>
                    <div className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                      {certifications.length} Active
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 border border-white/20 hover:border-blue-400/40 transition-all duration-400 group shadow-sm hover:shadow-lg"
                        whileHover={{ x: 4, scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div 
                          className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 shadow-md flex-shrink-0"
                          whileHover={{ rotate: 10 }}
                        >
                          <cert.icon className="text-blue-400 group-hover:text-blue-300" size={16} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm sm:text-base font-semibold group-hover:text-blue-400 transition-colors leading-tight">
                            {cert.name}
                          </p>
                          <div className="flex items-center space-x-3 mt-1">
                            <p className="text-blue-400 text-xs sm:text-sm font-medium">{cert.year}</p>
                            <span className="text-green-400 text-xs px-2 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                              ✓ Verified
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Section - Previously on the right */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12 lg:mb-16">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                Technical{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                Core competencies that drive exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 mx-2 sm:mx-0"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-5">
                    <div className="flex-shrink-0">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${highlight.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <highlight.icon className={`text-xl bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`} size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:from-white/10 hover:to-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="mb-3 sm:mb-4">
                  <stat.icon className="mx-auto text-blue-400 mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;