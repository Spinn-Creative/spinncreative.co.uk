import React from 'react';

export default function TermsOfUse() {
  return (
    <div>
      {/* Hero Section */}
      <section className="terms-hero flex items-center justify-center text-center">
        <div className="terms-hero-overlay">
          <h1 className="text-6xl font-bold text-white">Terms of Use</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-section-container">
        <h2 className="text-4xl font-bold mb-4">Introduction</h2>
        <p className="text-lg mb-6">
          Welcome to Spinn Creative. By accessing or using our website, you agree to comply with and be bound by the following terms of use.
        </p>

        <h2 className="text-4xl font-bold mb-4">Use of the Site</h2>
        <p className="text-lg mb-6">
          The content provided on this site is for general information purposes only. We reserve the right to modify or discontinue the service with or without notice at any time.
        </p>

        <h2 className="text-4xl font-bold mb-4">Intellectual Property</h2>
        <p className="text-lg mb-6">
          All content on this site, including text, graphics, logos, and images, is the property of Spinn Creative and is protected by copyright laws. Unauthorized use is prohibited.
        </p>

        <h2 className="text-4xl font-bold mb-4">Limitation of Liability</h2>
        <p className="text-lg mb-6">
          Spinn Creative will not be liable for any damages arising out of the use or inability to use the site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
        </p>

        <h2 className="text-4xl font-bold mb-4">Governing Law</h2>
        <p className="text-lg mb-6">
          These terms of use are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        {/* Last Updated Section */}
        <p className="text-sm text-gray-500 mt-10">
          Last updated: August 28, 2024
        </p>
      </section>
    </div>
  );
}
