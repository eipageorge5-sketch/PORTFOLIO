// Initialize Scroll Animations
AOS.init({
    duration: 1000,
    once: true
});

// Typing Animation
const typed = new Typed('.typing', {
    strings: ['Front-End Developer', 'Responsive Web Designer', 'Future Python Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Form Validation & Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation feedback
    const email = contactForm.querySelector('input[type="email"]').value;
    if (email.includes('@')) {
        alert('Thank you! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
