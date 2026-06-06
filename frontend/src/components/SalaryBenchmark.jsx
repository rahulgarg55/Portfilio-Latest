import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

const MARKET_DATA = [
  {
    role: 'Junior Dev (1yr)',
    range: [400000, 700000],
    color: '#94a3b8',
    icon: '🟢'
  },
  {
    role: 'Mid-Level (Avg)',
    range: [800000, 1200000],
    color: '#63b3ed',
    icon: '🔵'
  },
  {
    role: 'Rahul Garg',
    range: [1200000, 1800000],
    color: '#5e5ad1',
    icon: '⭐',
    highlight: true
  },
  {
    role: 'Senior Dev',
    range: [1800000, 2800000],
    color: '#b794f4',
    icon: '🟣'
  },
  {
    role: 'Lead / Staff Eng',
    range: [2800000, 4500000],
    color: '#f6ad55',
    icon: '🟡'
  },
];

const SKILLS_VALUE = [
  { skill: 'Kafka + Redis (Event Arch)', bonus: '+18%', color: '#b794f4' },
  { skill: 'WhatsApp Meta Business API', bonus: '+12%', color: '#68d391' },
  { skill: 'iGaming Domain (Niche)', bonus: '+22%', color: '#f6ad55' },
  { skill: 'Government Legal Tech', bonus: '+15%', color: '#fc8181' },
  { skill: 'LeetCode 1753 Rating', bonus: '+8%', color: '#63b3ed' },
];

const MAX_SALARY = 4500000;

function formatINR(n) {
  if (n >= 1000000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${(n / 1000).toFixed(0)}K`;
}

export default function SalaryBenchmark() {
  const [animated, setAnimated] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="salary-benchmark" className="salary-section" ref={sectionRef}>
      <div className="container">
        <span className="section-tag">Market Position</span>
        <h2 className="section-title">
          <TrendingUp size={28} style={{ display: 'inline', marginRight: 10, color: '#10b981', verticalAlign: 'middle' }} />
          Market Value Benchmark
        </h2>
        <p className="section-subtitle">
          Where Rahul sits in the Indian tech hiring market based on skill stack, domain expertise, and industry experience.
          Niche skills command premium packages.
        </p>

        <div className="salary-layout">
          {/* Bar chart */}
          <div className="salary-chart">
            {MARKET_DATA.map((row, i) => {
              const leftPct = (row.range[0] / MAX_SALARY) * 100;
              const widthPct = ((row.range[1] - row.range[0]) / MAX_SALARY) * 100;
              const isHov = hoveredRow === i;

              return (
                <div
                  key={i}
                  className={`salary-row ${row.highlight ? 'highlight-row' : ''} ${isHov ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="row-label">
                    <span className="row-icon">{row.icon}</span>
                    <span className="row-name" style={{ color: row.highlight ? '#fff' : 'inherit' }}>{row.role}</span>
                  </div>

                  <div className="bar-track">
                    {/* Min tick */}
                    <span className="bar-tick-label font-mono" style={{ left: `${leftPct}%` }}>
                      {formatINR(row.range[0])}
                    </span>

                    {/* Bar */}
                    <div
                      className="bar-fill"
                      style={{
                        left: `${leftPct}%`,
                        width: animated ? `${widthPct}%` : '0%',
                        background: row.highlight
                          ? `linear-gradient(90deg, ${row.color}, #a0afee)`
                          : row.color,
                        transitionDelay: `${i * 0.12}s`,
                        boxShadow: row.highlight ? `0 0 16px ${row.color}80` : 'none',
                      }}
                    >
                      {row.highlight && animated && (
                        <span className="bar-label-inside font-mono">YOU ARE HERE ⭐</span>
                      )}
                    </div>

                    {/* Max tick */}
                    <span className="bar-tick-label bar-tick-right font-mono"
                      style={{ left: `${leftPct + widthPct}%` }}>
                      {formatINR(row.range[1])}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* X-axis labels */}
            <div className="x-axis">
              {[0, 1000000, 2000000, 3000000, 4000000, 4500000].map(v => (
                <span key={v} className="x-label font-mono" style={{ left: `${(v / MAX_SALARY) * 100}%` }}>
                  {formatINR(v)}
                </span>
              ))}
            </div>
          </div>

          {/* Skill premium panel */}
          <div className="skill-premium-panel">
            <h3 className="premium-title font-mono">// SKILL PREMIUM DRIVERS</h3>
            <p className="premium-desc">These niche skills push compensation above market average:</p>

            <div className="premium-list">
              {SKILLS_VALUE.map((sv, i) => (
                <div key={i} className="premium-row" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="premium-bar-bg">
                    <div
                      className="premium-bar"
                      style={{
                        width: animated ? sv.bonus.replace('+', '').replace('%', '') + '%' : '0%',
                        background: sv.color,
                        transitionDelay: `${0.5 + i * 0.12}s`
                      }}
                    />
                  </div>
                  <div className="premium-info">
                    <span className="premium-skill">{sv.skill}</span>
                    <span className="premium-bonus font-mono" style={{ color: sv.color }}>{sv.bonus}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="disclaimer font-mono">
              * Based on Naukri/LinkedIn 2025 mid-level India market data
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .salary-section {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .salary-layout {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .salary-chart {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .salary-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.2s;
          cursor: default;
        }

        .salary-row.highlight-row {
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.2);
        }

        .salary-row.hovered {
          background: rgba(94,90,209,0.05);
        }

        .row-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .row-icon { font-size: 14px; }

        .row-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .highlight-row .row-name {
          color: var(--accent-purple);
          font-weight: 700;
        }

        .bar-track {
          height: 24px;
          background: rgba(17,28,45,0.06);
          border-radius: 4px;
          position: relative;
          overflow: visible;
        }

        .bar-fill {
          position: absolute;
          height: 100%;
          border-radius: 4px;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .bar-label-inside {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 8px;
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          letter-spacing: 0.05em;
          animation: fadeIn 0.5s ease 1.5s both;
        }

        .bar-tick-label {
          position: absolute;
          top: -18px;
          font-size: 9px;
          color: rgba(17,28,45,0.4);
          transform: translateX(-50%);
        }

        .bar-tick-right {
          top: auto;
          bottom: -18px;
        }

        .x-axis {
          position: relative;
          height: 20px;
          margin-top: 8px;
          border-top: 1px solid rgba(17,28,45,0.08);
        }

        .x-label {
          position: absolute;
          transform: translateX(-50%);
          font-size: 9px;
          color: rgba(17,28,45,0.4);
          top: 4px;
        }

        /* Skill premium */
        .skill-premium-panel {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.03);
        }

        .premium-title {
          font-size: 10px;
          color: var(--accent-purple);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .premium-desc {
          font-size: 12px;
          color: var(--text-muted-dark);
          margin-bottom: 20px;
        }

        .premium-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .premium-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fadeIn 0.5s ease both;
        }

        .premium-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .premium-skill {
          font-size: 12px;
          color: var(--text-dark);
          font-weight: 500;
        }

        .premium-bonus {
          font-size: 12px;
          font-weight: 700;
        }

        .premium-bar-bg {
          height: 5px;
          background: rgba(17,28,45,0.06);
          border-radius: 3px;
          overflow: hidden;
        }

        .premium-bar {
          height: 100%;
          border-radius: 3px;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .disclaimer {
          margin-top: 20px;
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.05em;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }

        @media (max-width: 900px) {
          .salary-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
