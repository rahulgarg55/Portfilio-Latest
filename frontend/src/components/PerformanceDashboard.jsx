import React, { useState, useEffect, useRef } from 'react';

// Simulated live API metrics - fluctuating values
const INITIAL_METRICS = {
  rps: 1243,
  latency: 18,
  errorRate: 0.02,
  cacheHit: 94.2,
  cpuUsage: 34,
  memUsage: 61,
  activeConnections: 847,
  kafkaLag: 3,
};

const CHART_POINTS = 30;

function Sparkline({ data, color, height = 40 }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 120;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} className="sparkline-svg">
      <defs>
        <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MetricCard({ title, value, unit, status, color, data, icon, description }) {
  return (
    <div className="metric-card" style={{ '--mc-color': color }}>
      <div className="mc-header">
        <span className="mc-icon">{icon}</span>
        <span className="mc-title font-mono">{title}</span>
        <span className={`mc-status font-mono status-${status}`}>{status}</span>
      </div>
      <div className="mc-value-row">
        <span className="mc-value font-mono" style={{ color }}>
          {typeof value === 'number' ? value.toLocaleString() : value}
          <span className="mc-unit">{unit}</span>
        </span>
        <Sparkline data={data} color={color} />
      </div>
      <p className="mc-desc">{description}</p>
    </div>
  );
}

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState(INITIAL_METRICS);
  const [history, setHistory] = useState(() => ({
    rps: Array.from({ length: CHART_POINTS }, () => 1200 + Math.random() * 200),
    latency: Array.from({ length: CHART_POINTS }, () => 14 + Math.random() * 10),
    cacheHit: Array.from({ length: CHART_POINTS }, () => 91 + Math.random() * 5),
    cpu: Array.from({ length: CHART_POINTS }, () => 28 + Math.random() * 15),
    mem: Array.from({ length: CHART_POINTS }, () => 55 + Math.random() * 12),
    connections: Array.from({ length: CHART_POINTS }, () => 800 + Math.random() * 100),
  }));
  const [uptime, setUptime] = useState({ hours: 2187, mins: 42, secs: 18 });
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        rps: Math.max(800, Math.min(2000, prev.rps + (Math.random() - 0.45) * 80)),
        latency: Math.max(4, Math.min(60, prev.latency + (Math.random() - 0.45) * 3)),
        errorRate: Math.max(0, Math.min(2, prev.errorRate + (Math.random() - 0.5) * 0.02)).toFixed(2),
        cacheHit: Math.max(88, Math.min(98, prev.cacheHit + (Math.random() - 0.48) * 0.5)).toFixed(1),
        cpuUsage: Math.max(10, Math.min(80, prev.cpuUsage + (Math.random() - 0.45) * 4)),
        memUsage: Math.max(40, Math.min(85, prev.memUsage + (Math.random() - 0.47) * 2)),
        activeConnections: Math.max(400, Math.min(1400, prev.activeConnections + (Math.random() - 0.45) * 30)),
        kafkaLag: Math.max(0, Math.min(20, prev.kafkaLag + (Math.random() - 0.5) * 2)),
      }));

      setHistory(prev => ({
        rps: [...prev.rps.slice(1), metrics.rps],
        latency: [...prev.latency.slice(1), metrics.latency],
        cacheHit: [...prev.cacheHit.slice(1), parseFloat(metrics.cacheHit)],
        cpu: [...prev.cpu.slice(1), metrics.cpuUsage],
        mem: [...prev.mem.slice(1), metrics.memUsage],
        connections: [...prev.connections.slice(1), metrics.activeConnections],
      }));

      setUptime(prev => {
        let s = prev.secs + 1;
        let m = prev.mins;
        let h = prev.hours;
        if (s >= 60) { s = 0; m++; }
        if (m >= 60) { m = 0; h++; }
        return { hours: h, mins: m, secs: s };
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [metrics]);

  const pad = (n) => String(Math.floor(n)).padStart(2, '0');
  const isHighCPU = metrics.cpuUsage > 65;
  const isHighLatency = metrics.latency > 40;

  return (
    <section id="perf-dashboard" className="perf-section dark-section">
      <div className="container">
        <span className="section-tag" style={{ color: '#10b981' }}>Live Metrics</span>
        <h2 className="section-title light">Production Performance<br />Dashboard</h2>
        <p className="section-subtitle light">
          Real-time simulated metrics from Rahul's production systems — as if you were looking at the actual Grafana/Datadog dashboard.
        </p>

        {/* Status bar */}
        <div className="perf-status-bar">
          <div className="status-uptime">
            <span className="uptime-dot"></span>
            <span className="font-mono uptime-label">SYSTEM UPTIME</span>
            <span className="uptime-val font-mono">
              {pad(uptime.hours)}h {pad(uptime.mins)}m {pad(uptime.secs)}s
            </span>
          </div>
          <div className="status-env font-mono">
            <span className="env-badge">PROD</span>
            <span className="env-badge">EU-WEST-1</span>
            <span className="env-badge">PM2 CLUSTER</span>
          </div>
        </div>

        {/* Alerts */}
        {(isHighCPU || isHighLatency) && (
          <div className="perf-alert">
            <span>⚠️</span>
            <span className="font-mono">
              {isHighCPU && `HIGH CPU: ${Math.round(metrics.cpuUsage)}%`}
              {isHighCPU && isHighLatency && ' | '}
              {isHighLatency && `HIGH LATENCY: ${Math.round(metrics.latency)}ms`}
              {' — Auto-scaling triggered'}
            </span>
          </div>
        )}

        {/* Metrics grid */}
        <div className="metrics-grid">
          <MetricCard
            title="REQUESTS/SEC"
            icon="📡"
            value={Math.round(metrics.rps)}
            unit="/s"
            status="healthy"
            color="#68d391"
            data={history.rps}
            description="Nginx load balancer throughput across 3 Node.js instances"
          />
          <MetricCard
            title="API LATENCY"
            icon="⚡"
            value={Math.round(metrics.latency)}
            unit="ms"
            status={metrics.latency > 40 ? 'warn' : 'healthy'}
            color={metrics.latency > 40 ? '#f6ad55' : '#63b3ed'}
            data={history.latency}
            description="P95 response time including Redis cache lookup"
          />
          <MetricCard
            title="CACHE HIT RATE"
            icon="🔴"
            value={metrics.cacheHit}
            unit="%"
            status="healthy"
            color="#fc8181"
            data={history.cacheHit}
            description="Redis LRU cache — 4ms avg response on cache hit"
          />
          <MetricCard
            title="CPU USAGE"
            icon="💻"
            value={Math.round(metrics.cpuUsage)}
            unit="%"
            status={metrics.cpuUsage > 65 ? 'warn' : 'healthy'}
            color={metrics.cpuUsage > 65 ? '#f6ad55' : '#b794f4'}
            data={history.cpu}
            description="Average across all PM2 worker processes"
          />
          <MetricCard
            title="MEMORY"
            icon="🧠"
            value={Math.round(metrics.memUsage)}
            unit="%"
            status="healthy"
            color="#a0afee"
            data={history.mem}
            description="Node.js heap + Redis memory consumption"
          />
          <MetricCard
            title="ACTIVE CONNECTIONS"
            icon="🔌"
            value={Math.round(metrics.activeConnections)}
            unit=""
            status="healthy"
            color="#76e4f7"
            data={history.connections}
            description="Socket.IO + HTTP keep-alive concurrent sessions"
          />
        </div>

        {/* Kafka/Redis status pills */}
        <div className="service-status-row">
          {[
            { name: 'Kafka Cluster', status: 'operational', lag: `Lag: ${Math.round(metrics.kafkaLag)}`, color: '#b794f4' },
            { name: 'Redis Master', status: 'operational', lag: 'Repl: OK', color: '#fc8181' },
            { name: 'MySQL Primary', status: 'operational', lag: 'QPS: 1.2k', color: '#f6ad55' },
            { name: 'Read Replica', status: 'operational', lag: 'Lag: 0ms', color: '#68d391' },
            { name: 'Nginx Gateway', status: 'operational', lag: 'SSL: valid', color: '#63b3ed' },
            { name: 'PM2 Workers', status: 'operational', lag: '4/4 online', color: '#76e4f7' },
          ].map((svc, i) => (
            <div key={i} className="svc-pill" style={{ borderColor: svc.color + '40' }}>
              <span className="svc-dot" style={{ background: '#10b981', boxShadow: `0 0 6px #10b981` }}></span>
              <span className="svc-name font-mono">{svc.name}</span>
              <span className="svc-lag font-mono" style={{ color: svc.color }}>{svc.lag}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perf-section {
          background: #040609;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        /* Status bar */
        .perf-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(16,185,129,0.06);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 10px;
          padding: 12px 20px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .status-uptime {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .uptime-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse 2s infinite;
        }

        .uptime-label {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.15em;
        }

        .uptime-val {
          font-size: 16px;
          font-weight: 700;
          color: #10b981;
          letter-spacing: 0.1em;
        }

        .status-env {
          display: flex;
          gap: 6px;
        }

        .env-badge {
          font-size: 9px;
          padding: 3px 9px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 100px;
          color: rgba(245,243,239,0.4);
          letter-spacing: 0.1em;
        }

        /* Alert */
        .perf-alert {
          background: rgba(246,173,85,0.08);
          border: 1px solid rgba(246,173,85,0.25);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 11px;
          color: #f6ad55;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          animation: fadeIn 0.3s ease;
          letter-spacing: 0.05em;
        }

        /* Metrics grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }

        .metric-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 18px;
          transition: border-color 0.2s;
        }

        .metric-card:hover {
          border-color: var(--mc-color, rgba(245,243,239,0.12));
        }

        .mc-header {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
        }

        .mc-icon { font-size: 14px; }

        .mc-title {
          font-size: 9px;
          color: rgba(245,243,239,0.35);
          letter-spacing: 0.12em;
          flex: 1;
        }

        .mc-status {
          font-size: 8px;
          padding: 2px 7px;
          border-radius: 100px;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .status-healthy { background: rgba(16,185,129,0.12); color: #10b981; }
        .status-warn { background: rgba(246,173,85,0.12); color: #f6ad55; }
        .status-critical { background: rgba(239,68,68,0.12); color: #ef4444; }

        .mc-value-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }

        .mc-value {
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
        }

        .mc-unit {
          font-size: 12px;
          opacity: 0.6;
          margin-left: 2px;
        }

        .sparkline-svg { display: block; }

        .mc-desc {
          font-size: 10.5px;
          color: rgba(245,243,239,0.3);
          line-height: 1.4;
        }

        /* Service pills */
        .service-status-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .svc-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          background: rgba(245,243,239,0.02);
          border: 1px solid;
          border-radius: 100px;
        }

        .svc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        .svc-name {
          font-size: 10px;
          color: rgba(245,243,239,0.5);
          letter-spacing: 0.05em;
        }

        .svc-lag {
          font-size: 9px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .metrics-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
