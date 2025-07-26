// Onglets
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    // Activer bouton cliqué
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Afficher la section correspondante
    const year = btn.dataset.year;
    document.querySelectorAll('.year-section').forEach(section => {
      section.classList.remove('active');
      if (section.dataset.year === year) {
        section.classList.add('active');
      }
    });
  });
});

// Collapsibles
document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
