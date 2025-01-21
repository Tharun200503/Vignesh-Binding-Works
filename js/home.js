// Testimonial Corousel
$('.carousel-testimonial').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})


// Toggle Menu Bar
// Get elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const contactIconsDrawer = document.getElementById('contact-icons-drawer');

// Toggle visibility and icon transformation on click
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active'); // Toggle hamburger icon state
    contactIconsDrawer.classList.toggle('active'); // Toggle drawer visibility
});


// Stats Counter Increment Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');

    // Function to increment counters
    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target') || +counter.innerText; // Get the final target value
        const speed = 200; // Animation duration in ms
        const step = target / speed; // Increment step

        let count = 0;

        const updateCounter = () => {
            count += step; // Increment count
            if (count < target) {
                counter.innerText = Math.floor(count); // Update value
                requestAnimationFrame(updateCounter); // Smooth animation
            } else {
                counter.innerText = target; // Ensure it ends at the target
            }
        };

        // Reset and animate
        counter.innerText = '0'; // Reset to 0 before starting
        updateCounter(); // Start incrementing
    };

    // Intersection Observer to detect scroll and trigger animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounter(entry.target); // Start animation when visible
                }
            });
        },
        { threshold: 0.5 } // Element should be at least 50% visible
    );

    // Observe each counter
    counters.forEach((counter) => observer.observe(counter));
});


// FAQ Section Interactivity
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  }); 


// Back to Top functionality
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

