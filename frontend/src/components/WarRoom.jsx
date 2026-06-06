import React, { useState, useEffect } from 'react';
import { Database, AlertOctagon, Terminal as ConsoleIcon, GitCommit, HardDrive, Cpu, ShieldAlert, CheckCircle, RefreshCw, Layers } from 'lucide-react';
import Card3D from './Card3D';

export default function WarRoom() {
  // Incident simulator states
  const [dbOnline, setDbOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('incident');
  const [deployStep, setDeployStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [redisKeys, setRedisKeys] = useState([
    { key: 'user_session_9178', hit: 142, ttl: 84 },
    { key: 'court_case_1094', hit: 88, ttl: 210 },
    { key: 'nhai_road_sec_9', hit: 56, ttl: 12 }
  ]);
  const [kafkaMessages, setKafkaMessages] = useState([]);
  const [logs, setLogs] = useState([
    'War Room console diagnostics ready.',
    'API gateway healthcheck status: OPERATIONAL.',
    'System monitoring agents: STABLE.'
  ]);

  // Handle DB down toggle
  const toggleDb = () => {
    const nextState = !dbOnline;
    setDbOnline(nextState);

    const timestamp = new Date().toTimeString().split(' ')[0];
    if (!nextState) {
      setLogs(prev => [
        `[${timestamp}] 🔴 [CRITICAL ALERT] Primary database connection failed (MySQL Connection Timed Out).`,
        `[${timestamp}] ⚡ [FAILOVER ACTIVE] Redirecting lookup transactions to Redis caches...`,
        `[${timestamp}] ⚙️ [QUEUE DECOUPLING] Storing bet transaction payloads inside Kafka event buffer...`,
        ...prev
      ]);
      window.dispatchEvent(new CustomEvent('gain-xp', {
        detail: {
          amount: 30,
          action: 'Triggered database offline disaster failover simulation!',
          incrementKey: 'secretEasterEgg'
        }
      }));
    } else {
      setLogs(prev => [
        `[${timestamp}] 🟢 [RESOLVED] Primary database connection re-established. Syncing logs...`,
        `[${timestamp}] ⚙️ [FLUSHING QUEUE] Ingesting Kafka buffered events into MySQL database...`,
        ...prev
      ]);
    }
  };

  // Run deployment simulator
  const runDeployment = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(1);
    
    const timestamp = () => new Date().toTimeString().split(' ')[0];
    
    setLogs(prev => [`[${timestamp()}] 🚀 Initiating deployment pipeline for branch main...`, ...prev]);

    setTimeout(() => {
      setDeployStep(2);
      setLogs(prev => [`[${timestamp()}] 🧪 Running SonarQube scan & validation tests...`, ...prev]);
    }, 1500);

    setTimeout(() => {
      setDeployStep(3);
      setLogs(prev => [`[${timestamp()}] 🐳 Building Docker image: rahul-portfolio-api:latest...`, ...prev]);
    }, 3000);

    setTimeout(() => {
      setDeployStep(4);
      setLogs(prev => [`[${timestamp()}] 🚀 Deploying containers to production cluster. Rolling restart...`, ...prev]);
    }, 4500);

    setTimeout(() => {
      setDeployStep(5);
      setIsDeploying(false);
      setLogs(prev => [`[${timestamp()}] 🟢 Deployment completed successfully! All health checks passed.`, ...prev]);
      
      window.dispatchEvent(new CustomEvent('gain-xp', {
        detail: {
          amount: 25,
          action: 'Executed automated Git deployment pipeline check!'
        }
      }));
    }, 6000);
  };

  // Kafka live ticker
  useEffect(() => {
    const interval = setInterval(() => {
      if (!dbOnline) {
        const events = ['USER_BET_CREATED', 'PAYMENT_QUEUED', 'WHATSAPP_LOGGED', 'KYC_RETRIEVED'];
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        const id = Math.floor(Math.random() * 9000) + 1000;
        setKafkaMessages(prev => [{ id, event: randomEvent, status: 'Buffered in Memory Queue' }, ...prev.slice(0, 5)]);
      } else {
        setKafkaMessages([]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [dbOnline]);

  return (
    <section id="war-room" className="war-room-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Security Operations Center</span>
        <h2 className="section-title light">Architecture War Room</h2>
        <p className="section-subtitle light">
          Test systems failure events or trigger deployment streams. Watch how Rahul Garg designs production ecosystems to remain active during unexpected service downtime.
        </p>

        {/* War Room Layout grid */}
        <div className="war-room-grid">
          
          {/* Controls Side Panel */}
          <div className="war-room-controls">
            
            {/* Dashboard Selector */}
            <div className="war-room-tabs">
              <button className={`war-tab-btn ${activeTab === 'incident' ? 'active' : ''}`} onClick={() => setActiveTab('incident')}>
                🚨 Disaster Incident Room
              </button>
              <button className={`war-tab-btn ${activeTab === 'pipeline' ? 'active' : ''}`} onClick={() => setActiveTab('pipeline')}>
                🚀 Deployment Pipeline
              </button>
              <button className={`war-tab-btn ${activeTab === 'redis' ? 'active' : ''}`} onClick={() => setActiveTab('redis')}>
                ⚡ Redis & Kafka Cache Visualizer
              </button>
            </div>

            {/* TAB CONTENTS */}
            <div className="war-tab-body">
              {activeTab === 'incident' && (
                <div className="tab-pane">
                  <h3 className="pane-title">Disaster Simulator</h3>
                  <p className="pane-desc">Simulate a database failure. Turning off MySQL activates the automated Redis/Kafka failover protocols in real-time.</p>
                  
                  <div className="switch-status-card">
                    <div className="switch-meta">
                      <span className="switch-label">MySQL PRIMARY NODE STATE</span>
                      <span className={`status-text ${dbOnline ? 'online' : 'offline'}`}>{dbOnline ? 'ONLINE (Master Node)' : 'OFFLINE (Connection Refused)'}</span>
                    </div>
                    <button className={`trigger-failure-btn ${dbOnline ? 'kill' : 'restore'}`} onClick={toggleDb}>
                      {dbOnline ? 'Simulate MySQL Down ⚡' : 'Restore Database Node 🔌'}
                    </button>
                  </div>

                  <div className="failover-telemetry">
                    <span className="tel-sub font-mono">INCIDENT METRICS:</span>
                    <div className="tel-indicators">
                      <div className="tel-col">
                        <span>Failover Route:</span>
                        <span className={`val ${dbOnline ? '' : 'highlight-orange'}`}>{dbOnline ? 'Direct Relational seek' : 'Redis Cache Memory seek'}</span>
                      </div>
                      <div className="tel-col">
                        <span>Kafka queue backlog:</span>
                        <span className={`val ${dbOnline ? '' : 'highlight-red'}`}>{dbOnline ? '0 events' : `${kafkaMessages.length + 3} events buffered`}</span>
                      </div>
                      <div className="tel-col">
                        <span>Data Integrity:</span>
                        <span className="val green">100% Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="tab-pane">
                  <h3 className="pane-title">Production CI/CD Pipeline</h3>
                  <p className="pane-desc">Trigger a rolling release update. Trace QA validation checks, SonarQube analytics, and Docker build deployment nodes.</p>
                  
                  <button onClick={runDeployment} className="trigger-deploy-btn" disabled={isDeploying}>
                    {isDeploying ? 'Deploying Branch...' : 'Trigger Git Deployment 🚀'}
                  </button>

                  <div className="pipeline-nodes-wrapper">
                    <div className={`pipe-node ${deployStep >= 1 ? 'active' : ''}`}>
                      <GitCommit size={14} />
                      <span>1. Git Push (main)</span>
                    </div>
                    <div className={`pipe-node ${deployStep >= 2 ? 'active' : ''}`}>
                      <ShieldAlert size={14} />
                      <span>2. SonarQube Validation</span>
                    </div>
                    <div className={`pipe-node ${deployStep >= 3 ? 'active' : ''}`}>
                      <HardDrive size={14} />
                      <span>3. Docker Container Build</span>
                    </div>
                    <div className={`pipe-node ${deployStep >= 4 ? 'active' : ''}`}>
                      <Cpu size={14} />
                      <span>4. Production Rolling Rollout</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'redis' && (
                <div className="tab-pane">
                  <h3 className="pane-title">Key Cache Eviction Status</h3>
                  <p className="pane-desc font-mono text-xs">Simulated in-memory caching slots currently listening on port 6379:</p>
                  
                  <div className="redis-keys-list">
                    {redisKeys.map((key, i) => (
                      <div key={i} className="redis-key-card font-mono">
                        <div className="key-header">
                          <span className="key-string">🔑 {key.key}</span>
                          <span className="key-ttl">TTL: {key.ttl}s</span>
                        </div>
                        <div className="key-stats">
                          <span>Hits: {key.hit}</span>
                          <span>Status: ACTIVE</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Visualization Console Output */}
          <div className="war-room-visuals">
            
            {/* SVG Interactive Incident Diagram */}
            <div className="visuals-diagram-card">
              <div className="viz-header">
                <span className="viz-title font-mono">monitoring_map // failover_routes</span>
                <span className="system-health-badge font-mono">HEALTH: {dbOnline ? 'STABLE' : 'DEGRADED'}</span>
              </div>

              <div className="viz-viewport">
                <svg className="war-svg" viewBox="0 0 400 240">
                  {/* Nodes */}
                  <circle cx="50" cy="120" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="50" y="124" className="node-txt" textAnchor="middle">UI</text>
                  <text x="50" y="150" className="node-lbl" textAnchor="middle">Clients</text>

                  <circle cx="160" cy="120" r="20" fill="#1e293b" stroke="#a0afee" strokeWidth="2" />
                  <text x="160" y="124" className="node-txt" textAnchor="middle">API</text>
                  <text x="160" y="150" className="node-lbl" textAnchor="middle">Gateway</text>

                  <rect x="250" y="30" width="50" height="32" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                  <text x="275" y="50" className="node-txt-rect" textAnchor="middle">REDIS</text>
                  <text x="275" y="76" className="node-lbl" textAnchor="middle">Cache Node</text>

                  <circle cx="340" cy="120" r="20" fill="#1e293b" stroke={dbOnline ? '#6366f1' : '#ef4444'} strokeWidth="2" className={dbOnline ? '' : 'flashing-red'} />
                  <text x="340" y="124" className="node-txt" textAnchor="middle">DB</text>
                  <text x="340" y="150" className="node-lbl" textAnchor="middle">MySQL</text>

                  <rect x="250" y="170" width="50" height="32" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                  <text x="275" y="190" className="node-txt-rect" textAnchor="middle">KAFKA</text>
                  <text x="275" y="216" className="node-lbl" textAnchor="middle">Event Broker</text>

                  {/* Dynamic connection paths */}
                  <line x1="68" y1="120" x2="140" y2="120" stroke="#a0afee" strokeWidth="1.5" />
                  
                  {/* API -> DB (Only active if DB Online) */}
                  <line 
                    x1="180" 
                    y1="120" 
                    x2="320" 
                    y2="120" 
                    stroke={dbOnline ? '#6366f1' : '#ef4444'} 
                    strokeWidth="1.5" 
                    strokeDasharray={dbOnline ? '0' : '4'}
                  />

                  {/* Failover Routes API -> Redis & API -> Kafka (glowing if DB offline) */}
                  <path 
                    d="M 180,110 L 250,50" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="1.5" 
                    className={dbOnline ? 'muted-path' : 'active-glow-green'} 
                  />
                  <path 
                    d="M 180,130 L 250,186" 
                    fill="none" 
                    stroke="#f59e0b" 
                    strokeWidth="1.5" 
                    className={dbOnline ? 'muted-path' : 'active-glow-yellow'} 
                  />

                  {/* Ingest from Kafka and Cache back to DB */}
                  <path d="M 300,186 L 330,138" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="muted-path" />
                  <path d="M 300,50 L 330,102" fill="none" stroke="#10b981" strokeWidth="1.5" className="muted-path" />
                </svg>
              </div>

              {/* Kafka Buffered Ticker Console */}
              {!dbOnline && (
                <div className="kafka-ticker font-mono">
                  <div className="ticker-label">⚠️ Kafka Event Queued Buffer:</div>
                  <div className="ticker-items">
                    {kafkaMessages.map((msg, idx) => (
                      <div key={idx} className="ticker-row">
                        <span>Event: {msg.event} (Bet ID: #{msg.id})</span>
                        <span className="ticker-status font-bold">{msg.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Console Log Panel */}
            <div className="visuals-console-card font-mono">
              <div className="console-header">
                <ConsoleIcon size={12} />
                <span>Console Diagnostics Log</span>
              </div>
              <div className="console-lines">
                {logs.map((log, index) => (
                  <div key={index} className="console-line-row">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .war-room-section {
          background-color: var(--bg-dark);
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          position: relative;
          overflow: hidden;
        }

        .war-room-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 40px;
          position: relative;
          z-index: 5;
        }

        .war-room-controls {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .war-room-tabs {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .war-tab-btn {
          text-align: left;
          background: rgba(245, 243, 239, 0.03);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 12px 16px;
          color: var(--text-muted-light);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .war-tab-btn:hover {
          color: var(--text-light);
          border-color: rgba(94, 90, 209, 0.5);
        }

        .war-tab-btn.active {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
          color: var(--text-light);
          font-weight: 600;
        }

        .war-tab-body {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.06);
          border-radius: 8px;
          padding: 20px;
          flex-grow: 1;
        }

        .pane-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .pane-desc {
          font-size: 12px;
          color: var(--text-muted-light);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .switch-status-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .switch-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .switch-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .status-text {
          font-size: 13px;
          font-weight: 700;
        }

        .status-text.online { color: #10b981; }
        .status-text.offline { color: #ef4444; }

        .trigger-failure-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          padding: 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .trigger-failure-btn.kill {
          background-color: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .trigger-failure-btn.kill:hover {
          background-color: #ef4444;
          color: #ffffff;
        }

        .trigger-failure-btn.restore {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .trigger-failure-btn.restore:hover {
          background-color: #10b981;
          color: #ffffff;
        }

        .failover-telemetry {
          margin-top: 16px;
          border-top: 1px solid rgba(245, 243, 239, 0.08);
          padding-top: 16px;
        }

        .tel-sub {
          font-size: 9px;
          color: var(--accent-lavender);
        }

        .tel-indicators {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .tel-col {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .tel-col .val.highlight-orange { color: #f59e0b; font-weight: 600; }
        .tel-col .val.highlight-red { color: #ef4444; font-weight: 600; }

        /* Pipeline Simulator Pane */
        .trigger-deploy-btn {
          width: 100%;
          background-color: var(--accent-purple);
          border: none;
          color: #ffffff;
          padding: 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .trigger-deploy-btn:hover:not(:disabled) {
          background-color: #4c48b8;
        }

        .pipeline-nodes-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .pipe-node {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.04);
          border-radius: 6px;
          padding: 10px 14px;
          color: rgba(245, 243, 239, 0.3);
          font-size: 12px;
          font-family: var(--font-mono);
          transition: var(--transition-normal);
        }

        .pipe-node.active {
          color: var(--text-light);
          border-color: var(--accent-lavender);
          background-color: rgba(160, 175, 238, 0.05);
        }

        /* Redis key list */
        .redis-keys-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .redis-key-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 12px;
          font-size: 11px;
        }

        .key-header {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .key-string { color: #10b981; }
        .key-ttl { color: var(--accent-lavender); }

        .key-stats {
          display: flex;
          justify-content: space-between;
          color: rgba(245, 243, 239, 0.4);
        }

        /* Visuals Output panel */
        .war-room-visuals {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .visuals-diagram-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        .viz-viewport {
          padding: 16px;
          background-color: #05080e;
        }

        .war-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .node-txt { fill: #ffffff; font-size: 10px; font-weight: 500; font-family: var(--font-sans); }
        .node-txt-rect { fill: #ffffff; font-size: 9px; font-weight: 600; font-family: var(--font-mono); }
        .node-lbl { fill: var(--text-muted-light); font-size: 8px; font-family: var(--font-sans); }

        .flashing-red {
          animation: redPulse 1s infinite alternate;
        }

        @keyframes redPulse {
          0% { stroke: #ef4444; fill: #1e293b; }
          100% { stroke: #ef4444; fill: rgba(239, 68, 68, 0.25); }
        }

        .muted-path {
          stroke: rgba(245, 243, 239, 0.06);
        }

        .active-glow-green {
          stroke-dasharray: 4;
          animation: flowDash 0.8s linear infinite;
        }

        .active-glow-yellow {
          stroke-dasharray: 4;
          animation: flowDash 1.2s linear infinite;
        }

        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }

        .kafka-ticker {
          background-color: rgba(245, 158, 11, 0.06);
          border-top: 1px solid rgba(245, 158, 11, 0.15);
          padding: 10px 16px;
          height: 90px;
          overflow: hidden;
        }

        .ticker-label {
          font-size: 9px;
          color: #f59e0b;
          margin-bottom: 6px;
        }

        .ticker-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ticker-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #f59e0b;
        }

        /* Console */
        .visuals-console-card {
          background-color: #05080e;
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 16px;
          height: 150px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .console-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(245, 243, 239, 0.45);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .console-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          flex-grow: 1;
        }

        .console-line-row {
          font-size: 11px;
          color: var(--text-muted-light);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .war-room-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
