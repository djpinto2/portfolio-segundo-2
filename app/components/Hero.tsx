export default function Hero() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[var(--bg)] to-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">
            Hola, soy Segundo
          </h1>
          <p className="text-xl text-[var(--txt-2)]">
            Desarrollador Full Stack & DJ | Buenos Aires 🇦🇷
          </p>
          <p className="text-lg text-[var(--txt-2)] max-w-2xl mx-auto">
            Especializado en React, Next.js y TypeScript. Creo experiencias web modernas 
            y performantes con diseño elegante.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button className="btn btn--primary">Ver Proyectos</button>
            <button className="btn btn--secondary">Contactame</button>
          </div>
        </div>
      </div>
    </section>
  );
}
