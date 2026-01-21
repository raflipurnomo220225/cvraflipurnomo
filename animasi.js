// ============================================
// ADVANCED ANIMATIONS
// ============================================

class AdvancedAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.initFloatingShapes();
        this.initParallaxEffect();
        this.initCursorEffect();
        this.initScrollProgress();
        this.initTypewriterEffect();
        this.initParticleEffect();
    }
    
    // ============================================
    // Floating Shapes Interaction
    // ============================================
    
    initFloatingShapes() {
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach(shape => {
            // Add mouse interaction
            shape.addEventListener('mouseenter', () => {
                shape.style.opacity = '0.2';
                shape.style.transform = 'scale(1.2)';
                shape.style.filter = 'blur(10px)';
            });
            
            shape.addEventListener('mouseleave', () => {
                shape.style.opacity = '0.1';
                shape.style.transform = 'scale(1)';
                shape.style.filter = 'blur(20px)';
            });
            
            // Randomize animation
            const randomDelay = Math.random() * 5;
            const randomDuration = 4 + Math.random() * 4;
            
            shape.style.animationDelay = `${randomDelay}s`;
            shape.style.animationDuration = `${randomDuration}s`;
        });
    }
    
    // ============================================
    // Parallax Effect
    // ============================================
    
    initParallaxEffect() {
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            window.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                
                heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }
    }
    
    // ============================================
    // Custom Cursor Effect
    // ============================================
    
    initCursorEffect() {
        // Create custom cursor
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        // Create cursor follower
        const follower = document.createElement('div');
        follower.className = 'cursor-follower';
        document.body.appendChild(follower);
        
        // Hide default cursor
        document.body.style.cursor = 'none';
        
        // Move cursor with mouse
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Follower follows with delay
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 50);
        });
        
        // Add hover effects
        const hoverElements = document.querySelectorAll('a, button, .service-card, .team-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                follower.classList.add('follower-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                follower.classList.remove('follower-hover');
            });
        });
        
        // Add styles for custom cursor
        this.addCursorStyles();
    }
    
    addCursorStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                position: fixed;
                width: 8px;
                height: 8px;
                background: var(--secondary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: width 0.2s, height 0.2s, background 0.2s;
            }
            
            .cursor-follower {
                position: fixed;
                width: 30px;
                height: 30px;
                border: 2px solid var(--secondary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease-out;
                opacity: 0.5;
            }
            
            .cursor-hover {
                width: 16px;
                height: 16px;
                background: var(--accent);
            }
            
            .follower-hover {
                width: 50px;
                height: 50px;
                border-color: var(--accent);
                opacity: 0.8;
            }
            
            * {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // Scroll Progress Indicator
    // ============================================
    
    initScrollProgress() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(to right, var(--secondary), var(--accent));
                z-index: 1001;
                transition: width 0.1s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // Typewriter Effect for Hero Text
    // ============================================
    
    initTypewriterEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing after page loads
        setTimeout(typeWriter, 1000);
    }
    
    // ============================================
    // Particle Background Effect
    // ============================================
    
    initParticleEffect() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        heroSection.appendChild(particleContainer);
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 5 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            // Random color
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            
            particleContainer.appendChild(particle);
        }
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 0;
                overflow: hidden;
            }
            
            .particle {
                position: absolute;
                border-radius: 50%;
                animation: floatParticle linear infinite;
            }
            
            @keyframes floatParticle {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                }
                25% {
                    transform: translateY(-20px) translateX(20px) rotate(90deg);
                }
                50% {
                    transform: translateY(-40px) translateX(0) rotate(180deg);
                }
                75% {
                    transform: translateY(-20px) translateX(-20px) rotate(270deg);
                }
                100% {
                    transform: translateY(0) translateX(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// TEXT REVEAL ANIMATION
// ============================================

class TextReveal {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.elements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            
            // Split text into spans
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.display = 'inline-block';
                span.style.transition = `opacity 0.5s ${i * 0.05}s, transform 0.5s ${i * 0.05}s`;
                el.appendChild(span);
            }
            
            // Reveal on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0)';
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(el);
        });
    }
}

// ============================================
// IMAGE HOVER ZOOM
// ============================================

class ImageHoverZoom {
    constructor(selector) {
        this.images = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.images.forEach(img => {
            const container = img.parentElement;
            
            container.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = container.getBoundingClientRect();
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;
                
                img.style.transformOrigin = `${x}% ${y}%`;
                img.style.transform = 'scale(1.2)';
            });
            
            container.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                img.style.transformOrigin = 'center center';
            });
        });
    }
}

// ============================================
// STAGGERED ANIMATION
// ============================================

class StaggeredAnimation {
    constructor(selector, staggerDelay = 0.1) {
        this.elements = document.querySelectorAll(selector);
        this.staggerDelay = staggerDelay;
        this.init();
    }
    
    init() {
        this.elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.8s ${index * this.staggerDelay}s, transform 0.8s ${index * this.staggerDelay}s`;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(el);
        });
    }
}

// ============================================
// RIPPLE EFFECT
// ============================================

class RippleEffect {
    constructor(selector) {
        this.buttons = document.querySelectorAll(selector);
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                
                // Remove existing ripples
                const existingRipple = button.querySelector('.ripple');
                if (existingRipple) {
                    existingRipple.remove();
                }
                
                button.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        this.addRippleStyles();
    }
    
    addRippleStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// INITIALIZE ALL ANIMATIONS ON DOM LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize advanced animations
    const advancedAnimations = new AdvancedAnimations();
    
    // Initialize text reveal for section titles
    const textReveal = new TextReveal('.section-title');
    
    // Initialize image hover zoom
    const imageHoverZoom = new ImageHoverZoom('.team-img-placeholder, .project-img-placeholder');
    
    // Initialize staggered animation for cards
    const staggeredAnimation = new StaggeredAnimation('.service-card, .team-card, .project-card', 0.2);
    
    // Initialize ripple effect for buttons
    const rippleEffect = new RippleEffect('.cta-button');
    
    // Add loading animation to page
    addLoadingAnimation();
});

// ============================================
// ADDITIONAL HELPER FUNCTIONS
// ============================================

function addLoadingAnimation() {
    // Add a subtle animation to the whole page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 500);
}

// Smooth scroll to element
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}