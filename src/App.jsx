import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LightRays from './components/LightRays';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio...
        </motion.h1>
      </div>
    </motion.div>
  );

  // Layout component that includes Navbar, LightRays background, content, and Footer
  const PageLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col relative bg-gray-900">
      {/* LightRays Background - Applies to all pages */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="hero-light-rays"
        />
      </div>
      
      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/30 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );

  PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Home page with ONLY Hero
  const HomePage = () => (
    <PageLayout>
      <Hero />
    </PageLayout>
  );

  // Individual pages
  const AboutPage = () => (
    <PageLayout>
      <About />
    </PageLayout>
  );

  const SkillsPage = () => (
    <PageLayout>
      <Skills />
    </PageLayout>
  );

  const ProjectsPage = () => (
    <PageLayout>
      <Projects />
    </PageLayout>
  );

  const ContactPage = () => (
    <PageLayout>
      <Contact />
    </PageLayout>
  );

  return (
    <div className="text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      )}
    </div>
  );
}

export default App;