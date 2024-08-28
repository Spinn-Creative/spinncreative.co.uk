'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Review = {
  name: string;
  location: string;
  gender: string;
  rating: number;
  review: string;
  picture: string;
};

export default function ClientReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=4&nat=gb')  // Fetching 4 random users from the UK
      .then((response) => response.json())
      .then((data) => {
        const userProfiles = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          location: `${user.location.city}, UK`,
          gender: user.gender,
          rating: Math.floor(Math.random() * 2) + 4,  // Random rating between 4 and 5
          review: generateReview(user.gender),
          picture: user.picture.large,
        }));
        setReviews(userProfiles);
      });
  }, []);

  const generateReview = (gender: string): string => {
    const maleReviews = [
      "Spinn Creative truly captured our brand's essence with their designs. Exceptional work!",
      "Their attention to detail and creativity exceeded our expectations. Highly recommended!",
      "A fantastic experience from start to finish. The team was professional and delivered quality results.",
    ];

    const femaleReviews = [
      "The team at Spinn Creative brought our vision to life with stunning visuals. We couldn’t be happier!",
      "Impressed by the professionalism and creativity. The final product was beyond our expectations.",
      "Outstanding service and beautiful designs. They made the process seamless and enjoyable.",
    ];

    const reviews = gender === 'male' ? maleReviews : femaleReviews;
    return reviews[Math.floor(Math.random() * reviews.length)];
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (v, i) => (
      <svg
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927C9.432 2.005 10.568 2.005 10.951 2.927L12.3 6.18L15.907 6.583C16.882 6.689 17.293 7.886 16.59 8.54L13.879 11.037L14.684 14.64C14.897 15.614 13.851 16.36 13.007 15.82L9.999 13.832L6.993 15.82C6.149 16.36 5.103 15.614 5.316 14.64L6.121 11.037L3.41 8.54C2.707 7.886 3.118 6.689 4.093 6.583L7.7 6.18L9.049 2.927Z" />
      </svg>
    ));
  };

  return (
    <section className="my-16 container mx-auto text-center bg-white py-12">
      <h2 className="text-4xl font-bold mb-12 text-[#ff856b]">What Clients Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="rounded-full overflow-hidden w-24 h-24 mb-4 border-4 border-[#ff856b]">
                <Image
                  src={review.picture}
                  alt={review.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{review.name}</h3>
              <p className="text-sm text-[#dac8be]">{review.location}</p>
              <div className="flex mt-2">{renderStars(review.rating)}</div>
            </div>
            <p className="text-[#dac8be] text-sm italic">"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
