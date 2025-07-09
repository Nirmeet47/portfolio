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
    description: 'A secure document vault with family access control, renewal reminders, and smart role management.',
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
    description: 'A bakery site with OTP auth, animations, responsive UI and admin dashboard for managing orders.',
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
    description: 'Digitalized form system for ISTE Gujarat awards with Supabase Storage and dynamic routing.',
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

const Projects: React.FC = () => {
  const handleLiveClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#0b0c10] text-[#e4ded7] py-8">
      {/* Header Section */}
      <div className="w-full flex justify-center items-center mb-12 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#13161f] border border-[#242730] rounded-xl overflow-hidden transition-all duration-550 group hover:shadow-lg hover:scale-[1.02] hover:border-[#2f333f]"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-30">
                <span className="bg-[#e4ded7] text-[#0b0c10] px-3 py-1 rounded-full text-xs font-mono font-medium">
                  {project.status}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1a1d26] to-[#242730]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class='text-6xl text-[#3a3d4a]'>📁</div>
                    `;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title and Category */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-mono text-[#e4ded7] font-medium">
                    {project.title}
                  </h2>
                  <span className="text-[#b5afa7] text-sm font-mono bg-[#242730] px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#b5afa7] text-sm font-mono leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border border-[#2a2d3a] rounded-lg px-3 py-1 text-[#b5afa7] text-xs font-mono transition-all duration-200"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3 h-3 object-contain"
                        style={{
                          filter: tech.name === 'Next.js' ? 'invert(1) brightness(0.9)' : 'none'
                        }}
                      />
                      {tech.name}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleLiveClick(project.liveLink)}
                    className="flex-1 bg-[#e4ded7] text-[#0b0c10] px-4 py-2 rounded-lg font-mono font-medium text-sm hover:bg-[#d4cdc6] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleGithubClick(project.githubLink)}
                    className="bg-[#242730] text-[#e4ded7] px-4 py-2 rounded-lg font-mono font-medium text-sm hover:bg-[#2a2d3a] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-[#2a2d3a] pt-8">
          <div className="inline-block">
            <button className="bg-[#e4ded7] text-[#0b0c10] px-8 py-4 rounded-lg font-mono font-medium text-lg hover:bg-[#d4cdc6] transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
          <p className="text-[#b5afa7] text-sm font-mono mt-4">
            More projects coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
