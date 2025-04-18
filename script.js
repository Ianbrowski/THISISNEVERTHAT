//smoothscroll
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });
        });
    });
});
//animation
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle element intersection
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    // Observe elements with the 'animated' class
    document.querySelectorAll('.animated').forEach(element => {
        observer.observe(element);
    });
});

const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Enhance the vertical and horizontal tilt effects
    const rotateX = -(y - centerY) / 3; // Tilt up/down more exaggerated
    const rotateY = (x - centerX) / 3; // Tilt left/right more exaggerated

    // Apply the 3D tilt with scale for added depth
    this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    this.style.boxShadow = `${rotateY}px ${-rotateX}px 20px rgba(0, 0, 0, 0.3)`; // Adjust shadow with rotation
});

downloadBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
});
