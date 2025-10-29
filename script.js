// Header background change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Reveal projects on scroll
const projectCards = document.querySelectorAll('.project-card');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) card.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
