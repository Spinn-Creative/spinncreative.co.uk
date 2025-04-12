'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 bg-[rgba(26,26,46,0.9)] backdrop-blur-md transition-all"
    >

    <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="#" className="text-white text-xl font-bold">
          Spinn<span className="text-[var(--primary)]">Creative</span>
        </Link>
       <Navbar />
      </div>
    </header>
  );
}
