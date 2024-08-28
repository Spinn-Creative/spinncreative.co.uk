'use client';

import Link from 'next/link';

export default function Jumbotron() {
  return (
    <section className="py-24">
      <div className="container mx-auto text-center bg-[#55433a] text-white py-16 px-6 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-6">
          Are you ready to take your project to the next level?
        </h2>
        <p className="text-xl mb-10">
          Let us help you bring your vision to life with our expert design services.
        </p>
        <Link href="/contact-us" passHref>
          <button className="bg-[#ff856b] text-white text-lg px-10 py-4 rounded-md hover:bg-[#ff6749] transition-colors duration-300">
            Get in touch with us now
          </button>
        </Link>
      </div>
    </section>
  );
}
