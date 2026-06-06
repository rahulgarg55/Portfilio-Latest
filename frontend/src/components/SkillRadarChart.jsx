import React, { useEffect, useRef, useState } from 'react';

const AXES = [
  { key: 'backend', label: 'Backend Architecture', max: 100 },
  { key: 'frontend', label: 'Frontend / UI', max: 100 },
  { key: 'dsa', label: 'DSA & Algorithms', max: 100 },
  { key: 'devops', label: 'DevOps & Cloud', max: 100 },
  { key: 'system', label: 'System Design', max: 100 },
  { key: 'database', label: 'Database & SQL', max: 100 },
  { key: 'realtime', label: 'Real-time Systems', max: 100 },
  { key: 'leadership', label: 'Team Leadership', max: 100 },
];

const PROFILES = [
  {
    name: 'Rahul Garg',
    color: '#5e5ad1',
    fillOpacity: 0.18,
    values: {
      backend: 92, frontend: 80, dsa: 88, devops: 78,
      system: 86, database: 90, realtime: 85, leadership: 82
    }
  },
  {
    name: 'Avg Mid-Level Eng',
    color: '#fc8181',
    fillOpacity: 0.08,
    values: {
      backend: 70, frontend: 68, dsa: 65, devops: 62,
      system: 65, database: 68, realtime: 60, leadership: 63
    }
  }
];

