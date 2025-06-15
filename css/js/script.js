// Carrousel automatique du hero
let index = 0;
const carousel = document.querySelector('.hero-carousel');
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  index = (index + 1) % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(nextSlide, 5000);

// Apparition au scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
