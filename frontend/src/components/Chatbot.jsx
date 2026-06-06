import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Rahul's Virtual Agent. 🤖 I can answer your questions about his experiences, core stacks, competitive coding, or education. Feel free to click a prompt below or type your inquiry!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about BastaxCasino",
    "What is your GFG / LeetCode standing?",
    "Do you have Kafka & Redis experience?",
    "How can I contact you?"
  ];

  const handlePromptClick = (prompt) => {
    sendMessage(prompt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    setInputText('');
  };

  const sendMessage = (text) => {
    // Add user message
    const userMsg = {
      id: messages.length + 1,
      sender: 'user',
      text
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Trigger Quest XP award
    window.dispatchEvent(new CustomEvent('gain-xp', {
      detail: {
        amount: 10,
        action: `Interacted with AI Recruiter bot: "${text.substring(0, 24)}..."`,
        incrementKey: 'chatBot'
      }
    }));

    // Trigger bot response after delay
    setTimeout(() => {
      const replyText = getBotResponse(text);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'bot',
        text: replyText
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes('casino') || q.includes('basta')) {
      return "For Basta Tech, Rahul led a team of 4 developers to build BastaxCasino, a full-stack European casino application. He architected the database, built 100+ API endpoints using Node.js, and reduced DevOps deployment times by 50% using Docker & Nginx Reverse Proxy.";
    }
    if (q.includes('gfg') || q.includes('geeksforgeeks') || q.includes('leetcode') || q.includes('problems') || q.includes('solved')) {
      return "Rahul has a solid competitive programming record! He holds Rank 1st at CGC Landran college, has solved over 1500+ algorithmic problems across GFG & LeetCode, secured a Max LeetCode rating of 1753 (3 Star), and placed 613th in the ICPC Amritapuri Regionals.";
    }
    if (q.includes('kafka') || q.includes('redis') || q.includes('microservice') || q.includes('banking')) {
      return "Yes! Rahul has developed banking microservices incorporating Kafka message brokers and Redis caching layers. He also optimized backend databases at Jupitice Justice using key-value storage nodes, reducing query latency.";
    }
    if (q.includes('whatsapp') || q.includes('meta') || q.includes('webhook')) {
      return "Rahul integrated WhatsApp Business APIs using Meta Business Manager and Webhooks. This enabled automated real-time messaging, customer notification systems, and transaction receipts within Jupitice's core workflow.";
    }
    if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      return "You can reach Rahul directly via Email at gargr0109@gmail.com or call/WhatsApp him at +91 78072 21279. You can also fill out the contact form below and he will get back to you within 24 hours.";
    }
    if (q.includes('justice') || q.includes('jupitice') || q.includes('court') || q.includes('judicial')) {
      return "At Jupitice Justice Technologies, Rahul works as a Mid Level Engineer on official Supreme Court and High Court platforms, fetching real-time legal data, building Offline KYC services, and working on the Lok Adalat government suite.";
    }
    if (q.includes('education') || q.includes('college') || q.includes('b.tech') || q.includes('cgpa')) {
      return "Rahul graduated with a B.Tech in Computer Science from Chandigarh Group of Colleges (CGC) Landran, Mohali in March 2023 with a CGPA of 7.5.";
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return "Hello! How can I assist you with checking Rahul's credentials today? You can ask about his tech stack, project roles, or hiring details.";
    }

    return "Thanks for asking! Rahul specializes in Node.js, React, Express, MySQL, MongoDB, and system scaling. Is there a specific project (like Jupitice or BastaxCasino) or technical skill you'd like to inspect?";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
      <button 
        className={`chatbot-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open virtual recruiter assistant"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        {!isOpen && <span className="trigger-pulse"></span>}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-bot-identity">
              <div className="chat-avatar">
                <Bot size={16} />
              </div>
              <div className="chat-identity-text">
                <span className="chat-name">Bubbles Bot</span>
                <span className="chat-status">Interview Prep Engine</span>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
              <X size={16} />
            </button>
          </div>

          {/* Messages Panel */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-container ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-container bot">
                <div className="chat-bubble bot typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompts Panel */}
          <div className="chat-prompts">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="prompt-chip"
                onClick={() => handlePromptClick(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Panel */}
          <form onSubmit={handleSubmit} className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about Node, projects, or GFG..."
              disabled={isTyping}
            />
            <button type="submit" className="chat-send-btn" disabled={isTyping || !inputText.trim()}>
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chatbot-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 2000;
          font-family: var(--font-sans);
        }

        .chatbot-trigger {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: var(--accent-purple);
          border: none;
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(94, 90, 209, 0.3);
          transition: var(--transition-normal);
          position: relative;
        }

        .chatbot-trigger:hover {
          transform: scale(1.05);
          background-color: #4c48b8;
          box-shadow: 0 8px 24px rgba(94, 90, 209, 0.5);
        }

        .chatbot-trigger.active {
          background-color: var(--bg-dark);
          box-shadow: 0 8px 24px rgba(17, 28, 45, 0.2);
        }

        .trigger-pulse {
          position: absolute;
          top: 0;
          right: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 0 8px #10b981;
          animation: pulseGlow 2s infinite;
        }

        /* Chat window panel */
        .chat-window {
          position: absolute;
          bottom: 72px;
          right: 0;
          width: 360px;
          height: 480px;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(17, 28, 45, 0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: fadeIn 0.3s ease;
        }

        .chat-header {
          background-color: var(--bg-darker);
          color: var(--text-light);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(245, 243, 239, 0.08);
        }

        .chat-bot-identity {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(160, 175, 238, 0.15);
          color: var(--accent-lavender);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-identity-text {
          display: flex;
          flex-direction: column;
        }

        .chat-name {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
        }

        .chat-status {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--accent-lavender);
          letter-spacing: 0.05em;
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: rgba(245, 243, 239, 0.65);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chat-close-btn:hover {
          color: var(--text-light);
        }

        /* Messages */
        .chat-messages {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: var(--bg-primary);
        }

        .chat-bubble-container {
          display: flex;
          width: 100%;
        }

        .chat-bubble-container.bot {
          justify-content: flex-start;
        }

        .chat-bubble-container.user {
          justify-content: flex-end;
        }

        .chat-bubble {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.4;
        }

        .chat-bubble.bot {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          color: var(--text-dark);
          border-top-left-radius: 2px;
        }

        .chat-bubble.user {
          background-color: var(--accent-purple);
          color: var(--text-light);
          border-top-right-radius: 2px;
        }

        /* Typing micro-animation */
        .chat-bubble.typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
        }

        .chat-bubble.typing .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--text-muted-dark);
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .chat-bubble.typing .dot:nth-child(1) { animation-delay: -0.32s; }
        .chat-bubble.typing .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* Prompts */
        .chat-prompts {
          padding: 12px 16px;
          display: flex;
          overflow-x: auto;
          gap: 8px;
          background-color: var(--bg-primary);
          border-top: 1px solid rgba(17, 28, 45, 0.04);
          scrollbar-width: none; /* Firefox */
        }

        .chat-prompts::-webkit-scrollbar {
          display: none; /* Safari/Chrome */
        }

        .prompt-chip {
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          padding: 6px 12px;
          font-size: 11px;
          color: var(--text-muted-dark);
          white-space: nowrap;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .prompt-chip:hover {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          background-color: rgba(94, 90, 209, 0.04);
        }

        /* Input area */
        .chat-input-area {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
        }

        .chat-input {
          flex-grow: 1;
          font-family: var(--font-sans);
          font-size: 13px;
          border: 1px solid rgba(17, 28, 45, 0.12);
          border-radius: 6px;
          padding: 8px 12px;
          outline: none;
          transition: var(--transition-fast);
        }

        .chat-input:focus {
          border-color: var(--accent-purple);
        }

        .chat-send-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background-color: var(--accent-purple);
          color: var(--text-light);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .chat-send-btn:hover:not(:disabled) {
          background-color: #4c48b8;
        }

        .chat-send-btn:disabled {
          background-color: rgba(17, 28, 45, 0.08);
          color: rgba(17, 28, 45, 0.3);
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 32px);
            right: -8px;
          }
        }
      `}</style>
    </div>
  );
}
