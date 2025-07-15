'use client';
import React from 'react';
import Animated from './Animated';
import Typewriter from './TypeWriter'; // adjust path if needed

const About: React.FC = () => {
  return (
    <div id='about-section' className="pb-20 bg-[#0b0c10] text-[#e4ded7] overflow-hidden py-12">

      {/* Heading */}
      <div className="w-full flex justify-center items-center mb-20 px-6">
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
          ABOUT ME 
        </h1>
      </div>

      {/* Animated Content */}
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:pl-[100px] lg:pr-[164px] text-left space-y-12">

        <Animated
          text="I'm Nirmeet — a Computer Science undergrad at SVNIT, passionate about building fast, functional, and clean digital products."
          className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-mono text-[#e4ded7] font-light text-left"
        />

        <Animated
          text="I focus on full-stack development, blending sleek frontends with scalable backend systems. My projects are driven by clarity, speed, and user experience."
          className=" text-lg sm:text-xl md:text-2xl leading-relaxed font-mono text-[#b5afa7] font-light text-left"
        />

        <Animated
          text="I also enjoy solving algorithmic challenges — not just for the logic, but for the mindset it builds: structured, sharp, and efficient thinking."
          className="text-lg sm:text-xl md:text-2xl leading-relaxed font-mono text-[#b5afa7] font-light text-left"
        />

        {/* Animated Quote */}
        <div className="mt-20 border-l-5 border-[#555] pl-8 ">
          <Typewriter
            text="Great code is like poetry — elegant, efficient, and expressive."
            className="text-left pt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
