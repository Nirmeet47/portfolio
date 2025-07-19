'use client';
import React from 'react';
import { ExternalLink, Github, Clock, Code2, Video } from 'lucide-react';

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
  liveLink?: string;
  githubLink: string;
  hideGithub?: boolean; // Optional property to hide GitHub link
  videoLink?: string;
}

interface UpcomingProject {
  title: string;
  description: string;
  tech: TechItem[];
  category: string;
  expectedDate: string;
  progress: number;
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
    liveLink: 'https://bindi.vercel.app/',
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
    githubLink: 'https://github.com/gideonx10/Gesture-Voice-Controlled-Robot-Movement',
    videoLink: 'https://www.youtube.com/watch?v=43epQPJrAag',
  },
  {
  title: 'Forest Focus',
  description: 'A 3D interactive forest awareness experience built using React, TailwindCSS, Three.js, and Blender models to simulate immersive nature scenes.',
  image: '/images/forestfocus.png',
  tech: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
    { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' }
  ],
  category: '3D Showcase',
  status: 'Demo',
  videoLink: 'https://drive.google.com/file/d/14W0e3BYwJ_z6GF_HAsOWW7o9M6YaxApX/preview',
  githubLink: '',
  hideGithub: true // 👈 add this
}

  
];

const upcomingProjects: UpcomingProject[] = [
  {
  title: 'Skill-Swap',
  description: 'A platform that allows users to exchange skills by listing and requesting them, designed for collaborative learning and peer-to-peer interaction. Includes JWT-based authentication, MongoDB, and optional GPT-powered chat.',
  tech: [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'NextAuth', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ],
  category: 'Cooking in the Lab',
  expectedDate: 'Q3 2025',
  progress: 70
}
];

const getCategoryStyle = (category: string) => {
  const styles: Record<string, { bg: string; text: string; border: string }> =  {
    'Full Stack': {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-800'
    },
    'E-Commerce': {
      bg: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-800'
    },
    'Productivity': {
      bg: 'bg-purple-50',
      text: 'text-purple-800',
      border: 'border-purple-800'
    },
    'Hardware': {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-800'
    },
    'AI Tools': {
      bg: 'bg-orange-50',
      text: 'text-orange-800',
      border: 'border-orange-800'
    },
    '3D Showcase': {
  bg: 'bg-teal-50',
  text: 'text-teal-800',
  border: 'border-teal-800'
}
  };
  
  return styles[category] || {
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200'
  };
};

const ProjectsPage: React.FC = () => {
  const handleLiveClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleVideoClick = (url: string) => {
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
          {projects.map((project, index) => {
            const categoryStyle = getCategoryStyle(project.category);
            return (
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
                      {project.status}
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
                    <h2 className="text-xl  lg:text-2xl xl:text-3xl font-mono text-[#e4ded7] font-medium flex-1">
                      {project.title}
                    </h2>
                    <span className={`text-sm font-mono px-3 py-2 rounded border whitespace-nowrap ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#e4ded7] text-sm lg:text-base font-mono leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 border border-[#2a2d3a] rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 text-[#e4ded7] text-xs lg:text-sm font-mono transition-all duration-200 hover:border-[#3a3d4a]"
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
                    {project.liveLink && (
                      <button
                        onClick={() => handleLiveClick(project.liveLink!)}
                        className="cursor-pointer flex-1 bg-[#e4ded7] text-[#0b0c10] px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg font-mono font-medium text-sm lg:text-base  transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} className="lg:w-[18px] lg:h-[18px]" />
                        Live Demo
                      </button>
                    )}
                    {project.videoLink && (
                      <button
                        onClick={() => handleVideoClick(project.videoLink!)}
                        className="cursor-pointer flex-1 bg-[#e4ded7] text-[#0b0c10] px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg font-mono font-medium text-sm lg:text-base  transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Video size={16} className="lg:w-[18px] lg:h-[18px]" />
                        Video
                      </button>
                    )}
                   {project.githubLink && !project.hideGithub && (
                      <button
                        onClick={() => handleGithubClick(project.githubLink)}
                        className="cursor-pointer bg-[#242730] text-[#e4ded7] px-4 py-2.5 lg:px-6 lg:py-3 rounded-lg font-mono font-medium text-sm lg:text-base hover:bg-[#2a2d3a] transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Github size={16} className="lg:w-[18px] lg:h-[18px]" />
                        View Code
                      </button>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Projects Section */}
        <div className="mt-20 mb-16">
          <div className="w-full flex justify-center items-center mb-12 px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#e4ded7] leading-[0.8] text-center transform scale-y-140 font-sans">
              COOKING IN THE LAB
            </h2>
          </div>

          <div className="space-y-8">
            {upcomingProjects.map((project, index) => {
              const categoryStyle = getCategoryStyle(project.category);
              return (
                <div
                  key={index}
                  className="relative bg-[#13161f] border border-[#242730] rounded-xl overflow-hidden transition-all duration-550 group hover:shadow-2xl hover:border-[#2f333f] opacity-80 hover:opacity-100"
                >
                  <div className="p-6 lg:p-8 xl:p-12 space-y-5">
                    {/* Header with Progress */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Clock size={20} className="text-[#e4ded7]" />
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-mono text-[#e4ded7] font-medium">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-mono px-3 py-2 rounded border whitespace-nowrap ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#242730] rounded-full h-2">
                      <div 
                        className="bg-[#e4ded7] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-sm font-mono text-[#e4ded7]">
                      <span>Progress: {project.progress}%</span>
                      <span>Expected: {project.expectedDate}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[#e4ded7] text-sm lg:text-base font-mono leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 lg:gap-3 pt-1">
                      {project.tech.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 border border-[#2a2d3a] rounded-lg px-3 py-1.5 lg:px-4 lg:py-2 text-[#e4ded7] text-xs lg:text-sm font-mono transition-all duration-200 hover:border-[#3a3d4a]"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-3 h-3 lg:w-4 lg:h-4 object-contain"
                          />
                          {tech.name}
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 pt-2">
                      <Code2 size={16} className="text-[#e4ded7]" />
                      <span className="text-[#e4ded7] text-sm font-mono">
                        Currently in development...
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-[#2a2d3a] pt-12 mt-16">
          <div className="space-y-4">
            <p className="text-[#e4ded7] font-mono text-lg">
              Have an idea? Let's build something amazing together.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.open('https://github.com/nirmeet47', '_blank')}
                className="cursor-pointer text-[#242730] bg-[#e4ded7] px-6 py-3 rounded-lg font-mono font-medium text-base transition-colors duration-200 flex items-center gap-2"
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