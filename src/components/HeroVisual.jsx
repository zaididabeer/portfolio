import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroVisual() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const cards = root.querySelectorAll('.hero-visual__float')
    const ctx = gsap.context(() => {
      cards.forEach((el, i) => {
        gsap.to(el, {
          y: -10 - i * 4,
          duration: 4 + i * 0.6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="hero-visual">
      <div className="hero-visual__frame glass">
        <div className="hero-visual__chrome">
          <span className="hero-visual__dot" />
          <span className="hero-visual__dot" />
          <span className="hero-visual__dot" />
          <span className="hero-visual__title">flutter / production</span>
        </div>
        <div className="hero-visual__body">
          <div className="hero-visual__sidebar" />
          <div className="hero-visual__main">
            <div className="hero-visual__row hero-visual__row--accent" />
            <div className="hero-visual__row" />
            <div className="hero-visual__row hero-visual__row--short" />
            <div className="hero-visual__chart">
              <div className="hero-visual__bar" style={{ height: '45%' }} />
              <div className="hero-visual__bar" style={{ height: '72%' }} />
              <div className="hero-visual__bar" style={{ height: '58%' }} />
              <div className="hero-visual__bar" style={{ height: '88%' }} />
              <div className="hero-visual__bar" style={{ height: '64%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-visual__float hero-visual__card glass hero-visual__card--metrics">
        <span className="hero-visual__label">Build</span>
        <strong className="hero-visual__value">Release</strong>
        <span className="hero-visual__meta">CI · Test · Ship</span>
      </div>
      <div className="hero-visual__float hero-visual__card glass hero-visual__card--flutter">
        <span className="hero-visual__flutter-logo" aria-hidden />
        <span className="hero-visual__flutter-text">Flutter</span>
      </div>
      <div className="hero-visual__glow" aria-hidden />
    </div>
  )
}
