export default function Footer() {
  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--line)] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Segundo Pinto</h4>
            <p className="text-sm text-[var(--txt-2)]">
              Desarrollador & DJ
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-[var(--txt-2)]">
              <li><a href="#" className="hover:text-[var(--gold)]">Inicio</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">Proyectos</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-[var(--txt-2)]">
              <li><a href="#" className="hover:text-[var(--gold)]">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">GitHub</a></li>
              <li><a href="#" className="hover:text-[var(--gold)]">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--txt-3)]">
          <p>&copy; 2026 Segundo Pinto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
