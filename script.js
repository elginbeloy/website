const overlay = document.getElementById('animation-background-overlay');
const revealRadius = Math.max(Math.round(window.innerHeight / 3), Math.round(window.innerWidth / 4));
const opaqueColor = '#191919';
const DEFAULT_OVERLAY = `radial-gradient(
  circle 600px at 70% 70%,
  transparent 0%,
  ${opaqueColor} 100%
)`;

// Update the overlay gradient on mouse move
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY;

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
