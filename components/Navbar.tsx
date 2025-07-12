'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverState {
  isVisible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
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

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    // Add smooth scroll logic here when sections are implemented
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
      className="fixed top-6 w-full z-50 px-8"
    >
      <div className="grid grid-cols-3 items-center max-w-7xl mx-auto">
        {/* Left - Resume */}
        <div className="flex justify-start ">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-sm font-medium"
          >
            Resume
          </a>
        </div>

        {/* Center - Main Navigation */}
        <div className="flex justify-center">
          <div 
            className="relative bg-black/40 backdrop-blur-md border border-[#e4ded7] rounded-lg px-1 py-1 shadow-lg"
            style={{
              backdropFilter: 'blur(9px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div ref={containerRef} className="relative flex items-center space-x-1">
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
                  className={`
                    relative px-6 py-4 rounded-xl font-mono text-sm font-medium tracking-wide
                    transition-colors duration-300 ease-out z-20
                    ${hoveredId === item.id ? 'text-[#0b0c10]' : 'text-[#e4ded7]'}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right - GitHub and LinkedIn */}
        <div className="flex justify-end items-center space-x-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;