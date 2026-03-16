/* Forever Tree Care — main.js */

const header = document.getElementById('site-header');
const burger  = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

/* Nav scroll */
window.addEventListener('scroll', () => {
  header.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

/* Burger */
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* Scroll reveal */
document.querySelectorAll(
  '.service-card, .g-item, .about-grid, .section-head, .info-card, .contact-form, .emergency-callout, .hero-stats'
).forEach(el => el.classList.add('reveal'));

new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    const delay = Number(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('in'), delay);
    observer.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }).observe;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const delay = Number(e.target.dataset.delay || 0);
    setTimeout(() => e.target.classList.add('in'), delay);
    observer.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.dataset.delay = (i % 4) * 80;
  observer.observe(el);
});

/* Contact form */
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const orig = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '.7';

    setTimeout(() => {
      submitBtn.textContent = '✓ Request Sent!';
      submitBtn.style.background = 'var(--forest-500)';
      submitBtn.style.opacity = '1';
      form.reset();
      setTimeout(() => {
        submitBtn.textContent = orig;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    }, 1100);
  });
}

/* Footer year */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
