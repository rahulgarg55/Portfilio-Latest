import React, { useState } from 'react';
import { Database, Network, BookOpen, Layers, Terminal as ConsoleIcon, Send, Code } from 'lucide-react';
import Card3D from './Card3D';

export default function SystemBlueprints() {
  const [activeTab, setActiveTab] = useState('er');
  const [selectedTable, setSelectedTable] = useState('experiences');
  const [apiPath, setApiPath] = useState('GET /api/portfolio');
  const [apiPayload, setApiPayload] = useState('{}');
  const [apiResponse, setApiResponse] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [systemDesignName, setSystemDesignName] = useState('uber');

  // ER Schema definitions
  const schemas = {
    experiences: {
      name: 'experiences (Relational TIMELINE Table)',
      fields: [
        { name: 'id', type: 'INT', key: 'PRIMARY KEY', extra: 'AUTO_INCREMENT' },
        { name: 'role', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'company', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'duration', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'location', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'description', type: 'JSON', key: 'NOT NULL' },
        { name: 'sort_order', type: 'INT', key: 'DEFAULT 0' }
      ],
      index: 'PRIMARY KEY clustered on (id)'
    },
    projects: {
      name: 'projects (CASE STUDIES Table)',
      fields: [
        { name: 'id', type: 'INT', key: 'PRIMARY KEY', extra: 'AUTO_INCREMENT' },
        { name: 'title', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'description', type: 'TEXT', key: 'NOT NULL' },
        { name: 'tags', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'link', type: 'VARCHAR(255)', key: 'NULL' },
        { name: 'github', type: 'VARCHAR(255)', key: 'NULL' },
        { name: 'category', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'sort_order', type: 'INT', key: 'DEFAULT 0' }
      ],
      index: 'IDX_PROJECT_CAT on (category)'
    },
    achievements: {
      name: 'achievements (METRIC SUMMARY Table)',
      fields: [
        { name: 'id', type: 'INT', key: 'PRIMARY KEY', extra: 'AUTO_INCREMENT' },
        { name: 'title', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'value', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'details', type: 'TEXT', key: 'NOT NULL' },
        { name: 'sort_order', type: 'INT', key: 'DEFAULT 0' }
      ],
      index: 'PRIMARY KEY clustered on (id)'
    },
    messages: {
      name: 'messages (INBOX INTAKE Table)',
      fields: [
        { name: 'id', type: 'INT', key: 'PRIMARY KEY', extra: 'AUTO_INCREMENT' },
        { name: 'name', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'email', type: 'VARCHAR(255)', key: 'NOT NULL' },
        { name: 'phone', type: 'VARCHAR(50)', key: 'NULL' },
        { name: 'message', type: 'TEXT', key: 'NOT NULL' },
        { name: 'created_at', type: 'TIMESTAMP', key: 'DEFAULT CURRENT_TIMESTAMP' }
      ],
      index: 'IDX_MSG_DATE on (created_at DESC)'
    }
  };

  // Mock API execute handler
  const executeApi = async () => {
    setApiLoading(true);
    setApiResponse(null);
    
    // Simulate server roundtrip
    setTimeout(async () => {
      try {
        if (apiPath === 'GET /api/portfolio') {
          const API_BASE_URL = import.meta.env.VITE_API_URL || '';
          const res = await fetch(`${API_BASE_URL}/api/portfolio`);
          const data = await res.json();
          setApiResponse(JSON.stringify(data, null, 2));
        } else if (apiPath === 'POST /api/query') {
          let queryObj = { query: 'SELECT * FROM projects;' };
          try {
            queryObj = JSON.parse(apiPayload);
          } catch (e) {}
          const API_BASE_URL = import.meta.env.VITE_API_URL || '';
          const res = await fetch(`${API_BASE_URL}/api/query`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(queryObj)
          });
          const data = await res.json();
          setApiResponse(JSON.stringify(data, null, 2));
        } else if (apiPath === 'POST /api/contact') {
          let contactObj = { name: 'HR Recruiter', email: 'hr@google.com', message: 'Hello!' };
          try {
            contactObj = JSON.parse(apiPayload);
          } catch (e) {}
          const API_BASE_URL = import.meta.env.VITE_API_URL || '';
          const res = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactObj)
          });
          const data = await res.json();
          setApiResponse(JSON.stringify(data, null, 2));
        }
      } catch (err) {
        setApiResponse(JSON.stringify({ success: false, error: err.message }, null, 2));
      } finally {
        setApiLoading(false);
        // Award XP
        window.dispatchEvent(new CustomEvent('gain-xp', {
          detail: {
            amount: 25,
            action: `Tested backend endpoint execution in Swagger API Explorer: ${apiPath}`
          }
        }));
      }
    }, 1000);
  };

  const handleApiPathChange = (path) => {
    setApiPath(path);
    if (path === 'GET /api/portfolio') {
      setApiPayload('{}');
    } else if (path === 'POST /api/query') {
      setApiPayload('{\n  "query": "SELECT * FROM projects WHERE category = \'Full Stack\';"\n}');
    } else if (path === 'POST /api/contact') {
      setApiPayload('{\n  "name": "Alex HR Director",\n  "email": "alex.recruitment@tesla.com",\n  "phone": "+1 415-555-0199",\n  "message": "Let\'s schedule an interview!"\n}');
    }
  };

  return (
    <section id="blueprints" className="blueprints-section">
      <div className="container">
        <span className="section-tag">Backend Architecture Blueprints</span>
        <h2 className="section-title">System Blueprints & API Explorer</h2>
        <p className="section-subtitle">
          Inspect relational database entity schemas, execute REST endpoint calls inside our Swagger explorer, or study multi-node system designs.
        </p>

        {/* Tab switch buttons */}
        <div className="blueprints-tabs no-print">
          <button className={`blue-tab-btn ${activeTab === 'er' ? 'active' : ''}`} onClick={() => setActiveTab('er')}>
            <Database size={14} />
            <span>Database ER Diagrams</span>
          </button>
          <button className={`blue-tab-btn ${activeTab === 'api' ? 'active' : ''}`} onClick={() => setActiveTab('api')}>
            <Code size={14} />
            <span>Swagger API Explorer</span>
          </button>
          <button className={`blue-tab-btn ${activeTab === 'sys' ? 'active' : ''}`} onClick={() => setActiveTab('sys')}>
            <Network size={14} />
            <span>System Design Library</span>
          </button>
        </div>

        {/* Body content grid */}
        <div className="blueprints-body-card">
          
          {/* TAB 1: ER DIAGRAM */}
          {activeTab === 'er' && (
            <div className="er-diagram-pane">
              <div className="er-split-grid">
                
                {/* Left visual relational boxes */}
                <div className="er-nodes-visual">
                  <div className="er-info-header">Click database entity table nodes to map fields:</div>
                  <div className="table-nodes-list">
                    {Object.keys(schemas).map(tName => (
                      <div 
                        key={tName} 
                        className={`table-entity-card ${selectedTable === tName ? 'selected' : ''}`}
                        onClick={() => setSelectedTable(tName)}
                      >
                        <div className="entity-header">
                          <Database size={14} />
                          <strong>{tName.toUpperCase()}</strong>
                        </div>
                        <span className="entity-label font-mono">Index: PRIMARY_KEY (id)</span>
                      </div>
                    ))}
                  </div>

                  {/* SVG Relational lines connecting nodes */}
                  <div className="er-relational-map">
                    <svg viewBox="0 0 320 120" className="er-connector-svg">
                      {/* Connection lines experiences -> messages */}
                      <path d="M 40,30 C 120,30 120,90 200,90" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" strokeDasharray="3" />
                      {/* Connection lines projects -> achievements */}
                      <path d="M 40,90 C 120,90 120,30 200,30" fill="none" stroke="var(--accent-lavender)" strokeWidth="1.5" strokeDasharray="3" />
                      <circle cx="40" cy="30" r="3" fill="var(--accent-purple)" />
                      <circle cx="200" cy="90" r="3" fill="var(--accent-purple)" />
                    </svg>
                  </div>
                </div>

                {/* Right schema inspector */}
                <div className="er-schema-inspector font-mono">
                  <div className="inspector-header">
                    <span>table_schema // {selectedTable}</span>
                    <span className="index-indicator">{schemas[selectedTable].index}</span>
                  </div>
                  <div className="schema-table-wrapper">
                    <table className="schema-table">
                      <thead>
                        <tr>
                          <th>COLUMN_NAME</th>
                          <th>DATA_TYPE</th>
                          <th>CONSTRAINTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemas[selectedTable].fields.map((f, i) => (
                          <tr key={i}>
                            <td className="field-name"><strong>{f.name}</strong></td>
                            <td className="field-type">{f.type}</td>
                            <td className="field-key">{f.key} {f.extra && <span className="extra">{f.extra}</span>}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: SWAGGER EXPLORER */}
          {activeTab === 'api' && (
            <div className="api-explorer-pane">
              <div className="api-split-grid">
                
                {/* Inputs: path select, payload */}
                <div className="api-inputs-form">
                  <div className="form-group">
                    <label className="form-label font-mono">SELECT ENDPOINT ROUTE:</label>
                    <select 
                      className="api-select-box font-mono"
                      value={apiPath}
                      onChange={(e) => handleApiPathChange(e.target.value)}
                    >
                      <option value="GET /api/portfolio">GET /api/portfolio (Fetch all portfolio data)</option>
                      <option value="POST /api/query">POST /api/query (Run custom read SQL select query)</option>
                      <option value="POST /api/contact">POST /api/contact (Post a contact message)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono">JSON REQUEST PAYLOAD BODY:</label>
                    <textarea
                      className="api-payload-editor font-mono"
                      value={apiPayload}
                      onChange={(e) => setApiPayload(e.target.value)}
                      rows="6"
                      disabled={apiPath === 'GET /api/portfolio'}
                    ></textarea>
                  </div>

                  <button onClick={executeApi} className="execute-api-btn btn btn-primary" disabled={apiLoading}>
                    {apiLoading ? 'Invoking API Gateway...' : (
                      <>
                        <span>Execute API Call</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>

                {/* Outputs: JSON response */}
                <div className="api-output-panel font-mono">
                  <div className="inspector-header">
                    <span>response_body // JSON</span>
                    {apiLoading && <span className="loading-badge animate-pulse">PENDING ROUTE...</span>}
                  </div>
                  <pre className="api-response-pre">
                    {apiResponse || '// Awaiting endpoint invocation... Configure request variables and click Execute.'}
                  </pre>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SYSTEM DESIGN LIBRARY */}
          {activeTab === 'sys' && (
            <div className="system-design-pane">
              <div className="design-tabs">
                <button 
                  className={`design-sel-btn ${systemDesignName === 'uber' ? 'active' : ''}`}
                  onClick={() => setSystemDesignName('uber')}
                >
                  Uber / Ride-Sharing Topology
                </button>
                <button 
                  className={`design-sel-btn ${systemDesignName === 'netflix' ? 'active' : ''}`}
                  onClick={() => setSystemDesignName('netflix')}
                >
                  Netflix Content Stream Topology
                </button>
              </div>

              {systemDesignName === 'uber' ? (
                <div className="design-details-card">
                  <h4>🏎️ Uber System Design Blueprint</h4>
                  <p className="design-explain">Geospatial driver coordinates tracking and live location pollings:</p>
                  
                  <div className="design-steps-grid font-mono">
                    <div className="step-card">
                      <strong>1. API Gateway WebSocket</strong>
                      <p>WebSocket pools receive coordinates updates from drivers every 4s, validating token routing layers.</p>
                    </div>
                    <div className="step-card">
                      <strong>2. Redis GeoIndex</strong>
                      <p>Updates driver grids via `GEOADD` and seeks matches in proximity grids within millisecond timeouts.</p>
                    </div>
                    <div className="step-card">
                      <strong>3. Kafka Message Broker</strong>
                      <p>Queues matching request logs asynchronously to separate matching solvers and billing nodes.</p>
                    </div>
                    <div className="step-card">
                      <strong>4. MySQL Sharded Rows</strong>
                      <p>Stores coordinate histories and historical audits, using read/write partitioned replicas.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="design-details-card">
                  <h4>📺 Netflix Video Catalog Streaming Blueprint</h4>
                  <p className="design-explain">Distributed asset rendering, CDN edge servers, and user profiles retrieval:</p>
                  
                  <div className="design-steps-grid font-mono">
                    <div className="step-card">
                      <strong>1. CDN Edge Servers</strong>
                      <p>Caches video blocks globally across AWS CloudFront, delivering frames locally with under 20ms latency.</p>
                    </div>
                    <div className="step-card">
                      <strong>2. GraphQL Router API</strong>
                      <p>Fetches catalog details, subtitles indices, and user bookmarks via unified graph schemas.</p>
                    </div>
                    <div className="step-card">
                      <strong>3. Redis Session Caches</strong>
                      <p>Stores active stream session parameters and authorization profiles in memory keys.</p>
                    </div>
                    <div className="step-card">
                      <strong>4. MongoDB Document Clusters</strong>
                      <p>Manages user ratings, playback bookmarks, and metadata logs for personalized recommenders.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      <style>{`
        .blueprints-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .blueprints-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .blue-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .blue-tab-btn:hover {
          color: var(--accent-purple);
          border-color: rgba(94, 90, 209, 0.3);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .blue-tab-btn.active {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
          color: #ffffff;
        }

        .blueprints-body-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 16px rgba(17, 28, 45, 0.02);
          min-height: 380px;
        }

        /* ER pane styling */
        .er-split-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 32px;
        }

        .er-nodes-visual {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .er-info-header {
          font-size: 13px;
          color: var(--text-muted-dark);
          margin-bottom: 6px;
        }

        .table-entity-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px 16px;
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .table-entity-card:hover {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .table-entity-card.selected {
          border-color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.08);
          box-shadow: 0 0 10px rgba(94, 90, 209, 0.05);
        }

        .entity-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dark);
        }

        .entity-label {
          font-size: 9px;
          color: var(--text-muted-dark);
        }

        .er-relational-map {
          height: 80px;
          margin-top: 10px;
        }

        .er-connector-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .er-schema-inspector {
          background-color: var(--bg-darker);
          border-radius: 8px;
          padding: 20px;
          color: #a0afee;
          display: flex;
          flex-direction: column;
        }

        .inspector-header {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: rgba(245, 243, 239, 0.45);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .schema-table-wrapper {
          overflow-y: auto;
          max-height: 250px;
        }

        .schema-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11px;
        }

        .schema-table th {
          text-align: left;
          padding: 8px;
          color: rgba(245, 243, 239, 0.65);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
        }

        .schema-table td {
          padding: 8px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
        }

        .field-name { color: #f59e0b; }
        .field-type { color: #38bdf8; }
        .field-key { color: rgba(245, 243, 239, 0.65); }
        .field-key .extra { color: #10b981; font-size: 9px; }

        /* API Explorer Pane */
        .api-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .api-inputs-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 10px;
          color: var(--text-muted-dark);
          letter-spacing: 0.05em;
        }

        .api-select-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px;
          font-size: 12px;
          outline: none;
          color: var(--text-dark);
        }

        .api-payload-editor {
          background-color: var(--bg-darker);
          color: #a0afee;
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 12px;
          font-size: 12px;
          outline: none;
          resize: none;
        }

        .execute-api-btn {
          align-self: flex-start;
          font-size: 12px;
          padding: 10px 20px;
        }

        .api-output-panel {
          background-color: #05080e;
          border-radius: 8px;
          padding: 20px;
          color: #10b981;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .api-response-pre {
          flex-grow: 1;
          font-size: 11px;
          line-height: 1.4;
          overflow-y: auto;
          max-height: 250px;
          white-space: pre-wrap;
        }

        /* System design library tab */
        .design-tabs {
          display: flex;
          gap: 10px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          margin-bottom: 20px;
        }

        .design-sel-btn {
          background: none;
          border: none;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
          border-radius: 6px;
        }

        .design-sel-btn:hover {
          background-color: var(--bg-secondary);
          color: var(--text-dark);
        }

        .design-sel-btn.active {
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          font-weight: 600;
        }

        .design-details-card h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }

        .design-explain {
          font-size: 13px;
          color: var(--text-muted-dark);
          margin-bottom: 20px;
        }

        .design-steps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .step-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 16px;
        }

        .step-card strong {
          color: var(--text-dark);
          font-size: 12px;
          display: block;
          margin-bottom: 6px;
        }

        .step-card p {
          font-size: 11px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .er-split-grid, .api-split-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .design-steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
