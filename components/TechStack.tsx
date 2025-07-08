'use client';
import React from 'react';
import Typewriter from './TypeWriter';
const TechStack: React.FC = () => {
  const techData = [
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

  return (
    <div className="bg-[#0b0c10] text-[#e4ded7] py-8">
      
      {/* Original Heading */}
      <div className="w-full flex justify-center items-center mb-12 px-6">
        <h1 className="text-[2vw] md:text-[4vw] lg:text-[6vw] font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans whitespace-nowrap">
          TECH STACK
        </h1>
      </div>

      {/* Improved Compact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* All categories in one row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {techData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[#1a1d29] border border-[#2a2d3a] rounded-xl p-5 hover:bg-[#252a3a] transition-all duration-300 hover:border-[#3a3d4a] hover:shadow-lg">
              
              {/* Category Title */}
              <h2 className="text-xl font-mono text-[#e4ded7] font-medium mb-5 text-center pb-3 border-b border-[#2a2d3a]">
                {category.category}
              </h2>

              {/* Tech Grid - 2 columns within each category */}
              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex flex-col items-center p-3 rounded-lg hover:bg-[#2a2d3a] transition-all duration-200 hover:scale-105"
                  >
                    {/* Tech Icon */}
                    <div className="w-10 h-10 mb-2 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        style={{
                          filter: tech.name === 'Next.js' || tech.name === 'Express' 
                            ? 'invert(1) brightness(0.9)' 
                            : 'none'
                        }}
                      />
                    </div>
                    
                    {/* Tech Name */}
                    <span className="text-xs font-mono text-[#b5afa7] font-medium text-center group-hover:text-[#e4ded7] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quote Section */}
          
            <div className="text-center border-t border-[#2a2d3a] pt-8">
            <Typewriter text="This isn’t just a stack — it’s a statement." />
            </div>
        </div>
      </div>
  );
};

export default TechStack;
