import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  {
    phase: '01',
    title: 'Understand Requirements',
    icon: '🔍',
    color: '#63b3ed',
    desc: 'Deep-dive into business requirements. Map edge cases, scalability needs, and non-functional requirements.',
    details: ['Stakeholder interviews', 'API contract design', 'Non-functional requirements', 'Load estimation'],
    duration: '1-2 days'
  },
  {
    phase: '02',
    title: 'System Design',
    icon: '🏗️',
    color: '#b794f4',
    desc: 'Architecture blueprint using HLD + LLD. Choose tech stack based on tradeoffs, not trends.',
    details: ['HLD Diagrams', 'DB schema design', 'API endpoint contract', 'Capacity planning'],
    duration: '1-3 days'
  },
  {
    phase: '03',
    title: 'Database Schema',
    icon: '🗄️',
    color: '#f6ad55',
    desc: 'Design normalized/denormalized schemas, indexes, and relationships before writing a single line of code.',
    details: ['ER Diagram', 'Compound indexes', 'Foreign key strategy', 'Migration scripts'],
    duration: '0.5-1 day'
  },
  {
    phase: '04',
    title: 'Core API Development',
    icon: '🔧',
    color: '#68d391',
    desc: 'Build backend with TDD. Write tests first, implement logic, refactor for performance.',
    details: ['Unit tests (Jest)', 'API endpoints', 'Business logic', 'Error handling'],
    duration: '3-7 days'
  },
  {
    phase: '05',
    title: 'Integration & Events',
    icon: '⚡',
    color: '#fc8181',
    desc: 'Wire Kafka queues, Redis caching, webhooks, and third-party APIs. Stress test each integration.',
    details: ['Kafka producers', 'Redis caching layer', 'Webhook handlers', 'External API mocks'],
    duration: '2-4 days'
  },
  {
    phase: '06',
    title: 'Review & Deploy',
    icon: '🚀',
    color: '#10b981',
    desc: 'Code review, SonarQube scan, load testing, CI/CD pipeline, Nginx configuration, PM2 cluster.',
    details: ['PR review', 'Load testing (k6)', 'CI/CD pipeline', 'Nginx + SSL setup'],
    duration: '1-2 days'
  },
];

