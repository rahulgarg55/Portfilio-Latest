import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [portfolioData, setPortfolioData] = useState({
    experiences: [],
    projects: [],
    achievements: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        
        if (result.success && result.data) {
          setPortfolioData(result.data);
          console.log(`Fetched portfolio data successfully. Source: ${result.source}`);
        }
      } catch (error) {
        console.error('Error fetching API portfolio data. Using fallback local arrays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Render Sections with fetched data */}
        <Dashboard achievements={portfolioData.achievements} />
        
        <Experience experiences={portfolioData.experiences} />
        
        <Projects projects={portfolioData.projects} />
        
        <Skills />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer dark-section">
        <div className="footer-container">
          <div className="footer-logo-panel">
            <span className="footer-logo">Rahul Garg<span className="logo-dot">.</span></span>
            <p className="footer-description">
              Mid-Level Software Engineer based in India. Designing scalable, secure, and performant backend solutions and full-stack systems.
            </p>
          </div>
          
          <div className="footer-links-panel">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rahul Garg. All rights reserved.</p>
          <div className="footer-bottom-info">
            <span>Built with React + Node.js + MySQL</span>
            <span className="divider">|</span>
            <span>Snorkel.ai Style Adaptation</span>
          </div>
        </div>
      </footer>

      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex-grow: 1;
        }

        /* Footer styling matching Snorkel.ai */
        .footer {
          background-color: var(--bg-darker);
          border-top: 1px solid rgba(245, 243, 239, 0.08);
          padding: 80px 0 40px 0;
          color: var(--text-light);
        }

        .footer-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 0.5fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 16px;
          display: inline-block;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-light);
          max-width: 450px;
        }

        .footer-heading {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: var(--text-muted-light);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-lavender);
        }

        .footer-bottom {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13px;
          color: rgba(245, 243, 239, 0.45);
        }

        .footer-bottom-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .divider {
          color: rgba(245, 243, 239, 0.15);
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
