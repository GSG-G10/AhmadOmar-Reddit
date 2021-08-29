const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 750) {
    backToTop.classList.remove('btt-hidden');
  } else {
    backToTop.classList.add('btt-hidden');
  }
});
