document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
 
  document.querySelectorAll('.nav-links > li').forEach(li => {
    const link = li.querySelector('a');
    if (li.querySelector('.dropdown')) {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    }
  });
});
