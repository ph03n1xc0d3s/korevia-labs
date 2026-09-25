import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Animated system architecture diagram for the hero section.
 * Shows: User → API → Services → AI → Database → Infrastructure
 * Uses canvas for performant animated connections.
 */
export function HeroArchitecture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const nodes = [
    { label: 'Client', x: 0.08, y: 0.18 },
    { label: 'API Gateway', x: 0.28, y: 0.12 },
    { label: 'Services', x: 0.5, y: 0.08 },
    { label: 'AI Engine', x: 0.72, y: 0.14 },
    { label: 'Database', x: 0.88, y: 0.22 },
    { label: 'Auth', x: 0.22, y: 0.42 },
    { label: 'Queue', x: 0.42, y: 0.38 },
    { label: 'Cache', x: 0.62, y: 0.36 },
    { label: 'Storage', x: 0.82, y: 0.44 },
    { label: 'Monitoring', x: 0.35, y: 0.62 },
    { label: 'CDN', x: 0.55, y: 0.58 },
    { label: 'Workers', x: 0.75, y: 0.64 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [1, 5], [2, 6], [3, 7], [4, 8],
    [5, 6], [6, 7], [7, 8],
    [6, 9], [7, 10], [8, 11],
    [9, 10], [10, 11],
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.008;
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      // Draw connections
      connections.forEach(([from, to], i) => {
        const n1 = nodes[from];
        const n2 = nodes[to];
        const x1 = n1.x * w;
        const y1 = n1.y * h;
        const x2 = n2.x * w;
        const y2 = n2.y * h;

        // Animated pulse along the line
        const pulsePos = (time * 0.5 + i * 0.15) % 1;
        const px = x1 + (x2 - x1) * pulsePos;
        const py = y1 + (y2 - y1) * pulsePos;

        // Line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(79, 143, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Pulse dot
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 255, ${0.4 + Math.sin(time * 2 + i) * 0.2})`;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const x = node.x * w;
        const y = node.y * h;
        const pulse = Math.sin(time * 1.5 + i * 0.7) * 0.3;

        // Glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 24);
        gradient.addColorStop(0, `rgba(79, 143, 255, ${0.12 + pulse * 0.05})`);
        gradient.addColorStop(1, 'rgba(79, 143, 255, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 24, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Node dot
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 255, ${0.6 + pulse * 0.2})`;
        ctx.fill();

        // Label
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.fillStyle = `rgba(148, 152, 176, ${0.5 + pulse * 0.15})`;
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y + 18);
      });

      animationId = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!motionQuery.matches) {
      animate();
    } else {
      // Draw static version
      time = 0;
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);
      connections.forEach(([from, to]) => {
        const n1 = nodes[from];
        const n2 = nodes[to];
        ctx.beginPath();
        ctx.moveTo(n1.x * w, n1.y * h);
        ctx.lineTo(n2.x * w, n2.y * h);
        ctx.strokeStyle = 'rgba(79, 143, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      nodes.forEach((node) => {
        const x = node.x * w;
        const y = node.y * h;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 143, 255, 0.6)';
        ctx.fill();
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.fillStyle = 'rgba(148, 152, 176, 0.5)';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, x, y + 18);
      });
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="relative w-full h-full min-h-[300px]"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
