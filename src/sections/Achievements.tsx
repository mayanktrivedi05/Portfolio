import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiGlobe, FiCode, FiAward } from 'react-icons/fi';

const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
  code: <FiCode className="w-8 h-8 text-cyan-400" />,
  trophy: <FiGlobe className="w-8 h-8 text-amber-400" />,
  award: <FiAward className="w-8 h-8 text-violet-400" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative z-10 bg-[#0a0a0f] overflow-hidden">
      {/* Background ambient gradient strip */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-violet-900/10 via-indigo-900/20 to-cyan-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-violet-400 bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/20">
            06 // HONORS &amp; MILESTONES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Key <span className="gradient-text-electric">Achievements</span>
          </h2>
        </motion.div>

        {/* Highlight Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                  {ACHIEVEMENT_ICONS[item.icon]}
                </div>
                <span className="text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-400 transition-colors font-mono">
                  {item.metric}
                </span>
              </div>

              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-1">
                {item.highlight}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {item.link && (
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <a
                    href="https://leetcode.com/u/mayank83"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                  >
                    LeetCode: mayank83
                  </a>
                  <a
                    href="https://leetcode.com/u/mayank9794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                  >
                    CP: mayank9794
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
