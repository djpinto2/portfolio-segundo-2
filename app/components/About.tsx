export default function About() {
  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center mb-12">Sobre Mí</h2>
        
        <div className="space-y-6 text-[var(--txt-2)]">
          <p className="text-lg leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones web innovadoras. 
            Con más de 5 años de experiencia en desarrollo frontend, he trabajado con 
            startups y empresas de diferentes industrias.
          </p>
          
          <p className="text-lg leading-relaxed">
            Mi enfoque es combinar diseño limpio con funcionalidad robusta. Me encanta 
            resolver problemas complejos y aprender tecnologías nuevas.
          </p>
          
          <p className="text-lg leading-relaxed">
            Además de desarrollador, soy DJ under el nombre KAELO. La música y la programación 
            son mis pasiones, ambas requieren precisión y creatividad.
          </p>
        </div>
      </div>
    </section>
  );
}
