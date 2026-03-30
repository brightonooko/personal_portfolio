// Update year in footer
document.getElementById('yearSpan').textContent = new Date().getFullYear();

// Navbar scroll behavior
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-900/98', 'backdrop-blur-xl', 'shadow-2xl', 'border-b', 'border-slate-800/50');
    } else {
        navbar.classList.remove('bg-slate-900/98', 'backdrop-blur-xl', 'shadow-2xl', 'border-b', 'border-slate-800/50');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll progress bar
const scrollProgressBar = document.getElementById('scrollProgressBar');
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / winHeight) * 100;
    scrollProgressBar.style.width = scrolled + '%';
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
