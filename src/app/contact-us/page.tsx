'use client';

import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Your message has not been sent.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Your message has not been sent.');
    }
  };

  // Clear the status message after 10 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or status change
    }
  }, [status]);

  return (
    <div>
      {/* Hero Section */}
      <section className='contact-us-hero flex items-center justify-center text-center'>
        <div className='contact-us-hero-overlay'>
          <h1 className='text-6xl font-bold text-white'>Contact us</h1>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='contact-us-section-container'>
        <h2 className='text-4xl font-bold mb-4'>Get in touch</h2>
        <p className='text-lg mb-6'>
          Ready to start a project or just want to learn more about what we can do for you? We'd love to hear from you! At Spinn Creative, we're always excited to collaborate on creative projects, big or small.
        </p>

        <div className='text-lg mb-6'>
          <p><strong>Email:</strong> <a href='mailto:hello@spinncreative.co.uk' className='text-[#ff856b]'>hello@spinncreative.co.uk</a></p>
          <p><strong>Phone:</strong> Phone Number</p>
        </div>

        <h3 className='text-3xl font-bold mb-4'>Follow us:</h3>
        <ul className='list-disc pl-5'>
          <li className='mb-2'><strong>Instagram:</strong> Instagram Handle</li>
          <li className='mb-2'><strong>LinkedIn:</strong> LinkedIn Profile</li>
        </ul>

        <p className='text-lg mb-6'>
          Or fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <p className='text-lg mb-6'>
          Let’s make something extraordinary together.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className='contact-us-section-container'>
        <form className='contact-us-form' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-lg mb-2' htmlFor='name'>Name</label>
            <input
              className='w-full p-2 border border-gray-300 rounded'
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg mb-2' htmlFor='email'>Email</label>
            <input
              className='w-full p-2 border border-gray-300 rounded'
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg mb-2' htmlFor='message'>Message</label>
            <textarea
              className='w-full p-2 border border-gray-300 rounded'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            ></textarea>
          </div>
          <button className='btn-submit' type='submit'>Submit</button>
        </form>
        {status && <p className='mt-4'>{status}</p>}
      </section>
    </div>
  );
}
