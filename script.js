const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

class ExperienceCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = document.querySelectorAll('.experience-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        
        this.init();
    }
    
    init() {
        // Event listeners for buttons
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Event listeners for dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play functionality
        this.startAutoPlay();
        
        // Pause auto-play on hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch/swipe support for mobile
        this.addTouchSupport();
    }
    
    updateCarousel() {
        // Update track position
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update active card
        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update active dot
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50; // Minimum swipe distance
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide(); // Swipe left - next slide
            } else {
                this.prevSlide(); // Swipe right - previous slide
            }
        }
    }
}

// Navbar scroll effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            this.navbar.style.boxShadow = 'none';
        }
        
        this.lastScrollY = currentScrollY;
    }
}

// Intersection Observer for animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.about-text, .about-stats, .experience-card, .social-link, .contact-info');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Parallax effect for hero section
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (this.hero) {
            this.hero.style.transform = `translateY(${rate}px)`;
        }
    }
}

// Images Loader: carrega um manifesto JSON com os nomes dos arquivos e aplica os src nas imagens marcadas com data-company
class ImagesLoader {
    static manifest = {};

    static async loadManifest() {
        try {
            const res = await fetch('images/images.json', { cache: 'no-store' });
            if (!res.ok) throw new Error('images.json not found');
            this.manifest = await res.json();
        } catch (err) {
            console.warn('Could not load images manifest:', err);
            this.manifest = {};
        }
    }

    static applyImages() {
        document.querySelectorAll('img[data-company]').forEach(img => {
            const key = img.dataset.company;
            const file = this.manifest[key];
            if (file) {
                img.src = `images/${file}`;
            } else {
                // If manifest doesn't contain the key, leave existing src but warn
                console.warn(`No image entry for '${key}' in images.json`);
            }
        });
    }

    static async init() {
        await this.loadManifest();
        this.applyImages();
    }
}

// Language Toggle System using Translation Library
class LanguageToggle {
    constructor() {
        this.currentLanguage = 'en';
        this.toggleButton = document.getElementById('languageToggle');
        this.translationManager = new TranslationManager();
        this.init();
    }
    
    init() {
        // Load saved language preference
        const savedLanguage = localStorage.getItem('portfolio-language');
        if (savedLanguage) {
            this.currentLanguage = savedLanguage;
        }
        
        // Set language in translation manager
        this.translationManager.setLanguage(this.currentLanguage);
        
        // Set initial language
        this.updateLanguage();
        
        // Add click event to toggle button
        this.toggleButton.addEventListener('click', () => this.toggleLanguage());
    }
    
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
        this.translationManager.setLanguage(this.currentLanguage);
        this.updateLanguage();
        this.saveLanguagePreference();
    }
    
    updateLanguage() {
        // Use translation manager to translate all elements
        this.translationManager.translateAll();
        
        // Update toggle button
        const flag = this.currentLanguage === 'en' ? '🇺🇸' : '🇧🇷';
        const text = this.currentLanguage === 'en' ? 'EN' : 'PT';
        
        this.toggleButton.querySelector('.lang-flag').textContent = flag;
        this.toggleButton.querySelector('.lang-text').textContent = text;
        
        // Update document language
        document.documentElement.lang = this.currentLanguage;
    }
    
    saveLanguagePreference() {
        localStorage.setItem('portfolio-language', this.currentLanguage);
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Load images manifest and apply local image files before initializing UI components
    await ImagesLoader.init();

    new ExperienceCarousel();
    new NavbarScroll();
    new ScrollAnimations();
    new ParallaxEffect();
    new LanguageToggle();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
