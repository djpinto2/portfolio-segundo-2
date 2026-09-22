'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--bg)]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Animated Bars Left */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded"
            style={{
              opacity: 0.3 + Math.sin(i * 0.5) * 0.4,
              animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Animated Bars Right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="w-8 h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded"
            style={{
              opacity: 0.3 + Math.sin(i * 0.5) * 0.4,
              animation: `pulse ${2 + i * 0.2}s ease-in-out infinite reverse`,
            }}
          />
        ))}
      </div>

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 animate-pulse">
              <div className="w-32 h-32 mx-auto rounded-full border-2 border-cyan-400/50" />
            </div>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-3 border-cyan-400 object-cover shadow-lg shadow-cyan-400/50"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">SEGUNDO </span>
            <span className="text-green-400">PINTO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-cyan-300 text-lg md:text-xl mb-2 font-mono">
            Full-Stack Developer • React • Next.js • TypeScript
          </p>

          {/* Circular Progress */}
          <div className="my-12 flex justify-center">
            <div className="relative w-64 h-64">
              <svg className="absolute inset-0" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#1a4d6d"
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Progress Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeDasharray={`${(progress / 100) * 565.48} 565.48`}
                  strokeLinecap="round"
                  transform="rotate(-90 100 100)"
                  style={{ transition: 'stroke-dasharray 0.5s ease' }}
                />

                {/* Grid Pattern */}
                <g opacity="0.2">
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={`radial-${i}`}
                      x1="100"
                      y1="10"
                      x2="100"
                      y2="190"
                      stroke="#00d9ff"
                      strokeWidth="1"
                      transform={`rotate(${(i * 360) / 12} 100 100)`}
                    />
                  ))}
                </g>

                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#39ff14" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-cyan-400">{progress}%</div>
                <div className="text-sm text-gray-400 mt-2">PORTFOLIO</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 px-12 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 transition transform hover:scale-105 text-lg">
            ENTER PORTFOLIO
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
      `}</style>
    </section>
  );
}
