import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

const SPECIALTIES = [
  { label: 'Flutter' },
  { label: 'Cross Platform Engineer' },
  { label: 'React Native' },
  { label: 'Backend APIs' },
  { label: 'Node.js' },
  { label: 'Firebase Systems' },
  { label: 'Modern UI Engineering' },
]

export function StatsStrip() {
  const ref = useRef(null)
  useGsapReveal(ref, { selector: '[data-reveal]', stagger: 0.08, y: 16 })

  return (
    <section ref={ref} className="section section--tight stats-strip" aria-label="Specialties">
      <div className="container">
        <div className="stats-strip__track glass">
          {SPECIALTIES.map((s, i) => (
            <div key={s.label} data-reveal className="stats-strip__item">
              {i > 0 && <span className="stats-strip__sep" aria-hidden />}
              <span className="stats-strip__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
