import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiAward, FiBookOpen, FiCode, FiGlobe } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduation':
        return <FiBookOpen className="w-6 h-6 text-cyan-400" />;
      case 'code':
        return <FiCode className="w-6 h-6 text-violet-400" />;
      case 'trophy':
        return <FiGlobe className="w-6 h-6 text-amber-400" />;
      case 'award':
        return <FiAward className="w-6 h-6 text-emerald-400" />;
      default:
        return <FiAward className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-[#0a0a0f] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            01 // ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Architecting <span className="gradient-text-electric">Intelligent Systems</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Bio Narrative & Photo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Profile Photo Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} className="h-full">
              <div className="glass-card p-4 rounded-3xl h-full flex flex-col items-center justify-center relative overflow-hidden group border border-white/10 hover:border-cyan-500/40 transition-all">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-4">
                  <img
                    src="/mayank.jpg"
                    alt="Mayank Trivedi"
                    style={{ objectPosition: 'center 30%' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white tracking-tight">Mayank Trivedi</h4>
                  <p className="text-xs font-mono text-cyan-400 mt-1">Full-Stack &amp; AI Engineer</p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Main Bio Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-ping" />
                Who I Am &amp; What Drives Me
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">
                  Primary Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Gen AI &amp; RAG Systems
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Distributed Microservices
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    High-Concurrency Systems
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-12 glass-card p-8 rounded-3xl flex flex-col justify-between relative"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  Education &amp; Credentials
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {PORTFOLIO_DATA.education.period}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                {PORTFOLIO_DATA.education.institution}
              </h4>
              <p className="text-cyan-300 font-medium text-sm mb-4">
                {PORTFOLIO_DATA.education.degree}
              </p>

              <div className="inline-block px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white font-extrabold text-lg mb-6 shadow-inner">
                Grade: <span className="text-cyan-400">{PORTFOLIO_DATA.education.grade}</span>
              </div>

              <ul className="space-y-3">
                {PORTFOLIO_DATA.education.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 mr-2 font-bold">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Animated Stat Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                className="h-full"
              >
                <div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between group hover:border-violet-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:bg-violet-500/20 transition-colors">
                      {getIcon(stat.icon)}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      STAT #0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-4xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-sans">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
