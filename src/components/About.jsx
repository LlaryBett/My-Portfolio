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
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "100+", label: "Projects Completed", icon: Code },
    { number: "50+", label: "Happy Clients", icon: Users },
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
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2015 - 2019",
      description: "Specialized in Software Engineering with focus on algorithms, data structures, and system design.",
      achievements: ["Dean's List", "Outstanding Project Award", "3.8/4.0 GPA"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "TechAcademy Pro",
      year: "2019",
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
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
            >
              <Lightbulb className="mr-2" size={16} />
              About Me
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Passionate About{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating digital solutions that make a meaningful impact on businesses and users alike
            </p>
          </motion.div>

          {/* Main Content Grid - Rearranged */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Column - Story (Crafting Since 2019) */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Crafting Digital Excellence Since 2019
                </h3>
                <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
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
                className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-sm relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="mr-2 text-blue-400" size={20} />
                  Beyond the Code
                </h4>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  I&apos;m passionate about creating inclusive, accessible web experiences and believe that 
                  great software should be both powerful and intuitive. My approach combines technical 
                  expertise with user-centered design thinking.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Education & Learning Journey (Condensed) */}
            <motion.div variants={itemVariants} className="relative">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <motion.div 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium mb-4"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
                  >
                    <GraduationCap className="mr-2" size={16} />
                    Education & Learning Journey
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Continuous{' '}
                    <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Growth &amp; Excellence
                    </span>
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Building expertise through formal education and industry certifications
                  </p>
                </div>

                {/* Compact Education Timeline */}
                <div className="space-y-4 mb-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="group relative p-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-emerald-400/50 hover:from-emerald-500/10 hover:to-blue-500/10 transition-all duration-500"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-blue-500/20 group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                            <BookOpen className="text-emerald-400 group-hover:text-emerald-300" size={20} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                              <Calendar size={10} className="mr-1" />
                              {edu.year}
                            </div>
                          </div>
                          <h5 className="text-emerald-400 font-semibold mb-2 text-sm">{edu.school}</h5>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">
                            {edu.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {edu.achievements.slice(0, 2).map((achievement, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30 font-medium"
                              >
                                <Star size={8} className="inline mr-1" />
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Compact Certifications */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Trophy className="mr-2 text-blue-400" size={18} />
                    Professional Certifications
                  </h4>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                        whileHover={{ x: 3, scale: 1.01 }}
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex-shrink-0">
                          <cert.icon className="text-blue-400" size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-semibold truncate">{cert.name}</p>
                          <p className="text-blue-400 text-xs font-medium">{cert.year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Section - Previously on the right */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Technical{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Core competencies that drive exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${highlight.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <highlight.icon className={`text-xl bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`} size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:from-white/10 hover:to-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="mb-4">
                  <stat.icon className="mx-auto text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" size={32} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;