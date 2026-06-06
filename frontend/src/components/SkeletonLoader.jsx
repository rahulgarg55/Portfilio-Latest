import React from 'react';

export default function SkeletonLoader({ height = '300px' }) {
  return (
    <div className="skeleton-wrapper" style={{ height }}>
      <div className="skeleton-glow"></div>
      <div className="skeleton-content">
        <div className="skeleton-tag-bar"></div>
        <div className="skeleton-title-bar"></div>
        <div className="skeleton-line-bar short"></div>
        <div className="skeleton-line-bar"></div>
        <div className="skeleton-line-bar medium"></div>
      </div>

      <style>{`
        .skeleton-wrapper {
          width: 100%;
          background: rgba(17, 28, 45, 0.4);
          border: 1px solid rgba(245, 243, 239, 0.08);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .skeleton-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%);
          animation: pulseGlow 1.8s infinite;
        }

        @keyframes pulseGlow {
          100% {
            transform: translateX(100%);
          }
        }

        .skeleton-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skeleton-tag-bar {
          height: 10px;
          width: 80px;
          background-color: rgba(245, 243, 239, 0.06);
          border-radius: 4px;
        }

        .skeleton-title-bar {
          height: 24px;
          width: 260px;
          background-color: rgba(245, 243, 239, 0.08);
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .skeleton-line-bar {
          height: 12px;
          width: 100%;
          background-color: rgba(245, 243, 239, 0.05);
          border-radius: 4px;
        }

        .skeleton-line-bar.medium {
          width: 80%;
        }

        .skeleton-line-bar.short {
          width: 60%;
        }
      `}</style>
    </div>
  );
}
