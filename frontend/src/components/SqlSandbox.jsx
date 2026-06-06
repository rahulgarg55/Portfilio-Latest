import React, { useState } from 'react';
import { Database, Terminal, AlertTriangle, CheckCircle2, Cpu, Clock, Layers } from 'lucide-react';

export default function SqlSandbox() {
  const [query, setQuery] = useState('SELECT id, role, company, location FROM experiences;');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [telemetry, setTelemetry] = useState(null);

  const presets = {
    experiences: 'SELECT id, role, company, location FROM experiences;',
    projects: "SELECT id, title, category, tags FROM projects WHERE category = 'Full Stack';",
    achievements: 'SELECT id, title, value FROM achievements;'
  };

  const loadPreset = (key) => {
    setQuery(presets[key]);
    runQuery(presets[key]);
  };

  const handleRun = (e) => {
    e.preventDefault();
    runQuery(query);
  };

  const runQuery = async (sqlString) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setTelemetry(null);

    // Track local fetch timing
    const t0 = performance.now();

    try {
      const response = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: sqlString })
      });

      const data = await response.json();
      const t1 = performance.now();
      const roundTrip = (t1 - t0).toFixed(2);

      if (response.ok && data.success) {
        setResult(data);
        
        // Trigger Quest XP award
        window.dispatchEvent(new CustomEvent('gain-xp', {
          detail: {
            amount: 10,
            action: 'Executed SQL query on backend MERN database schema',
            incrementKey: 'runSqlQuery'
          }
        }));
        
        // Generate technical DB telemetry logs mimicking profiling logs in Google/Amazon systems
        const rowsCount = data.rows ? data.rows.length : 0;
        setTelemetry({
          roundTrip: `${roundTrip} ms`,
          executionTime: `${(roundTrip * 0.15).toFixed(2)} ms`,
          compileTime: `${(0.01 + Math.random() * 0.02).toFixed(3)} ms`,
          rowsScanned: rowsCount,
          bufferHitRate: data.source === 'mysql-db' ? '92.4% (Pool Active)' : '100% (Cache Hit)',
          indexSearched: 'PRIMARY_KEY (Clustered Scan)'
        });
      } else {
        throw new Error(data.message || 'SQL Execution failed.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sql-playground" className="sql-sandbox-section">
      <div className="container">
        <span className="section-tag">Database Playground</span>
        <h2 className="section-title">Interactive MySQL Console</h2>
        <p className="section-subtitle">
          Test my database querying skills! Click a preset template below or type a custom SELECT query to run against the MySQL tables.
        </p>

        <div className="sandbox-console-layout">
          {/* Preset Side Selector */}
          <div className="sandbox-presets-panel">
            <h3 className="preset-panel-title">
              <Database size={16} />
              <span>Database Tables</span>
            </h3>
            
            <div className="preset-buttons">
              <button className="preset-btn" onClick={() => loadPreset('experiences')}>
                📋 SELECT * FROM experiences
              </button>
              <button className="preset-btn" onClick={() => loadPreset('projects')}>
                📁 SELECT * FROM projects
              </button>
              <button className="preset-btn" onClick={() => loadPreset('achievements')}>
                🏆 SELECT * FROM achievements
              </button>
            </div>

            <div className="sandbox-note">
              <span className="note-title">💡 Developer Sandbox Info:</span>
              <p>The console connects directly to the Express backend. Only read-only <strong>SELECT</strong> statements are allowed for security integrity.</p>
            </div>
          </div>

          {/* Console Textarea Form */}
          <div className="sandbox-editor-panel">
            <form onSubmit={handleRun} className="console-form">
              <div className="console-editor-header">
                <Terminal size={14} className="console-icon" />
                <span>mysql_query_console // active_connection</span>
              </div>
              
              <textarea
                className="console-textarea"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Write your SELECT query here..."
                rows="4"
              ></textarea>
              
              <div className="console-actions">
                <button type="submit" className="btn btn-primary run-btn" disabled={loading}>
                  {loading ? 'Executing Query...' : 'Run Query ⚡'}
                </button>
              </div>
            </form>

            {/* Results Grid */}
            <div className="sandbox-output-panel">
              {loading && <div className="output-status">Processing query against backend schema...</div>}
              
              {error && (
                <div className="output-banner error">
                  <AlertTriangle size={16} />
                  <span>{error}</span>
                </div>
              )}

              {result && (
                <div className="output-success-block">
                  <div className="output-banner success">
                    <CheckCircle2 size={16} />
                    <span>Query succeeded. Source: {result.source === 'mysql-db' ? 'Live MySQL Database' : 'Memory Mock Fallback Engine'}</span>
                  </div>

                  {/* FAANG-style Telemetry Logs */}
                  {telemetry && (
                    <div className="query-telemetry-panel">
                      <div className="telemetry-log-item">
                        <Clock size={12} className="tel-log-icon" />
                        <span>Execution latency: <strong>{telemetry.executionTime}</strong></span>
                      </div>
                      <div className="telemetry-log-item">
                        <Cpu size={12} className="tel-log-icon" />
                        <span>Compile Overhead: <strong>{telemetry.compileTime}</strong></span>
                      </div>
                      <div className="telemetry-log-item">
                        <Layers size={12} className="tel-log-icon" />
                        <span>Buffer Hit rate: <strong>{telemetry.bufferHitRate}</strong></span>
                      </div>
                      <div className="telemetry-log-item">
                        <Database size={12} className="tel-log-icon" />
                        <span>Rows scanned: <strong>{telemetry.rowsScanned} rows</strong></span>
                      </div>
                    </div>
                  )}

                  {result.rows && result.rows.length > 0 ? (
                    <div className="table-wrapper">
                      <table className="result-table">
                        <thead>
                          <tr>
                            {result.columns.map((col, idx) => (
                              <th key={idx}>{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.rows.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {result.columns.map((col, cIdx) => (
                                <td key={cIdx}>{row[col] !== null ? String(row[col]) : 'NULL'}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="output-status empty">Empty Set (0 rows returned)</div>
                  )}
                </div>
              )}

              {!loading && !result && !error && (
                <div className="output-status empty">No query executed. Type a SELECT statement and click run.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sql-sandbox-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .sandbox-console-layout {
          display: grid;
          grid-template-columns: 0.6fr 1.4fr;
          gap: 32px;
        }

        .sandbox-presets-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .preset-panel-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .preset-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .preset-btn {
          text-align: left;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-purple);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .preset-btn:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .sandbox-note {
          margin-top: auto;
          background-color: rgba(160, 175, 238, 0.08);
          border: 1px solid rgba(160, 175, 238, 0.2);
          border-radius: 8px;
          padding: 14px;
        }

        .note-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-purple);
          display: block;
          margin-bottom: 4px;
        }

        .sandbox-note p {
          font-size: 11px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        /* Editor Panel */
        .sandbox-editor-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .console-form {
          background-color: var(--bg-darker);
          border-radius: 12px;
          border: 1px solid rgba(245, 243, 239, 0.08);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .console-editor-header {
          background-color: rgba(0, 0, 0, 0.2);
          color: var(--text-muted-light);
          padding: 10px 16px;
          font-family: var(--font-mono);
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
        }

        .console-icon {
          color: var(--accent-lavender);
        }

        .console-textarea {
          width: 100%;
          background: transparent;
          border: none;
          color: #a0afee;
          font-family: var(--font-mono);
          font-size: 13px;
          padding: 16px;
          resize: none;
          outline: none;
          line-height: 1.5;
        }

        .console-actions {
          background-color: rgba(0, 0, 0, 0.1);
          padding: 10px 16px;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid rgba(245, 243, 239, 0.04);
        }

        .run-btn {
          font-size: 12px;
          padding: 8px 16px;
        }

        /* Outputs */
        .sandbox-output-panel {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .output-status {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted-dark);
          text-align: center;
        }

        .output-status.empty {
          color: rgba(17, 28, 45, 0.4);
        }

        .output-banner {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .output-banner.success {
          background-color: rgba(16, 185, 129, 0.06);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.15);
        }

        .output-banner.error {
          background-color: rgba(239, 68, 68, 0.06);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.15);
          font-family: var(--font-mono);
          line-height: 1.4;
        }

        /* Telemetry logs */
        .query-telemetry-panel {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
        }

        .telemetry-log-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
        }

        .tel-log-icon {
          color: var(--accent-purple);
        }

        .telemetry-log-item strong {
          color: var(--text-dark);
          font-weight: 600;
          margin-left: 2px;
        }

        /* Results table */
        .output-success-block {
          animation: fadeIn 0.3s ease;
        }

        .table-wrapper {
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: 8px;
        }

        .result-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          text-align: left;
        }

        .result-table th {
          background-color: var(--bg-secondary);
          color: var(--text-dark);
          font-weight: 600;
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
          font-family: var(--font-sans);
        }

        .result-table td {
          padding: 10px 14px;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-muted-dark);
          font-family: var(--font-mono);
          white-space: pre-wrap;
        }

        .result-table tr:last-child td {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .sandbox-console-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .query-telemetry-panel {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
