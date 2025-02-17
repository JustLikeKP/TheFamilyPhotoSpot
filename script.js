// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.querySelector('#next').addEventListener('click', nextSlide);
document.querySelector('#prev').addEventListener('click', prevSlide);

window.onload = () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
};
