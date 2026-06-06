import React, { useState, useEffect, useRef } from 'react';

const NODES = [
  { id: 'node', label: 'Node.js', color: '#68d391', x: 50, y: 50, size: 36 },
  { id: 'react', label: 'React', color: '#63b3ed', x: 75, y: 25, size: 30 },
  { id: 'kafka', label: 'Kafka', color: '#b794f4', x: 25, y: 25, size: 32 },
  { id: 'redis', label: 'Redis', color: '#fc8181', x: 20, y: 60, size: 28 },
  { id: 'mysql', label: 'MySQL', color: '#f6ad55', x: 80, y: 65, size: 28 },
  { id: 'docker', label: 'Docker', color: '#76e4f7', x: 50, y: 85, size: 24 },
  { id: 'socket', label: 'Socket.IO', color: '#a0afee', x: 65, y: 48, size: 22 },
  { id: 'nestjs', label: 'NestJS', color: '#fc8181', x: 35, y: 80, size: 22 },
  { id: 'ts', label: 'TypeScript', color: '#63b3ed', x: 12, y: 42, size: 20 },
  { id: 'nginx', label: 'Nginx', color: '#68d391', x: 88, y: 40, size: 20 },
];

const EDGES = [
  ['node', 'kafka'], ['node', 'redis'], ['node', 'mysql'],
  ['node', 'socket'], ['node', 'react'], ['node', 'docker'],
  ['kafka', 'redis'], ['kafka', 'mysql'],
  ['react', 'socket'], ['react', 'node'],
  ['mysql', 'docker'], ['nestjs', 'mysql'], ['nestjs', 'node'],
  ['ts', 'node'], ['ts', 'react'], ['ts', 'nestjs'],
  ['nginx', 'node'], ['nginx', 'docker'],
  ['socket', 'redis'],
];

