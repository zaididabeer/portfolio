import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const linksRef = useRef([])
  const menuWasOpened = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useLayoutEffect(() => {
    const overlay = overlayRef.current
    const panel = panelRef.current
    if (!overlay || !panel) return undefined

    if (menuOpen) {
      menuWasOpened.current = true
      gsap.set(overlay, { display: 'flex', pointerEvents: 'auto' })
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: 'power2.out' },
      )
      gsap.fromTo(
        panel,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', delay: 0.05 },
      )
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.06,
          delay: 0.12,
        },
      )
    } else if (menuWasOpened.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(overlay, { display: 'none', pointerEvents: 'none' })
        },
      })
      tl.to(linksRef.current.filter(Boolean), {
        y: 12,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        stagger: 0.03,
      })
        .to(
          panel,
          { y: 16, opacity: 0, duration: 0.3, ease: 'power2.in' },
          '-=0.1',
        )
        .to(overlay, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '-=0.15')
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const onNavClick = (id) => {
    scrollToId(id)
    closeMenu()
  }

  return (
    <>
      <header
        ref={navRef}
        className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
        role="banner"
      >
        <div className="site-nav__inner container">
          <a
            href="#home"
            className="site-nav__logo"
            onClick={(e) => {
              e.preventDefault()
              onNavClick('home')
            }}
          >
            Dabeer Zaidi
          </a>

          <nav className="site-nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="site-nav__link"
                onClick={(e) => {
                  e.preventDefault()
                  onNavClick(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-nav__actions">
            <a
              className="btn btn--primary btn--sm"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <button
              type="button"
              className="site-nav__burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={`burger-line ${menuOpen ? 'is-open' : ''}`} />
              <span className={`burger-line ${menuOpen ? 'is-open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={overlayRef}
        className="mobile-menu"
        style={{ display: 'none' }}
        aria-hidden={!menuOpen}
      >
        <div ref={panelRef} className="mobile-menu__panel glass">
          <div className="mobile-menu__links">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.id}
                type="button"
                ref={(el) => {
                  linksRef.current[i] = el
                }}
                className="mobile-menu__link"
                onClick={() => onNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mobile-menu__footer">
            <a
              className="btn btn--primary btn--block"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
