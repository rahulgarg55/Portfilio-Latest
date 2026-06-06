import React, { useState } from 'react';

export default function TechCube() {
  const [activeTech, setActiveTech] = useState(null);

  const techInfo = {
    react: { name: 'React', desc: 'Used for BastaxCasino dashboards, admin panels, and decentralized Web3 user interfaces.' },
    node: { name: 'Node.js', desc: 'Used for developing 100+ RESTful APIs, WhatsApp event webhooks, and core enterprise backends.' },
    mysql: { name: 'MySQL', desc: 'Designed custom database schemas for Lok Adalat, NHAI records, and full-stack data warehouses.' },
    kafka: { name: 'Redis & Kafka', desc: 'Integrated for caching optimizations and microservice message brokers in banking systems.' },
    ts: { name: 'TypeScript', desc: 'Leveraged for typed backend microservices, testing slot game logs, and judicial ETL pipelines.' },
    docker: { name: 'Docker / DevOps', desc: 'Configured Nginx reverse proxies, PM2 process daemons, and automated pipelines.' }
  };

  return (
    <div className="tech-cube-container">
      <div className="scene">
        <div className="cube">
          <div className="face front" onClick={() => setActiveTech('react')}>
            <span className="face-title">React</span>
            <div className="face-sub">VITE & NGRX</div>
          </div>
          <div className="face back" onClick={() => setActiveTech('node')}>
            <span className="face-title">NodeJS</span>
            <div className="face-sub">EXPRESS / NESTJS</div>
          </div>
          <div className="face top" onClick={() => setActiveTech('mysql')}>
            <span className="face-title">MySQL</span>
            <div className="face-sub">SCHEMAS & SQL</div>
          </div>
          <div className="face bottom" onClick={() => setActiveTech('kafka')}>
            <span className="face-title">Redis / Kafka</span>
            <div className="face-sub">CACHING & QUEUES</div>
          </div>
          <div className="face left" onClick={() => setActiveTech('ts')}>
            <span className="face-title">TypeScript</span>
            <div className="face-sub">TYPINGS & ES6</div>
          </div>
          <div className="face right" onClick={() => setActiveTech('docker')}>
            <span className="face-title">Docker</span>
            <div className="face-sub">DEVOPS / NGINX</div>
          </div>
        </div>
      </div>

      <div className="cube-helper-text">
        {activeTech ? (
          <div className="tech-detail-card">
            <h4>{techInfo[activeTech].name}</h4>
            <p>{techInfo[activeTech].desc}</p>
          </div>
        ) : (
          <p className="cube-instruction">💡 Click a cube face to inspect technical experience</p>
        )}
      </div>

      <style>{`
        .tech-cube-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 380px;
        }

        .scene {
          width: 160px;
          height: 160px;
          perspective: 600px;
          margin-bottom: 40px;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: translateZ(-80px);
          animation: spinCube 16s infinite linear;
          transition: transform var(--transition-normal);
        }

        .scene:hover .cube {
          animation-play-state: paused;
        }

        .face {
          position: absolute;
          width: 160px;
          height: 160px;
          border: 2px solid var(--accent-lavender);
          background-color: rgba(14, 23, 37, 0.9);
          color: var(--text-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: var(--transition-normal);
          box-shadow: inset 0 0 20px rgba(160, 175, 238, 0.2);
          user-select: none;
        }

        .face:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.2);
          box-shadow: 0 0 20px rgba(94, 90, 209, 0.6);
        }

        .face-title {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 16px;
          letter-spacing: -0.01em;
        }

        .face-sub {
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--accent-lavender);
          letter-spacing: 0.1em;
          margin-top: 6px;
          text-transform: uppercase;
        }

        /* 3D Positioning of Face Planes */
        .front  { transform: rotateY(0deg) translateZ(80px); }
        .back   { transform: rotateY(180deg) translateZ(80px); }
        .right  { transform: rotateY(90deg) translateZ(80px); }
        .left   { transform: rotateY(-90deg) translateZ(80px); }
        .top    { transform: rotateX(90deg) translateZ(80px); }
        .bottom { transform: rotateX(-90deg) translateZ(80px); }

        @keyframes spinCube {
          0% { transform: translateZ(-80px) rotateX(0deg) rotateY(0deg); }
          100% { transform: translateZ(-80px) rotateX(360deg) rotateY(360deg); }
        }

        .cube-helper-text {
          min-height: 80px;
          width: 100%;
          max-width: 280px;
          text-align: center;
        }

        .cube-instruction {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .tech-detail-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.1);
          border-radius: 8px;
          padding: 12px;
          animation: fadeIn 0.3s ease;
          text-align: left;
        }

        .tech-detail-card h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-lavender);
          margin-bottom: 4px;
        }

        .tech-detail-card p {
          font-size: 11px;
          color: var(--text-muted-light);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
