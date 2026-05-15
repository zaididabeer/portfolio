import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { HeroVisual } from '../components/HeroVisual'

export function HeroSection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const q = gsap.utils.selector(root)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl
        .from(q('.h-name'), {
          opacity: 0,
          y: 48,
          filter: 'blur(10px)',
          duration: 1.1,
        })
        .from(
          q('.h-role'),
          { opacity: 0, y: 22, filter: 'blur(5px)', duration: 0.85 },
          '-=0.6',
        )
        .from(
          q('.h-cta .btn'),
          { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 },
          '-=0.55',
        )
        .from(
          q('.hero__visual-wrap'),
          {
            opacity: 0,
            y: 44,
            scale: 0.965,
            filter: 'blur(14px)',
            duration: 1.35,
            ease: 'expo.out',
          },
          '-=1.1',
        )
    }, root)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={sectionRef} id="home" className="section hero">
      <div className="container hero__grid">
        {/* ── Left: content ── */}
        <div className="hero__content">
          <h1 className="h-name">Dabeer Zaidi</h1>
          <p className="h-role">
            Software Engineer Specializing in Flutter &amp; Product Systems
          </p>

          <div className="h-cta">
            <button
              type="button"
              className="btn btn--primary h-btn-primary"
              onClick={() => scrollTo('projects')}
            >
              Explore Work
              <svg
                className="h-btn-arrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 7h9M8.5 3.5 12 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a
              className="btn btn--ghost h-btn-primary"
              href="mailto:dabeerzaidi10@gmail.com"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Right: visual ── */}
        <div className="hero__visual-wrap">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
