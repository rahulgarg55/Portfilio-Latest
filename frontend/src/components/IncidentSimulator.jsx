import React, { useState } from 'react';
import { AlertCircle, ShieldAlert, CheckCircle, Database, HelpCircle, Activity, Terminal as ConsoleIcon } from 'lucide-react';
import Card3D from './Card3D';

export default function IncidentSimulator() {
  const [selectedScenario, setSelectedScenario] = useState('stampede');
  const [solutionStatus, setSolutionStatus] = useState(null); // 'correct', 'incorrect', 'critical'
  const [simMetrics, setSimMetrics] = useState({
    latency: '980 ms',
    dbLoad: '99%',
    errors: '18.4%',
    status: 'CRITICAL CRASH'
  });
  const [consoleLogs, setConsoleLogs] = useState([
    'Awaiting incident trigger selector...'
  ]);

  const scenarios = {
    stampede: {
      title: '🚨 Case #1: Cache Stampede (BastaxCasino Wallet)',
      desc: 'Visual cache key "active_session_auth" expired. 100,000 concurrent betting requests bypassed Redis, hammering the primary MongoDB collection directly. Database I/O is saturated at 100% and queries are queueing.',
      options: [
        {
          id: 'A',
          text: 'Scale MongoDB instance CPU/Memory size.',
          status: 'incorrect',
          log: '[DIAGNOSTIC] Scaled database size. Load remains high due to continuous un-cached lookups. Infrastructure cost tripled.',
          metrics: { latency: '450 ms', dbLoad: '88%', errors: '12.1%', status: 'UNSTABLE' }
        },
        {
          id: 'B',
          text: 'Implement Mutex locking (Single-flight) & pre-warm cache keys.',
          status: 'correct',
          log: '[FAILSAFE] Mutex locks active. Intercepted parallel seeks. Only 1 request hits DB while caching key. DB load drops to 4%. Cache restored.',
          metrics: { latency: '3 ms', dbLoad: '4%', errors: '0.01%', status: 'OPERATIONAL' }
        },
        {
          id: 'C',
          text: 'Temporarily disable Casino Wallet API endpoints.',
          status: 'critical',
          log: '[SHUTDOWN] Wallet API disabled. Database load dropped, but European players cannot deposit or payout. Financial compliance fines incoming.',
          metrics: { latency: '0 ms', dbLoad: '1%', errors: '100%', status: 'OFFLINE_SHUTDOWN' }
        }
      ]
    },
    slowQuery: {
      title: '🚨 Case #2: Relational Table Locks (Jupitice Court Scrapers)',
      desc: 'Real-time legal scrapers fetching Supreme Court filings are inserting 10k rows/sec. The SELECT lookup queries on the judicial table are taking 12 seconds per query, blocking all frontend user requests.',
      options: [
        {
          id: 'A',
          text: 'Convert judicial table schema to MongoDB.',
          status: 'incorrect',
          log: '[DIAGNOSTIC] DB migration initiated. Smashed ACID transaction guarantees. Legal tracking consistency lost.',
          metrics: { latency: '400 ms', dbLoad: '60%', errors: '25.0%', status: 'INCONSISTENT' }
        },
        {
          id: 'B',
          text: 'Add B-Tree Compound Indexes & route SELECT queries to a Read Replica.',
          status: 'correct',
          log: '[FAILSAFE] Indexes created. Read replica routing active. Write-locks no longer block reads. Query latency down from 12s to 6ms.',
          metrics: { latency: '6 ms', dbLoad: '12%', errors: '0.0%', status: 'OPERATIONAL' }
        },
        {
          id: 'C',
          text: 'Add a 5-second sleep timer to legal scrapers.',
          status: 'critical',
          log: '[SHUTDOWN] Scrapers throttled. CPU load dropped, but legal records data lags by 24+ hours. Court pipeline fails SLA constraints.',
          metrics: { latency: '150 ms', dbLoad: '15%', errors: '5.2%', status: 'DELAYED' }
        }
      ]
    },
    broker: {
      title: '🚨 Case #3: Broker Disconnection (Bet Ingestion Pipeline)',
      desc: 'The primary Apache Kafka cluster partition host went offline due to an AWS network partitions failure. Core transactions are queueing in backend memories, risking race conditions and cash balance anomalies.',
      options: [
        {
          id: 'A',
          text: 'Discard pending bet transaction events.',
          status: 'critical',
          log: '[DIAGNOSTIC] Events discarded. Prevented memory leaks, but players lost bet credits. Major audit infraction flagged.',
          metrics: { latency: '12 ms', dbLoad: '5%', errors: '45.0%', status: 'AUDIT_FAILURE' }
        },
        {
          id: 'B',
          text: 'Divert event queues into local Redis lists & auto-retry on broker reconnect.',
          status: 'correct',
          log: '[FAILSAFE] Redirection buffer active. Ingesting bets to Redis memory. Reconnect detected; flushing events into Kafka topic partitions. Zero data loss.',
          metrics: { latency: '8 ms', dbLoad: '18%', errors: '0.0%', status: 'OPERATIONAL' }
        },
        {
          id: 'C',
          text: 'Bypass queues and write directly to MySQL database.',
          status: 'incorrect',
          log: '[DIAGNOSTIC] Sync writes active. MySQL database saturated by raw connection pools. Database connection threshold exceeded.',
          metrics: { latency: '920 ms', dbLoad: '98%', errors: '34.2%', status: 'DB_OVERLOAD' }
        }
      ]
    }
  };

  const handleSelectScenario = (key) => {
    setSelectedScenario(key);
    setSolutionStatus(null);
    setSimMetrics({
      latency: key === 'stampede' ? '980 ms' : key === 'slowQuery' ? '12,000 ms' : 'N/A',
      dbLoad: '99%',
      errors: '28.4%',
      status: 'CRITICAL CRASH'
    });
    setConsoleLogs([
      `Incident triggered: ${scenarios[key].title}`,
      `Monitoring alerts firing. DB CPU load is high. Analyze architecture metrics...`
    ]);
  };

  const selectOption = (opt) => {
    setSolutionStatus(opt.status);
    setSimMetrics(opt.metrics);
    
    const timestamp = new Date().toTimeString().split(' ')[0];
    setConsoleLogs(prev => [
      `[${timestamp}] Selected Option: ${opt.id} - ${opt.text}`,
      `[${timestamp}] Response: ${opt.log}`,
      `[${timestamp}] System state status shifts to: ${opt.metrics.status}`,
      ...prev
    ]);

    // Dispatch Quest XP on correct answer
    if (opt.status === 'correct') {
      window.dispatchEvent(new CustomEvent('gain-xp', {
        detail: {
          amount: 30,
          action: 'Resolved system design production incident correctly!',
          incrementKey: 'matrixCommand'
        }
      }));
    }
  };

  return (
    <section id="incident-simulator" className="incident-simulator-section">
      <div className="container">
        <span className="section-tag">Production Simulator</span>
        <h2 className="section-title">Failsafe Incident Simulator</h2>
        <p className="section-subtitle">
          Debug real-world system crashes that Rahul has solved in production. Select an incident, evaluate metrics, and choose the correct architectural scaling strategy.
        </p>

        {/* Console layout */}
        <div className="incident-grid">
          
          {/* Left selectors and descriptions */}
          <div className="incident-details-pane">
            <div className="incident-tabs">
              <button 
                className={`inc-tab-btn ${selectedScenario === 'stampede' ? 'active' : ''}`}
                onClick={() => handleSelectScenario('stampede')}
              >
                Cache stampede
              </button>
              <button 
                className={`inc-tab-btn ${selectedScenario === 'slowQuery' ? 'active' : ''}`}
                onClick={() => handleSelectScenario('slowQuery')}
              >
                Table locks
              </button>
              <button 
                className={`inc-tab-btn ${selectedScenario === 'broker' ? 'active' : ''}`}
                onClick={() => handleSelectScenario('broker')}
              >
                Broker outage
              </button>
            </div>

            <div className="incident-scenario-card">
              <h4>{scenarios[selectedScenario].title}</h4>
              <p className="scenario-desc">{scenarios[selectedScenario].desc}</p>

              {/* Options selection */}
              <div className="scenario-options">
                <span className="options-title font-mono">⚡ Action Options:</span>
                <div className="options-list">
                  {scenarios[selectedScenario].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => selectOption(opt)}
                      className="option-action-btn font-mono"
                    >
                      <strong className="option-id">{opt.id}</strong>
                      <span className="option-text">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Results status banner */}
              {solutionStatus && (
                <div className={`solution-result-banner ${solutionStatus}`}>
                  {solutionStatus === 'correct' && (
                    <>
                      <CheckCircle size={18} />
                      <span>CORRECT FAILSAFE SOLVED! Rahul Garg has implemented this architectural optimization successfully (+30 XP).</span>
                    </>
                  )}
                  {solutionStatus === 'incorrect' && (
                    <>
                      <AlertCircle size={18} />
                      <span>INCORRECT SOLUTION. The system remains unstable or experiences severe bottlenecks. Try option B.</span>
                    </>
                  )}
                  {solutionStatus === 'critical' && (
                    <>
                      <ShieldAlert size={18} />
                      <span>CRITICAL MISCONFIGURATION! The database locks up completely or data integrity fails. Try option B.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right telemetry metrics and logging screens */}
          <div className="incident-telemetry-pane">
            
            {/* Datadog live stats */}
            <Card3D className="card telemetry-stats-card" maxTilt={6}>
              <h4 className="card-sub-title font-mono">
                <Activity size={14} className="icon animate-pulse" />
                <span>Datadog Real-time Incident telemetry</span>
              </h4>

              <div className="telemetry-values-grid">
                <div className="tel-item">
                  <span className="lbl font-mono">API LATENCY</span>
                  <span className={`val font-mono ${solutionStatus === 'correct' ? 'green' : 'red'}`}>{simMetrics.latency}</span>
                </div>
                <div className="tel-item">
                  <span className="lbl font-mono">DB CPU LOAD</span>
                  <span className={`val font-mono ${solutionStatus === 'correct' ? 'green' : 'red'}`}>{simMetrics.dbLoad}</span>
                </div>
                <div className="tel-item">
                  <span className="lbl font-mono">API ERROR RATE</span>
                  <span className={`val font-mono ${solutionStatus === 'correct' ? 'green' : 'red'}`}>{simMetrics.errors}</span>
                </div>
                <div className="tel-item">
                  <span className="lbl font-mono">CLUSTER STATUS</span>
                  <span className={`val font-mono ${solutionStatus === 'correct' ? 'green' : 'red'}`}>{simMetrics.status}</span>
                </div>
              </div>
            </Card3D>

            {/* In-app console stream logs */}
            <div className="incident-console font-mono">
              <div className="console-header">
                <ConsoleIcon size={12} />
                <span>Incident Diagnostics Log</span>
              </div>
              <div className="console-lines">
                {consoleLogs.map((log, i) => (
                  <div key={i} className="console-line">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        .incident-simulator-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .incident-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }

        .incident-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .inc-tab-btn {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .inc-tab-btn:hover {
          color: var(--accent-purple);
          border-color: rgba(94, 90, 209, 0.3);
        }

        .inc-tab-btn.active {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
          color: #ffffff;
          font-weight: 600;
        }

        .incident-scenario-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(17, 28, 45, 0.02);
        }

        .incident-scenario-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .scenario-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 24px;
        }

        .scenario-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .options-title {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-purple);
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option-action-btn {
          text-align: left;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: var(--transition-fast);
        }

        .option-action-btn:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .option-id {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--bg-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
        }

        .option-text {
          font-size: 12px;
          color: var(--text-dark);
        }

        .solution-result-banner {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.5;
          margin-top: 20px;
        }

        .solution-result-banner.correct {
          background-color: rgba(16, 185, 129, 0.06);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .solution-result-banner.incorrect {
          background-color: rgba(245, 158, 11, 0.06);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .solution-result-banner.critical {
          background-color: rgba(239, 68, 68, 0.06);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        /* Telemetry right column */
        .incident-telemetry-pane {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .telemetry-stats-card {
          background-color: #ffffff;
          padding: 24px;
        }

        .telemetry-values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 16px;
        }

        .tel-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tel-item .lbl {
          font-size: 9px;
          color: var(--text-muted-dark);
          text-transform: uppercase;
        }

        .tel-item .val {
          font-size: 18px;
          font-weight: 700;
        }

        .tel-item .val.red { color: #ef4444; }
        .tel-item .val.green { color: #10b981; }

        .incident-console {
          background-color: #05080e;
          border-radius: 12px;
          padding: 16px;
          height: 200px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .console-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #10b981;
          border-bottom: 1px solid rgba(16, 185, 129, 0.2);
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .console-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow-y: auto;
          flex-grow: 1;
        }

        .console-line {
          font-size: 11px;
          color: #10b981;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .incident-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
