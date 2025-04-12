const portfolioItems = [
  { title: 'Adventure Series', desc: '2D character animation for streaming series', category: '2d' },
  { title: 'Product Launch', desc: '3D visualization for new tech product', category: '3d' },
  { title: 'Cosmic Voyage', desc: 'Mobile adventure game with custom graphics', category: 'games' },
  { title: 'Brand Identity', desc: 'Motion graphics package for global brand', category: 'motion' },
  { title: 'Tech Insights', desc: 'Full audio production for technology podcast', category: 'audio' },
  { title: 'Finance Simplified', desc: 'Explainer video series with custom illustrations', category: '2d' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg opacity-80">Explore our latest creative works</p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-10 fade-in">
          {['all', '2d', '3d', 'games', 'audio', 'motion'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn px-5 py-2 border rounded-full transition ${
                filter === 'all' ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-white text-white'
              }`}
              data-filter={filter}
            >
              {filter === 'all' ? 'All' : filter.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="portfolio-item fade-in relative rounded-xl overflow-hidden h-64"
              data-category={item.category}
            >
              <img
                src="/api/placeholder/400/300"
                alt={item.title}
                className="portfolio-img w-full h-full object-cover transition-transform duration-500"
              />
              <div className="portfolio-overlay absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-center mb-4">{item.desc}</p>
                <a href="#"><img src="/api/placeholder/30/30" alt="View Project" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
