import Link from 'next/link';

export default function Portfolio() {
  const featuredProjects = [
    {
      title: "KAELO DJ - DJ Profile & Events",
      description: "Professional website for a DJ specialized in House, Tech House and Afro Tech. Includes online booking, event gallery and dynamic animations.",
      url: "https://kaeloar.netlify.app/",
      gradient: "from-pink-500 to-green-400"
    },
    {
      title: "CRG Historia - Educational Platform",
      description: "Modern educational platform with responsive design and interactive content. Optimized for conversion and user experience.",
      url: "https://crgestoria.netlify.app/",
      gradient: "from-blue-500 to-green-400"
    }
  ];

  const projects = [
    {
      title: "Interactive Web Dashboard",
      description: "Professional web application with React and Next.js. Includes SEO optimization, WCAG AA accessibility and optimized performance.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      gradient: "from-purple-600 to-purple-900"
    },
    {
      title: "Freelance Landing Pages",
      description: "Series of conversion-optimized landing pages. Responsive design, optimized load speed and automated deployment.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify"],
      gradient: "from-pink-400 to-red-500"
    },
    {
      title: "RESTful API System",
      description: "Robust backend with Node.js and Express. Service integration, JWT authentication and Swagger documentation.",
      tags: ["Node.js", "Express", "APIs REST", "MongoDB"],
      gradient: "from-cyan-400 to-cyan-300"
    }
  ];

  return (
    <section id="portfolio" className="portfolio py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">My Portfolio</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Featured projects built with modern technologies</p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="featured-project-card border border-[var(--line)] rounded-lg overflow-hidden hover:border-[var(--gold-2)] transition group"
            >
              <div className={`featured-project-image h-40 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="featured-project-content p-6">
                <h3 className="text-xl font-semibold text-[var(--txt-1)] mb-2">{project.title}</h3>
                <p className="text-[var(--txt-3)] mb-4">{project.description}</p>
                <Link 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-btn text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 font-semibold transition"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio__grid grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article 
              key={idx}
              className="project-card border border-[var(--line)] rounded-lg overflow-hidden hover:border-[var(--gold-2)] transition"
            >
              <div className={`project-card__image h-40 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="project-card__content p-6">
                <h3 className="text-lg font-semibold text-[var(--txt-1)] mb-2">{project.title}</h3>
                <p className="text-[var(--txt-3)] text-sm mb-4">{project.description}</p>
                <div className="project-card__tech flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="tech-badge px-3 py-1 bg-[var(--gold-2)]/20 text-[var(--gold-2)] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links flex gap-3">
                  <a href="#" className="link-btn text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 text-sm font-semibold">View Demo</a>
                  <a href="#" className="link-btn text-[var(--gold-2)] hover:text-[var(--gold-2)]/80 text-sm font-semibold">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
