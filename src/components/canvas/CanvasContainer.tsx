import React, { Suspense, lazy } from 'react';

const Hero3DSceneLazy = lazy(() => import('./Hero3DScene'));

const CanvasFallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    {/* CSS Animated fallback visual representation */}
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-violet-500/30 bg-gradient-to-tr from-violet-600/20 via-indigo-900/10 to-cyan-500/20 animate-spin-slow backdrop-blur-md relative flex items-center justify-center shadow-2xl shadow-violet-500/20">
      <div className="w-44 h-44 rounded-full border border-cyan-400/40 bg-cyan-500/10 animate-pulse flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 blur-xl opacity-60 animate-glow" />
      </div>
    </div>
  </div>
);

export const CanvasContainer: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-90 overflow-hidden">
      <Suspense fallback={<CanvasFallback />}>
        <Hero3DSceneLazy />
      </Suspense>
    </div>
  );
};
