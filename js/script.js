document.addEventListener('DOMContentLoaded', () => {

    // --- POINT 5: Vanta.js 3D Background Initialization ---
    VANTA.WAVES({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x1a237e, // You can experiment with this color
      shininess: 30.00,
      waveHeight: 15.00,
      waveSpeed: 0.8,
      zoom: 0.8
    });


    // --- POINT 3: Typed.js Typing Animation Initialization ---
    const options = {
        strings: [
            "Crafting Digital Experiences",
            "Designing Modern Graphics",
            "Building Fast Websites",
            "Developing Smart Apps",
            "Automating Complex Tasks",
            "Creating Motion Graphics"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    
    // Check if the element exists before initializing
    if (document.querySelector('#typing-animation')) {
        const typed = new Typed('#typing-animation', options);
    }
    

    // --- POINT 2: Navbar Opacity on Scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add class after scrolling 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- Hamburger Menu Logic for Mobile ---
    const nav = document.querySelector('nav ul');
    const navContainer = document.querySelector('nav');
    
    // Create and append the hamburger icon
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `<span></span><span></span><span></span>`;
    navContainer.appendChild(hamburger);

    // Toggle nav on hamburger click
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

});
