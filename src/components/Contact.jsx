import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    // In this version we simulate a successful submission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-manrope text-3xl font-semibold text-neutral-900 sm:text-4xl">Let’s work together</h2>
          <p className="mt-3 max-w-md text-neutral-600">
            Share a few details about your project—scope, site, goals—and I’ll follow up to schedule a conversation.
          </p>

          <div className="mt-8 space-y-3 text-neutral-700">
            <a href="mailto:studio@example.com" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                <Mail size={18} />
              </span>
              studio@example.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                <Phone size={18} />
              </span>
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 shadow-sm backdrop-blur">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                Your name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="jane@studio.com"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project, timeline, and location."
                className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">Please complete all fields before sending.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
