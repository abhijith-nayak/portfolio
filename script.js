// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple fade-in animation for the hero content
window.onload = function() {
    document.querySelector('.fade-in').style.opacity = 1;
};
