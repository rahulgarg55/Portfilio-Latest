import React, { useState, useEffect, useRef } from 'react';

const FEED = [
  { id: 1, icon: '⚡', color: '#b794f4', text: 'Solved LeetCode #847 — Shortest Path Visiting All Nodes', tag: 'DSA', time: '2m ago' },
  { id: 2, icon: '🚀', color: '#68d391', text: 'Deployed Kafka consumer microservice to production', tag: 'Kafka', time: '18m ago' },
  { id: 3, icon: '🔴', color: '#fc8181', text: 'Optimized Redis cache — hit rate improved to 94.2%', tag: 'Redis', time: '1h ago' },
  { id: 4, icon: '📊', color: '#63b3ed', text: 'Designed ER schema for judicial case management system', tag: 'MySQL', time: '3h ago' },
  { id: 5, icon: '🎯', color: '#f6ad55', text: 'Integrated WhatsApp Business API webhook handler', tag: 'Node.js', time: '5h ago' },
  { id: 6, icon: '🏆', color: '#ffd93d', text: 'Reached LeetCode Rating 1753 — Contest #392', tag: 'LeetCode', time: '1d ago' },
  { id: 7, icon: '🎸', color: '#fc8181', text: 'Recorded new acoustic guitar cover at home studio', tag: 'Music', time: '2d ago' },
  { id: 8, icon: '🏸', color: '#68d391', text: 'Won badminton doubles match at Phase 7 Sports Club', tag: 'Badminton', time: '3d ago' },
  { id: 9, icon: '📝', color: '#a0afee', text: 'Reviewed 3 developer CVs — all got shortlisted!', tag: 'Mentoring', time: '4d ago' },
  { id: 10, icon: '🐳', color: '#63b3ed', text: 'Containerized Node.js app with Docker multi-stage build', tag: 'DevOps', time: '5d ago' },
];

export default function LiveActivityFeed() {
  const [items, setItems] = useState(FEED.slice(0, 5));
  const [newItem, setNewItem] = useState(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const idxRef = useRef(5);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      const next = FEED[idxRef.current % FEED.length];
      setNewItem(next);
      setTimeout(() => {
        setItems(prev => [{ ...next, time: 'just now' }, ...prev.slice(0, 4)]);
        setNewItem(null);
      }, 500);
      idxRef.current++;
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section id="activity-feed" className="feed-section dark-section">
      <div className="container">
        <div className="feed-layout">
          <div className="feed-header-col">
            <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Live Activity</span>
            <h2 className="section-title light">Real-Time<br />Activity Feed</h2>
            <p className="section-subtitle light">
              Live view of Rahul's engineering and personal activities — code, sports, music, and mentorship.
            </p>
            <button
              className={`pause-btn font-mono ${paused ? 'paused' : ''}`}
              onClick={() => setPaused(p => !p)}
            >
              {paused ? '▶ Resume Feed' : '⏸ Pause Feed'}
            </button>

            <div className="feed-legend">
              {['DSA', 'Kafka', 'Redis', 'Node.js', 'Music', 'Badminton'].map(tag => (
                <span key={tag} className="legend-tag font-mono">{tag}</span>
              ))}
            </div>
          </div>

          <div className="feed-list-col">
            {/* Live indicator */}
            <div className="feed-live-bar font-mono">
              <span className="live-pulse"></span>
              LIVE FEED
              <span className="live-count">{FEED.length} recent activities</span>
            </div>

            {/* Incoming item animation */}
            {newItem && (
              <div className="feed-item incoming" style={{ '--item-color': newItem.color }}>
                <span className="fi-icon">{newItem.icon}</span>
                <div className="fi-body">
                  <span className="fi-tag font-mono" style={{ color: newItem.color }}>{newItem.tag}</span>
                  <p className="fi-text">{newItem.text}</p>
                </div>
                <span className="fi-time font-mono">just now</span>
              </div>
            )}

            {/* Feed items */}
            <div className="feed-list">
              {items.map((item, i) => (
                <div
                  key={`${item.id}-${i}`}
                  className="feed-item"
                  style={{ '--item-color': item.color, animationDelay: `${i * 0.05}s` }}
                >
                  <span className="fi-icon">{item.icon}</span>
                  <div className="fi-body">
                    <span className="fi-tag font-mono" style={{ color: item.color }}>{item.tag}</span>
                    <p className="fi-text">{item.text}</p>
                  </div>
                  <span className="fi-time font-mono">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .feed-section {
          background: #050810;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .feed-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          align-items: start;
        }

        .pause-btn {
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.12);
          color: rgba(245,243,239,0.6);
          border-radius: 8px;
          padding: 9px 18px;
          font-size: 11px;
          cursor: pointer;
          letter-spacing: 0.08em;
          transition: all 0.2s;
          margin-bottom: 20px;
          display: block;
        }

        .pause-btn.paused {
          color: #10b981;
          border-color: rgba(16,185,129,0.3);
          background: rgba(16,185,129,0.06);
        }

        .pause-btn:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .feed-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .legend-tag {
          font-size: 9px;
          padding: 3px 9px;
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.08em;
        }

        .feed-list-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feed-live-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
        }

        .live-pulse {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 6px #10b981;
          flex-shrink: 0;
        }

        .live-count {
          margin-left: auto;
          font-size: 9px;
          color: rgba(245,243,239,0.25);
        }

        .feed-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-left: 3px solid var(--item-color, rgba(160,175,238,0.5));
          border-radius: 10px;
          padding: 12px 14px;
          animation: slideInFeed 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
          transition: background 0.2s;
        }

        .feed-item:hover {
          background: rgba(245,243,239,0.05);
        }

        .feed-item.incoming {
          border-color: var(--item-color);
          background: rgba(160,175,238,0.08);
          animation: popFeed 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        @keyframes slideInFeed {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes popFeed {
          from { opacity: 0; transform: scale(0.95) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .fi-icon { font-size: 18px; flex-shrink: 0; line-height: 1.4; }

        .fi-body { flex: 1; }

        .fi-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          display: block;
          margin-bottom: 3px;
        }

        .fi-text {
          font-size: 12.5px;
          color: rgba(245,243,239,0.7);
          line-height: 1.4;
        }

        .fi-time {
          font-size: 9px;
          color: rgba(245,243,239,0.25);
          white-space: nowrap;
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .feed-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
