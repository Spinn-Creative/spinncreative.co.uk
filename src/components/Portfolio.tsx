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

  const portfolioItems = [
    {
      category: '2d',
      title: 'Character Concept Pack',
      desc: 'Original 2D character illustrations and turnarounds for use in indie game prototyping.',
      image: '/images/2d-pixel-art.png',
    },
    {
      category: '2d',
      title: 'Infographic Short',
      desc: 'Flat 2D animated explainer built for an NGO campaign on digital safety.',
      image: '/images/2d-infographic-short.png',
    },
    {
      category: '3d',
      title: 'VR Asset Kit',
      desc: 'Low-poly 3D models optimized for virtual reality workflows and WebGL environments.',
      image: '/images/vr-asset-kit.png',
    },
    {
      category: 'games',
      title: 'Pixel World Assets',
      desc: 'Tile-based environments, UI, and sprites for a retro-style mobile game demo.',
      image: '/images/game.png',
    },
    {
      category: 'audio',
      title: 'Sound Library Suite',
      desc: 'Custom SFX, ambient loops, and foley designed for interactive digital spaces.',
      image: '/images/sls.png',
    },
    {
      category: 'motion',
      title: 'Logo Reveal Toolkit',
      desc: 'Modular motion graphics pack created for microbranding and transitions.',
      image: '/images/lrt.png',
    },
  ];


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
          {portfolioItems.map((item, i) => (
            <div className="portfolio-item fade-in" data-category={item.category} key={i}>
              <img
                src={item.image}
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
