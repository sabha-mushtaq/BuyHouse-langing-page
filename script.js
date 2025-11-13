// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Enhanced 3D effects for hero section
const heroImage = document.querySelector('.hero-image');

// Mouse move parallax effect for 3D Card
if (document.querySelector('.image-3d-card')) {
    const card3d = document.querySelector('.image-3d-card');
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(20px)`;
        }
    });
    
    // Reset when mouse leaves
    document.addEventListener('mouseleave', () => {
        card3d.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
    });
}

// Enhanced floating animation for About section
if (document.querySelector('.image-3d-float')) {
    const floatingImg = document.querySelector('.image-3d-float img');
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            floatingImg.style.transform = `translateZ(30px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    document.addEventListener('mouseleave', () => {
        floatingImg.style.transform = 'translateZ(0) rotateY(0) rotateX(0)';
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}