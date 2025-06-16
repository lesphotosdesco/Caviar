document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  let current = 0;
  let interval;

  function showImage(index) {
    images.forEach((img, i) => img.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    current = index;
  }

  function nextImage() {
    const next = (current + 1) % images.length;
    showImage(next);
  }

  function prevImage() {
    const prev = (current - 1 + images.length) % images.length;
    showImage(prev);
  }

  function startAutoSlide() {
    interval = setInterval(nextImage, 5000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  nextBtn.addEventListener("click", () => {
    nextImage();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevImage();
    stopAutoSlide();
    startAutoSlide();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(dot.getAttribute("data-index"));
      showImage(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  showImage(current);
  startAutoSlide();
});
