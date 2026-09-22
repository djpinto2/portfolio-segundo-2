export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "WCAG Accessibility"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "APIs REST", "Service Integration", "JWT Authentication", "Databases", "MongoDB", "PostgreSQL"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git/GitHub", "Netlify", "Vercel", "CI/CD", "Docker", "Testing", "Performance", "SEO"]
    }
  ];

  return (
    <section id="skills" className="skills py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">Technical Skills</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Technologies and tools I work with</p>
        </div>

        <div className="skills__grid grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="skill-category border border-[var(--line)] rounded-lg p-8 hover:border-[var(--gold-2)] transition"
            >
              <h3 className="skill-category__title text-2xl font-semibold text-[var(--gold-2)] mb-6">{category.title}</h3>
              <div className="skills__list flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="skill-item px-4 py-2 bg-[var(--bg)] text-[var(--txt-2)] rounded-lg text-sm border border-[var(--line)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
