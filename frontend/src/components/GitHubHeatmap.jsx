import React, { useState, useEffect, useRef } from 'react';

// Simulated 52-week contribution grid (GitHub-style)
function generateHeatmap() {
  const weeks = 52;
  const data = [];
  
  // Categories for labels
  const highlights = {
    10: { label: 'Kafka Integration', color: '#b794f4' },
    18: { label: 'Casino APIs Launch', color: '#f6ad55' },
    27: { label: 'Court ETL Pipeline', color: '#68d391' },
    35: { label: 'WhatsApp Webhooks', color: '#fc8181' },
    44: { label: 'LeetCode Streak', color: '#63b3ed' },
  };

  for (let w = 0; w < weeks; w++) {
    const days = [];
    const isHighlight = highlights[w];
    for (let d = 0; d < 7; d++) {
      let intensity;
      if (isHighlight) {
        intensity = d === 0 ? 0 : Math.floor(Math.random() * 2) + 3; // heavy week
      } else {
        const base = Math.random();
        intensity = base < 0.2 ? 0 : base < 0.45 ? 1 : base < 0.7 ? 2 : base < 0.88 ? 3 : 4;
      }
      days.push({ intensity, week: w, day: d });
    }
    data.push({ days, highlight: highlights[w] || null });
  }
  return data;
}

const HEATMAP = generateHeatmap();

