export default function Footer() {
  return (
    <footer className="footer bg-[var(--bg-2)] border-t border-[var(--line)] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[var(--txt-3)] text-center md:text-left">
            &copy; 2026 Segundo Pinto. Full-Stack Developer | Designed and developed with React & Next.js
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition">Privacy</a>
            <a href="#" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition">Terms</a>
            <a href="#" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
