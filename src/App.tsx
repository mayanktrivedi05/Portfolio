import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scrolling inertia engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0f] text-slate-100 min-h-screen selection:bg-violet-500/40 selection:text-white relative">
      {/* Preloader intro */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom magnetic interactive cursor */}
      <CustomCursor />

      {/* Main Page Layout */}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
