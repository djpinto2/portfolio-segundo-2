'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'WCAG Accessibility']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'APIs REST', 'Service Integration', 'JWT Authentication', 'Databases', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git/GitHub', 'Netlify', 'Vercel', 'CI/CD', 'Docker', 'Testing', 'Performance', 'SEO']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-900">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-blue-900 text-blue-100 rounded-lg text-sm font-medium">
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
