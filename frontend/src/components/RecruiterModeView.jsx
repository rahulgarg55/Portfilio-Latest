import React from 'react';
import { Mail, Phone, Github, Linkedin, Printer, ArrowLeft } from 'lucide-react';

export default function RecruiterModeView({ onToggleBack }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recruiter-resume-view">
      <div className="resume-controls no-print">
        <button className="btn btn-secondary back-visual-btn" onClick={onToggleBack}>
          <ArrowLeft size={16} />
          <span>Back to Interactive 3D Portfolio</span>
        </button>
        
        <button className="btn btn-primary print-resume-btn" onClick={handlePrint}>
          <Printer size={16} />
          <span>Print / Save PDF Resume</span>
        </button>
      </div>

      <div className="resume-paper">
        {/* Header */}
        <header className="resume-header">
          <div className="header-left">
            <h1>Rahul Garg</h1>
            <span className="subtitle">Mid-Level Software Engineer // Full Stack Developer</span>
            <p className="summary">
              Highly motivated and results-oriented software engineer with over 4 years of hands-on experience designing and deploying high-volume API routing, asynchronous event streaming (Kafka), low-latency cache architectures (Redis), and secure government SQL schemas. Proven track record leading developer squads and automating complex business processes.
            </p>
          </div>
          <div className="header-right contact-list">
            <div className="contact-line">
              <Mail size={14} />
              <a href="mailto:gargr0109@gmail.com">gargr0109@gmail.com</a>
            </div>
            <div className="contact-line">
              <Phone size={14} />
              <a href="tel:+917807221279">+91 78072 21279</a>
            </div>
            <div className="contact-line">
              <Linkedin size={14} />
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/rahulgarg</a>
            </div>
            <div className="contact-line">
              <Github size={14} />
              <a href="https://github.com" target="_blank" rel="noreferrer">github.com/rahulgarg</a>
            </div>
            <div className="contact-line font-mono text-xs">
              🏠 Sector 94 JLPL Mohali, India
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section className="resume-section">
          <h2>Professional Work Experience</h2>
          
          <div className="resume-job">
            <div className="job-header">
              <div className="job-title-company">
                <strong>Mid Level Software Engineer</strong>
                <span className="divider">|</span>
                <span>Jupitice Justice Technologies Pvt. Ltd.</span>
              </div>
              <span className="job-duration">Aug 2025 – Present</span>
            </div>
            <span className="job-location">Chandigarh IT Park, India</span>
            <ul className="job-bullets">
              <li>Worked on Supreme Court and High Court official websites, fetching and processing real-time judicial data and integrating it into production-grade applications.</li>
              <li>Developed and integrated Offline KYC (Know Your Customer) solutions for real-world use cases, ensuring data accuracy, validation, and compliance.</li>
              <li>Fetched and processed NHAI (National Highways Authority of India) data, structured large datasets, and prepared them for government database insertion.</li>
              <li>Designed and optimized database schemas for high-volume government data handling and reduced read latencies by implementing Redis cache tiers.</li>
              <li>Integrated Meta Business API webhooks for WhatsApp Business notification triggers in automated transaction streams.</li>
              <li>Deployed feature branches across multiple staging/production servers, collaborating directly with QA engineers.</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="job-header">
              <div className="job-title-company">
                <strong>MERN Full Stack Developer</strong>
                <span className="divider">|</span>
                <span>Basta Tech Solutions Pvt. Ltd.</span>
              </div>
              <span className="job-duration">Oct 2023 – July 2025</span>
            </div>
            <span className="job-location">Mohali, India</span>
            <ul className="job-bullets">
              <li>Led a developer squad of 4 in designing and deploying <strong>BastaxCasino</strong>, a full-stack casino gaming platform for European markets, using NodeJS, ReactJS, MongoDB, and Nginx.</li>
              <li>Architected the MongoDB schema from scratch, optimizing real-time transaction processing, bets logging, and achieving 99.9% uptime.</li>
              <li>Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards.</li>
              <li>Configured microservices for Banking transactions incorporating Redis caches and Kafka event streams.</li>
              <li>Tested iGaming API connections between RGS and slot games, analyzing logs for regulatory compliance audits.</li>
              <li>Designed APIs with Swagger documentation and resolved security/quality issues identified by SonarQube.</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="job-header">
              <div className="job-title-company">
                <strong>Full Stack MERN Developer</strong>
                <span className="divider">|</span>
                <span>Zapbuild Technologies</span>
              </div>
              <span className="job-duration">Mar 2022 – Oct 2023</span>
            </div>
            <span className="job-location">Mohali, India</span>
            <ul className="job-bullets">
              <li>Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI.</li>
              <li>Developed custom role-based APIs from scratch to support admin, suppliers, and customer streams.</li>
              <li>Established efficient database schemas and tables in MySQL for inventory ledger management.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2>Technical Expertise & Skills</h2>
          <div className="skills-grid-resume">
            <div className="skills-col">
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript, C++ (Competitive DSA), HTML5, CSS3
            </div>
            <div className="skills-col">
              <strong>Frameworks:</strong> Node.js, Express.js, React.js, Next.js, Material UI
            </div>
            <div className="skills-col">
              <strong>Databases:</strong> MySQL, MongoDB, Redis (In-memory storage)
            </div>
            <div className="skills-col">
              <strong>Brokerage & Tools:</strong> Apache Kafka, Nginx, PM2, Docker, Git, Swagger, SonarQube
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="resume-section">
          <h2>Key Engineering Deployments</h2>
          <div className="resume-project">
            <strong>BastaxCasino</strong>: Integrated betting algorithms, affiliate ledgers, and European regulatory compliance panels. (React + Node.js + MongoDB).
          </div>
          <div className="resume-project">
            <strong>Zapier, Google Calendar & Office 365 Automation</strong>: Dynamic automated task pipeline triggered by API webhooks.
          </div>
          <div className="resume-project">
            <strong>Decentralized AI & Blockchain Application</strong>: Web3 RBAC implementation modeled after the UMA Protocol.
          </div>
          <div className="resume-project">
            <strong>Food Store E-Commerce Platform</strong>: E-commerce shopping cart, payment gateways, and admin consoles.
          </div>
        </section>

        {/* Achievements */}
        <section className="resume-section">
          <h2>Achievements & Standing</h2>
          <ul className="achievements-bullets">
            <li><strong>GeeksForGeeks Campus Rank 1st</strong>: CGC Landran Campus. Solved over 1500+ problems across GFG & LeetCode.</li>
            <li><strong>LeetCode Maximum Rating 1753</strong>: 3 Star Developer status.</li>
            <li><strong>ICPC regionals Rank 613</strong>: Team Rank 613 in ICPC Amritapuri Regionals 2021.</li>
            <li><strong>Educator & Mentor</strong>: Guides over 200+ engineering students in coding foundations, and hosts a DSA/MERN technical YouTube channel.</li>
          </ul>
        </section>
      </div>

      <style>{`
        .recruiter-resume-view {
          background-color: #f1f5f9;
          min-height: 100vh;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #1e293b;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .resume-controls {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 800px;
          margin-bottom: 24px;
        }

        .resume-paper {
          background-color: #ffffff;
          width: 100%;
          max-width: 800px;
          padding: 56px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .resume-header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 20px;
          gap: 20px;
        }

        .header-left {
          flex-grow: 1;
        }

        .resume-header h1 {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .resume-header .subtitle {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          margin: 6px 0 12px 0;
        }

        .resume-header .summary {
          font-size: 12.5px;
          line-height: 1.5;
          color: #475569;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
          align-items: flex-end;
          justify-content: center;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .contact-line a {
          color: #0f172a;
          text-decoration: none;
        }

        .contact-line a:hover {
          text-decoration: underline;
        }

        .resume-section h2 {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0f172a;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        .resume-job {
          margin-bottom: 20px;
        }

        .resume-job:last-child {
          margin-bottom: 0;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .job-title-company {
          color: #0f172a;
        }

        .job-title-company strong {
          font-weight: 700;
        }

        .job-title-company .divider {
          color: #94a3b8;
          margin: 0 8px;
        }

        .job-duration {
          color: #475569;
          font-weight: 500;
        }

        .job-location {
          font-size: 11px;
          color: #64748b;
          display: block;
          margin: 2px 0 8px 0;
        }

        .job-bullets {
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .job-bullets li {
          font-size: 12px;
          line-height: 1.5;
          color: #334155;
        }

        .skills-grid-resume {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .skills-col {
          font-size: 12px;
          color: #334155;
          line-height: 1.4;
        }

        .skills-col strong {
          color: #0f172a;
          font-weight: 600;
        }

        .resume-project {
          font-size: 12px;
          color: #334155;
          margin-bottom: 8px;
        }

        .resume-project strong {
          color: #0f172a;
        }

        .achievements-bullets {
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .achievements-bullets li {
          font-size: 12px;
          color: #334155;
        }

        /* Print media layout overrides */
        @media print {
          body {
            background-color: #ffffff !important;
          }
          .recruiter-resume-view {
            background-color: #ffffff !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-paper {
            padding: 0 !important;
            box-shadow: none !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
