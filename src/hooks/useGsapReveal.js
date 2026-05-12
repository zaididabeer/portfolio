import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-triggered fade-up + optional blur for children matching selector inside scopeRef.
 */
export function useGsapReveal(scopeRef, options = {}) {
  const {
    selector = '[data-reveal]',
    start = 'top 88%',
    stagger = 0.08,
    y = 36,
    duration = 1,
    ease = 'power3.out',
    blur = true,
  } = options

  useLayoutEffect(() => {
    const root = scopeRef.current
    if (!root) return undefined

    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll(selector)
      if (!targets.length) return

      gsap.set(targets, {
        opacity: 0,
        y,
        filter: blur ? 'blur(10px)' : 'none',
      })

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: blur ? 'blur(0px)' : 'none',
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          once: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [scopeRef, selector, start, stagger, y, duration, ease, blur])
}
