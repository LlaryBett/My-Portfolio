import { useState } from 'react';
import { Github, ExternalLink, Calendar, Users, Code, X, Folder } from 'lucide-react';
import ProjectImage1 from '../assets/Screenshot 2025-08-28 212920.png';
import ProjectImage3 from '../assets/Screenshot 2025-08-11 155008.png';
import ProjectImage5 from '../assets/Screenshot 2025-08-11 154917.png';
import ProjectImage6 from '../assets/Screenshot 2025-08-11 154335.png';
import ProjectImage2 from '../assets/Screenshot 2025-08-28 134703.png';
import ProjectImage4 from '../assets/Screenshot 2025-08-28 140855.png';


const projects = [

   {
  id: 1,
  name: "Automated Public Service Vehicle Booking System",
  shortDesc: "A full-stack MERN application for online PSV seat booking and management",
  fullDescription:
    "An advanced booking platform for public service vehicles (PSVs) built with the MERN stack. Passengers can browse available vehicles, view routes, select seats, and make secure bookings. The system includes real-time seat availability tracking, booking history, and automated notifications. The admin dashboard allows fleet management, route scheduling, fare management, and role-based access. Implements secure JWT authentication, RESTful APIs, integrated payments, and a responsive UI for a smooth travel experience.",
  technologies: ["React", "TypeScript", "Redux Toolkit", "Redux Persist"],
  image: ProjectImage1, // <-- use the imported variable here
  github: "https://github.com/LlaryBett/Full-Stack-Freshmart-Grocery-Store", // update this if PSV project has its own repo
  demo: "https://blue-tree-08931290f.6.azurestaticapps.net/", // update this if deployed differently
  status: "Completed",
  duration: "3 months",
  teamSize: "5 Developers",
  category: "Full-Stack",
  year: "2025",
  highlights: [
    "Secure JWT Authentication",
    "Real-time Seat Availability",
    "Route & Fleet Management",
    "Fare Calculation & Online Payments",
    "Role-based Access Control"
  ],
  accentColor: "from-blue-500 to-indigo-500",
  challenges: "Implementing real-time seat availability updates, handling concurrent bookings, and integrating secure payments",
  learnings: "Enhanced knowledge in real-time data handling, scalable booking workflows, and payment system integration"
}
,



  {
  id: 2,
  name: "E-Shop",
  shortDesc: "Full-featured online store with cart, checkout, and admin dashboard",
  fullDescription: "A modern e-commerce platform with product browsing, search, filtering, cart management, checkout, order tracking, and an admin dashboard. Built with React, Express, MongoDB, and Stripe for payments. Features user authentication, role-based access, and responsive UI with Tailwind CSS.",
  technologies: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS", "M-pesa", "JWT","Cloudinary" ,"Brevo"],
  image: ProjectImage2,
  github: "https://github.com/LlaryBett/Automated-PSV-Booking-System",
  demo: "https://e-shop-pwxx.vercel.app/",
  status: "Completed",
  duration: "2+ months",
  teamSize: "Solo",
  category: "Fullstack",
  year: "2025",
  highlights: [
    "Product Catalog with Categories & Brands",
    "Cart & Checkout Flow",
    "Secure JWT Authentication",
    "M-Pesa Payment Integration",
    "Admin Dashboard for Orders, Products, and Users",
    "Coupon & Review System"
  ],
  accentColor: "from-blue-400 to-teal-400",
  challenges: "Implementing secure checkout flow and syncing cart across frontend & backend",
  learnings: "Deepened knowledge of full-stack development, JWT authentication, and integrating payments with Stripe"
}
,
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
  name: "AI++ Pair Programming",
  shortDesc: "AI-assisted real-time coding companion",
  fullDescription: "An intelligent coding assistant that integrates seamlessly with a collaborative editor. It provides AI-powered code suggestions, debugging support, and context-aware explanations. Built with React, Node.js, and Socket.io, featuring real-time collaboration, role-based permissions, and AI-assisted fixes.",
  technologies: ["React", "Node.js", "Socket.io", "Firebase", "Grok Lamma API", "Monaco Editor"],
  image: ProjectImage4,
  github: "https://github.com/LlaryBett/AI-Pair-Programming-Application",
  demo: "https://ai-pair-programming-application.vercel.app/",
  status: "Completed",
  duration: "1 month",
  teamSize: "Solo Project",
  category: "Full-Stack / AI",
  year: "2025",
  highlights: ["Real-time Collaboration", "AI Code Suggestions", "Error Detection & Fixes", "Role-based Permissions"],
  accentColor: "from-purple-500 to-indigo-500",
  challenges: "Integrating real-time collaboration with AI-driven suggestions without latency issues",
  learnings: "Deep understanding of collaborative systems, AI API integration, and scalable real-time architectures"
}
,
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
    duration: "1 month",
    teamSize: "Solo Project",
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
  image: ProjectImage6,
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