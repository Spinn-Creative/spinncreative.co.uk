'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: 'Emily Davis',
      city: 'London',
      profession: 'Software Engineer',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      review: 'The team at Spinn Creative exceeded our expectations with their attention to detail and creativity. Highly recommend!',
      rating: 5,
    },
    {
      name: 'James Wilson',
      city: 'Manchester',
      profession: 'Graphic Designer',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      review: 'Their services are top-notch and they truly understand the needs of a small business. Very satisfied!',
      rating: 4,
    },
    {
      name: 'Sophia Brown',
      city: 'Birmingham',
      profession: 'Product Manager',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      review: 'Affordable, high-quality solutions delivered on time. Spinn Creative helped us achieve our project goals efficiently.',
      rating: 5,
    },
    {
      name: 'Michael Johnson',
      city: 'Liverpool',
      profession: 'Marketing Specialist',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      review: 'Professional service with excellent results. The team was responsive and dedicated throughout the project.',
      rating: 4,
    },
    {
      name: 'Olivia Taylor',
      city: 'Bristol',
      profession: 'Project Manager',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      review: 'Exceptional customer service and innovative solutions. Our project was a success thanks to Spinn Creative.',
      rating: 5,
    },
    {
      name: 'John Smith',
      city: 'Edinburgh',
      profession: 'Consultant',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      review: 'Their creativity and attention to detail are unmatched. Our marketing materials look fantastic!',
      rating: 5,
    },
    {
      name: 'Emma Jones',
      city: 'Cardiff',
      profession: 'Entrepreneur',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      review: 'They delivered high-quality work on time and on budget. Highly recommend their services!',
      rating: 4,
    },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 20;

    const scrollContent = () => {
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += scrollStep;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scrollContent, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full px-4 py-5">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        What People Are Saying About Us
      </h2>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden whitespace-nowrap py-2 w-full scrollbar-hide"
      >
        {reviews.concat(reviews).map((review, index) => (
          <div
            key={index}
            className="inline-block bg-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-6 w-80"
          >
            <div className="flex items-center mb-4">
              <Image
                src={review.imageUrl}
                alt={review.name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{review.name}</h3>
                <p className="text-sm text-gray-700">{review.city}, {review.profession}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.187l-3.386 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.61 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/portfolio"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Check Out Our Past Work
        </a>
      </div>
    </div>
  );
}
