import React, { useState } from 'react';
import { Search, Server, Layers, Cpu, Database, Award, ArrowRight } from 'lucide-react';
import Card3D from './Card3D';

export default function BuildSimulator() {
  const [query, setQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);

  const presets = {
    ride: {
      title: '🏎️ Ride-Sharing Platform (Uber Clone)',
      match: '98% Match',
      desc: 'Highly scalable location polling engine mapping client coordinates to driver nodes under millisecond deadlines.',
      arch: {
        gateway: 'API Router (Node.js/Express) + Websocket pool',
        caching: 'Redis Geospatial Index (GEOADD tracking)',
        queue: 'Kafka driver status topics',
        database: 'MySQL partitioned coordinates tables',
        strength: 'Redis geospatial indices manage thousands of coordinate checks under 10ms.'
      }
    },
    food: {
      title: '🍔 Food Store & Delivery Platform (UberEats Clone)',
      match: '95% Match',
      desc: 'Role-based delivery dispatcher handling shopping carts, custom payment workflows, and live store telemetry.',
      arch: {
        gateway: 'React UI clients -> Nginx load balancing -> Node endpoints',
        caching: 'Redis cart session nodes',
        queue: 'Kafka checkout transaction queues',
        database: 'MongoDB orders collection + MySQL billing logs',
        strength: 'Decoupled checkout processing ensures no transaction loss during heavy order peaks.'
      }
    },
    chat: {
      title: '💬 Real-Time Chat & VoIP Platform (WhatsApp/Slack)',
      match: '96% Match',
      desc: 'Instant messaging app utilizing webhook event integrations, client statuses, and auto-archived logs.',
      arch: {
        gateway: 'Websocket client pool + Meta Business APIs integration',
        caching: 'Redis active user socket maps',
        queue: 'Kafka messaging streams (FIFO sorting)',
        database: 'MongoDB chats collection + MySQL user security indexing',
        strength: 'Metadata-driven API router allows customizable client webhooks for automated replies.'
      }
    },
    etl: {
      title: '📊 High-Volume Judicial/Government ETL Processing Pipeline',
      match: '100% Match',
      desc: 'Automated legal data scrapers retrieving, structuring, and loading large datasets with rate-limiters.',
      arch: {
        gateway: 'Scheduled CRON node runners + proxy networks',
        caching: 'Redis deduplication maps',
        queue: 'Kafka extraction ingestion pipelines',
        database: 'MySQL database indexes',
        strength: 'Automatic scraper caching prevents target site blocks while processing 100k+ records.'
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();
    
    // Find closest match
    if (q.includes('ride') || q.includes('uber') || q.includes('cab') || q.includes('driver')) {
      setSelectedResult(presets.ride);
    } else if (q.includes('food') || q.includes('delivery') || q.includes('restaurant') || q.includes('eat')) {
      setSelectedResult(presets.food);
    } else if (q.includes('chat') || q.includes('slack') || q.includes('whatsapp') || q.includes('message')) {
      setSelectedResult(presets.chat);
    } else if (q.includes('etl') || q.includes('pipeline') || q.includes('scrap') || q.includes('data') || q.includes('court') || q.includes('judicial')) {
      setSelectedResult(presets.etl);
    } else if (q.trim()) {
      // Default fallback showing high match using MERN architecture
      setSelectedResult({
        title: `🚀 Custom System: "${query}"`,
        match: '92% Tech Compatibility',
        desc: `Custom full-stack architecture design utilizing Node.js microservices and Redis caching.`,
        arch: {
          gateway: 'Node.js Gateway Router + Load Balancer',
          caching: 'Redis caching nodes (Query Interceptors)',
          queue: 'Kafka Event Broker (Asynchronous queues)',
          database: 'MySQL (Relational ACID checks) or MongoDB documents',
          strength: 'Highly decoupled design lets you scale UI routing and DB layers independently.'
        }
      });
    }

    // Award Quest XP for using Simulator search
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 15,
        action: `Queried simulator for "${query}"`
      }
    }));
  };

  const selectPreset = (key) => {
    setSelectedResult(presets[key]);
    setQuery(presets[key].title.substring(4)); // Strip emoji

    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 20,
        action: `Selected architecture preset: ${presets[key].title}`
      }
    }));
  };

  return (
    <section id="build-simulator" className="build-simulator-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Architectural Simulator</span>
        <h2 className="section-title light">Can Rahul Build This?</h2>
        <p className="section-subtitle light">
          Type any startup or backend application concept below. Our simulator matches it against Rahul's specific experience and auto-generates a scalable design topology.
        </p>

        {/* Simulator Core Box */}
        <div className="simulator-grid">
          
          {/* Input Panel */}
          <div className="simulator-search-card">
            <h3 className="card-sub-title">System Concept Input</h3>
            <p className="card-desc">Type your product idea (e.g. "Uber clone", "Food Delivery App") or select from presets below:</p>
            
            <form onSubmit={handleSearch} className="sim-search-bar">
              <input
                type="text"
                placeholder="Type 'Slack clone', 'Ride sharing'..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="sim-input"
              />
              <button type="submit" className="sim-search-btn">
                <Search size={16} />
              </button>
            </form>

            <div className="preset-suggestions">
              <span className="preset-label font-mono">🎯 Diagnostic Presets:</span>
              <div className="preset-buttons-grid">
                <button onClick={() => selectPreset('ride')} className="preset-btn-action">Uber Clone 🏎️</button>
                <button onClick={() => selectPreset('food')} className="preset-btn-action">E-Commerce Food Store 🍔</button>
                <button onClick={() => selectPreset('chat')} className="preset-btn-action">Real-Time Messaging 💬</button>
                <button onClick={() => selectPreset('etl')} className="preset-btn-action">Judicial ETL Scrapers 📊</button>
              </div>
            </div>
          </div>

          {/* Output Topology Render */}
          <div className="simulator-topology-card">
            {selectedResult ? (
              <div className="topology-results">
                <div className="topo-result-header">
                  <h4 className="topo-title">{selectedResult.title}</h4>
                  <span className="topo-match-badge font-mono">{selectedResult.match}</span>
                </div>
                <p className="topo-desc-text">{selectedResult.desc}</p>

                {/* 3D Visual Pipeline Block */}
                <div className="interactive-topo-diagram">
                  <div className="diag-node">
                    <Server size={18} className="node-icon router" />
                    <div className="node-meta">
                      <span className="node-title">API Router</span>
                      <span className="node-tech font-mono">{selectedResult.arch.gateway}</span>
                    </div>
                  </div>
                  <div className="connector-arrow"><ArrowRight size={14} /></div>

                  <div className="diag-node">
                    <Layers size={18} className="node-icon cache" />
                    <div className="node-meta">
                      <span className="node-title">Caching Layer</span>
                      <span className="node-tech font-mono">{selectedResult.arch.caching}</span>
                    </div>
                  </div>
                  <div className="connector-arrow"><ArrowRight size={14} /></div>

                  <div className="diag-node">
                    <Cpu size={18} className="node-icon broker" />
                    <div className="node-meta">
                      <span className="node-title">Queue Broker</span>
                      <span className="node-tech font-mono">{selectedResult.arch.queue}</span>
                    </div>
                  </div>
                  <div className="connector-arrow"><ArrowRight size={14} /></div>

                  <div className="diag-node">
                    <Database size={18} className="node-icon db" />
                    <div className="node-meta">
                      <span className="node-title">Primary Database</span>
                      <span className="node-tech font-mono">{selectedResult.arch.database}</span>
                    </div>
                  </div>
                </div>

                <div className="topo-strength-card">
                  <Award size={18} className="strength-icon" />
                  <div className="strength-content">
                    <span className="strength-title font-mono">SYSTEM SCALING EDGE:</span>
                    <p>{selectedResult.arch.strength}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="topology-placeholder font-mono">
                <Cpu size={36} className="placeholder-icon animate-pulse" />
                <p>AWAITING PRODUCT QUERY INPUT...</p>
                <span>Select a preset or search above to compile system architectures.</span>
              </div>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .build-simulator-section {
          background-color: var(--bg-darker);
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          position: relative;
          overflow: hidden;
        }

        .simulator-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          z-index: 5;
          position: relative;
        }

        .simulator-search-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-sub-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--text-light);
          margin-bottom: 10px;
        }

        .card-desc {
          font-size: 13px;
          color: var(--text-muted-light);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .sim-search-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .sim-input {
          flex-grow: 1;
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.12);
          border-radius: 6px;
          padding: 12px 16px;
          color: var(--text-light);
          font-family: var(--font-sans);
          font-size: 14px;
          outline: none;
          transition: var(--transition-fast);
        }

        .sim-input:focus {
          border-color: var(--accent-lavender);
        }

        .sim-search-btn {
          width: 44px;
          background-color: var(--accent-purple);
          border: none;
          color: var(--text-light);
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .sim-search-btn:hover {
          background-color: #4c48b8;
        }

        .preset-suggestions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .preset-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-lavender);
        }

        .preset-buttons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .preset-btn-action {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 8px 12px;
          color: var(--text-muted-light);
          font-size: 12px;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .preset-btn-action:hover {
          border-color: var(--accent-purple);
          color: var(--text-light);
          background-color: rgba(94, 90, 209, 0.06);
        }

        /* Topology card panel */
        .simulator-topology-card {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 350px;
        }

        .topology-placeholder {
          text-align: center;
          color: rgba(245, 243, 239, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .placeholder-icon {
          color: rgba(245, 243, 239, 0.15);
        }

        .topology-placeholder p {
          font-size: 13px;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .topology-placeholder span {
          font-size: 11px;
          max-width: 320px;
          line-height: 1.5;
        }

        .topology-results {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .topo-result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topo-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-light);
        }

        .topo-match-badge {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          font-size: 10px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .topo-desc-text {
          font-size: 13px;
          color: var(--text-muted-light);
          line-height: 1.5;
        }

        .interactive-topo-diagram {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: var(--bg-darker);
          border-radius: 8px;
          padding: 16px;
          border: 1px solid rgba(245, 243, 239, 0.04);
        }

        .diag-node {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 10px 14px;
        }

        .node-icon {
          flex-shrink: 0;
        }

        .node-icon.router { color: var(--accent-lavender); }
        .node-icon.cache { color: #10b981; }
        .node-icon.broker { color: #f59e0b; }
        .node-icon.db { color: #6366f1; }

        .node-meta {
          display: flex;
          flex-direction: column;
        }

        .node-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-light);
        }

        .node-tech {
          font-size: 10px;
          color: var(--text-muted-light);
        }

        .connector-arrow {
          display: flex;
          justify-content: center;
          color: rgba(245, 243, 239, 0.2);
          transform: rotate(90deg);
          margin: -4px 0;
        }

        .topo-strength-card {
          background-color: rgba(94, 90, 209, 0.08);
          border: 1px solid rgba(94, 90, 209, 0.2);
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .strength-icon {
          color: var(--accent-lavender);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .strength-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .strength-title {
          font-size: 9px;
          letter-spacing: 0.08em;
          color: var(--accent-lavender);
          font-weight: 600;
        }

        .strength-content p {
          font-size: 12px;
          color: var(--text-muted-light);
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .simulator-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
