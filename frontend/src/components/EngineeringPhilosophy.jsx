import React, { useState } from 'react';
import { Compass, BookOpen, Star, ArrowDown, ChevronRight, Activity } from 'lucide-react';
import Card3D from './Card3D';

export default function EngineeringPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const values = [
    {
      title: '🗂️ Database-First Architecture',
      desc: 'I believe scaling starts at the database. Designing clean relational index layouts and partition keys is crucial before writing code.'
    },
    {
      title: '⚙️ Decoupled Streaming Pipelines',
      desc: 'Using Kafka event brokers decouples fast API writers from slower DB operations, shielding schemas from heavy load spikes.'
    },
    {
      title: '⚡ Proactive Memory Caching',
      desc: 'Placing Redis caches around high-traffic endpoints cuts API latency down from 150ms to 4ms while reducing DB queries.'
    },
    {
      title: '🛡️ Resiliency & Mock Fallbacks',
      desc: 'Software must remain operational. Designing robust mock fallbacks when external DBs or APIs go down ensures continuous uptime.'
    }
  ];

  const journeySteps = [
    {
      year: '2019 - 2023',
      title: 'Competitive DSA Student',
      company: 'CGC Landran Campus',
      details: 'Acquired Campus Rank 1st on GeeksForGeeks, solved 1500+ problems, and secured Team Rank 613 in ICPC Regionals 2021.'
    },
    {
      year: '2021 - Present',
      title: 'Technical YouTube Educator',
      company: 'Digital Channels',
      details: 'Educated over 200+ junior engineers on Data Structures & Algorithms, MERN stacks, and system scale principles.'
    },
    {
      year: '2022 - 2023',
      title: 'MERN Stack Developer',
      company: 'Zapbuild Technologies',
      details: 'Built full-stack inventory data systems utilizing MySQL tables, RBAC user interfaces, and Express endpoints.'
    },
    {
      year: '2023 - 2025',
      title: 'Lead MERN Developer',
      company: 'Basta Tech Solutions',
      details: 'Architected BastaxCasino iGaming backend. Implemented Redis cache nodes, Kafka bet queues, Nginx reverse proxies, and PM2 logs.'
    },
    {
      year: '2025 - Present',
      title: 'Mid Level Software Engineer',
      company: 'Jupitice Justice Technologies',
      details: 'Engineering government-tier Supreme/High Court scraper pipelines, Offline KYC integrations, and WhatsApp Business Meta webhooks.'
    }
  ];

  const selectStep = (index) => {
    setActiveStep(index);
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 15,
        action: `Explored career journey node: ${journeySteps[index].title}`
      }
    }));
  };

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        <span className="section-tag">Engineering Core</span>
        <h2 className="section-title">Philosophy & Developer Journey</h2>
        <p className="section-subtitle">
          Explore my core architectural beliefs and track the milestones of my developer journey from competitive coding to leading production systems.
        </p>

        <div className="philosophy-grid">
          
          {/* Left: Core values cards */}
          <div className="values-column">
            <h3 className="sub-section-title">🛡️ Architectural Principles</h3>
            <div className="values-list-cards">
              {values.map((v, i) => (
                <Card3D key={i} className="card value-card" maxTilt={8}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Right: Interactive Journey Map */}
          <div className="journey-column">
            <h3 className="sub-section-title">🚀 Interactive Journey Map</h3>
            <p className="column-explanation">Click steps to inspect project milestones and engineering accomplishments:</p>
            
            <div className="journey-map-wrapper">
              
              {/* Timeline timeline bar indicators */}
              <div className="journey-nodes-timeline font-mono">
                {journeySteps.map((s, idx) => (
                  <div 
                    key={idx} 
                    className={`timeline-step-node ${activeStep === idx ? 'active' : ''}`}
                    onClick={() => selectStep(idx)}
                  >
                    <div className="timeline-badge-circle">
                      {idx + 1}
                    </div>
                    <div className="step-meta-info">
                      <span className="step-year">{s.year}</span>
                      <strong className="step-title-text">{s.title}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inspector panel showing details */}
              <div className="journey-step-details font-mono">
                <div className="details-header">
                  <span>milestone_details // step_{activeStep + 1}</span>
                  <span className="details-company">{journeySteps[activeStep].company}</span>
                </div>
                <div className="details-body">
                  <h4>{journeySteps[activeStep].title}</h4>
                  <p className="details-desc">{journeySteps[activeStep].details}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
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
          background-color: var(--bg-darker);
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
          background-color: var(--bg-darker);
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
      `}</style>
    </section>
  );
}
