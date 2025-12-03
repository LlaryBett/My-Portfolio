import { useState } from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink, Calendar, Users, Code, X, Folder, ChevronRight, Star } from 'lucide-react';
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
    fullDescription: "An advanced booking platform for public service vehicles (PSVs) built with the MERN stack. Passengers can browse available vehicles, view routes, select seats, and make secure bookings. The system includes real-time seat availability tracking, booking history, and automated notifications. The admin dashboard allows fleet management, route scheduling, fare management, and role-based access. Implements secure JWT authentication, RESTful APIs, integrated payments, and a responsive UI for a smooth travel experience.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Redux Persist"],
    image: ProjectImage1,
    github: "https://github.com/LlaryBett/Automated-PSV-Booking-System",
    demo: "https://blue-tree-08931290f.6.azurestaticapps.net/",
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
    learnings: "Enhanced knowledge in real-time data handling, scalable booking workflows, and payment system integration",
    featured: true
  },
  {
    id: 2,
    name: "E-Shop",
    shortDesc: "Full-featured online store with cart, checkout, and admin dashboard",
    fullDescription: "A modern e-commerce platform with product browsing, search, filtering, cart management, checkout, order tracking, and an admin dashboard. Built with React, Express, MongoDB, and Stripe for payments. Features user authentication, role-based access, and responsive UI with Tailwind CSS.",
    technologies: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS", "M-pesa", "JWT", "Cloudinary", "Brevo"],
    image: ProjectImage2,
    github: "https://github.com/LlaryBett/E-Shop",
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
    learnings: "Deepened knowledge of full-stack development, JWT authentication, and integrating payments with Stripe",
    featured: false
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
    learnings: "Advanced component composition, state management, and performance optimization in React",
    featured: false
  },
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
    learnings: "Deep understanding of collaborative systems, AI API integration, and scalable real-time architectures",
    featured: true
  },
  {
    id: 5,
    name: "E-commerce Dashboard",
    shortDesc: "Analytics dashboard for online stores",
    fullDescription: "Comprehensive e-commerce analytics dashboard with sales tracking, inventory management, and customer insights. Features interactive charts, real-time data updates, and export functionality.",
    technologies: ["MongoDB", "Mongoose", "Express.js", "React", "Node.js", "JWT"],
    image: ProjectImage5,
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
    learnings: "Advanced D3.js techniques and Laravel best practices",
    featured: false
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
    learnings: "Deep learning model integration, image processing optimization, and scalable file handling",
    featured: true
  }
];

// Helper components for different card types
const FullWidthCard = ({ project }) => (
  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 min-h-0">
    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
      {/* Left Column: Image */}
      <div className="relative overflow-hidden rounded-xl h-48 sm:h-56 md:h-64 lg:h-72">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        
        {/* Featured Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-white/10 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <Star className="w-2.5 h-2.5" /> Featured
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-gray-300 text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      {/* Right Column: Content */}
      <div className="flex flex-col justify-between p-1 sm:p-2">
        <div>
          <div className="mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm text-gray-300 font-medium flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-2 line-clamp-2">
              {project.name}
            </h3>
            <p className="text-gray-400 mt-2 leading-relaxed text-xs sm:text-sm">
              {project.shortDesc}
            </p>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start gap-1.5 text-xs sm:text-sm text-gray-300">
                  <ChevronRight className="w-3 h-3 text-white mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-1.5">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 text-white text-xs rounded-md border border-white/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 pt-3 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="text-base font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors border border-blue-500"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span className="text-base font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
    
    {/* Accent Border */}
    <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-white/20" />
  </div>
);

FullWidthCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};

