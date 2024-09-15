// components/ContactForm.tsx (Client-Side Component)
'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 10000);

      return (): void => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form className="contact-us-form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-lg mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        ></textarea>
      </div>
      <button className="btn-submit" type="submit">
        Send message
      </button>
      {status && <p className="mt-4">{status}</p>}
    </form>
  );
}
