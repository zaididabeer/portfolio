import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STACK = [
  {
    category: 'Mobile Development',
    items: ['Flutter', 'React Native'],
    className: 'bento-cell--wide',
  },
  {
    category: 'Frontend',
    items: ['React', 'Tailwind'],
    className: '',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Firebase'],
    className: '',
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Figma', 'Postman'],
    className: 'bento-cell--tall',
  },
]

export function TechStack() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const ctx = gsap.context((self) => {
      const cells = root.querySelectorAll('.bento-cell')
      gsap.from(cells, {
        opacity: 0,
        y: 40,
        filter: 'blur(8px)',
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          once: true,
        },
      })

      const onEnter = (e) => {
        gsap.to(e.currentTarget, {
          y: -4,
          scale: 1.01,
          boxShadow: '0 24px 48px rgba(1, 157, 203, 0.12)',
          duration: 0.45,
          ease: 'power3.out',
        })
      }
      const onLeave = (e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          scale: 1,
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          duration: 0.55,
          ease: 'power3.out',
        })
      }
      cells.forEach((cell) => {
        cell.addEventListener('mouseenter', onEnter)
        cell.addEventListener('mouseleave', onLeave)
      })
      self.add(() => {
        cells.forEach((cell) => {
          cell.removeEventListener('mouseenter', onEnter)
          cell.removeEventListener('mouseleave', onLeave)
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section tech-stack">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Tech stack</h2>
          <p className="section-lead text-secondary">
            A focused toolkit for shipping cross-platform products without compromise.
          </p>
        </header>
        <div className="bento bento--stack">
          {STACK.map((block) => (
            <article key={block.category} className={`bento-cell glass ${block.className}`}>
              <h3 className="bento-cell__title">{block.category}</h3>
              <ul className="bento-cell__tags">
                {block.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