export default function SkillNetworkGraph() {
  const svgRef = useRef(null);
  const [positions, setPositions] = useState(() =>
    NODES.reduce((acc, n) => ({ ...acc, [n.id]: { x: n.x, y: n.y } }), {})
  );
  const [hovered, setHovered] = useState(null);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const animRef = useRef(null);

  // Gentle floating animation
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimated(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated) return;
    let t = 0;
    const tick = () => {
      t += 0.006;
      setPositions(
        NODES.reduce((acc, n, i) => ({
          ...acc,
          [n.id]: {
            x: n.x + Math.sin(t + i * 1.2) * 2.5,
            y: n.y + Math.cos(t + i * 0.8) * 2.5,
          }
        }), {})
      );
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [animated]);

  const getPos = (id) => positions[id] || NODES.find(n => n.id === id) || { x: 50, y: 50 };
  const connectedTo = hovered
    ? EDGES.filter(([a, b]) => a === hovered || b === hovered).flatMap(([a, b]) => [a, b])
    : [];

  return (
    <section id="skill-network" className="network-section dark-section" ref={sectionRef}>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Skill Connections</span>
        <h2 className="section-title light">Technology<br />Network Graph</h2>
        <p className="section-subtitle light">
          How all my technologies interconnect in production systems. Hover any node to see its direct dependencies.
        </p>

        <div className="network-layout">
          <div className="network-canvas-wrap">
            <svg
              ref={svgRef}
              viewBox="0 0 100 100"
              className="network-svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {NODES.map(n => (
                  <radialGradient key={n.id} id={`grad-${n.id}`}>
                    <stop offset="0%" stopColor={n.color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={n.color} stopOpacity="0" />
                  </radialGradient>
                ))}
              </defs>

              {/* Edges */}
              {EDGES.map(([a, b], i) => {
                const pa = getPos(a);
                const pb = getPos(b);
                const isActive = hovered && (connectedTo.includes(a) && connectedTo.includes(b) && (a === hovered || b === hovered));
                const isConnected = hovered && connectedTo.includes(a) && connectedTo.includes(b);
                const na = NODES.find(n => n.id === a);
                const nb = NODES.find(n => n.id === b);

                return (
                  <line
                    key={i}
                    x1={pa.x} y1={pa.y}
                    x2={pb.x} y2={pb.y}
                    stroke={isConnected ? (na?.color || '#a0afee') : 'rgba(160,175,238,0.1)'}
                    strokeWidth={isConnected ? 0.5 : 0.2}
                    strokeDasharray={isConnected ? '0' : '0'}
                    style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                  />
                );
              })}

              {/* Animated packets on hovered edges */}
              {hovered && EDGES.filter(([a, b]) => a === hovered || b === hovered).map(([a, b], i) => {
                const pa = getPos(a);
                const pb = getPos(b);
                const na = NODES.find(n => n.id === a);
                return (
                  <circle key={`pkt-${i}`} r="0.8" fill={na?.color || '#a0afee'} opacity="0.9">
                    <animateMotion dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" path={`M${pa.x},${pa.y} L${pb.x},${pb.y}`} />
                  </circle>
                );
              })}

              {/* Nodes */}
              {NODES.map(n => {
                const p = getPos(n.id);
                const isHov = hovered === n.id;
                const isConn = connectedTo.includes(n.id);
                const isDim = hovered && !isHov && !isConn;

                return (
                  <g
                    key={n.id}
                    onMouseEnter={() => setHovered(n.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Glow aura */}
                    <circle
                      cx={p.x} cy={p.y}
                      r={isHov ? n.size / 3 + 4 : n.size / 3 + 1}
                      fill={`url(#grad-${n.id})`}
                      style={{ transition: 'r 0.3s' }}
                    />

                    {/* Node circle */}
                    <circle
                      cx={p.x} cy={p.y}
                      r={isHov ? n.size / 6 + 1 : n.size / 6}
                      fill={n.color}
                      fillOpacity={isDim ? 0.2 : isHov ? 1 : 0.8}
                      stroke={isHov ? '#fff' : n.color}
                      strokeWidth={isHov ? 0.5 : 0.2}
                      strokeOpacity={0.6}
                      style={{ transition: 'all 0.3s' }}
                    />

                    {/* Label */}
                    <text
                      x={p.x}
                      y={p.y + n.size / 6 + 3}
                      textAnchor="middle"
                      fontSize={isHov ? '3.5' : '2.8'}
                      fill={isDim ? 'rgba(245,243,239,0.15)' : isHov ? n.color : 'rgba(245,243,239,0.7)'}
                      fontFamily="monospace"
                      fontWeight={isHov ? '700' : '400'}
                      style={{ transition: 'all 0.3s' }}
                    >
                      {n.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend panel */}
          <div className="network-legend">
            <div className="legend-title font-mono">// NODES ({NODES.length})</div>
            {NODES.map(n => (
              <div
                key={n.id}
                className={`legend-node ${hovered === n.id ? 'active' : ''} ${hovered && !connectedTo.includes(n.id) && hovered !== n.id ? 'dim' : ''}`}
                onMouseEnter={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ '--ln-color': n.color }}
              >
                <span className="ln-dot" style={{ background: n.color }}></span>
                <span className="ln-label">{n.label}</span>
                {hovered === n.id && (
                  <span className="ln-count font-mono" style={{ color: n.color }}>
                    {EDGES.filter(([a, b]) => a === n.id || b === n.id).length} links
                  </span>
                )}
              </div>
            ))}
            <div className="legend-edges font-mono">
              {EDGES.length} connections total
            </div>

            {hovered && (
              <div className="hovered-info" style={{ borderColor: NODES.find(n => n.id === hovered)?.color + '50' }}>
                <strong style={{ color: NODES.find(n => n.id === hovered)?.color }}>
                  {NODES.find(n => n.id === hovered)?.label}
                </strong>
                <p>Connected to: {connectedTo.filter(id => id !== hovered).map(id => NODES.find(n => n.id === id)?.label).join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .network-section {
          background: #06080d;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .network-layout {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 32px;
          align-items: center;
        }

        .network-canvas-wrap {
          aspect-ratio: 1;
          max-width: 560px;
        }

        .network-svg {
          width: 100%;
          height: 100%;
          background: rgba(245,243,239,0.015);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 20px;
        }

        /* Legend */
        .network-legend {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .legend-title {
          font-size: 9px;
          color: rgba(245,243,239,0.25);
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }

        .legend-node {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 5px 8px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s;
          border: 1px solid transparent;
        }

        .legend-node.active {
          background: rgba(245,243,239,0.05);
          border-color: var(--ln-color);
        }

        .legend-node.dim {
          opacity: 0.2;
        }

        .legend-node:hover {
          background: rgba(245,243,239,0.04);
        }

        .ln-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ln-label {
          font-size: 11px;
          color: rgba(245,243,239,0.65);
          flex: 1;
        }

        .ln-count {
          font-size: 9px;
          letter-spacing: 0.05em;
        }

        .legend-edges {
          font-size: 9px;
          color: rgba(245,243,239,0.2);
          letter-spacing: 0.08em;
          margin-top: 6px;
          padding-top: 10px;
          border-top: 1px solid rgba(245,243,239,0.06);
        }

        .hovered-info {
          margin-top: 12px;
          padding: 12px;
          background: rgba(245,243,239,0.03);
          border: 1px solid;
          border-radius: 10px;
          animation: fadeIn 0.3s ease;
        }

        .hovered-info strong {
          display: block;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .hovered-info p {
          font-size: 11px;
          color: rgba(245,243,239,0.45);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .network-layout { grid-template-columns: 1fr; }
          .network-canvas-wrap { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
