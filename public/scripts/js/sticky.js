window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
});
