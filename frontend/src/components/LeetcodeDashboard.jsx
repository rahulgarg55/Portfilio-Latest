import React, { useState, useEffect } from 'react';
import { Award, Code, Compass, HelpCircle, Activity } from 'lucide-react';
import Card3D from './Card3D';

export default function LeetcodeDashboard() {
  const [activeTab, setActiveTab] = useState('heatmap');
  const [hoveredDay, setHoveredDay] = useState(null);

  // Generate simulated GitHub activity heatmap cells (12 months, 7 rows per week)
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    // Generate simulated DSA commits for past 140 days (20 weeks)
    const data = [];
    const topics = ['DP', 'Trees', 'Graphs', 'Binary Search', 'Sliding Window', 'Greedy', 'Recursion'];
    for (let i = 0; i < 140; i++) {
      // High density on week mid-days, lower on weekends
      const dayOfWeek = i % 7;
      let count = 0;
      if (Math.random() > 0.15) {
        count = Math.floor(Math.random() * 8) + 1;
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          count = Math.random() > 0.5 ? Math.floor(Math.random() * 3) : 0;
        }
      }
      
      data.push({
        id: i,
        count,
        topic: count > 0 ? topics[Math.floor(Math.random() * topics.length)] : null,
        date: `Day -${140 - i}`
      });
    }
    setHeatmapData(data);
  }, []);

  // LeetCode solved counts
  const solvedData = {
    total: 1500,
    easy: 550,
    medium: 780,
    hard: 170
  };

  // Radar chart points for DSA Skills distribution
  // 5 topics: DP (90), Trees & Graphs (85), Greedy (80), Arrays & Strings (95), Math & Bitwise (75)
  // Center is 100,100, radius is 75
  // Calculate relative points based on values out of 100
  const radarPoints = [
    { label: 'Dynamic Programming', x: 100, y: 15 },    // Angle 0° (Up) (value 85 => y = 100 - 85 * 0.75 = 36.25)
    { label: 'Trees & Graphs', x: 171, y: 55 },        // Angle 72° (Right-Up) (value 88 => x = 100 + 88 * 0.75 * cos(18°), y = 100 - 88 * 0.75 * sin(18°))
    { label: 'Greedy Algorithms', x: 144, y: 161 },    // Angle 144° (Right-Down)
    { label: 'Math & Strings', x: 56, y: 161 },        // Angle 216° (Left-Down)
    { label: 'System Design', x: 29, y: 55 }           // Angle 288° (Left-Up)
  ];

  // Specific values mapped to coordinates (scaled to center 100,100)
  // Value multipliers (DP: 0.90, Trees: 0.88, Greedy: 0.82, Math/Strings: 0.94, System: 0.85)
  const valuePoints = "100,32.5 162,60 136,150 58,150 40,61";

  return (
    <section id="leetcode" className="leetcode-section">
      <div className="container">
        <span className="section-tag">Competitive Standings</span>
        <h2 className="section-title">LeetCode & DSA Analytics</h2>
        <p className="section-subtitle">
          Real-time metrics, problem-solving streaks, and domain-specific algorithm competencies tracking over 1500+ solved problems.
        </p>

        {/* Dash Grid */}
        <div className="leetcode-grid">
          
          {/* Left panel - Interactive solved metrics & charts */}
          <div className="leetcode-stats-panel">
            
            {/* Solved details */}
            <div className="stats-header-card">
              <div className="stat-circle-box">
                <svg className="circular-progress" viewBox="0 0 100 100">
                  <circle className="progress-bg" cx="50" cy="50" r="42" />
                  <circle className="progress-fill" cx="50" cy="50" r="42" style={{ strokeDashoffset: 65 }} />
                  <text className="progress-text-val" x="50" y="48" textAnchor="middle">1,500+</text>
                  <text className="progress-text-sub" x="50" y="66" textAnchor="middle">Solved</text>
                </svg>
              </div>

              <div className="difficulty-bars">
                <h4 className="difficulty-title">Problem Difficulty Breakdown</h4>
                
                <div className="difficulty-bar-item easy">
                  <div className="bar-meta">
                    <span className="dif-name">🟢 Easy</span>
                    <span className="dif-fraction">{solvedData.easy} / 650</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '84%' }}></div>
                  </div>
                </div>

                <div className="difficulty-bar-item medium">
                  <div className="bar-meta">
                    <span className="dif-name">🟡 Medium</span>
                    <span className="dif-fraction">{solvedData.medium} / 1000</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="difficulty-bar-item hard">
                  <div className="bar-meta">
                    <span className="dif-name">🔴 Hard</span>
                    <span className="dif-fraction">{solvedData.hard} / 300</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '56%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Tabs buttons */}
            <div className="dashboard-tabs">
              <button 
                className={`dash-tab-btn ${activeTab === 'heatmap' ? 'active' : ''}`}
                onClick={() => setActiveTab('heatmap')}
              >
                <Activity size={14} />
                <span>Active Coding Streak Heatmap</span>
              </button>
              <button 
                className={`dash-tab-btn ${activeTab === 'radar' ? 'active' : ''}`}
                onClick={() => setActiveTab('radar')}
              >
                <Compass size={14} />
                <span>DSA Skill Radar Map</span>
              </button>
            </div>

            {/* Tab contents */}
            <div className="tab-render-area">
              {activeTab === 'heatmap' && (
                <div className="heatmap-container">
                  <div className="heatmap-meta">
                    <div className="meta-desc-heatmap">
                      <span className="heatmap-title">Interactive Commits ledger</span>
                      <p>Hover over cells to view coding activity details and dynamic algorithms solved per day.</p>
                    </div>
                    {hoveredDay && (
                      <div className="heatmap-tooltip">
                        <span className="tooltip-date">{hoveredDay.date}</span>
                        <span className="tooltip-value">{hoveredDay.count} problems solved {hoveredDay.topic ? `[${hoveredDay.topic}]` : ''}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="heatmap-grid-scroll">
                    <div className="heatmap-grid-matrix">
                      {heatmapData.map((day) => {
                        let colorClass = 'lvl-0';
                        if (day.count > 0 && day.count <= 2) colorClass = 'lvl-1';
                        else if (day.count > 2 && day.count <= 4) colorClass = 'lvl-2';
                        else if (day.count > 4 && day.count <= 6) colorClass = 'lvl-3';
                        else if (day.count > 6) colorClass = 'lvl-4';

                        return (
                          <div
                            key={day.id}
                            className={`heatmap-cell ${colorClass}`}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="heatmap-legend">
                    <span>Less</span>
                    <span className="legend-cell lvl-0"></span>
                    <span className="legend-cell lvl-1"></span>
                    <span className="legend-cell lvl-2"></span>
                    <span className="legend-cell lvl-3"></span>
                    <span className="legend-cell lvl-4"></span>
                    <span>More</span>
                  </div>
                </div>
              )}

              {activeTab === 'radar' && (
                <div className="radar-container">
                  <div className="radar-svg-box">
                    <svg viewBox="0 0 200 200" className="radar-svg">
                      {/* Web grids */}
                      <polygon className="radar-grid-poly" points="100,25 171,62.5 144,137.5 56,137.5 29,62.5" />
                      <polygon className="radar-grid-poly" points="100,50 148,75 130,125 70,125 52,75" />
                      <polygon className="radar-grid-poly" points="100,75 124,87.5 115,112.5 85,112.5 76,87.5" />
                      
                      {/* Spoke lines */}
                      <line x1="100" y1="100" x2="100" y2="15" className="radar-spoke" />
                      <line x1="100" y1="100" x2="171" y2="55" className="radar-spoke" />
                      <line x1="100" y1="100" x2="144" y2="161" className="radar-spoke" />
                      <line x1="100" y1="100" x2="56" y2="161" className="radar-spoke" />
                      <line x1="100" y1="100" x2="29" y2="55" className="radar-spoke" />

                      {/* Area values polygon */}
                      <polygon className="radar-value-poly" points={valuePoints} />
                      
                      {/* Interactive nodes */}
                      <circle cx="100" cy="32.5" r="3" className="radar-node" />
                      <circle cx="162" cy="60" r="3" className="radar-node" />
                      <circle cx="136" cy="150" r="3" className="radar-node" />
                      <circle cx="58" cy="150" r="3" className="radar-node" />
                      <circle cx="40" cy="61" r="3" className="radar-node" />

                      {/* Labels */}
                      <text x="100" y="10" className="radar-label" textAnchor="middle">Dynamic Prog.</text>
                      <text x="180" y="58" className="radar-label" textAnchor="start">Trees & Graphs</text>
                      <text x="150" y="174" className="radar-label" textAnchor="start">Greedy Algorithms</text>
                      <text x="50" y="174" className="radar-label" textAnchor="end">Math & Strings</text>
                      <text x="20" y="58" className="radar-label" textAnchor="end">System Design</text>
                    </svg>
                  </div>
                  <div className="radar-explanation font-mono">
                    <h4>Algorithm Competency Scores:</h4>
                    <ul>
                      <li>🟢 Math & Strings (94%)</li>
                      <li>🟣 Dynamic Programming (90%)</li>
                      <li>🟢 Trees & Graphs (88%)</li>
                      <li>🟣 System Design (85%)</li>
                      <li>🟢 Greedy Algorithms (82%)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right panel - Contest Telemetry Sparklines */}
          <div className="leetcode-contest-panel">
            <Card3D className="card contest-card" maxTilt={6}>
              <h3 className="contest-title-heading">
                <Award size={18} className="award-icon" />
                <span>Contest Standing Profiles</span>
              </h3>
              
              <div className="contest-rating-block">
                <span className="rating-label">LeetCode MAX Rating</span>
                <div className="rating-flex">
                  <span className="rating-value">1753 Rating</span>
                  <span className="rating-badge font-mono">3 Star Dev</span>
                </div>
                <p className="rating-percentile">Top 6.8% globally among millions of developers.</p>
              </div>

              <div className="rating-chart-visual">
                <span className="chart-label font-mono">contest_trend // historical_climb</span>
                <svg className="trend-svg" viewBox="0 0 300 80">
                  <path 
                    d="M 10,70 L 40,65 L 70,68 L 100,52 L 130,48 L 160,55 L 190,32 L 220,28 L 250,22 L 290,14" 
                    fill="none" 
                    stroke="var(--accent-purple)" 
                    strokeWidth="2.5" 
                  />
                  <circle cx="290" cy="14" r="4" fill="var(--accent-purple)" className="glowing-node-circle" />
                  {/* Grid background lines */}
                  <line x1="10" y1="70" x2="290" y2="70" stroke="rgba(17, 28, 45, 0.08)" strokeDasharray="3" />
                  <line x1="10" y1="40" x2="290" y2="40" stroke="rgba(17, 28, 45, 0.08)" strokeDasharray="3" />
                  <line x1="10" y1="14" x2="290" y2="14" stroke="rgba(17, 28, 45, 0.08)" strokeDasharray="3" />
                </svg>
              </div>

              <div className="rankings-summary font-mono">
                <div className="ranking-row">
                  <span>GFG CGC Campus Rank:</span>
                  <span className="val highlight">Rank 1st</span>
                </div>
                <div className="ranking-row">
                  <span>ICPC Regionals Rank:</span>
                  <span className="val highlight">Rank 613</span>
                </div>
                <div className="ranking-row">
                  <span>Global Solved Percentile:</span>
                  <span className="val highlight">Top 1.5%</span>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>

      <style>{`
        .leetcode-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .leetcode-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
        }

        /* Left Stats Panel */
        .leetcode-stats-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(17, 28, 45, 0.02);
        }

        .stats-header-card {
          display: flex;
          align-items: center;
          gap: 32px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 24px;
          margin-bottom: 20px;
        }

        .stat-circle-box {
          width: 110px;
          height: 110px;
          flex-shrink: 0;
        }

        .circular-progress {
          width: 100%;
          height: 100%;
        }

        .progress-bg {
          fill: none;
          stroke: rgba(94, 90, 209, 0.06);
          stroke-width: 8;
        }

        .progress-fill {
          fill: none;
          stroke: var(--accent-purple);
          stroke-width: 8;
          stroke-linecap: round;
          stroke-dasharray: 264;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          transition: stroke-dashoffset 1.5s ease;
        }

        .progress-text-val {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          fill: var(--text-dark);
        }

        .progress-text-sub {
          font-family: var(--font-mono);
          font-size: 8px;
          text-transform: uppercase;
          fill: var(--text-muted-dark);
          letter-spacing: 0.1em;
        }

        .difficulty-bars {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .difficulty-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 2px;
        }

        .difficulty-bar-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 500;
        }

        .dif-name {
          font-weight: 600;
        }

        .bar-track {
          height: 6px;
          background-color: rgba(17, 28, 45, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 3px;
        }

        .difficulty-bar-item.easy .bar-fill { background-color: #10b981; }
        .difficulty-bar-item.medium .bar-fill { background-color: #f59e0b; }
        .difficulty-bar-item.hard .bar-fill { background-color: #ef4444; }

        /* Tabs bar */
        .dashboard-tabs {
          display: flex;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .dash-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
          border-radius: 6px;
        }

        .dash-tab-btn:hover {
          background-color: rgba(94, 90, 209, 0.04);
          color: var(--text-dark);
        }

        .dash-tab-btn.active {
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          font-weight: 600;
        }

        /* Heatmap Grid */
        .heatmap-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .heatmap-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          min-height: 40px;
        }

        .meta-desc-heatmap span {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .meta-desc-heatmap p {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .heatmap-tooltip {
          background-color: var(--bg-darker);
          color: var(--text-light);
          padding: 6px 12px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tooltip-date {
          font-size: 9px;
          font-family: var(--font-mono);
          color: var(--accent-lavender);
        }

        .tooltip-value {
          font-size: 11px;
          font-weight: 600;
        }

        .heatmap-grid-scroll {
          overflow-x: auto;
          scrollbar-width: thin;
        }

        .heatmap-grid-matrix {
          display: grid;
          grid-template-rows: repeat(7, 10px);
          grid-auto-flow: column;
          gap: 3px;
          width: max-content;
        }

        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          transition: transform var(--transition-fast);
        }

        .heatmap-cell:hover {
          transform: scale(1.25);
          z-index: 12;
        }

        /* Color classes */
        .heatmap-cell.lvl-0 { background-color: rgba(17, 28, 45, 0.04); }
        .heatmap-cell.lvl-1 { background-color: #c6f6d5; }
        .heatmap-cell.lvl-2 { background-color: #9ae6b4; }
        .heatmap-cell.lvl-3 { background-color: #48bb78; }
        .heatmap-cell.lvl-4 { background-color: #22543d; }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--text-muted-dark);
          align-self: flex-end;
        }

        .legend-cell {
          width: 8px;
          height: 8px;
          border-radius: 1px;
        }

        /* Radar Chart */
        .radar-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          align-items: center;
        }

        .radar-svg-box {
          width: 100%;
          max-width: 170px;
          margin: 0 auto;
        }

        .radar-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .radar-grid-poly {
          fill: none;
          stroke: rgba(17, 28, 45, 0.08);
          stroke-width: 1px;
        }

        .radar-spoke {
          stroke: rgba(17, 28, 45, 0.06);
          stroke-width: 1px;
        }

        .radar-value-poly {
          fill: rgba(94, 90, 209, 0.16);
          stroke: var(--accent-purple);
          stroke-width: 2px;
          stroke-linejoin: round;
        }

        .radar-node {
          fill: var(--accent-purple);
          stroke: #ffffff;
          stroke-width: 1.5px;
        }

        .radar-label {
          font-size: 8px;
          font-family: var(--font-mono);
          fill: var(--text-muted-dark);
          font-weight: 600;
        }

        .radar-explanation {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .radar-explanation h4 {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .radar-explanation ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .radar-explanation li {
          font-size: 12px;
          color: var(--text-muted-dark);
        }

        /* Right panel (Contest summary card) */
        .contest-card {
          background-color: #ffffff;
          padding: 30px;
          min-height: 380px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contest-title-heading {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .award-icon {
          color: var(--accent-purple);
        }

        .contest-rating-block {
          margin-bottom: 24px;
        }

        .rating-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .rating-flex {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 6px 0;
        }

        .rating-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--accent-purple);
        }

        .rating-badge {
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          border: 1px solid rgba(94, 90, 209, 0.16);
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 600;
          border-radius: 4px;
        }

        .rating-percentile {
          font-size: 12px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .rating-chart-visual {
          margin-bottom: 24px;
        }

        .chart-label {
          font-size: 8px;
          color: rgba(17, 28, 45, 0.35);
          display: block;
          margin-bottom: 8px;
        }

        .trend-svg {
          width: 100%;
          height: 80px;
          overflow: visible;
        }

        .glowing-node-circle {
          filter: drop-shadow(0 0 4px var(--accent-purple));
          animation: pulseNode 1.5s infinite alternate;
        }

        @keyframes pulseNode {
          0% { r: 3.5px; }
          100% { r: 5.5px; }
        }

        .rankings-summary {
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ranking-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .ranking-row .val.highlight {
          color: var(--text-dark);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .leetcode-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 500px) {
          .radar-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
