import React, { useState, useEffect } from 'react';

const ACHIEVEMENTS = [
  {
    id: 1,
    icon: '🏆',
    tier: 'GOLD',
    title: 'LeetCode 1753 Rating',
    subtitle: '3-Star Developer',
    desc: '1500+ problems solved across GFG & LeetCode platforms',
    color: '#f6ad55',
    glow: 'rgba(246,173,85,0.3)',
    stat: '1500+',
    statLabel: 'Problems'
  },
  {
    id: 2,
    icon: '🎰',
    tier: 'PLATINUM',
    title: 'BastaxCasino',
    subtitle: 'iGaming Platform Architect',
    desc: '50k+ daily bet events processed, 99.9% uptime across European markets',
    color: '#b794f4',
    glow: 'rgba(183,148,244,0.3)',
    stat: '99.9%',
    statLabel: 'Uptime'
  },
  {
    id: 3,
    icon: '⚖️',
    tier: 'GOLD',
    title: 'Jupitice Justice',
    subtitle: 'Government Legal Pipelines',
    desc: 'Supreme & High Court scraper processing 100k+ judicial records daily',
    color: '#68d391',
    glow: 'rgba(104,211,145,0.3)',
    stat: '100k+',
    statLabel: 'Records/Day'
  },
  {
    id: 4,
    icon: '🥇',
    tier: 'LEGENDARY',
    title: 'Campus Rank #1',
    subtitle: 'GeeksForGeeks — CGC Landran',
    desc: 'Top ranked competitive programmer in entire campus history',
    color: '#fc8181',
    glow: 'rgba(252,129,129,0.3)',
    stat: '#1',
    statLabel: 'Campus Rank'
  },
  {
    id: 5,
    icon: '📨',
    tier: 'GOLD',
    title: 'WhatsApp Webhooks',
    subtitle: 'Meta Business API Integration',
    desc: 'Production WhatsApp Business webhook system for enterprise notifications',
    color: '#76e4f7',
    glow: 'rgba(118,228,247,0.3)',
    stat: '100+',
    statLabel: 'APIs Built'
  },
  {
    id: 6,
    icon: '🌐',
    tier: 'SILVER',
    title: 'ICPC Regionals 2021',
    subtitle: 'Amritapuri Regional Contest',
    desc: 'Team Rank 613 in prestigious ACM-ICPC Regional Competition',
    color: '#a0afee',
    glow: 'rgba(160,175,238,0.3)',
    stat: 'Rank 613',
    statLabel: 'ICPC'
  },
];

const TIER_COLORS = {
  LEGENDARY: 'linear-gradient(135deg, #f6d365, #fda085)',
  PLATINUM: 'linear-gradient(135deg, #c3cfe2, #b794f4)',
  GOLD: 'linear-gradient(135deg, #f6ad55, #fbd38d)',
  SILVER: 'linear-gradient(135deg, #a0afee, #c3ccf6)',
};

