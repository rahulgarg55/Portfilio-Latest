import React, { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dotPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [label, setLabel] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Hide on mobile
    if ('ontouchstart' in window) {
      setIsHidden(true);
      return;
    }

    const lerp = (a, b, t) => a + (b - a) * t;

    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      dotPos.current.x = lerp(dotPos.current.x, pos.current.x, 0.12);
      dotPos.current.y = lerp(dotPos.current.y, pos.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = (e) => {
      const el = e.currentTarget;
      const dataLabel = el.getAttribute('data-cursor');
      setLabel(dataLabel || '');
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setLabel('');
      setIsHovering(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeaveWindow = () => setIsHidden(true);
    const handleMouseEnterWindow = () => setIsHidden(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Attach to interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Outer ring cursor */}
      <div
        ref={cursorRef}
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      >
        {label && <span className="cursor-label">{label}</span>}
      </div>

      {/* Inner dot cursor */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />

      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }

        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border: 2px solid rgba(94, 90, 209, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: width 0.3s, height 0.3s, border-color 0.3s, background 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .cursor-ring.hovering {
          width: 56px;
          height: 56px;
          border-color: rgba(94, 90, 209, 0.9);
          background: rgba(94, 90, 209, 0.08);
          mix-blend-mode: normal;
        }

        .cursor-ring.clicking {
          width: 32px;
          height: 32px;
          background: rgba(94, 90, 209, 0.2);
          border-color: rgba(94, 90, 209, 1);
        }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 8px; height: 8px;
          background: var(--accent-purple);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: width 0.2s, height 0.2s, background 0.2s;
          will-change: transform;
          box-shadow: 0 0 8px var(--accent-purple);
        }

        .cursor-dot.hovering {
          width: 4px;
          height: 4px;
          background: #fff;
        }

        .cursor-dot.clicking {
          width: 12px;
          height: 12px;
          background: var(--accent-lavender);
        }

        .cursor-label {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          color: var(--accent-purple);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
}
