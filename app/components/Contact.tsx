export default function Contact() {
  return (
    <section className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="section-title mb-6">Hablemos</h2>
        <p className="text-lg text-[var(--txt-2)] mb-8 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:djpintoarg@gmail.com"
            className="inline-block btn btn--primary"
          >
            Envíame un Email
          </a>
          
          <div className="flex gap-4 justify-center text-sm">
            <a href="#" className="text-[var(--gold-2)] hover:text-[var(--gold)]">GitHub</a>
            <a href="#" className="text-[var(--gold-2)] hover:text-[var(--gold)]">LinkedIn</a>
            <a href="#" className="text-[var(--gold-2)] hover:text-[var(--gold)]">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
