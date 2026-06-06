import React, { useState } from 'react';
import { Download, FileText, Eye, Check } from 'lucide-react';

const RESUME_SECTIONS = [
  { label: 'Contact & Summary', done: true, icon: '👤' },
  { label: 'Work Experience (3 companies)', done: true, icon: '💼' },
  { label: 'Tech Stack & Skills', done: true, icon: '🛠️' },
  { label: 'Projects (Casino, Judicial, WhatsApp)', done: true, icon: '🗂️' },
  { label: 'Achievements & LeetCode Stats', done: true, icon: '🏆' },
  { label: 'Education & Certifications', done: true, icon: '🎓' },
];

export default function ResumeDownload() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [viewMode, setViewMode] = useState('card');

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);

      // Trigger actual download as text file with resume content
      const resumeContent = `
RAHUL GARG
Mid-Level Software Engineer
📧 gargr0109@gmail.com | 📞 +91 78072 21279
📍 Sec 94, JLPL Mohali, Punjab, India

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

JUPITICE JUSTICE TECHNOLOGIES | Software Engineer | 2024 – Present
• Built ETL pipeline scraping 100k+ Supreme Court & High Court records daily
• Integrated WhatsApp Business API for Lok Adalat case notifications
• Developed offline KYC system and real-time courtroom dashboards
• Stack: NestJS, MySQL, Redis, WhatsApp Meta API, React

BASTA TECH – BASTAXCASINO | Backend Engineer | 2022 – 2024  
• Architected entire casino backend: Kafka pipelines, Redis cache (94% hit rate)
• Processed 50,000+ daily bet transactions with 99.9% uptime
• Built 100+ REST APIs with Socket.IO real-time updates
• Stack: Node.js, Apache Kafka, Redis, MongoDB, Docker, Socket.IO

ZAPBUILD TECHNOLOGIES | Full Stack Developer | 2021 – 2022
• Built RBAC enterprise platforms with Zapier, Google Calendar, M365 integrations
• Developed food-store management system with real-time order tracking
• Stack: React, Node.js, MySQL, TypeORM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Backend: Node.js, Express.js, NestJS, TypeScript
Frontend: React.js, Next.js, Angular
Databases: MySQL, MongoDB, Redis, PostgreSQL
Event Systems: Apache Kafka, Bull Queue, WebSockets, Pub/Sub
DevOps: Docker, Nginx, PM2, GitHub Actions, SonarQube
APIs: WhatsApp Meta API, Zapier, Google Calendar, Microsoft 365

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• LeetCode Rating: 1753 (3-Star) | 1500+ problems solved
• Campus Rank #1 on GeeksForGeeks at CGC Landran
• ICPC Regional Qualifier 2021
• Mentored 200+ students in DSA | Reviewed 50+ CVs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

B.Tech – Computer Science Engineering | CGC Landran | 2018–2022

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HOBBIES & INTERESTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Professional Singer 🎤 | State-Level Badminton Player 🏸 | Guitarist 🎸 | Trekker 🏔️
`.trim();

      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Rahul_Garg_Resume_2025.txt';
      a.click();
      URL.revokeObjectURL(url);
    }, 1800);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-layout">
          {/* Left info */}
          <div className="resume-info">
            <span className="section-tag">Resume & CV</span>
            <h2 className="section-title">Download My<br />Resume</h2>
            <p className="section-subtitle">
              Updated June 2025 — includes 3+ years of experience, production system metrics, and project highlights optimized for ATS screening.
            </p>

            <div className="resume-checklist">
              {RESUME_SECTIONS.map((sec, i) => (
                <div key={i} className="resume-check-item">
                  <span className="rc-icon">{sec.icon}</span>
                  <span className="rc-label">{sec.label}</span>
                  <span className="rc-check"><Check size={12} /></span>
                </div>
              ))}
            </div>

            <div className="resume-meta font-mono">
              <span>📄 Last updated: June 2025</span>
              <span>📊 ATS score: 97/100</span>
              <span>🔍 Keywords: Kafka, Redis, Node.js, MySQL</span>
            </div>
          </div>

          {/* Resume preview card */}
          <div className="resume-preview-wrap">
            <div className="resume-preview-card">
              {/* Resume card content */}
              <div className="rp-header">
                <div className="rp-avatar">RG</div>
                <div className="rp-name-block">
                  <strong>Rahul Garg</strong>
                  <span>Mid-Level Software Engineer</span>
                  <span className="font-mono rp-location">📍 Mohali, India</span>
                </div>
                <div className="rp-contact-pills">
                  <span className="rp-pill">📧 Gmail</span>
                  <span className="rp-pill">📞 Phone</span>
                  <span className="rp-pill">💼 LinkedIn</span>
                </div>
              </div>

              <div className="rp-section">
                <div className="rp-section-title font-mono">EXPERIENCE</div>
                {[
                  { co: 'Jupitice', role: 'Software Engineer', yr: '2024–Now' },
                  { co: 'BastaxCasino', role: 'Backend Engineer', yr: '2022–2024' },
                  { co: 'Zapbuild', role: 'Full Stack Dev', yr: '2021–2022' },
                ].map((e, i) => (
                  <div key={i} className="rp-exp-row">
                    <div className="rp-exp-dot" style={{ background: ['#68d391', '#b794f4', '#63b3ed'][i] }}></div>
                    <div className="rp-exp-info">
                      <strong>{e.co}</strong>
                      <span>{e.role}</span>
                    </div>
                    <span className="rp-exp-yr font-mono">{e.yr}</span>
                  </div>
                ))}
              </div>

              <div className="rp-section">
                <div className="rp-section-title font-mono">KEY SKILLS</div>
                <div className="rp-skills">
                  {['Node.js', 'Kafka', 'Redis', 'MySQL', 'React', 'Docker'].map(s => (
                    <span key={s} className="rp-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="rp-section">
                <div className="rp-section-title font-mono">ACHIEVEMENTS</div>
                <div className="rp-achievements">
                  <span>🏆 LeetCode 1753</span>
                  <span>🥇 Campus Rank #1</span>
                  <span>🎤 Professional Singer</span>
                  <span>🏸 State Badminton</span>
                </div>
              </div>

              {/* Floating metrics on card */}
              <div className="rp-metric-overlay">
                <div className="rpm-item">
                  <span className="rpm-val font-mono" style={{ color: '#68d391' }}>99.9%</span>
                  <span className="rpm-label">Uptime</span>
                </div>
                <div className="rpm-item">
                  <span className="rpm-val font-mono" style={{ color: '#b794f4' }}>50k+</span>
                  <span className="rpm-label">Events/day</span>
                </div>
                <div className="rpm-item">
                  <span className="rpm-val font-mono" style={{ color: '#f6ad55' }}>1753</span>
                  <span className="rpm-label">LeetCode</span>
                </div>
              </div>
            </div>

            {/* Download buttons */}
            <div className="resume-actions">
              <button
                className={`download-btn ${downloading ? 'loading' : ''} ${downloaded ? 'done' : ''}`}
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? (
                  <><span className="dl-spinner"></span> Preparing...</>
                ) : downloaded ? (
                  <><Check size={18} /> Downloaded!</>
                ) : (
                  <><Download size={18} /> Download Resume</>
                )}
              </button>

              <a href="mailto:gargr0109@gmail.com?subject=Opportunity for Rahul Garg" className="email-btn">
                <FileText size={16} />
                Request Full PDF
              </a>
            </div>

            <p className="resume-note font-mono">
              💡 Tip: Send to recruiter@yourcompany.com — Rahul responds within 2 hours.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .resume-section {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .resume-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: start;
        }

        /* Checklist */
        .resume-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 28px 0;
        }

        .resume-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted-dark);
        }

        .rc-icon { font-size: 16px; width: 24px; text-align: center; }
        .rc-label { flex: 1; }

        .rc-check {
          width: 20px; height: 20px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          flex-shrink: 0;
        }

        .resume-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 11px;
          color: var(--text-muted-dark);
          letter-spacing: 0.03em;
        }

        /* Preview card */
        .resume-preview-wrap {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resume-preview-card {
          background: #fff;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }

        .resume-preview-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender), #fc8181);
        }

        .rp-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(17,28,45,0.08);
          flex-wrap: wrap;
        }

        .rp-avatar {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-lavender));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
        }

        .rp-name-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .rp-name-block strong { font-size: 15px; color: #1a1a2e; }
        .rp-name-block span:nth-child(2) { font-size: 11px; color: rgba(17,28,45,0.55); }
        .rp-location { font-size: 9px; color: rgba(17,28,45,0.35); letter-spacing: 0.05em; }

        .rp-contact-pills {
          display: flex;
          gap: 5px;
        }

        .rp-pill {
          font-size: 9px;
          background: rgba(94,90,209,0.08);
          border: 1px solid rgba(94,90,209,0.15);
          color: var(--accent-purple);
          border-radius: 100px;
          padding: 3px 8px;
          font-family: var(--font-mono);
        }

        .rp-section {
          margin-bottom: 14px;
        }

        .rp-section-title {
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.15em;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .rp-exp-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .rp-exp-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .rp-exp-info {
          flex: 1;
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .rp-exp-info strong { font-size: 12px; color: #1a1a2e; }
        .rp-exp-info span { font-size: 10px; color: rgba(17,28,45,0.45); }

        .rp-exp-yr {
          font-size: 9px;
          color: rgba(17,28,45,0.35);
          letter-spacing: 0.05em;
        }

        .rp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .rp-skill-tag {
          font-size: 10px;
          background: rgba(94,90,209,0.06);
          border: 1px solid rgba(94,90,209,0.12);
          color: var(--accent-purple);
          padding: 3px 9px;
          border-radius: 4px;
          font-family: var(--font-mono);
        }

        .rp-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 11px;
          color: rgba(17,28,45,0.55);
        }

        /* Overlay metrics */
        .rp-metric-overlay {
          position: absolute;
          bottom: 0; right: 0;
          background: linear-gradient(135deg, rgba(94,90,209,0.08), rgba(160,175,238,0.12));
          border-top: 1px solid rgba(94,90,209,0.12);
          border-left: 1px solid rgba(94,90,209,0.12);
          border-radius: 12px 0 16px 0;
          padding: 10px 16px;
          display: flex;
          gap: 16px;
        }

        .rpm-item { text-align: center; }
        .rpm-val { display: block; font-size: 13px; font-weight: 700; }
        .rpm-label { font-size: 9px; color: rgba(17,28,45,0.4); }

        /* Buttons */
        .resume-actions {
          display: flex;
          gap: 10px;
        }

        .download-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-dark);
          color: var(--text-light);
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          font-family: var(--font-sans);
        }

        .download-btn:hover:not(:disabled) {
          background: var(--accent-purple);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(94,90,209,0.3);
        }

        .download-btn.done {
          background: #10b981;
        }

        .download-btn.loading {
          opacity: 0.7;
          cursor: wait;
        }

        .dl-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .email-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          border-radius: 10px;
          padding: 13px 18px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
          font-family: var(--font-sans);
        }

        .email-btn:hover {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          transform: translateY(-2px);
        }

        .resume-note {
          font-size: 10px;
          color: var(--text-muted-dark);
          text-align: center;
          letter-spacing: 0.03em;
        }

        @media (max-width: 900px) {
          .resume-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
