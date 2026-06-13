import React, { useState, useEffect } from 'react';

const TIMELINE_EVENTS = [
  {
    year: '2019',
    title: 'Competitive Programming Journey Begins',
    company: 'CGC Landran — B.Tech CSE',
    icon: '🎓',
    color: '#63b3ed',
    details: 'Enrolled in Computer Science. Started competitive programming on GFG and LeetCode. Rank #1 on campus.',
    tags: ['C++', 'DSA', 'Algorithms'],
    xp: 100
  },
  {
    year: '2021',
    title: 'ICPC Regionals Qualifier',
    company: 'Amritapuri Regional — ACM-ICPC',
    icon: '🏅',
    color: '#b794f4',
    details: 'Represented college in the prestigious ACM-ICPC Regionals. Team Rank 613 among top university teams.',
    tags: ['Competitive Programming', 'Team Work'],
    xp: 150
  },
  {
    year: '2022',
    title: 'First Full Stack Role',
    company: 'Zapbuild Technologies',
    icon: '🚀',
    color: '#68d391',
    details: 'Built MySQL data warehouses, RBAC systems, and React interfaces. Learned Express.js microservice patterns.',
    tags: ['MySQL', 'React', 'Express', 'RBAC'],
    xp: 200
  },
  {
    year: '2023',
    title: 'iGaming Platform Architect',
    company: 'Basta Tech — BastaxCasino',
    icon: '🎰',
    color: '#f6ad55',
    details: 'Led backend development for a European casino. Designed Redis caching, Kafka bet processing, 100+ game APIs.',
    tags: ['Redis', 'Kafka', 'MongoDB', 'Node.js'],
    xp: 350
  },
  {
    year: '2024',
    title: 'Integrations & Automation Expert',
    company: 'Basta Tech — Advanced Systems',
    icon: '⚡',
    color: '#fc8181',
    details: 'Zapier integrations, Google Calendar, Microsoft 365, food store platform. Helping peers build stronger CVs.',
    tags: ['Zapier', 'Google API', 'M365', 'Webhooks'],
    xp: 280
  },
  {
    year: '2025',
    title: 'Government-Tier Engineer',
    company: 'Jupitice Justice Technologies',
    icon: '⚖️',
    color: '#9ae6b4',
    details: 'Judicial data pipelines, Supreme Court scrapers, WhatsApp Business APIs, Offline KYC systems for government use.',
    tags: ['ETL', 'WhatsApp API', 'KYC', 'Legal Tech'],
    xp: 400
  },
];

