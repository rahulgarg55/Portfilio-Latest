import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Flame, Shield, Star, Trophy, X } from 'lucide-react';

export default function QuestTracker() {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [toasts, setToasts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Quests definitions
  const [quests, setQuests] = useState({
    exploreProjects: { label: 'Explore 3 production project cards', target: 3, current: 0, completed: false, xpReward: 20 },
    runSqlQuery: { label: 'Execute a SELECT statement in the SQL Sandbox', target: 1, current: 0, completed: false, xpReward: 25 },
    tweakSystem: { label: 'Toggle Redis and Kafka in the design playground', target: 2, current: 0, completed: false, xpReward: 25 },
    chatBot: { label: 'Ask Bubbles Bot about a technical project', target: 1, current: 0, completed: false, xpReward: 15 },
    playTrack: { label: 'Listen to Rahul\'s professional vocal performance link', target: 1, current: 0, completed: false, xpReward: 30 },
    matrixCommand: { label: 'Enter 3 shell commands in the Matrix terminal', target: 3, current: 0, completed: false, xpReward: 25 },
    secretEasterEgg: { label: 'Discover the terminal Easter Egg (sudo hire rahul)', target: 1, current: 0, completed: false, xpReward: 50 }
  });

  const xpNeeded = 100;

  const levelTitles = {
    1: 'Bronze Recruiter 🥉',
    2: 'Silver Sourcing Agent 🥈',
    3: 'Gold Talent Partner 🥇',
    4: 'Platinum HR Director 🏆',
    5: 'Elite Engineering Executive 👑'
  };

  useEffect(() => {
    // Read state from localStorage on mount
    const savedLevel = localStorage.getItem('rahul_portfolio_level');
    const savedXp = localStorage.getItem('rahul_portfolio_xp');
    const savedQuests = localStorage.getItem('rahul_portfolio_quests');

    if (savedLevel) setLevel(parseInt(savedLevel, 10));
    if (savedXp) setXp(parseInt(savedXp, 10));
    if (savedQuests) {
      try {
        setQuests(JSON.parse(savedQuests));
      } catch (e) {
        console.error('Failed to parse quests from localStorage');
      }
    }
  }, []);

  const saveToStorage = (newLevel, newXp, newQuests) => {
    localStorage.setItem('rahul_portfolio_level', newLevel.toString());
    localStorage.setItem('rahul_portfolio_xp', newXp.toString());
    localStorage.setItem('rahul_portfolio_quests', JSON.stringify(newQuests));
  };

  useEffect(() => {
    const handleXpGain = (e) => {
      const { amount, action, incrementKey } = e.detail;
      
      setQuests(prevQuests => {
        let updatedQuests = { ...prevQuests };
        let pointsToAdd = amount;

        if (incrementKey && updatedQuests[incrementKey]) {
          const quest = updatedQuests[incrementKey];
          if (!quest.completed) {
            const nextVal = Math.min(quest.current + 1, quest.target);
            const justCompleted = nextVal === quest.target;
            
            updatedQuests[incrementKey] = {
              ...quest,
              current: nextVal,
              completed: justCompleted
            };

            if (justCompleted) {
              pointsToAdd += quest.xpReward;
              addToast(`Quest Completed! ${quest.label} (+${quest.xpReward} XP)`);
            }
          } else {
            // Already completed, don't re-reward base action XP if it was already awarded
            return prevQuests;
          }
        }

        addToast(`+${amount} XP: ${action}`);

        setXp(currentXp => {
          let newXp = currentXp + pointsToAdd;
          let newLevel = level;

          while (newXp >= xpNeeded && newLevel < 5) {
            newXp -= xpNeeded;
            newLevel += 1;
            addToast(`🎉 LEVEL UP! You are now a ${levelTitles[newLevel]}!`, true);
            
            // Dispatch a level-up event for other components to react to
            window.dispatchEvent(new CustomEvent('level-up', { detail: { level: newLevel } }));
          }

          if (newLevel === 5) {
            newXp = Math.min(newXp, xpNeeded); // Cap at max
          }

          saveToStorage(newLevel, newXp, updatedQuests);
          setLevel(newLevel);
          return newXp;
        });

        return updatedQuests;
      });
    };

    window.addEventListener('gain-xp', handleXpGain);
    return () => window.removeEventListener('gain-xp', handleXpGain);
  }, [level]);

  const addToast = (message, isLevelUp = false) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, isLevelUp }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const resetProgress = () => {
    const defaultQuests = {
      exploreProjects: { label: 'Explore 3 production project cards', target: 3, current: 0, completed: false, xpReward: 20 },
      runSqlQuery: { label: 'Execute a SELECT statement in the SQL Sandbox', target: 1, current: 0, completed: false, xpReward: 25 },
      tweakSystem: { label: 'Toggle Redis and Kafka in the design playground', target: 2, current: 0, completed: false, xpReward: 25 },
      chatBot: { label: 'Ask Bubbles Bot about a technical project', target: 1, current: 0, completed: false, xpReward: 15 },
      playTrack: { label: 'Listen to Rahul\'s professional vocal performance link', target: 1, current: 0, completed: false, xpReward: 30 },
      matrixCommand: { label: 'Enter 3 shell commands in the Matrix terminal', target: 3, current: 0, completed: false, xpReward: 25 },
      secretEasterEgg: { label: 'Discover the terminal Easter Egg (sudo hire rahul)', target: 1, current: 0, completed: false, xpReward: 50 }
    };
    setLevel(1);
    setXp(0);
    setQuests(defaultQuests);
    saveToStorage(1, 0, defaultQuests);
    addToast('Progress reset successfully!');
  };

  const getPercent = () => {
    if (level === 5) return 100;
    return (xp / xpNeeded) * 100;
  };

  return (
    <>
      {/* Floating Quest Tracker HUD Trigger */}
      <div className="quest-tracker-hud" onClick={() => setIsOpen(!isOpen)}>
        <div className="hud-badge">
          <Star size={16} className="star-icon animating" />
          <span className="hud-level-text">Lvl {level}</span>
        </div>
        <div className="hud-progress-container">
          <span className="hud-title">{levelTitles[level]}</span>
          <div className="hud-bar-bg">
            <div className="hud-bar-fill" style={{ width: `${getPercent()}%` }}></div>
          </div>
        </div>
        <div className="hud-points">
          {level === 5 ? 'MAX' : `${xp}/${xpNeeded} XP`}
        </div>
      </div>

      {/* Quest Details Modal Overlay */}
      {isOpen && (
        <div className="quest-panel-overlay">
          <div className="quest-panel-card">
            <div className="quest-panel-header">
              <div className="quest-panel-title-wrapper">
                <Trophy size={20} className="trophy-icon" />
                <h3>Recruiter Quest Dashboard</h3>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="quest-panel-body">
              <div className="recruiter-status-card">
                <Shield size={36} className="shield-icon" />
                <div className="status-meta">
                  <span className="meta-label">Current HR Ranking</span>
                  <h4 className="meta-title">{levelTitles[level]}</h4>
                  <p className="meta-desc">
                    {level === 5 
                      ? '🔓 Secret Vault Unlocked! You have full access to Rahul\'s prime commercial repositories.' 
                      : `Gain ${xpNeeded - xp} more XP to level up. Interact with sandbox panels to gain score.`}
                  </p>
                </div>
              </div>

              <div className="quests-section-title">🛡️ Active Missions ({Object.values(quests).filter(q => q.completed).length} / 7 Completed)</div>
              <div className="quests-list">
                {Object.entries(quests).map(([key, q]) => (
                  <div key={key} className={`quest-item-card ${q.completed ? 'completed' : ''}`}>
                    <div className="quest-checkbox-wrapper">
                      {q.completed ? (
                        <CheckCircle size={18} className="check-icon" />
                      ) : (
                        <div className="empty-checkbox"></div>
                      )}
                    </div>
                    <div className="quest-content">
                      <span className="quest-label-text">{q.label}</span>
                      <div className="quest-sub-line">
                        <span className="quest-tracker-numbers">Progress: {q.current}/{q.target}</span>
                        <span className="quest-reward">+{q.xpReward} XP</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="quest-panel-footer">
              <button onClick={resetProgress} className="reset-btn">
                Reset Progress
              </button>
              <div className="footer-credits font-mono">Rahul Garg Telemetry Service v1.2</div>
            </div>
          </div>
        </div>
      )}

      {/* Float Toasts notifications */}
      <div className="xp-toasts-container">
        {toasts.map(t => (
          <div key={t.id} className={`xp-toast ${t.isLevelUp ? 'level-up' : ''}`}>
            {t.isLevelUp ? <Award size={20} className="toast-icon animate-spin" /> : <Flame size={18} className="toast-icon" />}
            <span className="toast-message">{t.message}</span>
          </div>
        ))}
      </div>

      <style>{`
        .quest-tracker-hud {
          position: fixed;
          top: 80px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(17, 28, 45, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(245, 243, 239, 0.12);
          border-radius: 100px;
          padding: 8px 16px;
          color: var(--text-light);
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
          transition: var(--transition-normal);
          font-family: var(--font-sans);
        }

        .quest-tracker-hud:hover {
          background: var(--bg-darker);
          border-color: var(--accent-lavender);
          transform: translateY(-2px);
        }

        .hud-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(94, 90, 209, 0.25);
          border: 1px solid rgba(94, 90, 209, 0.4);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .star-icon {
          color: #f59e0b;
        }

        .star-icon.animating {
          animation: pulse 1.5s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); }
          100% { transform: scale(1.15); }
        }

        .hud-level-text {
          font-weight: 700;
          font-size: 11px;
          font-family: var(--font-mono);
        }

        .hud-progress-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 140px;
        }

        .hud-title {
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--accent-lavender);
        }

        .hud-bar-bg {
          height: 6px;
          background: rgba(245, 243, 239, 0.15);
          border-radius: 3px;
          overflow: hidden;
        }

        .hud-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-lavender));
          border-radius: 3px;
          transition: width var(--transition-slow);
        }

        .hud-points {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--text-light);
        }

        /* Quest details popup */
        .quest-panel-overlay {
          position: fixed;
          inset: 0;
          background: rgba(14, 23, 37, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          font-family: var(--font-sans);
          padding: 16px;
        }

        .quest-panel-card {
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 24px 60px rgba(17, 28, 45, 0.2);
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-panel-header {
          background: var(--bg-darker);
          color: var(--text-light);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .quest-panel-title-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quest-panel-title-wrapper h3 {
          font-size: 16px;
          font-weight: 600;
        }

        .trophy-icon {
          color: #f59e0b;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted-light);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .close-btn:hover {
          color: var(--text-light);
        }

        .quest-panel-body {
          padding: 24px;
          max-height: 400px;
          overflow-y: auto;
          background: var(--bg-primary);
        }

        .recruiter-status-card {
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 24px;
        }

        .shield-icon {
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .status-meta {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 2px 0 4px 0;
        }

        .meta-desc {
          font-size: 11px;
          color: var(--text-muted-dark);
          line-height: 1.4;
        }

        .quests-section-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted-dark);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .quests-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quest-item-card {
          background: var(--bg-darker);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 14px;
          display: flex;
          gap: 12px;
          transition: var(--transition-fast);
        }

        .quest-item-card.completed {
          background: rgba(16, 185, 129, 0.03);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .quest-checkbox-wrapper {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-icon {
          color: #10b981;
        }

        .empty-checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(17, 28, 45, 0.2);
          border-radius: 4px;
        }

        .quest-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }

        .quest-label-text {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .quest-item-card.completed .quest-label-text {
          color: var(--text-muted-dark);
          text-decoration: line-through;
        }

        .quest-sub-line {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted-dark);
        }

        .quest-reward {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--accent-purple);
        }

        .quest-item-card.completed .quest-reward {
          color: #10b981;
        }

        .quest-panel-footer {
          background: var(--bg-darker);
          border-top: 1px solid var(--border-color);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reset-btn {
          background: none;
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .reset-btn:hover {
          background: rgba(239, 68, 68, 0.05);
        }

        .footer-credits {
          font-size: 9px;
          color: var(--text-muted-dark);
        }

        /* Toasts Container */
        .xp-toasts-container {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 100000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          pointer-events: none;
          max-width: 320px;
        }

        .xp-toast {
          background: var(--bg-darker);
          color: var(--text-light);
          border: 1px solid rgba(245, 243, 239, 0.12);
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          animation: toastIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          pointer-events: auto;
        }

        .xp-toast.level-up {
          background: linear-gradient(135deg, var(--bg-darker), #1e1b4b);
          border-color: #f59e0b;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.2);
        }

        .toast-icon {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .xp-toast.level-up .toast-icon {
          color: #f59e0b;
        }

        .toast-message {
          font-size: 13px;
          font-weight: 500;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-40px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        @media (max-width: 768px) {
          .quest-tracker-hud {
            top: auto;
            bottom: 24px;
            right: auto;
            left: 24px;
            width: calc(100vw - 120px);
            justify-content: space-between;
          }
          
          .hud-progress-container {
            width: 45%;
          }

          .xp-toasts-container {
            bottom: 90px;
            left: 16px;
          }
        }
      `}</style>
    </>
  );
}
