const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = 'home';
  document.querySelectorAll('section, main, footer').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id || current;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});
