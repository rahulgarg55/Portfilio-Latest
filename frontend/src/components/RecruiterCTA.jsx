import React, { useState, useEffect } from 'react';
import { Phone, Mail, X, Zap, Calendar } from 'lucide-react';

export default function RecruiterCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [pulsing, setPulsing] = useState(true);

  useEffect(() => {
    // Show after 8 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsing(p => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Floating pill button */}
      {!visible && (
        <button
          className="recruiter-pill-btn"
          onClick={() => setVisible(true)}
          title="Connect with Rahul"
        >
          <span className={`pill-dot ${pulsing ? 'pulse' : ''}`}></span>
          <Phone size={14} />
          <span>Hire Rahul</span>
        </button>
      )}

      {/* Expanded CTA card */}
      {visible && (
        <div className="recruiter-cta-card">
          <button className="cta-close" onClick={() => { setVisible(false); setDismissed(true); }}>
            <X size={14} />
          </button>

          <div className="cta-header">
            <div className="cta-avatar">RG</div>
            <div className="cta-intro">
              <span className="cta-available">
                <span className="avail-dot"></span>
                Available Now
              </span>
              <strong>Rahul Garg</strong>
              <small>Mid-Level Software Engineer</small>
            </div>
          </div>

          <div className="cta-message">
            👋 Hi recruiter! I'm open to exciting opportunities in backend, full-stack, or architecture roles.
          </div>

          <div className="cta-actions">
            <a href="mailto:gargr0109@gmail.com" className="cta-btn primary">
              <Mail size={13} />
              Email Me
            </a>
            <a href="tel:+917807221279" className="cta-btn secondary">
              <Phone size={13} />
              Call
            </a>
          </div>

          <div className="cta-footer font-mono">
            <Zap size={11} />
            <span>Response within 2 hours</span>
          </div>
        </div>
      )}

      <style>{`
        .recruiter-pill-btn {
          position: fixed;
          bottom: 100px;
          right: 28px;
          z-index: 8000;
          background: linear-gradient(135deg, #5e5ad1, #7c78e8);
          color: white;
          border: none;
          border-radius: 100px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-sans);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(94,90,209,0.5);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideInRight 0.5s ease;
        }

        .recruiter-pill-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(94,90,209,0.6);
        }

        @keyframes slideInRight {
          from { transform: translateX(120px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .pill-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        .pill-dot.pulse {
          animation: dotPulse 1s ease-in-out;
        }

        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }

        .recruiter-cta-card {
          position: fixed;
          bottom: 90px;
          right: 24px;
          z-index: 8000;
          background: white;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 20px;
          padding: 20px;
          width: 280px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(94,90,209,0.1);
          animation: popUpCard 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes popUpCard {
          from { transform: scale(0.5) translateY(40px); opacity: 0; transform-origin: bottom right; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }

        .cta-close {
          position: absolute;
          top: 14px; right: 14px;
          background: none;
          border: 1px solid rgba(17,28,45,0.1);
          border-radius: 50%;
          width: 26px; height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(17,28,45,0.4);
          transition: 0.15s;
        }
        .cta-close:hover { background: var(--bg-secondary); color: var(--text-dark); }

        .cta-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .cta-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5e5ad1, #a0afee);
          color: white;
          font-weight: 700;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(94,90,209,0.3);
        }

        .cta-intro {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .cta-available {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #10b981;
          font-family: var(--font-mono);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 6px #10b981;
        }

        .cta-intro strong {
          font-size: 14px;
          color: var(--text-dark);
        }

        .cta-intro small {
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .cta-message {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-muted-dark);
          background: var(--bg-secondary);
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 14px;
        }

        .cta-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .cta-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
          font-family: var(--font-sans);
        }

        .cta-btn.primary {
          background: var(--bg-dark);
          color: white;
        }
        .cta-btn.primary:hover {
          background: var(--accent-purple);
          transform: translateY(-1px);
        }

        .cta-btn.secondary {
          background: var(--bg-secondary);
          color: var(--text-dark);
          border: 1px solid var(--border-color);
        }
        .cta-btn.secondary:hover {
          background: #fff;
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          transform: translateY(-1px);
        }

        .cta-footer {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #10b981;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </>
  );
}
