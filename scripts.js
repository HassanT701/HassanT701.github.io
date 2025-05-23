// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        const offsetTop = targetSection.offsetTop - 60;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});


// Lazy Loading Images (Enhancement)
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    lazyImageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            lazyImageObserver.observe(img);
        });
    }
});


//nav bar
function toggleMenu(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
}

// svg
const home = document.getElementById('home');
const svg = document.querySelector('svg');
    const body = document.body;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = home.scrollHeight - window.innerHeight;
    
        // Zoom in the SVG based on scroll position (up to 20x zoom)
        const zoomScale = Math.min(1 + (scrollTop / maxScroll) * 10, 15); 
        svg.style.transform = `scale(${zoomScale})`;

        // Change background color to black when 90% scrolled
        if (scrollTop / maxScroll > 0.9) {
            body.classList.add('black-theme');  
            svg.style.opacity = '0';  
        } else {
            body.classList.remove('black-theme');  
            svg.style.opacity = '1';  
        }

        if (scrollTop < 100) {
            svg.style.transform = `scale(1)`;  
        }
    });

    // Particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 140, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" }
            },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
        },
        
        retina_detect: true
    });
