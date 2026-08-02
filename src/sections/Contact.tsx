import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiMapPin } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (apiKey && apiKey !== 'YOUR_WEB3FORMS_KEY') {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: apiKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Message from ${formData.name}`,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Web submission error');
        }
      } else {
        throw new Error('No Web3Forms access key provided');
      }
    } catch {
      // Fallback: Directly open user's email client addressed to trivedim115@gmail.com
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#0a0a0f] bg-noise overflow-hidden">
      {/* Radial background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            07 // GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Let&apos;s Build <span className="gradient-text-electric">Something Remarkable</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4">
            Whether you have an ambitious AI project, a full-stack opportunity, or just want to connect — my inbox is always open.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Direct Contact &amp; Channels
            </h3>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all group"
              >
                <div className="p-3 rounded-xl bg-violet-500/20 text-violet-400 group-hover:scale-110 transition-transform">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Email Address</span>
                  <span className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Phone / WhatsApp</span>
                  <span className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {PORTFOLIO_DATA.personal.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Location</span>
                  <span className="text-base font-bold text-white">
                    {PORTFOLIO_DATA.personal.location} (Available Remote Worldwide)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 block">
                Connect via Social Networks
              </span>
              <div className="flex gap-4">
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all font-mono text-xs"
                >
                  <FiGithub className="w-4 h-4 text-cyan-400" />
                  GitHub: {PORTFOLIO_DATA.personal.socials.githubUsername}
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:border-violet-400 hover:bg-violet-500/10 transition-all font-mono text-xs"
                >
                  <FiLinkedin className="w-4 h-4 text-violet-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form with Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-8 font-mono">
              Fill out the form below to reach Mayank Trivedi directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  required
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all peer text-sm"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-5 transition-all pointer-events-none text-xs font-mono tracking-wider ${
                    formData.name || focusedField === 'name'
                      ? '-top-2.5 text-cyan-400 bg-[#0a0a0f] px-2 rounded'
                      : 'top-4 text-slate-400'
                  }`}
                >
                  YOUR FULL NAME
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  required
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all peer text-sm"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-5 transition-all pointer-events-none text-xs font-mono tracking-wider ${
                    formData.email || focusedField === 'email'
                      ? '-top-2.5 text-cyan-400 bg-[#0a0a0f] px-2 rounded'
                      : 'top-4 text-slate-400'
                  }`}
                >
                  YOUR EMAIL ADDRESS
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  required
                  rows={4}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all peer text-sm resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-5 transition-all pointer-events-none text-xs font-mono tracking-wider ${
                    formData.message || focusedField === 'message'
                      ? '-top-2.5 text-cyan-400 bg-[#0a0a0f] px-2 rounded'
                      : 'top-4 text-slate-400'
                  }`}
                >
                  PROJECT DETAILS / MESSAGE
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-xl shadow-violet-600/30 hover:shadow-cyan-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Transmitting Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </span>
                )}
              </button>

              {/* Submission Notification Toast */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center gap-3"
                  >
                    <FiCheck className="w-5 h-5 text-emerald-400" />
                    Thank you! Your message has been sent successfully. Mayank will reply shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
