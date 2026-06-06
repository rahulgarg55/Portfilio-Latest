import React, { useState, useEffect } from 'react';
import { ShieldAlert, Unlock, Download, Phone, Mail, Award, Lock, Sparkles } from 'lucide-react';
import Card3D from './Card3D';

export default function SecretVault() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentLvl, setCurrentLvl] = useState(1);

  useEffect(() => {
    // Check local storage level
    const lvl = localStorage.getItem('rahul_portfolio_level') || 1;
    setCurrentLvl(parseInt(lvl, 10));
    if (parseInt(lvl, 10) >= 5) {
      setUnlocked(true);
    }

    const handleLevelUp = (e) => {
      const nextLvl = e.detail.level;
      setCurrentLvl(nextLvl);
      if (nextLvl >= 5) {
        setUnlocked(true);
      }
    };

    window.addEventListener('level-up', handleLevelUp);
    return () => window.removeEventListener('level-up', handleLevelUp);
  }, []);

  return (
    <section id="secret-vault" className="secret-vault-section dark-section">
      <div className="system-grid-overlay"></div>
      <div className="container">
        
        {!unlocked ? (
          /* Locked Teaser View */
          <div className="locked-vault-card font-mono">
            <Lock size={48} className="lock-icon animated" />
            <h3 className="vault-title font-sans">🔒 Secret Engineering Vault</h3>
            <p className="vault-desc font-sans">
              This vault contains Rahul Garg's direct hotlines, PDF resume files, and core commercial transaction repositories. Unlocking it requires <strong>Level 5 Talent Partner</strong> status.
            </p>
            
            <div className="unlock-progress">
              <span>Your Current Level: <strong>Lvl {currentLvl} / 5</strong></span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${(currentLvl / 5) * 100}%` }}></div>
              </div>
            </div>
            
            <span className="quest-hint">💡 Complete sandbox missions, ask chatbot questions, and type terminal commands to collect XP!</span>
          </div>
        ) : (
          /* Unlocked Executive View */
          <div className="unlocked-vault-wrapper glow-border animation-zoom">
            <div className="unlocked-header">
              <Sparkles size={24} className="spark-icon" />
              <h3 className="unlocked-title">🔓 Secret Vault Unlocked!</h3>
              <span className="partner-status font-mono">STATUS: ELITE CO-FOUNDER PARTNER</span>
            </div>

            <div className="unlocked-split">
              
              {/* Left action panel */}
              <div className="vault-actions-pane font-mono">
                <h4 className="pane-subtitle font-sans">Direct Communication Channels:</h4>
                <div className="vault-hotlinks">
                  <a href="mailto:gargr0109@gmail.com" className="vault-action-row">
                    <Mail size={16} />
                    <span>gargr0109@gmail.com</span>
                  </a>
                  <a href="tel:+917807221279" className="vault-action-row">
                    <Phone size={16} />
                    <span>+91 78072 21279</span>
                  </a>
                  <a href="/api/portfolio" target="_blank" rel="noreferrer" className="vault-action-row">
                    <Download size={16} />
                    <span>Download Raw JSON Data API</span>
                  </a>
                </div>
              </div>

              {/* Right highlights summary */}
              <div className="vault-highlights-pane font-mono">
                <h4 className="pane-subtitle font-sans">Executive Core Competencies:</h4>
                <ul className="highlight-list font-sans">
                  <li><strong>1500+ solved problems</strong> across GFG & LeetCode (3 Star developer).</li>
                  <li>Experienced designing event-driven <strong>Apache Kafka transactional bet processes</strong>.</li>
                  <li>Highly capable of engineering data scrapers handling <strong>100k+ judicial records</strong>.</li>
                  <li><strong>Fast response times</strong>: Caching architectures via Redis key-value storage nodes.</li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
