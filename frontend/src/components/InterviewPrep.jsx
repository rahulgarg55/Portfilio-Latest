import React, { useState, useEffect, useRef } from 'react';

const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    category: 'System Design',
    question: 'Design a real-time bet processing system that handles 50k transactions/day.',
    icon: '🏗️',
    color: '#b794f4',
    answer: {
      headline: 'Event-Driven Architecture with Kafka + Redis',
      steps: [
        { label: 'API Layer', desc: 'Node.js REST endpoints with JWT auth and rate limiting. Input validation via Joi schema.' },
        { label: 'Kafka Producer', desc: 'Publish bet events to topic "bet-transactions" partitioned by userId for ordering. Retry with exponential backoff.' },
        { label: 'Redis Cache', desc: 'Cache user balance with TTL=30s. Optimistic locking for concurrent bets. Prevents double-spend.' },
        { label: 'Kafka Consumer', desc: 'Async consumer group processes bets, updates MySQL, sends notifications via Socket.IO.' },
        { label: 'MySQL', desc: 'ACID-compliant write for bet records. Compound index on (userId, createdAt) for fast queries.' },
        { label: 'Read Replica', desc: 'All GET requests route to replica. Reduces master load by 70%.' },
      ],
      techTags: ['Kafka', 'Redis', 'MySQL', 'Socket.IO', 'Node.js'],
      tradeoffs: 'Chose Kafka over RabbitMQ for message log durability and replay capability. Redis LRU over Memcached for Pub/Sub support.'
    }
  },
  {
    id: 2,
    category: 'Backend Engineering',
    question: 'How would you optimize a slow API endpoint (150ms avg) that queries the database?',
    icon: '⚡',
    color: '#68d391',
    answer: {
      headline: 'Cache-Aside + Query Optimization Strategy',
      steps: [
        { label: 'Profile First', desc: 'Add query-level timing logs. Use EXPLAIN ANALYZE in MySQL to inspect execution plan.' },
        { label: 'Index Analysis', desc: 'Add compound B-Tree index on WHERE clause columns. Covering index eliminates table scan.' },
        { label: 'Redis Cache', desc: 'Implement cache-aside pattern: check Redis → miss → DB query → populate cache with TTL.' },
        { label: 'Query Refactor', desc: 'Replace N+1 queries with JOIN or eager loading. Batch queries with DataLoader pattern.' },
        { label: 'Connection Pool', desc: 'Configure mysql2/promise pool (max: 10). Avoid new connection per request overhead.' },
        { label: 'Result', desc: '150ms → 4ms (Redis hit). 150ms → 18ms (DB with indexes). 96% latency reduction.' },
      ],
      techTags: ['Redis', 'MySQL EXPLAIN', 'B-Tree Index', 'Query Profiling'],
      tradeoffs: 'Cache invalidation is the hard part — used key-based TTL + event-driven cache bust on write operations.'
    }
  },
  {
    id: 3,
    category: 'DSA',
    question: 'Find the longest subarray with equal number of 0s and 1s.',
    icon: '🧮',
    color: '#63b3ed',
    answer: {
      headline: 'Prefix Sum + HashMap — O(n) Solution',
      steps: [
        { label: 'Key Insight', desc: 'Replace 0 with -1. Find longest subarray with sum = 0.' },
        { label: 'Prefix Sum', desc: 'Track running sum. If sum[j] - sum[i] = 0, subarray [i+1, j] is valid.' },
        { label: 'HashMap', desc: 'Store first occurrence of each prefix sum. Map: { sum → index }.' },
        { label: 'Algorithm', desc: 'For each element: if sum seen before, maxLen = max(maxLen, i - map[sum]). Else map[sum] = i.' },
        { label: 'Complexity', desc: 'O(n) time, O(n) space. Single pass. No sorting required.' },
        { label: 'Edge Cases', desc: 'Initialize map with {0: -1} to handle subarrays starting at index 0.' },
      ],
      techTags: ['HashMap', 'Prefix Sum', 'Sliding Window variant', 'LeetCode Medium'],
      tradeoffs: 'Brute force O(n²) — sorted out with prefix sum insight from LeetCode contest practice.'
    }
  },
  {
    id: 4,
    category: 'Architecture',
    question: 'Why did you choose NestJS over plain Express for the judicial data system?',
    icon: '⚖️',
    color: '#f6ad55',
    answer: {
      headline: 'Structured, Scalable Architecture with TypeScript',
      steps: [
        { label: 'Modules', desc: 'NestJS module system enforces feature-based separation. CaseModule, JudgeModule, AuditModule each isolated.' },
        { label: 'Decorators', desc: '@Injectable, @Controller, @UseGuards provide clean separation of concerns without boilerplate.' },
        { label: 'DI Container', desc: 'Built-in Dependency Injection. Services injected via constructor. Testable with mock providers.' },
        { label: 'TypeScript First', desc: 'Full type safety on DTOs, entities, and service contracts. Catches runtime bugs at compile time.' },
        { label: 'Guards & Pipes', desc: 'Role guards for judicial access control. Validation pipes on all incoming request DTOs.' },
        { label: 'Express Alternative', desc: 'Express is great for microservices but NestJS reduces code sprawl in large government systems.' },
      ],
      techTags: ['NestJS', 'TypeScript', 'DI Pattern', 'Decorators', 'Guards'],
      tradeoffs: 'Added ~20KB bundle overhead vs plain Express, but saved weeks of architecture boilerplate. Worth it for team scale.'
    }
  }
];

