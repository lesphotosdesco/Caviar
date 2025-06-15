document.addEventListener('DOMContentLoaded', () => {
  const texts = document.querySelectorAll('.text');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  texts.forEach(text => {
    observer.observe(text);
  });
});
