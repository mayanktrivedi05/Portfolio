import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CanvasContainer } from '../components/canvas/CanvasContainer';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiFileText } from 'react-icons/fi';

export const Hero: React.FC = () => {
  const nameLetters = PORTFOLIO_DATA.personal.name.split('');

  const roles = [
    'Agentic AI Developer',
    'Autonomous Multi-Agent Architect',
    'Full-Stack Systems Engineer',
    'RAG & Vector Search Specialist',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-noise"
    >
      {/* 3D Canvas Background Scene */}
      <CanvasContainer />

      {/* Hero Ambient Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Overlay (2-Column Split Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text, Headline, CTAs, Social Links */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 shadow-lg shadow-black/50"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-300 ml-2">
                Available for High-Impact Roles &amp; AI Engineering
              </span>
            </motion.div>

            {/* Big Confident Animated Staggered Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 select-none flex flex-wrap justify-center lg:justify-start"
            >
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={
                    char === ' '
                      ? 'mr-4 sm:mr-6'
                      : 'inline-block hover:text-cyan-400 transition-colors duration-300'
                  }
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle with Smooth Rotating Role Animation */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRoleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Short Elevator Bio Pitch */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
              className="text-sm sm:text-base text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              {PORTFOLIO_DATA.personal.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-xl shadow-violet-600/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Featured Projects
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Mayank_Trivedi_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-200 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-violet-400/50 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FiFileText className="w-4 h-4 mr-2 text-cyan-400" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 relative z-20"
            >
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-violet-400 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.email}
                className="p-3.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Email Direct"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Ultra-Modern Glassmorphic Photo Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Background Glow behind photo card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/40 via-cyan-500/30 to-indigo-600/40 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse pointer-events-none" />

            {/* Main Portrait Card */}
            <div className="relative w-full max-w-sm sm:max-w-md rounded-[2rem] p-3 glass-card border border-white/20 shadow-2xl backdrop-blur-xl group hover:border-cyan-400/50 transition-all duration-500">
              {/* Floating Levitating Badge 1 (Top Right) */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-2 z-30 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-cyan-500/10 flex items-center gap-2 text-xs font-mono text-cyan-300"
              >
                <span className="text-amber-400">⚡</span> LangGraph &amp; RAG
              </motion.div>

              {/* Floating Levitating Badge 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-2 z-30 px-3.5 py-1.5 rounded-2xl bg-slate-900/90 border border-violet-500/40 backdrop-blur-xl shadow-xl shadow-violet-500/10 flex items-center gap-2 text-xs font-mono text-violet-300"
              >
                <span className="text-cyan-400">🚀</span> Microservices &amp; Redis
              </motion.div>

              {/* Photo Frame Container */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-[1.5rem] overflow-hidden bg-slate-950">
                <img
                  src="/mayank.jpg"
                  alt="Mayank Trivedi"
                  style={{ objectPosition: 'center 30%' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.02] contrast-[1.05]"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Glass Badge inside */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-slate-950/75 border border-white/15 backdrop-blur-md flex items-center gap-2 text-xs font-mono text-cyan-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Full-Stack &amp; Gen AI
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-white font-bold block text-sm">Mayank Trivedi</span>
                    <span className="text-slate-400 text-[11px]">B.Tech CSE • BIET Jhansi</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[10px] uppercase font-semibold">
                    India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-2">
          Scroll to Explore
        </span>
        <FiArrowDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  );
};
