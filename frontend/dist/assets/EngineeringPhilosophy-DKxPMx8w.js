import{r as l,j as e,b as c}from"./index-CWc0Gm19.js";function p(){const[s,o]=l.useState(0),r=[{title:"🗂️ Database-First Architecture",desc:"I believe scaling starts at the database. Designing clean relational index layouts and partition keys is crucial before writing code."},{title:"⚙️ Decoupled Streaming Pipelines",desc:"Using Kafka event brokers decouples fast API writers from slower DB operations, shielding schemas from heavy load spikes."},{title:"⚡ Proactive Memory Caching",desc:"Placing Redis caches around high-traffic endpoints cuts API latency down from 150ms to 4ms while reducing DB queries."},{title:"🛡️ Resiliency & Mock Fallbacks",desc:"Software must remain operational. Designing robust mock fallbacks when external DBs or APIs go down ensures continuous uptime."}],a=[{year:"2019 - 2023",title:"Competitive DSA Student",company:"CGC Landran Campus",details:"Acquired Campus Rank 1st on GeeksForGeeks, solved 1500+ problems, and secured Team Rank 613 in ICPC Regionals 2021."},{year:"2021 - Present",title:"Technical YouTube Educator",company:"Digital Channels",details:"Educated over 200+ junior engineers on Data Structures & Algorithms, MERN stacks, and system scale principles."},{year:"2022 - 2023",title:"MERN Stack Developer",company:"Zapbuild Technologies",details:"Built full-stack inventory data systems utilizing MySQL tables, RBAC user interfaces, and Express endpoints."},{year:"2023 - 2025",title:"Lead MERN Developer",company:"Basta Tech Solutions",details:"Architected BastaxCasino iGaming backend. Implemented Redis cache nodes, Kafka bet queues, Nginx reverse proxies, and PM2 logs."},{year:"2025 - Present",title:"Mid Level Software Engineer",company:"Jupitice Justice Technologies",details:"Engineering government-tier Supreme/High Court scraper pipelines, Offline KYC integrations, and WhatsApp Business Meta webhooks."}],n=t=>{o(t),window.dispatchEvent(new CustomEvent("gain-xp",{detail:{amount:15,action:`Explored career journey node: ${a[t].title}`}}))};return e.jsxs("section",{id:"philosophy",className:"philosophy-section",children:[e.jsxs("div",{className:"container",children:[e.jsx("span",{className:"section-tag",children:"Engineering Core"}),e.jsx("h2",{className:"section-title",children:"Philosophy & Developer Journey"}),e.jsx("p",{className:"section-subtitle",children:"Explore my core architectural beliefs and track the milestones of my developer journey from competitive coding to leading production systems."}),e.jsxs("div",{className:"philosophy-grid",children:[e.jsxs("div",{className:"values-column",children:[e.jsx("h3",{className:"sub-section-title",children:"🛡️ Architectural Principles"}),e.jsx("div",{className:"values-list-cards",children:r.map((t,i)=>e.jsxs(c,{className:"card value-card",maxTilt:8,children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.desc})]},i))})]}),e.jsxs("div",{className:"journey-column",children:[e.jsx("h3",{className:"sub-section-title",children:"🚀 Interactive Journey Map"}),e.jsx("p",{className:"column-explanation",children:"Click steps to inspect project milestones and engineering accomplishments:"}),e.jsxs("div",{className:"journey-map-wrapper",children:[e.jsx("div",{className:"journey-nodes-timeline font-mono",children:a.map((t,i)=>e.jsxs("div",{className:`timeline-step-node ${s===i?"active":""}`,onClick:()=>n(i),children:[e.jsx("div",{className:"timeline-badge-circle",children:i+1}),e.jsxs("div",{className:"step-meta-info",children:[e.jsx("span",{className:"step-year",children:t.year}),e.jsx("strong",{className:"step-title-text",children:t.title})]})]},i))}),e.jsxs("div",{className:"journey-step-details font-mono",children:[e.jsxs("div",{className:"details-header",children:[e.jsxs("span",{children:["milestone_details // step_",s+1]}),e.jsx("span",{className:"details-company",children:a[s].company})]}),e.jsxs("div",{className:"details-body",children:[e.jsx("h4",{children:a[s].title}),e.jsx("p",{className:"details-desc",children:a[s].details})]})]})]})]})]})]}),e.jsx("style",{children:`
        .philosophy-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .sub-section-title {
          font-size: 20px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .column-explanation {
          font-size: 13px;
          color: var(--text-muted-dark);
          margin-bottom: 24px;
        }

        .values-list-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .value-card {
          background-color: #ffffff;
          padding: 20px 24px;
        }

        .value-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .value-card p {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        /* Journey Map Styling */
        .journey-map-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(17, 28, 45, 0.02);
        }

        .journey-nodes-timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          padding-left: 12px;
        }

        .journey-nodes-timeline::before {
          content: '';
          position: absolute;
          left: 21px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background-color: var(--border-color);
          z-index: 1;
        }

        .timeline-step-node {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          position: relative;
          z-index: 2;
        }

        .timeline-badge-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 2px solid var(--border-color);
          color: var(--text-muted-dark);
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .timeline-step-node.active .timeline-badge-circle {
          background-color: var(--accent-purple);
          border-color: var(--accent-purple);
          color: #ffffff;
          box-shadow: 0 0 8px rgba(94, 90, 209, 0.3);
        }

        .step-meta-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .step-year {
          font-size: 11px;
          color: var(--accent-purple);
          font-weight: 600;
          width: 90px;
        }

        .step-title-text {
          font-size: 12.5px;
          color: var(--text-muted-dark);
          transition: var(--transition-fast);
        }

        .timeline-step-node.active .step-title-text {
          color: var(--text-dark);
          font-weight: 700;
        }

        /* Journey details card output */
        .journey-step-details {
          background-color: var(--bg-darker);
          border-radius: 8px;
          padding: 18px;
          color: #a0afee;
          border: 1px solid rgba(245, 243, 239, 0.04);
          animation: fadeIn 0.25s ease;
        }

        .details-header {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: rgba(245, 243, 239, 0.45);
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 6px;
          margin-bottom: 10px;
        }

        .details-company {
          color: var(--accent-lavender);
        }

        .journey-step-details h4 {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .details-desc {
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-muted-light);
        }

        @media (max-width: 900px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `})]})}export{p as default};