export default function CareerTimeline3D() {
  const [activeEvent, setActiveEvent] = useState(5); // Latest by default
  const [totalXP, setTotalXP] = useState(0);
  const [animatedXP, setAnimatedXP] = useState(0);

  const maxXP = TIMELINE_EVENTS.reduce((s, e) => s + e.xp, 0);

  useEffect(() => {
    const sum = TIMELINE_EVENTS.slice(0, activeEvent + 1).reduce((s, e) => s + e.xp, 0);
    setTotalXP(sum);
  }, [activeEvent]);

  useEffect(() => {
    // Animate XP counter
    const diff = totalXP - animatedXP;
    if (diff === 0) return;
    const step = Math.ceil(Math.abs(diff) / 20);
    const timer = setTimeout(() => {
      setAnimatedXP(prev => prev < totalXP ? Math.min(prev + step, totalXP) : Math.max(prev - step, totalXP));
    }, 20);
    return () => clearTimeout(timer);
  }, [totalXP, animatedXP]);

  const event = TIMELINE_EVENTS[activeEvent];

  return (
    <section id="career-timeline-3d" className="ct3d-section">
      <div className="container">
        <span className="section-tag">Career Journey</span>
        <h2 className="section-title">3D Career Timeline</h2>
        <p className="section-subtitle">
          An interactive journey through Rahul's professional evolution — from campus coder to enterprise engineer.
        </p>

        {/* XP Progress Bar */}
        <div className="xp-progress-bar-container">
          <div className="xp-header">
            <span className="font-mono xp-label">🎮 ENGINEERING XP PROGRESS</span>
            <span className="font-mono xp-value" style={{ color: event.color }}>{animatedXP} / {maxXP} XP</span>
          </div>
          <div className="xp-bar-track">
            <div
              className="xp-bar-fill"
              style={{
                width: `${(animatedXP / maxXP) * 100}%`,
                background: `linear-gradient(90deg, #5e5ad1, ${event.color})`
              }}
            >
              <span className="xp-bar-glow"></span>
            </div>
          </div>
        </div>

        <div className="ct3d-layout">
          {/* 3D Isometric Timeline */}
          <div className="timeline-isometric">
            {TIMELINE_EVENTS.map((ev, i) => (
              <div
                key={i}
                className={`iso-node ${activeEvent === i ? 'active' : ''} ${i < activeEvent ? 'past' : ''}`}
                onClick={() => setActiveEvent(i)}
                style={{ '--ev-color': ev.color, '--ev-delay': `${i * 0.1}s` }}
              >
                <div className="iso-year font-mono">{ev.year}</div>
                <div className="iso-block">
                  <div className="iso-top">
                    <span className="iso-icon">{ev.icon}</span>
                  </div>
                  <div className="iso-side-r"></div>
                  <div className="iso-side-b"></div>
                </div>
                <div className="iso-title">{ev.title}</div>
                {i < TIMELINE_EVENTS.length - 1 && (
                  <div className="iso-connector">
                    <div className={`connector-line ${i < activeEvent ? 'active' : ''}`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Event Detail Card */}
          <div className="event-detail-panel" style={{ '--ev-color': event.color }}>
            <div className="edp-header" style={{ borderColor: event.color + '50' }}>
              <span className="edp-icon">{event.icon}</span>
              <div className="edp-meta">
                <span className="edp-year font-mono" style={{ color: event.color }}>{event.year}</span>
                <h3 className="edp-title">{event.title}</h3>
                <span className="edp-company font-mono">{event.company}</span>
              </div>
              <div className="edp-xp font-mono" style={{ color: event.color }}>
                +{event.xp} XP
              </div>
            </div>

            <p className="edp-details">{event.details}</p>

            <div className="edp-tags">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="edp-tag font-mono"
                  style={{ color: event.color, borderColor: event.color + '40', background: event.color + '10' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="edp-nav">
              <button
                className="edp-btn"
                onClick={() => setActiveEvent(a => Math.max(0, a - 1))}
                disabled={activeEvent === 0}
              >
                ← Previous
              </button>
              <span className="edp-progress font-mono">{activeEvent + 1} / {TIMELINE_EVENTS.length}</span>
              <button
                className="edp-btn edp-btn-next"
                onClick={() => setActiveEvent(a => Math.min(TIMELINE_EVENTS.length - 1, a + 1))}
                disabled={activeEvent === TIMELINE_EVENTS.length - 1}
                style={{ borderColor: event.color, color: event.color }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ct3d-section {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        /* XP bar */
        .xp-progress-bar-container {
          margin-bottom: 40px;
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 20px 24px;
        }

        .xp-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .xp-label {
          font-size: 10px;
          color: var(--text-muted-dark);
          letter-spacing: 0.1em;
        }

        .xp-value {
          font-size: 14px;
          font-weight: 700;
          transition: color 0.5s;
        }

        .xp-bar-track {
          height: 10px;
          background: var(--bg-secondary);
          border-radius: 5px;
          overflow: hidden;
        }

        .xp-bar-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .xp-bar-glow {
          position: absolute;
          right: -4px;
          top: -2px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--text-light);
          box-shadow: 0 0 8px currentColor;
        }

        /* Isometric layout */
        .ct3d-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 40px;
          align-items: start;
        }

        .timeline-isometric {
          display: flex;
          align-items: flex-start;
          gap: 0;
          overflow-x: auto;
          padding: 20px 10px 30px;
        }

        .iso-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          position: relative;
          min-width: 100px;
          transition: transform 0.3s;
        }

        .iso-node:hover { transform: translateY(-4px); }

        .iso-year {
          font-size: 10px;
          color: var(--text-muted-dark);
          margin-bottom: 8px;
          letter-spacing: 0.05em;
        }

        .iso-node.active .iso-year {
          color: var(--ev-color);
          font-weight: 700;
        }

        .iso-block {
          width: 64px;
          height: 64px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(-20deg);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }

        .iso-node:hover .iso-block,
        .iso-node.active .iso-block {
          transform: rotateX(25deg) rotateY(-25deg) translateZ(8px);
        }

        .iso-top {
          width: 64px;
          height: 64px;
          background: var(--bg-darker);
          border: 2px solid var(--border-color);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .iso-node.active .iso-top {
          border-color: var(--ev-color);
          background: var(--bg-darker);
          box-shadow: 0 8px 20px var(--ev-color, rgba(0,0,0,0.15)), 0 0 0 2px var(--ev-color);
        }

        .iso-node.past .iso-top {
          background: var(--bg-secondary);
          opacity: 0.7;
        }

        .iso-icon {
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .iso-side-r {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 8px;
          height: 64px;
          background: rgba(0,0,0,0.08);
          transform: skewY(45deg);
          transform-origin: top right;
        }

        .iso-side-b {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 64px;
          height: 8px;
          background: rgba(0,0,0,0.05);
          transform: skewX(45deg);
          transform-origin: bottom left;
        }

        .iso-title {
          font-size: 9.5px;
          text-align: center;
          color: var(--text-muted-dark);
          margin-top: 16px;
          max-width: 90px;
          line-height: 1.3;
          font-weight: 500;
        }

        .iso-node.active .iso-title { color: var(--ev-color); font-weight: 700; }

        .iso-connector {
          position: absolute;
          right: -30px;
          top: 40px;
          width: 40px;
          height: 2px;
          z-index: 0;
        }

        .connector-line {
          width: 100%;
          height: 2px;
          background: var(--border-color);
          border-radius: 1px;
          transition: background 0.5s;
        }

        .connector-line.active {
          background: linear-gradient(90deg, #5e5ad1, var(--ev-color, #5e5ad1));
        }

        /* Event Detail Panel */
        .event-detail-panel {
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          animation: fadeIn 0.3s ease;
        }

        .edp-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          border-bottom: 1px solid;
        }

        .edp-icon { font-size: 30px; }

        .edp-meta { flex: 1; }
        .edp-year { font-size: 10px; letter-spacing: 0.1em; display: block; margin-bottom: 4px; }
        .edp-title { font-size: 16px; font-weight: 600; color: var(--text-dark); margin-bottom: 4px; }
        .edp-company { font-size: 11px; color: var(--text-muted-dark); }

        .edp-xp {
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes popIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .edp-details {
          padding: 18px 22px;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-dark);
        }

        .edp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 22px 18px;
        }

        .edp-tag {
          font-size: 10px;
          padding: 4px 10px;
          border: 1px solid;
          border-radius: 100px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .edp-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px;
          border-top: 1px solid var(--border-color);
        }

        .edp-btn {
          background: none;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 12px;
          font-family: var(--font-sans);
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: 0.2s;
        }

        .edp-btn:hover:not(:disabled) { background: var(--bg-secondary); }
        .edp-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .edp-btn.edp-btn-next { font-weight: 600; }

        .edp-progress {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        @media (max-width: 900px) {
          .ct3d-layout { grid-template-columns: 1fr; }
          .timeline-isometric { justify-content: flex-start; }
        }
      `}</style>
    </section>
  );
}
