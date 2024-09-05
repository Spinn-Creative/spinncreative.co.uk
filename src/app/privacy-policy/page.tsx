import React from 'react';

export default function PrivacyPolicy(): JSX.Element {
    return (
        <div>
            {/* Hero Section */}
            <section className="privacy-hero flex items-center justify-center text-center">
                <div className="privacy-hero-overlay">
                    <h1 className="text-6xl font-bold text-white">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-section-container">
                <h2 className="text-4xl font-bold mb-4">Introduction</h2>
                <p className="text-lg mb-6">
                    At Spinn Creative, we are committed to protecting your
                    privacy. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website.
                </p>

                <h2 className="text-4xl font-bold mb-4">
                    Information We Collect
                </h2>
                <p className="text-lg mb-6">
                    We may collect information about you in a variety of ways.
                    The information we may collect includes personal data, such
                    as your name, address, email address, and telephone number,
                    as well as non-personal data.
                </p>

                <h2 className="text-4xl font-bold mb-4">
                    How We Use Your Information
                </h2>
                <p className="text-lg mb-6">
                    We use the information we collect to provide, operate, and
                    maintain our services. We may also use your information to
                    communicate with you, provide customer support, and improve
                    our services.
                </p>

                <h2 className="text-4xl font-bold mb-4">
                    Disclosure of Your Information
                </h2>
                <p className="text-lg mb-6">
                    We may share information we have collected about you in
                    certain situations. We may disclose your information with
                    our service providers, for legal reasons, or with your
                    consent.
                </p>

                <h2 className="text-4xl font-bold mb-4">
                    Cookies and Tracking Technologies
                </h2>
                <p className="text-lg mb-6">
                    We use cookies and similar tracking technologies to track
                    the activity on our website and store certain information.
                    Cookies are small data files that are placed on your device
                    when you visit a website. They are widely used to make
                    websites work more efficiently, as well as to provide
                    reporting information.
                </p>
                <p className="text-lg mb-6">
                    You can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our services.
                </p>
                <p className="text-lg mb-6">Examples of cookies we use:</p>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <strong>Session Cookies:</strong> We use session cookies
                        to operate our service.
                    </li>
                    <li>
                        <strong>Preference Cookies:</strong> We use preference
                        cookies to remember your preferences and various
                        settings.
                    </li>
                    <li>
                        <strong>Security Cookies:</strong> We use security
                        cookies for security purposes.
                    </li>
                </ul>

                <h2 className="text-4xl font-bold mb-4">Your Privacy Rights</h2>
                <p className="text-lg mb-6">
                    Depending on your location, you may have the right to
                    access, correct, or delete your personal data, as well as
                    the right to restrict or object to the processing of your
                    data.
                </p>

                {/* Last Updated Section */}
                <p className="text-sm text-gray-500 mt-10">
                    Last updated: August 28, 2024
                </p>
            </section>
        </div>
    );
}
