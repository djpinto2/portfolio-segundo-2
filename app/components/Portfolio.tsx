export default function Portfolio() {
  const projects = [
    {
      title: "KAELO DJ Press Kit",
      description: "Sitio profesional de press kit para DJ con galería de reels y rider técnico",
      tech: ["Next.js", "React", "Tailwind CSS"]
    },
    {
      title: "CR Gestoría",
      description: "Plataforma para gestión de trámites vehiculares online",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Landing Page Portfolio",
      description: "Portafolio personal responsive con animaciones suaves",
      tech: ["React", "Tailwind CSS", "Next.js"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Proyectos Destacados</h2>
        
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-lg bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--gold-2)] transition"
            >
              <h3 className="text-2xl font-semibold text-[var(--gold-2)] mb-2">
                {project.title}
              </h3>
              <p className="text-[var(--txt-2)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
