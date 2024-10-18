const flipButton = document.getElementById('flipButton');
const bottle = document.getElementById('bottle');
const message = document.getElementById('message');

flipButton.addEventListener('click', () => {
    const flipHeight = Math.random() * 360; // Random flip angle
    bottle.style.transform = `rotate(${flipHeight}deg)`;
    
    // Simulate landing
    setTimeout(() => {
        const landed = Math.random() < 0.5; // 50% chance to land upright
        if (landed) {
            message.textContent = "Nice flip! You landed it!";
            bottle.style.transform = `rotate(0deg)`; // Reset position
        } else {
            message.textContent = "Oops! Try again.";
            bottle.style.transform = `rotate(180deg)`; // Bottle flips over
        }
    }, 500); // Wait for flip animation
});
