import React, { useState } from 'react';
import { Server, Settings, Cpu, Database, Network, ShieldCheck, HelpCircle } from 'lucide-react';
import Card3D from './Card3D';

export default function BackendBuilderGame() {
  const [appType, setAppType] = useState('uber'); // 'uber' or 'whatsapp'
  const [loadBalancer, setLoadBalancer] = useState(false);
  const [redisCache, setRedisCache] = useState(false);
  const [kafkaBroker, setKafkaBroker] = useState(false);
  const [dbIndexing, setDbIndexing] = useState(false);
  
  const [testScale, setTestScale] = useState(10); // 10, 10000, 1000000
  const [isTesting, setIsTesting] = useState(false);
  const [testPercent, setTestPercent] = useState(0);
  const [testResult, setTestResult] = useState(null);

  const runStressTest = (e) => {
    e.preventDefault();
    if (isTesting) return;

    setIsTesting(true);
    setTestPercent(0);
    setTestResult(null);

    const interval = setInterval(() => {
      setTestPercent(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsTesting(false);
          evaluateArchitecture();
          return 100;
        }
        return p + 10;
      });
    }, 150);
  };

  const evaluateArchitecture = () => {
    let latency = 15;
    let dbLoad = 8;
    let grade = 'A';
    let summary = 'Optimal scalability!';
    let advice = 'The architecture has been designed cleanly. Replicas and queues distribute high loads.';

    // Base latency calculation
    if (testScale === 10) {
      latency = 12;
      dbLoad = 5;
      if (redisCache) latency = 2;
      grade = 'A+';
      summary = 'System Stable.';
      advice = 'At low scales, standard processes handle workloads with zero delays.';
    } else if (testScale === 10000) {
      latency = 180;
      dbLoad = 65;
      
      if (!loadBalancer) {
        latency = 420;
        dbLoad = 85;
        grade = 'C';
        summary = 'API Gateway Overloaded.';
        advice = 'Without a Load Balancer, all requests hit a single Node process, causing high CPU throttling.';
      } else {
        if (redisCache) latency = 12;
        if (dbIndexing) dbLoad = 20;
        grade = 'B+';
        summary = 'System Operational.';
        advice = 'Toggling Load Balancers and cache structures stabilizes 10k concurrent lookups.';
      }
    } else if (testScale === 1000000) {
      latency = 1200;
      dbLoad = 100;
      grade = 'F (Fatal Crash)';
      summary = 'Database Bottleneck!';
      advice = 'MySQL connection pool exhausted. Direct un-cached reads at 1M scale saturate I/O.';

      if (loadBalancer && redisCache && kafkaBroker && dbIndexing) {
        latency = 4;
        dbLoad = 12;
        grade = 'A++';
        summary = 'Enterprise Scaled!';
        advice = 'Excellent layout! Load balancers handle traffic routing, Redis intercepts reads, Kafka brokers decouple writes, and B-Tree indexes secure lookups.';
      } else if (!redisCache) {
        latency = 950;
        dbLoad = 99;
        grade = 'D';
        summary = 'Read congestion crash.';
        advice = 'Repetitive database queries crash MySQL. Redis caching is required to intercept 1M reads.';
      } else if (!kafkaBroker) {
        latency = 280;
        dbLoad = 75;
        grade = 'C-';
        summary = 'Write transaction block lockups.';
        advice = 'Bets and chats insert statements lock tables. Kafka queues are required to ingest write operations asynchronously.';
      } else if (!loadBalancer) {
        latency = 850;
        dbLoad = 45;
        grade = 'D+';
        summary = 'Single server CPU bottleneck.';
        advice = 'Even with database cache limits, a single gateway node cannot parse 1M socket packets without Nginx Load Balancers.';
      } else if (!dbIndexing) {
        latency = 140;
        dbLoad = 55;
        grade = 'B';
        summary = 'Table full-scan bottleneck.';
        advice = 'MySQL performs table full-scans on users tables. Creating B-Tree clustered indexes decreases IOPS load.';
      }
    }

    setTestResult({
      latency: `${latency} ms`,
      dbLoad: `${dbLoad}%`,
      grade,
      summary,
      advice
    });

    // Award XP
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 25,
        action: `Tested backend scale game at ${testScale.toLocaleString()} users scale`
      }
    }));
  };

  return (
    <section id="backend-game" className="backend-game-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Interactive Game</span>
        <h2 className="section-title light">Build-A-Backend Challenge</h2>
        <p className="section-subtitle light">
          Assemble system architecture layers (Load Balancers, Redis, Kafka, Indexes) for high-scale apps and run stress tests to see if your design survives 1 Million requests!
        </p>

        <div className="game-grid">
          
          {/* Settings Console Panel */}
          <div className="game-settings-card">
            <h3 className="card-sub-title">1. Configure App & Scale</h3>
            
            <div className="game-form-group">
              <label className="game-label font-mono">TARGET PRODUCT SPEC:</label>
              <select className="game-select" value={appType} onChange={(e) => setAppType(e.target.value)}>
                <option value="uber">Uber Geospatial Location Tracker</option>
                <option value="whatsapp">WhatsApp Real-Time Chat Engine</option>
              </select>
            </div>

            <div className="game-form-group" style={{ marginTop: '16px' }}>
              <label className="game-label font-mono">STRESS TEST TRAFFIC SCALE:</label>
              <div className="scale-selector-pills">
                <button 
                  type="button" 
                  className={`scale-pill ${testScale === 10 ? 'active' : ''}`}
                  onClick={() => setTestScale(10)}
                >
                  🟢 10 req/s (Low Scale)
                </button>
                <button 
                  type="button" 
                  className={`scale-pill ${testScale === 10000 ? 'active' : ''}`}
                  onClick={() => setTestScale(10000)}
                >
                  🟡 10,000 req/s (Mid Scale)
                </button>
                <button 
                  type="button" 
                  className={`scale-pill ${testScale === 1000000 ? 'active' : ''}`}
                  onClick={() => setTestScale(1000000)}
                >
                  🔴 1,000,000 req/s (FAANG Scale)
                </button>
              </div>
            </div>

            <h3 className="card-sub-title" style={{ marginTop: '30px', borderTop: '1px solid rgba(245,243,239,0.08)', paddingTop: '20px' }}>2. Toggle Services Grid</h3>
            <div className="services-grid-game">
              
              <div className={`service-game-card ${loadBalancer ? 'active' : ''}`} onClick={() => setLoadBalancer(!loadBalancer)}>
                <Server size={18} />
                <span>Nginx Load Balancer</span>
              </div>

              <div className={`service-game-card ${redisCache ? 'active' : ''}`} onClick={() => setRedisCache(!redisCache)}>
                <Settings size={18} />
                <span>Redis Key Cache</span>
              </div>

              <div className={`service-game-card ${kafkaBroker ? 'active' : ''}`} onClick={() => setKafkaBroker(!kafkaBroker)}>
                <Cpu size={18} />
                <span>Kafka Event Broker</span>
              </div>

              <div className={`service-game-card ${dbIndexing ? 'active' : ''}`} onClick={() => setDbIndexing(!dbIndexing)}>
                <Database size={18} />
                <span>MySQL DB Indexes</span>
              </div>

            </div>

            <button onClick={runStressTest} className="trigger-test-btn" disabled={isTesting}>
              {isTesting ? `Simulating Load: ${testPercent}%` : 'Deploy & Run Stress Test ⚡'}
            </button>
          </div>

          {/* Diagnostics Panel */}
          <div className="game-diagnostics-card">
            
            {/* Progress indicator */}
            {isTesting && (
              <div className="test-progress-bar">
                <span className="font-mono">stress_testing // firing_traffic_load</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${testPercent}%` }}></div>
                </div>
              </div>
            )}

            {/* Test Results Output */}
            {testResult ? (
              <div className="stress-test-results font-mono">
                <div className="results-header-flex">
                  <span className="results-label">STRESS TEST DIAGNOSTIC SUMMARY:</span>
                  <span className={`results-grade ${testResult.grade.includes('A') ? 'green' : 'red'}`}>Grade: {testResult.grade}</span>
                </div>

                <div className="results-metrics-grid">
                  <div className="met-item">
                    <span>RESPONSE LATENCY</span>
                    <strong className={testResult.latency.includes('4') || testResult.latency.includes('12') ? 'green' : 'red'}>{testResult.latency}</strong>
                  </div>
                  <div className="met-item">
                    <span>DATABASE CPU LOAD</span>
                    <strong className={testResult.dbLoad.includes('12') || testResult.dbLoad.includes('4%') ? 'green' : 'red'}>{testResult.dbLoad}</strong>
                  </div>
                </div>

                <div className="results-summary-card">
                  <div className="sum-title">Result: {testResult.summary}</div>
                  <p className="sum-advice">{testResult.advice}</p>
                </div>
              </div>
            ) : (
              <div className="stress-test-placeholder font-mono">
                <Network size={36} className="placeholder-icon animate-pulse" />
                <p>AWAITING STRESS TEST TRIGGER...</p>
                <span>Select app settings and run stress testing to verify throughput.</span>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .backend-game-section {
          background-color: var(--bg-darker);
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          position: relative;
          overflow: hidden;
        }

        .game-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 40px;
          position: relative;
          z-index: 5;
        }

        .game-settings-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .game-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .game-label {
          font-size: 9px;
          letter-spacing: 0.08em;
          color: var(--accent-lavender);
        }

        .game-select {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.12);
          border-radius: 6px;
          padding: 10px 14px;
          color: var(--text-light);
          font-size: 13px;
          outline: none;
        }

        .scale-selector-pills {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .scale-pill {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 10px 14px;
          color: var(--text-muted-light);
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .scale-pill:hover {
          color: var(--text-light);
          border-color: rgba(160, 175, 238, 0.3);
        }

        .scale-pill.active {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.1);
          color: var(--text-light);
          font-weight: 600;
        }

        .services-grid-game {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .service-game-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 8px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted-light);
          font-size: 12px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .service-game-card:hover {
          color: var(--text-light);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .service-game-card.active {
          background-color: rgba(16, 185, 129, 0.06);
          border-color: #10b981;
          color: #10b981;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.05);
        }

        .trigger-test-btn {
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

        .trigger-test-btn:hover:not(:disabled) {
          background-color: #4c48b8;
        }

        /* Diagnostics right panel */
        .game-diagnostics-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 350px;
        }

        .stress-test-placeholder {
          text-align: center;
          color: rgba(245, 243, 239, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .placeholder-icon {
          color: rgba(245, 243, 239, 0.15);
        }

        .stress-test-placeholder span {
          font-size: 11px;
          max-width: 320px;
          line-height: 1.5;
        }

        .test-progress-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
        }

        .test-progress-bar span {
          font-size: 9px;
          color: var(--accent-lavender);
        }

        .test-progress-bar .bar-track {
          height: 6px;
          background-color: rgba(245, 243, 239, 0.08);
          border-radius: 3px;
          overflow: hidden;
        }

        .test-progress-bar .bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender));
          border-radius: 3px;
          transition: width var(--transition-fast);
        }

        .stress-test-results {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .results-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 12px;
        }

        .results-label {
          font-size: 10px;
          color: var(--accent-lavender);
        }

        .results-grade {
          font-size: 14px;
          font-weight: 700;
        }

        .results-grade.green { color: #10b981; }
        .results-grade.red { color: #ef4444; }

        .results-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .met-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .met-item span {
          font-size: 9px;
          color: rgba(245, 243, 239, 0.4);
        }

        .met-item strong {
          font-size: 16px;
        }

        .met-item strong.green { color: #10b981; }
        .met-item strong.red { color: #ef4444; }

        .results-summary-card {
          background-color: rgba(94, 90, 209, 0.08);
          border: 1px solid rgba(94, 90, 209, 0.16);
          border-radius: 8px;
          padding: 16px;
        }

        .sum-title {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .sum-advice {
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-muted-light);
        }

        @media (max-width: 900px) {
          .game-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
