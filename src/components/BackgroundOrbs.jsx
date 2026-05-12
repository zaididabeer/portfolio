import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function BackgroundOrbs() {
  const wrapRef = useRef(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return undefined

    const orbs = wrap.querySelectorAll('.orb')
    const ctx = gsap.context(() => {
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? 28 : -22,
          x: i % 2 === 0 ? -12 : 14,
          duration: 10 + i * 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className="bg-orbs" aria-hidden>
      <div className="orb orb--1" />
      <div className="orb orb--2" />
      <div className="orb orb--3" />
      <div className="bg-orbs__grid" />
    </div>
  )
}
