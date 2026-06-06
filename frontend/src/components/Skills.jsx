import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Server, Layout, ShieldCheck, Zap, Database, Globe, Code } from 'lucide-react';

const SKILL_BARS = [
  { name: 'Node.js / Express', level: 92, color: '#68d391', years: '3+ yrs' },
  { name: 'React / Next.js', level: 88, color: '#63b3ed', years: '3+ yrs' },
  { name: 'MySQL (Schemas & Optimization)', level: 90, color: '#f6ad55', years: '3+ yrs' },
  { name: 'Redis (Caching Patterns)', level: 85, color: '#fc8181', years: '2+ yrs' },
  { name: 'Apache Kafka (Event Streams)', level: 80, color: '#b794f4', years: '2+ yrs' },
  { name: 'MongoDB / Mongoose', level: 83, color: '#9ae6b4', years: '2+ yrs' },
  { name: 'TypeScript', level: 82, color: '#a0afee', years: '2+ yrs' },
  { name: 'Docker / Nginx / DevOps', level: 78, color: '#76e4f7', years: '2+ yrs' },
];

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: <Code size={18} />,
    color: '#63b3ed',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'NoSQL', 'C++']
  },
  {
    title: 'Node.js Ecosystem',
    icon: <Server size={18} />,
    color: '#68d391',
    items: ['Express.js', 'NestJS', 'TypeORM', 'Mongoose', 'Redis', 'Kafka', 'JWT', 'Socket.IO', 'Jest']
  },
  {
    title: 'Frontend & UI',
    icon: <Layout size={18} />,
    color: '#b794f4',
    items: ['React', 'Next.js', 'Angular CLI', 'RxJS', 'NgRx', 'Vite', 'Webpack']
  },
  {
    title: 'Databases & Cache',
    icon: <Database size={18} />,
    color: '#f6ad55',
    items: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL', 'DynamoDB']
  },
  {
    title: 'DevOps & Cloud',
    icon: <Zap size={18} />,
    color: '#fc8181',
    items: ['Docker', 'Nginx', 'PM2', 'Git', 'CI/CD', 'Jenkins', 'GitHub Actions', 'SonarQube']
  },
  {
    title: 'Integrations & APIs',
    icon: <Globe size={18} />,
    color: '#76e4f7',
    items: ['WhatsApp Business API', 'Zapier', 'Google Calendar', 'Microsoft 365', 'Meta APIs', 'Swagger / Stoplight']
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Animate bars one by one
          SKILL_BARS.forEach((skill, i) => {
            setTimeout(() => {
              setAnimatedBars(prev => ({ ...prev, [skill.name]: skill.level }));
            }, 200 + i * 120);
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
    <section id="skills" className="skills-section dark-section" ref={sectionRef}>
      <div className="skills-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Tech Matrix</span>
        <h2 className="section-title light">Engineered Capabilities</h2>
        <p className="section-subtitle light">
          A modular overview of programming languages, frameworks, databases, and specialized engineering disciplines.
        </p>

        {/* Animated Skill Bars */}
        <div className="skill-bars-section">
          <h3 className="subsection-title font-mono">// PROFICIENCY DEPTH</h3>
          <div className="skill-bars-grid">
            {SKILL_BARS.map((skill, i) => (
              <div key={i} className={`skill-bar-row ${visible ? 'visible' : ''}`} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <div className="skill-bar-meta">
                    <span className="skill-years font-mono">{skill.years}</span>
                    <span className="skill-level font-mono" style={{ color: skill.color }}>
                      {animatedBars[skill.name] || 0}%
                    </span>
                  </div>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${animatedBars[skill.name] || 0}%`,
                      background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                      boxShadow: `0 0 12px ${skill.color}40`,
                      transition: `width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s`,
                    }}
                  >
                    <span className="skill-bar-shine"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chip categories */}
        <div className="skills-categories-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className={`skill-box skill-box-hover ${visible ? 'visible' : ''}`}
              style={{ '--cat-color': cat.color, animationDelay: `${idx * 0.12}s` }}>
              <div className="skill-box-header">
                <div className="skill-icon-wrapper" style={{ color: cat.color, background: cat.color + '18' }}>
                  {cat.icon}
                </div>
                <h3 className="skill-cat-title" style={{ color: 'var(--text-light)' }}>{cat.title}</h3>
              </div>
              <div className="skills-chips">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip skill-chip-glow"
                    style={{ '--chip-color': cat.color }}>
                    <span className="skill-bullet" style={{ background: cat.color }}></span>
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
          border-bottom: 1px solid rgba(245,243,239,0.1);
        }

        .skills-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(160,175,238,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160,175,238,0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 1; pointer-events: none;
        }

        .container { position: relative; z-index: 2; }

        /* Skill Bars */
        .skill-bars-section {
          margin-bottom: 48px;
        }

        .subsection-title {
          font-size: 11px;
          color: var(--accent-lavender);
          letter-spacing: 0.15em;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .skill-bars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .skill-bar-row {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .skill-bar-row.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .skill-bar-name {
          font-size: 13px;
          color: var(--text-light);
          font-weight: 500;
        }

        .skill-bar-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-years {
          font-size: 10px;
          color: rgba(245,243,239,0.35);
        }

        .skill-level {
          font-size: 12px;
          font-weight: 700;
          min-width: 34px;
          text-align: right;
        }

        .skill-bar-track {
          height: 8px;
          background: rgba(245,243,239,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }

        .skill-bar-shine {
          position: absolute;
          top: 0; left: -100%; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          to { left: 200%; }
        }

        /* Category chips */
        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .skill-box {
          background: var(--bg-darker);
          border: 1px solid rgba(245,243,239,0.06);
          border-radius: 12px;
          padding: 22px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s;
        }

        .skill-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-box-hover:hover {
          border-color: var(--cat-color, rgba(160,175,238,0.3));
          box-shadow: 0 8px 24px rgba(0,0,0,0.2), 0 0 0 1px var(--cat-color, transparent);
          transform: translateY(-4px) !important;
        }

        .skill-box-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(245,243,239,0.05);
          padding-bottom: 14px;
        }

        .skill-icon-wrapper {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .skill-cat-title {
          font-size: 15px;
          font-weight: 500;
        }

        .skills-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.06);
          padding: 5px 11px;
          border-radius: 6px;
          transition: all 0.2s;
          cursor: default;
        }

        .skill-chip-glow:hover {
          background: rgba(245,243,239,0.08);
          border-color: var(--chip-color, rgba(160,175,238,0.3));
          box-shadow: 0 0 8px var(--chip-color, transparent);
          transform: translateY(-1px);
        }

        .skill-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
        }

        .skill-name {
          font-size: 12px;
          color: var(--text-muted-light);
        }

        .skill-chip-glow:hover .skill-name {
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .skill-bars-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
