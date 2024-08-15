// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for the fixed header
            behavior: 'smooth'
        });
    });
});

// Scroll-Triggered Animation for Projects
window.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        const projectPosition = project.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (projectPosition < screenPosition) {
            project.classList.add('fade-in');
        }
    });
});
