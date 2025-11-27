import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaPalette,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaFigma,
  FaPython,
  FaFire,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaChartLine,
  FaHtml5,
  FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiKubernetes,
  SiVercel,
  SiGithubactions,
  SiTerraform,
  SiExpo,
  SiFlutter,
  SiPwa,
  SiPostman,
  SiJest
} from 'react-icons/si';
import { 
  GiProgression 
} from 'react-icons/gi';

const Skills = () => {
  const skillsRef = React.useRef(null);
  const experienceRef = React.useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: FaReact },
        { name: "TypeScript", level: 92, icon: SiTypescript },
        { name: "Next.js", level: 88, icon: SiNextdotjs },
        { name: "HTML", level: 99, icon: FaHtml5 },
        { name: "Tailwind CSS", level: 94, icon: SiTailwindcss },
        { name: "Framer Motion", level: 87, icon: GiProgression },
        { name: "Bootstrap", level: 90, icon: FaBootstrap },
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 93, icon: FaNodeJs },
        { name: "Express.js", level: 90, icon: SiExpress },
        { name: "Python", level: 85, icon: FaPython },
        { name: "REST APIs", level: 95, icon: FaCloud },
        { name: "Microservices", level: 80, icon: GiProgression },
      ]
    },
    {
      title: "Database & Storage",
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90, icon: SiPostgresql },
        { name: "MongoDB", level: 88, icon: SiMongodb },
        { name: "MySQL", level: 85, icon: SiMysql },
        { name: "Firebase", level: 82, icon: FaFire },
        { name: "Prisma", level: 87, icon: SiPrisma },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 85, icon: FaAws },
        { name: "Docker", level: 88, icon: FaDocker },
        { name: "Kubernetes", level: 75, icon: SiKubernetes },
        { name: "Vercel", level: 92, icon: SiVercel },
        { name: "GitHub Actions", level: 87, icon: SiGithubactions },
        { name: "Terraform", level: 78, icon: SiTerraform },
      ]
    },
    {
      title: "Mobile Development",
      icon: FaMobile,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 85, icon: FaReact },
        { name: "Expo", level: 88, icon: SiExpo },
        { name: "Flutter", level: 75, icon: SiFlutter },
        { name: "PWA", level: 90, icon: SiPwa },
      ]
    },
    {
      title: "Design & Tools",
      icon: FaPalette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 85, icon: FaFigma },
        { name: "Git", level: 95, icon: FaGit },
        { name: "VS Code", level: 98, icon: FaCode },
        { name: "Postman", level: 92, icon: SiPostman },
        { name: "Jest", level: 88, icon: SiJest },
      ]
    }
  ];

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Powerlearn Project",
      location: "Nairobi, Kenya",
      period: "2023",
      type: "Part-time",
      description: "Participated in the PowerLearn Project program and successfully built a modern Learning Management System (LMS) with an intuitive UI, robust backend, and scalable architecture. The LMS supports course creation, student enrollment, progress tracking, and real-time assessments.",
      achievements: [
        "Designed and developed a responsive and user-friendly interface using React and Tailwind CSS",
        "Implemented secure authentication, role-based access, and real-time data updates",
        "Optimized backend APIs for fast performance, reducing average response time by 40%",
        "Integrated interactive features like quizzes, certificates, and progress dashboards to enhance user engagement"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Git", "Docker"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fullstack Developer",
      company: "Powerlearn Project",
      location: "Nairobi, Kenya",
      period: "2024",
      type: "Internship",
      description: "Returned to the PowerLearn Project to enhance and scale the Learning Management System (LMS) built in the previous year. Focused on improving system performance, adding advanced features, and preparing the platform for wider adoption.",
      achievements: [
        "Upgraded backend architecture to handle 5× more concurrent users without performance loss",
        "Implemented advanced analytics dashboards for instructors and administrators",
        "Integrated video streaming and file management for course content",
        "Added multilingual support, enabling use across multiple African countries",
        "Deployed LMS to cloud infrastructure with CI/CD pipelines for faster updates"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Clerk auth", "GitHub Actions"],
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section id="skills-experience" className="bg-gray-900 relative overflow-hidden scroll-mt-[70px]">
      {/* Updated to Option 2 - Code-inspired Grid Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Skills Section */}
      <div className="py-16 sm:py-20 lg:py-24 xl:py-32 relative">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div ref={skillsRef}>
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <motion.div 
                className="inline-flex items-center px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-purple-400 text-base font-medium mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode className="mr-2" size={16} />
                Technical Skills
              </motion.div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 px-4">
                My{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                A comprehensive toolkit for building modern, scalable, and performant applications
              </p>
            </div>

            {/* Compact Skills Display - Tag Cloud Style */}
            <div className="mb-8 sm:mb-12">
              {/* All skills in one flowing layout */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
                {skillCategories.flatMap((category, categoryIndex) => 
                  category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${categoryIndex}-${skillIndex}`}
                      className="group relative"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`relative px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r ${category.color} bg-opacity-20 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer overflow-hidden hover:bg-white/10 transition-all duration-300`}
                      >
                        {/* Progress indicator */}
                        <div 
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        />
                        
                        {/* Content */}
                        <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                          <span className="text-base sm:text-lg">
                            {React.createElement(skill.icon, { size: 18 })}
                          </span>
                          <span className="text-white font-semibold text-sm sm:text-base">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-sm hidden sm:inline">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Category indicator dot */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${category.color} rounded-full opacity-60`} />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Category Legend */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`} />
                    <span className="text-gray-300 text-sm">{category.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Section */}
            <div className="text-center mb-10 sm:mb-12 px-4">
              <motion.div 
                className="inline-flex flex-col items-center p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Always Learning</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg">
                  Technology evolves rapidly, and so do I. Currently exploring and mastering these emerging technologies:
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {["Rust", "Go", "WebAssembly", "Vue.js", "AI/ML", "Blockchain"].map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-blue-400 font-semibold rounded-full border border-white/20 text-sm sm:text-base hover:scale-105 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 xl:pb-32 relative border-t border-white/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div ref={experienceRef}>
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <motion.div 
                className="inline-flex items-center px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-400 text-base font-medium mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <FaChartLine className="mr-2" size={16} />
                Career Journey
              </motion.div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 px-4">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                My journey through the tech industry and key achievements along the way
              </p>
            </div>

            <div className="relative">
              {/* Experience Cards */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-102 hover:-translate-y-1 transition-all duration-500 mx-2 sm:mx-0"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0 pr-3">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <h4 className={`text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mt-1`}>
                            {exp.company}
                          </h4>
                        </div>
                        <span className="px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-sm text-gray-300 text-sm rounded-full shrink-0">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm sm:text-base space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <FaMapMarkerAlt size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt size={14} className="mr-2 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-4 sm:mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center text-lg sm:text-xl">
                        <FaAward className="mr-2 text-yellow-400 flex-shrink-0" size={18} />
                        Key Highlights
                      </h5>
                      <div className="grid grid-cols-1 gap-2 text-sm sm:text-base">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex} 
                            className="text-gray-300 flex items-start leading-relaxed"
                          >
                            <span className="text-emerald-400 mr-2 mt-1 text-base flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center text-lg sm:text-xl">
                        <FaCode className="mr-2 text-blue-400 flex-shrink-0" size={18} />
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-gray-300 text-sm rounded-lg border border-white/10 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-60 rounded-t-2xl`} />
                  </motion.div>
                ))}
              </div>

              {/* Career Progression Visualization */}
              <div className="mt-8 sm:mt-12 text-center px-4">
                <motion.div 
                  className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      {experiences.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${experiences[index].color} animate-pulse`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-base">Journey</span>
                  </div>
                  <div className="text-white font-bold">
                    <span className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {new Date().getFullYear() - 2023}+
                    </span>
                    <span className="text-gray-400 text-base sm:text-lg ml-2">years</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;