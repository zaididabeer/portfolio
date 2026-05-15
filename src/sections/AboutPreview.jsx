import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IconGauge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10"/>
    <path d="M12 6v6l4 2"/>
    <path d="M22 12a10 10 0 0 0-3.9-7.9"/>
  </svg>
)

const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const PILLARS = [
  {
    Icon: IconGauge,
    title: 'Performance First',
    desc: 'Smooth 60fps animations and instant loads are the baseline, not a bonus. Every architectural decision is benchmarked against its runtime cost.',
    accent: '#019dcb',
    accentBg: 'rgba(1, 157, 203, 0.09)',
    accentBorder: 'rgba(1, 157, 203, 0.22)',
  },
  {
    Icon: IconLayers,
    title: 'Clean Architecture',
    desc: 'Code that survives six months of feature additions without collapse. Clean separation of concerns, testable logic, and patterns that scale with the product.',
    accent: '#a78bfa',
    accentBg: 'rgba(167, 139, 250, 0.09)',
    accentBorder: 'rgba(167, 139, 250, 0.22)',
  },
  {
    Icon: IconTarget,
    title: 'Product Mindset',
    desc: 'I write code to solve real user problems. UX quality and engineering quality are the same concern — the best products are where the two become indistinguishable.',
    accent: '#34d399',
    accentBg: 'rgba(52, 211, 153, 0.09)',
    accentBorder: 'rgba(52, 211, 153, 0.22)',
  },
]

const SPECIALIZATIONS = [
  'Flutter & Dart',
  'React Native',
  'Cross-Platform Architecture',
  'State Management',
  'Firebase',
  'UI/UX Implementation',
  'REST API Integration',
  'App Store Deployment',
]

export function AboutPreview() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          once: true,
        },
      })

      tl.from(root.querySelectorAll('.about__fade-up'), {
        opacity: 0,
        y: 36,
        filter: 'blur(8px)',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      })
      .from(root.querySelectorAll('.about__pillar'), {
        opacity: 0,
        y: 28,
        filter: 'blur(6px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
      }, '-=0.5')
      .from(root.querySelectorAll('.about__spec-tag'), {
        opacity: 0,
        scale: 0.88,
        duration: 0.45,
        ease: 'back.out(1.4)',
        stagger: 0.04,
      }, '-=0.4')

      root.querySelectorAll('.about__pillar').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -4, scale: 1.015, duration: 0.4, ease: 'power3.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.5, ease: 'power3.out' })
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="section about">
      <div className="container">

        {/* ── Header ── */}
        <div className="about__header about__fade-up">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title about__title">
            Engineering with intent.<br />
            <span className="about__title-sub">Not just shipping code.</span>
          </h2>
        </div>

        {/* ── Lead paragraph ── */}
        <p className="about__lead about__fade-up">
          I'm a Software Engineer specialized in Flutter and cross-platform mobile development —
          focused on building polished, scalable, high-performance digital products. I care about
          the craft of software the same way a designer cares about pixels: every detail matters,
          and quality is never accidental.
        </p>

        {/* ── Philosophy pillars ── */}
        <div className="about__pillars">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="about__pillar glass"
              style={{ '--p-accent': p.accent, '--p-bg': p.accentBg, '--p-border': p.accentBorder }}
            >
              <span
                className="about__pillar-icon"
                style={{ color: p.accent, background: p.accentBg, borderColor: p.accentBorder }}
              >
                <p.Icon />
              </span>
              <h3 className="about__pillar-title">{p.title}</h3>
              <p className="about__pillar-desc">{p.desc}</p>
              <div className="about__pillar-glow" />
            </article>
          ))}
        </div>

        {/* ── Specialization + Current Focus ── */}
        <div className="about__meta">

          <div className="about__meta-block about__fade-up">
            <p className="about__meta-label">Specialization</p>
            <ul className="about__spec-tags">
              {SPECIALIZATIONS.map((s) => (
                <li key={s} className="about__spec-tag pill pill--sm">{s}</li>
              ))}
            </ul>
          </div>

          <div className="about__meta-block glass about__focus about__fade-up">
            <p className="about__meta-label">Current Focus</p>
            <p className="about__focus-text">
              Deepening my understanding of Flutter's rendering internals and building
              AI-powered mobile experiences. Currently focused on shipping production apps
              that push what cross-platform development is truly capable of — proving that
              "built with Flutter" and "feels native" are the same sentence.
            </p>
            <div className="about__focus-indicator">
              <span className="about__focus-dot" />
              <span className="about__focus-status">Actively building</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