const INTENSITY_COLORS = [
  '#1a1f2e',   // 0 - empty
  '#1e3a5f',   // 1 - light
  '#2d5a8e',   // 2 - moderate
  '#5e5ad1',   // 3 - active
  '#a0afee',   // 4 - peak
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function GitHubHeatmap() {
  const [visibleWeeks, setVisibleWeeks] = useState(0);
  const [tooltip, setTooltip] = useState(null);
  const [streakInfo, setStreakInfo] = useState({ current: 0, longest: 0, total: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let week = 0;
          const interval = setInterval(() => {
            week++;
            setVisibleWeeks(week);
            if (week >= 52) clearInterval(interval);
          }, 18);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Calculate stats
    const allCells = HEATMAP.flatMap(w => w.days);
    const total = allCells.filter(c => c.intensity > 0).length;
    const streak = Math.floor(Math.random() * 40) + 20;
    const longest = Math.floor(Math.random() * 60) + 60;
    setStreakInfo({ current: streak, longest, total });
  }, []);

  return (
    <section id="activity-heatmap" className="heatmap-section dark-section" ref={sectionRef}>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Coding Activity</span>
        <h2 className="section-title light">GitHub-Style Activity Heatmap</h2>
        <p className="section-subtitle light">
          52 weeks of consistent engineering activity — commits, API builds, DSA problems, and open-source contributions.
        </p>

        {/* Stats row */}
        <div className="heatmap-stats">
          <div className="hm-stat">
            <span className="hm-stat-val font-mono" style={{ color: '#10b981' }}>{streakInfo.current}</span>
            <span className="hm-stat-label">Day Current Streak 🔥</span>
          </div>
          <div className="hm-stat">
            <span className="hm-stat-val font-mono" style={{ color: '#f6ad55' }}>{streakInfo.longest}</span>
            <span className="hm-stat-label">Day Longest Streak</span>
          </div>
          <div className="hm-stat">
            <span className="hm-stat-val font-mono" style={{ color: '#a0afee' }}>{streakInfo.total * 3}+</span>
            <span className="hm-stat-label">Total Contributions</span>
          </div>
          <div className="hm-stat">
            <span className="hm-stat-val font-mono" style={{ color: '#b794f4' }}>1500+</span>
            <span className="hm-stat-label">DSA Problems Solved</span>
          </div>
        </div>

        {/* Heatmap grid */}
        <div className="heatmap-container">
          {/* Month labels */}
          <div className="month-labels">
            {MONTHS.map((m, i) => (
              <span key={i} className="month-label font-mono" style={{ left: `${(i / 12) * 100}%` }}>{m}</span>
            ))}
          </div>

          <div className="heatmap-inner">
            {/* Day labels */}
            <div className="day-labels">
              {['Mon', 'Wed', 'Fri'].map(d => (
                <span key={d} className="day-label font-mono">{d}</span>
              ))}
            </div>

            {/* Grid */}
            <div className="hm-grid">
              {HEATMAP.map((week, wi) => (
                <div key={wi} className="hm-week">
                  {week.days.map((cell, di) => (
                    <div
                      key={di}
                      className={`hm-cell ${wi < visibleWeeks ? 'visible' : ''} ${week.highlight && cell.intensity > 2 ? 'highlight' : ''}`}
                      style={{
                        background: wi < visibleWeeks ? INTENSITY_COLORS[cell.intensity] : INTENSITY_COLORS[0],
                        borderColor: week.highlight && cell.intensity > 2 ? week.highlight.color : 'transparent',
                        animationDelay: `${wi * 18}ms`,
                        boxShadow: week.highlight && cell.intensity > 2
                          ? `0 0 6px ${week.highlight.color}60`
                          : 'none'
                      }}
                      onMouseEnter={() => setTooltip({
                        week: wi,
                        day: di,
                        intensity: cell.intensity,
                        highlight: week.highlight,
                      })}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ))}
                  {/* Milestone marker */}
                  {week.highlight && wi < visibleWeeks && (
                    <div
                      className="milestone-marker"
                      style={{ color: week.highlight.color }}
                      title={week.highlight.label}
                    >▲</div>
                  )}
                </div>
              ))}
            </div>

            {/* Tooltip */}
            {tooltip && (
              <div className="hm-tooltip font-mono">
                {tooltip.highlight ? (
                  <span style={{ color: tooltip.highlight.color }}>🏆 {tooltip.highlight.label}</span>
                ) : (
                  <span>
                    {['No activity', 'Low activity', 'Moderate', 'Active day', 'Peak day'][tooltip.intensity]}
                    {' — '}{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][tooltip.day]}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="hm-legend">
            <span className="font-mono legend-text">Less</span>
            {INTENSITY_COLORS.map((c, i) => (
              <div key={i} className="legend-cell" style={{ background: c }} />
            ))}
            <span className="font-mono legend-text">More</span>
          </div>
        </div>

        {/* Project milestones */}
        <div className="milestones-row">
          {Object.values({
            10: { label: 'Kafka Integration', color: '#b794f4' },
            18: { label: 'Casino APIs Launch', color: '#f6ad55' },
            27: { label: 'Court ETL Pipeline', color: '#68d391' },
            35: { label: 'WhatsApp Webhooks', color: '#fc8181' },
            44: { label: 'LeetCode Streak', color: '#63b3ed' },
          }).map((m, i) => (
            <div key={i} className="milestone-chip" style={{ borderColor: m.color + '60', color: m.color }}>
              <span style={{ background: m.color }} className="milestone-dot"></span>
              {m.label}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .heatmap-section {
          background: #07090f;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .heatmap-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          padding: 24px;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
        }

        .hm-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hm-stat-val {
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        .hm-stat-label {
          font-size: 11px;
          color: rgba(245,243,239,0.45);
          white-space: nowrap;
        }

        .heatmap-container {
          overflow-x: auto;
          padding-bottom: 12px;
        }

        .month-labels {
          position: relative;
          height: 20px;
          min-width: 780px;
          margin-left: 36px;
          margin-bottom: 4px;
        }

        .month-label {
          position: absolute;
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          transform: translateX(-50%);
        }

        .heatmap-inner {
          display: flex;
          gap: 8px;
          position: relative;
          min-width: 780px;
        }

        .day-labels {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-bottom: 4px;
          height: 90px;
        }

        .day-label {
          font-size: 9px;
          color: rgba(245,243,239,0.3);
          line-height: 1;
        }

        .hm-grid {
          display: flex;
          gap: 3px;
          flex: 1;
        }

        .hm-week {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
        }

        .hm-cell {
          width: 12px;
          height: 12px;
          border-radius: 2px;
          border: 1px solid transparent;
          transition: transform 0.15s, box-shadow 0.3s;
          cursor: pointer;
          animation: cellAppear 0.3s ease both;
        }

        .hm-cell:hover {
          transform: scale(1.5);
          z-index: 10;
        }

        @keyframes cellAppear {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }

        .milestone-marker {
          font-size: 7px;
          text-align: center;
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          animation: fadeIn 0.3s ease;
        }

        .hm-tooltip {
          position: absolute;
          bottom: -36px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-darker);
          border: 1px solid rgba(245,243,239,0.12);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 10px;
          color: rgba(245,243,239,0.8);
          white-space: nowrap;
          pointer-events: none;
          animation: fadeIn 0.15s ease;
        }

        .hm-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 20px;
          margin-left: 36px;
        }

        .legend-cell {
          width: 12px; height: 12px;
          border-radius: 2px;
        }

        .legend-text {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          margin: 0 4px;
        }

        .milestones-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .milestone-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid;
          border-radius: 100px;
          font-size: 11px;
          font-family: var(--font-mono);
        }

        .milestone-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
