import React from 'react';
import { 
  Code, Server, Database, Cloud, Smartphone, Palette,
  MapPin, Calendar, Award, TrendingUp
} from 'lucide-react';

const Skills = () => {
  const skillsRef = React.useRef(null);
  const experienceRef = React.useRef(null);

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

  return (
    <section id="skills-experience" className="bg-gray-900 relative overflow-hidden">
      {/* Skills Section */}
      <div className="py-12 sm:py-16 lg:py-20 xl:py-28 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div ref={skillsRef}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Code className="mr-1 sm:mr-2" size={14} />
                Technical Skills
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
  My{' '}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
    Expertise
  </span>
</h2>

              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                A comprehensive toolkit for building modern, scalable, and performant applications
              </p>
            </div>

            {/* Compact Skills Display - Tag Cloud Style */}
            <div className="mb-6 sm:mb-8">
              {/* All skills in one flowing layout */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-6xl mx-auto px-2">
                {skillCategories.flatMap((category, categoryIndex) => 
                  category.skills.map((skill, skillIndex) => (
                    <div
                      key={`${categoryIndex}-${skillIndex}`}
                      className="group relative"
                    >
                      <div
                        className={`relative px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r ${skillCategories[categoryIndex].color} bg-opacity-20 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 cursor-pointer overflow-hidden hover:scale-105 hover:bg-white/10 transition-all duration-300`}
                      >
                        {/* Progress indicator */}
                        <div 
                          className={`absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r ${skillCategories[categoryIndex].color} transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        />
                        
                        {/* Content */}
                        <div className="flex items-center space-x-1.5 sm:space-x-2 relative z-10">
                          <span className="text-sm sm:text-lg">{skill.icon}</span>
                          <span className="text-white font-medium text-xs sm:text-sm">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-xs hidden sm:inline">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Category indicator dot */}
                        <div className={`absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skillCategories[categoryIndex].color} rounded-full opacity-60`} />
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Category Legend */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-1 sm:space-x-2">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${category.color} rounded-full`} />
                    <span className="text-gray-400 text-xs sm:text-sm">{category.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Section */}
            <div className="text-center mb-8 sm:mb-10 px-2">
              <div className="inline-flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Always Learning</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base">
                  Technology evolves rapidly, and so do I. Currently exploring and mastering these emerging technologies:
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {["Rust", "Go", "WebAssembly", "Three.js", "AI/ML", "Blockchain"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm text-blue-400 font-medium rounded-full border border-white/20 text-xs sm:text-sm hover:scale-105 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer"
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

      {/* Experience Section - Minimal top spacing */}
      <div className="pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 xl:pb-28 relative border-t border-white/10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div ref={experienceRef}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <TrendingUp className="mr-1 sm:mr-2" size={14} />
                Career Journey
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                My journey through the tech industry and key achievements along the way
              </p>
            </div>

            <div className="relative">
              {/* Compact Experience Cards */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-102 hover:-translate-y-1 transition-all duration-500 mx-2 sm:mx-0"
                  >
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                            {exp.title}
                          </h3>
                          <h4 className={`text-sm sm:text-base lg:text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </h4>
                        </div>
                        <span className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-full shrink-0">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Compact Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {exp.description}
                    </p>

                    {/* Key Highlights - Compact */}
                    <div className="mb-3 sm:mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center text-xs sm:text-sm">
                        <Award className="mr-1 sm:mr-2 text-yellow-400 flex-shrink-0" size={14} />
                        Key Highlights
                      </h5>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                          <div 
                            key={achIndex} 
                            className="text-gray-300 flex items-start leading-relaxed"
                          >
                            <span className="text-emerald-400 mr-2 mt-0.5 text-xs flex-shrink-0">•</span>
                            <span className="line-clamp-2">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack - Compact */}
                    <div>
                      <h5 className="text-white font-semibold mb-2 flex items-center text-xs sm:text-sm">
                        <Code className="mr-1 sm:mr-2 text-blue-400 flex-shrink-0" size={14} />
                        Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-white/10 hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className={`absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r ${exp.color} opacity-60 rounded-t-xl sm:rounded-t-2xl`} />
                  </div>
                ))}
              </div>

              {/* Career Progression Visualization */}
              <div className="mt-6 sm:mt-8 text-center px-2">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {experiences.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${experiences[index].color} animate-pulse`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm">Career Journey</span>
                  </div>
                  <div className="text-white font-semibold">
                    <span className="text-xl sm:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {new Date().getFullYear() - 2018}+
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm ml-1">years</span>
                  </div>
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