'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Intro() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const pct = Math.min(Math.round((current / steps) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setShowButton(true);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    router.push('/portfolio');
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        if (progress === 100 || showButton) {
          handleEnter();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [progress, showButton, router]);

  return (
    <div className="relative w-full h-screen bg-[#0a0e27] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,14,39,0.4)] z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-12 px-4 text-center">
        {/* Profile Photo */}
        <img
          src="profile.jpg"
          alt="Segundo Pinto"
          className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
          style={{
            animation: 'profilePulse 2s ease-in-out infinite',
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)'
          }}
        />

        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
            SEGUNDO PINTO
          </h1>
          <p className="text-xl text-gray-400">Full-Stack Developer | React • Next.js • TypeScript</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-[400px]">
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 12px rgba(0, 217, 255, 0.6)',
                transition: 'width 50ms linear'
              }}
            />
          </div>
          <p className="text-cyan-400 text-sm font-mono tracking-widest">{progress}%</p>
        </div>

        {/* Enter Button */}
        {showButton && (
          <button
            onClick={handleEnter}
            className="mt-4 px-10 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-full uppercase tracking-wide transition-all hover:-translate-y-0.5"
            style={{
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
              animation: 'slideUp 0.5s ease forwards'
            }}
          >
            Enter Portfolio
          </button>
        )}
      </div>

      <style>{`
        @keyframes profilePulse {
          0%, 100% { box-shadow: 0 0 30px rgba(0, 217, 255, 0.4); }
          50% { box-shadow: 0 0 50px rgba(0, 217, 255, 0.8); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
