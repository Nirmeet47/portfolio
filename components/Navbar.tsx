'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverState {
  isVisible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoverState, setHoverState] = useState<HoverState>({
    isVisible: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Map navbar ids to actual component ids/classes
    const sectionMap: { [key: string]: string } = {
      'about': 'about-section',
      'projects': 'projects-section', 
      'connect': 'contact-section'
    };

    const targetId = sectionMap[sectionId] || sectionId;
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-section', 'projects-section', 'contact-section'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      if (scrollPosition < 200) {
        setActiveSection('home');
        return;
      }

      for (const sectionId of sections.slice(1)) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Map back to navbar id
            const navId = sectionId === 'about-section' ? 'about' : 
                         sectionId === 'projects-section' ? 'projects' :
                         sectionId === 'contact-section' ? 'connect' : sectionId;
            setActiveSection(navId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    if (!containerRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setHoveredId(id);
    setHoverState({
      isVisible: true,
      x: rect.left - containerRect.left,
      y: rect.top - containerRect.top,
      width: rect.width,
      height: rect.height
    });
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setHoverState(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 px-2 w-full max-w-[calc(100vw-1rem)] md:max-w-none md:w-auto"
    >
      <div 
        className="relative bg-black/40 backdrop-blur-md border border-[#e4ded7] rounded-lg px-1 py-1 shadow-lg mx-auto w-fit"
        style={{
          backdropFilter: 'blur(9px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div ref={containerRef} className="relative flex items-center space-x-0.5 md:space-x-1">
          <AnimatePresence>
            {hoverState.isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: hoverState.x,
                  y: hoverState.y,
                  width: hoverState.width,
                  height: hoverState.height
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                className="absolute z-10 pointer-events-none border bg-[#e4ded7] rounded-md"
                style={{ boxShadow: '0 2px 8px rgba(228, 222, 215, 0.3)' }}
              />
            )}
          </AnimatePresence>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={(e) => handleMouseEnter(e, item.id)}
              onMouseLeave={handleMouseLeave}
              className={`cursor-pointer relative px-3 py-3 md:px-6 md:py-4 rounded-xl font-mono text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 ease-out z-20
                ${hoveredId === item.id ? 'text-[#0b0c10]' : 
                  activeSection === item.id ? 'text-[#e4ded7] opacity-100' : 'text-[#e4ded7] opacity-70'}`}
            >
              <span className="relative z-10 whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;