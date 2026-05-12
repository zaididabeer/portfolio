import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    title: 'Flutter App Development',
    description: 'End-to-end product builds with scalable architecture and tasteful motion.',
    span: 'span-2',
  },
  {
    title: 'Cross Platform Apps',
    description: 'One codebase, native-grade experiences on iOS and Android.',
    span: '',
  },
  {
    title: 'Firebase Integration',
    description: 'Auth, Firestore, Cloud Functions, and remote config done right.',
    span: '',
  },
  {
    title: 'REST API Integration',
    description: 'Resilient networking layers, caching, and error recovery patterns.',
    span: 'span-2-row',
  },
  {
    title: 'UI Implementation',
    description: 'Figma to Flutter with spacing systems, tokens, and accessibility in mind.',
    span: '',
  },
  {
    title: 'Performance Optimization',
    description: 'Profiling, jank removal, and frame budgets for demanding interfaces.',
    span: 'tall',
  },
]

export function Services() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      const cards = root.querySelectorAll('.service-card')
      gsap.from(cards, {
        opacity: 0,
        y: 36,
        duration: 0.85,
        ease: 'expo.out',
        stagger: { each: 0.06, from: 'start' },
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="section services">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Engagements</p>
          <h2 className="section-title">Services</h2>
          <p className="section-lead text-secondary">
            Modular support across the product lifecycle — from discovery to ongoing optimization.
          </p>
        </header>
        <div className="bento bento--services">
          {SERVICES.map((s) => (
            <article key={s.title} className={`service-card glass ${s.span}`}>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc text-secondary">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
