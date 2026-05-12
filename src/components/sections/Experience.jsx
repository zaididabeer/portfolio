import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ROLES = [
  {
    period: '2022 — Present',
    title: 'Lead Mobile Engineer',
    company: 'Product Studio',
    detail:
      'Owns Flutter architecture, release trains, and performance budgets for a multi-tenant SaaS suite.',
  },
  {
    period: '2019 — 2022',
    title: 'Senior Flutter Developer',
    company: 'Fintech Collective',
    detail:
      'Shipped secure payments and onboarding flows with Firebase, custom animations, and analytics instrumentation.',
  },
  {
    period: '2017 — 2019',
    title: 'Mobile Software Engineer',
    company: 'Agency Lab',
    detail:
      'Delivered cross-platform apps for startups — from discovery workshops to App Store submissions.',
  },
]

export function Experience() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll('.timeline__item')
      gsap.from(items, {
        opacity: 0,
        x: -28,
        filter: 'blur(6px)',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          once: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="experience" className="section experience">
      <div className="container experience__grid">
        <header className="experience__header">
          <p className="section-eyebrow">Trajectory</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-lead text-secondary">
            A track record of owning outcomes — from architecture decisions to polished releases.
          </p>
        </header>
        <ol className="timeline">
          {ROLES.map((role) => (
            <li key={role.title} className="timeline__item glass">
              <span className="timeline__dot" aria-hidden />
              <span className="timeline__period text-muted">{role.period}</span>
              <h3 className="timeline__title">{role.title}</h3>
              <p className="timeline__company">{role.company}</p>
              <p className="timeline__detail text-secondary">{role.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