export default function DevelopmentWorkflow() {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [flowActive, setFlowActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlowActive(true);
          STEPS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, i]);
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dev-workflow" className="workflow-section dark-section" ref={sectionRef}>
      <div className="wf-bg-pattern"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Engineering Process</span>
        <h2 className="section-title light">How I Build Software</h2>
        <p className="section-subtitle light">
          My battle-tested 6-phase engineering workflow — from requirement gathering to production deployment. 
          Click any phase to inspect the details.
        </p>

        {/* Flow diagram */}
        <div className="workflow-pipeline">
          {STEPS.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className={`wf-step ${visibleSteps.includes(i) ? 'visible' : ''} ${activeStep === i ? 'active' : ''}`}
                style={{ '--step-color': step.color, animationDelay: `${i * 0.15}s` }}
                onClick={() => setActiveStep(prev => prev === i ? null : i)}
                data-cursor="Inspect"
              >
                {/* Phase number */}
                <div className="wf-phase font-mono" style={{ color: step.color }}>{step.phase}</div>

                {/* Icon */}
                <div className="wf-icon-ring">
                  <span className="wf-icon">{step.icon}</span>
                  <div className="wf-ring-pulse" style={{ borderColor: step.color }}></div>
                </div>

                {/* Title */}
                <div className="wf-title">{step.title}</div>

                {/* Duration badge */}
                <div className="wf-duration font-mono" style={{ color: step.color }}>{step.duration}</div>
              </div>

              {/* Connector arrow */}
              {i < STEPS.length - 1 && (
                <div className={`wf-connector ${flowActive ? 'flowing' : ''}`}>
                  <div className="connector-track">
                    <div className="connector-flow" style={{ animationDelay: `${i * 0.3}s` }}></div>
                  </div>
                  <span className="connector-arrow" style={{ color: STEPS[i + 1].color }}>›</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Expanded detail card */}
        {activeStep !== null && (
          <div
            className="wf-detail-card"
            style={{ '--step-color': STEPS[activeStep].color, borderColor: STEPS[activeStep].color + '50' }}
          >
            <div className="wf-detail-header">
              <span className="wf-detail-icon">{STEPS[activeStep].icon}</span>
              <div>
                <span className="font-mono wf-detail-phase" style={{ color: STEPS[activeStep].color }}>
                  PHASE {STEPS[activeStep].phase}
                </span>
                <h3 className="wf-detail-title">{STEPS[activeStep].title}</h3>
              </div>
              <span className="wf-detail-dur font-mono" style={{ color: STEPS[activeStep].color }}>
                ⏱ {STEPS[activeStep].duration}
              </span>
            </div>

            <p className="wf-detail-desc">{STEPS[activeStep].desc}</p>

            <div className="wf-detail-tasks">
              {STEPS[activeStep].details.map((d, i) => (
                <div key={i} className="wf-task-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="wf-task-dot" style={{ background: STEPS[activeStep].color }}></span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics row */}
        <div className="wf-metrics">
          <div className="wf-metric">
            <span className="wf-metric-val font-mono" style={{ color: '#10b981' }}>100+</span>
            <span className="wf-metric-label">APIs Delivered</span>
          </div>
          <div className="wf-metric">
            <span className="wf-metric-val font-mono" style={{ color: '#b794f4' }}>99.9%</span>
            <span className="wf-metric-label">Uptime Maintained</span>
          </div>
          <div className="wf-metric">
            <span className="wf-metric-val font-mono" style={{ color: '#f6ad55' }}>3yr+</span>
            <span className="wf-metric-label">Production Experience</span>
          </div>
          <div className="wf-metric">
            <span className="wf-metric-val font-mono" style={{ color: '#fc8181' }}>0</span>
            <span className="wf-metric-label">P0 Incidents Caused</span>
          </div>
        </div>
      </div>

      <style>{`
        .workflow-section {
          background: linear-gradient(180deg, #06080d 0%, var(--bg-darker) 100%);
          border-bottom: 1px solid rgba(245,243,239,0.08);
          position: relative;
          overflow: hidden;
        }

        .wf-bg-pattern {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(94,90,209,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Pipeline */
        .workflow-pipeline {
          display: flex;
          align-items: flex-start;
          gap: 0;
          overflow-x: auto;
          padding: 16px 0 28px;
          margin-bottom: 32px;
        }

        .wf-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 120px;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          padding: 12px 8px;
          border-radius: 12px;
          border: 1px solid transparent;
        }

        .wf-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wf-step:hover, .wf-step.active {
          background: rgba(245,243,239,0.04);
          border-color: var(--step-color);
        }

        .wf-phase {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .wf-icon-ring {
          position: relative;
          width: 56px; height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wf-icon {
          font-size: 28px;
          position: relative;
          z-index: 1;
        }

        .wf-ring-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .wf-step:hover .wf-ring-pulse,
        .wf-step.active .wf-ring-pulse {
          opacity: 1;
          animation: ringPulse 1.5s ease-in-out infinite;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }

        .wf-title {
          font-size: 11px;
          text-align: center;
          color: rgba(245,243,239,0.7);
          font-weight: 500;
          line-height: 1.3;
          max-width: 100px;
        }

        .wf-step.active .wf-title {
          color: var(--step-color);
          font-weight: 700;
        }

        .wf-duration {
          font-size: 9px;
          letter-spacing: 0.05em;
          opacity: 0.6;
        }

        /* Connector */
        .wf-connector {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          padding: 0 4px;
          min-width: 40px;
          align-self: center;
          padding-bottom: 28px;
        }

        .connector-track {
          width: 100%;
          height: 2px;
          background: rgba(245,243,239,0.08);
          border-radius: 1px;
          overflow: hidden;
          position: relative;
        }

        .connector-flow {
          height: 100%;
          width: 40%;
          background: linear-gradient(90deg, transparent, var(--accent-lavender), transparent);
          animation: flowAnim 2s linear infinite;
        }

        @keyframes flowAnim {
          from { transform: translateX(-200%); }
          to { transform: translateX(400%); }
        }

        .connector-arrow {
          font-size: 18px;
          font-weight: 300;
          opacity: 0.4;
        }

        /* Detail card */
        .wf-detail-card {
          background: rgba(245,243,239,0.03);
          border: 1px solid;
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 32px;
          animation: fadeIn 0.35s ease;
        }

        .wf-detail-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(245,243,239,0.06);
          padding-bottom: 14px;
        }

        .wf-detail-icon { font-size: 32px; }

        .wf-detail-phase {
          font-size: 9px;
          letter-spacing: 0.15em;
          display: block;
          margin-bottom: 4px;
        }

        .wf-detail-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-light);
        }

        .wf-detail-dur {
          margin-left: auto;
          font-size: 12px;
          white-space: nowrap;
        }

        .wf-detail-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted-light);
          margin-bottom: 16px;
        }

        .wf-detail-tasks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .wf-task-item {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 100px;
          padding: 5px 12px;
          font-size: 11px;
          color: rgba(245,243,239,0.7);
          animation: fadeIn 0.3s ease both;
        }

        .wf-task-dot {
          width: 5px; height: 5px; border-radius: 50%;
        }

        /* Metrics */
        .wf-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .wf-metric {
          background: rgba(245,243,239,0.03);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: 0.2s;
        }

        .wf-metric:hover {
          background: rgba(245,243,239,0.06);
          transform: translateY(-2px);
        }

        .wf-metric-val {
          font-size: 28px;
          font-weight: 700;
          display: block;
          margin-bottom: 6px;
        }

        .wf-metric-label {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
        }

        @media (max-width: 900px) {
          .wf-metrics { grid-template-columns: repeat(2, 1fr); }
          .workflow-pipeline { gap: 0; }
        }

        @media (max-width: 600px) {
          .wf-metrics { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </section>
  );
}
