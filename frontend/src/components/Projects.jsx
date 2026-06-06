import React, { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import Card3D from './Card3D';

export default function Projects({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visitedProjects, setVisitedProjects] = useState(new Set());

  const handleProjectHover = (id, title) => {
    if (!visitedProjects.has(id)) {
      setVisitedProjects(prev => {
        const nextSet = new Set(prev);
        nextSet.add(id);
        
        window.dispatchEvent(new CustomEvent('gain-xp', {
          detail: {
            amount: 10,
            action: `Reviewed deployment specs for: ${title}`,
            incrementKey: 'exploreProjects'
          }
        }));
        
        return nextSet;
      });
    }
  };

  const backupProjects = [
    {
      id: 1,
      title: 'BastaxCasino',
      description: 'A full-stack casino gaming platform for European markets featuring live betting, real-time transaction tracking, and interactive dashboards. Built with admin and affiliate panels.',
      tags: 'Node.js, React.js, MongoDB, Nginx, PM2, Docker',
      link: 'https://bastaxcasino.com/home',
      github: null,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Decentralized AI & Blockchain Application',
      description: 'A Web3 application integrating AI and Blockchain technologies. Implements Role-Based Access Control (RBAC) inspired by the UMA Protocol with End-to-End testing across User, Admin, and Moderator panels.',
      tags: 'React, Node.js, Solidity, Web3, UMA Protocol, RBAC',
      link: null,
      github: 'https://github.com',
      category: 'Blockchain & AI'
    },
    {
      id: 3,
      title: 'WhatsApp Business API Integration',
      description: 'Core product integration using WhatsApp Business APIs, Meta Business Manager, and Webhooks for real-time customer messaging, event notifications, and automated replies.',
      tags: 'Node.js, Express, Webhooks, Meta APIs, Redis',
      link: null,
      github: null,
      category: 'Integrations'
    },
    {
      id: 4,
      title: 'Government Judicial Data Pipelines',
      description: 'High-volume data fetching and processing tools for Supreme Court, High Court, and NHAI official portals. Automated ETL pipelines clean, validate, and load records into secure databases.',
      tags: 'Node.js, TypeScript, MySQL, Scripting, Caching',
      link: null,
      github: null,
      category: 'Backend Systems'
    },
    {
      id: 5,
      title: 'Data Warehousing Inventory Management',
      description: 'A complete data warehousing system built from scratch with custom MySQL tables. Features role-based views for admin, suppliers, and customers with incoming/outgoing ledger transaction tracking.',
      tags: 'React, Express, MySQL, Material UI',
      link: null,
      github: 'https://github.com',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Zapier, Google Calendar & Office 365 Automation',
      description: 'Enterprise workflow automation pipeline connecting Google Calendar API and Microsoft 365 Excel/Word directories with Node.js and Zapier Webhooks for automated task triggering.',
      tags: 'Node.js, Zapier, Webhooks, Google APIs, Microsoft 365',
      link: null,
      github: null,
      category: 'Integrations'
    },
    {
      id: 7,
      title: 'Food Store E-Commerce Platform',
      description: 'A full-featured food ordering application with shopping cart functionalities, custom payment gateway processing, and role-based restaurant admin management consoles.',
      tags: 'React, Node.js, Express, MongoDB, Payment APIs',
      link: null,
      github: 'https://github.com',
      category: 'Full Stack'
    }
  ];

  const projectList = projects.length > 0 ? projects : backupProjects;

  // Extract unique categories for filter tabs
  const categories = ['All', ...new Set(projectList.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-tag">Case Studies</span>
        <h2 className="section-title">Production Deployments</h2>
        <p className="section-subtitle">
          A collection of enterprise-grade features, blockchain integrations, and high-performance backend pipelines I have engineered.
        </p>

        {/* Filter Pills */}
        <div className="filters-container">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="card-grid">
          {filteredProjects.map((project) => (
            <Card3D 
              key={project.id} 
              className="card project-card" 
              maxTilt={10}
              onMouseEnter={() => handleProjectHover(project.id, project.title)}
            >
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  <Folder size={20} className="project-icon" />
                </div>
                
                <div className="project-actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-action-btn" title="View Source on GitHub">
                      <Github size={16} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-action-btn" title="Visit Live Site">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tags.split(',').map((tag, idx) => (
                  <span key={idx} className="tech-tag">{tag.trim()}</span>
                ))}
              </div>

              <div className="project-category-badge">{project.category}</div>
            </Card3D>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .filters-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .filter-btn {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 8px 18px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted-dark);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-dark);
          border-color: rgba(17, 28, 45, 0.24);
          background-color: var(--bg-secondary);
        }

        .filter-btn.active {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
          color: var(--text-light);
        }

        .project-card {
          min-height: 280px;
          background-color: #ffffff;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .project-icon-wrapper {
          width: 36px;
          height: 36px;
          background-color: rgba(94, 90, 209, 0.06);
          color: var(--accent-purple);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-actions {
          display: flex;
          gap: 8px;
        }

        .project-action-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-muted-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          background-color: #ffffff;
        }

        .project-action-btn:hover {
          color: var(--accent-purple);
          border-color: rgba(94, 90, 209, 0.3);
          background-color: rgba(94, 90, 209, 0.04);
        }

        .project-title {
          font-size: 20px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--text-dark);
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted-dark);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.06);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .project-category-badge {
          position: absolute;
          bottom: 32px;
          right: 32px;
          font-family: var(--font-mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(17, 28, 45, 0.3);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
