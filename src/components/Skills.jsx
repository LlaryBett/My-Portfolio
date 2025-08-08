import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, Server, Database, Cloud, Smartphone, Palette,
  MapPin, Calendar, Award, TrendingUp // Removed Users
} from 'lucide-react';

const Skills = () => {
  const skillsRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 92, icon: "🔷" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Tailwind CSS", level: 94, icon: "🎨" },
        { name: "Framer Motion", level: 87, icon: "🎭" },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 93, icon: "🟢" },
        { name: "Express.js", level: 90, icon: "🚀" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "GraphQL", level: 82, icon: "🔗" },
        { name: "REST APIs", level: 95, icon: "🌐" },
        { name: "Microservices", level: 80, icon: "🔧" },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "Redis", level: 85, icon: "🔴" },
        { name: "Firebase", level: 82, icon: "🔥" },
        { name: "Prisma", level: 87, icon: "💎" },
        { name: "Supabase", level: 85, icon: "⚡" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 88, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚙️" },
        { name: "Vercel", level: 92, icon: "▲" },
        { name: "GitHub Actions", level: 87, icon: "🔄" },
        { name: "Terraform", level: 78, icon: "🏗️" },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 85, icon: "📱" },
        { name: "Expo", level: 88, icon: "🚀" },
        { name: "Flutter", level: 75, icon: "🦋" },
        { name: "PWA", level: 90, icon: "📲" },
        { name: "Ionic", level: 70, icon: "⚡" },
        { name: "Capacitor", level: 72, icon: "🔋" },
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Adobe XD", level: 80, icon: "🎭" },
        { name: "Git", level: 95, icon: "📝" },
        { name: "VS Code", level: 98, icon: "💻" },
        { name: "Postman", level: 92, icon: "📮" },
        { name: "Jest", level: 88, icon: "🧪" },
      ]
    }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading a cross-functional team of 8 developers in building scalable web applications serving 1M+ users. Architected microservices infrastructure and implemented CI/CD pipelines that reduced deployment time by 60%.",
      achievements: [
        "Increased system performance by 45% through optimization and caching strategies",
        "Mentored 5 junior developers, with 3 promoted to senior level",
        "Led migration to cloud infrastructure, saving $150K annually",
        "Implemented automated testing, reducing production bugs by 70%"
      ],
      tech: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Kubernetes"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained 20+ client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces and built robust RESTful APIs with comprehensive documentation.",
      achievements: [
        "Delivered 25+ projects on time and under budget",
        "Improved code coverage from 60% to 95% across all projects",
        "Reduced average page load time by 40% through optimization",
        "Built reusable component library used across 10+ projects"
      ],
      tech: ["React", "Vue.js", "Express.js", "MongoDB", "Jest", "Git"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Built responsive web applications and landing pages for early-stage startup. Worked closely with founders to rapidly prototype and iterate on product features. Implemented analytics tracking and A/B testing frameworks.",
      achievements: [
        "Increased conversion rate by 35% through UX improvements",
        "Built component library reducing development time by 50%",
        "Implemented A/B testing framework improving decision making",
        "Optimized SEO resulting in 200% increase in organic traffic"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Google Analytics"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey building websites for small businesses and startups. Gained experience in responsive design, cross-browser compatibility, and client communication. Contributed to team projects and learned industry best practices.",
      achievements: [
        "Built 15+ responsive websites for various clients",
        "Learned modern development workflows and version control",
        "Contributed to team's first React project migration",
        "Received 'Rising Star' award for exceptional growth"
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "PHP"],
      color: "from-orange-500 to-red-500"
    }
  ];

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const experienceItemVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills-experience" className="bg-gray-900 relative overflow-hidden">
      {/* Skills Section */}
      <div className="py-24 lg:py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={skillsRef}
            variants={containerVariants}
            initial="hidden"
            animate={isSkillsInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-20">
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-purple-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="mr-2" size={16} />
                Technical Skills
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                My{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A comprehensive toolkit for building modern, scalable, and performant applications
              </p>
            </motion.div>

            {/* Compact Skills Display - Tag Cloud Style */}
            <div className="mb-16">
              {/* All skills in one flowing layout */}
              <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
                {skillCategories.flatMap((category, categoryIndex) => 
                  category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${categoryIndex}-${skillIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4,
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.02)
                      }}
                      className="group relative"
                    >
                      <motion.div
                        className={`relative px-4 py-3 bg-gradient-to-r ${skillCategories[categoryIndex].color} bg-opacity-20 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer overflow-hidden`}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }}
                      >
                        {/* Progress indicator */}
                        <div 
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${skillCategories[categoryIndex].color} transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        />
                        
                        {/* Content */}
                        <div className="flex items-center space-x-2 relative z-10">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Category indicator dot */}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${skillCategories[categoryIndex].color} rounded-full opacity-60`} />
                      </motion.div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Category Legend */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {skillCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`} />
                    <span className="text-gray-400 text-sm">{category.title}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Learning Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-20"
            >
              <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  Technology evolves rapidly, and so do I. Currently exploring and mastering these emerging technologies:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Rust", "Go", "WebAssembly", "Three.js", "AI/ML", "Blockchain"].map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-blue-400 font-medium rounded-full border border-white/20"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.2)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 lg:py-32 relative border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={experienceRef}
            variants={containerVariants}
            initial="hidden"
            animate={isExperienceInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div variants={experienceItemVariants} className="text-center mb-20">
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="mr-2" size={16} />
                Career Journey
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                My journey through the tech industry and key achievements along the way
              </p>
            </motion.div>

            <div className="relative">
              {/* Compact Experience Cards */}
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={experienceItemVariants}
                    className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                            {exp.title}
                          </h3>
                          <h4 className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </h4>
                        </div>
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-full shrink-0">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Compact Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {exp.description}
                    </p>

                    {/* Key Highlights - Compact */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center text-sm">
                        <Award className="mr-2 text-yellow-400" size={16} />
                        Key Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                        {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                          <motion.div 
                            key={achIndex} 
                            className="text-gray-300 flex items-start leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                          >
                            <span className="text-emerald-400 mr-2 mt-0.5 text-xs">•</span>
                            <span className="line-clamp-2">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack - Compact */}
                    <div>
                      <h5 className="text-white font-semibold mb-2 flex items-center text-sm">
                        <Code className="mr-2 text-blue-400" size={16} />
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-white/10"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isExperienceInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.02) }}
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
              <motion.div variants={experienceItemVariants} className="mt-12 text-center">
                <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {experiences.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${experiences[index].color}`}
                          initial={{ scale: 0 }}
                          animate={isExperienceInView ? { scale: 1 } : {}}
                          transition={{ delay: index * 0.2 }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">Career Journey</span>
                  </div>
                  <div className="text-white font-semibold">
                    <span className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {new Date().getFullYear() - 2018}+
                    </span>
                    <span className="text-gray-400 text-sm ml-1">years</span>
                  </div>
                </div>
              </motion.div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;