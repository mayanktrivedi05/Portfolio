import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiAward, FiCheck, FiExternalLink } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 relative z-10 bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            05 // CERTIFICATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Verified Credentials &amp; Certifications
          </h2>
        </motion.div>

        {/* Badges Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} scale={1.03} className="h-full">
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all flex flex-col justify-between h-full group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.badgeColor} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${cert.badgeColor} text-white shadow-lg`}>
                        <FiAward className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                          {cert.issuer}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                          <FiCheck className="w-3.5 h-3.5" /> Verified
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                      {cert.title}
                    </h3>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline pt-3 border-t border-white/10 transition-colors"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" /> Verify Credential
                    </a>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
