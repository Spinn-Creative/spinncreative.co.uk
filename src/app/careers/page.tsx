import React from 'react';
import type { Metadata } from 'next';
import { title } from '../layout';

export const metadata: Metadata = {
  title: `${title} - Careers`,
  description:
      'We are always looking for talented individuals to join our team.',
  alternates: {
      canonical: 'https://www.spinncreative.co.uk/careers',
  },
};

export default function Careers(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="careers-hero flex items-center justify-center text-center">
                <div className="careers-hero-overlay">
                    <h1 className="text-6xl font-bold text-white">Careers</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="careers-section-container">
                <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
                <p className="text-lg mb-6">
                    We are always looking for talented individuals to join our
                    team. Unfortunately, there are currently no vacancies
                    available. Please check back later or send us your resume
                    for future consideration.
                </p>
            </section>
        </div>
    );
}
