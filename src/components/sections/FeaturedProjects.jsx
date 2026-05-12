import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: 'FinFlow',
    description:
      'Consumer banking experience with offline-first sync, biometric flows, and modular feature delivery across regions.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
    stack: ['Flutter', 'Firebase', 'REST'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Pulse Health',
    description:
      'Telehealth companion for clinicians and patients — real-time messaging, visit scheduling, and resilient media pipelines.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
    stack: ['Flutter', 'Node.js', 'WebSockets'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Atlas Field Ops',
    description:
      'Logistics coordination for distributed teams — mapping, task routing, and low-connectivity performance tuning.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    stack: ['Flutter', 'Maps', 'REST'],
    demo: '#',
    github: '#',
  },
]

export function FeaturedProjects() {
  const listRef = useRef(null)

  useLayoutEffect(() => {
    const root = listRef.current
    if (!root) return undefined

    const ctx = gsap.context((self) => {
      const cards = root.querySelectorAll('[data-project-card]')
      cards.forEach((card) => {
        const media = card.querySelector('.project-row__media img')
        gsap.from(card, {
          opacity: 0,
          y: 48,
          filter: 'blur(8px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
        })
        if (media) {
          gsap.to(media, {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
        const onEnter = () => {
          gsap.to(card, { y: -6, duration: 0.55, ease: 'power3.out' })
        }
        const onLeave = () => {
          gsap.to(card, { y: 0, duration: 0.65, ease: 'power3.out' })
        }
        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        self.add(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="section featured-projects">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-lead text-secondary">
            Cinematic product surfaces engineered for clarity, speed, and scale.
          </p>
        </header>
        <div ref={listRef} className="featured-projects__list">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.title} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, reversed }) {
  return (
    <article
      className={`project-row glass ${reversed ? 'project-row--reverse' : ''}`}
      data-project-card
    >
      <a className="project-row__media" href={project.demo} aria-label={`${project.title} preview`}>
        <img src={project.image} alt="" loading="lazy" width={700} height={440} />
        <span className="project-row__shine" aria-hidden />
      </a>
      <div className="project-row__body">
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__desc text-secondary">{project.description}</p>
        <ul className="project-row__stack">
          {project.stack.map((t) => (
            <li key={t} className="pill pill--sm">
              {t}
            </li>
          ))}
        </ul>
        <div className="project-row__actions">
          <a className="btn btn--primary btn--sm" href={project.demo}>
            Live demo
          </a>
          <a className="btn btn--ghost btn--sm" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
