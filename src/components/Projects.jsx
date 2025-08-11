import { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Code, X, Folder } from 'lucide-react';
import ProjectImage1 from '../assets/Screenshot 2025-07-08 163956.png';


const projects = [

   {
  id: 1,
  name: "Freshmart Grocery Store System",
  shortDesc: "Full-stack e-commerce application for online grocery shopping",
  fullDescription:
    "A feature-rich grocery store management system built with the MERN stack. Customers can browse products, search by categories, add items to the cart, and place orders securely. The admin dashboard allows inventory management, order tracking, and coupon management. Implements secure JWT authentication, role-based access, and RESTful APIs, with integrated payment and responsive UI for seamless shopping experiences.",
  technologies: ["MongoDB", "Mongoose", "Express.js", "React", "Node.js", "JWT", "Stripe", "Tailwind CSS"],
  image: ProjectImage1, // <-- use the imported variable here
  github: "https://github.com/LlaryBett/Full-Stack-Freshmart-Grocery-Store",
  demo: "https://full-stack-freshmart-grocery-store.vercel.app/",
  status: "Completed",
  duration: "1 month",
  teamSize: "Solo Project",
  category: "Full-Stack",
  year: "2024",
  highlights: [
    "Secure JWT Authentication",
    "Role-based Access Control",
    "Inventory & Order Management",
    "Coupon & Discount System",
    "Integrated Stripe Payments"
  ],
  accentColor: "from-green-500 to-lime-500",
  challenges: "Implementing secure payments, managing real-time inventory updates, and creating a user-friendly responsive UI",
  learnings: "Gained expertise in e-commerce workflows, payment gateway integration, and scalable full-stack application design"
},



  {
    id: 2,
    name: "Interactive Blog Platform",
    shortDesc: "Modern blogging platform with rich text editor",
    fullDescription: "A dynamic blog application featuring rich text editing, comment system, user authentication, and social sharing. Built with React and Firebase, offering real-time collaboration and markdown support with custom themes.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Markdown", "Firestore"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=600&h=400&fit=crop",
    github: "https://github.com/LlaryBett/Full-Stack-Freshmart-Grocery-Store",
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
  name: "Eduford University Portal",
  shortDesc: "Responsive university website with course and admission features",
  fullDescription: "A modern and responsive university portal for Eduford, designed to showcase courses, faculty, campus life, and admissions information. Built with React and Tailwind CSS, it features interactive course catalogs, an event calendar, student testimonials, and an admissions application form. Optimized for fast performance and accessibility across devices.",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Axios"],
  image: ProjectImage3,
  github: "https://github.com/LlaryBett/-Eduford-University-Website",
  demo: "https://eduford-university-website-psi.vercel.app/",
  status: "Completed",
  duration: "2 weeks",
  teamSize: "Solo Project",
  category: "Frontend",
  year: "2025",
  highlights: [
    "Responsive Design",
    "Interactive Course Catalog",
    "Admissions Form",
    "Event Calendar"
  ],
  accentColor: "from-blue-600 to-green-500",
  challenges: "Designing a visually appealing yet fully responsive layout that adapts to all screen sizes",
  learnings: "Advanced component composition, state management, and performance optimization in React"
}
,
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
    technologies: ["MongoDB", "Mongoose", "Express.js", "React", "Node.js", "JWT"],

    image:ProjectImage5,
    github: "https://github.com/LlaryBett/Smart-Inventory-Application",
    demo: "https://smart-inventory-application.vercel.app/",
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
  name: "Background Image Removal Application",
  shortDesc: "AI-powered tool for removing image backgrounds instantly",
  fullDescription: "An advanced background removal web application that uses AI and computer vision to detect and remove image backgrounds in seconds. Supports drag-and-drop uploads, batch processing, and high-resolution downloads. Includes features for replacing backgrounds with solid colors, gradients, or custom images.",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express", "TensorFlow.js", "Cloudinary API"],
  image: ProjectImage1, // Use the imported variable here
  github: "https://github.com/LlaryBett/Image-Background-removal-Application",
  demo: "https://image-background-removal-application.vercel.app/",
  status: "Completed",
  duration: "1 month",
  teamSize: "Solo Project",
  category: "Web Application",
  year: "2025",
  highlights: [
    "AI-powered background detection",
    "Batch processing support",
    "Custom background replacement",
    "High-resolution output"
  ],
  accentColor: "from-blue-500 to-indigo-500",
  challenges: "Optimizing AI models for fast processing without compromising quality, and handling large image uploads efficiently",
  learnings: "Deep learning model integration, image processing optimization, and scalable file handling"
}

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-gray-900 relative overflow-hidden">
      {/* Updated padding to match About section */}
      <div className="py-12 sm:py-16 lg:py-20 xl:py-28 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Header with matched spacing */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Folder className="mr-1 sm:mr-2" size={14} />
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Innovative solutions spanning full-stack development, mobile applications, 
              and cutting-edge web technologies
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6 sm:mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Code className="text-purple-400 w-4 h-4" />
              <span className="text-xs sm:text-sm">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-blue-400 w-4 h-4" />
              <span className="text-xs sm:text-sm">{projects.filter(p => p.status === 'Completed').length} Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-emerald-400 w-4 h-4" />
              <span className="text-xs sm:text-sm">{projects.filter(p => p.teamSize !== 'Solo Project').length} Team Projects</span>
            </div>
          </div>

          {/* Projects Grid - Compact Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-102 hover:-translate-y-1 transition-all duration-500 mx-2 sm:mx-0"
              >
                {/* Project Image - Compact */}
                <div className="relative overflow-hidden h-32 sm:h-40 rounded-lg mb-3 sm:mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs text-gray-300 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">{project.year}</span>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300 line-clamp-2">
                        {project.name}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-400">
                        {project.category}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1 flex-shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={12} className="mr-1 flex-shrink-0" />
                      <span className="truncate">{project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Compact Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Technology Stack - Compact */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r ${project.accentColor} text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Live Preview
                  </a>
                </div>

                {/* Progress Indicator */}
                <div className={`absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r ${project.accentColor} opacity-60 rounded-t-xl sm:rounded-t-2xl`} />
              </div>
            ))}
          </div>

          {/* Project Portfolio Summary */}
          <div className="mt-6 sm:mt-8 text-center px-2">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${project.accentColor} animate-pulse`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  ))}
                </div>
                <span className="text-gray-300 text-xs sm:text-sm">Project Portfolio</span>
              </div>
              <div className="text-white font-semibold">
                <span className="text-xl sm:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {projects.length}+
                </span>
                <span className="text-gray-400 text-xs sm:text-sm ml-1">projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal - EXACTLY THE SAME AS ORIGINAL */}
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
      
      <style>{`
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
    </section>
  );
};

export default Projects;