import React from 'react';
import { Cpu, Server, Layout, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Cpu size={18} />,
      items: ['JavaScript', 'TypeScript', 'SQL', 'NoSQL', 'C++']
    },
    {
      title: 'Node.js Ecosystem',
      icon: <Server size={18} />,
      items: ['Express.js', 'NestJS', 'TypeORM', 'Mongoose', 'Redis', 'Kafka', 'JWT', 'Socket.IO', 'Jest', 'Mocha']
    },
    {
      title: 'Angular Expertise',
      icon: <Layout size={18} />,
      items: ['Angular CLI', 'RxJS', 'Angular Material', 'NgRx', 'Reactive Forms', 'Lazy Loading', 'Jasmine', 'Karma']
    },
    {
      title: 'Other Tech & Tools',
      icon: <ShieldCheck size={18} />,
      items: ['React', 'MongoDB', 'MySQL', 'Docker', 'Git', 'BitBucket', 'Swagger', 'Stoplight', 'Nginx', 'Next.js', 'Webpack', 'Vite', 'CI/CD (Jenkins/GitHub Actions)', 'SonarQube', 'Postman']
    },
    {
      title: 'Domains & Core Strengths',
      icon: <ShieldCheck size={18} />,
      items: ['API Development', 'Microservices Architecture', 'Payment Gateways', 'Real-Time Apps', 'Role-Based Access Control (RBAC)', 'System Design', 'Database Optimization', 'DevOps & Automation']
    }
  ];

  return (
    <section id="skills" className="skills-section dark-section">
      <div className="skills-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Tech Matrix</span>
        <h2 className="section-title light">Engineered Capabilities</h2>
        <p className="section-subtitle light">
          A modular overview of my programming languages, frameworks, developer environments, and specialized engineering disciplines.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`skill-box ${cat.title === 'Node.js Ecosystem' || cat.title === 'Other Tech & Tools' ? 'wide-box' : ''}`}>
              <div className="skill-box-header">
                <div className="skill-icon-wrapper">{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              
              <div className="skills-chips">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <span className="skill-bullet"></span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .skills-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(160, 175, 238, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 175, 238, 0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 1;
          pointer-events: none;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .skill-box {
          background-color: var(--bg-darker);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          padding: 28px;
          transition: var(--transition-normal);
        }

        .skill-box:hover {
          border-color: rgba(160, 175, 238, 0.3);
          transform: translateY(-2px);
        }

        .wide-box {
          grid-column: span 1;
        }

        .skill-box-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.06);
          padding-bottom: 16px;
        }

        .skill-icon-wrapper {
          width: 32px;
          height: 32px;
          background-color: rgba(160, 175, 238, 0.1);
          color: var(--accent-lavender);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-cat-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-light);
        }

        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(245, 243, 239, 0.04);
          border: 1px solid rgba(245, 243, 239, 0.06);
          padding: 6px 12px;
          border-radius: 6px;
          transition: var(--transition-fast);
        }

        .skill-chip:hover {
          background-color: rgba(160, 175, 238, 0.1);
          border-color: rgba(160, 175, 238, 0.3);
        }

        .skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-lavender);
        }

        .skill-name {
          font-size: 13px;
          color: var(--text-muted-light);
          font-family: var(--font-sans);
        }

        .skill-chip:hover .skill-name {
          color: var(--text-light);
        }

        @media (min-width: 900px) {
          .wide-box {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
}
