'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './TypeWriter';

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  techs: TechItem[];
}

interface HoverState {
  isVisible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

const TechStack: React.FC = () => {
  const [hoverState, setHoverState] = useState<HoverState>({
    isVisible: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const techData: TechCategory[] = [
    {
      category: "Languages",
      techs: [
        { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      ]
    },
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      ]
    }
  ];

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setHoverState({
      isVisible: true,
      x: rect.left - containerRect.left,
      y: rect.top - containerRect.top,
      width: rect.width,
      height: rect.height
    });
  };

  const handleMouseLeave = () => setHoverState(prev => ({ ...prev, isVisible: false }));

  return (
    <div className="bg-[#0b0c10] text-[#e4ded7] py-8">
      <div className="w-full flex justify-center items-center mb-12 px-6">
        <h1 className="text-[2vw] md:text-[4vw] lg:text-[6vw] font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans whitespace-nowrap">
          TECH STACK
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="relative">
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
                className="absolute z-10 pointer-events-none bg-[#181b25] border border-[#2d313d] rounded-lg"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
              />
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {techData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-[#13161f] border border-[#242730] rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-mono text-[#e4ded7] font-medium mb-5 text-center pb-3 border-b border-[#2a2d3a]">
                  {category.category}
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group relative flex flex-col items-center p-3 rounded-lg transition-all duration-200 cursor-pointer z-20"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          style={{
                            filter: tech.name === 'Next.js' || tech.name === 'Express'
                              ? 'invert(1) brightness(0.9)'
                              : 'none'
                          }}
                        />
                      </div>
                      <span className="text-xs font-mono text-[#b5afa7] font-medium text-center group-hover:text-[#e4ded7] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-[#2a2d3a] pt-8">
          <Typewriter text="Clean UI, smooth logic, rock-solid backend — wired for scale." />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
