'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';


export default function GraphicsDesign() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const services = [
    {
      title: 'Our Graphic Design Services Include:',
      description: `Branding & Identity: Logos, business cards, stationery, and complete visual identity systems.
      Marketing Materials: Brochures, flyers, posters, and digital ads that make an impact.
      Web & App Design: User-centric designs that are both functional and visually appealing.
      Packaging Design: Creative packaging that stands out on the shelves and tells your brand’s story.`,
      image: '/images/logos.png',
    },
    {
      title: 'Transform Your Ideas into Stunning Visuals',
      description: `Our graphic design process is collaborative and client-focused. We work closely with you to understand your brand, your goals, and your audience, ensuring that every design we create is not just beautiful but also effective.`,
      image: '/images/gamer.png',
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div>
      {/* Hero Section */}
      <section className='graphics-design-hero flex items-center justify-center text-center'>
        <div className='graphics-design-hero-overlay'>
          <h1 className='text-6xl font-bold text-white'>Graphics Design</h1>
        </div>
      </section>

      {/* Graphic Design Services Section */}
      <section className='graphics-design-section-container'>
        <h2 className='text-4xl font-bold mb-4'>Graphic Design Services</h2>
        <p className='text-lg mb-6'>
          At Spinn Creative, we believe that every design tells a story. Our graphic design services are all about creating visuals that not only look stunning but also communicate your brand’s essence and values. Whether you need eye-catching marketing materials, a sleek website design, or a full brand identity, our team has the creativity and expertise to deliver designs that resonate with your audience.
        </p>
      </section>

      {/* Carousel Section */}
      <section className='graphics-design-carousel'>
        <div className='relative max-w-7xl mx-auto'>
          <div className='embla overflow-hidden' ref={emblaRef}>
            <div className='embla__container flex transition-transform duration-[700ms] ease-in-out'>
              {services.map((service, index) => (
                <div key={index} className='embla__slide flex-none w-full'>
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch`}>
                    <div className='flex-1 text-white flex items-center justify-center p-8 bg-gray-900'>
                      <div>
                        <h3 className='text-4xl font-semibold'>{service.title}</h3>
                        <p className='mt-4 whitespace-pre-line text-lg'>{service.description}</p>
                      </div>
                    </div>
                    <div className='flex-1'>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1000}
                        height={600}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button className='embla__button embla__button--prev' onClick={() => emblaApi?.scrollPrev()} aria-label='Previous Slide'>
            <svg className='embla__button__svg' viewBox='0 0 24 24'>
              <path d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          <button className='embla__button embla__button--next' onClick={() => emblaApi?.scrollNext()} aria-label='Next Slide'>
            <svg className='embla__button__svg' viewBox='0 0 24 24'>
              <path d='M9 5l7 7-7 7' />
            </svg>
          </button>

          {/* Dots for Medium and Larger Screens */}
          <div className='hidden md:flex justify-center mt-4'>
            {scrollSnaps.map((_, index) => (
              <button key={index} className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`} onClick={() => emblaApi?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <div className='text-center mt-8 mb-16'>
        <a href='/contact-us' className='btn-outline'>
          Get in touch with us
        </a>
      </div>
    </div>
  );
}
