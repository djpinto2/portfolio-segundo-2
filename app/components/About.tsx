export default function About() {
  const stats = [
    { number: "2024", label: "Full-Stack Training" },
    { number: "5+", label: "Completed Projects" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="about py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <div className="about__content grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="about__text">
            <h2 className="text-4xl font-bold text-[var(--txt-1)] mb-6">About Me</h2>
            <div className="space-y-4 text-[var(--txt-3)]">
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

          {/* Stats */}
          <div className="about__stats grid grid-cols-1 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="stat border-l-4 border-[var(--gold-2)] pl-6 py-2"
              >
                <h3 className="text-4xl font-bold text-[var(--gold-2)]">{stat.number}</h3>
                <p className="text-[var(--txt-3)] text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
