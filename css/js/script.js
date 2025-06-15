// Scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fadeElems.forEach(elem => observer.observe(elem));
});
