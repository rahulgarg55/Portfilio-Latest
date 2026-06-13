import{c as f,r as i,j as e,C as w,T as N}from"./index-CWc0Gm19.js";import{S as E}from"./shield-alert-CvOeL20i.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=f("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=f("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);function z(){const[s,g]=i.useState(!0),[o,d]=i.useState("incident"),[c,n]=i.useState(0),[x,p]=i.useState(!1),[b,A]=i.useState([{key:"user_session_9178",hit:142,ttl:84},{key:"court_case_1094",hit:88,ttl:210},{key:"nhai_road_sec_9",hit:56,ttl:12}]),[m,h]=i.useState([]),[u,r]=i.useState(["War Room console diagnostics ready.","API gateway healthcheck status: OPERATIONAL.","System monitoring agents: STABLE."]),v=()=>{const a=!s;g(a);const t=new Date().toTimeString().split(" ")[0];a?r(l=>[`[${t}] 🟢 [RESOLVED] Primary database connection re-established. Syncing logs...`,`[${t}] ⚙️ [FLUSHING QUEUE] Ingesting Kafka buffered events into MySQL database...`,...l]):(r(l=>[`[${t}] 🔴 [CRITICAL ALERT] Primary database connection failed (MySQL Connection Timed Out).`,`[${t}] ⚡ [FAILOVER ACTIVE] Redirecting lookup transactions to Redis caches...`,`[${t}] ⚙️ [QUEUE DECOUPLING] Storing bet transaction payloads inside Kafka event buffer...`,...l]),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:30,action:"Triggered database offline disaster failover simulation!",incrementKey:"secretEasterEgg"}})))},y=()=>{if(x)return;p(!0),n(1);const a=()=>new Date().toTimeString().split(" ")[0];r(t=>[`[${a()}] 🚀 Initiating deployment pipeline for branch main...`,...t]),setTimeout(()=>{n(2),r(t=>[`[${a()}] 🧪 Running SonarQube scan & validation tests...`,...t])},1500),setTimeout(()=>{n(3),r(t=>[`[${a()}] 🐳 Building Docker image: rahul-portfolio-api:latest...`,...t])},3e3),setTimeout(()=>{n(4),r(t=>[`[${a()}] 🚀 Deploying containers to production cluster. Rolling restart...`,...t])},4500),setTimeout(()=>{n(5),p(!1),r(t=>[`[${a()}] 🟢 Deployment completed successfully! All health checks passed.`,...t]),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:25,action:"Executed automated Git deployment pipeline check!"}}))},6e3)};return i.useEffect(()=>{const a=setInterval(()=>{if(s)h([]);else{const t=["USER_BET_CREATED","PAYMENT_QUEUED","WHATSAPP_LOGGED","KYC_RETRIEVED"],l=t[Math.floor(Math.random()*t.length)],k=Math.floor(Math.random()*9e3)+1e3;h(j=>[{id:k,event:l,status:"Buffered in Memory Queue"},...j.slice(0,5)])}},2e3);return()=>clearInterval(a)},[s]),e.jsxs("section",{id:"war-room",className:"war-room-section dark-section",children:[e.jsx("div",{className:"system-grid-overlay"}),e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"section-tag",style:{color:"var(--accent-lavender)"},children:"Security Operations Center"}),e.jsx("h2",{className:"section-title light",children:"Architecture War Room"}),e.jsx("p",{className:"section-subtitle light",children:"Test systems failure events or trigger deployment streams. Watch how Rahul Garg designs production ecosystems to remain active during unexpected service downtime."}),e.jsxs("div",{className:"war-room-grid",children:[e.jsxs("div",{className:"war-room-controls",children:[e.jsxs("div",{className:"war-room-tabs",children:[e.jsx("button",{className:`war-tab-btn ${o==="incident"?"active":""}`,onClick:()=>d("incident"),children:"🚨 Disaster Incident Room"}),e.jsx("button",{className:`war-tab-btn ${o==="pipeline"?"active":""}`,onClick:()=>d("pipeline"),children:"🚀 Deployment Pipeline"}),e.jsx("button",{className:`war-tab-btn ${o==="redis"?"active":""}`,onClick:()=>d("redis"),children:"⚡ Redis & Kafka Cache Visualizer"})]}),e.jsxs("div",{className:"war-tab-body",children:[o==="incident"&&e.jsxs("div",{className:"tab-pane",children:[e.jsx("h3",{className:"pane-title",children:"Disaster Simulator"}),e.jsx("p",{className:"pane-desc",children:"Simulate a database failure. Turning off MySQL activates the automated Redis/Kafka failover protocols in real-time."}),e.jsxs("div",{className:"switch-status-card",children:[e.jsxs("div",{className:"switch-meta",children:[e.jsx("span",{className:"switch-label",children:"MySQL PRIMARY NODE STATE"}),e.jsx("span",{className:`status-text ${s?"online":"offline"}`,children:s?"ONLINE (Master Node)":"OFFLINE (Connection Refused)"})]}),e.jsx("button",{className:`trigger-failure-btn ${s?"kill":"restore"}`,onClick:v,children:s?"Simulate MySQL Down ⚡":"Restore Database Node 🔌"})]}),e.jsxs("div",{className:"failover-telemetry",children:[e.jsx("span",{className:"tel-sub font-mono",children:"INCIDENT METRICS:"}),e.jsxs("div",{className:"tel-indicators",children:[e.jsxs("div",{className:"tel-col",children:[e.jsx("span",{children:"Failover Route:"}),e.jsx("span",{className:`val ${s?"":"highlight-orange"}`,children:s?"Direct Relational seek":"Redis Cache Memory seek"})]}),e.jsxs("div",{className:"tel-col",children:[e.jsx("span",{children:"Kafka queue backlog:"}),e.jsx("span",{className:`val ${s?"":"highlight-red"}`,children:s?"0 events":`${m.length+3} events buffered`})]}),e.jsxs("div",{className:"tel-col",children:[e.jsx("span",{children:"Data Integrity:"}),e.jsx("span",{className:"val green",children:"100% Guaranteed"})]})]})]})]}),o==="pipeline"&&e.jsxs("div",{className:"tab-pane",children:[e.jsx("h3",{className:"pane-title",children:"Production CI/CD Pipeline"}),e.jsx("p",{className:"pane-desc",children:"Trigger a rolling release update. Trace QA validation checks, SonarQube analytics, and Docker build deployment nodes."}),e.jsx("button",{onClick:y,className:"trigger-deploy-btn",disabled:x,children:x?"Deploying Branch...":"Trigger Git Deployment 🚀"}),e.jsxs("div",{className:"pipeline-nodes-wrapper",children:[e.jsxs("div",{className:`pipe-node ${c>=1?"active":""}`,children:[e.jsx(D,{size:14}),e.jsx("span",{children:"1. Git Push (main)"})]}),e.jsxs("div",{className:`pipe-node ${c>=2?"active":""}`,children:[e.jsx(E,{size:14}),e.jsx("span",{children:"2. SonarQube Validation"})]}),e.jsxs("div",{className:`pipe-node ${c>=3?"active":""}`,children:[e.jsx(S,{size:14}),e.jsx("span",{children:"3. Docker Container Build"})]}),e.jsxs("div",{className:`pipe-node ${c>=4?"active":""}`,children:[e.jsx(w,{size:14}),e.jsx("span",{children:"4. Production Rolling Rollout"})]})]})]}),o==="redis"&&e.jsxs("div",{className:"tab-pane",children:[e.jsx("h3",{className:"pane-title",children:"Key Cache Eviction Status"}),e.jsx("p",{className:"pane-desc font-mono text-xs",children:"Simulated in-memory caching slots currently listening on port 6379:"}),e.jsx("div",{className:"redis-keys-list",children:b.map((a,t)=>e.jsxs("div",{className:"redis-key-card font-mono",children:[e.jsxs("div",{className:"key-header",children:[e.jsxs("span",{className:"key-string",children:["🔑 ",a.key]}),e.jsxs("span",{className:"key-ttl",children:["TTL: ",a.ttl,"s"]})]}),e.jsxs("div",{className:"key-stats",children:[e.jsxs("span",{children:["Hits: ",a.hit]}),e.jsx("span",{children:"Status: ACTIVE"})]})]},t))})]})]})]}),e.jsxs("div",{className:"war-room-visuals",children:[e.jsxs("div",{className:"visuals-diagram-card",children:[e.jsxs("div",{className:"viz-header",children:[e.jsx("span",{className:"viz-title font-mono",children:"monitoring_map // failover_routes"}),e.jsxs("span",{className:"system-health-badge font-mono",children:["HEALTH: ",s?"STABLE":"DEGRADED"]})]}),e.jsx("div",{className:"viz-viewport",children:e.jsxs("svg",{className:"war-svg",viewBox:"0 0 400 240",children:[e.jsx("circle",{cx:"50",cy:"120",r:"18",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"124",className:"node-txt",textAnchor:"middle",children:"UI"}),e.jsx("text",{x:"50",y:"150",className:"node-lbl",textAnchor:"middle",children:"Clients"}),e.jsx("circle",{cx:"160",cy:"120",r:"20",fill:"#1e293b",stroke:"#a0afee",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"124",className:"node-txt",textAnchor:"middle",children:"API"}),e.jsx("text",{x:"160",y:"150",className:"node-lbl",textAnchor:"middle",children:"Gateway"}),e.jsx("rect",{x:"250",y:"30",width:"50",height:"32",rx:"4",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"275",y:"50",className:"node-txt-rect",textAnchor:"middle",children:"REDIS"}),e.jsx("text",{x:"275",y:"76",className:"node-lbl",textAnchor:"middle",children:"Cache Node"}),e.jsx("circle",{cx:"340",cy:"120",r:"20",fill:"#1e293b",stroke:s?"#6366f1":"#ef4444",strokeWidth:"2",className:s?"":"flashing-red"}),e.jsx("text",{x:"340",y:"124",className:"node-txt",textAnchor:"middle",children:"DB"}),e.jsx("text",{x:"340",y:"150",className:"node-lbl",textAnchor:"middle",children:"MySQL"}),e.jsx("rect",{x:"250",y:"170",width:"50",height:"32",rx:"4",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"275",y:"190",className:"node-txt-rect",textAnchor:"middle",children:"KAFKA"}),e.jsx("text",{x:"275",y:"216",className:"node-lbl",textAnchor:"middle",children:"Event Broker"}),e.jsx("line",{x1:"68",y1:"120",x2:"140",y2:"120",stroke:"#a0afee",strokeWidth:"1.5"}),e.jsx("line",{x1:"180",y1:"120",x2:"320",y2:"120",stroke:s?"#6366f1":"#ef4444",strokeWidth:"1.5",strokeDasharray:s?"0":"4"}),e.jsx("path",{d:"M 180,110 L 250,50",fill:"none",stroke:"#10b981",strokeWidth:"1.5",className:s?"muted-path":"active-glow-green"}),e.jsx("path",{d:"M 180,130 L 250,186",fill:"none",stroke:"#f59e0b",strokeWidth:"1.5",className:s?"muted-path":"active-glow-yellow"}),e.jsx("path",{d:"M 300,186 L 330,138",fill:"none",stroke:"#f59e0b",strokeWidth:"1.5",className:"muted-path"}),e.jsx("path",{d:"M 300,50 L 330,102",fill:"none",stroke:"#10b981",strokeWidth:"1.5",className:"muted-path"})]})}),!s&&e.jsxs("div",{className:"kafka-ticker font-mono",children:[e.jsx("div",{className:"ticker-label",children:"⚠️ Kafka Event Queued Buffer:"}),e.jsx("div",{className:"ticker-items",children:m.map((a,t)=>e.jsxs("div",{className:"ticker-row",children:[e.jsxs("span",{children:["Event: ",a.event," (Bet ID: #",a.id,")"]}),e.jsx("span",{className:"ticker-status font-bold",children:a.status})]},t))})]})]}),e.jsxs("div",{className:"visuals-console-card font-mono",children:[e.jsxs("div",{className:"console-header",children:[e.jsx(N,{size:12}),e.jsx("span",{children:"Console Diagnostics Log"})]}),e.jsx("div",{className:"console-lines",children:u.map((a,t)=>e.jsx("div",{className:"console-line-row",children:a},t))})]})]})]})]}),e.jsx("style",{children:`
        .war-room-section {
          background-color: var(--bg-dark);
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          position: relative;
          overflow: hidden;
        }

        .war-room-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 40px;
          position: relative;
          z-index: 5;
        }

        .war-room-controls {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .war-room-tabs {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .war-tab-btn {
          text-align: left;
          background: rgba(245, 243, 239, 0.03);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 12px 16px;
          color: var(--text-muted-light);
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .war-tab-btn:hover {
          color: var(--text-light);
          border-color: rgba(94, 90, 209, 0.5);
        }

        .war-tab-btn.active {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
          color: var(--text-light);
          font-weight: 600;
        }

        .war-tab-body {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.06);
          border-radius: 8px;
          padding: 20px;
          flex-grow: 1;
        }

        .pane-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 8px;
        }

        .pane-desc {
          font-size: 12px;
          color: var(--text-muted-light);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .switch-status-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .switch-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .switch-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-light);
          letter-spacing: 0.05em;
        }

        .status-text {
          font-size: 13px;
          font-weight: 700;
        }

        .status-text.online { color: #10b981; }
        .status-text.offline { color: #ef4444; }

        .trigger-failure-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          padding: 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .trigger-failure-btn.kill {
          background-color: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .trigger-failure-btn.kill:hover {
          background-color: #ef4444;
          color: #ffffff;
        }

        .trigger-failure-btn.restore {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .trigger-failure-btn.restore:hover {
          background-color: #10b981;
          color: #ffffff;
        }

        .failover-telemetry {
          margin-top: 16px;
          border-top: 1px solid rgba(245, 243, 239, 0.08);
          padding-top: 16px;
        }

        .tel-sub {
          font-size: 9px;
          color: var(--accent-lavender);
        }

        .tel-indicators {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .tel-col {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-light);
        }

        .tel-col .val.highlight-orange { color: #f59e0b; font-weight: 600; }
        .tel-col .val.highlight-red { color: #ef4444; font-weight: 600; }

        /* Pipeline Simulator Pane */
        .trigger-deploy-btn {
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

        .trigger-deploy-btn:hover:not(:disabled) {
          background-color: #4c48b8;
        }

        .pipeline-nodes-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .pipe-node {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.04);
          border-radius: 6px;
          padding: 10px 14px;
          color: rgba(245, 243, 239, 0.3);
          font-size: 12px;
          font-family: var(--font-mono);
          transition: var(--transition-normal);
        }

        .pipe-node.active {
          color: var(--text-light);
          border-color: var(--accent-lavender);
          background-color: rgba(160, 175, 238, 0.05);
        }

        /* Redis key list */
        .redis-keys-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .redis-key-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 6px;
          padding: 12px;
          font-size: 11px;
        }

        .key-header {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .key-string { color: #10b981; }
        .key-ttl { color: var(--accent-lavender); }

        .key-stats {
          display: flex;
          justify-content: space-between;
          color: rgba(245, 243, 239, 0.4);
        }

        /* Visuals Output panel */
        .war-room-visuals {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .visuals-diagram-card {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
        }

        .viz-viewport {
          padding: 16px;
          background-color: #05080e;
        }

        .war-svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .node-txt { fill: #ffffff; font-size: 10px; font-weight: 500; font-family: var(--font-sans); }
        .node-txt-rect { fill: #ffffff; font-size: 9px; font-weight: 600; font-family: var(--font-mono); }
        .node-lbl { fill: var(--text-muted-light); font-size: 8px; font-family: var(--font-sans); }

        .flashing-red {
          animation: redPulse 1s infinite alternate;
        }

        @keyframes redPulse {
          0% { stroke: #ef4444; fill: #1e293b; }
          100% { stroke: #ef4444; fill: rgba(239, 68, 68, 0.25); }
        }

        .muted-path {
          stroke: rgba(245, 243, 239, 0.06);
        }

        .active-glow-green {
          stroke-dasharray: 4;
          animation: flowDash 0.8s linear infinite;
        }

        .active-glow-yellow {
          stroke-dasharray: 4;
          animation: flowDash 1.2s linear infinite;
        }

        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }

        .kafka-ticker {
          background-color: rgba(245, 158, 11, 0.06);
          border-top: 1px solid rgba(245, 158, 11, 0.15);
          padding: 10px 16px;
          height: 90px;
          overflow: hidden;
        }

        .ticker-label {
          font-size: 9px;
          color: #f59e0b;
          margin-bottom: 6px;
        }

        .ticker-items {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ticker-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #f59e0b;
        }

        /* Console */
        .visuals-console-card {
          background-color: #05080e;
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 16px;
          height: 150px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .console-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(245, 243, 239, 0.45);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .console-lines {
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
          flex-grow: 1;
        }

        .console-line-row {
          font-size: 11px;
          color: var(--text-muted-light);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .war-room-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `})]})}export{z as default};
