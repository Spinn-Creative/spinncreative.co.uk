'use client';

import { Image, Film, Monitor, Music, Activity } from 'react-feather';

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in active">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg opacity-80">
            Exceptional creative solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in active">
          <div className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all">
            <div className="text-[var(--primary)] text-4xl mb-4">
              <Image size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">2D Art &amp; Animation</h3>
            <p className="mb-5">
              From concept art to fully animated sequences, our 2D team brings characters and stories to life with vibrant visuals and fluid motion.
            </p>
            <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
              Learn More
            </a>
          </div>

          <div className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all">
            <div className="text-[var(--primary)] text-4xl mb-4">
              <Film size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">3D Art &amp; Animation</h3>
            <p className="mb-5">
              Create stunning 3D worlds, characters, and animations with our expert team using cutting-edge modeling, texturing, and animation techniques.
            </p>
            <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
              Learn More
            </a>
          </div>

          <div className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all">
            <div className="text-[var(--primary)] text-4xl mb-4">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Games &amp; Interactive</h3>
            <p className="mb-5">
              Engage your audience with immersive games and interactive experiences designed for multiple platforms and devices.
            </p>
            <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
              Learn More
            </a>
          </div>

          <div className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all">
            <div className="text-[var(--primary)] text-4xl mb-4">
              <Music size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Audio</h3>
            <p className="mb-5">
              Elevate your projects with custom sound design, music composition, voice acting, and audio engineering services.
            </p>
            <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
              Learn More
            </a>
          </div>

          <div className="bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-md hover:-translate-y-2 transition-all">
            <div className="text-[var(--primary)] text-4xl mb-4">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Motion Graphics</h3>
            <p className="mb-5">
              Tell your story through dynamic and visually stunning motion graphics that capture attention and communicate complex ideas simply.
            </p>
            <a href="#" className="btn text-[var(--primary)] font-bold hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
