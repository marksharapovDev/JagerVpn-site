'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789'.split('');
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from({ length: columns }, () => Math.random() * -50);

    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };
    window.addEventListener('resize', handleResize);

    function draw() {
      ctx!.fillStyle = 'rgba(13, 17, 23, 0.1)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.fillStyle = 'rgba(0, 229, 160, 0.55)';
      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.35,
      }}
    />
  );
}