export default function InterviewPrep() {
  const [activeQ, setActiveQ] = useState(null);
  const [revealing, setRevealing] = useState({});
  const [stepIdx, setStepIdx] = useState({});
  const [animatedSteps, setAnimatedSteps] = useState({});

  const handleOpen = (id) => {
    if (activeQ === id) {
      setActiveQ(null);
      return;
    }
    setActiveQ(id);
    setRevealing(prev => ({ ...prev, [id]: true }));
    setStepIdx(prev => ({ ...prev, [id]: 0 }));
    setAnimatedSteps(prev => ({ ...prev, [id]: [] }));

    const q = INTERVIEW_QUESTIONS.find(q => q.id === id);
    if (!q) return;

    q.answer.steps.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedSteps(prev => ({ ...prev, [id]: [...(prev[id] || []), i] }));
      }, 300 + i * 250);
    });
  };

  return (
    <section id="interview-prep" className="interview-section dark-section">
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Interview Ready</span>
        <h2 className="section-title light">Live Interview Answer Board</h2>
        <p className="section-subtitle light">
          Real answers to real interview questions — system design, backend optimization, DSA, and architectural decisions. Click to reveal Rahul's structured responses.
        </p>

        <div className="interview-grid">
          {INTERVIEW_QUESTIONS.map(q => {
            const isOpen = activeQ === q.id;
            const steps = animatedSteps[q.id] || [];

            return (
              <div
                key={q.id}
                className={`interview-card ${isOpen ? 'open' : ''}`}
                style={{ '--q-color': q.color }}
              >
                <div className="q-header" onClick={() => handleOpen(q.id)}>
                  <div className="q-icon-wrap" style={{ background: q.color + '20' }}>
                    <span className="q-icon">{q.icon}</span>
                  </div>
                  <div className="q-meta">
                    <span className="q-category font-mono" style={{ color: q.color }}>{q.category}</span>
                    <p className="q-question">{q.question}</p>
                  </div>
                  <div className={`q-chevron ${isOpen ? 'open' : ''}`}>
                    <span>▼</span>
                  </div>
                </div>

                {isOpen && (
                  <div className="q-answer">
                    <div className="answer-headline" style={{ borderColor: q.color + '50' }}>
                      <span className="font-mono" style={{ color: q.color }}>// ANSWER:</span>
                      <strong>{q.answer.headline}</strong>
                    </div>

                    <div className="answer-steps">
                      {q.answer.steps.map((step, si) => (
                        <div
                          key={si}
                          className={`answer-step ${steps.includes(si) ? 'revealed' : ''}`}
                        >
                          <div className="step-num font-mono" style={{ color: q.color }}>{String(si + 1).padStart(2, '0')}</div>
                          <div className="step-content">
                            <strong className="step-label">{step.label}</strong>
                            <p className="step-desc">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="answer-tags">
                      {q.answer.techTags.map((tag, i) => (
                        <span key={i} className="answer-tag font-mono" style={{ color: q.color, borderColor: q.color + '40' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="tradeoff-box" style={{ borderColor: q.color + '30' }}>
                      <span className="font-mono tradeoff-label" style={{ color: q.color }}>💡 TRADEOFF INSIGHT:</span>
                      <p>{q.answer.tradeoffs}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .interview-section {
          background: #08090f;
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .interview-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .interview-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .interview-card.open {
          border-color: var(--q-color);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px var(--q-color, transparent);
        }

        .q-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .q-header:hover {
          background: rgba(245,243,239,0.04);
        }

        .q-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .q-icon { font-size: 22px; }

        .q-meta { flex: 1; }
        .q-category {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 6px;
        }

        .q-question {
          font-size: 14px;
          line-height: 1.5;
          color: var(--text-light);
          font-weight: 500;
        }

        .q-chevron {
          color: rgba(245,243,239,0.3);
          transition: transform 0.3s;
          flex-shrink: 0;
          font-size: 12px;
          padding-top: 4px;
        }

        .q-chevron.open {
          transform: rotate(180deg);
          color: var(--q-color);
        }

        /* Answer area */
        .q-answer {
          padding: 0 24px 24px;
          animation: fadeIn 0.3s ease;
        }

        .answer-headline {
          padding: 14px 16px;
          background: rgba(245,243,239,0.04);
          border-radius: 8px;
          border-left: 3px solid;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .answer-headline span { font-size: 10px; letter-spacing: 0.1em; }
        .answer-headline strong { font-size: 15px; color: var(--text-light); }

        .answer-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .answer-step {
          display: flex;
          gap: 14px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .answer-step.revealed {
          opacity: 1;
          transform: translateX(0);
        }

        .step-num {
          font-size: 12px;
          font-weight: 700;
          min-width: 24px;
          padding-top: 2px;
        }

        .step-content { flex: 1; }

        .step-label {
          font-size: 12px;
          color: var(--text-light);
          display: block;
          margin-bottom: 2px;
        }

        .step-desc {
          font-size: 11.5px;
          line-height: 1.5;
          color: rgba(245,243,239,0.55);
        }

        .answer-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 14px;
        }

        .answer-tag {
          font-size: 10px;
          padding: 4px 10px;
          border: 1px solid;
          border-radius: 100px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .tradeoff-box {
          background: rgba(245,243,239,0.03);
          border-left: 2px solid;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
        }

        .tradeoff-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 5px;
        }

        .tradeoff-box p {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(245,243,239,0.5);
        }
      `}</style>
    </section>
  );
}
