import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink, FiGithub, FiLayers, FiCheckCircle } from 'react-icons/fi';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0a0a0f] bg-noise overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-violet-400 bg-violet-500/10 px-4 py-1.5 rounded-full border border-violet-500/20">
            04 // FEATURED SYSTEMS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Production-Grade <span className="gradient-text-electric">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            High-performance web applications, distributed microservices, and autonomous multi-agent AI systems built from scratch.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Projects Cards List */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  perspective={1200}
                  transitionSpeed={1000}
                  scale={1.01}
                >
                  <div className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/40 p-6 md:p-8 transition-all duration-300 relative group shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Project Preview Image & Tech Badge */}
                      <div
                        className={`lg:col-span-6 relative overflow-hidden rounded-2xl group-hover:shadow-2xl transition-all duration-500 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                          {/* Image Placeholder with Gradient Overlay */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                        </div>

                        {/* Top Tag Pill */}
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                          <FiLayers className="w-3.5 h-3.5" />
                          {project.featured ? 'Featured Architecture' : 'Production System'}
                        </div>
                      </div>

                      {/* Project Meta & Details */}
                      <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1 block">
                          SYSTEM #0{index + 1}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 font-semibold text-sm mb-4">
                          {project.subtitle}
                        </p>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Architecture Bullets */}
                        <ul className="space-y-2 mb-6">
                          {project.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-xs md:text-sm text-slate-300">
                              <FiCheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95 transition-all"
                          >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/[0.05] border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                          >
                            <FiGithub className="w-4 h-4" />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
