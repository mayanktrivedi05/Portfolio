import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-[#0a0a0f] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            03 // WORK HISTORY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Professional <span className="gradient-text-electric">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent -translate-x-1/2 hidden sm:block" />

          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mb-12"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 p-1 flex items-center justify-center z-20 shadow-lg shadow-cyan-500/30 hidden sm:flex">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 rounded-3xl relative ml-0 sm:ml-12 md:ml-0 md:w-[92%] mx-auto hover:border-cyan-400/50 transition-all duration-300">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiBriefcase className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-slate-300 font-semibold text-base">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                      <FiMapPin className="w-3 h-3 text-cyan-400" />
                      {exp.location} ({exp.type})
                    </span>
                  </div>
                </div>

                {/* Achievement Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base text-slate-300 leading-relaxed">
                      <FiCheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
