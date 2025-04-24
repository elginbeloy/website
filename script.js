const overlay = document.getElementById('hero-overlay');
const revealRadius = 256;
const opaqueColor = '#191919';
const DEFAULT_OVERLAY = `radial-gradient(
  circle ${revealRadius}px at 50% 50px,
  transparent 0%,
  ${opaqueColor} 100%
)`;

// Update the overlay gradient on mouse move
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Dynamically create the radial gradient centered on the mouse
    // It starts fully transparent at the center, and fades.
    const gradient = `radial-gradient(
        circle ${revealRadius}px at ${mouseX}px ${mouseY}px,
        transparent 0%,
        ${opaqueColor} 100%
    )`;

    overlay.style.background = gradient;
});

overlay.style.background = DEFAULT_OVERLAY;
