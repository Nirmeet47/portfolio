'use client';
import React from 'react';
import TiltedCard from './TiltedCard';
import Navbar from './Navbar';
import { motion, Variants } from 'framer-motion';  

const fadeSlide = (
  {
    direction = 'up',
    delay = 0,
    distance = 100,
  }: {
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    distance?: number;
  }
): Variants => {                                     
  const x = direction === 'left' ? -distance : direction === 'right' ?  distance : 0;
  const y = direction === 'up'   ?  distance : direction === 'down'  ? -distance : 0;

  return {
    hidden:  { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' },
    },
  };
};

const LandingPage: React.FC = () => {
  return (
    <div id="home-section" className="min-h-screen bg-[#0b0c10] text-[#e4ded7] overflow-hidden relative">

      {/* Resume from left */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeSlide({ direction: 'left', delay: 0.2, distance: 200 })}
        className="hidden md:block absolute top-10 left-14 z-10"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          Resume
        </a>
      </motion.div>

      {/* GitHub + LinkedIn from right */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeSlide({ direction: 'right', delay: 0.2, distance: 200 })}
        className="hidden md:flex absolute top-10 right-14 z-10 space-x-16"
      >
        <a
          href="https://github.com/Nirmeet47"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nirmeet-parmar-34a148300/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e4ded7] hover:text-[#e4ded7]/80 transition-colors duration-300 font-mono text-lg font-medium"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Mobile social links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeSlide({ direction: 'up', delay: 0.4 })}
        className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center space-x-10"
      >
        {['Resume', 'GitHub', 'LinkedIn'].map((text) => (
          <a
            key={text}
            href={
              text === 'Resume'
                ? '/resume.pdf'
                : text === 'GitHub'
                ? 'https://github.com'
                : 'https://linkedin.com'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b5afa7] hover:text-[#e4ded7] transition-colors duration-300 font-mono text-sm font-medium"
          >
            {text}
          </a>
        ))}
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-8 md:pt-20">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlide({ direction: 'up', delay: 0.8 })}
          className="pt-10 relative z-10 text-center mb-6 md:mb-6 w-full max-w-[90vw]"
        >
          <h1 className="text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-[-0.04em] leading-[0.85] transform scale-y-[1.4] font-sans">
            <span className="block bg-[#e4ded7]  bg-clip-text text-transparent">
              NIRMEET
            </span>
            <span className="block bg-[#e4ded7] bg-clip-text text-transparent relative z-10">
              PARMAR
            </span>
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlide({ direction: 'up', delay: 1.6 })}
          className="z-20 mb-6 md:mb-12"
        >
          <TiltedCard imageSrc="images/pfp.png" imageHeight="260px" imageWidth="260px" />
        </motion.div>

        {/* Mobile skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeSlide({ direction: 'up', delay: 2.2 })}
          className="md:hidden w-full max-w-4xl px-4 mb-8"
        >
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="text-[#e4ded7] font-mono text-base tracking-wide">
              <p className="mb-1">Full-Stack Developer</p>
              <p>Designer</p>
            </div>
            <div className="text-[#e4ded7] font-mono text-base tracking-wide">
              <p className="mb-1">Competitive Programmer</p>
              <p>DSA Enthusiast</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop skills (bottom) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeSlide({ direction: 'up', delay: 2.6 })}
        className="hidden md:flex justify-between absolute bottom-10 px-8 w-full text-[#e4ded7] font-mono text-lg sm:text-xl md:text-2xl tracking-wide"
      >
        <div className="text-left">
          <p className="mb-1">Full-Stack Developer</p>
          <p>Designer</p>
        </div>
        <div className="text-right">
          <p className="mb-1">Competitive Programmer</p>
          <p>DSA Enthusiast</p>
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;