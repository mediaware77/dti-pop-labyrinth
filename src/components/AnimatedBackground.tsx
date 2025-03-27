import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const paths = useRef<Array<{ element: SVGPathElement; offsetY: number }>>([]);
  const particles = useRef<Array<{ element: SVGCircleElement; x: number; y: number; speedX: number; speedY: number }>>([]);
  const phase = useRef(0);
  const weavePhase = useRef(0);

  // --- Parameters (from script.js) ---
  const config = {
    numLines: 15,
    amplitude: 60,
    baseFrequency: 0.005,
    phaseSpeed: 0.02,
    lineWidth: 1,
    lineSpacing: 2,
    baseColor: [70, 130, 180], // Steel Blue - RGB
    colorVariation: 50,
    opacity: 0.6,
    weaveFrequency: 0.02,
    weaveAmplitude: 5,
    weaveSpeed: 0.04,
    numParticles: 50,
    particleRadius: 1.5,
    particleSpawnRangeY: 80
  };

  const svgWidth = 1200; // Corresponds to viewBox width
  const svgHeight = 400; // Corresponds to viewBox height
  const centerY = svgHeight / 2;
  const svgNS = "http://www.w3.org/2000/svg";

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Clear previous elements if any (for hot-reloading scenarios)
    paths.current = [];
    particles.current = [];
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    // --- Create Wave Paths ---
    function createPaths() {
      for (let i = 0; i < config.numLines; i++) {
        const path = document.createElementNS(svgNS, 'path');
        const progress = i / (config.numLines - 1);

        const r = Math.max(0, Math.min(255, config.baseColor[0] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const g = Math.max(0, Math.min(255, config.baseColor[1] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const b = Math.max(0, Math.min(255, config.baseColor[2] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const opacity = config.opacity + (Math.random() - 0.5) * 0.2;

        path.setAttribute('stroke', `rgba(${r},${g},${b}, ${opacity})`);
        path.setAttribute('stroke-width', config.lineWidth.toString());
        svg.appendChild(path);
        paths.current.push({
          element: path,
          offsetY: (i - (config.numLines - 1) / 2) * config.lineSpacing
        });
      }
    }

    // --- Create Particles ---
    function createParticles() {
      for (let i = 0; i < config.numParticles; i++) {
        const circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('r', (config.particleRadius * (0.5 + Math.random())).toFixed(2));
        // Apply animation directly via style or rely on global CSS
        circle.style.animation = `twinkle 2s infinite alternate ease-in-out`;
        circle.style.animationDelay = `${Math.random() * -2}s`;
        svg.appendChild(circle);
        particles.current.push({
          element: circle,
          x: Math.random() * svgWidth,
          y: centerY + (Math.random() - 0.5) * config.particleSpawnRangeY * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.2
        });
      }
    }

    // --- Update Wave Paths ---
    function updateWaves() {
      phase.current += config.phaseSpeed;
      weavePhase.current += config.weaveSpeed;

      paths.current.forEach((pathData, lineIndex) => {
        let d = `M 0 ${centerY}`;
        const points = [];

        for (let x = 0; x <= svgWidth; x += 10) {
          const mainWaveY = config.amplitude * Math.sin(x * config.baseFrequency + phase.current);
          const weaveOffsetY = config.weaveAmplitude * Math.sin(x * config.weaveFrequency + weavePhase.current + lineIndex * 0.2);
          const y = centerY + mainWaveY + pathData.offsetY + weaveOffsetY;
          points.push(`${x},${y.toFixed(2)}`);
        }

        d += ` L ${points.join(' ')}`;
        pathData.element.setAttribute('d', d);
      });
    }

    // --- Update Particles ---
    function updateParticles() {
      particles.current.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -20 || p.x > svgWidth + 20 || p.y < 0 || p.y > svgHeight) {
          p.x = Math.random() * svgWidth * 0.5 + svgWidth * 0.25;
          p.y = centerY + (Math.random() - 0.5) * config.particleSpawnRangeY;
          p.speedX = (Math.random() - 0.5) * 0.5;
          p.speedY = (Math.random() - 0.5) * 0.2;
        }

        const centerWaveY = centerY + config.amplitude * Math.sin(p.x * config.baseFrequency + phase.current);
        p.speedY += (centerWaveY - p.y) * 0.0001;
        p.speedX *= 0.99;
        p.speedY *= 0.99;

        p.element.setAttribute('cx', p.x.toFixed(2));
        p.element.setAttribute('cy', p.y.toFixed(2));
      });
    }

    // --- Animation Loop ---
    function animate() {
      updateWaves();
      updateParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    }

    // --- Initialization ---
    createPaths();
    createParticles();
    animate(); // Start the animation

    // --- Cleanup function ---
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      // Optional: Clear refs if needed, though usually not necessary unless remounting logic is complex
      // paths.current = [];
      // particles.current = [];
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice" // Use slice to cover the area
      >
        {/* Paths and particles will be added here by useEffect */}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
