"use client"; // Ensure this component is rendered on the client side

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles


export default function Hero() {
  return (
    <div className="md:container mx-auto px-4 py-5">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-5 py-5">
        <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center h-full">
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={10000}>
            <div>
              <Image
                src="/images/gui.jpg"
                alt="Shoe"
                width={700}
                height={500}
                className="Graphics User Interface"
              />
            </div>
            <div>
              <Image
                src="/images/dashboards.png"
                alt="Dashboards"
                width={700}
                height={500}
                className="carousel-image"
              />
            </div>
            <div>
              <Image
                src="/images/mobiles.png"
                alt="Mobiles"
                width={700}
                height={500}
                className="carousel-image"
              />
            </div>
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Creative solutions for business success.
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-4">
            Access high-end, scalable creative solutions tailored to enhance the visibility and growth of your brand.
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
