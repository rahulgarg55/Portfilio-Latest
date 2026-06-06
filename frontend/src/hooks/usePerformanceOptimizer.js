import { useState, useEffect } from 'react';

export default function usePerformanceOptimizer() {
  const [reduceGraphics, setReduceGraphics] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let active = true;
    let checkCount = 0;

    const checkFps = () => {
      if (!active) return;
      frameCount++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        
        // If FPS is below 40 for multiple consecutive seconds, trigger graphics reduction
        if (fps < 40) {
          checkCount++;
          if (checkCount >= 3) {
            setReduceGraphics(true);
          }
        } else {
          checkCount = 0;
        }
        
        frameCount = 0;
        lastTime = now;
      }
      
      requestAnimationFrame(checkFps);
    };

    requestAnimationFrame(checkFps);
    
    return () => {
      active = false;
    };
  }, []);

  return reduceGraphics;
}
