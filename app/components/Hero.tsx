'use client';

export default function Hero() {
  return (
    <section id="home" className="py-24 px-4 md:py-32">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <img
            src="profile.jpg"
            alt="Segundo Pinto"
            className="w-32 h-32 rounded-full object-cover mb-8 border-2 border-white"
          />

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span style={{
              background: 'linear-gradient(120deg, #00d9ff, #39ff14)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Segundo Pinto</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-2">Full-Stack Developer specialized in React, Next.js and TypeScript</p>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-2xl">
            I build scalable, accessible, high-quality web experiences focused on performance and best practices.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg transition">
              View My Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com/in/segundo-pinto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="mailto:djpintoarg@gmail.com" className="text-gray-400 hover:text-white transition">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
