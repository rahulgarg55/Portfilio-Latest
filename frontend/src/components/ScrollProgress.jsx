import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const NAV_DOTS = [
    { id: 'hero', label: 'Home' },
    { id: 'trophy-room', label: 'Achievements' },
    { id: 'career-timeline-3d', label: 'Career' },
    { id: 'experience', label: 'Experience' },
    { id: 'live-code', label: 'Code' },
    { id: 'arch-flow', label: 'Architecture' },
    { id: 'tech-comparison', label: 'Decisions' },
    { id: 'interview-prep', label: 'Interview' },
    { id: 'skills', label: 'Skills' },
    { id: 'skill-radar', label: 'Radar' },
    { id: 'activity-heatmap', label: 'Activity' },
    { id: 'multimedia', label: 'Life' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowScrollTop(scrollTop > 600);

      // Active section detection
      const sections = NAV_DOTS.map(d => document.getElementById(d.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          setActiveSection(NAV_DOTS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="scroll-progress-bar">
        <div
          className="scroll-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side navigation dots */}
      <nav className="side-nav-dots" aria-label="Page sections">
        {NAV_DOTS.map(dot => (
          <button
            key={dot.id}
            className={`nav-dot ${activeSection === dot.id ? 'active' : ''}`}
            onClick={() => document.getElementById(dot.id)?.scrollIntoView({ behavior: 'smooth' })}
            title={dot.label}
          >
            <span className="dot-inner"></span>
            <span className="dot-tooltip">{dot.label}</span>
          </button>
        ))}
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          ↑
        </button>
      )}

      <style>{`
        .scroll-progress-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(94,90,209,0.15);
          z-index: 99998;
          pointer-events: none;
        }

        .scroll-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender), #fc8181);
          background-size: 200% 100%;
          animation: progressShimmer 2s linear infinite;
          transition: width 0.1s linear;
          box-shadow: 0 0 8px rgba(94,90,209,0.6);
        }

        @keyframes progressShimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Side dots */
        .side-nav-dots {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 12px 8px;
          background: rgba(14,23,37,0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 20px;
        }

        .nav-dot {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-inner {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(245,243,239,0.2);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          display: block;
        }

        .nav-dot:hover .dot-inner {
          background: rgba(245,243,239,0.6);
          transform: scale(1.5);
        }

        .nav-dot.active .dot-inner {
          background: var(--accent-lavender);
          transform: scale(1.4);
          box-shadow: 0 0 8px var(--accent-lavender);
        }

        .dot-tooltip {
          position: absolute;
          right: 100%;
          margin-right: 10px;
          background: rgba(14,23,37,0.95);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.85);
          font-size: 10px;
          font-family: var(--font-mono);
          padding: 4px 10px;
          border-radius: 6px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(8px);
          pointer-events: none;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }

        .nav-dot:hover .dot-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        /* Scroll to top */
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8000;
          background: rgba(14,23,37,0.9);
          border: 1px solid rgba(245,243,239,0.15);
          color: var(--accent-lavender);
          width: 40px; height: 40px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .scroll-top-btn:hover {
          background: var(--accent-purple);
          color: white;
          transform: translateX(-50%) translateY(-4px);
          box-shadow: 0 8px 20px rgba(94,90,209,0.4);
        }

        @media (max-width: 768px) {
          .side-nav-dots { display: none; }
        }
      `}</style>
    </>
  );
}
