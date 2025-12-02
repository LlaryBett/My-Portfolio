import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaAward, 
  FaLightbulb, 
  FaGraduationCap, 
  FaTrophy,
  FaUserTie,
  FaStar,
  FaBriefcase,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';
import HeroImage from '../assets/hero.jpg';

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

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaBriefcase },
    { number: "5+", label: "Projects Completed", icon: FaCode },
    { number: "15+", label: "Technologies", icon: FaRocket },
  ];

  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code Focus",
      description: "Writing maintainable, scalable code with clear documentation. Practical solutions over over-engineering."
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Building efficient data models and optimizing queries. Experienced with relational and NoSQL databases."
    },
    {
      icon: FaUserTie,
      title: "Full Stack Development",
      description: "End-to-end application development. Focus on creating cohesive user experiences across the stack."
    },
    {
      icon: FaRocket,
      title: "Performance & Optimization",
      description: "Practical approach to performance. Focus on fixing real bottlenecks that impact user experience."
    },
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
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background - Matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-30 z-0" />

      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.div variants={leftVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6 border border-white/10">
                <FaLightbulb className="text-emerald-400" />
                About Me
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Building Digital
                <span className="block text-white mt-2">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                Software engineer passionate about creating meaningful digital experiences through clean code and thoughtful design.
              </p>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
            {/* Left Column - Image */}
            <motion.div 
              variants={leftVariants} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-xl opacity-40" />
                <img
                  src={HeroImage}
                  alt="Hillary Bett - Software Engineer"
                  className="relative w-full max-w-3xl lg:max-w-4xl h-96 lg:h-[480px] rounded-3xl object-cover shadow-2xl border border-white/10"
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Story */}
            <motion.div variants={rightVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              {/* Story Card */}
              <motion.div 
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <FaUserTie className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">My Journey</h2>
                    <p className="text-gray-300">From curiosity to craftsmanship</p>
                  </div>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    My journey in software development began with a simple curiosity about how websites work. 
                    That curiosity evolved into a passion for creating robust, scalable applications that solve 
                    real-world problems and deliver exceptional user experiences.
                  </p>
                  <p className="leading-relaxed">
                    With over 2 years of hands-on experience, I've worked on various projects, helping transform 
                    ideas into successful digital products. I specialize in full-stack development with a focus 
                    on modern frameworks, database design, and performance optimization.
                  </p>
                  <p className="leading-relaxed">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-20 max-w-2xl mx-auto"
          >
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
                      
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all">
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
                    className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div>
                      <h4 className="font-medium text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-300">{cert.year}</p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30">
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