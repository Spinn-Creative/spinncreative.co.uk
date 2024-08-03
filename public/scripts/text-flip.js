document.addEventListener('DOMContentLoaded', function() {
  const flipContainer = document.querySelector('.flip-container');
  const flipper = flipContainer.querySelector('.flipper');
  const words = ["boost your business", "elevate your brand"];
  let currentWordIndex = 0;

  setInterval(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    flipper.classList.toggle('flipped');

    setTimeout(() => {
      const front = flipper.querySelector('.front');
      const back = flipper.querySelector('.back');

      if (flipper.classList.contains('flipped')) {
        back.textContent = words[currentWordIndex];
      } else {
        front.textContent = words[currentWordIndex];
      }
    }, 300); // Match this to half of the CSS transition time to avoid flicker
  }, 3000); // Change every 3 seconds
});
