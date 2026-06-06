import React, { useEffect, useRef, useState } from 'react';

export default function ParticleOrbit() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const nodes = [
      { label: 'Node.js', color: '#68d391', angle: 0, radius: 110, speed: 0.006, size: 8 },
      { label: 'React', color: '#63b3ed', angle: Math.PI * 0.5, radius: 90, speed: -0.009, size: 7 },
      { label: 'MySQL', color: '#f6ad55', angle: Math.PI, radius: 130, speed: 0.007, size: 7 },
      { label: 'Redis', color: '#fc8181', angle: Math.PI * 1.5, radius: 100, speed: -0.005, size: 6 },
      { label: 'Kafka', color: '#b794f4', angle: Math.PI * 0.3, radius: 145, speed: 0.004, size: 6 },
      { label: 'Docker', color: '#76e4f7', angle: Math.PI * 0.8, radius: 75, speed: -0.011, size: 6 },
      { label: 'MongoDB', color: '#9ae6b4', angle: Math.PI * 1.2, radius: 160, speed: 0.003, size: 5 },
      { label: 'TypeScript', color: '#a0afee', angle: Math.PI * 1.7, radius: 80, speed: 0.008, size: 6 },
      { label: 'Nginx', color: '#fbd38d', angle: Math.PI * 0.6, radius: 120, speed: -0.006, size: 5 },
      { label: 'GraphQL', color: '#f687b3', angle: Math.PI * 1.4, radius: 95, speed: 0.01, size: 5 },
    ];

    // Particles
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const cx = w / 2;
    const cy = h / 2;

    const drawRing = (radius, color, dashed) => {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.5;
      if (dashed) ctx.setLineDash([4, 8]);
      else ctx.setLineDash([]);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Background particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 175, 238, ${p.alpha})`;
        ctx.fill();
      });

      // Orbit rings
      [75, 90, 100, 110, 120, 130, 145, 160].forEach((r, i) => {
        drawRing(r, `rgba(94, 90, 209, ${0.08 + i * 0.01})`, i % 2 === 0);
      });

      // Center core - pulsing glow
      const pulseR = 18 + Math.sin(frame * 0.04) * 4;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseR * 3);
      coreGrad.addColorStop(0, 'rgba(94, 90, 209, 0.9)');
      coreGrad.addColorStop(0.5, 'rgba(94, 90, 209, 0.3)');
      coreGrad.addColorStop(1, 'rgba(94, 90, 209, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR * 3, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = '#5e5ad1';
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('RG', cx, cy);

      // Orbiting nodes
      nodes.forEach(node => {
        node.angle += node.speed;
        const x = cx + Math.cos(node.angle) * node.radius;
        const y = cy + Math.sin(node.angle) * node.radius * 0.42; // Perspective tilt

        // Trail/glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, node.size * 3);
        grd.addColorStop(0, node.color + 'cc');
        grd.addColorStop(1, node.color + '00');
        ctx.beginPath();
        ctx.arc(x, y, node.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Label
        ctx.fillStyle = 'rgba(245,243,239,0.85)';
        ctx.font = `${node.size < 7 ? '7' : '8'}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(node.label, x, y + node.size + 3);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="orbit-wrapper">
      <canvas ref={canvasRef} className="orbit-canvas" />
      <div className="orbit-label font-mono">⚡ Live Tech Stack Galaxy</div>
      <style>{`
        .orbit-wrapper {
          position: relative;
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .orbit-canvas {
          width: 100%;
          height: 380px;
          display: block;
        }
        .orbit-label {
          font-size: 10px;
          color: rgba(160, 175, 238, 0.6);
          letter-spacing: 0.1em;
        }
      `}</style>
    </div>
  );
}
