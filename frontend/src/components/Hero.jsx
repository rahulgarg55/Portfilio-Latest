import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section dark-section">
      <div className="grid-overlay"></div>
      <div className="glow-orb"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="tech-badge">
            <Code size={12} className="tech-badge-icon" />
            <span>DATA-CENTRIC FULL STACK ENGINEER</span>
          </div>
          
          <h1 className="hero-headline">
            Building Programmatic Pipelines & <span className="gradient-text">Scalable Systems</span>
          </h1>
          
          <p className="hero-desc">
            I am a <strong>Mid-Level Software Engineer</strong> who loves designing robust schemas, processing real-time government datasets, integrating complex webhooks (like WhatsApp Business APIs), and architecting performant microservices.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-dark">
              <span>View Experience</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="quick-contacts">
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:gargr0109@gmail.com">gargr0109@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+917807221279">+91 78072 21279</a>
            </div>
            <div className="contact-item">
              <span className="dot-active"></span>
              <span>Based in Chandigarh, India</span>
            </div>
          </div>
        </div>
        
        {/* Animated code/data pipeline visualization on the right side */}
        <div className="hero-visual">
          <div className="visual-pipeline">
            <div className="pipeline-node node-input">
              <div className="node-dot"></div>
              <span>Judicial Raw Data</span>
            </div>
            <div className="pipeline-connector conn-1"></div>
            <div className="pipeline-node node-process">
              <div className="node-dot glow-purple"></div>
              <span>ETL Node (Node.js)</span>
            </div>
            <div className="pipeline-connector conn-2"></div>
            <div className="pipeline-node node-output">
              <div className="node-dot glow-green"></div>
              <span>MySQL / Redis</span>
            </div>
            
            {/* WhatsApp simulation code block in UI */}
            <div className="visual-code-card">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-title">whatsapp-integration.js</span>
              </div>
              <pre className="code-body">
                <code>{`// Meta API Event Webhook
app.post("/webhook", async (req, res) => {
  const { messages } = req.body.entry[0].changes[0].value;
  if (messages) {
    const userMessage = messages[0].text.body;
    await processMessage(messages[0].from, userMessage);
  }
  res.sendStatus(200);
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
          background-color: var(--bg-dark);
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(245, 243, 239, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 243, 239, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          top: 25%;
          right: 15%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(94, 90, 209, 0.15) 0%, rgba(14, 23, 37, 0) 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(40px);
          pointer-events: none;
        }

        .hero-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          animation: fadeIn 0.8s ease-out;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(94, 90, 209, 0.12);
          border: 1px solid rgba(94, 90, 209, 0.24);
          padding: 6px 12px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-lavender);
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }

        .tech-badge-icon {
          color: var(--accent-lavender);
        }

        .hero-headline {
          font-size: 56px;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-light);
          margin-bottom: 24px;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-lavender) 0%, #c3ccf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 500;
        }

        .hero-desc {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-muted-light);
          margin-bottom: 40px;
        }

        .hero-desc strong {
          color: var(--text-light);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
        }

        .hero-btn-secondary {
          border-color: rgba(245, 243, 239, 0.2);
          color: var(--text-light);
        }

        .hero-btn-secondary:hover {
          background-color: rgba(245, 243, 239, 0.08);
          border-color: var(--text-light);
        }

        .quick-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          border-top: 1px solid rgba(245, 243, 239, 0.1);
          padding-top: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-muted-light);
        }

        .contact-item a {
          color: var(--text-muted-light);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .contact-item a:hover {
          color: var(--accent-lavender);
        }

        .contact-icon {
          color: var(--accent-lavender);
        }

        .dot-active {
          width: 8px;
          height: 8px;
          background-color: #38bdf8;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #38bdf8;
        }

        /* Hero visual illustration style */
        .hero-visual {
          display: flex;
          justify-content: center;
          animation: fadeIn 1.2s ease-out;
        }

        .visual-pipeline {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 380px;
        }

        .pipeline-node {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.1);
          border-radius: 8px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          font-size: 13px;
          color: var(--text-light);
          font-family: var(--font-mono);
        }

        .node-dot {
          width: 10px;
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 50%;
        }

        .glow-purple {
          background-color: var(--accent-purple);
          box-shadow: 0 0 12px var(--accent-purple);
        }

        .glow-green {
          background-color: #10b981;
          box-shadow: 0 0 12px #10b981;
        }

        .pipeline-connector {
          width: 2px;
          height: 20px;
          background: linear-gradient(180deg, rgba(245, 243, 239, 0.2), rgba(94, 90, 209, 0.5));
        }

        .visual-code-card {
          margin-top: 16px;
          width: 100%;
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .code-header {
          background-color: rgba(0, 0, 0, 0.15);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
        }

        .code-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .code-header .red { background-color: #ef4444; }
        .code-header .yellow { background-color: #eab308; }
        .code-header .green { background-color: #22c55e; }

        .code-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
          margin-left: 8px;
        }

        .code-body {
          padding: 16px;
          margin: 0;
          overflow-x: auto;
        }

        .code-body code {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #a0afee;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-visual {
            order: -1;
          }
          .hero-headline {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
