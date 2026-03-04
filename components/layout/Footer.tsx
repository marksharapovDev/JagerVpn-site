export function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="flex items-center justify-center gap-4 py-8">
        <span className="text-sm glass-muted">© 2026 JagerVPN</span>
        <span className="text-border">·</span>
        <a
          href="https://marksharapov.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm glass-muted transition-colors duration-300 hover:text-primary"
        >
          by @marksharapov
        </a>
      </div>
    </footer>
  );
}
