import React, { useState, useEffect, useRef } from 'react';

const CODE_SNIPPETS = [
  {
    title: 'WhatsApp Webhook Integration',
    lang: 'javascript',
    color: '#68d391',
    code: `// Meta WhatsApp Business API Webhook
router.post('/webhook/whatsapp', validateMetaSignature, async (req, res) => {
  const { entry } = req.body;
  const message = entry[0].changes[0].value.messages?.[0];
  
  if (message?.type === 'text') {
    // Publish to Kafka topic for async processing
    await kafkaProducer.send({
      topic: 'whatsapp-inbound',
      messages: [{ key: message.from, value: JSON.stringify(message) }]
    });
    
    // Auto-reply via Redis cache lookup
    const template = await redis.get(\`reply_template:\${message.text.body.toLowerCase()}\`);
    if (template) await sendWhatsAppMessage(message.from, template);
  }
  
  res.status(200).json({ status: 'EVENT_RECEIVED' });
});`
  },
  {
    title: 'Redis Cache Interceptor Pattern',
    lang: 'javascript',
    color: '#fc8181',
    code: `// Production Redis cache-aside pattern
const cacheMiddleware = (ttl = 3600) => async (req, res, next) => {
  const cacheKey = \`api_cache:\${req.originalUrl}\`;
  
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return res.json({ 
        ...JSON.parse(cached), 
        _cache: { hit: true, ttl: await redis.ttl(cacheKey) } 
      });
    }
  } catch (e) { /* Cache miss - proceed to DB */ }
  
  // Intercept response to cache it
  const originalJson = res.json.bind(res);
  res.json = (data) => {
    redis.setex(cacheKey, ttl, JSON.stringify(data));
    return originalJson(data);
  };
  next();
};

// Latency: 150ms → 4ms 🚀`
  },
  {
    title: 'Kafka Bet Transaction Producer',
    lang: 'javascript',
    color: '#b794f4',
    code: `// Apache Kafka - High-volume bet ingestion
const { Kafka, Partitioners } = require('kafkajs');
const kafka = new Kafka({ brokers: ['kafka:9092'] });

const producer = kafka.producer({ 
  createPartitioner: Partitioners.RoundRobin,
  retry: { retries: 5, initialRetryTime: 300 }
});

const publishBetEvent = async (bet) => {
  await producer.send({
    topic: 'bet-transactions',
    messages: [{
      key: bet.userId,           // Partition by user
      value: JSON.stringify(bet),
      headers: { source: 'casino-api', priority: bet.amount > 1000 ? 'high' : 'low' }
    }]
  });
  
  // Telemetry: 50k+ events/day processed ⚡
};`
  },
  {
    title: 'Court Case ETL Scraper Pipeline',
    lang: 'javascript',
    color: '#f6ad55',
    code: `// Supreme Court data pipeline - ETL with rate limiting
const scrapeCourtCases = async (date) => {
  const cases = [];
  const RATE_LIMIT_MS = 800; // Respect target server limits
  
  for await (const caseId of getCaseIdIterator(date)) {
    // Redis deduplication check
    const isDuplicate = await redis.sismember('scraped_cases', caseId);
    if (isDuplicate) continue;
    
    const caseData = await fetchWithRetry(\`/cases/\${caseId}\`, {
      timeout: 5000, retries: 3
    });
    
    // Batch upsert to MySQL - optimized for 10k+ daily records
    cases.push(transformCaseData(caseData));
    
    if (cases.length >= 100) {
      await db.batchUpsert('judicial_cases', cases, ['case_id']);
      await redis.sadd('scraped_cases', ...cases.map(c => c.case_id));
      cases.length = 0;
    }
    
    await sleep(RATE_LIMIT_MS); // Rate limiting
  }
};`
  }
];

