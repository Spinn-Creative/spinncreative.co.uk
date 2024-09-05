import React from 'react';

export default function News(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="news-hero flex items-center justify-center text-center">
                <div className="news-hero-overlay">
                    <h1 className="text-6xl font-bold text-white">News</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="news-section-container">
                <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
                <p className="text-lg mb-6">
                    Currently, there are no news updates. Please check back
                    later for the latest information and announcements from
                    Spinn Creative.
                </p>
            </section>
        </div>
    );
}
