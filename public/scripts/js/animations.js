window.addEventListener('load', function () {
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeIn = function () {
    fadeElements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      const visible = 150;
      if (top < window.innerHeight - visible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', fadeIn);
  fadeIn();
});
