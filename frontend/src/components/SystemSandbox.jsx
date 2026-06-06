import React, { useState, useEffect, useRef } from 'react';
import { Activity, Play, RefreshCw, BarChart2, ShieldAlert, Cpu, Terminal as ConsoleIcon } from 'lucide-react';

export default function SystemSandbox() {
  const [redisEnabled, setRedisEnabled] = useState(false);
  const [kafkaEnabled, setKafkaEnabled] = useState(false);
  const [loadBalancerEnabled, setLoadBalancerEnabled] = useState(false);
  const [dbIndexingEnabled, setDbIndexingEnabled] = useState(false);
  
  const [phase, setPhase] = useState(0);
  const [trafficRate, setTrafficRate] = useState(1500); // req/sec
  const [consoleLogs, setConsoleLogs] = useState([
    'System initialization successful.',
    'Gateway routing listening on port 5000.',
    'Awaiting traffic events...'
  ]);

  // Animate the rolling telemetry waves
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(p => (p + 4) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Generate logs matching actions
  useEffect(() => {
    const logInterval = setInterval(() => {
      const timestamp = new Date().toTimeString().split(' ')[0];
      let eventLog = '';
      
      if (redisEnabled && Math.random() > 0.4) {
        eventLog = `[CACHE HIT] Intercepted SELECT from Redis key cache_api_user_session`;
      } else {
        eventLog = `[SQL READ] Queried experiences table - Index scan completed`;
      }

      if (kafkaEnabled && Math.random() > 0.7) {
        eventLog = `[QUEUE INGEST] Buffered BetTransaction event inside Kafka broker partition 0`;
      }

      setConsoleLogs(prev => [
        `[${timestamp}] ${eventLog}`,
        ...prev.slice(0, 8)
      ]);
    }, 1500);

    return () => clearInterval(logInterval);
  }, [redisEnabled, kafkaEnabled]);

  // Calculate metrics based on settings
  const getLatency = () => {
    let base = 150;
    if (redisEnabled) base = 4;
    if (loadBalancerEnabled) base = Math.max(2, Math.floor(base * 0.7));
    return `${base} ms`;
  };

  const getDbLoad = () => {
    let base = 88;
    if (redisEnabled) base = 12;
    if (dbIndexingEnabled) base = Math.max(3, Math.floor(base * 0.4));
    return `${base}%`;
  };

  const getIntegrity = () => {
    if (kafkaEnabled) return '100% (Guaranteed)';
    return 'Risky (Race Conflicts)';
  };

  const getErrorRate = () => {
    let rate = 4.2;
    if (loadBalancerEnabled) rate -= 1.8;
    if (dbIndexingEnabled) rate -= 1.5;
    if (redisEnabled) rate -= 0.6;
    return `${Math.max(0.1, parseFloat(rate.toFixed(1)))}%`;
  };

  const getRedisHitRatio = () => {
    if (!redisEnabled) return '0%';
    return loadBalancerEnabled ? '94%' : '88%';
  };

  // Helper to generate dynamic SVG wave paths based on stats
  const generateWavePath = (width, height, amplitude, frequency, offset) => {
    let points = [];
    const step = 4;
    for (let x = 0; x <= width; x += step) {
      const angle = (x * frequency + offset) * (Math.PI / 180);
      const y = height / 2 + Math.sin(angle) * amplitude;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  // Wave specs based on active tuning state
  let cpuAmp = 24;
  let cpuFreq = 4.0;
  if (redisEnabled) { cpuAmp = 6; cpuFreq = 1.5; }
  if (loadBalancerEnabled) { cpuAmp = Math.max(3, cpuAmp - 2); cpuFreq = Math.max(1, cpuFreq - 0.5); }

  let dbAmp = 20;
  let dbFreq = 3.5;
  if (redisEnabled) { dbAmp = 4; dbFreq = 1.0; }
  if (dbIndexingEnabled) { dbAmp = Math.max(2, dbAmp - 1); dbFreq = Math.max(0.8, dbFreq - 0.3); }

  const cpuPath = generateWavePath(260, 60, cpuAmp, cpuFreq, phase);
  const dbPath = generateWavePath(260, 60, dbAmp, dbFreq, phase + 45);

  const handleToggle = (type) => {
    if (type === 'redis') {
      setRedisEnabled(!redisEnabled);
    } else if (type === 'kafka') {
      setKafkaEnabled(!kafkaEnabled);
    } else if (type === 'lb') {
      setLoadBalancerEnabled(!loadBalancerEnabled);
    } else if (type === 'index') {
      setDbIndexingEnabled(!dbIndexingEnabled);
    }

    // Dispatch telemetry XP gain
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 15,
        action: `Adjusted system design architecture config.`,
        incrementKey: 'tweakSystem'
      }
    }));
  };

  return (
    <section id="system-sandbox" className="system-sandbox-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Architecture Simulator</span>
        <h2 className="section-title light">Interactive System Design Sandbox</h2>
        <p className="section-subtitle light">
          Toggle Redis Caching, Kafka Event Streaming, Load Balancers, and Database Indexes to see how production system latency, load, and data integrity shift in real time.
        </p>

        <div className="sandbox-split-layout">
          {/* Controls and Dials */}
          <div className="sandbox-controls-panel">
            <h3 className="panel-title">Tuning Console</h3>
            
            <div className="toggle-group">
              
              <div className="toggle-item-grid">
                
                <div className="toggle-sub-card">
                  <div className="toggle-header-row">
                    <span className="toggle-name">⚡ Redis Cache Node</span>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={redisEnabled} 
                        onChange={() => handleToggle('redis')}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <p className="toggle-explanation">Intercepts repetitive judicial APIs and banking database lookups in key-value memory.</p>
                </div>

                <div className="toggle-sub-card">
                  <div className="toggle-header-row">
                    <span className="toggle-name">⚙️ Apache Kafka Broker</span>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={kafkaEnabled} 
                        onChange={() => handleToggle('kafka')}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <p className="toggle-explanation">Decouples game betting write operations and queues incoming transactions asynchronously.</p>
                </div>

                <div className="toggle-sub-card">
                  <div className="toggle-header-row">
                    <span className="toggle-name">⚖️ Nginx Load Balancer</span>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={loadBalancerEnabled} 
                        onChange={() => handleToggle('lb')}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <p className="toggle-explanation">Distributes API request rates evenly across multiple server processes to prevent bottleneck load spikes.</p>
                </div>

                <div className="toggle-sub-card">
                  <div className="toggle-header-row">
                    <span className="toggle-name">🗂️ MySQL DB Indexing</span>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={dbIndexingEnabled} 
                        onChange={() => handleToggle('index')}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <p className="toggle-explanation">Creates B-Tree database indexes, resolving full-table scans to quick lookup seeks.</p>
                </div>

              </div>

            </div>

            {/* NASA/Datadog Telemetry Panel */}
            <div className="metrics-card">
              <h4 className="metrics-title">
                <Activity size={14} />
                <span>Datadog Live Telemetry Monitor</span>
              </h4>
              <div className="telemetry-grid">
                <div className="telemetry-item">
                  <span className="telemetry-label">API LATENCY</span>
                  <span className={`telemetry-value ${redisEnabled ? 'success' : 'warn'}`}>{getLatency()}</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">DATABASE LOAD</span>
                  <span className={`telemetry-value ${redisEnabled ? 'success' : 'warn'}`}>{getDbLoad()}</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">TRANSACTION INTEGRITY</span>
                  <span className={`telemetry-value ${kafkaEnabled ? 'success' : 'danger'}`}>{getIntegrity()}</span>
                </div>
                <div className="telemetry-item">
                  <span className="telemetry-label">ERROR RATE</span>
                  <span className={`telemetry-value ${loadBalancerEnabled ? 'success' : 'warn'}`}>{getErrorRate()}</span>
                </div>
              </div>

              {/* Dials for Redis / Kafka rate */}
              <div className="gauges-flex">
                <div className="gauge-item">
                  <span className="gauge-label font-mono">REDIS HIT RATIO</span>
                  <span className="gauge-val font-mono green">{getRedisHitRatio()}</span>
                </div>
                <div className="gauge-item">
                  <span className="gauge-label font-mono">TRAFFIC VOLUME</span>
                  <span className="gauge-val font-mono">{trafficRate} Req/s</span>
                </div>
              </div>

              {/* Dynamic Sparkline Wave Graphs */}
              <div className="sparklines-container">
                <div className="sparkline-item">
                  <div className="sparkline-header">
                    <span>CPU LOAD UTILIZATION</span>
                    <span>{redisEnabled ? '14% UTIL' : '82% UTIL'}</span>
                  </div>
                  <svg className="sparkline-svg" viewBox="0 0 260 60">
                    <path className={`sparkline-path cpu ${redisEnabled ? 'smooth' : 'agitated'}`} d={cpuPath} />
                  </svg>
                </div>

                <div className="sparkline-item">
                  <div className="sparkline-header">
                    <span>DB IOPS/THROUGHPUT</span>
                    <span>{redisEnabled ? '1.2k IOPS' : '8.6k IOPS'}</span>
                  </div>
                  <svg className="sparkline-svg" viewBox="0 0 260 60">
                    <path className={`sparkline-path db ${redisEnabled ? 'smooth' : 'agitated'}`} d={dbPath} />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* SVG Pipeline Visualization with console log screen */}
          <div className="sandbox-viz-panel">
            <div className="viz-header">
              <span className="viz-title">topology_map // execution_flow</span>
              <div className="packet-legend">
                <span className="legend-dot red"></span><span>Direct SQL</span>
                <span className="legend-dot green"></span><span>Cached Redis</span>
                <span className="legend-dot yellow"></span><span>Queued Kafka</span>
              </div>
            </div>
            
            <div className="viz-space">
              <svg className="topo-svg" viewBox="0 0 420 280">
                {/* SVG definitions for request packet motion paths */}
                <defs>
                  {/* Direct Path */}
                  <path id="path-direct" d="M 40,140 H 370" />
                  {/* Cached Path */}
                  <path id="path-cached" d="M 40,140 H 140 V 50 H 280 V 140 M 280,50 H 370 V 140" />
                  {/* Queued Path */}
                  <path id="path-queued" d="M 40,140 H 140 V 230 H 280 V 140 M 280,230 H 370 V 140" />
                </defs>

                {/* Connection lines background */}
                {/* Client to Gateway */}
                <path className="flow-line-bg" d="M 40,140 H 110" />
                
                {/* Gateway to Redis */}
                <path className={`flow-line-bg ${redisEnabled ? 'active' : ''}`} d="M 140,110 V 50 H 260" />
                
                {/* Gateway to Kafka */}
                <path className={`flow-line-bg ${kafkaEnabled ? 'active' : ''}`} d="M 140,170 V 230 H 260" />
                
                {/* Gateway to Database (Direct Slow Path) */}
                <path className={`flow-line-bg ${!redisEnabled && !kafkaEnabled ? 'active slow' : ''}`} d="M 160,140 H 340" />

                {/* Redis to Database */}
                <path className={`flow-line-bg ${redisEnabled ? 'active' : ''}`} d="M 300,50 H 370 V 110" />

                {/* Kafka to Database */}
                <path className={`flow-line-bg ${kafkaEnabled ? 'active' : ''}`} d="M 300,230 H 370 V 170" />

                {/* Load Balancer Indicator */}
                {loadBalancerEnabled && (
                  <circle cx="90" cy="140" r="5" fill="#a0afee" />
                )}

                {/* DB indexing indicator */}
                {dbIndexingEnabled && (
                  <rect x="345" y="115" width="8" height="12" fill="#10b981" />
                )}

                {/* ANIMATED PACKETS */}
                {/* Direct MySQL request: Slow red dot */}
                {!redisEnabled && !kafkaEnabled && (
                  <circle r="4" fill="#ef4444" className="packet-glow-red">
                    <animateMotion dur="2.5s" repeatCount="indefinite">
                      <mpath href="#path-direct" />
                    </animateMotion>
                  </circle>
                )}

                {/* Cached Redis request: Rapid cyan/green dot */}
                {redisEnabled && (
                  <circle r="4" fill="#10b981" className="packet-glow-green">
                    <animateMotion dur="0.8s" repeatCount="indefinite">
                      <mpath href="#path-cached" />
                    </animateMotion>
                  </circle>
                )}

                {/* Queued Kafka request: Yellow dot that pauses and shifts */}
                {kafkaEnabled && (
                  <circle r="4" fill="#f59e0b" className="packet-glow-yellow">
                    <animateMotion dur="1.6s" repeatCount="indefinite">
                      <mpath href="#path-queued" />
                    </animateMotion>
                  </circle>
                )}

                {/* Client Node */}
                <circle className="node client" cx="40" cy="140" r="18" />
                <text className="node-text" x="40" y="144" textAnchor="middle">UI</text>
                <text className="node-sub" x="40" y="175" textAnchor="middle">Client</text>

                {/* API Gateway Node */}
                <circle className="node gateway" cx="140" cy="140" r="22" />
                <text className="node-text font-bold" x="140" y="144" textAnchor="middle">NODE</text>
                <text className="node-sub" x="140" y="180" textAnchor="middle">API Router</text>

                {/* Redis Node */}
                <rect className={`node-rect redis ${redisEnabled ? 'active' : ''}`} x="250" y="30" width="60" height="40" rx="6" />
                <text className="node-text-rect" x="280" y="54" textAnchor="middle">REDIS</text>
                <text className="node-sub" x="280" y="85" textAnchor="middle">Cache Layer</text>

                {/* Kafka Node */}
                <rect className={`node-rect kafka ${kafkaEnabled ? 'active' : ''}`} x="250" y="210" width="60" height="40" rx="6" />
                <text className="node-text-rect" x="280" y="234" textAnchor="middle">KAFKA</text>
                <text className="node-sub" x="280" y="265" textAnchor="middle">Event Queue</text>

                {/* Database Node */}
                <circle className="node database" cx="370" cy="140" r="22" />
                <text className="node-text" x="370" y="144" textAnchor="middle">DB</text>
                <text className="node-sub" x="370" y="180" textAnchor="middle">MySQL</text>
              </svg>
            </div>

            {/* Embedded Live Console Log stream inside topology map */}
            <div className="sandbox-console font-mono">
              <div className="console-header">
                <ConsoleIcon size={12} />
                <span>Live Event Stream Log</span>
              </div>
              <div className="console-lines">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="console-line">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .system-sandbox-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .system-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(160, 175, 238, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          z-index: 1;
          pointer-events: none;
        }

        .sandbox-split-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        .sandbox-controls-panel {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .panel-title {
          font-size: 18px;
          font-weight: 500;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 12px;
          color: var(--text-light);
        }

        .toggle-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .toggle-item-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .toggle-sub-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 120px;
        }

        .toggle-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-light);
        }

        .toggle-explanation {
          font-size: 11px;
          color: var(--text-muted-light);
          line-height: 1.4;
        }

        /* Toggle switch */
        .switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
          flex-shrink: 0;
        }

        .switch input { 
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(245, 243, 239, 0.15);
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 14px;
          width: 14px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: var(--accent-purple);
        }

        input:checked + .slider:before {
          transform: translateX(20px);
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        /* Telemetry Panel */
        .metrics-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 10px;
          padding: 20px;
        }

        .metrics-title {
          font-family: var(--font-mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .telemetry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 16px;
          margin-bottom: 16px;
        }

        .telemetry-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .telemetry-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .telemetry-value {
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .telemetry-value.success { color: #10b981; }
        .telemetry-value.warn { color: #f59e0b; }
        .telemetry-value.danger { color: #ef4444; }

        .gauges-flex {
          display: flex;
          justify-content: space-between;
          background: rgba(0,0,0,0.15);
          padding: 10px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          border: 1px solid rgba(245,243,239,0.03);
        }

        .gauge-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gauge-label {
          font-size: 8px;
          color: var(--text-muted-light);
        }

        .gauge-val {
          font-size: 13px;
          font-weight: 700;
        }

        .gauge-val.green {
          color: #10b981;
          text-shadow: 0 0 4px rgba(16,185,129,0.2);
        }

        /* Telemetry Sparklines */
        .sparklines-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sparkline-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sparkline-header {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .sparkline-svg {
          width: 100%;
          height: 36px;
          background-color: rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          border: 1px solid rgba(245, 243, 239, 0.04);
        }

        .sparkline-path {
          fill: none;
          stroke-width: 1.5px;
          transition: stroke var(--transition-normal);
        }

        .sparkline-path.cpu {
          stroke: #c3ccf6;
        }

        .sparkline-path.cpu.smooth {
          stroke: #10b981;
        }

        .sparkline-path.db {
          stroke: #818cf8;
        }

        .sparkline-path.db.smooth {
          stroke: #34d399;
        }

        /* SVG Topo visualization */
        .sandbox-viz-panel {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }

        .viz-header {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px 16px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .viz-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .packet-legend {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-muted-light);
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .legend-dot.red { background-color: #ef4444; }
        .legend-dot.green { background-color: #10b981; }
        .legend-dot.yellow { background-color: #f59e0b; }

        .viz-space {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0b111a;
          border-bottom: 1px solid rgba(245,243,239,0.05);
        }

        .topo-svg {
          width: 100%;
          height: auto;
        }

        /* SVG node types */
        .node {
          fill: #1e293b;
          stroke: rgba(245, 243, 239, 0.15);
          stroke-width: 2px;
        }

        .node.client { fill: #0284c7; stroke: #38bdf8; }
        .node.gateway { fill: var(--bg-darker); stroke: var(--accent-lavender); }
        .node.database { fill: #1e1b4b; stroke: #6366f1; }

        .node-rect {
          fill: #1e293b;
          stroke: rgba(245, 243, 239, 0.15);
          stroke-width: 2px;
          transition: var(--transition-normal);
        }

        .node-rect.redis.active { fill: rgba(16, 185, 129, 0.15); stroke: #10b981; box-shadow: 0 0 15px #10b981; }
        .node-rect.kafka.active { fill: rgba(245, 158, 11, 0.15); stroke: #f59e0b; }

        .node-text {
          fill: var(--text-light);
          font-size: 10px;
          font-weight: 500;
          font-family: var(--font-sans);
        }

        .node-text-rect {
          fill: var(--text-light);
          font-size: 9px;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .node-sub {
          fill: var(--text-muted-light);
          font-size: 8px;
          font-family: var(--font-sans);
        }

        /* Line flows background connection lines */
        .flow-line-bg {
          fill: none;
          stroke: rgba(245, 243, 239, 0.08);
          stroke-width: 2px;
          transition: stroke var(--transition-normal);
        }

        .flow-line-bg.active {
          stroke: rgba(160, 175, 238, 0.2);
        }

        .flow-line-bg.active.slow {
          stroke: rgba(239, 68, 68, 0.15);
        }

        /* Animated packet glow filters */
        .packet-glow-red {
          filter: drop-shadow(0 0 4px #ef4444);
        }

        .packet-glow-green {
          filter: drop-shadow(0 0 4px #10b981);
        }

        .packet-glow-yellow {
          filter: drop-shadow(0 0 4px #f59e0b);
        }

        /* Console */
        .sandbox-console {
          background-color: #05080e;
          padding: 16px;
          height: 160px;
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
          color: rgba(16,185,129,0.7);
          border-bottom: 1px solid rgba(16,185,129,0.15);
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

        .console-line {
          font-size: 11px;
          color: #10b981;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .sandbox-split-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .toggle-item-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
