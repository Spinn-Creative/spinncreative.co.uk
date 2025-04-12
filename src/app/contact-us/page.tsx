// pages/contact-us.tsx (Server-Side Component)
import Contact from '@/components/Contact';
import { Facebook, Instagram, Youtube } from 'react-feather';
import Link from 'next/link';
import type { Metadata } from 'next';
import { title } from '../layout';

export const metadata: Metadata = {
  title: `${title} - Contact us`,
  description:
      'Get in touch with us now and let us help you bring your vision to life with our expert design services.',
  alternates: {
      canonical: 'https://www.spinncreative.co.uk/contact-us',
  },
};

export default function ContactUsPage(): JSX.Element {
  return (
    <div>
      <section className="contact-us-hero flex items-center justify-center text-center">
        <div className="contact-us-hero-overlay">
          <h1 className="text-6xl font-bold text-white">Contact us</h1>
        </div>
      </section>

      <section className="contact-us-section-container">
        <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-lg mb-6">
          Ready to start a project or just want to learn more about what we can do for you? We'd love to hear from you! At Spinn Creative, we're always excited to collaborate on creative projects, big or small.
        </p>

        <div className="text-lg mb-4">
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:hello@spinncreative.co.uk"
              className="underline text-[#ff856b]"
            >
              hello@spinncreative.co.uk
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +44 [0]746 261 6280
          </p>
        </div>

        <h3 className="text-3xl font-bold mb-4">Follow us:</h3>
        <ul>
          <li className="flex mb-2">
            <Facebook />
            <Link
              href="https://www.facebook.com/people/Spinn-Creative/61565518587208/"
              className="ml-1 no-underline hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
          </li>
          <li className="flex mb-2">
            <Instagram />
            <Link
              href="https://www.instagram.com/spinncreative360/"
              className="ml-1 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </li>
          <li className="flex mb-2">
            <Youtube />
            <Link
              href="https://www.youtube.com/@spinncreative360"
              className="ml-1 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </Link>
          </li>
        </ul>

        <p className="text-lg mb-6">
          Or fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <p className="text-lg mb-6">Let’s make something extraordinary together.</p>
      </section>

      {/* Import Client-Side Form */}
      <section className="contact-us-section-container">
        <Contact />
      </section>
    </div>
  );
}
