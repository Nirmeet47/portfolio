'use client';
import React, { useState, useEffect } from 'react';
import TiltedCard from './TiltedCard'; // Adjust path if needed

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e4ded7] overflow-hidden relative flex flex-col items-center pt-40 pb-16">

      {/* Name Block */}
      <div className="relative z-10 text-center px-4 w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        <h1 className="text-[5.5rem] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[8.5rem] font-black tracking-[-0.04em] leading-[0.85] transform scale-y-[1.4] font-sans">
          <span className="block bg-gradient-to-r from-[#e4ded7] via-[#b5afa7] to-[#e4ded7] bg-clip-text text-transparent">
            NIRMEET
          </span>
          <span className="block bg-gradient-to-r from-[#b5afa7] via-[#e4ded7] to-[#b5afa7] bg-clip-text text-transparent relative z-10">
            PARMAR
          </span>
        </h1>
      </div>

      {/* Image – perfectly aligned to just touch PARMAR */}
      <div className="z-20 mt-1.5">
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
          imageHeight="280px"
          imageWidth="280px"
        />
      </div>

      {/* Bottom Skills - Left */}
      <div className="absolute bottom-10 left-6 sm:bottom-12 sm:left-10 text-left text-[#b5afa7] font-mono text-lg sm:text-xl md:text-2xl tracking-wide animate-fadeIn">
        <p className="mb-1">Full-Stack Developer</p>
        <p>Designer</p>
      </div>

      {/* Bottom Skills - Right */}
      <div className="absolute bottom-10 right-6 sm:bottom-12 sm:right-10 text-right text-[#b5afa7] font-mono text-lg sm:text-xl md:text-2xl tracking-wide animate-fadeIn">
        <p className="mb-1">Competitive Programmer</p>
        <p>DSA Enthusiast</p>
      </div>
    </div>
  );
};

export default LandingPage;
