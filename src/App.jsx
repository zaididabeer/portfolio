import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BackgroundOrbs } from './components/BackgroundOrbs'
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { StatsStrip } from './sections/StatsStrip'
import { BentoGrid } from './sections/BentoGrid'
import { AboutPreview } from './sections/AboutPreview'
import { TechStack } from './sections/TechStack'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'
import './styles/portfolio.css'

gsap.registerPlugin(ScrollTrigger)

function PageShell() {
  const mainRef = useRef(null)

  useLayoutEffect(() => {
    const main = mainRef.current
    if (!main) return undefined

    const ctx = gsap.context(() => {
      gsap.from(main, {
        opacity: 0,
        y: 14,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
      })
    }, main)

    const t = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => {
      cancelAnimationFrame(t)
      ctx.revert()
    }
  }, [])

  return (
    <div className="page">
      <BackgroundOrbs />
      <Navbar />
      <main ref={mainRef} className="page-main">
        <HeroSection />
        <StatsStrip />
        <BentoGrid />
        <AboutPreview />
        <TechStack />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default function App() {
  return <PageShell />
}