export default function LiveCodeShowcase() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingRef = useRef(null);
  const charIndexRef = useRef(0);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    setDisplayedCode('');
    setIsTyping(true);
    charIndexRef.current = 0;

    const snippet = CODE_SNIPPETS[activeSnippet];
    const targetCode = snippet.code;

    const type = () => {
      if (charIndexRef.current < targetCode.length) {
        setDisplayedCode(targetCode.slice(0, charIndexRef.current + 1));
        charIndexRef.current++;
        const delay = targetCode[charIndexRef.current - 1] === '\n' ? 30 : 
                      Math.random() < 0.05 ? 80 : 12;
        typingRef.current = setTimeout(type, delay);
      } else {
        setIsTyping(false);
      }
    };

    typingRef.current = setTimeout(type, 400);
    return () => clearTimeout(typingRef.current);
  }, [activeSnippet]);

  const snippet = CODE_SNIPPETS[activeSnippet];

  // Simple syntax highlighting
  const highlight = (code) => {
    return code
      .replace(/(\/\/.*)/g, '<span class="c-comment">$1</span>')
      .replace(/\b(const|let|var|async|await|return|if|for|of|await|import|require|try|catch)\b/g, '<span class="c-kw">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="c-bool">$1</span>')
      .replace(/('.*?'|`[\s\S]*?`|".*?")/g, '<span class="c-str">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="c-num">$1</span>');
  };

  return (
    <section id="live-code" className="code-showcase-section dark-section">
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Real Code I've Written</span>
        <h2 className="section-title light">Live Code Showcase</h2>
        <p className="section-subtitle light">
          Actual production code patterns from my 3+ years building enterprise systems. Watch it type in real time.
        </p>

        <div className="code-showcase-grid">
          {/* Snippet selector tabs */}
          <div className="snippet-selector">
            {CODE_SNIPPETS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSnippet(i)}
                className={`snippet-tab ${activeSnippet === i ? 'active' : ''}`}
                style={activeSnippet === i ? { borderColor: s.color, color: s.color } : {}}
              >
                <span className="tab-dot" style={{ background: s.color }}></span>
                {s.title}
              </button>
            ))}

            <div className="code-stats-mini">
              <div className="stat-row-mini">
                <span>3+ years</span>
                <span className="stat-val-mini">Enterprise</span>
              </div>
              <div className="stat-row-mini">
                <span>100+ APIs</span>
                <span className="stat-val-mini">Built</span>
              </div>
              <div className="stat-row-mini">
                <span>50k+ events</span>
                <span className="stat-val-mini">Daily</span>
              </div>
            </div>
          </div>

          {/* Code display terminal */}
          <div className="code-terminal-box">
            <div className="code-term-bar">
              <div className="code-term-dots">
                <span className="dot-r"></span>
                <span className="dot-y"></span>
                <span className="dot-g"></span>
              </div>
              <span className="code-term-title font-mono">{snippet.title}.js</span>
              <span className="lang-badge font-mono" style={{ color: snippet.color }}>
                ● LIVE
              </span>
            </div>

            <div className="code-area font-mono">
              <div className="line-numbers">
                {displayedCode.split('\n').map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre
                className="code-content"
                dangerouslySetInnerHTML={{
                  __html: highlight(displayedCode) + (isTyping || cursorVisible ? '<span class="c-cursor">|</span>' : '')
                }}
              />
            </div>

            {!isTyping && (
              <div className="code-footer-bar">
                <span className="c-success font-mono">✓ Snippet rendered — {snippet.code.split('\n').length} lines</span>
                <button
                  className="replay-btn font-mono"
                  onClick={() => setActiveSnippet(prev => prev)} // Trigger re-render
                  onMouseDown={() => {
                    setDisplayedCode('');
                    charIndexRef.current = 0;
                    setIsTyping(true);
                    setActiveSnippet(a => a); // same tab, triggers useEffect re-run via key trick
                  }}
                >
                  ↺ Replay
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .code-showcase-section {
          background: linear-gradient(180deg, var(--bg-darker) 0%, #050810 100%);
          border-bottom: 1px solid rgba(245,243,239,0.08);
        }

        .code-showcase-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          align-items: start;
        }

        .snippet-selector {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .snippet-tab {
          text-align: left;
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 8px;
          padding: 12px 16px;
          color: rgba(245,243,239,0.5);
          font-size: 12px;
          font-family: var(--font-sans);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .snippet-tab:hover {
          background: rgba(245,243,239,0.06);
          color: rgba(245,243,239,0.9);
        }

        .snippet-tab.active {
          background: rgba(94,90,209,0.1);
          color: var(--accent-lavender);
          font-weight: 600;
        }

        .tab-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .code-stats-mini {
          margin-top: 20px;
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.2);
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stat-row-mini {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(245,243,239,0.5);
          font-family: var(--font-mono);
        }

        .stat-val-mini {
          color: var(--accent-lavender);
          font-weight: 600;
        }

        /* Terminal */
        .code-terminal-box {
          background: #050810;
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.05);
        }

        .code-term-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: #0d1222;
          border-bottom: 1px solid rgba(16,185,129,0.1);
        }

        .code-term-dots { display: flex; gap: 6px; }
        .dot-r { width: 10px; height: 10px; border-radius: 50%; background: #ef4444; }
        .dot-y { width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; }
        .dot-g { width: 10px; height: 10px; border-radius: 50%; background: #10b981; }

        .code-term-title {
          flex: 1;
          font-size: 12px;
          color: rgba(245,243,239,0.5);
        }

        .lang-badge {
          font-size: 11px;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        .code-area {
          display: flex;
          padding: 20px;
          min-height: 280px;
          max-height: 380px;
          overflow: auto;
          gap: 16px;
        }

        .line-numbers {
          display: flex;
          flex-direction: column;
          color: rgba(245,243,239,0.2);
          font-size: 12px;
          line-height: 1.65;
          min-width: 24px;
          text-align: right;
          user-select: none;
        }

        .code-content {
          font-size: 12.5px;
          line-height: 1.65;
          color: #e2e8f0;
          white-space: pre-wrap;
          flex: 1;
        }

        /* Syntax colors */
        .c-comment { color: #4a5568; font-style: italic; }
        .c-kw { color: #b794f4; }
        .c-str { color: #68d391; }
        .c-num { color: #f6ad55; }
        .c-bool { color: #fc8181; }
        .c-cursor { color: #10b981; animation: blink 0.8s infinite; }
        .c-success { color: #10b981; }

        .code-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background: rgba(16,185,129,0.05);
          border-top: 1px solid rgba(16,185,129,0.1);
        }

        .replay-btn {
          font-size: 11px;
          background: none;
          border: 1px solid rgba(16,185,129,0.3);
          color: #10b981;
          border-radius: 4px;
          padding: 4px 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .replay-btn:hover { background: rgba(16,185,129,0.1); }

        @media (max-width: 900px) {
          .code-showcase-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
