'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am a full-stack developer with professional training at Coderhouse. I specialize in building modern, scalable and accessible web applications using React, Next.js and TypeScript.
              </p>
              <p>
                My focus is on performance, WCAG accessibility and development best practices. I have worked on personal and freelance projects, optimizing landing pages for conversion and building complex systems with scalable architecture.
              </p>
              <p>
                Passionate about the modern web, clean code and user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">2024</h3>
              <p className="text-gray-400 text-sm">Full-Stack Training</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">5+</h3>
              <p className="text-gray-400 text-sm">Completed Projects</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">100%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
