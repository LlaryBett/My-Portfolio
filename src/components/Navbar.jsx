import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
      <nav className='bg-gray-900/95 backdrop-blur-lg text-white px-4 sm:px-8 md:px-16 lg:px-24 border-b border-gray-800 fixed top-0 left-0 right-0 z-50'>
        <div className='max-w-8xl mx-auto py-3 flex justify-between items-center'>
          {/* Logo */}
          <Link 
            to="/" 
            className='flex flex-col group'
            onClick={() => setActivePage('/')}
          >
            <motion.div
              className='text-2xl sm:text-3xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Bett
            </motion.div>
            <span className='text-xs font-medium text-gray-400 tracking-widest uppercase opacity-90 group-hover:text-gray-300 transition-colors duration-300'>
              Software Engineer
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map(({ path, icon: Icon, label }) => (
              <motion.button 
                key={path}
                onClick={() => handleNavClick(path)}
                className={`group relative hover:text-white inline-flex items-center gap-2 py-2 px-1 transition-all duration-300 ${
                  activePage === path ? 'text-white' : 'text-gray-400'
                }`}
                aria-current={activePage === path ? 'page' : undefined}
                aria-label={`Navigate to ${label} page`}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 group-hover:rotate-12 ${
                    activePage === path ? 'text-blue-400' : 'text-gray-500'
                  }`} 
                />
                <span className="relative font-medium">
                  {label}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                    activePage === path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </span>
              </motion.button>
            ))}
          </div>
          
          <motion.button 
            className='bg-gradient-to-r from-blue-500 to-purple-600 text-white hidden md:flex items-center
            transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-purple-700 px-6 py-2.5 rounded-full font-semibold'
            aria-label="Connect with me"
            onClick={handleConnectMe}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Connect Me</span>
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            className='md:hidden text-white hover:text-gray-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800'
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </div>
        
        {/* Mobile Sidebar Overlay */}
        <motion.div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
          onClick={toggleMenu}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
        />
        
        {/* Mobile Sidebar */}
        <motion.div 
          id="mobile-menu"
          className={`md:hidden fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
        >
          <div className='p-6 h-full flex flex-col'>
            <div className='flex justify-between items-center mb-8'>
              <h2 id="mobile-menu-title" className='text-xl font-bold text-white'>Navigation</h2>
              <motion.button 
                onClick={toggleMenu}
                className='text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800'
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoCloseOutline size={24} />
              </motion.button>
            </div>
            
            <nav className='space-y-3 flex-1' role="navigation">
              {navItems.map(({ path, icon: Icon, label }) => (
                <motion.button 
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`group w-full text-left hover:text-white flex items-center gap-4 py-4 px-4 rounded-xl transition-all duration-300 hover:bg-gray-800/50 ${
                    activePage === path ? 'text-white bg-blue-500/20 border border-blue-500/30' : 'text-gray-400'
                  }`}
                  aria-current={activePage === path ? 'page' : undefined}
                  aria-label={`Navigate to ${label} page`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon 
                    size={22} 
                    className={`transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${
                      activePage === path ? 'text-blue-400' : 'text-gray-500'
                    }`} 
                  />
                  <span className="flex-1 font-medium text-base">{label}</span>
                  {activePage === path && (
                    <motion.div 
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <div className='pt-6 border-t border-gray-800'>
              <motion.button 
                className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white
                transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-purple-700 px-4 py-4 rounded-xl font-semibold text-base'
                aria-label="Connect with me"
                onClick={handleConnectMe}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Connect Me</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </nav>
      
      {/* Add padding to account for fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar