import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 bg-[#07070b] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Credit */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-extrabold text-base text-white tracking-wide">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <p className="text-slate-400 font-mono text-[11px]">
            Built with React 18, Three.js (R3F) &amp; Framer Motion
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 hover:text-violet-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.email}
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-400">
            © {new Date().getFullYear()} Mayank Trivedi. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:scale-110 active:scale-95 transition-all shadow-md shadow-violet-600/30"
            aria-label="Scroll back to top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
