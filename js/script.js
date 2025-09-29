document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const nav = document.querySelector('nav ul');
    const header = document.querySelector('header');
    
    // Create and append the hamburger icon
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `<span></span><span></span><span></span>`;
    header.querySelector('nav').appendChild(hamburger);

    // Toggle nav on hamburger click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });


    // --- Scroll Animation Logic (Intersection Observer) ---
    const sectionsToAnimate = document.querySelectorAll('#about, #projects, #contact');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

});
