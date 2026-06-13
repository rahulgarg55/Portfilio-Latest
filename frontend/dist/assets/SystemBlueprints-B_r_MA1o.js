import{r as s,j as e,D as y,a as A,S as R}from"./index-CWc0Gm19.js";import{N as E}from"./network-LxBcOXBM.js";function C(){const[r,d]=s.useState("er"),[n,f]=s.useState("experiences"),[t,N]=s.useState("GET /api/portfolio"),[c,o]=s.useState("{}"),[v,i]=s.useState(null),[p,h]=s.useState(!1),[x,u]=s.useState("uber"),m={experiences:{name:"experiences (Relational TIMELINE Table)",fields:[{name:"id",type:"INT",key:"PRIMARY KEY",extra:"AUTO_INCREMENT"},{name:"role",type:"VARCHAR(255)",key:"NOT NULL"},{name:"company",type:"VARCHAR(255)",key:"NOT NULL"},{name:"duration",type:"VARCHAR(100)",key:"NOT NULL"},{name:"location",type:"VARCHAR(255)",key:"NOT NULL"},{name:"description",type:"JSON",key:"NOT NULL"},{name:"sort_order",type:"INT",key:"DEFAULT 0"}],index:"PRIMARY KEY clustered on (id)"},projects:{name:"projects (CASE STUDIES Table)",fields:[{name:"id",type:"INT",key:"PRIMARY KEY",extra:"AUTO_INCREMENT"},{name:"title",type:"VARCHAR(255)",key:"NOT NULL"},{name:"description",type:"TEXT",key:"NOT NULL"},{name:"tags",type:"VARCHAR(255)",key:"NOT NULL"},{name:"link",type:"VARCHAR(255)",key:"NULL"},{name:"github",type:"VARCHAR(255)",key:"NULL"},{name:"category",type:"VARCHAR(100)",key:"NOT NULL"},{name:"sort_order",type:"INT",key:"DEFAULT 0"}],index:"IDX_PROJECT_CAT on (category)"},achievements:{name:"achievements (METRIC SUMMARY Table)",fields:[{name:"id",type:"INT",key:"PRIMARY KEY",extra:"AUTO_INCREMENT"},{name:"title",type:"VARCHAR(255)",key:"NOT NULL"},{name:"value",type:"VARCHAR(255)",key:"NOT NULL"},{name:"details",type:"TEXT",key:"NOT NULL"},{name:"sort_order",type:"INT",key:"DEFAULT 0"}],index:"PRIMARY KEY clustered on (id)"},messages:{name:"messages (INBOX INTAKE Table)",fields:[{name:"id",type:"INT",key:"PRIMARY KEY",extra:"AUTO_INCREMENT"},{name:"name",type:"VARCHAR(255)",key:"NOT NULL"},{name:"email",type:"VARCHAR(255)",key:"NOT NULL"},{name:"phone",type:"VARCHAR(50)",key:"NULL"},{name:"message",type:"TEXT",key:"NOT NULL"},{name:"created_at",type:"TIMESTAMP",key:"DEFAULT CURRENT_TIMESTAMP"}],index:"IDX_MSG_DATE on (created_at DESC)"}},j=async()=>{h(!0),i(null),setTimeout(async()=>{try{if(t==="GET /api/portfolio"){const g=await(await fetch("https://portfilio-latest-3.onrender.com//api/portfolio")).json();i(JSON.stringify(g,null,2))}else if(t==="POST /api/query"){let a={query:"SELECT * FROM projects;"};try{a=JSON.parse(c)}catch{}const b=await(await fetch("https://portfilio-latest-3.onrender.com//api/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();i(JSON.stringify(b,null,2))}else if(t==="POST /api/contact"){let a={name:"HR Recruiter",email:"hr@google.com",message:"Hello!"};try{a=JSON.parse(c)}catch{}const b=await(await fetch("https://portfilio-latest-3.onrender.com//api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();i(JSON.stringify(b,null,2))}}catch(a){i(JSON.stringify({success:!1,error:a.message},null,2))}finally{h(!1),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:25,action:`Tested backend endpoint execution in Swagger API Explorer: ${t}`}}))}},1e3)},k=a=>{N(a),a==="GET /api/portfolio"?o("{}"):a==="POST /api/query"?o(`{
  "query": "SELECT * FROM projects WHERE category = 'Full Stack';"
}`):a==="POST /api/contact"&&o(`{
  "name": "Alex HR Director",
  "email": "alex.recruitment@tesla.com",
  "phone": "+1 415-555-0199",
  "message": "Let's schedule an interview!"
}`)};return e.jsxs("section",{id:"blueprints",className:"blueprints-section",children:[e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"section-tag",children:"Backend Architecture Blueprints"}),e.jsx("h2",{className:"section-title",children:"System Blueprints & API Explorer"}),e.jsx("p",{className:"section-subtitle",children:"Inspect relational database entity schemas, execute REST endpoint calls inside our Swagger explorer, or study multi-node system designs."}),e.jsxs("div",{className:"blueprints-tabs no-print",children:[e.jsxs("button",{className:`blue-tab-btn ${r==="er"?"active":""}`,onClick:()=>d("er"),children:[e.jsx(y,{size:14}),e.jsx("span",{children:"Database ER Diagrams"})]}),e.jsxs("button",{className:`blue-tab-btn ${r==="api"?"active":""}`,onClick:()=>d("api"),children:[e.jsx(A,{size:14}),e.jsx("span",{children:"Swagger API Explorer"})]}),e.jsxs("button",{className:`blue-tab-btn ${r==="sys"?"active":""}`,onClick:()=>d("sys"),children:[e.jsx(E,{size:14}),e.jsx("span",{children:"System Design Library"})]})]}),e.jsxs("div",{className:"blueprints-body-card",children:[r==="er"&&e.jsx("div",{className:"er-diagram-pane",children:e.jsxs("div",{className:"er-split-grid",children:[e.jsxs("div",{className:"er-nodes-visual",children:[e.jsx("div",{className:"er-info-header",children:"Click database entity table nodes to map fields:"}),e.jsx("div",{className:"table-nodes-list",children:Object.keys(m).map(a=>e.jsxs("div",{className:`table-entity-card ${n===a?"selected":""}`,onClick:()=>f(a),children:[e.jsxs("div",{className:"entity-header",children:[e.jsx(y,{size:14}),e.jsx("strong",{children:a.toUpperCase()})]}),e.jsx("span",{className:"entity-label font-mono",children:"Index: PRIMARY_KEY (id)"})]},a))}),e.jsx("div",{className:"er-relational-map",children:e.jsxs("svg",{viewBox:"0 0 320 120",className:"er-connector-svg",children:[e.jsx("path",{d:"M 40,30 C 120,30 120,90 200,90",fill:"none",stroke:"var(--accent-purple)",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("path",{d:"M 40,90 C 120,90 120,30 200,30",fill:"none",stroke:"var(--accent-lavender)",strokeWidth:"1.5",strokeDasharray:"3"}),e.jsx("circle",{cx:"40",cy:"30",r:"3",fill:"var(--accent-purple)"}),e.jsx("circle",{cx:"200",cy:"90",r:"3",fill:"var(--accent-purple)"})]})})]}),e.jsxs("div",{className:"er-schema-inspector font-mono",children:[e.jsxs("div",{className:"inspector-header",children:[e.jsxs("span",{children:["table_schema // ",n]}),e.jsx("span",{className:"index-indicator",children:m[n].index})]}),e.jsx("div",{className:"schema-table-wrapper",children:e.jsxs("table",{className:"schema-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"COLUMN_NAME"}),e.jsx("th",{children:"DATA_TYPE"}),e.jsx("th",{children:"CONSTRAINTS"})]})}),e.jsx("tbody",{children:m[n].fields.map((a,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"field-name",children:e.jsx("strong",{children:a.name})}),e.jsx("td",{className:"field-type",children:a.type}),e.jsxs("td",{className:"field-key",children:[a.key," ",a.extra&&e.jsx("span",{className:"extra",children:a.extra})]})]},l))})]})})]})]})}),r==="api"&&e.jsx("div",{className:"api-explorer-pane",children:e.jsxs("div",{className:"api-split-grid",children:[e.jsxs("div",{className:"api-inputs-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label font-mono",children:"SELECT ENDPOINT ROUTE:"}),e.jsxs("select",{className:"api-select-box font-mono",value:t,onChange:a=>k(a.target.value),children:[e.jsx("option",{value:"GET /api/portfolio",children:"GET /api/portfolio (Fetch all portfolio data)"}),e.jsx("option",{value:"POST /api/query",children:"POST /api/query (Run custom read SQL select query)"}),e.jsx("option",{value:"POST /api/contact",children:"POST /api/contact (Post a contact message)"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label font-mono",children:"JSON REQUEST PAYLOAD BODY:"}),e.jsx("textarea",{className:"api-payload-editor font-mono",value:c,onChange:a=>o(a.target.value),rows:"6",disabled:t==="GET /api/portfolio"})]}),e.jsx("button",{onClick:j,className:"execute-api-btn btn btn-primary",disabled:p,children:p?"Invoking API Gateway...":e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Execute API Call"}),e.jsx(R,{size:14})]})})]}),e.jsxs("div",{className:"api-output-panel font-mono",children:[e.jsxs("div",{className:"inspector-header",children:[e.jsx("span",{children:"response_body // JSON"}),p&&e.jsx("span",{className:"loading-badge animate-pulse",children:"PENDING ROUTE..."})]}),e.jsx("pre",{className:"api-response-pre",children:v||"// Awaiting endpoint invocation... Configure request variables and click Execute."})]})]})}),r==="sys"&&e.jsxs("div",{className:"system-design-pane",children:[e.jsxs("div",{className:"design-tabs",children:[e.jsx("button",{className:`design-sel-btn ${x==="uber"?"active":""}`,onClick:()=>u("uber"),children:"Uber / Ride-Sharing Topology"}),e.jsx("button",{className:`design-sel-btn ${x==="netflix"?"active":""}`,onClick:()=>u("netflix"),children:"Netflix Content Stream Topology"})]}),x==="uber"?e.jsxs("div",{className:"design-details-card",children:[e.jsx("h4",{children:"🏎️ Uber System Design Blueprint"}),e.jsx("p",{className:"design-explain",children:"Geospatial driver coordinates tracking and live location pollings:"}),e.jsxs("div",{className:"design-steps-grid font-mono",children:[e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"1. API Gateway WebSocket"}),e.jsx("p",{children:"WebSocket pools receive coordinates updates from drivers every 4s, validating token routing layers."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"2. Redis GeoIndex"}),e.jsx("p",{children:"Updates driver grids via `GEOADD` and seeks matches in proximity grids within millisecond timeouts."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"3. Kafka Message Broker"}),e.jsx("p",{children:"Queues matching request logs asynchronously to separate matching solvers and billing nodes."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"4. MySQL Sharded Rows"}),e.jsx("p",{children:"Stores coordinate histories and historical audits, using read/write partitioned replicas."})]})]})]}):e.jsxs("div",{className:"design-details-card",children:[e.jsx("h4",{children:"📺 Netflix Video Catalog Streaming Blueprint"}),e.jsx("p",{className:"design-explain",children:"Distributed asset rendering, CDN edge servers, and user profiles retrieval:"}),e.jsxs("div",{className:"design-steps-grid font-mono",children:[e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"1. CDN Edge Servers"}),e.jsx("p",{children:"Caches video blocks globally across AWS CloudFront, delivering frames locally with under 20ms latency."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"2. GraphQL Router API"}),e.jsx("p",{children:"Fetches catalog details, subtitles indices, and user bookmarks via unified graph schemas."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"3. Redis Session Caches"}),e.jsx("p",{children:"Stores active stream session parameters and authorization profiles in memory keys."})]}),e.jsxs("div",{className:"step-card",children:[e.jsx("strong",{children:"4. MongoDB Document Clusters"}),e.jsx("p",{children:"Manages user ratings, playback bookmarks, and metadata logs for personalized recommenders."})]})]})]})]})]})]}),e.jsx("style",{children:`
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
      `})]})}export{C as default};
