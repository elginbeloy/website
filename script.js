const overlay = document.getElementById('hero-overlay');

// Define the properties for the reveal effect
const revealRadius = 256;
const opaqueColor = '#191919';

// Update the overlay gradient on mouse move
document.addEventListener('mousemove', (e) => {
    // Get mouse coordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Dynamically create the radial gradient centered on the mouse
    // It starts fully transparent at the center,
    // and fades to the opaqueColor at the edge of the revealRadius.
    // Everything outside this radius will take the opaqueColor.
    const gradient = `radial-gradient(
        circle ${revealRadius}px at ${mouseX}px ${mouseY}px,
        transparent 0%,
        ${opaqueColor} 100%
    )`;

    // Apply the gradient style to the overlay
    overlay.style.background = gradient;
});

// Optional: Reset to full overlay when mouse leaves the window
document.addEventListener('mouseleave', () => {
     overlay.style.background = opaqueColor;
});
