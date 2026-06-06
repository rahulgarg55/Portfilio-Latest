import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const COMPARISONS = [
  {
    id: 1,
    context: 'Caching Layer for High-Traffic APIs',
    winner: 'redis',
    choices: [
      {
        id: 'redis',
        name: 'Redis',
        icon: '🔴',
        color: '#fc8181',
        pros: ['Sub-millisecond latency', 'In-memory, zero disk I/O', 'TTL expiry built-in', 'Pub/Sub messaging'],
        cons: ['Data loss on crash (without AOF)', 'RAM-limited capacity'],
        myUsage: 'Used in BastaxCasino — reduced API latency from 150ms → 4ms with LRU eviction policy'
      },
      {
        id: 'db',
        name: 'Direct DB Query',
        icon: '🗄️',
        color: '#94a3b8',
        pros: ['Always fresh data', 'No extra infrastructure'],
        cons: ['10-100x slower', 'Causes DB overload at scale', 'No pub/sub'],
        myUsage: null
      }
    ]
  },
  {
    id: 2,
    context: 'Async Event Processing at Scale',
    winner: 'kafka',
    choices: [
      {
        id: 'kafka',
        name: 'Apache Kafka',
        icon: '📨',
        color: '#b794f4',
        pros: ['Handles 1M+ messages/sec', 'Durable message log', 'Consumer group partitioning', 'Replay events'],
        cons: ['Complex cluster setup', 'Higher operational overhead'],
        myUsage: 'Used in casino — 50,000+ bet transactions/day, partitioned by userId for ordering'
      },
      {
        id: 'sync',
        name: 'Synchronous REST',
        icon: '🔗',
        color: '#94a3b8',
        pros: ['Simple to implement', 'Immediate response'],
        cons: ['Blocks thread pool', 'No retry/dead letter queue', 'Tight coupling'],
        myUsage: null
      }
    ]
  },
  {
    id: 3,
    context: 'Real-time Client Notifications',
    winner: 'socket',
    choices: [
      {
        id: 'socket',
        name: 'WebSockets / Socket.IO',
        icon: '⚡',
        color: '#68d391',
        pros: ['Persistent duplex connection', 'Real-time push (no polling)', 'Room-based broadcasting'],
        cons: ['Load balancer needs sticky sessions', 'Redis adapter needed for cluster'],
        myUsage: 'Used in casino dashboards — live bet updates, balance changes, and notifications'
      },
      {
        id: 'polling',
        name: 'Long Polling',
        icon: '🔄',
        color: '#94a3b8',
        pros: ['Simpler to implement', 'Works with standard HTTP'],
        cons: ['High server load', '1-3 second delays', 'Wastes bandwidth'],
        myUsage: null
      }
    ]
  },
  {
    id: 4,
    context: 'Data Storage for Judicial Records',
    winner: 'mysql',
    choices: [
      {
        id: 'mysql',
        name: 'MySQL (Relational)',
        icon: '📊',
        color: '#f6ad55',
        pros: ['ACID compliance', 'Complex JOIN queries', 'Strong schema enforcement', 'Full-text search'],
        cons: ['Schema migrations require planning', 'Vertical scaling cost'],
        myUsage: 'Used at Jupitice — multi-level court hierarchy schemas, case tracking, judge assignments'
      },
      {
        id: 'mongo',
        name: 'MongoDB (NoSQL)',
        icon: '🍃',
        color: '#94a3b8',
        pros: ['Flexible schema', 'Horizontal scaling'],
        cons: ['Weak ACID guarantees', 'Complex multi-collection joins', 'Poor for legal integrity'],
        myUsage: null
      }
    ]
  }
];

