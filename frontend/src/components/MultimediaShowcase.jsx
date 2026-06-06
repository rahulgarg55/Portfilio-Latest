import React, { useState } from 'react';
import { Music, Play, ExternalLink, Mic } from 'lucide-react';

export default function MultimediaShowcase() {
  const [playingSong, setPlayingSong] = useState(false);
  const [activeTab, setActiveTab] = useState('music');

  const tracks = [
    {
      id: 1,
      title: 'Vocal Cover Track',
      subtitle: 'Rahul Garg — Original Performance',
      url: 'https://youtu.be/WEllK2cbbt0?si=3ZsXfbgp6LQx1mgc',
      thumbnail: `https://img.youtube.com/vi/WEllK2cbbt0/maxresdefault.jpg`,
      duration: '3:45',
      tag: 'VOCAL',
    }
  ];

  const mediaHighlights = [
    {
      icon: '🎸',
      title: 'Guitar Player',
      desc: 'Fingerstyle acoustic. Learns chord progressions and self-composes rhythmic arrangements.',
      color: '#f6ad55',
    },
    {
      icon: '🏸',
      title: 'State-Level Badminton',
      desc: 'Competed at state tournaments. Trains at Phase 7 Mohali Sports Complex.',
      color: '#68d391',
    },
    {
      icon: '✏️',
      title: 'Portrait Sketching',
      desc: 'Fine detail pencil sketching. Translates to pixel-perfect UI implementation.',
      color: '#fc8181',
    },
    {
      icon: '🏔️',
      title: 'High-Altitude Trekking',
      desc: 'Himalayan trekker. Has summited several Himachal Pradesh trail peaks.',
      color: '#b794f4',
    },
    {
      icon: '💪',
      title: 'Fitness & Strength Training',
      desc: 'Dedicated athlete — consistency in gym mirrors consistency in code quality.',
      color: '#76e4f7',
    },
    {
      icon: '🌐',
      title: 'Helping Peers Get Jobs',
      desc: 'Reviewed 50+ CVs, crafted referrals, coached DSA for campus placements.',
      color: '#10b981',
    },
  ];

  return (
    <section id="multimedia" className="multimedia-section dark-section">
      <div className="mm-grid-overlay"></div>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Beyond the Keyboard</span>
        <h2 className="section-title light">Life, Hobbies & Passions 🎭</h2>
        <p className="section-subtitle light">
          The human behind the code — professional singer, badminton player, guitarist, trekker, fitness enthusiast, and career mentor.
        </p>

        <div className="mm-tabs">
          {['music', 'hobbies'].map(tab => (
            <button
              key={tab}
              className={`mm-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'music' ? <><Music size={14} /> Music</> : <>🎭 Hobbies & Life</>}
            </button>
          ))}
        </div>

        {activeTab === 'music' && (
          <div className="music-showcase">
            {/* Featured song card */}
            <div className="song-hero">
              <div className="song-album-art">
                <img
                  src={tracks[0].thumbnail}
                  alt="Rahul Garg singing"
                  className="album-thumbnail"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('no-img');
                  }}
                />
                <div className="album-overlay">
                  <a
                    href={tracks[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="play-btn-big"
                    onClick={() => setPlayingSong(true)}
                  >
                    <Play size={28} fill="white" />
                  </a>
                </div>
                <div className="album-badge font-mono">
                  <Mic size={11} />
                  {tracks[0].tag}
                </div>
              </div>

              <div className="song-info">
                <div className="song-waveform">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className={`wave-bar ${playingSong ? 'playing' : ''}`}
                      style={{
                        height: `${Math.random() * 60 + 10}%`,
                        animationDelay: `${(i / 40) * 0.8}s`,
                        animationDuration: `${0.4 + Math.random() * 0.4}s`
                      }}
                    />
                  ))}
                </div>

                <h3 className="song-title">{tracks[0].title}</h3>
                <p className="song-sub">{tracks[0].subtitle}</p>

                <div className="song-meta font-mono">
                  <span>⏱ {tracks[0].duration}</span>
                  <span>📍 Recorded in Mohali</span>
                  <span>🎤 Rahul Garg</span>
                </div>

                <div className="song-actions">
                  <a
                    href={tracks[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="song-play-btn"
                    onClick={() => setPlayingSong(true)}
                  >
                    <Play size={16} />
                    <span>Play on YouTube</span>
                  </a>
                  <a
                    href={tracks[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="song-link-btn"
                  >
                    <ExternalLink size={14} />
                    Open Track
                  </a>
                </div>

                <p className="song-story">
                  🎵 "I discovered my love for singing in college. Music teaches rhythm, patience, and emotional expression — 
                  qualities I bring into team collaboration and architecture design. I believe engineers who have creative 
                  outlets build better software."
                </p>
              </div>
            </div>

            {/* Music facts */}
            <div className="music-facts">
              <div className="music-fact">🎸 Also plays acoustic guitar</div>
              <div className="music-fact">🎵 Genres: Bollywood, Sufi, Classical fusion</div>
              <div className="music-fact">🎤 Stage performer since 2019</div>
              <div className="music-fact">🎧 Produced solo tracks at home studio</div>
            </div>
          </div>
        )}

        {activeTab === 'hobbies' && (
          <div className="hobbies-showcase">
            <div className="hobbies-grid">
              {mediaHighlights.map((item, i) => (
                <div
                  key={i}
                  className="hobby-card"
                  style={{ '--hobby-color': item.color, animationDelay: `${i * 0.08}s` }}
                >
                  <div className="hobby-emoji-wrap">
                    <span className="hobby-emoji">{item.icon}</span>
                    <div className="hobby-glow" style={{ background: item.color + '30' }}></div>
                  </div>
                  <h4 className="hobby-title" style={{ color: item.color }}>{item.title}</h4>
                  <p className="hobby-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <blockquote className="philosophy-quote">
              <span className="quote-mark">"</span>
              <p>The best engineers I know are also artists, athletes, or adventurers. Diverse experience sharpens your problem-solving instincts beyond what any textbook can teach.</p>
              <cite>— Rahul Garg, Sec 94, Mohali</cite>
            </blockquote>
          </div>
        )}
      </div>

      <style>{`
        .multimedia-section {
          background: var(--bg-dark);
          border-bottom: 1px solid rgba(245,243,239,0.1);
          position: relative;
          overflow: hidden;
        }

        .mm-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(rgba(94,90,209,0.04) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .mm-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
        }

        .mm-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.1);
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(245,243,239,0.5);
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-sans);
        }

        .mm-tab.active {
          background: rgba(94,90,209,0.15);
          border-color: rgba(94,90,209,0.4);
          color: var(--accent-lavender);
        }

        .mm-tab:hover:not(.active) {
          background: rgba(245,243,239,0.08);
          color: rgba(245,243,239,0.8);
        }

        /* Music tab */
        .music-showcase { animation: fadeIn 0.4s ease; }

        .song-hero {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 28px;
        }

        .song-album-art {
          position: relative;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--bg-darker), #1a0a2e);
          min-height: 260px;
        }

        .song-album-art.no-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .album-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .album-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .song-album-art:hover .album-overlay { opacity: 1; }

        .play-btn-big {
          width: 64px; height: 64px;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          color: var(--accent-purple);
        }

        .play-btn-big:hover { transform: scale(1.1); }

        .album-badge {
          position: absolute;
          top: 12px; right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(252,129,129,0.9);
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 100px;
          letter-spacing: 0.1em;
        }

        /* Waveform */
        .song-waveform {
          display: flex;
          align-items: center;
          gap: 2px;
          height: 40px;
          margin-bottom: 16px;
        }

        .wave-bar {
          width: 3px;
          background: rgba(160,175,238,0.3);
          border-radius: 2px;
          min-height: 4px;
          transition: background 0.3s;
        }

        .wave-bar.playing {
          background: var(--accent-lavender);
          animation: waveAnim var(--anim-dur, 0.6s) ease-in-out infinite alternate;
        }

        @keyframes waveAnim {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }

        .song-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-light);
          margin-bottom: 6px;
        }

        .song-sub {
          font-size: 13px;
          color: var(--text-muted-light);
          margin-bottom: 14px;
        }

        .song-meta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 10px;
          color: rgba(245,243,239,0.4);
          margin-bottom: 20px;
          letter-spacing: 0.05em;
        }

        .song-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .song-play-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fc8181;
          color: #fff;
          border-radius: 100px;
          padding: 10px 22px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
        }

        .song-play-btn:hover {
          background: #f56565;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(252,129,129,0.4);
        }

        .song-link-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,243,239,0.08);
          border: 1px solid rgba(245,243,239,0.12);
          color: var(--text-muted-light);
          border-radius: 100px;
          padding: 10px 18px;
          font-size: 13px;
          text-decoration: none;
          transition: 0.2s;
        }

        .song-link-btn:hover {
          background: rgba(245,243,239,0.12);
          color: var(--text-light);
        }

        .song-story {
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--text-muted-light);
          font-style: italic;
          border-left: 2px solid rgba(252,129,129,0.4);
          padding-left: 14px;
        }

        .music-facts {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .music-fact {
          background: rgba(245,243,239,0.05);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          color: rgba(245,243,239,0.6);
        }

        /* Hobbies tab */
        .hobbies-showcase { animation: fadeIn 0.4s ease; }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 36px;
        }

        .hobby-card {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.07);
          border-radius: 14px;
          padding: 22px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: fadeIn 0.5s ease both;
        }

        .hobby-card:hover {
          transform: translateY(-6px);
          border-color: var(--hobby-color);
          background: rgba(245,243,239,0.07);
          box-shadow: 0 12px 28px rgba(0,0,0,0.3), 0 0 20px var(--hobby-color, transparent);
        }

        .hobby-emoji-wrap {
          position: relative;
          width: 52px; height: 52px;
          margin-bottom: 14px;
        }

        .hobby-emoji {
          font-size: 32px;
          position: relative;
          z-index: 1;
        }

        .hobby-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          filter: blur(12px);
          z-index: 0;
        }

        .hobby-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .hobby-desc {
          font-size: 12px;
          line-height: 1.5;
          color: rgba(245,243,239,0.55);
        }

        .philosophy-quote {
          background: rgba(94,90,209,0.1);
          border-left: 3px solid var(--accent-purple);
          border-radius: 0 12px 12px 0;
          padding: 24px 28px;
          position: relative;
        }

        .quote-mark {
          font-size: 60px;
          color: var(--accent-purple);
          line-height: 1;
          font-family: Georgia, serif;
          position: absolute;
          top: 10px; left: 16px;
          opacity: 0.4;
        }

        .philosophy-quote p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-muted-light);
          font-style: italic;
          margin-left: 24px;
          margin-bottom: 12px;
        }

        .philosophy-quote cite {
          font-size: 11px;
          color: var(--accent-lavender);
          font-family: var(--font-mono);
          font-style: normal;
          margin-left: 24px;
          display: block;
        }

        @media (max-width: 900px) {
          .song-hero { grid-template-columns: 1fr; }
          .song-album-art { max-width: 300px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
