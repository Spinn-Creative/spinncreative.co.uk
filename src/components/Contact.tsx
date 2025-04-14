'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  X as TwitterX,
  MapPin,
  Mail,
  Phone,
} from 'react-feather';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-[100px] bg-[rgba(255,255,255,0.02)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg opacity-80">Let's discuss your next creative project</p>
        </div>

        <div className="grid gap-[50px] md:grid-cols-2 contact-container">
          <div className="contact-info fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="flex items-start mb-[30px]">
              <div className="min-w-[40px] h-[40px] bg-[var(--primary)] rounded-full flex justify-center items-center mr-[15px] text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p>Bristol</p>
              </div>
            </div>

            <div className="flex items-start mb-[30px]">
              <div className="min-w-[40px] h-[40px] bg-[var(--primary)] rounded-full flex justify-center items-center mr-[15px] text-white">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p>hello@spinncreative.com</p>
              </div>
            </div>

            <div className="flex items-start mb-[30px]">
              <div className="min-w-[40px] h-[40px] bg-[var(--primary)] rounded-full flex justify-center items-center mr-[15px] text-white">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p><span>+44 [0] 746 261 6280</span></p>
              </div>
            </div>

            <div className="flex mt-[30px] space-x-[15px]">
              <a
                href="https://www.facebook.com/people/Spinn-Creative/61565518587208/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-[var(--light)] transition-all hover:bg-[var(--primary)] hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-[var(--light)] transition-all hover:bg-[var(--primary)] hover:-translate-y-1"
              >
                <TwitterX size={20} />
              </a>
              <a
                href="https://www.instagram.com/spinncreative360/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-[var(--light)] transition-all hover:bg-[var(--primary)] hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-[var(--light)] transition-all hover:bg-[var(--primary)] hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="contact-form fade-in bg-[rgba(255,255,255,0.05)] p-10 rounded-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit}>
              {[
                { id: 'name', type: 'text', label: 'Your Name' },
                { id: 'email', type: 'email', label: 'Your Email' },
                { id: 'subject', type: 'text', label: 'Subject' },
              ].map(({ id, type, label }) => (
                <div key={id} className="mb-5">
                  <label htmlFor={id} className="block mb-2 font-medium">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required={id !== 'subject'}
                    className="w-full p-3 bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.1)] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  />
                </div>
              ))}

              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 h-[120px] resize-vertical bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.1)] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn bg-[var(--primary)] text-white border-2 border-[var(--primary)] font-semibold py-3 px-6 rounded-full transition hover:bg-transparent hover:text-[var(--primary)]"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-sm text-[var(--light)]">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
