document.addEventListener("DOMContentLoaded", function() {
    // Responsive Navigation Menu
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    document.querySelector('nav').appendChild(navToggle);

    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Form Validation
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Perform form submission
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

   // Testimonial Carousel
   const testimonialItems = document.querySelectorAll('.testimonial-item');
   let testimonialIndex = 0;
   let testimonialIntervalId;

   function showTestimonial(index) {
       testimonialItems.forEach((item, i) => {
           if (i === index) {
               item.classList.add('active');
           } else {
               item.classList.remove('active');
           }
       });
   }

   function nextTestimonial() {
       testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
       showTestimonial(testimonialIndex);
   }

   function startTestimonialCarousel() {
       testimonialIntervalId = setInterval(nextTestimonial, 3000); // Change interval to 3000ms (3 seconds)
   }

   function stopTestimonialCarousel() {
       clearInterval(testimonialIntervalId);
   }

   const testimonialSection = document.querySelector('.testimonials');
   if (testimonialSection) {
       testimonialSection.addEventListener('mouseenter', stopTestimonialCarousel);
       testimonialSection.addEventListener('mouseleave', startTestimonialCarousel);
   }

   // Start initial testimonial carousel
   startTestimonialCarousel();
});