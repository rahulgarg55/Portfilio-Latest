import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Play } from 'lucide-react';

export default function Experience({ experiences = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Backup experiences matching the CV
  const backupExperiences = [
    {
      id: 1,
      role: 'Mid Level Software Engineer',
      company: 'Jupitice Justice Technologies Pvt. Ltd.',
      duration: 'Aug 2025 – Present',
      location: 'IT Park, Chandigarh',
      description: [
        "Worked on Supreme Court and High Court official websites, fetching and processing real-time judicial data and integrating it into production-grade applications.",
        "Developed and integrated Offline KYC (Know Your Customer) solutions for real-world use cases, ensuring data accuracy, validation, and compliance.",
        "Fetched and processed NHAI (National Highways Authority of India) data, structured large datasets, and prepared them for government database insertion.",
        "Designed and optimized database schemas for high-volume government data handling.",
        "Improved application performance by implementing caching mechanisms using key-value storage, significantly reducing database load.",
        "Wrote automation and data-processing scripts to clean, transform, and manage large datasets.",
        "Worked on a core product developing WhatsApp Business API integrations using webhooks for real-time messaging, notifications, and event handling.",
        "Contributed to Lok Adalat government project, handling legal and public service-related data with high reliability and security."
      ]
    },
    {
      id: 2,
      role: 'MERN Full Stack Developer',
      company: 'Basta Tech Solutions Pvt. Ltd.',
      duration: 'Oct 2023 – July 2025',
      location: 'Mohali, India',
      description: [
        "Led a team of 4 developers in designing and deploying BastaxCasino, a full-stack casino gaming platform for European markets, including admin and affiliate panels, using Node.js and ReactJS.",
        "Architected the MongoDB database schema from scratch, optimizing real-time transaction processing and scalability, achieving 99.9% uptime.",
        "Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards.",
        "Configured Nginx as a reverse proxy, PM2 for monitoring, and managed deployment via Termius, reducing deployment time by 50%.",
        "Developed microservices for a Banking Application, incorporating Redis and Kafka for high performance and scalability.",
        "Developed a Decentralized Application integrating AI and Blockchain technologies, implementing Role-Based Access Control (RBAC) inspired by the UMA Protocol."
      ]
    },
    {
      id: 3,
      role: 'Full Stack MERN Developer',
      company: 'Zapbuild Technologies',
      duration: 'Mar 2022 – Oct 2023',
      location: 'Mohali, India',
      description: [
        "Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI.",
        "Developed custom APIs from scratch to cater to various user roles including administrators, suppliers, and customers.",
        "Established efficient database schemas and tables in MySQL for inventory management and role-based access control (RBAC).",
        "Implemented administration features to manage suppliers, customers, and inventory streams."
      ]
    }
  ];

  const experienceList = experiences.length > 0 ? experiences : backupExperiences;
  const currentExp = experienceList[activeIndex] || experienceList[0];

  return (
    <section id="experience" className="experience-section dark-section">
      <div className="experience-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Interactive Pipeline</span>
        <h2 className="section-title light">Professional Chronology</h2>
        <p className="section-subtitle light">
          Click the pipeline execution nodes on the left to inspect logs, technical contributions, and system deployments.
        </p>

        <div className="pipeline-container">
          {/* Pipeline Left Selector (Nodes) */}
          <div className="pipeline-rail">
            {experienceList.map((exp, index) => (
              <React.Fragment key={exp.id}>
                {/* Node Connector Line */}
                {index > 0 && (
                  <div className={`rail-line ${index <= activeIndex ? 'active' : ''}`}></div>
                )}
                
                {/* Interactive Node Point */}
                <button
                  className={`rail-node ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select job at ${exp.company}`}
                >
                  <div className="rail-node-indicator">
                    <span className="rail-node-dot"></span>
                  </div>
                  <div className="rail-node-text">
                    <div className="rail-company">{exp.company.split(' ')[0]}</div>
                    <div className="rail-date">{exp.duration.split(' – ')[0]}</div>
                  </div>
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Details Pane (Inspection Log Window) */}
          <div className="pipeline-terminal">
            <div className="terminal-header">
              <div className="terminal-actions">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-title">inspection-logs // {currentExp?.company}</div>
              <div className="terminal-run">
                <Play size={10} style={{ marginRight: '4px' }} /> RUNNING
              </div>
            </div>
            
            <div className="terminal-body">
              <div className="job-header-details">
                <div className="job-role-info">
                  <h3 className="job-role">{currentExp?.role}</h3>
                  <h4 className="job-company">{currentExp?.company}</h4>
                </div>
                
                <div className="job-meta-tags">
                  <div className="meta-tag">
                    <Calendar size={12} />
                    <span>{currentExp?.duration}</span>
                  </div>
                  <div className="meta-tag">
                    <MapPin size={12} />
                    <span>{currentExp?.location}</span>
                  </div>
                </div>
              </div>

              <div className="job-log-output">
                <div className="log-line-prefix">system_log_output:</div>
                <ul className="log-bullets">
                  {currentExp?.description.map((bullet, i) => (
                    <li key={i} className="log-bullet-item">
                      <span className="log-arrow">&gt;</span>
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .experience-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(94, 90, 209, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          z-index: 1;
          pointer-events: none;
        }

        .pipeline-container {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 60px;
          position: relative;
          z-index: 2;
        }

        /* Timeline Rail Styling */
        .pipeline-rail {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          padding-left: 20px;
        }

        .rail-line {
          width: 2px;
          height: 60px;
          background-color: rgba(245, 243, 239, 0.1);
          margin-left: 17px;
          transition: var(--transition-slow);
        }

        .rail-line.active {
          background-color: var(--accent-lavender);
          box-shadow: 0 0 10px var(--accent-lavender);
        }

        .rail-node {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          text-align: left;
          padding: 8px 0;
          outline: none;
          width: 100%;
        }

        .rail-node-indicator {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid rgba(245, 243, 239, 0.1);
          background-color: var(--bg-darker);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
          z-index: 3;
        }

        .rail-node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(245, 243, 239, 0.3);
          transition: var(--transition-normal);
        }

        .rail-node:hover .rail-node-indicator {
          border-color: rgba(160, 175, 238, 0.6);
        }

        .rail-node.active .rail-node-indicator {
          border-color: var(--accent-lavender);
          background-color: var(--accent-lavender);
          box-shadow: 0 0 15px var(--accent-lavender);
        }

        .rail-node.active .rail-node-dot {
          background-color: var(--bg-darker);
          transform: scale(1.2);
        }

        .rail-node-text {
          transition: var(--transition-normal);
        }

        .rail-company {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: var(--text-muted-light);
        }

        .rail-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(245, 243, 239, 0.45);
          margin-top: 2px;
        }

        .rail-node.active .rail-company {
          color: var(--text-light);
          font-weight: 600;
        }

        .rail-node.active .rail-date {
          color: var(--accent-lavender);
        }

        /* Inspection Console Panel Styling */
        .pipeline-terminal {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        .terminal-header {
          background-color: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(245, 243, 239, 0.04);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .terminal-actions {
          display: flex;
          gap: 6px;
        }

        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .terminal-dot.red { background-color: #ef4444; }
        .terminal-dot.yellow { background-color: #eab308; }
        .terminal-dot.green { background-color: #22c55e; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted-light);
        }

        .terminal-run {
          display: inline-flex;
          align-items: center;
          background-color: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 2px 8px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
        }

        .terminal-body {
          padding: 40px;
          max-height: 500px;
          overflow-y: auto;
        }

        .job-header-details {
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
          padding-bottom: 24px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
        }

        .job-role {
          font-size: 24px;
          font-weight: 400;
          color: var(--text-light);
          letter-spacing: -0.02em;
        }

        .job-company {
          font-size: 16px;
          font-weight: 400;
          color: var(--accent-lavender);
          margin-top: 4px;
        }

        .job-meta-tags {
          display: flex;
          gap: 16px;
        }

        .meta-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted-light);
          border: 1px solid rgba(245, 243, 239, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .job-log-output {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .log-line-prefix {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-lavender);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .log-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .log-bullet-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .log-arrow {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--accent-lavender);
          margin-top: 1px;
        }

        .log-bullet-item p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-light);
        }

        @media (max-width: 900px) {
          .pipeline-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .pipeline-rail {
            flex-direction: row;
            justify-content: space-between;
            overflow-x: auto;
            padding-left: 0;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(245, 243, 239, 0.1);
          }
          
          .rail-line {
            display: none;
          }

          .rail-node {
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: auto;
          }
        }
        
        @media (max-width: 600px) {
          .terminal-body {
            padding: 20px;
          }
          .job-role {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
