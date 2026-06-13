import React from 'react';
import { Music, Trophy, Paintbrush, Dumbbell, Compass, Users, MessageSquare, Code, Compass as CompassIcon, ExternalLink } from 'lucide-react';
import Card3D from './Card3D';

export default function Interests() {
  const hobbies = [
    {
      id: 1,
      title: 'Professional Singing',
      desc: 'Active vocalist passionate about music production, rhythm, and stage performance. Brings creative energy and vocal focus.',
      icon: <Music size={20} />,
      link: 'https://youtu.be/WEllK2cbbt0?si=3ZsXfbgp6LQx1mgc',
      linkLabel: 'Listen to Track 🎧'
    },
    {
      id: 2,
      title: 'State-Level Badminton',
      desc: 'Competitive sports background. Plays active badminton at Phase 7 Mohali Sports Club. Hones rapid reaction speed and stamina.',
      icon: <Trophy size={20} />
    },
    {
      id: 3,
      title: 'Artistic Sketching',
      desc: 'Hones attention to structural details, focus, visual precision, and extreme patience—translating directly into clean code layouts.',
      icon: <Paintbrush size={20} />
    },
    {
      id: 4,
      title: 'Fitness & Conditioning',
      desc: 'Dedicated to regular weight training and cardiovascular routine, reinforcing physical strength, health, and self-discipline.',
      icon: <Dumbbell size={20} />
    },
    {
      id: 5,
      title: 'Guitar Playing',
      desc: 'Enjoys playing acoustic guitar in free time, learning chords, dynamic rhythms, and fingerstyle musical arrangements.',
      icon: <Music size={20} />
    },
    {
      id: 6,
      title: 'Adventure Trekking',
      desc: 'Active trekker and camper. Love high-altitude hiking, exploring new mountain trails, and outdoors adventures.',
      icon: <Compass size={20} />
    }
  ];

  const strengths = [
    {
      id: 7,
      title: 'Vast Relational Thinking',
      desc: 'Designing end-to-end full-stack architectures. Analyzing system components from a holistic, broad-infrastructure perspective.',
      icon: <Compass size={20} />
    },
    {
      id: 8,
      title: 'Team Leadership & Mentorship',
      desc: 'Guided over 200+ engineering students in DSA and mentored developer squads to deliver complex projects under strict timelines.',
      icon: <Users size={20} />
    },
    {
      id: 9,
      title: 'Fluent Communication',
      desc: 'Expressing complex technical concepts cleanly. Experienced working directly with international clients and QA teams.',
      icon: <MessageSquare size={20} />
    },
    {
      id: 10,
      title: 'Competitive DSA Coding',
      desc: 'Spends free time solving data structure challenges (1500+ problems), teaching stack optimizations, and engineering tool utilities.',
      icon: <Code size={20} />
    },
    {
      id: 11,
      title: 'CV Mentorship & Referrals',
      desc: 'Help peers and juniors build strong technical resumes, conducts portfolio reviews, drafts template outlines, and assists with job referrals.',
      icon: <Users size={20} />
    }
  ];

  return (
    <section id="interests" className="interests-section">
      <div className="container">
        <span className="section-tag">Beyond the Code</span>
        <h2 className="section-title">Hobbies & Core Mindset</h2>
        <p className="section-subtitle">
          A view into my competitive sports background, creative arts, and soft leadership capabilities that shape my daily software engineering discipline.
        </p>

        {/* Hobbies Grid */}
        <h3 className="interests-grid-heading">🎭 Sports & Creative Arts</h3>
        <div className="card-grid interests-grid">
          {hobbies.map((item) => (
            <Card3D key={item.id} className="card interest-card" maxTilt={10}>
              <div className="interest-header">
                <div className="interest-icon-wrapper">{item.icon}</div>
                <h4 className="interest-title">{item.title}</h4>
              </div>
              <p className="interest-desc">{item.desc}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="interest-action-link"
                  onClick={() => window.dispatchEvent(new CustomEvent('gain-xp', {
                    detail: {
                      amount: 30,
                      action: 'Listened to vocal performance audio track link',
                      incrementKey: 'playTrack'
                    }
                  }))}
                >
                  <span>{item.linkLabel}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </Card3D>
          ))}
        </div>

        {/* Strengths Grid */}
        <h3 className="interests-grid-heading" style={{ marginTop: '56px' }}>🚀 Leadership & Mindset</h3>
        <div className="card-grid interests-grid">
          {strengths.map((item) => (
            <Card3D key={item.id} className="card interest-card" maxTilt={10}>
              <div className="interest-header">
                <div className="interest-icon-wrapper strength">{item.icon}</div>
                <h4 className="interest-title">{item.title}</h4>
              </div>
              <p className="interest-desc">{item.desc}</p>
            </Card3D>
          ))}
        </div>
      </div>

      <style>{`
        .interests-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .interests-grid-heading {
          font-size: 20px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 24px;
          border-left: 3px solid var(--accent-purple);
          padding-left: 12px;
        }

        .interests-grid {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .interest-card {
          background-color: var(--bg-darker);
          padding: 24px;
          min-height: 180px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .interest-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .interest-icon-wrapper {
          width: 36px;
          height: 36px;
          background-color: rgba(94, 90, 209, 0.06);
          color: var(--accent-purple);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .interest-icon-wrapper.strength {
          background-color: rgba(16, 185, 129, 0.06);
          color: #10b981;
        }

        .interest-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .interest-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-muted-dark);
          flex-grow: 1;
        }

        .interest-action-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-purple);
          text-decoration: none;
          transition: var(--transition-fast);
          align-self: flex-start;
        }

        .interest-action-link:hover {
          color: var(--text-dark);
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