export default function TechStackComparison() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({});

  const comp = COMPARISONS[activeComparison];

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoices(prev => ({ ...prev, [comp.id]: choiceId }));
  };

  const userChoice = selectedChoices[comp.id];
  const isCorrect = userChoice === comp.winner;
  const isWrong = userChoice && userChoice !== comp.winner;

  return (
    <section id="tech-comparison" className="comparison-section">
      <div className="container">
        <span className="section-tag">Architectural Decisions</span>
        <h2 className="section-title">Tech Stack Decision Simulator</h2>
        <p className="section-subtitle">
          Real engineering tradeoffs I've faced in production. Pick the right tech for each scenario — see why I chose what I did.
        </p>

        {/* Scenario selector */}
        <div className="scenario-tabs">
          {COMPARISONS.map((c, i) => (
            <button
              key={c.id}
              className={`scenario-tab ${activeComparison === i ? 'active' : ''}`}
              onClick={() => setActiveComparison(i)}
            >
              <span className="tab-num font-mono">{String(i + 1).padStart(2, '0')}</span>
              {c.context}
            </button>
          ))}
        </div>

        {/* Main comparison area */}
        <div className="comparison-arena">
          <div className="scenario-header">
            <span className="scenario-badge font-mono">SCENARIO</span>
            <h3 className="scenario-title">{comp.context}</h3>
            <p className="scenario-prompt">Which technology would you choose for this scenario?</p>
          </div>

          <div className="choices-grid">
            {comp.choices.map((choice) => {
              const isWinner = choice.id === comp.winner;
              const isSelected = userChoice === choice.id;
              const showResult = !!userChoice;

              return (
                <div
                  key={choice.id}
                  className={`choice-card tilt-card ${isSelected ? 'selected' : ''} ${showResult && isWinner ? 'winner-card' : ''} ${showResult && !isWinner ? 'loser-card' : ''}`}
                  style={{ '--choice-color': choice.color, '--choice-glow': choice.color + '30' }}
                  onClick={() => !userChoice && handleChoiceSelect(choice.id)}
                >
                  {showResult && (
                    <div className={`result-badge ${isWinner ? 'badge-win' : 'badge-lose'}`}>
                      {isWinner ? <CheckCircle size={14} /> : <XCircle size={14} />}
                      {isWinner ? 'Better Choice' : 'Suboptimal'}
                    </div>
                  )}

                  <div className="choice-header">
                    <span className="choice-icon">{choice.icon}</span>
                    <h4 className="choice-name" style={{ color: choice.color }}>{choice.name}</h4>
                  </div>

                  <div className="choice-pros-cons">
                    <div className="pros-list">
                      {choice.pros.map((p, i) => (
                        <div key={i} className="pro-item">
                          <span className="pro-dot" style={{ background: choice.color }}></span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                    <div className="cons-list">
                      {choice.cons.map((c, i) => (
                        <div key={i} className="con-item">
                          <span className="con-dot"></span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {showResult && choice.myUsage && (
                    <div className="my-usage" style={{ borderColor: choice.color + '40' }}>
                      <span className="font-mono usage-label" style={{ color: choice.color }}>MY REAL USAGE:</span>
                      <p>{choice.myUsage}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Result message */}
          {userChoice && (
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <span className="result-icon">🎯</span>
                  <div>
                    <strong>Correct! Great engineering judgment.</strong>
                    <p>This is exactly what I used in production. Senior engineers think in tradeoffs, not absolutes.</p>
                  </div>
                </>
              ) : (
                <>
                  <span className="result-icon">🤔</span>
                  <div>
                    <strong>Good try! Here's why the other choice wins here.</strong>
                    <p>Both have valid use cases — context determines the right answer. Keep exploring.</p>
                  </div>
                </>
              )}
              <button
                className="next-scenario-btn"
                onClick={() => setActiveComparison(i => (i + 1) % COMPARISONS.length)}
              >
                Next Scenario <ArrowRight size={14} />
              </button>
            </div>
          )}

          {!userChoice && (
            <p className="prompt-text font-mono">👆 Click a card to make your engineering decision</p>
          )}
        </div>
      </div>

      <style>{`
        .comparison-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .scenario-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .scenario-tab {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 10px 16px;
          font-size: 12px;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          gap: 8px;
          text-align: left;
        }

        .scenario-tab:hover {
          border-color: var(--accent-purple);
          color: var(--text-dark);
        }

        .scenario-tab.active {
          background: var(--bg-dark);
          border-color: var(--accent-purple);
          color: var(--text-light);
        }

        .tab-num {
          color: var(--accent-purple);
          font-size: 10px;
          font-weight: 700;
        }

        .comparison-arena {
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .scenario-header {
          margin-bottom: 28px;
        }

        .scenario-badge {
          font-size: 9px;
          color: var(--accent-purple);
          font-weight: 700;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 8px;
        }

        .scenario-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .scenario-prompt {
          font-size: 13px;
          color: var(--text-muted-dark);
        }

        .choices-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        .choice-card {
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 22px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .choice-card:hover {
          border-color: var(--choice-color);
          background: var(--choice-glow, var(--bg-secondary));
          transform: translateY(-4px);
          box-shadow: 0 8px 20px var(--choice-glow, rgba(0,0,0,0.08));
        }

        .choice-card.winner-card {
          border-color: #10b981;
          background: rgba(16,185,129,0.05);
          transform: scale(1.02);
          box-shadow: 0 12px 32px rgba(16,185,129,0.15);
        }

        .choice-card.loser-card {
          opacity: 0.6;
          border-color: var(--border-color);
        }

        .result-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          font-family: var(--font-mono);
        }

        .badge-win { background: rgba(16,185,129,0.15); color: #10b981; }
        .badge-lose { background: rgba(239,68,68,0.1); color: #ef4444; }

        .choice-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .choice-icon { font-size: 28px; }

        .choice-name {
          font-size: 18px;
          font-weight: 700;
        }

        .choice-pros-cons {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 12px;
        }

        .pro-item, .con-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .pro-dot {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .con-dot {
          width: 6px; height: 6px; border-radius: 2px;
          background: #94a3b8;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .my-usage {
          margin-top: 14px;
          border-top: 1px solid;
          padding-top: 12px;
          animation: fadeIn 0.4s ease;
        }

        .usage-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 4px;
        }

        .my-usage p {
          font-size: 11.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        /* Result message */
        .result-message {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 12px;
          margin-top: 8px;
          animation: fadeIn 0.4s ease;
        }

        .result-message.correct {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
        }

        .result-message.incorrect {
          background: rgba(249,115,22,0.06);
          border: 1px solid rgba(249,115,22,0.15);
        }

        .result-icon { font-size: 24px; }

        .result-message strong {
          font-size: 14px;
          color: var(--text-dark);
          display: block;
          margin-bottom: 4px;
        }

        .result-message p {
          font-size: 12px;
          color: var(--text-muted-dark);
        }

        .next-scenario-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-dark);
          color: var(--text-light);
          border: none;
          border-radius: 8px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
          white-space: nowrap;
          font-family: var(--font-sans);
          flex-shrink: 0;
        }

        .next-scenario-btn:hover {
          background: var(--accent-purple);
          transform: translateX(3px);
        }

        .prompt-text {
          text-align: center;
          font-size: 11px;
          color: var(--text-muted-dark);
          margin-top: 8px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .choices-grid { grid-template-columns: 1fr; }
          .result-message { flex-wrap: wrap; }
          .next-scenario-btn { margin-left: 0; }
        }
      `}</style>
    </section>
  );
}
