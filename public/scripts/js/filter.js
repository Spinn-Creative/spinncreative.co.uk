document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      filterButtons.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      items.forEach((item) => {
        item.style.display =
          filter === 'all' || item.getAttribute('data-category') === filter
            ? 'block'
            : 'none';
      });
    });
  });
});
