import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Music, Award } from 'lucide-react';
import ParticleOrbit from './ParticleOrbit';

const TYPING_ROLES = [
  'Mid-Level Software Engineer',
  'Full Stack Developer',
  'Backend Architect',
  'Kafka & Redis Specialist',
  'iGaming Platform Builder',
  'DSA Problem Solver',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = TYPING_ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < role.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80);
    } else if (!isDeleting && charIndex === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % TYPING_ROLES.length);
    }

    setDisplayText(role.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section dark-section">
      <div className="grid-overlay"></div>
      
      {/* Animated background orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge-row">
            <div className="tech-badge animate-fade-in">
              <span className="badge-dot"></span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            <div className="tech-badge-location animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <MapPin size={11} />
              <span>Mohali, India</span>
            </div>
          </div>

          <h1 className="hero-headline animate-slide-up">
            <span className="headline-name">Rahul Garg</span>
            <span className="headline-separator"></span>
            <span className="typewriter-wrapper">
              <span className="gradient-text typewriter-text">{displayText}</span>
              <span className="cursor-blink">|</span>
            </span>
          </h1>

          <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I design <strong>scalable microservices</strong>, build <strong>event-driven Kafka pipelines</strong>, 
            integrate <strong>WhatsApp Business APIs</strong>, and lead engineering teams that ship production-ready 
            systems trusted by enterprises and government organizations.
          </p>

          {/* Quick stat badges */}
          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="hero-stat-pill">
              <Award size={13} className="stat-icon" />
              <span>1500+ DSA Problems</span>
            </div>
            <div className="hero-stat-pill">
              <span>🎰</span>
              <span>50k+ Events/Day</span>
            </div>
            <div className="hero-stat-pill">
              <span>⚖️</span>
              <span>Govt-Scale Systems</span>
            </div>
            <div className="hero-stat-pill singing-badge">
              <Music size={13} className="stat-icon music-pulse" />
              <span>Singer & Badminton Player</span>
            </div>
          </div>

          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#experience" className="btn btn-dark hero-cta">
              <span>View Experience</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn-secondary">
              Get In Touch
            </a>
            <a
              href="https://youtu.be/WEllK2cbbt0?si=3ZsXfbgp6LQx1mgc"
              target="_blank"
              rel="noreferrer"
              className="btn hero-song-btn"
            >
              <Music size={14} />
              <span>Hear Me Sing 🎵</span>
            </a>
          </div>

          <div className="quick-contacts animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="contact-item">
              <Mail size={14} className="contact-icon" />
              <a href="mailto:gargr0109@gmail.com">gargr0109@gmail.com</a>
            </div>
            <div className="contact-item">
              <Phone size={14} className="contact-icon" />
              <a href="tel:+917807221279">+91 78072 21279</a>
            </div>
            <div className="contact-item">
              <span className="dot-active"></span>
              <span>Sec 94, JLPL Mohali</span>
            </div>
          </div>
        </div>

        {/* Particle Orbit Animation */}
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <ParticleOrbit />
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
          background: radial-gradient(ellipse at 70% 30%, rgba(94,90,209,0.15) 0%, var(--bg-dark) 60%);
        }

        .grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(245,243,239,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,243,239,0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1; pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(60px);
          animation: orbFloat 8s ease-in-out infinite;
        }

        .orb-1 {
          top: 20%; right: 10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(94,90,209,0.12) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 10%; left: -5%;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(160,175,238,0.08) 0%, transparent 70%);
          animation-delay: -3s;
        }

        .orb-3 {
          top: 60%; right: 25%;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(104,211,145,0.06) 0%, transparent 70%);
          animation-delay: -6s;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }

        .hero-container {
          width: 90%; max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Animation classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease both;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Badge row */
        .hero-badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeIn 0.6s ease both;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s infinite;
          box-shadow: 0 0 8px #10b981;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }

        .tech-badge-location {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(94,90,209,0.1);
          border: 1px solid rgba(94,90,209,0.2);
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent-lavender);
        }

        /* Headline */
        .hero-headline {
          font-size: 54px;
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--text-light);
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .headline-name {
          font-weight: 600;
          font-size: 60px;
          background: linear-gradient(135deg, #ffffff 0%, var(--accent-lavender) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .headline-separator {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender));
          border-radius: 2px;
        }

        .typewriter-wrapper {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 30px;
          min-height: 40px;
        }

        .typewriter-text {
          background: linear-gradient(135deg, var(--accent-lavender) 0%, #c3ccf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 500;
        }

        .cursor-blink {
          color: var(--accent-lavender);
          animation: blink 0.8s infinite;
          font-weight: 300;
          margin-left: 2px;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }

        /* Description */
        .hero-desc {
          font-size: 17px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--text-muted-light);
          margin-bottom: 28px;
        }
        .hero-desc strong { color: var(--text-light); font-weight: 500; }

        /* Stats pills */
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .hero-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.1);
          padding: 5px 12px;
          border-radius: 100px;
          font-size: 12px;
          color: var(--text-muted-light);
          transition: 0.2s;
        }

        .hero-stat-pill:hover {
          background: rgba(245,243,239,0.1);
          color: var(--text-light);
        }

        .stat-icon { color: var(--accent-lavender); }

        .singing-badge { border-color: rgba(252,129,129,0.3); }
        .music-pulse { color: #fc8181; animation: pulse 2s infinite; }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-cta {
          background: linear-gradient(135deg, var(--accent-purple), #7c78e8);
          border: none;
          box-shadow: 0 4px 20px rgba(94,90,209,0.4);
        }
        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(94,90,209,0.5);
        }

        .hero-btn-secondary {
          border-color: rgba(245,243,239,0.2);
          color: var(--text-light);
        }
        .hero-btn-secondary:hover {
          background: rgba(245,243,239,0.08);
          border-color: var(--text-light);
        }

        .hero-song-btn {
          background: linear-gradient(135deg, rgba(252,129,129,0.15), rgba(246,173,85,0.15));
          border: 1px solid rgba(252,129,129,0.3);
          color: #fc8181;
          padding: 12px 20px;
        }
        .hero-song-btn:hover {
          background: linear-gradient(135deg, rgba(252,129,129,0.25), rgba(246,173,85,0.25));
          transform: translateY(-2px);
        }

        /* Contacts */
        .quick-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          border-top: 1px solid rgba(245,243,239,0.08);
          padding-top: 24px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted-light);
        }
        .contact-item a {
          color: var(--text-muted-light);
          text-decoration: none;
          transition: 0.15s;
        }
        .contact-item a:hover { color: var(--accent-lavender); }
        .contact-icon { color: var(--accent-lavender); }

        .dot-active {
          width: 8px; height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 992px) {
          .hero-container { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { order: -1; }
          .hero-headline { font-size: 40px; }
          .headline-name { font-size: 44px; }
          .typewriter-wrapper { font-size: 24px; }
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 32px; }
          .headline-name { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
