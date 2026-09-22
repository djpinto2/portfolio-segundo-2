export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "REST APIs"] },
    { category: "Tools", items: ["Git", "Vercel", "Figma", "VSCode"] }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Habilidades</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-xl font-semibold text-[var(--gold-2)] mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
