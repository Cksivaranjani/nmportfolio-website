const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
});
let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name && email) {
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all fields.');
            }
        });
        const greetingElement = document.getElementById('greeting');
        const hour = new Date().getHours();

        if (hour < 12) {
            greetingElement.textContent = 'Good Morning!';
        } else if (hour < 18) {
            greetingElement.textContent = 'Good Afternoon!';
        } else {
            greetingElement.textContent = 'Good Evening!';
        }