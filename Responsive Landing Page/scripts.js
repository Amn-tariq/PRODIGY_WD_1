// Path: scripts.js
// Select the navigation bar
const navbar = document.querySelector('.navbar');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
