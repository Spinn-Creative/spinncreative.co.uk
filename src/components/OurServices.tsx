'use client';

import React from 'react';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      title: 'Graphics Design',
      image: '/images/cabin.png',
    },
    {
      title: '3D Modelling',
      image: '/images/smothvolc.png',
    },
    {
      title: 'Animation',
      image: '/images/digital.png',
    },
  ];

  return (
    <section className="my-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#ff856b]">Our Services</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="our-service-card">
            <div className="bg-[#55433a] text-white flex items-center justify-center h-64">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            <div className="mt-4">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