function polarToXY(angle, radius, cx, cy) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function SkillRadarChart() {
  const [animProgress, setAnimProgress] = useState(0);
  const [hoveredAxis, setHoveredAxis] = useState(null);
  const sectionRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = null;
          const duration = 1400;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            setAnimProgress(Math.min(elapsed / duration, 1));
            if (elapsed < duration) animRef.current = requestAnimationFrame(step);
          };
          animRef.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const cx = 220, cy = 220, maxR = 160;
  const n = AXES.length;
  const angleStep = 360 / n;

  // Ease function
  const easeOutElastic = (t) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 :
      Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  };
  const progress = easeOutElastic(animProgress);

  // Grid rings
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Build polygon points for a profile
  const buildPath = (profile) => {
    return AXES.map((axis, i) => {
      const val = (profile.values[axis.key] / 100) * progress;
      const { x, y } = polarToXY(i * angleStep, val * maxR, cx, cy);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <section id="skill-radar" className="radar-section" ref={sectionRef}>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Skill Dimensions</span>
        <h2 className="section-title light">Engineering Radar Chart</h2>
        <p className="section-subtitle light">
          Multi-dimensional skill analysis across 8 engineering domains — vs. average mid-level engineer benchmarks.
        </p>

        <div className="radar-layout">
          <div className="radar-chart-wrap">
            <svg viewBox={`0 0 ${cx * 2} ${cy * 2}`} className="radar-svg">
              {/* Grid rings */}
              {rings.map((r, ri) => (
                <polygon
                  key={ri}
                  points={AXES.map((_, i) => {
                    const { x, y } = polarToXY(i * angleStep, r * maxR, cx, cy);
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="rgba(160,175,238,0.12)"
                  strokeWidth="1"
                />
              ))}

              {/* Ring labels */}
              {rings.map((r, ri) => (
                <text
                  key={ri}
                  x={cx + 4}
                  y={cy - r * maxR + 4}
                  fontSize="8"
                  fill="rgba(160,175,238,0.35)"
                  fontFamily="monospace"
                >{Math.round(r * 100)}%</text>
              ))}

              {/* Axis lines */}
              {AXES.map((_, i) => {
                const end = polarToXY(i * angleStep, maxR, cx, cy);
                return (
                  <line
                    key={i}
                    x1={cx} y1={cy}
                    x2={end.x} y2={end.y}
                    stroke="rgba(160,175,238,0.15)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Profiles (filled polygons) */}
              {PROFILES.map((profile, pi) => (
                <polygon
                  key={pi}
                  points={buildPath(profile)}
                  fill={profile.color}
                  fillOpacity={profile.fillOpacity}
                  stroke={profile.color}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              ))}

              {/* Axis dots and labels */}
              {AXES.map((axis, i) => {
                const pt = polarToXY(i * angleStep, maxR + 22, cx, cy);
                const dotPt = polarToXY(i * angleStep, maxR, cx, cy);
                const isHov = hoveredAxis === axis.key;
                const val = PROFILES[0].values[axis.key];
                return (
                  <g key={i}
                    onMouseEnter={() => setHoveredAxis(axis.key)}
                    onMouseLeave={() => setHoveredAxis(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle
                      cx={dotPt.x} cy={dotPt.y} r={isHov ? 5 : 3}
                      fill={PROFILES[0].color}
                      style={{ transition: 'r 0.2s' }}
                    />
                    <text
                      x={pt.x} y={pt.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={isHov ? "9.5" : "8.5"}
                      fill={isHov ? PROFILES[0].color : "rgba(245,243,239,0.65)"}
                      fontFamily="sans-serif"
                      fontWeight={isHov ? "700" : "400"}
                      style={{ transition: 'all 0.2s' }}
                    >
                      {axis.label}
                    </text>
                    {isHov && (
                      <text
                        x={dotPt.x} y={dotPt.y - 10}
                        textAnchor="middle"
                        fontSize="9"
                        fill={PROFILES[0].color}
                        fontFamily="monospace"
                        fontWeight="700"
                      >{val}%</text>
                    )}
                  </g>
                );
              })}

              {/* Center dot */}
              <circle cx={cx} cy={cy} r={3} fill={PROFILES[0].color} />
            </svg>
          </div>

          <div className="radar-info">
            {/* Legend */}
            <div className="radar-legend">
              {PROFILES.map((p, i) => (
                <div key={i} className="legend-item">
                  <div className="legend-color" style={{ background: p.color }}></div>
                  <span className="legend-name">{p.name}</span>
                </div>
              ))}
            </div>

            {/* Axis breakdown */}
            <div className="axis-breakdown">
              {AXES.map((axis) => {
                const rahul = PROFILES[0].values[axis.key];
                const avg = PROFILES[1].values[axis.key];
                const diff = rahul - avg;
                return (
                  <div
                    key={axis.key}
                    className={`axis-row ${hoveredAxis === axis.key ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredAxis(axis.key)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    <span className="axis-label">{axis.label}</span>
                    <div className="axis-bars">
                      <div className="axis-bar-wrap">
                        <div className="axis-bar rahul-bar"
                          style={{ width: `${rahul * animProgress}%`, background: PROFILES[0].color }} />
                        <span className="axis-val font-mono" style={{ color: PROFILES[0].color }}>{rahul}%</span>
                      </div>
                      <div className="axis-bar-wrap">
                        <div className="axis-bar avg-bar"
                          style={{ width: `${avg * animProgress}%`, background: PROFILES[1].color }} />
                        <span className="axis-val font-mono" style={{ color: PROFILES[1].color }}>{avg}%</span>
                      </div>
                    </div>
                    <span className={`axis-diff font-mono ${diff >= 0 ? 'pos' : 'neg'}`}>
                      {diff >= 0 ? '+' : ''}{diff}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .radar-section {
          background: var(--bg-darker);
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .radar-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .radar-chart-wrap {
          display: flex;
          justify-content: center;
        }

        .radar-svg {
          width: 100%;
          max-width: 440px;
          overflow: visible;
        }

        .radar-legend {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(245,243,239,0.7);
        }

        .legend-color {
          width: 10px; height: 10px; border-radius: 50%;
        }

        .axis-breakdown {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .axis-row {
          display: grid;
          grid-template-columns: 140px 1fr 40px;
          align-items: center;
          gap: 12px;
          padding: 6px 8px;
          border-radius: 6px;
          transition: background 0.15s;
          cursor: pointer;
        }

        .axis-row.hovered {
          background: rgba(94,90,209,0.1);
        }

        .axis-label {
          font-size: 11px;
          color: rgba(245,243,239,0.6);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .axis-bars {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .axis-bar-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .axis-bar {
          height: 4px;
          border-radius: 2px;
          min-width: 4px;
          max-width: 100%;
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .axis-val {
          font-size: 9px;
          min-width: 24px;
        }

        .axis-diff {
          font-size: 11px;
          font-weight: 700;
          text-align: right;
        }
        .axis-diff.pos { color: #10b981; }
        .axis-diff.neg { color: #fc8181; }

        @media (max-width: 900px) {
          .radar-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