const GridCard = ({ project }) => (
  <div className="group relative p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:scale-102 transition-all duration-500 h-full flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden h-32 sm:h-36 rounded-lg mb-3">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
      
      {/* Status Badge */}
      <div className="absolute top-2 right-2">
        <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
          project.status === 'Completed' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
          {project.status}
        </span>
      </div>
    </div>
    
    {/* Content */}
    <div className="flex-1">
      <div className="mb-2">
        <span className="text-xs sm:text-sm text-purple-400 font-medium">{project.category}</span>
        <h3 className="text-base sm:text-lg font-bold text-white mt-1 line-clamp-2">
          {project.name}
        </h3>
      </div>
      
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
        {project.shortDesc}
      </p>
      
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 bg-white/10 text-white text-xs sm:text-sm rounded border border-white/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 py-0.5 bg-gray-700/50 text-gray-400 text-xs sm:text-sm rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
    
    {/* Footer - Buttons Only */}
    <div className="flex gap-2 pt-3 border-t border-white/10">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <Github className="w-5 h-5 mr-2" />
        <span className="text-base font-medium">Code</span>
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors border border-blue-500"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        <span className="text-base font-medium">Live Demo</span>
      </a>
    </div>
    
    {/* Accent Border */}
    <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20" />
  </div>
);

GridCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Organize projects into groups of 3 (full width + 2 grid)
  const projectGroups = [];
  for (let i = 0; i < projects.length; i += 3) {
    const group = projects.slice(i, i + 3);
    projectGroups.push(group);
  }

  return (
    <section id="projects" className="bg-gray-900 relative overflow-hidden">
      <div className="py-8 sm:py-12 lg:py-16 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
          {/* Section Header - More Compact */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Folder className="mr-1 sm:mr-1.5" size={12} />
              Featured Work
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              My{' '}
              <span className="text-white">
                Projects
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Innovative solutions spanning full-stack development, mobile applications, 
              and cutting-edge web technologies
            </p>
          </div>

          {/* Stats - More Compact */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-1.5">
              <Code className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{projects.filter(p => p.status === 'Completed').length} Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">{projects.filter(p => p.teamSize !== 'Solo Project').length} Team Projects</span>
            </div>
          </div>

          {/* Projects Layout */}
          <div className="space-y-8 sm:space-y-10">
            {projectGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-6 sm:space-y-8">
                {/* First project in group = Full Width */}
                {group[0] && (
                  <div className="h-fit max-h-[85vh] overflow-hidden">
                    <FullWidthCard 
                      project={group[0]} 
                    />
                  </div>
                )}
                
                {/* Next two projects = Grid */}
                {group.length > 1 && (
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {group.slice(1).map((project) => (
                      <GridCard 
                        key={project.id} 
                        project={project} 
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Project Portfolio Summary - More Compact */}
          <div className="mt-8 sm:mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex items-center space-x-1.5">
                <div className="flex space-x-0.5">
                  {projects.slice(0, 6).map((_, index) => (
                    <div
                      key={index}
                      className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-gray-300 text-xs sm:text-sm">Project Portfolio</span>
              </div>
              <div className="text-white font-bold">
                <span className="text-lg sm:text-xl text-white">
                  {projects.length}+
                </span>
                <span className="text-gray-400 text-xs sm:text-sm ml-1">projects completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal - More Compact */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-xl sm:rounded-2xl max-w-2xl sm:max-w-3xl w-full max-h-[85vh] overflow-y-auto transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalSlide 0.3s ease-out'
            }}
          >
            <div className="relative">
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 line-clamp-2">{selectedProject.name}</h2>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Overview</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                      {selectedProject.fullDescription}
                    </p>
                    
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Key Highlights</h4>
                    <ul className="space-y-1.5 mb-4">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-1.5 text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-white/10`}></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Technical Details</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-1.5">Technology Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs sm:text-sm font-medium px-2 py-1 rounded-md bg-white/10 text-white border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-1">Challenges</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{selectedProject.challenges}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-1">Key Learnings</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">{selectedProject.learnings}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/20"
                      >
                        <Github className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4" /> Code
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-white text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4" /> Demo
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
            transform: scale(0.8) translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        /* Ensure full-width cards don't exceed viewport */
        @media (min-height: 600px) {
          .max-h-[85vh] {
            max-height: 75vh;
          }
        }
        
        @media (min-height: 800px) {
          .max-h-[85vh] {
            max-height: 65vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;