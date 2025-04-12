const services = [
  {
    title: '2D Art & Animation',
    description:
      'From concept art to fully animated sequences, our 2D team brings characters and stories to life with vibrant visuals and fluid motion.',
  },
  {
    title: '3D Art & Animation',
    description:
      'Create stunning 3D worlds, characters, and animations with our expert team using cutting-edge modeling, texturing, and animation techniques.',
  },
  {
    title: 'Games & Interactive',
    description:
      'Engage your audience with immersive games and interactive experiences designed for multiple platforms and devices.',
  },
  {
    title: 'Professional Audio',
    description:
      'Elevate your projects with custom sound design, music composition, voice acting, and audio engineering services.',
  },
  {
    title: 'Motion Graphics',
    description:
      'Tell your story through dynamic and visually stunning motion graphics that capture attention and communicate complex ideas simply.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg opacity-80">Exceptional creative solutions tailored to your needs</p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all"
            >
              <div className="text-[var(--primary)] text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="mb-5">{service.description}</p>
              <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
