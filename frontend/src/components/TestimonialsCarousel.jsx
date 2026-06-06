import React, { useState, useRef, useEffect } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Arun Sharma',
    role: 'CTO at Basta Tech',
    avatar: 'AS',
    color: '#b794f4',
    rating: 5,
    text: 'Rahul architected our entire casino backend from scratch — Kafka pipelines, Redis caching, Socket.IO dashboards. The system has maintained 99.9% uptime across 50k+ daily transactions. Exceptional backend thinking.',
    company: 'BastaxCasino',
    highlight: 'Built entire backend stack'
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Engineering Manager at Jupitice',
    avatar: 'PV',
    color: '#68d391',
    rating: 5,
    text: 'Rahul\'s ETL pipeline scrapes 100k+ judicial records daily with zero data loss. His WhatsApp integration for Lok Adalat was flawless. He explains complex systems clearly and leads with initiative.',
    company: 'Jupitice Justice Tech',
    highlight: '100k+ records/day pipeline'
  },
  {
    id: 3,
    name: 'Kunal Mehta',
    role: 'Senior Developer at Zapbuild',
    avatar: 'KM',
    color: '#63b3ed',
    rating: 5,
    text: 'Rahul handled Zapier, Google Calendar, and Microsoft 365 integrations effortlessly. His RBAC implementations were clean and secure. A natural team player who also mentors junior devs actively.',
    company: 'Zapbuild Technologies',
    highlight: 'Enterprise integrations expert'
  },
  {
    id: 4,
    name: 'Simran Kaur',
    role: 'DSA Student, CGC Landran',
    avatar: 'SK',
    color: '#f6ad55',
    rating: 5,
    text: 'Rahul mentored me through 200+ DSA problems and helped me crack my placement interviews. He explains graph algorithms and DP with such clarity. Got placed at a top MNC thanks to his coaching!',
    company: 'Campus Mentorship',
    highlight: 'Helped 200+ students'
  },
  {
    id: 5,
    name: 'Dev Patel',
    role: 'Backend Engineer, Startup',
    avatar: 'DP',
    color: '#fc8181',
    rating: 5,
    text: 'Rahul reviewed my CV and portfolio. Within a week of his feedback, I got 3 interview calls. He knows exactly what recruiters at top companies look for. Real-world advice, not textbook stuff.',
    company: 'Career Mentorship',
    highlight: '50+ CVs reviewed'
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#ffd93d' : 'rgba(245,243,239,0.15)', fontSize: '14px' }}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState('right');
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const goTo = (idx, dir = 'right') => {
    setAnimDir(dir);
    setActive(idx);
  };

  const next = () => goTo((active + 1) % TESTIMONIALS.length, 'right');
  const prev = () => goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, 'left');

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [active, autoPlay]);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="testi-section dark-section">
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>What They Say</span>
        <h2 className="section-title light">Testimonials &<br />Recommendations</h2>

        <div className="testi-layout">
          {/* Main testimonial card */}
          <div className="testi-card" key={active} style={{ '--t-color': t.color }}>
            <div className="testi-quote-mark">"</div>

            <div className="testi-highlight font-mono" style={{ color: t.color }}>
              ✦ {t.highlight}
            </div>

            <p className="testi-text">"{t.text}"</p>

            <div className="testi-footer">
              <div className="testi-avatar" style={{ background: `linear-gradient(135deg, ${t.color}30, ${t.color}60)`, border: `2px solid ${t.color}` }}>
                {t.avatar}
              </div>
              <div className="testi-info">
                <strong className="testi-name" style={{ color: t.color }}>{t.name}</strong>
                <span className="testi-role">{t.role}</span>
                <span className="testi-company font-mono">{t.company}</span>
              </div>
              <Stars count={t.rating} />
            </div>
          </div>

          {/* Sidebar thumbnails */}
          <div className="testi-sidebar">
            <div className="testi-progress-label font-mono">
              {String(active + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </div>

            {TESTIMONIALS.map((item, i) => (
              <div
                key={item.id}
                className={`testi-thumb ${i === active ? 'active' : ''}`}
                style={{ '--tc': item.color }}
                onClick={() => { goTo(i); setAutoPlay(false); }}
              >
                <div className="thumb-avatar" style={{ background: `${item.color}25`, border: `1.5px solid ${item.color}` }}>
                  {item.avatar}
                </div>
                <div className="thumb-info">
                  <span className="thumb-name">{item.name}</span>
                  <span className="thumb-role font-mono">{item.company}</span>
                </div>
                {i === active && (
                  <div className="thumb-progress">
                    <div className="thumb-progress-fill" style={{ background: item.color }}></div>
                  </div>
                )}
              </div>
            ))}

            <div className="testi-controls">
              <button className="testi-btn" onClick={() => { prev(); setAutoPlay(false); }}>←</button>
              <button
                className={`autoplay-btn font-mono ${autoPlay ? 'on' : 'off'}`}
                onClick={() => setAutoPlay(a => !a)}
              >
                {autoPlay ? '⏸' : '▶'}
              </button>
              <button className="testi-btn" onClick={() => { next(); setAutoPlay(false); }}>→</button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === active ? 'active' : ''}`}
              style={i === active ? { background: t.color } : {}}
              onClick={() => { goTo(i); setAutoPlay(false); }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testi-section {
          background: #090b12;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .testi-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 32px;
          align-items: start;
          margin-bottom: 24px;
        }

        /* Main card */
        .testi-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid var(--t-color, rgba(245,243,239,0.1));
          border-radius: 20px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          animation: testiIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
          box-shadow: 0 0 40px var(--t-color, transparent);
        }

        @keyframes testiIn {
          from { opacity: 0; transform: scale(0.97) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .testi-quote-mark {
          position: absolute;
          top: 12px; right: 24px;
          font-size: 80px;
          color: var(--t-color);
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          pointer-events: none;
        }

        .testi-highlight {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
          display: block;
        }

        .testi-text {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(245,243,239,0.8);
          font-style: italic;
          margin-bottom: 28px;
        }

        .testi-footer {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .testi-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .testi-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .testi-name {
          font-size: 15px;
          font-weight: 700;
        }

        .testi-role {
          font-size: 12px;
          color: rgba(245,243,239,0.5);
        }

        .testi-company {
          font-size: 10px;
          color: rgba(245,243,239,0.3);
          letter-spacing: 0.08em;
        }

        .stars { display: flex; gap: 2px; }

        /* Sidebar */
        .testi-sidebar {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .testi-progress-label {
          font-size: 9px;
          color: rgba(245,243,239,0.2);
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        .testi-thumb {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(245,243,239,0.06);
          background: rgba(245,243,239,0.02);
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .testi-thumb:hover {
          background: rgba(245,243,239,0.04);
          border-color: var(--tc);
        }

        .testi-thumb.active {
          border-color: var(--tc);
          background: rgba(245,243,239,0.05);
        }

        .thumb-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .thumb-info { flex: 1; min-width: 0; }

        .thumb-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-light);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .thumb-role {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.05em;
          display: block;
        }

        .thumb-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: rgba(245,243,239,0.05);
        }

        .thumb-progress-fill {
          height: 100%;
          animation: progressFill 5s linear both;
        }

        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        .testi-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .testi-btn {
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          color: rgba(245,243,239,0.7);
          width: 36px; height: 36px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testi-btn:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .autoplay-btn {
          flex: 1;
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.08);
          color: rgba(245,243,239,0.4);
          padding: 8px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.2s;
          letter-spacing: 0.05em;
        }

        .autoplay-btn.on { color: #10b981; border-color: rgba(16,185,129,0.25); }

        /* Dots */
        .testi-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .testi-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(245,243,239,0.15);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }

        .testi-dot.active {
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .testi-layout { grid-template-columns: 1fr; }
          .testi-sidebar { flex-direction: row; flex-wrap: wrap; }
          .testi-thumb { flex: 1; min-width: 140px; }
        }
      `}</style>
    </section>
  );
}
