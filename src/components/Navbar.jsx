import  { useState, useEffect } from 'react'
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Handle scroll progress and auto-close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Auto-close mobile menu on scroll
      if (isOpen && scrollTop > 50) {
        setIsOpen(false)
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'service', 'project', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "#home", icon: Home, label: "Home", section: "home" },
    { href: "#about", icon: User, label: "About Me", section: "about" },
    { href: "#skills", icon: Briefcase, label: "Skills & Experince", section: "skills & Experince" },
    { href: "#project", icon: FolderOpen, label: "Projects", section: "project" },
    { href: "#contact", icon: Mail, label: "Contact", section: "contact" }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className='bg-black text-white px-8 md:px-16 lg:px-24 border-b border-gray-600 sticky top-0 z-40 relative'>
        <div className='container py-2 flex justify-between items-center'>
          <div className='flex flex-col'>
            <div className='text-3xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight'>
              Yousof
            </div>
            <span className='text-xs font-medium text-gray-300 tracking-widest uppercase opacity-80'>
              Software Engineer
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            {navItems.map(({ href, icon: Icon, label, section }) => (
              <a 
                key={section}
                href={href} 
                onClick={(e) => handleNavClick(e, href)}
                className={`group relative hover:text-white inline-flex items-center gap-2 py-2 px-1 transition-all duration-300 ${
                  activeSection === section ? 'text-white' : 'text-gray-400'
                }`}
                aria-current={activeSection === section ? 'page' : undefined}
                aria-label={`Navigate to ${label} section`}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 group-hover:rotate-12 ${
                    activeSection === section ? 'text-blue-400' : ''
                  }`} 
                />
                <span className="relative">
                  {label}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </span>
              </a>
            ))}
          </div>
          
          <button 
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 px-4 py-2 rounded-full
            relative overflow-hidden group'
            aria-label="Connect with me"
          >
            <span className="relative z-10">Connect Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className='md:hidden text-white hover:text-gray-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Scroll Progress Indicator positioned on border bottom */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent">
          <div 
            className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Mobile Sidebar Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={toggleMenu}
          aria-hidden="true"
        />
        
        {/* Mobile Sidebar */}
        <div 
          id="mobile-menu"
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-600 transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className='p-6'>
            <div className='flex justify-between items-center mb-8'>
              <h2 id="mobile-menu-title" className='text-xl font-bold'>Menu</h2>
              <button 
                onClick={toggleMenu}
                className='text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800'
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className='space-y-2' role="navigation">
              {navItems.map(({ href, icon: Icon, label, section }) => (
                <a 
                  key={section}
                  href={href} 
                  onClick={(e) => handleNavClick(e, href)}
                  className={`group block hover:text-white flex items-center gap-3 py-3 px-4 rounded-lg border-b border-gray-700 transition-all duration-300 hover:bg-gray-800 ${
                    activeSection === section ? 'text-white bg-gray-800 border-blue-500' : 'text-gray-400'
                  }`}
                  aria-current={activeSection === section ? 'page' : undefined}
                  aria-label={`Navigate to ${label} section`}
                >
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 group-hover:scale-110 ${
                      activeSection === section ? 'text-blue-400' : ''
                    }`} 
                  />
                  <span className="flex-1">{label}</span>
                  {activeSection === section && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  )}
                </a>
              ))}
              
              <button 
                className='w-full bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 px-4 py-3 rounded-full mt-8
                relative overflow-hidden group'
                aria-label="Connect with me"
              >
                <span className="relative z-10">Connect Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </nav>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar