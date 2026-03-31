// Update year in footer
document.getElementById('yearSpan').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const savedTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun text-lg"></i>';
    } else {
        document.body.classList.remove('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon text-lg"></i>';
    }
    localStorage.setItem('theme', theme);
}

// Apply saved theme on load
applyTheme(savedTheme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

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
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
