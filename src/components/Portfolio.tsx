'use client';
import '/public/styles/portfolio.scss';
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const portfolioItems = document.querySelectorAll<HTMLElement>('.portfolio-item');

    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');

        portfolioItems.forEach((item) => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Our Portfolio</h2>
          <p>Explore our latest creative works</p>
        </div>

        <div className="portfolio-filter fade-in">
          <button className="filter-btn active" data-filter="all">All</button>
          <button className="filter-btn" data-filter="2d">2D Art</button>
          <button className="filter-btn" data-filter="3d">3D Art</button>
          <button className="filter-btn" data-filter="games">Games</button>
          <button className="filter-btn" data-filter="audio">Audio</button>
          <button className="filter-btn" data-filter="motion">Motion Graphics</button>
        </div>

        <div className="portfolio-grid">
          {[
            {
              category: '2d',
              title: 'Adventure Series',
              desc: '2D character animation for streaming series',
            },
            {
              category: '3d',
              title: 'Product Launch',
              desc: '3D visualization for new tech product',
            },
            {
              category: 'games',
              title: 'Cosmic Voyage',
              desc: 'Mobile adventure game with custom graphics',
            },
            {
              category: 'motion',
              title: 'Brand Identity',
              desc: 'Motion graphics package for global brand',
            },
            {
              category: 'audio',
              title: 'Tech Insights',
              desc: 'Full audio production for technology podcast',
            },
            {
              category: '2d',
              title: 'Finance Simplified',
              desc: 'Explainer video series with custom illustrations',
            },
          ].map((item, i) => (
            <div className="portfolio-item fade-in" data-category={item.category} key={i}>
              <img
                src="/api/placeholder/400/300"
                alt={item.title}
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#"><img src="/api/placeholder/30/30" alt="View Project" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
