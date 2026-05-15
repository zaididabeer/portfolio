import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

export function CTA() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section ref={ref} id="contact" className="section cta">
      <div className="container">
        <div data-reveal className="cta__card glass">
          <div className="cta__copy">
            <p className="section-eyebrow">Let&apos;s build</p>
            <h2 className="cta__title">Ready for a product-grade Flutter engagement?</h2>
            <p className="text-secondary">
              Share your roadmap, constraints, and success metrics — I&apos;ll respond with a clear
              plan of attack.
            </p>
          </div>
          <div className="cta__actions">
            <a className="btn btn--primary" href="mailto:dabeerzaidi10@gmail.com">
              Start a conversation
            </a>
            <a className="btn btn--ghost" href="#projects">
              Explore work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
