import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/touch device
    const checkMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsMobile(isTouch);
      if (!isTouch) {
        document.body.classList.add('custom-cursor-active');
      }
    };
    checkMobile();

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Hover state detection on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Small Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.1 }}
      />

      {/* Larger Outer Magnetic Glow Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 border border-violet-500/50 bg-violet-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          borderColor: isHovered ? '#06b6d4' : 'rgba(139, 92, 246, 0.6)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.15)' : 'rgba(139, 92, 246, 0.08)',
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
};
