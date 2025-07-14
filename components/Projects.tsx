'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ExternalLink, Github, Video } from 'lucide-react';
import Typewriter from './TypeWriter';

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
  liveLink?: string;
  githubLink: string;
  videoLink?: string;
}

const projects: Project[] = [
  {
    title: "Bindi's Cupcakery",
    description: 'A bakery storefront with OTP login, GSAP + Framer Motion animations, and a custom admin dashboard for managing orders.',
    image: '/images/bindi.png',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    category: 'E-Commerce',
    status: 'Live',
    year: '2024',
    liveLink: 'https://bindi.vercel.app/ ',
    githubLink: 'https://github.com/gideonx10/Bindi-s-Cupcakery',
  },
  {
    title: 'FamilyDoc',
    description: 'A secure family document vault with role-based access, renewal alerts, and smooth document search using Firebase.',
    image: '/images/familydoc.png',
    tech: [
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Firebase', icon: 'https://www.svgrepo.com/show/353735/firebase.svg' },
    ],
    category: 'Productivity',
    status: 'Live',
    year: '2024',
    liveLink: 'https://family-doc.vercel.app/',
    githubLink: 'https://github.com/Nirmeet47/family-doc',
  },
  {
    title: 'Gesture + Voice Robot',
    description: 'Gesture + voice-controlled robot with Arduino, Python, OpenCV, and ChatGPT 4.1.',
    image: '/images/gestrobot.webp',
    tech: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    ],
    category: 'Hardware',
    status: 'Demo',
    year: '2024',
    githubLink: 'https://github.com/gideonx10/Gesture-Voice-Controlled-Robot-Movement',
    videoLink: 'https://www.youtube.com/watch?v=43epQPJrAag',
  },
];

const Projects: React.FC = () => {
  const router = useRouter();

  const handleClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#0b0c10] text-[#e4ded7] py-8">
      <div className="w-full flex justify-center items-center mb-12 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#13161f] border border-[#242730] rounded-xl overflow-hidden transition-all duration-550 group hover:shadow-lg hover:scale-[1.02] hover:border-[#2f333f]"
            >
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#e4ded7] text-[#0b0c10] px-3 py-1 rounded-full text-xs font-mono font-medium">
                  {project.status}
                </span>
              </div>

              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1a1d26] to-[#242730]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    e.currentTarget.parentElement!.innerHTML = `<div class='text-6xl text-[#3a3d4a]'>📁</div>`;
                  }}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-mono text-[#e4ded7] font-medium">{project.title}</h2>
                  <span className="text-[#b5afa7] text-sm font-mono bg-[#242730] px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-[#b5afa7] text-sm font-mono leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border border-[#2a2d3a] rounded-lg px-3 py-1 text-[#b5afa7] text-xs font-mono"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-3 h-3 object-contain"
                        style={{
                          filter: tech.name === 'Next.js' ? 'invert(1) brightness(0.9)' : 'none',
                        }}
                      />
                      {tech.name}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  {project.liveLink && (
                    <button
                      onClick={() => handleClick(project.liveLink)}
                      className="bg-[#e4ded7] text-[#0b0c10] px-15 py-2 rounded-lg font-mono font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  )}
                  {project.videoLink && (
                    <button
                      onClick={() => handleClick(project.videoLink)}
                      className="bg-[#e4ded7] text-[#0b0c10] px-18 py-2 rounded-lg font-mono font-medium text-sm flex items-center justify-center gap-2"
                    >
                      <Video size={16} />
                      Video
                    </button>
                  )}
                  <button
                    onClick={() => handleClick(project.githubLink)}
                    className="bg-[#242730] text-[#e4ded7] px-4 py-2 rounded-lg font-mono font-medium text-sm flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-[#2a2d3a] pt-8">
          <button
            onClick={() => router.push('/projects')}
            className="bg-[#e4ded7] text-[#0b0c10] px-8 py-4 rounded-lg font-mono font-medium text-lg"
          >
            View All Projects
          </button>
          <div className="pt-8">
            <Typewriter text="Stay tuned - the repo grows stronger..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
