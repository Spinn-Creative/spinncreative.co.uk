"use client"; // Ensure this component is rendered on the client side

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-5 py-5">
        <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center h-full">
          <Image
            src="/images/shoe.png"
            alt="Creative Solutions"
            width={700}
            height={500}
            className="block mx-auto lg:mx-0 w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Creative solutions to boost your business
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Access high-end, scalable creative solutions tailored to enhance your business growth and brand visibility. Our affordable services are designed to help you succeed in various aspects of your business, ensuring impactful results.
          </p>
          <div className="flex gap-2 justify-start">
            <Link href="/about-us">
              <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
                Find out more
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
