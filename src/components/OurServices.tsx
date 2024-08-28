'use client';

import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      title: 'Graphics Design',
      image: '/images/red-wave.webp',
    },
    {
      title: '3D Modelling',
      image: '/images/red-wave.webp',
    },
    {
      title: 'Animation',
      image: '/images/red-wave.webp',
    },
  ];

  return (
    <section className="my-16 container mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff856b]">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="bg-[#55433a] text-white flex items-center justify-center h-64">
            <h3 className="text-2xl font-semibold">Graphics Design</h3>
          </div>
          <div className="mt-4">
            <Image
              src={services[0].image}
              alt={services[0].title}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-start-2">
          <div className="bg-[#55433a] text-white flex items-center justify-center h-64">
            <h3 className="text-2xl font-semibold">3D Modelling</h3>
          </div>
          <div className="mt-4">
            <Image
              src={services[1].image}
              alt={services[1].title}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        </div>

        <div className="col-span-1 md:col-start-3">
          <div className="bg-[#55433a] text-white flex items-center justify-center h-64">
            <h3 className="text-2xl font-semibold">Animation</h3>
          </div>
          <div className="mt-4">
            <Image
              src={services[2].image}
              alt={services[2].title}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
