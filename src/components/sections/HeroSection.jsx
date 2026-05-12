import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { HeroVisual } from '../HeroVisual'

export function HeroSection() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const q = gsap.utils.selector(root)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(q('.hero-eyebrow'), { opacity: 0, y: 20, duration: 0.8 })
        .from(
          q('.hero-title span'),
          { opacity: 0, y: 40, filter: 'blur(8px)', duration: 1, stagger: 0.06 },
          '-=0.5',
        )
        .from(
          q('.hero-sub'),
          { opacity: 0, y: 24, filter: 'blur(6px)', duration: 0.9 },
          '-=0.65',
        )
        .from(
          q('.hero-cta .btn'),
          { opacity: 0, y: 20, duration: 0.65, stagger: 0.08 },
          '-=0.55',
        )
        .from(
          q('.hero-visual'),
          { opacity: 0, y: 32, scale: 0.98, duration: 1.1, ease: 'expo.out' },
          '-=0.9',
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
        <div className="hero__content">
          <p className="hero-eyebrow">Software Engineer · Flutter</p>
          <h1 className="hero-title">
            <span>Building Scalable Mobile</span>
            <span>Experiences with Flutter</span>
            <span className="hero-title__accent">&amp; Modern Technologies</span>
          </h1>
          <p className="hero-sub text-secondary">
            Focused on building polished, scalable, and high-performance applications with
            modern engineering principles.
          </p>
          <div className="hero-cta">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero__visual-wrap">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
