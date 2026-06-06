import React, { useState, useEffect, useCallback } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const SECRET_PROJECTS = [
  {
    title: '🎵 AI Song Generator',
    desc: 'Personal project: Built a Python + HuggingFace pipeline to generate Bollywood lyrics using fine-tuned GPT-2. Created audio previews using gTTS + custom melody overlays.',
    tech: ['Python', 'HuggingFace', 'gTTS', 'FastAPI'],
    status: 'Side Project'
  },
  {
    title: '♟️ Chess Engine with MCTS',
    desc: 'Implemented a minimax alpha-beta pruning chess engine in Node.js. Later upgraded to Monte Carlo Tree Search. Beats casual players consistently at depth 5.',
    tech: ['Node.js', 'TypeScript', 'WebSockets', 'Canvas API'],
    status: 'WIP'
  },
  {
    title: '🌐 Auto CV Builder SaaS',
    desc: 'A SaaS tool that generates ATS-optimized CVs from a job description URL. Scrapes JD, extracts keywords with NLP, and fills resume template. Built for 50+ mentees.',
    tech: ['Next.js', 'OpenAI API', 'Puppeteer', 'MySQL'],
    status: 'Private Beta'
  },
];

export default function KonamiEasterEgg() {
  const [sequence, setSequence] = useState([]);
  const [unlocked, setUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleKey = useCallback((e) => {
    const key = e.key;
    setSequence(prev => {
      const next = [...prev, key];
      const check = KONAMI.slice(0, next.length);
      const matches = next.every((k, i) => k === check[i]);

      if (!matches) return [key]; // reset, keep last key
      if (next.length === KONAMI.length) {
        setUnlocked(true);
        return [];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);

    // Show hint after 30 seconds
    const hint = setTimeout(() => setShowHint(true), 30000);
    return () => {
      window.removeEventListener('keydown', handleKey);
      clearTimeout(hint);
    };
  }, [handleKey]);

  const progress = (sequence.length / KONAMI.length) * 100;

  return (
    <>
      {/* Subtle hint bar */}
      {showHint && !unlocked && (
        <div className="konami-hint font-mono">
          🕹️ Try the Konami Code to unlock hidden projects...
          <button onClick={() => setShowHint(false)} className="hint-dismiss">×</button>
        </div>
      )}

      {/* Progress indicator */}
      {sequence.length > 0 && !unlocked && (
        <div className="konami-progress">
          <div className="kp-bar" style={{ width: `${progress}%` }}></div>
          <span className="kp-label font-mono">🕹️ {sequence.length}/{KONAMI.length}</span>
        </div>
      )}

      {/* Unlocked modal */}
      {unlocked && (
        <div className="konami-overlay" onClick={(e) => e.target === e.currentTarget && setUnlocked(false)}>
          <div className="konami-modal">
            <button className="km-close" onClick={() => setUnlocked(false)}>✕</button>

            <div className="km-header">
              <div className="km-trophy">🏆</div>
              <h2 className="km-title">SECRET UNLOCKED!</h2>
              <p className="km-subtitle font-mono">You found the Konami Code Easter Egg</p>
              <div className="km-badge font-mono">↑↑↓↓←→←→BA</div>
            </div>

            <p className="km-desc">
              Congratulations, curious soul! Here are 3 secret projects I've never publicly shared.
            </p>

            <div className="km-projects">
              {SECRET_PROJECTS.map((p, i) => (
                <div key={i} className="km-project" style={{ animationDelay: `${i * 0.15}s` }}>
                  <h3 className="kmp-title">{p.title}</h3>
                  <p className="kmp-desc">{p.desc}</p>
                  <div className="kmp-footer">
                    <div className="kmp-tags">
                      {p.tech.map(t => (
                        <span key={t} className="kmp-tag font-mono">{t}</span>
                      ))}
                    </div>
                    <span className="kmp-status font-mono">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="km-closer font-mono">
              🎯 You think like an engineer. Let's build something together →{' '}
              <a href="mailto:gargr0109@gmail.com" style={{ color: '#a0afee' }}>gargr0109@gmail.com</a>
            </p>
          </div>
        </div>
      )}

      <style>{`
        .konami-hint {
          position: fixed;
          bottom: 170px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(14,23,37,0.95);
          border: 1px solid rgba(160,175,238,0.2);
          color: rgba(245,243,239,0.5);
          font-size: 11px;
          padding: 8px 18px;
          border-radius: 100px;
          z-index: 7000;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeIn 0.5s ease;
          letter-spacing: 0.05em;
        }

        .hint-dismiss {
          background: none;
          border: none;
          color: rgba(245,243,239,0.3);
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          padding: 0;
        }

        .konami-progress {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: rgba(94,90,209,0.15);
          z-index: 9999;
        }

        .kp-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), #fc8181);
          transition: width 0.2s ease;
          box-shadow: 0 0 8px var(--accent-purple);
        }

        .kp-label {
          position: absolute;
          right: 12px;
          top: 6px;
          font-size: 9px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.08em;
        }

        /* Modal */
        .konami-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 99990;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }

        .konami-modal {
          background: var(--bg-darker);
          border: 1px solid rgba(94,90,209,0.4);
          border-radius: 20px;
          padding: 40px;
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 0 60px rgba(94,90,209,0.3), 0 0 120px rgba(94,90,209,0.1);
          animation: popUpModal 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
          position: relative;
        }

        @keyframes popUpModal {
          from { transform: scale(0.7) translateY(40px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .km-close {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.5);
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
        }

        .km-close:hover { background: rgba(245,243,239,0.12); color: var(--text-light); }

        .km-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .km-trophy {
          font-size: 56px;
          display: block;
          margin-bottom: 12px;
          animation: bounce3d 2s ease-in-out infinite;
        }

        .km-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 6px;
          background: linear-gradient(135deg, var(--accent-lavender), #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .km-subtitle {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.12em;
          margin-bottom: 12px;
        }

        .km-badge {
          display: inline-block;
          background: rgba(94,90,209,0.15);
          border: 1px solid rgba(94,90,209,0.3);
          color: var(--accent-lavender);
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.12em;
        }

        .km-desc {
          font-size: 14px;
          color: rgba(245,243,239,0.6);
          text-align: center;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .km-projects {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .km-project {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 12px;
          padding: 18px;
          animation: fadeIn 0.5s ease both;
        }

        .kmp-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .kmp-desc {
          font-size: 13px;
          color: rgba(245,243,239,0.55);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .kmp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .kmp-tags { display: flex; gap: 6px; flex-wrap: wrap; }

        .kmp-tag {
          font-size: 10px;
          background: rgba(160,175,238,0.1);
          border: 1px solid rgba(160,175,238,0.15);
          color: var(--accent-lavender);
          padding: 3px 9px;
          border-radius: 100px;
        }

        .kmp-status {
          font-size: 10px;
          color: #10b981;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .km-closer {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          text-align: center;
          letter-spacing: 0.05em;
        }
      `}</style>
    </>
  );
}
