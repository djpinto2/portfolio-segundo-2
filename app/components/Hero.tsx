'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="home" className="hero py-20 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-2xl">
        <div className="hero__content text-center flex flex-col items-center gap-8">
          {/* Profile Photo */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--gold-2)]">
            <img
              src="/profile.jpg"
              alt="Segundo Pinto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="hero__title text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-2)] to-[var(--accent)]">Segundo Pinto</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle text-xl text-[var(--txt-2)]">
            Full-Stack Developer specialized in React, Next.js and TypeScript
          </p>

          {/* Description */}
          <p className="hero__description text-lg text-[var(--txt-3)] max-w-xl">
            I build scalable, accessible, high-quality web experiences focused on performance and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta flex gap-4 flex-wrap justify-center">
            <a 
              href="#portfolio" 
              className="btn btn--primary px-8 py-3 bg-[var(--gold-2)] text-[var(--bg)] font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn--secondary px-8 py-3 border-2 border-[var(--gold-2)] text-[var(--gold-2)] font-semibold rounded-lg hover:bg-[var(--gold-2)]/10 transition"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__socials flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/segundo-pinto" target="_blank" rel="noopener noreferrer" className="social-link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              LinkedIn
            </a>
            <a href="mailto:djpintoarg@gmail.com" className="social-link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
