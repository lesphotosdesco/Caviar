const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentIndex = 0;
let interval;

// Fonction pour afficher l'image et le point actif
function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

// Passe à l’image suivante
function nextSlide() {
  const nextIndex = (currentIndex + 1) % images.length;
  showSlide(nextIndex);
}

// Reset le timer auto quand on clique sur un point
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000); // 5 secondes
}

// Dots cliquables
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetInterval();
  });
});

// Lancement du défilement auto
interval = setInterval(nextSlide, 5000);
