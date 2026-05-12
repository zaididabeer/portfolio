import { useRef } from 'react'
import { useGsapReveal } from '../../hooks/useGsapReveal'

export function AboutPreview() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section ref={ref} id="about" className="section about-preview">
      <div className="container about-preview__grid">
        <div data-reveal className="about-preview__intro">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Product-grade engineering for mobile platforms.</h2>
        </div>
        <div data-reveal className="about-preview__card glass">
          <p className="text-secondary about-preview__text">
            I partner with teams to design, build, and harden Flutter applications end-to-end:
            architecture, state management, integrations, and performance at scale. The goal is
            always the same — interfaces that feel instant, codebases that stay maintainable, and
            releases that teams can trust.
          </p>
          <ul className="about-preview__list text-muted">
            <li>Composable architecture &amp; testing discipline</li>
            <li>Firebase &amp; REST backends wired for real-world edge cases</li>
            <li>Design systems implemented with pixel fidelity</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
