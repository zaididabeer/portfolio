import { useRef } from 'react'
import { useGsapReveal } from '../../hooks/useGsapReveal'

const STATS = [
  { value: '6+', label: 'Years shipping mobile' },
  { value: '40+', label: 'Production releases' },
  { value: '15+', label: 'Cross-functional teams' },
  { value: '<120ms', label: 'P95 interaction targets' },
]

export function StatsStrip() {
  const ref = useRef(null)
  useGsapReveal(ref, { selector: '[data-reveal]', stagger: 0.1, y: 24 })

  return (
    <section ref={ref} className="section section--tight stats-strip" aria-label="Highlights">
      <div className="container">
        <div className="stats-strip__grid glass">
          {STATS.map((s) => (
            <div key={s.label} data-reveal className="stats-strip__item">
              <span className="stats-strip__value">{s.value}</span>
              <span className="stats-strip__label text-muted">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
