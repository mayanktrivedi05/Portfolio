import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 200);
          return 100;
        }
        // Random incremental step to mimic real asset loading
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f] text-white overflow-hidden select-none bg-noise"
        >
          {/* Ambient Glows */}
          <div className="absolute w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -top-20 -left-20 animate-pulse" />
          <div className="absolute w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -bottom-20 -right-20 animate-pulse" />

          {/* Logo Draw / Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-2xl shadow-violet-500/30">
              <div className="w-full h-full bg-[#0a0a0f] rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-3xl tracking-tighter bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  MT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Staggered Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold tracking-wider text-slate-200 mb-2 font-mono"
          >
            MAYANK TRIVEDI
          </motion.h1>

          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8">
            Full-Stack &amp; Gen AI Engineer
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Counter Display */}
          <div className="mt-4 font-mono text-sm font-semibold text-cyan-400 tracking-widest">
            {Math.min(progress, 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
