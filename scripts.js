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


//Contact form 
function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Email format validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Create the mailto link with the form data
    const mailtoLink = `mailto:talhahassan701@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail for reference: ${email}%0AMessage: ${message}`;

    // Open the mailto link in the user's email client
    window.location.href = mailtoLink;
}

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
