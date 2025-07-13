'use client';
import React, { useState, useEffect } from 'react';
import TiltedCard from './TiltedCard';
import Navbar from './Navbar';

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e4ded7] overflow-hidden relative">
      {/* Social Links and Resume - Desktop */}
      <div className="hidden md:block absolute top-10 left-14 z-10">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          Resume
        </a>
      </div>
      <div className="hidden md:flex absolute top-10 right-14 z-10 space-x-16">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile Social Links */}
      <div className="md:hidden flex justify-center items-center space-x-8 pt-6 z-10 relative">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-base font-medium"
        >
          Resume
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-base font-medium"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-base font-medium"
        >
          LinkedIn
        </a>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-8 md:pt-20">
        {/* Fixed Center Nav */}
        <div className="mb-8 md:mb-12">
          <Navbar />
        </div>

        {/* Name Block */}
        <div className="relative z-10 text-center mb-8 md:mb-6 w-full max-w-[90vw]">
          <h1 className="text-[3.5rem] xs:text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-[-0.04em] leading-[0.85] transform scale-y-[1.4] font-sans">
            <span className="block bg-gradient-to-r from-[#e4ded7] via-[#b5afa7] to-[#e4ded7] bg-clip-text text-transparent">
              NIRMEET
            </span>
            <span className="block bg-gradient-to-r from-[#b5afa7] via-[#e4ded7] to-[#b5afa7] bg-clip-text text-transparent relative z-10">
              PARMAR
            </span>
          </h1>
        </div>

        {/* Image */}
        <div className="z-20 mb-8 md:mb-12">
          <TiltedCard
            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
            imageHeight="220px"
            imageWidth="220px"
          />
        </div>

        {/* Skills Section - Mobile Only */}
        <div className="md:hidden w-full max-w-4xl px-4 mb-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="text-[#b5afa7] font-mono text-lg tracking-wide">
              <p className="mb-1">Full-Stack Developer</p>
              <p>Designer</p>
            </div>
            <div className="text-[#b5afa7] font-mono text-lg tracking-wide">
              <p className="mb-1">Competitive Programmer</p>
              <p>DSA Enthusiast</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Skills - Bottom Left */}
      <div className="hidden md:block absolute bottom-10 left-6 lg:bottom-12 lg:left-10 text-left text-[#b5afa7] font-mono text-lg sm:text-xl md:text-2xl tracking-wide animate-fadeIn">
        <p className="mb-1">Full-Stack Developer</p>
        <p>Designer</p>
      </div>

      {/* Desktop Skills - Bottom Right */}
      <div className="hidden md:block absolute bottom-10 right-6 lg:bottom-12 lg:right-10 text-right text-[#b5afa7] font-mono text-lg sm:text-xl md:text-2xl tracking-wide animate-fadeIn">
        <p className="mb-1">Competitive Programmer</p>
        <p>DSA Enthusiast</p>
      </div>
    </div>
  );
};

export default LandingPage;