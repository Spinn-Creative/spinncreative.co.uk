'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/images/logo.png'; // Adjust the path

export default function Navbar() {
  // State to manage the burger menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar relative flex items-center justify-between px-4 py-2 md:px-8'>
      {/* Logo section */}
      <div className='logo flex items-center'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Logo'
            sizes='100vw'
            style={{
              width: 'auto', // Adjust width to fit within its container
              height: '50px', // Define a height smaller than the navbar
            }}
          />
        </Link>
      </div>

      {/* Burger Menu for mobile */}
      <div className='md:hidden'>
        <button
          type='button'
          className='burger-menu focus:outline-none'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? (
            <svg
              className='w-6 h-6 text-gray-800'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-gray-800'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full bg-white md:relative md:flex md:w-auto md:top-0 md:bg-transparent`}
      >
        <ul className='flex flex-col md:flex-row items-start md:items-center p-4 md:p-0 md:gap-8'>
          <li className='py-2 md:py-0 hover:text-[#ff856b]'>
            <Link href='/about-us'>
              <span>About us</span>
            </Link>
          </li>
          <li className='py-2 md:py-0 hover:text-[#ff856b]'>
            <Link href='/graphics-design'>
              <span>Graphics Design</span>
            </Link>
          </li>
          <li className='py-2 md:py-0 hover:text-[#ff856b]'>
            <Link href='/3d-modelling'>
              <span>3D Modelling</span>
            </Link>
          </li>
          <li className='py-2 md:py-0 hover:text-[#ff856b]'>
            <Link href='/animation'>
              <span>Animation</span>
            </Link>
          </li>
          <li className='py-2 md:py-0 hover:text-[#ff856b]'>
            <Link href='/contact-us'>
              <span>Contact us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
