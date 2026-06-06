import React, { useState, useEffect, useRef } from 'react';

// Real-time animated data flow lines between system nodes
const NODES = [
  { id: 'client', label: 'Client Browser', icon: '🌐', x: 8, y: 42, color: '#63b3ed' },
  { id: 'cdn', label: 'Nginx / CDN', icon: '⚡', x: 25, y: 18, color: '#68d391' },
  { id: 'lb', label: 'Load Balancer', icon: '⚖️', x: 25, y: 65, color: '#f6ad55' },
  { id: 'api', label: 'Node.js API', icon: '🔧', x: 47, y: 42, color: '#b794f4' },
  { id: 'redis', label: 'Redis Cache', icon: '🔴', x: 65, y: 20, color: '#fc8181' },
  { id: 'kafka', label: 'Kafka Broker', icon: '📨', x: 65, y: 65, color: '#fbd38d' },
  { id: 'db', label: 'MySQL Primary', icon: '🗄️', x: 85, y: 42, color: '#9ae6b4' },
  { id: 'replica', label: 'Read Replica', icon: '📋', x: 85, y: 72, color: '#76e4f7' },
];

const CONNECTIONS = [
  { from: 'client', to: 'cdn', label: 'HTTPS', active: true, color: '#63b3ed' },
  { from: 'client', to: 'lb', label: 'REST', active: true, color: '#63b3ed' },
  { from: 'cdn', to: 'api', label: 'proxy', active: true, color: '#68d391' },
  { from: 'lb', to: 'api', label: 'round-robin', active: true, color: '#f6ad55' },
  { from: 'api', to: 'redis', label: 'GET key', active: true, color: '#fc8181' },
  { from: 'api', to: 'kafka', label: 'publish', active: true, color: '#fbd38d' },
  { from: 'api', to: 'db', label: 'query', active: true, color: '#b794f4' },
  { from: 'kafka', to: 'db', label: 'consume', active: true, color: '#fbd38d' },
  { from: 'db', to: 'replica', label: 'replicate', active: true, color: '#9ae6b4' },
  { from: 'replica', to: 'api', label: 'read', active: true, color: '#76e4f7' },
];

function getNode(id) {
  return NODES.find(n => n.id === id);
}

