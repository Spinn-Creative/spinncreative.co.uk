export default function Hero() {
  return (
    <section
      id="home"
      className="hero h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute w-full h-full top-0 left-0 opacity-30 pointer-events-none z-0">
        <div className="absolute bg-[var(--primary)] w-[300px] h-[300px] top-[20%] left-[-100px] rounded-full blur-[100px]" />
        <div className="absolute bg-[var(--secondary)] w-[400px] h-[400px] top-[40%] right-[-150px] rounded-full blur-[100px]" />
        <div className="absolute bg-[#7C4DFF] w-[250px] h-[250px] bottom-[10%] left-[30%] rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-content text-white fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Bringing ideas to life through creative innovation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            We&apos;re a multidisciplinary creative studio specializing in 2D & 3D art,
            animation, interactive experiences, audio production, and motion graphics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="btn bg-[var(--primary)] text-white rounded-full px-6 py-3 font-semibold transition hover:bg-transparent hover:text-[var(--primary)] border-2 border-[var(--primary)]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="btn bg-transparent text-white border-2 border-white rounded-full px-6 py-3 font-semibold transition hover:bg-white hover:text-[var(--dark)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
