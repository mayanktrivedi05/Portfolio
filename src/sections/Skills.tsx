import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import {
  SiPython,
  SiGo,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiRedis,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiLangchain,
  SiDatabricks,
  SiGoogle,
  SiGit,
  SiPostman,
  SiFirebase,
  SiPhp,
  SiLaravel,
  SiFastapi,
} from 'react-icons/si';
import { FiCode, FiServer, FiLayout, FiCpu, FiCloud } from 'react-icons/fi';

// Icon Map for dynamic lookup
const ICON_MAP: Record<string, React.ReactNode> = {
  SiPython: <SiPython className="w-6 h-6 text-yellow-400" />,
  SiPhp: <SiPhp className="w-6 h-6 text-indigo-400" />,
  SiGo: <SiGo className="w-6 h-6 text-cyan-400" />,
  SiC: <SiC className="w-6 h-6 text-blue-400" />,
  SiCplusplus: <SiCplusplus className="w-6 h-6 text-blue-500" />,
  SiJavascript: <SiJavascript className="w-6 h-6 text-amber-300" />,
  SiTypescript: <SiTypescript className="w-6 h-6 text-blue-400" />,
  SiPostgresql: <SiPostgresql className="w-6 h-6 text-sky-400" />,
  SiMongodb: <SiMongodb className="w-6 h-6 text-emerald-400" />,
  SiNodedotjs: <SiNodedotjs className="w-6 h-6 text-emerald-500" />,
  SiExpress: <SiExpress className="w-6 h-6 text-slate-200" />,
  SiLaravel: <SiLaravel className="w-6 h-6 text-red-500" />,
  SiFastapi: <SiFastapi className="w-6 h-6 text-teal-400" />,
  SiDocker: <SiDocker className="w-6 h-6 text-sky-400" />,
  SiRedis: <SiRedis className="w-6 h-6 text-red-500" />,
  SiMysql: <SiMysql className="w-6 h-6 text-blue-400" />,
  SiAmazonaws: <FiCloud className="w-6 h-6 text-amber-500" />,
  SiReact: <SiReact className="w-6 h-6 text-cyan-400" />,
  SiRedux: <SiRedux className="w-6 h-6 text-purple-400" />,
  SiTailwindcss: <SiTailwindcss className="w-6 h-6 text-teal-400" />,
  SiHtml5: <SiHtml5 className="w-6 h-6 text-orange-500" />,
  SiOpenai: <FiCpu className="w-6 h-6 text-emerald-400" />,
  SiLangchain: <SiLangchain className="w-6 h-6 text-violet-400" />,
  SiDatabricks: <SiDatabricks className="w-6 h-6 text-red-400" />,
  SiGoogle: <SiGoogle className="w-6 h-6 text-blue-400" />,
  SiGit: <SiGit className="w-6 h-6 text-orange-500" />,
  SiPostman: <SiPostman className="w-6 h-6 text-orange-400" />,
  SiFirebase: <SiFirebase className="w-6 h-6 text-amber-400" />,
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'code-2': <FiCode className="w-5 h-5 text-violet-400" />,
  server: <FiServer className="w-5 h-5 text-cyan-400" />,
  layout: <FiLayout className="w-5 h-5 text-emerald-400" />,
  brain: <FiCpu className="w-5 h-5 text-amber-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#0a0a0f] bg-noise overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-violet-400 bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/20">
            02 // TECH STACK &amp; CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Tools &amp; Technologies <span className="gradient-text-electric">I Master</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Production-proven tech stack spanning distributed microservices, databases, cloud architecture, and Gen AI orchestrations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl relative"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10">
                  {CATEGORY_ICONS[category.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {category.skills.length} Core Technologies
                  </span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                  >
                    <Tilt
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      perspective={800}
                      scale={1.05}
                      transitionSpeed={800}
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all duration-300 group cursor-pointer shadow-sm">
                        <div className="p-1.5 rounded-lg bg-black/40 group-hover:scale-110 transition-transform">
                          {ICON_MAP[skill.icon] || <FiCode className="w-5 h-5 text-cyan-400" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
