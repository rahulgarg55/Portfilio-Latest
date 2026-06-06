import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Play } from 'lucide-react';

export default function TerminalSandbox() {
  const [history, setHistory] = useState([
    { text: 'Rahul Garg Secure Kernel Console [v2.4.9]', type: 'system' },
    { text: 'Type "help" or "ls" to view available diagnostic commands.', type: 'system' },
    { text: '', type: 'system' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandCount, setCommandCount] = useState(0);
  const [showMatrixRain, setShowMatrixRain] = useState(false);
  
  const terminalEndRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Command handling logic
  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newHistory = [...history, { text: `rahul-guest@root:~$ ${trimmed}`, type: 'input' }];

    // Trigger matrixCommand quest increment (max 3)
    setCommandCount(prev => {
      const nextCount = prev + 1;
      window.dispatchEvent(new CustomEvent('gain-xp', {
        detail: {
          amount: 5,
          action: `Executed command "${trimmed}"`,
          incrementKey: 'matrixCommand'
        }
      }));
      return nextCount;
    });

    let output = [];

    switch (lower) {
      case 'help':
      case 'ls':
        output = [
          { text: 'Available Shell Executables:', type: 'system' },
          { text: '  experience - View professional career milestones & roles', type: 'info' },
          { text: '  projects   - Output structural database case studies', type: 'info' },
          { text: '  skills     - View core technology stacks and databases', type: 'info' },
          { text: '  leetcode   - Output CP rankings, DSA count, and metrics', type: 'info' },
          { text: '  clear      - Clear terminal screen diagnostic logs', type: 'info' },
          { text: '  sudo hire rahul - Execute administrative recruitment action', type: 'warning' }
        ];
        break;

      case 'experience':
        output = [
          { text: '⚡ CAREER TIMELINE TREE:', type: 'system' },
          { text: '├─ Mid Level Software Engineer @ Jupitice Justice Technologies (Aug 2025 - Present)', type: 'info' },
          { text: '│  ├─ Judicial platforms data integrations & Offline KYC systems', type: 'muted' },
          { text: '│  └─ Meta Business Manager Webhooks for WhatsApp notifications', type: 'muted' },
          { text: '├─ MERN Full Stack Developer @ Basta Tech Solutions (Oct 2023 - July 2025)', type: 'info' },
          { text: '│  ├─ Designed full-stack European Casino (BastaxCasino)', type: 'muted' },
          { text: '│  └─ Configured microservices using Redis & Kafka brokers', type: 'muted' },
          { text: '└─ Full Stack Developer @ Zapbuild Technologies (Mar 2022 - Oct 2023)', type: 'info' },
          { text: '   └─ Built role-based MySQL data warehousing stream interfaces', type: 'muted' }
        ];
        break;

      case 'projects':
        output = [
          { text: '📁 PRODUCTION DEPLOYMENTS LOG:', type: 'system' },
          { text: '▶ BastaxCasino - Casino iGaming platform | React, Node.js, MongoDB', type: 'info' },
          { text: '▶ Decentralized AI DApp - Blockchain authorization | Solidity, Web3', type: 'info' },
          { text: '▶ Supreme/High Court Scrapers - Real-time ETL pipeline | MySQL', type: 'info' },
          { text: '▶ Zapier Automation Flow - Google Calendar, M365 webhooks', type: 'info' },
          { text: '▶ Food Store Platform - E-commerce cart system | MongoDB, Express', type: 'info' }
        ];
        break;

      case 'skills':
        output = [
          { text: '🛠️ SOFTWARE ENGINEERING STACK GRID:', type: 'system' },
          { text: '  Languages  : JavaScript (ES6+), TypeScript, C++ (Competitive DSA)', type: 'info' },
          { text: '  Frameworks : Node.js, Express.js, React.js, Next.js', type: 'info' },
          { text: '  Databases  : MySQL, MongoDB, Redis (In-memory storage)', type: 'info' },
          { text: '  Brokerage  : Apache Kafka (Event Queueing / streaming)', type: 'info' },
          { text: '  Tools/DevOps: Docker, Nginx, PM2, Git, Swagger, SonarQube', type: 'info' }
        ];
        break;

      case 'leetcode':
        output = [
          { text: '🏆 COMPETITIVE PROGRAMMING TELEMETRY:', type: 'system' },
          { text: '  LeetCode Max Rating : 1753 (3 Star Developer)', type: 'info' },
          { text: '  Problems Solved     : 1500+ across GFG & LeetCode', type: 'info' },
          { text: '  GeeksForGeeks Rank  : #1 in CGC Landran campus', type: 'info' },
          { text: '  ICPC Regionals      : Team Rank 613 (Amritapuri, 2021)', type: 'info' }
        ];
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo hire rahul':
        triggerMatrixRain();
        output = [
          { text: '[SECURITY ACCESS GRANTED] Executing digital authentication bypass...', type: 'warning' },
          { text: 'HR Sourcing protocol bypassed. Elite Level Partner token deployed.', type: 'success' },
          { text: 'Recruit ping triggered. Initiating connection protocols...', type: 'info' }
        ];
        break;

      default:
        output = [
          { text: `Command not found: "${trimmed}". Type "help" to display instructions.`, type: 'error' }
        ];
        break;
    }

    setHistory([...newHistory, ...output, { text: '', type: 'system' }]);
  };

  const triggerMatrixRain = () => {
    setShowMatrixRain(true);
    // Trigger Easter Egg quest increment
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 50,
        action: 'Sudo Access Unlocked - Matrix Mode!',
        incrementKey: 'secretEasterEgg'
      }
    }));

    setTimeout(() => {
      setShowMatrixRain(false);
    }, 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  // Matrix Digital Rain Canvas Simulation
  useEffect(() => {
    if (!showMatrixRain || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const alphabet = matrixChars.split('');

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    let animationFrameId;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [showMatrixRain]);

  return (
    <section id="terminal" className="terminal-section dark-section">
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--accent-lavender)' }}>Diagnostic Shell</span>
        <h2 className="section-title light">Secure Command Line Interface</h2>
        <p className="section-subtitle light">
          Type standard server terminal commands to query Rahul Garg's full experience history, technical credentials, or leetcode standing.
        </p>

        {/* Terminal Screen box */}
        <div className="terminal-box">
          <div className="terminal-bar">
            <div className="bar-circles">
              <span className="circle red"></span>
              <span className="circle yellow"></span>
              <span className="circle green"></span>
            </div>
            <div className="bar-title">bash // rahul-secure-kernel</div>
            <div className="bar-icon"><Terminal size={14} /></div>
          </div>

          <div className="terminal-screen">
            <div className="scanlines"></div>
            <div className="terminal-content">
              {history.map((line, idx) => (
                <div key={idx} className={`terminal-line ${line.type}`}>
                  {line.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <div className="terminal-input-row">
              <span className="terminal-prompt">rahul-guest@root:~$</span>
              <input
                type="text"
                className="terminal-input-box"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help'..."
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full screen Matrix rain overlay */}
      {showMatrixRain && (
        <div className="matrix-rain-overlay">
          <canvas ref={canvasRef} className="matrix-canvas"></canvas>
          <div className="matrix-notification">
            <Shield size={40} className="shield-icon" />
            <h3>ACCESS GRANTED</h3>
            <p>Bypassing security ledger... recruiter quest unlocked!</p>
          </div>
        </div>
      )}

      <style>{`
        .terminal-section {
          background-color: #0b111a;
          border-bottom: 1px solid rgba(245, 243, 239, 0.1);
        }

        .terminal-box {
          background-color: #070a13;
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.05);
          height: 380px;
          display: flex;
          flex-direction: column;
        }

        .terminal-bar {
          background-color: #0d1222;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(16, 185, 129, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bar-circles {
          display: flex;
          gap: 6px;
        }

        .circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .circle.red { background-color: #ef4444; }
        .circle.yellow { background-color: #f59e0b; }
        .circle.green { background-color: #10b981; }

        .bar-title {
          font-family: var(--font-mono);
          font-size: 11px;
          color: rgba(16, 185, 129, 0.75);
          letter-spacing: 0.05em;
        }

        .bar-icon {
          color: rgba(16, 185, 129, 0.5);
        }

        .terminal-screen {
          flex-grow: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Monitor Scanline shader effect */
        .scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.06),
            rgba(0, 255, 0, 0.02),
            rgba(0, 0, 255, 0.06)
          );
          background-size: 100% 4px, 6px 100%;
          z-index: 10;
          pointer-events: none;
        }

        .terminal-content {
          flex-grow: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 13px;
          margin-bottom: 16px;
          scrollbar-width: thin;
        }

        .terminal-content::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-content::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 3px;
        }

        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.5;
        }

        .terminal-line.system { color: #34d399; }
        .terminal-line.input { color: #60a5fa; }
        .terminal-line.info { color: #a7f3d0; }
        .terminal-line.warning { color: #fbbf24; }
        .terminal-line.success { color: #34d399; font-weight: 600; text-shadow: 0 0 4px rgba(16, 185, 129, 0.4); }
        .terminal-line.muted { color: rgba(16, 185, 129, 0.4); font-size: 12px; }
        .terminal-line.error { color: #f87171; }

        .terminal-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid rgba(16, 185, 129, 0.1);
          padding-top: 12px;
          z-index: 12;
        }

        .terminal-prompt {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #60a5fa;
          font-weight: 600;
        }

        .terminal-input-box {
          flex-grow: 1;
          background: none;
          border: none;
          outline: none;
          font-family: var(--font-mono);
          font-size: 13px;
          color: #10b981;
          caret-color: #10b981;
          width: 100%;
        }

        /* Matrix rain overlay design */
        .matrix-rain-overlay {
          position: fixed;
          inset: 0;
          z-index: 20000;
          background-color: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .matrix-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .matrix-notification {
          position: relative;
          z-index: 2;
          background: rgba(0, 0, 0, 0.85);
          border: 2px solid #0f0;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          color: #0f0;
          font-family: var(--font-mono);
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
          max-width: 420px;
          width: 90%;
        }

        .matrix-notification .shield-icon {
          animation: pulseGlow 1.5s infinite;
          margin-bottom: 16px;
        }

        .matrix-notification h3 {
          font-size: 24px;
          margin-bottom: 12px;
          letter-spacing: 0.1em;
        }

        .matrix-notification p {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(0, 255, 0, 0.75);
        }
      `}</style>
    </section>
  );
}
