import React, { useState } from 'react';
import { Play, Star, Award, Code, BookOpen, Layers, Terminal as ConsoleIcon, Settings, Cpu } from 'lucide-react';
import Card3D from './Card3D';

export default function CareerSkillTree() {
  const [activeSeason, setActiveSeason] = useState(2); // Season 1, 2, 3
  const [selectedSkillNode, setSelectedSkillNode] = useState('gateway');

  // Episodes matching career milestones
  const episodes = {
    1: [
      { ep: 1, title: 'Episode 1: Data Warehousing schemas', duration: '8 months', desc: 'Implementing structured inventory stream records from the ground up using custom MySQL databases and tables.', tags: 'MySQL, React' },
      { ep: 2, title: 'Episode 2: Role-Based Access Controls', duration: '6 months', desc: 'Developing custom APIs validating admin, supplier, and customer ledger transactions cleanly.', tags: 'Express, RBAC' }
    ],
    2: [
      { ep: 1, title: 'Episode 1: BastaxCasino Inception', duration: '12 months', desc: 'Architecting MongoDB bet logs schema, processing 100+ game APIs with 99.9% uptime compliance.', tags: 'iGaming, MongoDB' },
      { ep: 2, title: 'Episode 2: Banking & Queue decouplers', duration: '9 months', desc: 'Scaling bet ingestion streams using Redis memory caches and Apache Kafka event brokers.', tags: 'Redis, Kafka' }
    ],
    3: [
      { ep: 1, title: 'Episode 1: Supreme Court pipelines', duration: '4 months', desc: 'Automating high-volume web scrapers parsing and validate legal court datasets with rate-limit buffers.', tags: 'ETL Scrapers, Node' },
      { ep: 2, title: 'Episode 2: WhatsApp Event webhooks', duration: 'Present', desc: 'Integrating WhatsApp Business Meta endpoints to trigger live automated customer alert notifications.', tags: 'Meta APIs, Webhooks' }
    ]
  };

  // Skill Tree nodes details
  const skillNodes = {
    gateway: {
      name: 'Node.js API Router Node',
      unlocked: true,
      desc: 'Handles endpoint routing layers, metadata validation filters, and acts as the gatekeeper proxy for services.',
      snippet: `// Express Route Router Webhook Ingestion
router.post('/api/v1/webhook/whatsapp', 
  validateMetaSignature, 
  async (req, res) => {
    const payload = req.body;
    await kafkaBroker.send('whatsapp-notifications', payload);
    res.status(202).json({ accepted: true });
  }
);`,
      complexity: 'Time: O(1) ingestion latency, Space: O(N) memory buffers.',
      scaling: 'Stateless design makes it trivial to scale horizontally behind Nginx load balancers.'
    },
    caching: {
      name: 'Redis Cache Interceptor',
      unlocked: true,
      desc: 'Intercepts heavy database read requests in key-value memory blocks, dropping lookup delays from 150ms to 4ms.',
      snippet: `// Redis key fetch interceptor pattern
const getCachedVal = async (key, dbFetchCb) => {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const fresh = await dbFetchCb();
  await redis.setex(key, 3600, JSON.stringify(fresh));
  return fresh;
};`,
      complexity: 'Time: O(1) lookup seek, Space: O(M) memory storage.',
      scaling: 'Uses Redis key evictions (LRU policies) to guarantee cache sizes stay bounded.'
    },
    streaming: {
      name: 'Kafka Event decoupler',
      unlocked: true,
      desc: 'Decouples write-heavy transactions (e.g. bets) into partitions, ingestion logs asynchronously to preserve database I/O.',
      snippet: `// Kafka Producer Bet ingestion
const publishBet = async (betPayload) => {
  await producer.send({
    topic: 'bet-transactions',
    messages: [
      { key: betPayload.userId, value: JSON.stringify(betPayload) }
    ]
  });
};`,
      complexity: 'Time: O(1) buffer push, Space: O(K) topic disk sectors.',
      scaling: 'Partition-level scaling allows consumer nodes to process bet settlements in parallel.'
    }
  };

  const selectNode = (key) => {
    setSelectedSkillNode(key);
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 15,
        action: `Explored Skill Tree node: ${skillNodes[key].name}`
      }
    }));
  };

  return (
    <section id="career-skill-tree" className="skill-tree-section">
      <div className="container">
        <span className="section-tag">Career Episodes</span>
        <h2 className="section-title">Timeline episodes & Skill Tree</h2>
        <p className="section-subtitle">
          Toggle career Seasons to stream portfolio case study episodes, or click RPG Skill Tree nodes to inspect Rahul's production codes.
        </p>

        <div className="skill-tree-grid">
          
          {/* Netflix episode viewer */}
          <div className="netflix-episode-pane">
            <div className="season-selector no-print">
              <button className={`season-btn ${activeSeason === 1 ? 'active' : ''}`} onClick={() => setActiveSeason(1)}>Season 1: Zapbuild</button>
              <button className={`season-btn ${activeSeason === 2 ? 'active' : ''}`} onClick={() => setActiveSeason(2)}>Season 2: Basta Casino</button>
              <button className={`season-btn ${activeSeason === 3 ? 'active' : ''}`} onClick={() => setActiveSeason(3)}>Season 3: Jupitice</button>
            </div>

            <div className="episodes-list">
              <span className="seasons-label font-mono">🎥 STREAMS FOR SEASON {activeSeason}:</span>
              <div className="ep-cards-grid">
                {episodes[activeSeason].map((ep) => (
                  <Card3D key={ep.ep} className="card ep-card" maxTilt={6}>
                    <div className="ep-header">
                      <div className="play-badge">
                        <Play size={12} fill="#ffffff" />
                      </div>
                      <span className="ep-duration font-mono">{ep.duration}</span>
                    </div>
                    <h4>{ep.title}</h4>
                    <p>{ep.desc}</p>
                    <div className="ep-tags font-mono">{ep.tags}</div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>

          {/* RPG Skill Tree Inspector */}
          <div className="rpg-tree-pane font-mono">
            <h3 className="pane-title font-sans">🔮 RPG Career Skill Tree</h3>
            <p className="pane-desc font-sans">Click nodes to expand technical blueprints and clean code considerations:</p>
            
            <div className="skill-nodes-map">
              <div className={`tree-node ${selectedSkillNode === 'gateway' ? 'active' : ''}`} onClick={() => selectNode('gateway')}>
                <Layers size={14} />
                <span>[API Gateway Node]</span>
              </div>
              <div className="tree-connector-line"></div>
              
              <div className="tree-branches-row">
                <div className={`tree-node ${selectedSkillNode === 'caching' ? 'active' : ''}`} onClick={() => selectNode('caching')}>
                  <Settings size={14} />
                  <span>[Redis Cache Interceptor]</span>
                </div>
                <div className={`tree-node ${selectedSkillNode === 'streaming' ? 'active' : ''}`} onClick={() => selectNode('streaming')}>
                  <Cpu size={14} />
                  <span>[Kafka Event Broker]</span>
                </div>
              </div>
            </div>

            {/* Selected node preview */}
            <div className="node-preview-inspector">
              <div className="preview-header">
                <span>inspected_node // {skillNodes[selectedSkillNode].name}</span>
                <span className="badge">UNLOCKED</span>
              </div>
              <div className="preview-body">
                <p className="node-desc-text font-sans">{skillNodes[selectedSkillNode].desc}</p>
                
                <div className="code-box-editor">
                  <div className="code-header">
                    <ConsoleIcon size={12} />
                    <span>code_snippet // javascript</span>
                  </div>
                  <pre className="code-pre"><code>{skillNodes[selectedSkillNode].snippet}</code></pre>
                </div>

                <div className="node-metrics-info">
                  <div><span>Complexity:</span> {skillNodes[selectedSkillNode].complexity}</div>
                  <div><span>Scale Edge:</span> {skillNodes[selectedSkillNode].scaling}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .skill-tree-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .skill-tree-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
        }

        /* Netflix episodes style */
        .netflix-episode-pane {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .season-selector {
          display: flex;
          gap: 8px;
        }

        .season-btn {
          background-color: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .season-btn:hover {
          color: var(--text-dark);
          border-color: rgba(17, 28, 45, 0.24);
        }

        .season-btn.active {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
          color: var(--text-light);
          font-weight: 600;
        }

        .seasons-label {
          font-size: 9px;
          color: var(--text-muted-dark);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 12px;
        }

        .ep-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ep-card {
          background-color: var(--bg-darker);
          padding: 24px;
        }

        .ep-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .play-badge {
          width: 24px;
          height: 24px;
          background-color: var(--accent-purple);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .ep-duration {
          font-size: 10px;
          color: var(--text-muted-dark);
        }

        .ep-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }

        .ep-card p {
          font-size: 12.5px;
          color: var(--text-muted-dark);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .ep-tags {
          font-size: 9px;
          text-transform: uppercase;
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.06);
          padding: 2px 8px;
          border-radius: 4px;
          align-self: flex-start;
        }

        /* RPG tree pane */
        .rpg-tree-pane {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 24px;
          color: #a0afee;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .pane-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .pane-desc {
          font-size: 12px;
          color: var(--text-muted-light);
          line-height: 1.4;
          margin-bottom: 24px;
        }

        .skill-nodes-map {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .tree-node {
          background-color: var(--bg-dark);
          border: 1.5px solid rgba(245, 243, 239, 0.12);
          border-radius: 100px;
          padding: 8px 16px;
          color: var(--text-muted-light);
          font-size: 11px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-fast);
        }

        .tree-node:hover {
          border-color: var(--accent-purple);
          color: #ffffff;
        }

        .tree-node.active {
          border-color: #10b981;
          color: #10b981;
          background-color: rgba(16, 185, 129, 0.05);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.15);
        }

        .tree-connector-line {
          width: 2px;
          height: 16px;
          background-color: rgba(245, 243, 239, 0.15);
        }

        .tree-branches-row {
          display: flex;
          gap: 20px;
        }

        /* Node Preview Inspector */
        .node-preview-inspector {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.06);
          border-radius: 8px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          color: rgba(245, 243, 239, 0.45);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 6px;
          margin-bottom: 12px;
        }

        .preview-header .badge {
          color: #10b981;
          font-weight: 600;
        }

        .node-desc-text {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-light);
          margin-bottom: 16px;
        }

        .code-box-editor {
          background-color: #05080e;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 1px solid rgba(245, 243, 239, 0.04);
        }

        .code-header {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 8px 12px;
          font-size: 9px;
          color: rgba(245, 243, 239, 0.4);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .code-pre {
          padding: 12px;
          overflow-x: auto;
          font-size: 11px;
          line-height: 1.4;
          color: #38bdf8;
        }

        .node-metrics-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-top: 1px solid rgba(245, 243, 239, 0.06);
          padding-top: 12px;
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .node-metrics-info span {
          color: var(--accent-lavender);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .skill-tree-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
