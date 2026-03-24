document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  btn?.addEventListener('click', () => item.classList.toggle('open'));
});
