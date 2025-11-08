// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save theme preference
    const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Carousel Functionality
const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll('.carousel-dot'));

function updateCarousel() {
    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play carousel (optional)
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover
const carouselContainer = document.querySelector('.carousel');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
    }
});

// Smooth scroll for navigation links
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

// Download Modal Functionality
const downloadModal = document.getElementById('download-modal');
const modalOverlay = downloadModal.querySelector('.modal-overlay');
const modalClose = downloadModal.querySelector('.modal-close');
const modalCancel = downloadModal.querySelector('.modal-cancel');
const confirmDownloadBtn = document.getElementById('confirm-download');

const macosInstructions = document.getElementById('macos-instructions');
const windowsInstructions = document.getElementById('windows-instructions');
const linuxInstructions = document.getElementById('linux-instructions');

let currentDownloadUrl = '';
let currentPlatform = '';

// Download button handlers
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const downloadUrl = button.getAttribute('href');
        const platform = button.querySelector('.download-platform').textContent.toLowerCase();
        
        currentDownloadUrl = downloadUrl;
        currentPlatform = platform;
        
        // Hide all instructions
        macosInstructions.style.display = 'none';
        windowsInstructions.style.display = 'none';
        linuxInstructions.style.display = 'none';
        
        // Show relevant instructions
        if (platform.includes('macos')) {
            macosInstructions.style.display = 'block';
        } else if (platform.includes('windows')) {
            windowsInstructions.style.display = 'block';
        } else if (platform.includes('linux')) {
            linuxInstructions.style.display = 'block';
        }
        
        // Update confirm button
        confirmDownloadBtn.setAttribute('href', downloadUrl);
        
        // Show modal
        downloadModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal handlers
function closeModal() {
    downloadModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Confirm download
confirmDownloadBtn.addEventListener('click', () => {
    console.log(`Download started for: ${currentPlatform}`);
    // Modal will stay open so user can read instructions
    // You can add analytics tracking here if needed
});

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        });
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && downloadModal.classList.contains('active')) {
        closeModal();
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .use-case-card, .tech-item').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle (if you want to add mobile menu functionality)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Add active class to current nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

console.log('ConnectX1 website loaded successfully! 🚀');
