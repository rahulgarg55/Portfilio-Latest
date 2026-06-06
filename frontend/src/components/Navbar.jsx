import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          Rahul Garg<span className="logo-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Social Actions */}
        <div className="nav-actions">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="YouTube Channel">
            <Youtube size={18} />
          </a>
          <a href="#contact" className="btn btn-primary btn-sm-nav">Get In Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            <a href="#about" className="mobile-link" onClick={() => setIsOpen(false)}>About</a>
            <a href="#experience" className="mobile-link" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#skills" className="mobile-link" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</a>
            
            <div className="mobile-drawer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn">
                <Youtube size={20} />
              </a>
            </div>
            
            <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Get In Touch</a>
          </div>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          transition: var(--transition-normal);
          border-bottom: 1px solid transparent;
          display: flex;
          align-items: center;
        }

        .nav-scrolled {
          background-color: rgba(245, 243, 239, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          height: 70px;
        }

        .nav-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-dark);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo-dot {
          color: var(--accent-purple);
        }

        .nav-menu {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted-dark);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--accent-purple);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          color: var(--text-muted-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid transparent;
        }

        .social-icon-btn:hover {
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.08);
          border-color: rgba(94, 90, 209, 0.16);
        }

        .btn-sm-nav {
          padding: 8px 18px;
          font-size: 13px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
        }

        .mobile-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-primary);
          z-index: 999;
          padding: 40px 24px;
          animation: fadeIn 0.2s ease;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .mobile-link {
          font-size: 20px;
          font-weight: 400;
          color: var(--text-dark);
          text-decoration: none;
        }

        .mobile-drawer-socials {
          display: flex;
          gap: 20px;
          margin: 20px 0;
        }

        @media (max-width: 900px) {
          .nav-menu, .nav-actions {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
