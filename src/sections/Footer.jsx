const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const SOCIAL = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'X' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="#home" className="site-footer__logo">
          Dabeer Zaidi
        </a>
        <nav className="site-footer__nav" aria-label="Footer">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="site-footer__social">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="site-footer__copy text-muted">
          &copy; {year} Dabeer Zaidi. Crafted for clarity.
        </p>
      </div>
    </footer>
  )
}
