'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link href="/">
              {/* Logo placeholder */}
              <span className="text-xl font-bold text-gray-900 cursor-pointer">Logo</span>
            </Link>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:ml-6 w-full justify-end">
            <div className="flex space-x-4">
              <Link href="/2d">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">2D</span>
              </Link>
              <Link href="/3d">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">3D</span>
              </Link>
              <Link href="/animation-and-vfx">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Animation & VFX</span>
              </Link>
              <Link href="/web-and-data">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Web and Data</span>
              </Link>
              <Link href="/games-and-xr">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Games and XR</span>
              </Link>
              <Link href="/audio">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Audio</span>
              </Link>
              <Link href="/real-world">
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Real World</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="flex flex-col space-y-1">
          <Link href="/2d">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">2D</span>
          </Link>
          <Link href="/3d">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">3D</span>
          </Link>
          <Link href="/animation-and-vfx">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Animation & VFX</span>
          </Link>
          <Link href="/web-and-data">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Web and Data</span>
          </Link>
          <Link href="/games-and-xr">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Games and XR</span>
          </Link>
          <Link href="/audio">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Audio</span>
          </Link>
          <Link href="/real-world">
            <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Real World</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
