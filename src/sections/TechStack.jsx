import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Category SVG icons ── */
const IconMobile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)
const IconFrontend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconBackend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
)
const IconTools = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const STACK = [
  {
    category: 'Mobile',
    label: 'Mobile Development',
    description: 'Cross-platform apps for iOS & Android with native performance.',
    accent: '#019dcb',
    accentBg: 'rgba(1, 157, 203, 0.1)',
    accentBorder: 'rgba(1, 157, 203, 0.25)',
    Icon: IconMobile,
    items: [
      { name: 'Flutter', level: 5, color: '#54c5f8' },
      { name: 'React Native', level: 3, color: '#61dafb' },
      { name: 'Dart', level: 5, color: '#0175c2' },
    ],
    className: '',
  },
  {
    category: 'Frontend',
    label: 'Frontend',
    description: 'Responsive, performant UIs with the React ecosystem.',
    accent: '#7dd3fc',
    accentBg: 'rgba(125, 211, 252, 0.08)',
    accentBorder: 'rgba(125, 211, 252, 0.2)',
    Icon: IconFrontend,
    items: [
      { name: 'React', level: 3, color: '#61dafb' },
      { name: 'Tailwind CSS', level: 4, color: '#38bdf8' },
      { name: 'TypeScript', level: 2, color: '#818cf8' },
    ],
    className: '',
  },
  {
    category: 'Backend',
    label: 'Backend',
    description: 'Scalable APIs and real-time cloud services.',
    accent: '#34d399',
    accentBg: 'rgba(52, 211, 153, 0.08)',
    accentBorder: 'rgba(52, 211, 153, 0.2)',
    Icon: IconBackend,
    items: [
      { name: 'Node.js', level: 4, color: '#86efac' },
      { name: 'Firebase', level: 5, color: '#fbbf24' },
      { name: 'REST APIs', level: 5, color: '#a78bfa' },
    ],
    className: '',
  },
  {
    category: 'Tools',
    label: 'Tools & Platforms',
    description: 'Full mobile toolchain — from design handoff to store deployment.',
    accent: '#a78bfa',
    accentBg: 'rgba(167, 139, 250, 0.08)',
    accentBorder: 'rgba(167, 139, 250, 0.2)',
    Icon: IconTools,
    items: [
      { name: 'Git & GitHub', level: 5, color: '#f97316' },
      { name: 'Android Studio', level: 5, color: '#3ddc84' },
      { name: 'Xcode', level: 4, color: '#147efb' },
      { name: 'Figma', level: 4, color: '#fb7185' },
      { name: 'Postman', level: 4, color: '#ef6c00' },
    ],
    className: '',
  },
]

function ProficiencyDots({ level, color }) {
  return (
    <span className="ts-dots">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="ts-dot"
          style={i < level ? { background: color, boxShadow: `0 0 5px ${color}88` } : {}}
          data-filled={i < level}
        />
      ))}
    </span>
  )
}

function StackCell({ block }) {
  const { Icon, accent, accentBg, accentBorder, label, description, items, className } = block
  return (
    <article
      className={`bento-cell ts-cell glass ${className}`}
      style={{ '--cell-accent': accent, '--cell-bg': accentBg, '--cell-border': accentBorder }}
    >
      <div className="ts-cell__head">
        <div className="ts-cell__icon-wrap">
          <span className="ts-cell__icon" style={{ color: accent, background: accentBg, borderColor: accentBorder }}>
            <Icon />
          </span>
          <div>
            <p className="ts-cell__eyebrow">{block.category}</p>
            <h3 className="ts-cell__title">{label}</h3>
          </div>
        </div>
        <span className="ts-cell__count">{items.length}</span>
      </div>

      <p className="ts-cell__desc">{description}</p>

      <ul className="ts-cell__items">
        {items.map((item) => (
          <li key={item.name} className="ts-item">
            <span className="ts-item__dot" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}66` }} />
            <span className="ts-item__name">{item.name}</span>
            <ProficiencyDots level={item.level} color={item.color} />
          </li>
        ))}
      </ul>

      <div className="ts-cell__glow" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${accentBg}, transparent)` }} />
    </article>
  )
}

export function TechStack() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const ctx = gsap.context((self) => {
      const cells = root.querySelectorAll('.ts-cell')
      gsap.from(cells, {
        opacity: 0,
        y: 48,
        filter: 'blur(10px)',
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
      })

      gsap.from(root.querySelectorAll('.ts-item'), {
        opacity: 0,
        x: -12,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.04,
        delay: 0.35,
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
      })

      const onEnter = (e) => {
        const cell = e.currentTarget
        gsap.to(cell, {
          y: -5,
          scale: 1.015,
          duration: 0.45,
          ease: 'power3.out',
        })
        gsap.to(cell.querySelector('.ts-cell__glow'), {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
      const onLeave = (e) => {
        const cell = e.currentTarget
        gsap.to(cell, {
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: 'power3.out',
        })
        gsap.to(cell.querySelector('.ts-cell__glow'), {
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
        })
      }
      cells.forEach((cell) => {
        cell.addEventListener('mouseenter', onEnter)
        cell.addEventListener('mouseleave', onLeave)
      })
      self.add(() => {
        cells.forEach((cell) => {
          cell.removeEventListener('mouseenter', onEnter)
          cell.removeEventListener('mouseleave', onLeave)
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section tech-stack">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Tech stack</h2>
          <p className="section-lead text-secondary">
            A focused toolkit for shipping cross-platform products without compromise.
          </p>
        </header>
        <div className="bento bento--stack">
          {STACK.map((block) => (
            <StackCell key={block.category} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}
