'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0c10] border-t border-[#2a2d3a] text-[#e4ded7] font-mono px-10 py-6 text-base flex flex-col md:flex-row items-center justify-between">
      {/* Left: Copyright */}
      <span className="tracking-wide">
        © 2025 — All rights reserved
      </span>

      {/* Right: Credit with professional hover */}
      <span className="tracking-wide">
        Designed & Developed by{' '}
        <a
          href="https://github.com/Nirmeet47"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-[#e4ded7] font-semibold transition-colors duration-300 hover:text-[#d0c8bd] after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[1.5px] after:w-0 after:bg-[#d0c8bd] after:transition-all after:duration-300 hover:after:w-full"
        >
          Nirmeet Parmar
        </a>
      </span>
    </footer>
  );
};

export default Footer;