export default function ArchitectureFlow() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [activePackets, setActivePackets] = useState([]);
  const [rps, setRps] = useState(1247);
  const [latency, setLatency] = useState(4);
  const [cacheHit, setCacheHit] = useState(94.2);

  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setRps(r => Math.max(800, Math.min(1800, r + Math.round((Math.random() - 0.48) * 40))));
      setLatency(l => Math.max(2, Math.min(18, +(l + (Math.random() - 0.5) * 1.5).toFixed(1))));
      setCacheHit(c => Math.max(88, Math.min(99, +(c + (Math.random() - 0.5) * 0.5).toFixed(1))));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const NODE_DETAILS = {
    client: { title: 'Client Browser', desc: 'React SPA served via Nginx CDN. Sends REST API calls with JWT auth headers.', latency: '~0ms', tech: 'React.js + Vite' },
    cdn: { title: 'Nginx / CDN', desc: 'Static asset caching, SSL termination, gzip compression, and reverse proxy routing.', latency: '<1ms', tech: 'Nginx + Cloudfront' },
    lb: { title: 'Load Balancer', desc: 'Round-robin request distribution across Node.js instances. Health checks every 10s.', latency: '<2ms', tech: 'PM2 Cluster Mode' },
    api: { title: 'Node.js API Gateway', desc: 'Express.js microservices with JWT validation, rate limiting, and Swagger docs.', latency: '5-15ms', tech: 'Express + NestJS' },
    redis: { title: 'Redis Cache', desc: 'Key-value cache with TTL expiry. Reduces DB load by 94%+. LRU eviction policy.', latency: '0.5-2ms', tech: 'Redis 7 + ioredis' },
    kafka: { title: 'Apache Kafka', desc: 'Event streaming for bet transactions, WhatsApp webhooks, and audit logs. 50k events/day.', latency: '10-50ms', tech: 'KafkaJS + Docker' },
    db: { title: 'MySQL Primary', desc: 'ACID-compliant writes. Compound B-Tree indexes on hot query paths. Connection pooling.', latency: '8-25ms', tech: 'MySQL 8 + TypeORM' },
    replica: { title: 'Read Replica', desc: 'Async replication. All SELECT queries routed here to protect write master.', latency: '10-30ms', tech: 'MySQL Replica' },
  };

  const selected = selectedNode ? NODE_DETAILS[selectedNode] : null;
  const selectedNodeObj = selectedNode ? getNode(selectedNode) : null;

  return (
    <section id="arch-flow" className="arch-flow-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Live Architecture</span>
        <h2 className="section-title light">Real-Time System Architecture</h2>
        <p className="section-subtitle light">
          Interactive diagram of how Rahul designs production systems. Click any node to inspect its role, latency, and tech stack.
        </p>

        {/* Live metrics bar */}
        <div className="live-metrics-bar">
          <div className="metric-pill">
            <span className="pulse-dot green"></span>
            <span className="met-label font-mono">REQ/SEC</span>
            <span className="met-value font-mono green">{rps.toLocaleString()}</span>
          </div>
          <div className="metric-pill">
            <span className="pulse-dot cyan"></span>
            <span className="met-label font-mono">LATENCY</span>
            <span className="met-value font-mono cyan">{latency}ms</span>
          </div>
          <div className="metric-pill">
            <span className="pulse-dot purple"></span>
            <span className="met-label font-mono">CACHE HIT</span>
            <span className="met-value font-mono purple">{cacheHit}%</span>
          </div>
          <div className="metric-pill">
            <span className="pulse-dot orange"></span>
            <span className="met-label font-mono">UPTIME</span>
            <span className="met-value font-mono orange">99.9%</span>
          </div>
        </div>

        <div className="arch-layout">
          {/* SVG Architecture Diagram */}
          <div className="arch-diagram-card">
            <svg viewBox="0 0 100 90" className="arch-svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="arrowBlue" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                  <polygon points="0 0, 5 2.5, 0 5" fill="#63b3ed" opacity="0.6" />
                </marker>
                <marker id="arrowGreen" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                  <polygon points="0 0, 5 2.5, 0 5" fill="#68d391" opacity="0.6" />
                </marker>
                <marker id="arrowOrange" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                  <polygon points="0 0, 5 2.5, 0 5" fill="#f6ad55" opacity="0.6" />
                </marker>
                <marker id="arrowPurple" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
                  <polygon points="0 0, 5 2.5, 0 5" fill="#b794f4" opacity="0.6" />
                </marker>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Connection lines with animated dashes */}
              {CONNECTIONS.map((conn, i) => {
                const from = getNode(conn.from);
                const to = getNode(conn.to);
                if (!from || !to) return null;
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y}
                    x2={to.x} y2={to.y}
                    stroke={conn.color}
                    strokeWidth="0.4"
                    strokeOpacity="0.35"
                    strokeDasharray="2 3"
                    className="arch-conn-line"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                );
              })}

              {/* Animated packets on connections */}
              {CONNECTIONS.map((conn, i) => {
                const from = getNode(conn.from);
                const to = getNode(conn.to);
                if (!from || !to) return null;
                return (
                  <circle key={`pkt-${i}`} r="0.8" fill={conn.color} opacity="0.9" filter="url(#glow)">
                    <animateMotion
                      dur={`${1.5 + i * 0.4}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    >
                      <mpath href={`#path-${i}`} />
                    </animateMotion>
                  </circle>
                );
              })}

              {/* Invisible paths for packet motion */}
              {CONNECTIONS.map((conn, i) => {
                const from = getNode(conn.from);
                const to = getNode(conn.to);
                if (!from || !to) return null;
                return (
                  <path
                    key={`path-${i}`}
                    id={`path-${i}`}
                    d={`M${from.x},${from.y} L${to.x},${to.y}`}
                    fill="none"
                    stroke="none"
                  />
                );
              })}

              {/* Nodes */}
              {NODES.map(node => (
                <g
                  key={node.id}
                  onClick={() => setSelectedNode(prev => prev === node.id ? null : node.id)}
                  style={{ cursor: 'pointer' }}
                  className={`arch-node-group ${selectedNode === node.id ? 'selected' : ''}`}
                >
                  {/* Glow circle */}
                  {selectedNode === node.id && (
                    <circle cx={node.x} cy={node.y} r="7" fill={node.color} opacity="0.15">
                      <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.15;0.3;0.15" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="5"
                    fill="#0e1725"
                    stroke={node.color}
                    strokeWidth={selectedNode === node.id ? 1.2 : 0.8}
                    filter={selectedNode === node.id ? "url(#glow)" : ""}
                  />
                  <text x={node.x} y={node.y + 0.8} textAnchor="middle" dominantBaseline="middle" fontSize="3.5" fill={node.color}>
                    {node.icon}
                  </text>
                  <text x={node.x} y={node.y + 7.5} textAnchor="middle" fontSize="2.2" fill="rgba(245,243,239,0.7)">
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Inspector Panel */}
          <div className="arch-inspector">
            {selected ? (
              <div className="inspector-content" style={{ borderColor: selectedNodeObj?.color }}>
                <div className="inspector-header" style={{ borderColor: selectedNodeObj?.color + '40' }}>
                  <span className="insp-title">{selected.title}</span>
                  <span className="insp-latency font-mono" style={{ color: selectedNodeObj?.color }}>{selected.latency}</span>
                </div>
                <p className="insp-desc">{selected.desc}</p>
                <div className="insp-tech font-mono" style={{ color: selectedNodeObj?.color }}>
                  <span>TECH_STACK:</span> {selected.tech}
                </div>

                <div className="insp-metrics">
                  <div className="insp-metric">
                    <span>Avg Latency</span>
                    <strong style={{ color: selectedNodeObj?.color }}>{selected.latency}</strong>
                  </div>
                  <div className="insp-metric">
                    <span>Status</span>
                    <strong className="status-ok">● OPERATIONAL</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="inspector-placeholder font-mono">
                <div className="inspector-icon">🏗️</div>
                <p>Click any node in the diagram</p>
                <span>Inspect role, latency, and tech stack</span>
              </div>
            )}

            <div className="arch-legend">
              <div className="legend-title font-mono">NODE LEGEND</div>
              {NODES.map(n => (
                <div key={n.id} className="legend-row" onClick={() => setSelectedNode(n.id)}>
                  <span className="legend-dot" style={{ background: n.color }}></span>
                  <span className="legend-label">{n.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .arch-flow-section {
          background: var(--bg-darker);
          border-bottom: 1px solid rgba(245,243,239,0.08);
          position: relative;
          overflow: hidden;
        }

        .live-metrics-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .metric-pill {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          padding: 8px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          animation: pulseMetric 1.5s infinite;
        }
        .pulse-dot.green { background: #10b981; box-shadow: 0 0 6px #10b981; }
        .pulse-dot.cyan { background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
        .pulse-dot.purple { background: #b794f4; box-shadow: 0 0 6px #b794f4; }
        .pulse-dot.orange { background: #f59e0b; box-shadow: 0 0 6px #f59e0b; }
        @keyframes pulseMetric { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        .met-label { color: rgba(245,243,239,0.4); font-size: 9px; letter-spacing: 0.1em; }
        .met-value { font-size: 14px; font-weight: 700; }
        .met-value.green { color: #10b981; }
        .met-value.cyan { color: #38bdf8; }
        .met-value.purple { color: #b794f4; }
        .met-value.orange { color: #f59e0b; }

        .arch-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: start;
        }

        .arch-diagram-card {
          background: #05080e;
          border: 1px solid rgba(94,90,209,0.2);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(94,90,209,0.05);
          padding: 20px;
        }

        .arch-svg {
          width: 100%;
          height: auto;
          min-height: 280px;
          display: block;
        }

        .arch-conn-line {
          animation: dashFlow 3s linear infinite;
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }

        .arch-node-group {
          transition: 0.2s;
        }
        .arch-node-group:hover circle { stroke-width: 1.5 !important; }

        /* Inspector */
        .arch-inspector {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .inspector-content {
          background: var(--bg-dark);
          border: 1.5px solid;
          border-radius: 12px;
          overflow: hidden;
          animation: fadeIn 0.3s ease;
        }

        .inspector-header {
          padding: 14px 18px;
          border-bottom: 1px solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .insp-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-light);
        }

        .insp-latency {
          font-size: 11px;
          font-weight: 700;
        }

        .insp-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-light);
          padding: 14px 18px;
        }

        .insp-tech {
          font-size: 10px;
          padding: 0 18px 14px;
          letter-spacing: 0.05em;
        }

        .insp-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(245,243,239,0.06);
        }

        .insp-metric {
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          font-family: var(--font-mono);
        }

        .insp-metric strong { font-size: 13px; color: var(--text-light); }
        .status-ok { color: #10b981 !important; }

        .inspector-placeholder {
          background: var(--bg-dark);
          border: 1px dashed rgba(245,243,239,0.1);
          border-radius: 12px;
          padding: 32px 20px;
          text-align: center;
          color: rgba(245,243,239,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .inspector-icon { font-size: 36px; margin-bottom: 8px; }
        .inspector-placeholder p { font-size: 12px; color: rgba(245,243,239,0.5); }
        .inspector-placeholder span { font-size: 10px; }

        .arch-legend {
          background: var(--bg-dark);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 16px;
        }

        .legend-title {
          font-size: 9px;
          color: var(--accent-lavender);
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .legend-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 0;
          cursor: pointer;
          transition: 0.15s;
        }

        .legend-row:hover { opacity: 0.8; }

        .legend-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .legend-label {
          font-size: 11px;
          color: rgba(245,243,239,0.6);
        }

        @media (max-width: 900px) {
          .arch-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