export default function AchievementTrophyRoom() {
  const [selectedAch, setSelectedAch] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (selectedAch !== null) {
      // Spawn celebration particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: ACHIEVEMENTS[selectedAch]?.color || '#b794f4',
      }));
      setParticles(newParticles);
      const timer = setTimeout(() => setParticles([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedAch]);

  const ach = selectedAch !== null ? ACHIEVEMENTS[selectedAch] : null;

  return (
    <section id="trophy-room" className="trophy-room-section">
      <div className="container">
        <span className="section-tag">Hall of Excellence</span>
        <h2 className="section-title">Achievement Trophy Room 🏆</h2>
        <p className="section-subtitle">
          Milestones from competitive programming, production systems, and enterprise engineering. Click any trophy to expand details.
        </p>

        {/* Particle celebration */}
        <div className="particle-container">
          {particles.map(p => (
            <div
              key={p.id}
              className="confetti-particle"
              style={{
                left: `${p.x}%`,
                background: p.color,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="trophy-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={ach.id}
              className={`trophy-card ${selectedAch === i ? 'selected' : ''} ${hovered === i ? 'hovered' : ''}`}
              onClick={() => setSelectedAch(prev => prev === i ? null : i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                '--card-color': ach.color,
                '--card-glow': ach.glow,
                animationDelay: `${i * 0.1}s`
              }}
            >
              {/* Tier badge */}
              <div className="tier-badge font-mono" style={{ background: TIER_COLORS[ach.tier] || '#333' }}>
                {ach.tier}
              </div>

              {/* Trophy Icon with 3D effect */}
              <div className="trophy-icon-wrapper">
                <div className={`trophy-icon-3d ${hovered === i || selectedAch === i ? 'spin' : ''}`}>
                  <span className="trophy-emoji">{ach.icon}</span>
                </div>
                <div className="trophy-shadow"></div>
              </div>

              <div className="trophy-content">
                <div className="trophy-stat font-mono" style={{ color: ach.color }}>
                  <span className="stat-big">{ach.stat}</span>
                  <span className="stat-label">{ach.statLabel}</span>
                </div>
                <h3 className="trophy-title">{ach.title}</h3>
                <p className="trophy-subtitle">{ach.subtitle}</p>

                {selectedAch === i && (
                  <div className="trophy-expanded">
                    <p className="trophy-desc">{ach.desc}</p>
                  </div>
                )}
              </div>

              {/* Animated glow border */}
              <div className="card-glow-border" style={{ borderColor: ach.color }}></div>
            </div>
          ))}
        </div>

        {/* Expanded detail panel */}
        {ach && (
          <div className="trophy-detail-panel" style={{ borderColor: ach.color, '--glow': ach.glow }}>
            <div className="tdp-header">
              <span className="tdp-icon">{ach.icon}</span>
              <div className="tdp-titles">
                <h3 style={{ color: ach.color }}>{ach.title}</h3>
                <span className="tdp-sub font-mono">{ach.subtitle}</span>
              </div>
              <div className="tdp-stat font-mono" style={{ color: ach.color }}>
                <span>{ach.stat}</span>
                <small>{ach.statLabel}</small>
              </div>
              <button className="tdp-close" onClick={() => setSelectedAch(null)}>✕</button>
            </div>
            <p className="tdp-desc">{ach.desc}</p>
            <div className="tdp-tier-bar">
              <span className="font-mono" style={{ color: ach.color }}>// Achievement Tier: <strong>{ach.tier}</strong></span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .trophy-room-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        .particle-container {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .confetti-particle {
          position: absolute;
          top: -10px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          animation: confettiFall 1.8s ease-out forwards;
        }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }

        .trophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          position: relative;
          z-index: 1;
          margin-bottom: 32px;
        }

        .trophy-card {
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
          animation: fadeIn 0.5s ease both;
        }

        .trophy-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--card-glow, transparent) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .trophy-card:hover::before, .trophy-card.selected::before {
          opacity: 1;
        }

        .trophy-card:hover, .trophy-card.selected {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px var(--card-glow, rgba(0,0,0,0.1)), 0 0 0 1px var(--card-color);
          border-color: var(--card-color);
        }

        .card-glow-border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          border: 2px solid transparent;
          pointer-events: none;
        }

        .tier-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 8px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 100px;
          color: #fff;
          letter-spacing: 0.1em;
        }

        .trophy-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
          perspective: 500px;
        }

        .trophy-icon-3d {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .trophy-icon-3d.spin {
          animation: trophySpin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes trophySpin {
          0% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.2); }
          100% { transform: rotateY(360deg) scale(1); }
        }

        .trophy-emoji {
          font-size: 40px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }

        .trophy-shadow {
          width: 40px;
          height: 8px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.15), transparent);
          border-radius: 50%;
          margin-top: 4px;
        }

        .trophy-stat {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }

        .stat-big {
          font-size: 24px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 10px;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trophy-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .trophy-subtitle {
          font-size: 12px;
          color: var(--text-muted-dark);
          font-family: var(--font-mono);
        }

        .trophy-expanded {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
          animation: fadeIn 0.3s ease;
        }

        .trophy-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        /* Detail panel */
        .trophy-detail-panel {
          background: var(--bg-darker);
          border: 2px solid;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px var(--glow, rgba(0,0,0,0.1));
          animation: fadeIn 0.3s ease;
        }

        .tdp-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .tdp-icon { font-size: 36px; }

        .tdp-titles { flex: 1; }
        .tdp-titles h3 { font-size: 20px; font-weight: 600; }
        .tdp-sub { font-size: 11px; color: var(--text-muted-dark); }

        .tdp-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .tdp-stat span { font-size: 22px; font-weight: 700; }
        .tdp-stat small { font-size: 9px; opacity: 0.7; }

        .tdp-close {
          background: none;
          border: 1px solid var(--border-color);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          color: var(--text-muted-dark);
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
        }
        .tdp-close:hover { background: var(--bg-secondary); }

        .tdp-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 16px;
        }

        .tdp-tier-bar {
          font-size: 11px;
          color: var(--text-muted-dark);
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .trophy-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .trophy-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
