// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Example: Add interactive functionality
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s';
            this.style.transform = 'scale(1.02)';
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
