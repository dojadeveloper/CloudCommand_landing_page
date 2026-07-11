export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-center sm:text-left">
        <div className="font-heading text-base font-bold text-foreground">Comandium</div>
        <div className="text-sm text-muted-foreground">© 2026 Comandium. Todos los derechos reservados.</div>
        <div className="text-sm text-muted-foreground">
          Desarrollado por{" "}
          <a
            href="https://dojadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            DojaDev
          </a>
        </div>
      </div>
    </footer>
  )
}
