'use client';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Portfolio</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Featured projects built with modern technologies</p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden bg-gray-900 hover:shadow-2xl transition">
            <div className="h-64 md:h-72" style={{background: 'linear-gradient(135deg, #ff006e 0%, #06ffa5 100%)'}}></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">KAELO DJ - DJ Profile & Events</h3>
              <p className="text-gray-400 mb-6">Professional website for a DJ specialized in House, Tech House and Afro Tech. Includes online booking, event gallery and dynamic animations.</p>
              <a href="https://kaeloar.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">View Project →</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gray-900 hover:shadow-2xl transition">
            <div className="h-64 md:h-72" style={{background: 'linear-gradient(135deg, #3a86ff 0%, #06ffa5 100%)'}}></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">CRG Historia - Educational Platform</h3>
              <p className="text-gray-400 mb-6">Modern educational platform with responsive design and interactive content. Optimized for conversion and user experience.</p>
              <a href="https://crgestoria.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">View Project →</a>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <article className="rounded-2xl overflow-hidden bg-gray-900 hover:shadow-2xl transition">
            <div className="h-48" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">Interactive Web Dashboard</h3>
              <p className="text-gray-400 mb-6 text-sm">Professional web application with React and Next.js. Includes SEO optimization, WCAG AA accessibility and optimized performance.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">View Demo</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Code</a>
              </div>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden bg-gray-900 hover:shadow-2xl transition">
            <div className="h-48" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">Freelance Landing Pages</h3>
              <p className="text-gray-400 mb-6 text-sm">Series of conversion-optimized landing pages. Responsive design, optimized load speed and automated deployment.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML5', 'CSS3', 'JavaScript', 'Netlify'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">View Demo</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Code</a>
              </div>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden bg-gray-900 hover:shadow-2xl transition">
            <div className="h-48" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">RESTful API System</h3>
              <p className="text-gray-400 mb-6 text-sm">Robust backend with Node.js and Express. Service integration, JWT authentication and Swagger documentation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Node.js', 'Express', 'APIs REST', 'MongoDB'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300">Documentation</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Code</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
