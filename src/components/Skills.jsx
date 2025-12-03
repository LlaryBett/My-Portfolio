import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaCloud, 
  FaMobile, 
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaFigma,
  FaPython,
  FaFire,
  FaCheckCircle,
  FaChevronRight
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
  SiPostman,
  SiJest
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "HTML/CSS", icon: FaCode },
        { name: "Bootstrap", icon: FaCode },
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: FaPython },
        { name: "REST APIs", icon: FaCode },
        { name: "Microservices", icon: FaServer },
      ]
    },
    {
      title: "Database & Storage",
      icon: FaDatabase,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: FaFire },
        { name: "Prisma", icon: SiPrisma },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Vercel", icon: SiVercel },
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "Terraform", icon: SiTerraform },
      ]
    },
    {
      title: "Tools & Mobile",
      icon: FaMobile,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      skills: [
        { name: "React Native", icon: FaReact },
        { name: "Expo", icon: SiExpo },
        { name: "Flutter", icon: SiFlutter },
        { name: "Figma", icon: FaFigma },
        { name: "Git", icon: FaGit },
        { name: "Postman", icon: SiPostman },
        { name: "Jest", icon: SiJest },
      ]
    }
  ];

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "Powerlearn Project",
      year: "2023",
      description: "Participated in the PowerLearn Project program and successfully built a modern Learning Management System (LMS) with an intuitive UI, robust backend, and scalable architecture.",
      achievements: [
        "Designed responsive UI using React and Tailwind CSS",
        "Implemented secure authentication and role-based access",
        "Optimized backend APIs, reducing response time by 40%",
        "Integrated interactive features like quizzes and dashboards"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Git", "Docker"],
    },
    {
      title: "Fullstack Developer",
      company: "Powerlearn Project",
      year: "2024",
      description: "Enhanced and scaled the LMS platform, focusing on performance improvements and advanced features for wider adoption.",
      achievements: [
        "Scaled backend to handle 5× more concurrent users",
        "Implemented advanced analytics dashboards",
        "Integrated video streaming and file management",
        "Added multilingual support for multiple countries"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Clerk", "GitHub Actions"],
    },
  ];

  return (
    <section id="skills-experience" className="relative overflow-hidden scroll-mt-[70px]">
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

      <div className="relative z-10">
        {/* Skills Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-sm font-medium text-gray-300">Technical Skills</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                My{' '}
                <span className="text-white">
                  Expertise
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Technologies and tools I work with to build exceptional digital experiences
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === index
                      ? `${category.bgColor} ${category.color} border border-white/20`
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <category.icon />
                  <span className="text-sm sm:text-base">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className={`p-4 rounded-xl ${skillCategories[activeCategory].bgColor} border border-white/10 group-hover:border-blue-400/30 transition-all duration-300 mb-2 relative overflow-hidden`}>
                    {/* Grid pattern overlay for skill cards */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                         linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                      }} />
                    </div>
                    <skill.icon className={`text-3xl ${skillCategories[activeCategory].color} relative z-10`} />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Learning Section */}
            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Always Learning
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Continuously expanding my skillset with emerging technologies
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Rust", "Go", "WebAssembly", "AI/ML", "Blockchain"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-gray-300 font-medium rounded-full border border-white/10 hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-16 sm:py-20 lg:py-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-sm font-medium text-gray-300">Career Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Professional{' '}
                <span className="text-white">
                  Experience
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                My journey through the tech industry and key achievements
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
                
                <div className="space-y-12">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-20">
                      {/* Timeline dot */}
                      <div className="absolute left-2 top-0 w-9 h-9 bg-emerald-500 rounded-full border-4 border-gray-900" />
                      
                      {/* Year tag */}
                      <div className="absolute -top-2 left-20 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                        {exp.year}
                      </div>

                      {/* Experience Card */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden">
                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                          }} />
                        </div>
                        
                        <div className="relative z-10">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-emerald-400 font-medium mt-1">{exp.company}</p>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{exp.description}</p>
                          
                          {/* Achievements */}
                          <div className="space-y-2 mb-4">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={14} />
                                <span className="text-gray-400 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Tech Stack */}
                          <div>
                            <h5 className="text-white font-semibold mb-2 text-sm">Technologies Used</h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-lg"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                     linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '35px 35px'
                  }} />
                </div>
                
                <div className="relative z-10 flex items-center gap-6">
                  <div className="text-4xl font-bold text-white">
                    {new Date().getFullYear() - 2023}+
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">
                      Years of Growth
                    </div>
                    <div className="text-gray-400 text-sm">
                      Continuously evolving in tech
                    </div>
                  </div>
                  <FaChevronRight className="text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;