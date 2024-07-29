import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-grow relative">
        <div className="absolute inset-0 z-30 md:hidden">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-40 flex items-center justify-center h-full p-6">
          <div className="max-w-3xl mx-auto text-left">
            <h1 className="strapline text-3xl sm:text-5xl font-bold mb-4">Bring your creative vision to life.</h1>
            <p className="text-lg sm:text-xl mb-4">
              We are a team of artists, designers and developers who work with you to craft and bring your creative vision to life. We specialise in immersive digital experiences, interactive installations and innovative multimedia solutions.
            </p>
            <p className="text-lg sm:text-xl">
              From captivating VR environments to sleek user interfaces and dynamic animations, we combine creativity with technology to make your ideas a reality.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
