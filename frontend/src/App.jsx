import React, { useState, Suspense, lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Experience from './components/Experience';
import SystemSandbox from './components/SystemSandbox';
import Projects from './components/Projects';
import SqlSandbox from './components/SqlSandbox';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import QuestTracker from './components/QuestTracker';
import TerminalSandbox from './components/TerminalSandbox';
import LeetcodeDashboard from './components/LeetcodeDashboard';
import BuildSimulator from './components/BuildSimulator';
import RecruiterModeView from './components/RecruiterModeView';
import SkeletonLoader from './components/SkeletonLoader';
import LiveCodeShowcase from './components/LiveCodeShowcase';
import ArchitectureFlow from './components/ArchitectureFlow';
import AchievementTrophyRoom from './components/AchievementTrophyRoom';
import CareerTimeline3D from './components/CareerTimeline3D';
import RecruiterCTA from './components/RecruiterCTA';
import MagneticCursor from './components/MagneticCursor';
import SkillRadarChart from './components/SkillRadarChart';
import GitHubHeatmap from './components/GitHubHeatmap';
import TechStackComparison from './components/TechStackComparison';
import SalaryBenchmark from './components/SalaryBenchmark';
import MultimediaShowcase from './components/MultimediaShowcase';
import InterviewPrep from './components/InterviewPrep';
import ScrollProgress from './components/ScrollProgress';
import DevelopmentWorkflow from './components/DevelopmentWorkflow';
import LiveActivityFeed from './components/LiveActivityFeed';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import PerformanceDashboard from './components/PerformanceDashboard';
import ResumeDownload from './components/ResumeDownload';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import SkillNetworkGraph from './components/SkillNetworkGraph';

// Code Splitting / Lazy Loading for analytical sandboxes
const WarRoom = lazy(() => import('./components/WarRoom'));
const SystemBlueprints = lazy(() => import('./components/SystemBlueprints'));
const EngineeringPhilosophy = lazy(() => import('./components/EngineeringPhilosophy'));
const IncidentSimulator = lazy(() => import('./components/IncidentSimulator'));
const BackendBuilderGame = lazy(() => import('./components/BackendBuilderGame'));
const CareerSkillTree = lazy(() => import('./components/CareerSkillTree'));
const SecretVault = lazy(() => import('./components/SecretVault'));

export default function App() {
  const fetchPortfolioData = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL || '';
    const response = await fetch(`${API_BASE_URL}/api/portfolio`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const result = await response.json();
    if (!result.success || !result.data) throw new Error('Invalid data format');
    return result;
  };

  const { data: queryData, isLoading: loading, isError } = useQuery({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
    retry: 2,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const portfolioData = queryData?.data || {
    experiences: [],
    projects: [],
    achievements: []
  };

  const [portfolioMode, setPortfolioMode] = useState('visual');

  if (portfolioMode === 'recruiter') {
    return (
      <div className="app-wrapper" style={{ backgroundColor: '#f1f5f9' }}>
        <Navbar recruiterMode={portfolioMode} onToggleRecruiterMode={(mode) => setPortfolioMode(mode)} />
        <main style={{ marginTop: '80px' }}>
          <RecruiterModeView onToggleBack={() => setPortfolioMode('visual')} />
        </main>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      {/* Scroll progress + side nav dots */}
      <ScrollProgress />
      <Navbar recruiterMode={portfolioMode} onToggleRecruiterMode={(mode) => setPortfolioMode(mode)} />
      
      {/* Decoupled Event-Driven Gamified XP & Quests Status Display */}
      <QuestTracker />

      <main>
        <Hero />
        
        {/* Achievements Counter Panel */}
        <Dashboard achievements={portfolioData.achievements} />

        {/* NEW: Achievement Trophy Room with 3D flip cards */}
        <AchievementTrophyRoom />

        {/* NEW: 3D Isometric Career Timeline with XP gamification */}
        <CareerTimeline3D />

        {/* LeetCode stats, circular progress and active day heatmap streaks */}
        <LeetcodeDashboard />
        
        {/* Job chronology timeline */}
        <Experience experiences={portfolioData.experiences} />

        {/* NEW: Live code showcase with real typewriter-animated snippets */}
        <LiveCodeShowcase />
        
        {/* Interactive Redis/Kafka system design playground */}
        <SystemSandbox />

        {/* NEW: Real-time animated architecture flow diagram */}
        <ArchitectureFlow />

        {/* NEW: Live Grafana-style production dashboard */}
        <PerformanceDashboard />

        {/* NEW: Interactive Tech Stack Decision Simulator */}
        <TechStackComparison />

        {/* NEW: How I Build Software — 6-phase workflow pipeline */}
        <DevelopmentWorkflow />

        {/* NEW: Live Interview Answer Board */}
        <InterviewPrep />

        {/* NEW: Real-time engineering activity feed */}
        <LiveActivityFeed />

        {/* IF TECHNICAL DEPTH MODE: Reveal advanced architectural sandboxes */}
        {portfolioMode === 'technical' && (
          <Suspense fallback={<SkeletonLoader height="400px" />}>
            {/* Real-time Incident simulator & CI/CD deployment pipelines */}
            <WarRoom />

            {/* Failsafe Production Incident Simulator & Escape Room challenges */}
            <IncidentSimulator />
            
            {/* Dynamic startup full-stack architecture planner */}
            <BuildSimulator />

            {/* Build-A-Backend scaling game stress tester */}
            <BackendBuilderGame />
          </Suspense>
        )}
        
        {/* Projects showcases */}
        <Projects projects={portfolioData.projects} />
        
        {/* SQL custom query terminal panel */}
        <SqlSandbox />

        {/* IF TECHNICAL DEPTH MODE: Reveal terminal and Swagger blueprints */}
        {portfolioMode === 'technical' && (
          <Suspense fallback={<SkeletonLoader height="400px" />}>
            {/* Relational Database ER map & Swagger testing client explorer */}
            <SystemBlueprints />

            {/* Netflix-style Career Timeline episodes & Skill Tree explorer */}
            <CareerSkillTree />

            {/* Phosphor retro matrix terminal shell console */}
            <TerminalSandbox />

            {/* Senior Engineering values & career timeline step-by-step nodes */}
            <EngineeringPhilosophy />

            {/* Level 5 Unlock Vault panel */}
            <SecretVault />
          </Suspense>
        )}
        
        {/* Technical stack matrix with radar chart */}
        <Skills />

        {/* NEW: SVG Animated Radar Chart — skill dimensions vs avg */}
        <SkillRadarChart />

        {/* NEW: Technology Network Graph */}
        <SkillNetworkGraph />

        {/* NEW: GitHub-style 52-week activity heatmap */}
        <GitHubHeatmap />

        {/* NEW: Market salary benchmark with skill premium drivers */}
        <SalaryBenchmark />

        {/* NEW: Testimonials carousel */}
        <TestimonialsCarousel />

        {/* NEW: Download resume card */}
        <ResumeDownload />

        {/* Personal Hobbies replaced with rich multimedia showcase */}
        <MultimediaShowcase />
        
        {/* Contact template forms */}
        <Contact />
      </main>

      {/* Floating Recruiter AI Agent */}
      <Chatbot />

      {/* Smart Recruiter CTA floating widget */}
      <RecruiterCTA />

      {/* Premium custom magnetic cursor */}
      <MagneticCursor />

      {/* Konami Code Easter Egg — ↑↑↓↓←→←→BA */}
      <KonamiEasterEgg />

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
              <a href="#interests" className="footer-link">Interests</a>
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
