'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">Contact</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Have a project in mind? Let's talk</p>
        </div>

        <div className="contact__content grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-[var(--txt-2)] font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-[var(--txt-2)] font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-[var(--txt-2)] font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-2 bg-[var(--bg)] border border-[var(--line)] rounded-lg text-[var(--txt-1)] focus:outline-none focus:border-[var(--gold-2)] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[var(--gold-2)] text-[var(--bg)] font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div className="info-item">
              <h3 className="text-xl font-semibold text-[var(--txt-1)] mb-2">Email</h3>
              <a href="mailto:djpintoarg@gmail.com" className="text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 transition">
                djpintoarg@gmail.com
              </a>
            </div>
            <div className="info-item">
              <h3 className="text-xl font-semibold text-[var(--txt-1)] mb-2">Location</h3>
              <p className="text-[var(--txt-3)]">Buenos Aires, Argentina</p>
            </div>
            <div className="info-item">
              <h3 className="text-xl font-semibold text-[var(--txt-1)] mb-4">Social Media</h3>
              <div className="social-links flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 transition">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 transition">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 transition">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
