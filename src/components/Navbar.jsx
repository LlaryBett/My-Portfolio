import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BiBriefcase } from 'react-icons/bi'
import { FiFolder } from 'react-icons/fi'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activePage, setActivePage] = useState('/')
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Update active page based on current route
  useEffect(() => {
    setActivePage(location.pathname)
  }, [location.pathname])

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
    { path: "/", icon: AiOutlineHome, label: "Home" },
    { path: "/about", icon: AiOutlineUser, label: "About Me" },
    { path: "/skills", icon: BiBriefcase, label: "Skills & Experience" },
    { path: "/projects", icon: FiFolder, label: "Projects" },
    { path: "/contact", icon: AiOutlineMail, label: "Contact" }
  ]

  const handleNavClick = (path) => {
    setIsOpen(false)
    navigate(path)
  }

  const handleConnectMe = () => {
    setIsOpen(false)
    navigate('/contact')
  }

  return (
    <>
      <nav className='bg-black text-white px-8 md:px-16 lg:px-24 border-b border-gray-600 fixed top-0 left-0 right-0 z-40'>
        <div className='container py-2 flex justify-between items-center'>
          {/* Logo */}
          <Link 
            to="/" 
            className='flex flex-col'
            onClick={() => setActivePage('/')}
          >
            <div className='text-3xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight'>
              Bett
            </div>
            <span className='text-xs font-medium text-gray-300 tracking-widest uppercase opacity-80'>
              Software Engineer
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            {navItems.map(({ path, icon: Icon, label }) => (
              <button 
                key={path}
                onClick={() => handleNavClick(path)}
                className={`group relative hover:text-white inline-flex items-center gap-2 py-2 px-1 transition-all duration-300 ${
                  activePage === path ? 'text-white' : 'text-gray-400'
                }`}
                aria-current={activePage === path ? 'page' : undefined}
                aria-label={`Navigate to ${label} page`}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 group-hover:rotate-12 ${
                    activePage === path ? 'text-blue-400' : ''
                  }`} 
                />
                <span className="relative">
                  {label}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                    activePage === path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </span>
              </button>
            ))}
          </div>
          
          <button 
            className='bg-blue-500 text-white hidden md:inline
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-600 px-6 py-2.5 rounded-full font-medium'
            aria-label="Connect with me"
            onClick={handleConnectMe}
          >
            <span>Connect Me</span>
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
              <HiMenuAlt3 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <IoCloseOutline 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} 
              />
            </div>
          </button>
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
                <IoCloseOutline size={24} />
              </button>
            </div>
            
            <nav className='space-y-2' role="navigation">
              {navItems.map(({ path, icon: Icon, label }) => (
                <button 
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`group w-full text-left hover:text-white flex items-center gap-3 py-3 px-4 rounded-lg border-b border-gray-700 transition-all duration-300 hover:bg-gray-800 ${
                    activePage === path ? 'text-white bg-gray-800 border-blue-500' : 'text-gray-400'
                  }`}
                  aria-current={activePage === path ? 'page' : undefined}
                  aria-label={`Navigate to ${label} page`}
                >
                  <Icon 
                    size={20} 
                    className={`transition-all duration-300 group-hover:scale-110 ${
                      activePage === path ? 'text-blue-400' : ''
                    }`} 
                  />
                  <span className="flex-1">{label}</span>
                  {activePage === path && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
              
              <button 
                className='w-full bg-blue-500 text-white
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-600 px-4 py-3 rounded-full mt-8 font-medium'
                aria-label="Connect with me"
                onClick={handleConnectMe}
              >
                <span>Connect Me</span>
              </button>
            </nav>
          </div>
        </div>
      </nav>
      
      {/* Add padding to account for fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar