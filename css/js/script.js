console.log("JS chargé");

document.addEventListener('DOMContentLoaded', () => {
  // Carrousel auto slide
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function nextSlide() {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
  }

  setInterval(nextSlide, 5000);

  // Scroll reveal animation
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});
