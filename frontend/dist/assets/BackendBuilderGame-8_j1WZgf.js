import{r as n,j as e,f as w,C as A,D as R}from"./index-CWc0Gm19.js";import{S as E}from"./settings-CmyJEp6I.js";import{N as L}from"./network-LxBcOXBM.js";function D(){const[v,j]=n.useState("uber"),[d,k]=n.useState(!1),[o,y]=n.useState(!1),[p,N]=n.useState(!1),[g,S]=n.useState(!1),[c,m]=n.useState(10),[x,u]=n.useState(!1),[b,h]=n.useState(0),[t,f]=n.useState(null),T=s=>{if(s.preventDefault(),x)return;u(!0),h(0),f(null);const a=setInterval(()=>{h(r=>r>=100?(clearInterval(a),u(!1),C(),100):r+10)},150)},C=()=>{let s=15,a=8,r="A",l="Optimal scalability!",i="The architecture has been designed cleanly. Replicas and queues distribute high loads.";c===10?(s=12,a=5,o&&(s=2),r="A+",l="System Stable.",i="At low scales, standard processes handle workloads with zero delays."):c===1e4?(s=180,a=65,d?(o&&(s=12),g&&(a=20),r="B+",l="System Operational.",i="Toggling Load Balancers and cache structures stabilizes 10k concurrent lookups."):(s=420,a=85,r="C",l="API Gateway Overloaded.",i="Without a Load Balancer, all requests hit a single Node process, causing high CPU throttling.")):c===1e6&&(s=1200,a=100,r="F (Fatal Crash)",l="Database Bottleneck!",i="MySQL connection pool exhausted. Direct un-cached reads at 1M scale saturate I/O.",d&&o&&p&&g?(s=4,a=12,r="A++",l="Enterprise Scaled!",i="Excellent layout! Load balancers handle traffic routing, Redis intercepts reads, Kafka brokers decouple writes, and B-Tree indexes secure lookups."):o?p?d?g||(s=140,a=55,r="B",l="Table full-scan bottleneck.",i="MySQL performs table full-scans on users tables. Creating B-Tree clustered indexes decreases IOPS load."):(s=850,a=45,r="D+",l="Single server CPU bottleneck.",i="Even with database cache limits, a single gateway node cannot parse 1M socket packets without Nginx Load Balancers."):(s=280,a=75,r="C-",l="Write transaction block lockups.",i="Bets and chats insert statements lock tables. Kafka queues are required to ingest write operations asynchronously."):(s=950,a=99,r="D",l="Read congestion crash.",i="Repetitive database queries crash MySQL. Redis caching is required to intercept 1M reads.")),f({latency:`${s} ms`,dbLoad:`${a}%`,grade:r,summary:l,advice:i}),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:25,action:`Tested backend scale game at ${c.toLocaleString()} users scale`}}))};return e.jsxs("section",{id:"backend-game",className:"backend-game-section dark-section",children:[e.jsx("div",{className:"system-grid-overlay"}),e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Interactive Game"}),e.jsx("h2",{className:"section-title light",children:"Build-A-Backend Challenge"}),e.jsx("p",{className:"section-subtitle light",children:"Assemble system architecture layers (Load Balancers, Redis, Kafka, Indexes) for high-scale apps and run stress tests to see if your design survives 1 Million requests!"}),e.jsxs("div",{className:"game-grid",children:[e.jsxs("div",{className:"game-settings-card",children:[e.jsx("h3",{className:"card-sub-title",children:"1. Configure App & Scale"}),e.jsxs("div",{className:"game-form-group",children:[e.jsx("label",{className:"game-label font-mono",children:"TARGET PRODUCT SPEC:"}),e.jsxs("select",{className:"game-select",value:v,onChange:s=>j(s.target.value),children:[e.jsx("option",{value:"uber",children:"Uber Geospatial Location Tracker"}),e.jsx("option",{value:"whatsapp",children:"WhatsApp Real-Time Chat Engine"})]})]}),e.jsxs("div",{className:"game-form-group",style:{marginTop:"16px"},children:[e.jsx("label",{className:"game-label font-mono",children:"STRESS TEST TRAFFIC SCALE:"}),e.jsxs("div",{className:"scale-selector-pills",children:[e.jsx("button",{type:"button",className:`scale-pill ${c===10?"active":""}`,onClick:()=>m(10),children:"🟢 10 req/s (Low Scale)"}),e.jsx("button",{type:"button",className:`scale-pill ${c===1e4?"active":""}`,onClick:()=>m(1e4),children:"🟡 10,000 req/s (Mid Scale)"}),e.jsx("button",{type:"button",className:`scale-pill ${c===1e6?"active":""}`,onClick:()=>m(1e6),children:"🔴 1,000,000 req/s (FAANG Scale)"})]})]}),e.jsx("h3",{className:"card-sub-title",style:{marginTop:"30px",borderTop:"1px solid rgba(245,243,239,0.08)",paddingTop:"20px"},children:"2. Toggle Services Grid"}),e.jsxs("div",{className:"services-grid-game",children:[e.jsxs("div",{className:`service-game-card ${d?"active":""}`,onClick:()=>k(!d),children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Nginx Load Balancer"})]}),e.jsxs("div",{className:`service-game-card ${o?"active":""}`,onClick:()=>y(!o),children:[e.jsx(E,{size:18}),e.jsx("span",{children:"Redis Key Cache"})]}),e.jsxs("div",{className:`service-game-card ${p?"active":""}`,onClick:()=>N(!p),children:[e.jsx(A,{size:18}),e.jsx("span",{children:"Kafka Event Broker"})]}),e.jsxs("div",{className:`service-game-card ${g?"active":""}`,onClick:()=>S(!g),children:[e.jsx(R,{size:18}),e.jsx("span",{children:"MySQL DB Indexes"})]})]}),e.jsx("button",{onClick:T,className:"trigger-test-btn",disabled:x,children:x?`Simulating Load: ${b}%`:"Deploy & Run Stress Test ⚡"})]}),e.jsxs("div",{className:"game-diagnostics-card",children:[x&&e.jsxs("div",{className:"test-progress-bar",children:[e.jsx("span",{className:"font-mono",children:"stress_testing // firing_traffic_load"}),e.jsx("div",{className:"bar-track",children:e.jsx("div",{className:"bar-fill",style:{width:`${b}%`}})})]}),t?e.jsxs("div",{className:"stress-test-results font-mono",children:[e.jsxs("div",{className:"results-header-flex",children:[e.jsx("span",{className:"results-label",children:"STRESS TEST DIAGNOSTIC SUMMARY:"}),e.jsxs("span",{className:`results-grade ${t.grade.includes("A")?"green":"red"}`,children:["Grade: ",t.grade]})]}),e.jsxs("div",{className:"results-metrics-grid",children:[e.jsxs("div",{className:"met-item",children:[e.jsx("span",{children:"RESPONSE LATENCY"}),e.jsx("strong",{className:t.latency.includes("4")||t.latency.includes("12")?"green":"red",children:t.latency})]}),e.jsxs("div",{className:"met-item",children:[e.jsx("span",{children:"DATABASE CPU LOAD"}),e.jsx("strong",{className:t.dbLoad.includes("12")||t.dbLoad.includes("4%")?"green":"red",children:t.dbLoad})]})]}),e.jsxs("div",{className:"results-summary-card",children:[e.jsxs("div",{className:"sum-title",children:["Result: ",t.summary]}),e.jsx("p",{className:"sum-advice",children:t.advice})]})]}):e.jsxs("div",{className:"stress-test-placeholder font-mono",children:[e.jsx(L,{size:36,className:"placeholder-icon animate-pulse"}),e.jsx("p",{children:"AWAITING STRESS TEST TRIGGER..."}),e.jsx("span",{children:"Select app settings and run stress testing to verify throughput."})]})]})]})]}),e.jsx("style",{children:`
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
      `})]})}export{D as default};
