const svg = document.getElementById('waveform-svg');
const svgNS = "http://www.w3.org/2000/svg";

// --- Parameters ---
const config = {
    numLines: 15,          // Number of wave lines
    amplitude: 60,         // Max height of the wave
    baseFrequency: 0.005,  // How many waves across the width
    phaseSpeed: 0.02,      // How fast the wave moves horizontally
    lineWidth: 1,
    lineSpacing: 2,        // Vertical spacing between lines
    baseColor: [70, 130, 180], // Base color (Steel Blue - RGB)
    colorVariation: 50,    // How much the color can vary
    opacity: 0.6,          // Base opacity
    
    // Weaving effect parameters
    weaveFrequency: 0.02,  // Frequency of the secondary weave
    weaveAmplitude: 5,     // Amplitude of the secondary weave
    weaveSpeed: 0.04,      // Speed of the weave animation

    // Particle parameters
    numParticles: 50,
    particleRadius: 1.5,
    particleSpawnRangeY: 80 // How far particles can stray vertically from the center wave
};

const paths = [];
const particles = [];
let phase = 0;
let weavePhase = 0;
const svgWidth = 1200; // Corresponds to viewBox width
const svgHeight = 400; // Corresponds to viewBox height
const centerY = svgHeight / 2;

// --- Create Wave Paths ---
function createPaths() {
    for (let i = 0; i < config.numLines; i++) {
        const path = document.createElementNS(svgNS, 'path');
        const progress = i / (config.numLines - 1); // 0 to 1
        
        // Vary color and opacity slightly per line
        const r = Math.max(0, Math.min(255, config.baseColor[0] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const g = Math.max(0, Math.min(255, config.baseColor[1] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const b = Math.max(0, Math.min(255, config.baseColor[2] + Math.round((Math.random() - 0.5) * config.colorVariation)));
        const opacity = config.opacity + (Math.random() - 0.5) * 0.2;

        path.setAttribute('stroke', `rgba(${r},${g},${b}, ${opacity})`);
        path.setAttribute('stroke-width', config.lineWidth.toString());
        svg.appendChild(path);
        paths.push({
             element: path, 
             offsetY: (i - (config.numLines - 1) / 2) * config.lineSpacing // Center the lines vertically
        });
    }
}

// --- Create Particles ---
function createParticles() {
    for (let i = 0; i < config.numParticles; i++) {
        const circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('r', (config.particleRadius * (0.5 + Math.random())).toFixed(2)); // Vary size slightly
        circle.style.animationDelay = `${Math.random() * -2}s`; // Offset twinkle animation
        svg.appendChild(circle);
        particles.push({
            element: circle,
            x: Math.random() * svgWidth,
            y: centerY + (Math.random() - 0.5) * config.particleSpawnRangeY * 2,
            speedX: (Math.random() - 0.5) * 0.5, // Slight random drift
            speedY: (Math.random() - 0.5) * 0.2
        });
    }
}

// --- Update Wave Paths ---
function updateWaves() {
    phase += config.phaseSpeed;
    weavePhase += config.weaveSpeed;

    paths.forEach((pathData, lineIndex) => {
        let d = `M 0 ${centerY}`; // Start path description
        const points = [];

        for (let x = 0; x <= svgWidth; x += 10) { // Increase step for performance if needed
            // Main wave calculation
            const mainWaveY = config.amplitude * Math.sin(x * config.baseFrequency + phase);
            
            // Secondary weaving calculation (adds subtle complexity)
            const weaveOffsetY = config.weaveAmplitude * Math.sin(x * config.weaveFrequency + weavePhase + lineIndex * 0.2);
            
            const y = centerY + mainWaveY + pathData.offsetY + weaveOffsetY;
            points.push(`${x},${y.toFixed(2)}`);
        }

        d += ` L ${points.join(' ')}`;
        pathData.element.setAttribute('d', d);
    });
}

// --- Update Particles ---
function updateParticles() {
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary check & reset if particle goes too far off-screen
        if (p.x < -20 || p.x > svgWidth + 20 || p.y < 0 || p.y > svgHeight) {
            // Reset particle position somewhat randomly near the center wave area
             p.x = Math.random() * svgWidth * 0.5 + svgWidth * 0.25; // Spawn closer to center horizontally
             p.y = centerY + (Math.random() - 0.5) * config.particleSpawnRangeY;
             p.speedX = (Math.random() - 0.5) * 0.5;
             p.speedY = (Math.random() - 0.5) * 0.2;
        }
        
        // Recalculate center wave position at particle's x to influence its drift slightly (optional)
        const centerWaveY = centerY + config.amplitude * Math.sin(p.x * config.baseFrequency + phase);
        // Add a small pull towards the center wave
         p.speedY += (centerWaveY - p.y) * 0.0001; 
         // Dampen speed
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
    requestAnimationFrame(animate);
}

// --- Initialization ---
createPaths();
createParticles();
animate(); // Start the animation