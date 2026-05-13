import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const LAYERS = [
  { label: 'UI Layer', tech: 'Flutter 3.x', sub: 'Widgets · Animations', color: '#019dcb' },
  { label: 'State', tech: 'Riverpod 2.0', sub: 'Async · Reactive', color: '#7dd3fc' },
  { label: 'API Layer', tech: 'REST · GraphQL', sub: 'Interceptors · Cache', color: '#a78bfa' },
  { label: 'Backend', tech: 'Node · Firebase', sub: 'Auth · Realtime DB', color: '#34d399' },
  { label: 'CI / CD', tech: 'GitHub Actions', sub: 'Auto-deploy · Tests', color: '#fbbf24' },
]

const PERF_BARS = [88, 96, 92, 100, 96, 100, 98, 96, 100, 100]

export function HeroVisual() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      // Gentle float on the 3 floating cards
      root.querySelectorAll('.hv-float').forEach((el, i) => {
        gsap.to(el, {
          y: -(8 + i * 5),
          duration: 3.8 + i * 0.85,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.38,
        })
      })

      // Background glow breathe
      const glow = root.querySelector('.hv-glow')
      if (glow) {
        gsap.to(glow, {
          opacity: 0.7,
          scale: 1.14,
          duration: 3.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }

      // Architecture layers stagger in
      gsap.from(root.querySelectorAll('.hv-layer'), {
        opacity: 0,
        x: 14,
        duration: 0.5,
        stagger: 0.075,
        ease: 'power2.out',
        delay: 1.1,
      })

      // Layer status dots pulse
      root.querySelectorAll('.hv-layer__dot').forEach((dot, i) => {
        gsap.to(dot, {
          scale: 1.4,
          opacity: 0.7,
          duration: 1.9 + i * 0.28,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.42,
        })
      })

      // Build progress bar fills in
      const barInner = root.querySelector('.hv-build__fill')
      if (barInner) {
        gsap.fromTo(
          barInner,
          { width: '0%' },
          { width: '87%', duration: 2.2, ease: 'power2.out', delay: 1.6 },
        )
      }

      // Perf bars stagger in from bottom
      gsap.from(root.querySelectorAll('.hv-perf__bar'), {
        scaleY: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'back.out(1.4)',
        transformOrigin: 'bottom',
        delay: 1.3,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="hv-root">
      {/* ── Background ambient glow ── */}
      <div className="hv-glow" aria-hidden />

      {/* ── Main architecture frame ── */}
      <div className="hv-frame glass">
        {/* Chrome bar */}
        <div className="hv-chrome">
          <span className="hv-dot hv-dot--red" />
          <span className="hv-dot hv-dot--yellow" />
          <span className="hv-dot hv-dot--green" />
          <span className="hv-chrome__tag">product.dart · flutter</span>
        </div>

        {/* Section header */}
        <div className="hv-section-head">
          <span className="hv-section-head__label">PRODUCT STACK</span>
          <span className="hv-section-head__live">
            <span className="hv-live-dot" aria-hidden />
            LIVE
          </span>
        </div>

        {/* Architecture layers */}
        <div className="hv-layers">
          {LAYERS.map((layer) => (
            <div key={layer.label} className="hv-layer">
              <span
                className="hv-layer__dot"
                style={{
                  background: layer.color,
                  boxShadow: `0 0 7px ${layer.color}90`,
                }}
                aria-hidden
              />
              <div className="hv-layer__info">
                <span className="hv-layer__name">{layer.label}</span>
                <span className="hv-layer__sub">{layer.sub}</span>
              </div>
              <span className="hv-layer__tech">{layer.tech}</span>
            </div>
          ))}
        </div>

        {/* Footer: platforms + build bar */}
        <div className="hv-frame-footer">
          <div className="hv-platforms">
            {['iOS', 'Android', 'Web'].map((p) => (
              <span key={p} className="hv-platform-badge">
                {p}
              </span>
            ))}
          </div>
          <div className="hv-build">
            <span className="hv-build__label">Build</span>
            <div className="hv-build__bar">
              <div className="hv-build__fill" />
            </div>
            <span className="hv-build__pct">87%</span>
          </div>
        </div>
      </div>

      {/* ── Float 1: Build passed ── */}
      <div className="hv-float hv-card hv-card--build glass">
        <span className="hv-card__indicator hv-card__indicator--green" aria-hidden />
        <div>
          <span className="hv-card__title">Build passed</span>
          <span className="hv-card__sub">CI · 47 tests · 2.3s</span>
        </div>
      </div>

      {/* ── Float 2: Frame rate mini chart ── */}
      <div className="hv-float hv-card hv-card--perf glass">
        <span className="hv-card__micro-label">Frame Rate</span>
        <div className="hv-perf-bars">
          {PERF_BARS.map((v, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="hv-perf__bar"
              style={{
                height: `${(v / 100) * 100}%`,
                opacity: v >= 96 ? 1 : 0.5,
              }}
            />
          ))}
        </div>
        <span className="hv-card__value">60fps</span>
      </div>

      {/* ── Float 3: P95 latency metric ── */}
      <div className="hv-float hv-card hv-card--metric glass">
        <span className="hv-card__micro-label">P95 Response</span>
        <strong className="hv-metric__num">112ms</strong>
        <span className="hv-metric__delta">↓ 18% vs baseline</span>
      </div>
    </div>
  )
}
