import  { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Code, ArrowRight, X } from 'lucide-react';

// Mock project data with more comprehensive information
const projects = [
  {
    id: 1,
    name: "Employee Management System",
    shortDesc: "Full-stack CRUD application for employee management",
    fullDescription: "A comprehensive employee management system built with React and Node.js. Features include employee registration, role-based authentication, performance tracking, and real-time dashboard analytics. Implements RESTful APIs with JWT authentication and data visualization charts.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/employee-ms",
    demo: "https://employee-ms-demo.com",
    status: "Completed",
    duration: "3 months",
    teamSize: "Solo Project",
    category: "Full-Stack",
    year: "2024",
    highlights: ["JWT Authentication", "Real-time Analytics", "Role-based Access", "RESTful APIs"],
    accentColor: "from-purple-500 to-pink-500",
    challenges: "Implementing real-time updates and complex role-based permissions",
    learnings: "Gained expertise in JWT authentication and MongoDB aggregation pipelines"
  },
  {
    id: 2,
    name: "Interactive Blog Platform",
    shortDesc: "Modern blogging platform with rich text editor",
    fullDescription: "A dynamic blog application featuring rich text editing, comment system, user authentication, and social sharing. Built with React and Firebase, offering real-time collaboration and markdown support with custom themes.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Markdown", "Firestore"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/blog-platform",
    demo: "https://blog-platform-demo.com",
    status: "In Progress",
    duration: "2 months",
    teamSize: "2 developers",
    category: "Frontend",
    year: "2024",
    highlights: ["Rich Text Editor", "Real-time Comments", "Social Sharing", "Custom Themes"],
    accentColor: "from-blue-400 to-teal-400",
    challenges: "Implementing a custom rich text editor with collaborative features",
    learnings: "Mastered Firebase real-time database and complex state management"
  },
  {
    id: 3,
    name: "Book Library Management",
    shortDesc: "Digital library system with advanced search",
    fullDescription: "A sophisticated library management system built with Next.js and TypeScript. Features include book cataloging, user management, reservation system, and advanced search with filters. Integrated with external APIs for book metadata.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/library-ms",
    demo: "https://library-ms-demo.com",
    status: "Completed",
    duration: "4 months",
    teamSize: "3 developers",
    category: "Full-Stack",
    year: "2023",
    highlights: ["Advanced Search", "Payment Integration", "API Integration", "Admin Dashboard"],
    accentColor: "from-amber-500 to-red-500",
    challenges: "Integrating multiple external APIs and handling complex search algorithms",
    learnings: "Advanced TypeScript patterns and database optimization techniques"
  },
  {
    id: 4,
    name: "Real-time Chat Application",
    shortDesc: "WebSocket-based messaging platform",
    fullDescription: "A real-time messaging application with group chats, file sharing, and voice messages. Built with Socket.io for real-time communication, featuring end-to-end encryption and media sharing capabilities.",
    technologies: ["React", "Socket.io", "Node.js", "Redis", "AWS S3"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/chat-app",
    demo: "https://chat-app-demo.com",
    status: "Completed",
    duration: "2 months",
    teamSize: "Solo Project",
    category: "Full-Stack",
    year: "2024",
    highlights: ["Real-time Messaging", "File Sharing", "Voice Messages", "Group Chats"],
    accentColor: "from-green-400 to-blue-500",
    challenges: "Implementing efficient real-time communication with scalable architecture",
    learnings: "WebSocket protocols and real-time data synchronization"
  },
  {
    id: 5,
    name: "E-commerce Dashboard",
    shortDesc: "Analytics dashboard for online stores",
    fullDescription: "Comprehensive e-commerce analytics dashboard with sales tracking, inventory management, and customer insights. Features interactive charts, real-time data updates, and export functionality.",
    technologies: ["Vue.js", "D3.js", "Laravel", "MySQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/ecommerce-dashboard",
    demo: "https://dashboard-demo.com",
    status: "Completed",
    duration: "3 months",
    teamSize: "4 developers",
    category: "Full-Stack",
    year: "2023",
    highlights: ["Data Visualization", "Real-time Updates", "Export Features", "Inventory Management"],
    accentColor: "from-indigo-500 to-purple-600",
    challenges: "Creating complex data visualizations with optimal performance",
    learnings: "Advanced D3.js techniques and Laravel best practices"
  },
  {
    id: 6,
    name: "Mobile Fitness Tracker",
    shortDesc: "Cross-platform fitness tracking app",
    fullDescription: "A comprehensive fitness tracking application built with React Native. Features workout logging, progress tracking, social challenges, and integration with wearable devices.",
    technologies: ["React Native", "Redux", "SQLite", "REST APIs", "Push Notifications"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    github: "https://github.com/YouafKhan1/fitness-tracker",
    demo: "https://fitness-app-demo.com",
    status: "In Progress",
    duration: "5 months",
    teamSize: "3 developers",
    category: "Mobile",
    year: "2024",
    highlights: ["Wearable Integration", "Social Features", "Offline Support", "Push Notifications"],
    accentColor: "from-pink-500 to-rose-500",
    challenges: "Integrating with multiple wearable device APIs and offline synchronization",
    learnings: "Mobile development patterns and device integration techniques"
  }
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative py-24 bg-gray-950 overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions spanning full-stack development, mobile applications, 
            and cutting-edge web technologies. Each project represents a unique challenge and learning experience.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Code className="text-purple-400 w-4 h-4" />
              <span>{projects.length} Projects</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 blur-lg transition-all duration-300 group-hover:opacity-75"></div>
              
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                      {project.name}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {project.shortDesc}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${project.accentColor} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-700 text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r ${project.accentColor} text-white text-sm font-medium transition-all duration-300 hover:scale-105`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2 w-4 h-4" /> Code
                    </a>
                    <button
                      className="flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 text-sm font-medium transition-all duration-300 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <ArrowRight className="mr-2 w-4 h-4" /> Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'modalSlide 0.3s ease-out'
              }}
            >
              <div className="relative">
                {/* Modal Header */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {selectedProject.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> {selectedProject.teamSize}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedProject.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-400">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.accentColor}`}></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Technical Details</h3>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`text-sm font-medium px-3 py-1 rounded-lg bg-gradient-to-r ${selectedProject.accentColor} text-white`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Challenges</h4>
                        <p className="text-gray-300 text-sm">{selectedProject.challenges}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Key Learnings</h4>
                        <p className="text-gray-300 text-sm">{selectedProject.learnings}</p>
                      </div>
                      
                      <div className="flex gap-4">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r ${selectedProject.accentColor} text-white font-medium transition-all duration-300 hover:scale-105`}
                        >
                          <Github className="mr-2 w-4 h-4" /> View Code
                        </a>
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 font-medium transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style >{`
        @keyframes modalSlide {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;