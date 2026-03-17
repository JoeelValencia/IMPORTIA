// ============================================
// IMPORTIA - INTERACTIVE JAVASCRIPT
// ============================================

// === CREATE FLOATING PARTICLES ===
function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 10 + 's';

        // Random animation duration
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        container.appendChild(particle);
    }
}

// === PHONE INTERACTION ===
const phone3D = document.querySelector('.phone-3d');
const phoneContainer = document.querySelector('.phone-container');

// Mouse move effect for parallax
phoneContainer.addEventListener('mousemove', (e) => {
    const rect = phoneContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    phone3D.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

// Reset on mouse leave
phoneContainer.addEventListener('mouseleave', () => {
    phone3D.style.transform = '';
});

// === WELCOME TEXT ANIMATION ===
const welcomeText = document.querySelector('.welcome-text');
const text = welcomeText.textContent;
welcomeText.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < text.length) {
        welcomeText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 80);
    }
}

// Start typewriter effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
    createParticles();
});

// === KEYBOARD INTERACTION ===
document.addEventListener('keydown', (e) => {
    // Press SPACE to pause/resume rotation
    if (e.code === 'Space') {
        e.preventDefault();
        const currentAnimation = window.getComputedStyle(phone3D).animationPlayState;
        phone3D.style.animationPlayState = currentAnimation === 'paused' ? 'running' : 'paused';
    }

    // Press R to reset rotation
    if (e.code === 'KeyR') {
        phone3D.style.animation = 'none';
        setTimeout(() => {
            phone3D.style.animation = '';
        }, 10);
    }
});

// === TOUCH SUPPORT FOR MOBILE ===
let touchStartX = 0;
let touchStartY = 0;

phoneContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

phoneContainer.addEventListener('touchmove', (e) => {
    if (!touchStartX || !touchStartY) return;

    const touchEndX = e.touches[0].clientX;
    const touchEndY = e.touches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    const rotateY = deltaX / 5;
    const rotateX = -deltaY / 5;

    phone3D.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

phoneContainer.addEventListener('touchend', () => {
    touchStartX = 0;
    touchStartY = 0;
    phone3D.style.transform = '';
});

// === PERFORMANCE OPTIMIZATION ===
// Reduce particles on mobile
if (window.innerWidth < 768) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        if (index > 15) {
            particle.remove();
        }
    });
}

// === CONSOLE EASTER EGG ===
console.log('%c¡Bienvenido a Importia! 🍊', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
console.log('%cPresiona ESPACIO para pausar/reanudar la rotación', 'font-size: 14px; color: #ff8c42;');
console.log('%cPresiona R para reiniciar la animación', 'font-size: 14px; color: #ffa500;');
