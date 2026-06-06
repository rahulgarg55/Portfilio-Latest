import React from 'react';
import { Award, Eye, Code2, Users, Trophy } from 'lucide-react';
import Card3D from './Card3D';

export default function Dashboard({ achievements = [] }) {
  // Static backup statistics in case achievements fail to load
  const backupStats = [
    { id: 1, title: 'GeeksForGeeks College Rank', value: 'Rank 1st', icon: <Award size={20} />, details: 'Ranked 1st in CGC Landran college and solved over 1500+ problems across GFG and Leetcode.' },
    { id: 2, title: 'YouTube Educator', value: '3 Lakh+ Views', icon: <Eye size={20} />, details: 'Run a technical channel teaching Data Structures & Algorithms and MERN Stack.' },
    { id: 3, title: 'ICPC Regionals Rank', value: 'Rank 613', icon: <Trophy size={20} />, details: 'Secured Team Rank 613 in ICPC Amritapuri Regionals and College Rank 1 in the Prelims.' },
    { id: 4, title: 'LeetCode Rating', value: '1753 Max', icon: <Code2 size={20} />, details: 'Acquired a maximum rating of 1753 (3 Star developer status) on LeetCode.' },
    { id: 5, title: 'Developer Mentorship', value: '200+ Guided', icon: <Users size={20} />, details: 'Mentored and instructed over 200+ students and junior developers.' }
  ];

  const statsToRender = achievements.length > 0 ? achievements : backupStats;

  // Let's map icons based on titles or IDs
  const getIcon = (id, title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('geeks') || titleLower.includes('college')) return <Award size={20} />;
    if (titleLower.includes('youtube') || titleLower.includes('view')) return <Eye size={20} />;
    if (titleLower.includes('icpc') || titleLower.includes('rank')) return <Trophy size={20} />;
    if (titleLower.includes('leetcode') || titleLower.includes('rating')) return <Code2 size={20} />;
    if (titleLower.includes('mentor') || titleLower.includes('guided')) return <Users size={20} />;
    return <Award size={20} />;
  };

  return (
    <section id="about" className="dashboard-section">
      <div className="container">
        <span className="section-tag">Platform Analytics</span>
        <h2 className="section-title">Achievements & Core Metrics</h2>
        <p className="section-subtitle">
          An overview of my competitive programming results, developer outreach activities, and community milestones.
        </p>

        <div className="dashboard-grid">
          {/* Main big stats card (Solved Problems) wrapped in 3D */}
          <Card3D className="dash-card main-stat-card" maxTilt={8}>
            <div className="main-stat-header">
              <Code2 className="main-stat-icon" size={32} />
              <span className="main-stat-tag">GEEKSFORGEEKS & LEETCODE</span>
            </div>
            <div className="main-stat-content">
              <div className="main-stat-value">1500+</div>
              <div className="main-stat-label">Coding Problems Solved</div>
            </div>
            <div className="main-stat-footer">
              <p>Specializing in Data Structures, Algorithms, and optimization. Max rating of 1753 (3 Star) on LeetCode.</p>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
          </Card3D>

          {/* Sub Stats Grid wrapped in 3D */}
          <div className="sub-stats-grid">
            {statsToRender.map((stat) => (
              <Card3D key={stat.id} className="dash-card sub-stat-card" maxTilt={12}>
                <div className="sub-stat-header">
                  <div className="sub-stat-icon-wrapper">
                    {getIcon(stat.id, stat.title)}
                  </div>
                  <div className="sub-stat-badge">{stat.value}</div>
                </div>
                <h3 className="sub-stat-title">{stat.title}</h3>
                <p className="sub-stat-details">{stat.details}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 24px;
        }

        .dash-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
          height: 100%;
        }

        .dash-card:hover {
          border-color: rgba(94, 90, 209, 0.2);
          box-shadow: 0 12px 30px rgba(17, 28, 45, 0.08);
        }

        .main-stat-card {
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-color: var(--bg-dark);
          min-height: 380px;
        }

        .main-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .main-stat-icon {
          color: var(--accent-lavender);
        }

        .main-stat-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent-lavender);
          background-color: rgba(160, 175, 238, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .main-stat-value {
          font-size: 72px;
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--text-light);
        }

        .main-stat-label {
          font-size: 18px;
          font-weight: 400;
          color: var(--text-muted-light);
          margin-top: 8px;
        }

        .main-stat-footer {
          margin-top: auto;
        }

        .main-stat-footer p {
          font-size: 13px;
          color: var(--text-muted-light);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .progress-bar-container {
          height: 4px;
          background-color: rgba(245, 243, 239, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: var(--accent-lavender);
          border-radius: 2px;
        }

        .sub-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .sub-stat-card {
          min-height: 180px;
        }

        .sub-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .sub-stat-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: rgba(94, 90, 209, 0.08);
          color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sub-stat-badge {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.08);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .sub-stat-title {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .sub-stat-details {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-muted-dark);
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          .main-stat-card {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .sub-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
