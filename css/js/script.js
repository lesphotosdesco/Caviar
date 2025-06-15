// Carrousel auto
let index = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

function nextSlide(){
  index = (index + 1) % slides.length;
  carousel.style.transform = `translateX(-${index * 100 / slides.length}%)`;
}

setInterval(nextSlide, 5000);

// Scroll Reveal avec sécurité DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.animate-section');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        ent.target.classList.add('visible');
        observer.unobserve(ent.target);
      }
    });
  }, {threshold: 0.3});

  sections.forEach(sec=>observer.observe(sec));
});
