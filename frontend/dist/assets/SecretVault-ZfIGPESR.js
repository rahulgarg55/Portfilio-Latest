import{c as n,r as a,j as e,M as p,g as x,h}from"./index-CWc0Gm19.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);function m(){const[c,s]=a.useState(!1),[r,t]=a.useState(1);return a.useEffect(()=>{const l=localStorage.getItem("rahul_portfolio_level")||1;t(parseInt(l,10)),parseInt(l,10)>=5&&s(!0);const o=d=>{const i=d.detail.level;t(i),i>=5&&s(!0)};return window.addEventListener("level-up",o),()=>window.removeEventListener("level-up",o)},[]),e.jsxs("section",{id:"secret-vault",className:"secret-vault-section dark-section",children:[e.jsx("div",{className:"system-grid-overlay"}),e.jsx("div",{className:"container",children:c?e.jsxs("div",{className:"unlocked-vault-wrapper glow-border animation-zoom",children:[e.jsxs("div",{className:"unlocked-header",children:[e.jsx(f,{size:24,className:"spark-icon"}),e.jsx("h3",{className:"unlocked-title",children:"🔓 Secret Vault Unlocked!"}),e.jsx("span",{className:"partner-status font-mono",children:"STATUS: ELITE CO-FOUNDER PARTNER"})]}),e.jsxs("div",{className:"unlocked-split",children:[e.jsxs("div",{className:"vault-actions-pane font-mono",children:[e.jsx("h4",{className:"pane-subtitle font-sans",children:"Direct Communication Channels:"}),e.jsxs("div",{className:"vault-hotlinks",children:[e.jsxs("a",{href:"mailto:gargr0109@gmail.com",className:"vault-action-row",children:[e.jsx(p,{size:16}),e.jsx("span",{children:"gargr0109@gmail.com"})]}),e.jsxs("a",{href:"tel:+917807221279",className:"vault-action-row",children:[e.jsx(x,{size:16}),e.jsx("span",{children:"+91 78072 21279"})]}),e.jsxs("a",{href:"/api/portfolio",target:"_blank",rel:"noreferrer",className:"vault-action-row",children:[e.jsx(h,{size:16}),e.jsx("span",{children:"Download Raw JSON Data API"})]})]})]}),e.jsxs("div",{className:"vault-highlights-pane font-mono",children:[e.jsx("h4",{className:"pane-subtitle font-sans",children:"Executive Core Competencies:"}),e.jsxs("ul",{className:"highlight-list font-sans",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"1500+ solved problems"})," across GFG & LeetCode (3 Star developer)."]}),e.jsxs("li",{children:["Experienced designing event-driven ",e.jsx("strong",{children:"Apache Kafka transactional bet processes"}),"."]}),e.jsxs("li",{children:["Highly capable of engineering data scrapers handling ",e.jsx("strong",{children:"100k+ judicial records"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fast response times"}),": Caching architectures via Redis key-value storage nodes."]})]})]})]})]}):e.jsxs("div",{className:"locked-vault-card font-mono",children:[e.jsx(g,{size:48,className:"lock-icon animated"}),e.jsx("h3",{className:"vault-title font-sans",children:"🔒 Secret Engineering Vault"}),e.jsxs("p",{className:"vault-desc font-sans",children:["This vault contains Rahul Garg's direct hotlines, PDF resume files, and core commercial transaction repositories. Unlocking it requires ",e.jsx("strong",{children:"Level 5 Talent Partner"})," status."]}),e.jsxs("div",{className:"unlock-progress",children:[e.jsxs("span",{children:["Your Current Level: ",e.jsxs("strong",{children:["Lvl ",r," / 5"]})]}),e.jsx("div",{className:"progress-bar-track",children:e.jsx("div",{className:"progress-bar-fill",style:{width:`${r/5*100}%`}})})]}),e.jsx("span",{className:"quest-hint",children:"💡 Complete sandbox missions, ask chatbot questions, and type terminal commands to collect XP!"})]})}),e.jsx("style",{children:`
        .secret-vault-section {
          background-color: #070a13;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          position: relative;
          overflow: hidden;
        }

        /* Locked view card */
        .locked-vault-card {
          background-color: var(--bg-dark);
          border: 2px dashed rgba(245, 243, 239, 0.12);
          border-radius: 16px;
          padding: 48px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          color: var(--text-muted-light);
        }

        .lock-icon {
          color: rgba(245, 243, 239, 0.25);
        }

        .lock-icon.animated {
          animation: shake 2s infinite alternate;
        }

        @keyframes shake {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .vault-title {
          font-size: 22px;
          font-weight: 500;
          color: #ffffff;
        }

        .vault-desc {
          font-size: 13.5px;
          line-height: 1.6;
        }

        .unlock-progress {
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          font-size: 11px;
        }

        .progress-bar-track {
          height: 8px;
          background-color: rgba(245, 243, 239, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #ef4444);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .quest-hint {
          font-size: 11px;
          color: var(--accent-lavender);
        }

        /* Unlocked view card */
        .unlocked-vault-wrapper {
          background-color: var(--bg-darker);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4);
          max-width: 800px;
          margin: 0 auto;
        }

        .unlocked-vault-wrapper.glow-border {
          border: 2px solid #f59e0b;
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.15);
        }

        .unlocked-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 20px;
          margin-bottom: 24px;
        }

        .spark-icon {
          color: #f59e0b;
        }

        .unlocked-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
        }

        .partner-status {
          font-size: 10px;
          color: #f59e0b;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .unlocked-split {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .pane-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .vault-hotlinks {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vault-action-row {
          background-color: var(--bg-dark);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 8px;
          padding: 14px 18px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          font-size: 13px;
          transition: var(--transition-fast);
        }

        .vault-action-row:hover {
          border-color: #f59e0b;
          background-color: rgba(245, 158, 11, 0.06);
          transform: translateY(-2px);
        }

        .highlight-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 16px;
        }

        .highlight-list li {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-muted-light);
        }

        .highlight-list strong {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .unlocked-split {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `})]})}export{m as default};
