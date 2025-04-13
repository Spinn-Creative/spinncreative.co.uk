'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 bg-[rgba(26,26,46,0.9)] backdrop-blur-md transition-all"
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="block w-auto h-10">
          <img
            src="/images/logo-transparent.png" // 🔁 Change this path to match your actual image location
            alt="Spinn Creative"
            className="h-full object-contain"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
