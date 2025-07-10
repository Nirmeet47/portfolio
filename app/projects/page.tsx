'use client';
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface TechItem {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: TechItem[];
  category: string;
  status: string;
  year: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: 'VaultSafe',
    description: 'A secure document vault with family access control, renewal reminders, and smart role management. Built with modern technologies to ensure data security and seamless user experience.',
    image: '/images/vaultsafe.png',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' }
    ],
    category: 'Full Stack',
    status: 'Live',
    year: '2024',
    liveLink: 'https://vaultsafe.vercel.app',
    githubLink: 'https://github.com/username/vaultsafe'
  },
  {
    title: 'Bindi\'s Cupcakery',
    description: 'A comprehensive bakery website with OTP authentication, smooth animations, responsive UI and admin dashboard for managing orders. Features real-time order tracking and payment integration.',
    image: '/images/bindis.png',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    category: 'Commerce',
    status: 'Live',
    year: '2024',
    liveLink: 'https://bindiscupcakery.com',
    githubLink: 'https://github.com/username/bindis-cupcakery'
  },
  {
    title: 'ISTE Awards Portal',
    description: 'Digitalized form system for ISTE Gujarat awards with Supabase Storage and dynamic routing. Streamlines the awards application process with automated workflows and document management.',
    image: '/images/iste.png',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    category: 'Platform',
    status: 'Live',
    year: '2024',
    liveLink: 'https://iste-awards.vercel.app',
    githubLink: 'https://github.com/username/iste-awards'
  },
];

const ProjectsPage: React.FC = () => {
  const handleLiveClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#0b0c10] text-[#e4ded7] min-h-screen pt-20 pb-10">
      {/* Header Section */}
      <div className="w-full flex justify-center items-center mb-16 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
          ALL PROJECTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-[#13161f] border border-[#242730] rounded-xl overflow-hidden transition-all duration-550 group hover:shadow-2xl hover:border-[#2f333f] ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Container */}
              <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-[#1a1d26] to-[#242730]">
                {/* Status Badge on Image */}
                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-[#e4ded7] text-[#0b0c10] px-4 py-2 rounded-full text-sm font-mono font-medium">
                    {project.status} • {project.year}
                  </span>
                </div>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class='text-8xl text-[#3a3d4a]'>📁</div>
                    `;
                  }}
                />
              </div>

              {/* Content */}
              <div className="lg:w-3/5 p-6 lg:p-8 xl:p-12 space-y-5 flex flex-col justify-center">
                {/* Title and Category */}
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-mono text-[#e4ded7] font-medium flex-1">
                    {project.title}
                  </h2>
                  <span className="text-[#b5afa7] text-sm font-mono bg-[#242730] px-3 py-2 rounded whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#b5afa7] text-sm lg:text-base font-mono leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border border-[#2a2d3a] rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 text-[#b5afa7] text-xs lg:text-sm font-mono transition-all duration-200 hover:border-[#3a3d4a]"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3 h-3 lg:w-4 lg:h-4 object-contain"
                        style={{
                          filter: tech.name === 'Next.js' ? 'invert(1) brightness(0.9)' : 'none'
                        }}
                      />
                      {tech.name}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 lg:gap-4 pt-4 lg:pt-6">
                  <button
                    onClick={() => handleLiveClick(project.liveLink)}
                    className="flex-1 bg-[#e4ded7] text-[#0b0c10] px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg font-mono font-medium text-sm lg:text-base hover:bg-[#d4cdc6] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} className="lg:w-[18px] lg:h-[18px]" />
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleGithubClick(project.githubLink)}
                    className="bg-[#242730] text-[#e4ded7] px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg font-mono font-medium text-sm lg:text-base hover:bg-[#2a2d3a] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} className="lg:w-[18px] lg:h-[18px]" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-[#2a2d3a] pt-12 mt-16">
          <div className="space-y-4">
            <p className="text-[#b5afa7] font-mono text-lg">
              More projects coming soon...
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.open('https://github.com/username', '_blank')}
                className="bg-[#242730] text-[#e4ded7] px-6 py-3 rounded-lg font-mono font-medium text-base hover:bg-[#2a2d3a] transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={18} />
                View GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;