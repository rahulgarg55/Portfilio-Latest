import React, { useState, useRef } from 'react';

export default function Card3D({ children, maxTilt = 10, className = '' }) {
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles
    const rotateX = -(mouseY / (height / 2)) * maxTilt;
    const rotateY = (mouseX / (width / 2)) * maxTilt;

    // Glare position calculation
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
    });

    setGlareStyle({
      opacity: 0.35,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 80%)`,
      transition: 'opacity 0.1s ease'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`card-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        ...style
      }}
    >
      {/* Glare Gloss Layer */}
      <div
        className="card-3d-glare"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'overlay',
          ...glareStyle
        }}
      />
      
      {/* Actual wrapped elements */}
      <div style={{ transform: 'translateZ(20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
