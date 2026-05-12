import { useRef } from 'react'
import { useGsapReveal } from '../../hooks/useGsapReveal'

const QUOTES = [
  {
    quote:
      'Dabeer elevated our mobile architecture — releases became predictable and the app finally feels “enterprise fast”.',
    name: 'Alex Rivera',
    role: 'VP Engineering, FinFlow',
  },
  {
    quote:
      'Rare mix of product taste and technical depth. He ships, documents, and leaves the codebase better than he found it.',
    name: 'Morgan Lee',
    role: 'Product Lead, Pulse Health',
  },
  {
    quote:
      'Our field teams lived inside the app daily. Performance and offline behavior were non-negotiable — he delivered both.',
    name: 'Jordan Patel',
    role: 'Operations Director, Atlas',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  useGsapReveal(ref, { stagger: 0.12, y: 32 })

  return (
    <section ref={ref} className="section testimonials">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Proof</p>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-lead text-secondary">
            Trusted by teams who care about craft, velocity, and long-term maintainability.
          </p>
        </header>
        <div className="testimonials__grid">
          {QUOTES.map((t) => (
            <figure key={t.name} data-reveal className="testimonial glass">
              <blockquote className="testimonial__quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial__name">{t.name}</span>
                <span className="testimonial__role text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
